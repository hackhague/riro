import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function buildHref(base: string, preselect?: Record<string, string | undefined>) {
  if (!preselect) return base;
  const params = new URLSearchParams();
  Object.entries(preselect).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

export type PlanAppointmentCtaProps = {
  title?: string;
  description?: string;
  preselect?: {
    category?: string;
    type?: string;
    channel?: string;
    speed?: string;
  };
  ctaLabel?: string;
};

export function PlanAppointmentCta({
  title = "Plan direct een afspraak",
  description = "We reageren binnen 10–30 minuten. Kies je voorkeur en we bevestigen per telefoon of WhatsApp.",
  preselect,
  ctaLabel = "Afspraak maken",
}: PlanAppointmentCtaProps) {
  const href = buildHref("/afspraak", preselect);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6 md:p-10 grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                <CalendarCheck className="h-3.5 w-3.5" />
                <span>Snelle afspraak</span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-3 text-foreground">{title}</h2>
              <p className="text-base md:text-lg text-foreground/80 mb-6">{description}</p>
              <p className="text-sm text-foreground/70">
                Bellen of appen kan ook altijd. We plannen samen je voorkeursmoment en sturen een bevestiging.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full">
                <Link href={href}>{ctaLabel}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href="tel:+31702119191">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PlanAppointmentCta;
