import { describe, expect, it } from "vitest";
import {
  buildResendEmailPayload,
  NotificationError,
} from "../notifications";

describe("buildResendEmailPayload", () => {
  it("formats a minimal text email", () => {
    const payload = buildResendEmailPayload({
      from: "notifications@example.com",
      to: "user@example.com",
      subject: "Welcome",
      text: "Hello there!",
    });

    expect(payload).toEqual({
      from: "notifications@example.com",
      to: "user@example.com",
      subject: "Welcome",
      text: "Hello there!",
    });
  });

  it("supports HTML content and multiple recipients", () => {
    const payload = buildResendEmailPayload({
      from: "notifications@example.com",
      to: ["first@example.com", "second@example.com"],
      subject: "Update",
      html: "<p>Important update</p>",
    });

    expect(payload).toEqual({
      from: "notifications@example.com",
      to: ["first@example.com", "second@example.com"],
      subject: "Update",
      html: "<p>Important update</p>",
    });
  });

  it("maps replyTo to reply_to", () => {
    const payload = buildResendEmailPayload({
      from: "notifications@example.com",
      to: "user@example.com",
      subject: "Need feedback",
      text: "Please reply",
      replyTo: "support@example.com",
    });

    expect(payload.reply_to).toBe("support@example.com");
    expect((payload as Record<string, unknown>).replyTo).toBeUndefined();
  });

  it("throws a NotificationError when content is missing", () => {
    expect(() =>
      buildResendEmailPayload({
        from: "notifications@example.com",
        to: "user@example.com",
        subject: "Empty",
      })
    ).toThrow(NotificationError);
  });
});
