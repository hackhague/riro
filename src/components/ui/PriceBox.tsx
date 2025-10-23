"use client";

import Link from "next/link";
import { CheckCircle2, Calendar } from "lucide-react";

import { usePrices } from "@/hooks/use-prices";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PriceBox() {
  const { pricing } = usePrices();
  const { consumer } = pricing;

  const primaryServices = [consumer.remote, consumer.onsite, consumer.emergency];

  const uspItems = [
    {
      title: "Reactie binnen 10–30 minuten",
      description: "We plannen direct je hulpverzoek via telefoon of WhatsApp.",
    },
    {
      title: "Geen voorrijkosten in Haaglanden",
      description: "Voor op afstand en afspraken aan huis betaal je alleen voor de werktijd.",
    },
    {
      title: `Niet opgelost? Alleen ${consumer.diagnosis.price.display}`,
      description: consumer.diagnosis.bookingSummary,
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <Card className="border-primary/10 bg-primary/5">
          <CardContent className="p-6 md:p-10 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Onze vaste tarieven
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Transparant en inclusief: op afstand ondersteuning, hulp aan huis en spoedservice. Kies wat bij jouw situatie past
                en plan direct je afspraak.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-3">
                  {primaryServices.map((service) => (
                    <div key={service.id} className="rounded-xl bg-background border border-border p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                        {service.shortLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">{service.price.display}</p>
                      {service.price.unit ? (
                        <p className="text-sm text-foreground/70">{service.price.unit}</p>
                      ) : null}
                      {service.price.extra ? (
                        <p className="mt-2 text-xs text-foreground/60">{service.price.extra}</p>
                      ) : null}
                      <p className="mt-3 text-sm text-foreground/80">{service.bookingSummary}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/60">
                  {consumer.diagnosis.bookingSummary} • {consumer.diagnosis.price.display}
                </p>
              </div>

              <div className="space-y-4 rounded-xl bg-background border border-border p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/80">Waarom InstantIT</h3>
                <ul className="space-y-3">
                  {uspItems.map((usp) => (
                    <li key={usp.title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{usp.title}</p>
                        <p className="text-xs text-foreground/70">{usp.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full">
                  <Link href="/afspraak"><Calendar className="h-3.5 w-3.5 mr-1.5" />Afspraak maken</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PriceBox;
