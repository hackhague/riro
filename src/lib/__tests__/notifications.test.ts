import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { buildAdminEmail, buildCustomerEmail } from "../notifications";

const ORIGINAL_ENV = process.env;

beforeEach(() => {
  process.env = { ...ORIGINAL_ENV } as NodeJS.ProcessEnv;
  process.env.CONTACT_NOTIFICATION_ADMIN_EMAIL = "admin@example.com";
  delete process.env.ADMIN_NOTIFICATION_EMAIL;
  delete process.env.ADMIN_INBOX;
  delete process.env.CONTACT_NOTIFICATION_FROM_EMAIL;
  delete process.env.RESEND_FROM_EMAIL;
});

afterEach(() => {
  process.env = ORIGINAL_ENV;
});

describe("buildAdminEmail", () => {
  it("creates admin notification payload with sanitized metadata", () => {
    const payload = buildAdminEmail({
      name: "Jane <Doe>",
      contact: "jane@example.com",
      message: "Hallo daar!\nTot snel.",
      recordId: 42,
      metadata: { browser: "<Edge>", referer: "https://example.com" },
      customerEmail: "jane@example.com",
    });

    expect(payload.to).toBe("admin@example.com");
    expect(payload.from).toBe("Instant IT <support@instantit.nl>");
    expect(payload.replyTo).toBe("jane@example.com");
    expect(payload.subject).toBe("Nieuw contactbericht van Jane <Doe>");
    expect(payload.text).toContain("Supabase record: 42");
    expect(payload.text).toContain("Metadata:\n{");
    expect(payload.html).toContain("<strong>Naam:</strong> Jane &lt;Doe&gt;");
    expect(payload.html).toContain("Hallo daar!<br />Tot snel.");
    expect(payload.html).toContain("&lt;Edge&gt;");
  });
});

describe("buildCustomerEmail", () => {
  it("returns null when there is no customer email", () => {
    const payload = buildCustomerEmail({
      name: "Jan",
      contact: "+3100000000",
      message: "Bel mij terug",
    });

    expect(payload).toBeNull();
  });

  it("creates a confirmation email for the customer", () => {
    const payload = buildCustomerEmail({
      name: "Sam",
      contact: "sam@example.com",
      message: "Ik heb een vraag",
      customerEmail: "sam@example.com",
    });

    expect(payload).not.toBeNull();
    expect(payload?.to).toBe("sam@example.com");
    expect(payload?.subject).toBe("We hebben je bericht ontvangen");
    expect(payload?.text).toContain("Hoi Sam,");
    expect(payload?.html).toContain("Hoi Sam,");
    expect(payload?.html).toContain("Ik heb een vraag");
  });
});
