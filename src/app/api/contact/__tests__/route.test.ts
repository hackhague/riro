import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

type PostHandler = typeof import("../route").POST;

const sendContactNotifications = vi.hoisted(() => vi.fn());

vi.mock("@/lib/notifications", () => ({
  sendContactNotifications,
}));

let postHandler: PostHandler;

beforeAll(async () => {
  ({ POST: postHandler } = await import("../route"));
});

beforeEach(() => {
  sendContactNotifications.mockReset();
});

function createRequest(body: unknown, ip = "198.51.100.10") {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  it("rejects submissions that trigger the honeypot", async () => {
    const request = createRequest({
      name: "Spam Bot",
      contact: "spam@example.com",
      message: "Hallo",
      honeypot: "i am a bot",
      timestamp: Date.now() - 2_000,
    });

    const response = await postHandler(request);
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ error: expect.stringContaining("Verdacht") });
    expect(sendContactNotifications).not.toHaveBeenCalled();
  });

  it("rejects submissions that arrive unrealistically fast", async () => {
    const request = createRequest({
      name: "Speedy",
      contact: "speedy@example.com",
      message: "Hoi",
      honeypot: "",
      timestamp: Date.now(),
    }, "198.51.100.11");

    const response = await postHandler(request);
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ error: expect.stringContaining("Verdacht") });
    expect(sendContactNotifications).not.toHaveBeenCalled();
  });

  it("rate limits repeated submissions from the same IP", async () => {
    const ip = "198.51.100.12";

    const makePayload = () => ({
      name: "Legit User",
      contact: "user@example.com",
      message: "Dit is een testbericht",
      honeypot: "",
      timestamp: Date.now() - 2_000,
    });

    for (let i = 0; i < 5; i += 1) {
      const response = await postHandler(createRequest(makePayload(), ip));
      expect(response.status).toBe(200);
    }

    const blocked = await postHandler(createRequest(makePayload(), ip));
    expect(blocked.status).toBe(429);
    expect(await blocked.json()).toMatchObject({ error: expect.stringContaining("Te veel") });
    expect(sendContactNotifications).toHaveBeenCalledTimes(5);
  });
});
