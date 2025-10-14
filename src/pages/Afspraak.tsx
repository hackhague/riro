import React from "react";
import { SEO } from "@/components/SEO";
import AppointmentWizard from "@/components/AppointmentWizard";

export default function Afspraak() {
  return (
    <div className="min-h-screen">
      <SEO title="Plan een afspraak | InstantIT" description="Plan vandaag nog een afspraak. Kies je dienst, selecteer datum & tijdslot en vul je gegevens in." />
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">Plan een afspraak</h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Kies een dienst, selecteer datum en tijdslot en bevestig je afspraak. Wij nemen snel contact op.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <AppointmentWizard />
        </div>
      </section>
    </div>
  );
}
