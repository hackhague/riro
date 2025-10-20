'use client';

import { useSearchParams } from "next/navigation";
import AppointmentWizard from "@/components/AppointmentWizard";

export default function Afspraak() {
  const searchParams = useSearchParams();

  const normalize = (value: string | null) => {
    return value;
  };
  const initialState = {
    problemCategory: normalize(searchParams.get("category")),
    serviceType: normalize(searchParams.get("type")),
    serviceChannel: normalize(searchParams.get("channel")),
    urgency: normalize(searchParams.get("speed")),
    date: normalize(searchParams.get("date")),
    timeSlot: normalize(searchParams.get("slot")),
  };

  return (
    <div className="min-h-screen">
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
          <AppointmentWizard initialState={initialState} />
        </div>
      </section>
    </div>
  );
}
