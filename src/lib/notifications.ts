import { z } from "zod";

export type NotificationErrorCode =
  | "missing_environment"
  | "validation_error"
  | "resend_request_failed"
  | "zapier_request_failed"
  | "unexpected_error";

export class NotificationError extends Error {
  readonly code: NotificationErrorCode;
  readonly details?: Record<string, unknown>;

  constructor(
    code: NotificationErrorCode,
    message: string,
    details?: Record<string, unknown>
  ) {
    super(message);
    this.name = "NotificationError";
    this.code = code;
    this.details = details;
  }
}

const baseContentShape = {
  subject: z.string().min(1, "A subject is required"),
  html: z.string().optional(),
  text: z.string().optional(),
  from: z.string().email().optional(),
  replyTo: z.string().email().optional(),
};

const baseContentSchema = z
  .object(baseContentShape)
  .superRefine((value, ctx) => {
    if (!value.html && !value.text) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["html"],
        message: "Either HTML or text content must be provided",
      });
    }
  });

const customerContentSchema = z
  .object({
    ...baseContentShape,
    to: z.string().email("A valid recipient address is required"),
  })
  .superRefine((value, ctx) => {
    if (!value.html && !value.text) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["html"],
        message: "Either HTML or text content must be provided",
      });
    }
  });

const resendPayloadSchema = z
  .object({
    from: z.string().email("A valid 'from' address is required"),
    to: z.union([
      z.string().email("A valid recipient address is required"),
      z.array(z.string().email("A valid recipient address is required")).min(1),
    ]),
    subject: z.string().min(1, "A subject is required"),
    html: z.string().optional(),
    text: z.string().optional(),
    reply_to: z.string().email().optional(),
  })
  .refine((value) => Boolean(value.html ?? value.text), {
    message: "Either HTML or text content must be provided",
    path: ["html"],
  });

export type ResendEmailPayload = z.infer<typeof resendPayloadSchema>;

export interface BaseNotificationInput {
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
}

export interface CustomerNotificationInput extends BaseNotificationInput {
  to: string;
}

export interface AdminNotificationInput extends BaseNotificationInput {}

const RESEND_API_URL = "https://api.resend.com/emails";
const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

function assertEnvironmentVariable(
  value: string | undefined,
  name: string
): asserts value is string {
  if (!value) {
    throw new NotificationError(
      "missing_environment",
      `${name} environment variable is required`,
      { name }
    );
  }
}

export function buildResendEmailPayload(
  input: BaseNotificationInput & { to: string | string[] }
): ResendEmailPayload {
  const parsed = resendPayloadSchema.safeParse({
    from: input.from ?? DEFAULT_FROM_EMAIL,
    to: input.to,
    subject: input.subject,
    html: input.html,
    text: input.text,
    reply_to: input.replyTo,
  });

  if (!parsed.success) {
    throw new NotificationError("validation_error", "Invalid email payload", {
      issues: parsed.error.issues,
    });
  }

  return parsed.data;
}

async function postToResend(payload: ResendEmailPayload) {
  assertEnvironmentVariable(RESEND_API_KEY, "RESEND_API_KEY");

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new NotificationError(
        "resend_request_failed",
        "Failed to send email through Resend",
        {
          status: response.status,
          body: responseText,
        }
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof NotificationError) {
      throw error;
    }

    throw new NotificationError("resend_request_failed", "Resend request failed", {
      cause: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

async function postToZapier(event: string, payload: unknown) {
  if (!ZAPIER_WEBHOOK_URL) {
    return;
  }

  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event, payload }),
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new NotificationError(
        "zapier_request_failed",
        "Zapier webhook request failed",
        {
          status: response.status,
          body: responseText,
        }
      );
    }
  } catch (error) {
    if (error instanceof NotificationError) {
      throw error;
    }

    throw new NotificationError(
      "zapier_request_failed",
      "Zapier webhook request failed",
      {
        cause: error instanceof Error ? error.message : "Unknown error",
      }
    );
  }
}

function logError(context: string, error: unknown) {
  if (error instanceof NotificationError) {
    console.error(`[notifications] ${context}`, {
      code: error.code,
      message: error.message,
      details: error.details,
    });
  } else {
    console.error(`[notifications] ${context} unexpected error`, error);
  }
}

export async function sendAdminNotification(
  input: AdminNotificationInput
) {
  try {
    assertEnvironmentVariable(ADMIN_EMAIL, "ADMIN_NOTIFICATION_EMAIL");

    const content = baseContentSchema.safeParse(input);

    if (!content.success) {
      throw new NotificationError("validation_error", "Invalid email content", {
        issues: content.error.issues,
      });
    }

    const payload = buildResendEmailPayload({
      ...content.data,
      from: content.data.from ?? DEFAULT_FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: content.data.replyTo,
    });

    const response = await postToResend(payload);
    await postToZapier("admin_notification", {
      to: ADMIN_EMAIL,
      subject: content.data.subject,
    });

    return response;
  } catch (error) {
    logError("sendAdminNotification", error);

    if (error instanceof NotificationError) {
      throw error;
    }

    throw new NotificationError(
      "unexpected_error",
      "Failed to send admin notification",
      {
        cause:
          error instanceof Error ? error.message : "Unknown error occurred",
      }
    );
  }
}

export async function sendCustomerNotification(
  input: CustomerNotificationInput
) {
  try {
    const parsed = customerContentSchema.safeParse(input);

    if (!parsed.success) {
      throw new NotificationError("validation_error", "Invalid email content", {
        issues: parsed.error.issues,
      });
    }

    const payload = buildResendEmailPayload({
      ...parsed.data,
      from: parsed.data.from ?? DEFAULT_FROM_EMAIL,
      to: parsed.data.to,
      replyTo: parsed.data.replyTo,
    });

    const response = await postToResend(payload);
    await postToZapier("customer_notification", {
      to: parsed.data.to,
      subject: parsed.data.subject,
    });

    return response;
  } catch (error) {
    logError("sendCustomerNotification", error);

    if (error instanceof NotificationError) {
      throw error;
    }

    throw new NotificationError(
      "unexpected_error",
      "Failed to send customer notification",
      {
        cause:
          error instanceof Error ? error.message : "Unknown error occurred",
      }
    );
  }
}
