import type { ContactFormValues } from "@/lib/contact-schema";

const telegramApiBase = "https://api.telegram.org";

function readOptionalEnv(name: string) {
  return process.env[name]?.trim() || null;
}

function buildTelegramConfig() {
  const botToken = readOptionalEnv("TELEGRAM_BOT_TOKEN");
  const chatId = readOptionalEnv("TELEGRAM_CHAT_ID");
  const threadId = readOptionalEnv("TELEGRAM_THREAD_ID");
  const parsedThreadId = threadId ? Number(threadId) : null;

  if (!botToken || !chatId) {
    return null;
  }

  return {
    botToken,
    chatId,
    threadId:
      parsedThreadId !== null && Number.isFinite(parsedThreadId)
        ? parsedThreadId
        : null,
  };
}

function buildTelegramMessage(
  submission: ContactFormValues,
  submittedAt: string,
) {
  const budget = submission.budget || "Not provided";
  const timeline = submission.timeline || "Not provided";
  const company = submission.company || "Not provided";

  return [
    "New project brief submitted",
    "",
    `Submitted at: ${submittedAt}`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${company}`,
    `Project type: ${submission.projectType}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
    "",
    "Project brief:",
    submission.message,
  ].join("\n");
}

function splitMessage(message: string, maxLength = 3500) {
  if (message.length <= maxLength) {
    return [message];
  }

  const chunks: string[] = [];
  let remaining = message;

  while (remaining.length > maxLength) {
    const slice = remaining.slice(0, maxLength);
    const breakIndex = Math.max(slice.lastIndexOf("\n"), slice.lastIndexOf(" "));
    const cutIndex = breakIndex > maxLength * 0.6 ? breakIndex : maxLength;

    chunks.push(remaining.slice(0, cutIndex).trimEnd());
    remaining = remaining.slice(cutIndex).trimStart();
  }

  if (remaining.length > 0) {
    chunks.push(remaining);
  }

  return chunks;
}

export function isTelegramConfigured() {
  return buildTelegramConfig() !== null;
}

export async function sendContactSubmissionTelegram(
  submission: ContactFormValues,
  submittedAt: string,
) {
  const config = buildTelegramConfig();

  if (!config) {
    throw new Error("Telegram delivery is not configured.");
  }

  const message = buildTelegramMessage(submission, submittedAt);
  const chunks = splitMessage(message);

  for (const chunk of chunks) {
    const response = await fetch(
      `${telegramApiBase}/bot${config.botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: config.chatId,
          text: chunk,
          ...(config.threadId ? { message_thread_id: config.threadId } : {}),
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Telegram delivery failed with status ${response.status}: ${errorText}`,
      );
    }
  }

  return {
    chatId: config.chatId,
  };
}
