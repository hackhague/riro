type NotificationEnv = {
  CONTACT_NOTIFICATION_ADMIN_EMAIL?: string;
  ADMIN_NOTIFICATION_EMAIL?: string;
  ADMIN_INBOX?: string;
  CONTACT_NOTIFICATION_FROM_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_API_KEY?: string;
};

const adminEmailEnvKeys = [
  "CONTACT_NOTIFICATION_ADMIN_EMAIL",
  "ADMIN_NOTIFICATION_EMAIL",
  "ADMIN_INBOX",
] as const satisfies readonly (keyof NotificationEnv)[];

const fromEmailEnvKeys = [
  "CONTACT_NOTIFICATION_FROM_EMAIL",
  "RESEND_FROM_EMAIL",
] as const satisfies readonly (keyof NotificationEnv)[];

function getNotificationEnv(
  overrides?: Partial<NotificationEnv>
): NotificationEnv {
  const base: NotificationEnv = {
    CONTACT_NOTIFICATION_ADMIN_EMAIL:
      process.env.CONTACT_NOTIFICATION_ADMIN_EMAIL,
    ADMIN_NOTIFICATION_EMAIL: process.env.ADMIN_NOTIFICATION_EMAIL,
    ADMIN_INBOX: process.env.ADMIN_INBOX,
    CONTACT_NOTIFICATION_FROM_EMAIL:
      process.env.CONTACT_NOTIFICATION_FROM_EMAIL,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  };

  return overrides ? { ...base, ...overrides } : base;
}

function getFirstEnv(
  keys: readonly (keyof NotificationEnv)[],
  env: NotificationEnv = getNotificationEnv()
): string | null {
  for (const key of keys) {
    const value = env[key];
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

function formatErrorMessage(error: unknown): string {
  if (!error) {
    return "Unknown error";
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message.trim()) {
      return message;
    }
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

let cachedResend:
  | {
      client: {
        emails: {
          send: (
            opts: ResendEmailOptions
          ) => Promise<{ data?: { id?: string } | null; error?: unknown }>;
        };
      };
      apiKey: string;
    }
  | null = null;

export function getResendClient(env: NotificationEnv = getNotificationEnv()) {
  const apiKey = requireEnv(env.RESEND_API_KEY ?? null, "RESEND_API_KEY");

  if (cachedResend && cachedResend.apiKey === apiKey) {
    return cachedResend.client;
  }

  const client = {
    emails: {
      send: async function (opts: ResendEmailOptions) {
        try {
          const body: Record<string, unknown> = {
            from: opts.from,
            to: Array.isArray(opts.to) ? opts.to : opts.to,
            subject: opts.subject,
          } as Record<string, unknown>;

          if (opts.html) body.html = opts.html;
          if (opts.text) body.text = opts.text;
          if (opts.replyTo) body.reply_to = opts.replyTo;
          const optsAny = opts as unknown as Record<string, unknown>;
          if (optsAny.reply_to) body.reply_to = String(optsAny.reply_to);

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
          });

          const text = await res.text().catch(() => "");

          if (!res.ok) {
            return { error: { message: `Resend API error: ${res.status} ${text}` } };
          }

          const data = JSON.parse(text || "{}") as { id?: string };
          return { data: { id: data.id } };
        } catch (error) {
          return { error };
        }
      },
    },
  };

  cachedResend = { client, apiKey };
  return cachedResend.client;
}

function getDefaultFromAddress(
  env: NotificationEnv = getNotificationEnv()
): string {
  return getFirstEnv(fromEmailEnvKeys, env) ?? "Instant IT <support@instantit.nl>";
}

export function stripHeaderBreaks(value: string | null | undefined): string {
  if (!value) {
    return "";
  }

  const withoutBreaks = value.replace(/[\r\n]+/g, " ");
  const collapsed = withoutBreaks.replace(/\s+/g, " ").trim();

  if (collapsed.includes("@")) {
    return collapsed.replace(/\s*@\s*/g, "@");
  }

  return collapsed;
}

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

export type ResendEmailOptions = {
  from?: string;
  to?: string | string[];
  subject?: string;
  html?: string;
  text?: string;
  replyTo?: string;
  reply_to?: string;
};

type ResendEmailOverrides = Partial<ResendEmailOptions> & {
  replyTo?: string;
  reply_to?: string;
};

export function buildAdminEmail(
  input: ContactNotificationInput,
  overrides?: ResendEmailOverrides,
  env: NotificationEnv = getNotificationEnv()
): ResendEmailOptions {
  const from = overrides?.from ?? getDefaultFromAddress(env);
  const to =
    overrides?.to ?? getFirstEnv(adminEmailEnvKeys, env) ?? "info@instantit.nl";
  const subject = stripHeaderBreaks(
    overrides?.subject ?? `Nieuw contactbericht van ${input.name}`
  );
  const replyToOverride = overrides?.replyTo ?? overrides?.reply_to;
  const replyToCandidate = replyToOverride ?? input.customerEmail ?? undefined;
  const replyTo = stripHeaderBreaks(replyToCandidate ?? null) || undefined;

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
    ...(replyTo ? { replyTo, reply_to: replyTo } : {}),
  } satisfies ResendEmailOptions;
}

export function buildCustomerEmail(
  input: ContactNotificationInput,
  overrides?: Partial<ResendEmailOptions>,
  env: NotificationEnv = getNotificationEnv()
): ResendEmailOptions | null {
  const customerEmail = overrides?.to ?? input.customerEmail ?? null;

  if (!customerEmail) {
    return null;
  }

  const from = overrides?.from ?? getDefaultFromAddress(env);
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
  const env = getNotificationEnv();
  const resend = getResendClient(env);
  const adminPayload = buildAdminEmail(input, undefined, env);
  const adminResult = await resend.emails.send(adminPayload);

  if (adminResult.error) {
    throw new Error(
      `Failed to send admin notification: ${formatErrorMessage(adminResult.error)}`
    );
  }

  const customerPayload = buildCustomerEmail(input, undefined, env);
  let customerId: string | null = null;

  if (customerPayload) {
    const customerResult = await resend.emails.send(customerPayload);

    if (customerResult.error) {
      throw new Error(
        `Failed to send customer notification: ${formatErrorMessage(customerResult.error)}`
      );
    }

    customerId = customerResult.data?.id ?? null;
  }

  return {
    adminId: adminResult.data?.id ?? null,
    customerId,
  };
}
