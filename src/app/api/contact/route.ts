import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";
import {
  isContactEmailConfigured,
  sendContactSubmissionEmail,
} from "@/lib/contact-email";
import {
  isTelegramConfigured,
  sendContactSubmissionTelegram,
} from "@/lib/contact-telegram";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;
const submissionLog = new Map<string, number[]>();

function getClientAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || null;
  }

  return request.headers.get("x-real-ip")?.trim() || null;
}

function isRateLimited(clientAddress: string, now: number) {
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recentSubmissions = (submissionLog.get(clientAddress) || []).filter(
    (timestamp) => timestamp > windowStart,
  );

  if (recentSubmissions.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionLog.set(clientAddress, recentSubmissions);
    return true;
  }

  recentSubmissions.push(now);
  submissionLog.set(clientAddress, recentSubmissions);
  return false;
}

export async function POST(request: Request) {
  try {
    const clientAddress = getClientAddress(request);

    if (clientAddress && isRateLimited(clientAddress, Date.now())) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many messages were sent from this connection. Please wait a few minutes and try again.",
        },
        { status: 429 },
      );
    }

    const json = (await request.json()) as Record<string, unknown>;
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please fix the highlighted fields and try again.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim() || null;
    const canSendTelegram = isTelegramConfigured();
    const canSendEmail = isContactEmailConfigured();

    if (!canSendTelegram && !canSendEmail && !webhookUrl) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Contact delivery is not configured on the server yet. Add Telegram, SMTP, or webhook settings before using the form.",
        },
        { status: 500 },
      );
    }

    const payload = {
      ...parsed.data,
      submittedAt,
    };
    let deliveredVia: "telegram" | "email" | "webhook" | null = null;

    if (canSendTelegram) {
      try {
        await sendContactSubmissionTelegram(parsed.data, submittedAt);
        deliveredVia = "telegram";
      } catch (error) {
        console.error("[contact-telegram-delivery-error]", error);

        if (!canSendEmail) {
          throw error;
        }

        await sendContactSubmissionEmail(parsed.data, submittedAt);
        deliveredVia = "email";
      }
    } else if (canSendEmail) {
      await sendContactSubmissionEmail(parsed.data, submittedAt);
      deliveredVia = "email";
    }

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        const webhookErrorText = await webhookResponse.text();

        if (!deliveredVia) {
          return NextResponse.json(
            {
              ok: false,
              message:
                "We couldn't forward your message to the configured webhook.",
            },
            { status: 502 },
          );
        }

        console.error("[contact-webhook-forwarding-error]", {
          status: webhookResponse.status,
          body: webhookErrorText,
        });

        return NextResponse.json({
          ok: true,
          warning:
            "The message was delivered, but webhook forwarding failed afterward.",
        });
      }

      if (!deliveredVia) {
        deliveredVia = "webhook";
      }
    }

    return NextResponse.json({ ok: true, deliveredVia });
  } catch (error) {
    console.error("[contact-delivery-error]", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't send your message. Check the delivery settings and try again.",
      },
      { status: 500 },
    );
  }
}
