import type { Metadata } from "next";
import Image from "next/image";

import AppointmentWizard from "@/components/AppointmentWizard";
import { heroTechnicianImage, HERO_IMAGE_SIZES } from "@/lib/image-assets";

const getFirstValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

const normalize = (value: string | string[] | undefined) => {
  const firstValue = getFirstValue(value);
  return firstValue || undefined;
};

const normalizeServiceType = (
  value: string | string[] | undefined,
): "consumer" | "business" | undefined => {
  const firstValue = getFirstValue(value);

  if (!firstValue) return undefined;
  if (firstValue === "zakelijk") return "business";
  if (firstValue === "particulier") return "consumer";

  return firstValue as "consumer" | "business" | undefined;
};

export const metadata: Metadata = {
  title: "Afspraak maken | Plan directe hulp van instantIT",
  description:
    "Plan direct een afspraak voor computerhulp of cyberhulp. Kies je dienst, selecteer datum en tijdslot en wij nemen snel contact op.",
  alternates: {
    canonical: "https://www.instantit.nl/afspraak-maken",
  },
  openGraph: {
    url: "https://www.instantit.nl/afspraak-maken",
    title: "Afspraak maken | Plan directe hulp van instantIT",
    description:
      "Plan direct een afspraak voor computerhulp of cyberhulp. Kies je dienst, selecteer datum en tijdslot en wij nemen snel contact op.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afspraak maken | Plan directe hulp van instantIT",
    description:
      "Plan direct een afspraak voor computerhulp of cyberhulp. Kies je dienst, selecteer datum en tijdslot en wij nemen snel contact op.",
  },
};

interface AfspraakSearchParams {
  category?: string | string[];
  type?: string | string[];
  channel?: string | string[];
  speed?: string | string[];
  date?: string | string[];
  slot?: string | string[];
  [key: string]: string | string[] | undefined;
}

interface AfspraakPageProps {
  searchParams: AfspraakSearchParams;
}

export default function Afspraak({ searchParams }: AfspraakPageProps) {
  const initialState: React.ComponentProps<typeof AppointmentWizard>["initialState"] = {
    problemCategory: normalize(searchParams.category) as
      | ""
      | "security"
      | "other"
      | "network"
      | "hardware"
      | "mobile"
      | "hardware_other"
      | "training"
      | undefined,
    serviceType: normalizeServiceType(searchParams.type),
    serviceChannel: normalize(searchParams.channel) as "remote" | "onsite" | "" | undefined,
    urgency: normalize(searchParams.speed) as "standaard" | "spoed" | "" | undefined,
    date: normalize(searchParams.date),
    timeSlot: normalize(searchParams.slot),
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
                "linear-gradient(90deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.72) 35%, rgba(2,6,23,0.4) 70%, rgba(2,6,23,0.12) 100%)",
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
