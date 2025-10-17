"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      contact: String(formData.get("contact") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus("loading");
    setError(null);
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Versturen mislukt. Probeer het later opnieuw.");
      }

      form.reset();
      setStatus("success");
      resetTimerRef.current = setTimeout(() => {
        setStatus("idle");
        resetTimerRef.current = null;
      }, 8000);
    } catch (err) {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
      }
      const message = err instanceof Error ? err.message : "Er is iets misgegaan.";
      setError(message);
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-busy={status === "loading"}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="contact-name">
            Naam
          </label>
          <input id="contact-name" name="name" required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="contact-details">
            Telefoon of e-mail
          </label>
          <input id="contact-details" name="contact" required className="w-full border rounded-md px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="contact-message">
          Je vraag
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          className="w-full border rounded-md px-3 py-2 min-h-[120px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="accent" disabled={status === "loading"}>
          {status === "loading" ? "Versturen..." : status === "success" ? "Bericht verstuurd" : "Verstuur bericht"}
        </Button>
        <Button variant="whatsapp" asChild>
          <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
            Verstuur via WhatsApp
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="mailto:support@instantit.nl">Of stuur per e-mail</a>
        </Button>
      </div>
      {status === "error" && error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm text-primary" role="status">
          Bedankt! We nemen zo snel mogelijk contact met je op.
        </p>
      ) : null}
    </form>
  );
}
