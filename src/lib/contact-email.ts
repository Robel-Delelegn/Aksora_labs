import nodemailer from "nodemailer";

import type { ContactFormValues } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-data";

const defaultRecipientEmail = siteConfig.email;
const defaultFromName = "Aksora Labs";

let cachedTransporter: nodemailer.Transporter | null = null;
let cachedTransportKey: string | null = null;

function readRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  return value ? value : null;
}

function readOptionalEnv(name: string) {
  return process.env[name]?.trim() || null;
}

function parsePort(value: string | null) {
  const parsed = Number(value ?? "465");

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 465;
}

function parseSecure(value: string | null, port: number) {
  if (!value) {
    return port === 465;
  }

  return value === "true" || value === "1" || value === "yes";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildMailConfig() {
  const host = readRequiredEnv("SMTP_HOST");
  const user = readRequiredEnv("SMTP_USER");
  const pass = readRequiredEnv("SMTP_PASS");

  if (!host || !user || !pass) {
    return null;
  }

  const port = parsePort(readOptionalEnv("SMTP_PORT"));
  const secure = parseSecure(readOptionalEnv("SMTP_SECURE"), port);
  const fromEmail = readOptionalEnv("CONTACT_FROM_EMAIL") || user;
  const fromName = readOptionalEnv("CONTACT_FROM_NAME") || defaultFromName;
  const recipientEmail =
    readOptionalEnv("CONTACT_RECIPIENT_EMAIL") || defaultRecipientEmail;

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    fromEmail,
    fromName,
    recipientEmail,
  };
}

function getTransporter(config: NonNullable<ReturnType<typeof buildMailConfig>>) {
  const transportKey = JSON.stringify({
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user,
    pass: config.auth.pass,
  });

  if (!cachedTransporter || cachedTransportKey !== transportKey) {
    cachedTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    });
    cachedTransportKey = transportKey;
  }

  return cachedTransporter;
}

export function getContactRecipientEmail() {
  return readOptionalEnv("CONTACT_RECIPIENT_EMAIL") || defaultRecipientEmail;
}

export function isContactEmailConfigured() {
  return buildMailConfig() !== null;
}

export async function sendContactSubmissionEmail(
  submission: ContactFormValues,
  submittedAt: string,
) {
  const config = buildMailConfig();

  if (!config) {
    throw new Error("SMTP delivery is not configured.");
  }

  const transporter = getTransporter(config);
  const subject = `[Aksora Labs] ${submission.projectType} brief from ${submission.name}`;
  const budget = submission.budget || "Not provided";
  const timeline = submission.timeline || "Not provided";
  const company = submission.company || "Not provided";

  const text = [
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

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171411;">
      <h2 style="margin: 0 0 16px;">New project brief submitted</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Submitted at</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(submittedAt)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Name</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(submission.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(submission.email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Company</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Project type</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(submission.projectType)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Budget</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(budget)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca; font-weight: 700;">Timeline</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd5ca;">${escapeHtml(timeline)}</td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 20px;">
        <p style="margin: 0 0 8px; font-weight: 700;">Project brief</p>
        <div style="padding: 16px; border: 1px solid #ddd5ca; background: #f8f5ef; white-space: pre-wrap;">${escapeHtml(
          submission.message,
        )}</div>
      </div>
    </div>
  `;

  const info = await transporter.sendMail({
    from: `"${config.fromName}" <${config.fromEmail}>`,
    to: config.recipientEmail,
    replyTo: submission.email,
    subject,
    text,
    html,
  });

  return {
    messageId: info.messageId,
    recipientEmail: config.recipientEmail,
  };
}
