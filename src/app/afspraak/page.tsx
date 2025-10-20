'use client';

import { useSearchParams } from "next/navigation";
import AppointmentWizard from "@/components/AppointmentWizard";

export default function Afspraak() {
  const searchParams = useSearchParams();

  const normalize = (value: string | null) => {
    return value;
  };
  const params = searchParams ?? {};
  const normalize = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) return value[0];
    return value;
  };

  const initialState = {
    problemCategory: normalize(params.category),
    serviceType: normalize(params.type),
    serviceChannel: normalize(params.channel),
    urgency: normalize(params.speed),
    date: normalize(params.date),
    timeSlot: normalize(params.slot),
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
