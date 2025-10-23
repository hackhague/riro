'use client';
// This file uses Image from next/image which is imported above

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import AppointmentWizard from "@/components/AppointmentWizard";
import { heroTechnicianImage, HERO_IMAGE_SIZES } from "@/lib/image-assets";

export default function Afspraak() {
  const searchParams = useSearchParams();

  const normalize = (value: string | null) => {
    return value || undefined;
  };

  const normalizeDate = (value: string | null) => {
    if (!value) return undefined;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  };

  const normalizeServiceType = (value: string | null): "consumer" | "business" | undefined => {
    if (!value) return undefined;
    if (value === "zakelijk") return "business";
    if (value === "particulier") return "consumer";
    return value as "consumer" | "business" | undefined;
  };

  const initialState: React.ComponentProps<typeof AppointmentWizard>["initialState"] = {
    problemCategory: normalize(searchParams.get("category")) as "" | "security" | "other" | "network" | "hardware" | "mobile" | "hardware_other" | "training" | undefined,
    serviceType: normalizeServiceType(searchParams.get("type")),
    serviceChannel: normalize(searchParams.get("channel")) as "remote" | "onsite" | "" | undefined,
    urgency: normalize(searchParams.get("speed")) as "standaard" | "spoed" | "" | undefined,
    date: normalizeDate(searchParams.get("date")),
    timeSlot: normalize(searchParams.get("slot")),
  };

  return (
    <div className="min-h-screen">
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroTechnicianImage}
            alt="InstantIT plan een afspraak"
            fill
            priority
            placeholder="blur"
            sizes={HERO_IMAGE_SIZES}
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
