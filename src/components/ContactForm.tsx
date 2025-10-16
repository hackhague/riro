"use client";

import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = encodeURIComponent(
      `Naam: ${data.get("name")}\nTelefoon/email: ${data.get("contact")}\nVraag: ${data.get("message")}`,
    );
    window.open(`https://wa.me/31702119191?text=${text}`, "_blank");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="accent">
          Verstuur via WhatsApp
        </Button>
        <Button variant="outline" asChild>
          <a href="mailto:support@instantit.nl">Of stuur per e-mail</a>
        </Button>
      </div>
    </form>
  );
}
