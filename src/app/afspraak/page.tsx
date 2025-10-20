'use client';
// This file uses Image from next/image which is imported above

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import AppointmentWizard, { type Booking } from "@/components/AppointmentWizard";

const heroImage = "/images/hero-technician.jpg";

export default function Afspraak() {
  const searchParams = useSearchParams();

  const normalize = (value: string | null): string | undefined => {
    return value || undefined;
  };
  const initialState: Partial<Booking> = {
    problemCategory: normalize(searchParams.get("category")) as any,
    serviceType: normalize(searchParams.get("type")) as any,
    serviceChannel: normalize(searchParams.get("channel")) as any,
    urgency: normalize(searchParams.get("speed")) as any,
    date: normalize(searchParams.get("date")),
    timeSlot: normalize(searchParams.get("slot")),
  };

  return (
    <div className="min-h-screen">
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT plan een afspraak"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.72) 35%, rgba(2,6,23,0.4) 70%, rgba(2,6,23,0.12) 100%)"
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-3">Plan een afspraak</h1>
            <p className="text-lg md:text-xl text-white/90">
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
