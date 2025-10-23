import { Resend } from "resend";

const adminEmailEnvKeys = [
  "CONTACT_NOTIFICATION_ADMIN_EMAIL",
  "ADMIN_NOTIFICATION_EMAIL",
  "ADMIN_INBOX",
] as const;

const fromEmailEnvKeys = ["CONTACT_NOTIFICATION_FROM_EMAIL", "RESEND_FROM_EMAIL"] as const;

function getFirstEnv(keys: readonly string[]): string | null {
  for (const key of keys) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }

  return null;
}

function requireEnv(value: string | null, name: string): string {
  if (!value) {
    throw new Error(`${name} environment variable is required`);
  }

  return value;
}

let cachedResend: Resend | null = null;

function getResendClient() {
  if (cachedResend) {
    return cachedResend;
  }

  const apiKey = requireEnv(process.env.RESEND_API_KEY ?? null, "RESEND_API_KEY");
  cachedResend = new Resend(apiKey);
  return cachedResend;
}

const defaultFromAddress =
  getFirstEnv(fromEmailEnvKeys) ?? "Instant IT <support@instantit.nl>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function formatMetadata(metadata?: Record<string, unknown> | null) {
  if (!metadata || Object.keys(metadata).length === 0) {
    return "";
  }

  const formatted = escapeHtml(JSON.stringify(metadata, null, 2));
  return `<h3>Metadata</h3><pre>${formatted}</pre>`;
}

function formatRecordId(recordId?: string | number | null) {
  if (recordId === undefined || recordId === null) {
    return "";
  }

  return `<p><strong>Supabase record:</strong> ${escapeHtml(String(recordId))}</p>`;
}

export interface ContactNotificationInput {
  name: string;
  contact: string;
  message: string;
  recordId?: string | number | null;
  metadata?: Record<string, unknown> | null;
  customerEmail?: string | null;
}

export type ResendEmailOptions = Parameters<Resend["emails"]["send"]>[0];

type ResendEmailOverrides = Partial<ResendEmailOptions> & {
  replyTo?: string;
  reply_to?: string;
};

export function buildAdminEmail(
  input: ContactNotificationInput,
  overrides?: ResendEmailOverrides
): ResendEmailOptions {
  const from = overrides?.from ?? defaultFromAddress;
  const to = overrides?.to ?? getFirstEnv(adminEmailEnvKeys) ?? "info@instantit.nl";
  const subject = overrides?.subject ?? `Nieuw contactbericht van ${input.name}`;
  const replyToOverride = overrides?.replyTo ?? overrides?.reply_to;
  const replyTo = replyToOverride ?? input.customerEmail ?? undefined;

  const textLines = [
    "Nieuw contactbericht",
    "",
    `Naam: ${input.name}`,
    `Contact: ${input.contact}`,
    "",
    input.message,
  ];

  if (input.recordId) {
    textLines.push("", `Supabase record: ${String(input.recordId)}`);
  }

  if (input.metadata && Object.keys(input.metadata).length > 0) {
    textLines.push("", "Metadata:", JSON.stringify(input.metadata, null, 2));
  }

  const text = textLines.join("\n");
  const html = `
    <h1>Nieuw contactbericht</h1>
    <p><strong>Naam:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Contact:</strong> ${escapeHtml(input.contact)}</p>
    <p><strong>Bericht:</strong><br />${formatMultiline(input.message)}</p>
    ${formatRecordId(input.recordId)}
    ${formatMetadata(input.metadata)}
  `;

  return {
    from,
    to,
    subject,
    text,
    html,
    ...(replyTo ? { replyTo } : {}),
  } satisfies ResendEmailOptions;
}

export function buildCustomerEmail(
  input: ContactNotificationInput,
  overrides?: Partial<ResendEmailOptions>
): ResendEmailOptions | null {
  const customerEmail = overrides?.to ?? input.customerEmail ?? null;

  if (!customerEmail) {
    return null;
  }

  const from = overrides?.from ?? defaultFromAddress;
  const subject = overrides?.subject ?? "We hebben je bericht ontvangen";

  const text = [
    `Hoi ${input.name},`,
    "",
    "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
    "",
    "Je hebt het volgende bericht gestuurd:",
    "",
    input.message,
    "",
    "Met vriendelijke groet,",
    "Instant IT",
  ].join("\n");

  const html = `
    <p>Hoi ${escapeHtml(input.name)},</p>
    <p>Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p>
    <p>Je hebt het volgende bericht gestuurd:</p>
    <blockquote>${formatMultiline(input.message)}</blockquote>
    <p>Met vriendelijke groet,<br />Instant IT</p>
  `;

  return {
    from,
    to: customerEmail,
    subject,
    text,
    html,
  } satisfies ResendEmailOptions;
}

export async function sendContactNotifications(input: ContactNotificationInput) {
  const resend = getResendClient();
  const adminPayload = buildAdminEmail(input);
  const adminResult = await resend.emails.send(adminPayload);

  if (adminResult.error) {
    throw new Error(`Failed to send admin notification: ${adminResult.error.message}`);
  }

  const customerPayload = buildCustomerEmail(input);
  let customerId: string | null = null;

  if (customerPayload) {
    const customerResult = await resend.emails.send(customerPayload);

    if (customerResult.error) {
      throw new Error(`Failed to send customer notification: ${customerResult.error.message}`);
    }

    customerId = customerResult.data?.id ?? null;
  }

  return {
    adminId: adminResult.data?.id ?? null,
    customerId,
  };
}
