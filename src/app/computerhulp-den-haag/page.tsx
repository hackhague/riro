import type { Metadata } from "next";
import Computerhulp from "../computerhulp-aan-huis/page";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag | Scheveningen, Centrum & Duinoord",
  description:
    "Computerhulp in Den Haag voor storingen, hacks en traag internet. Geen voorrijkosten binnen Haaglanden en binnen 30 minuten reactie via WhatsApp of telefoon.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-den-haag",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-den-haag",
    },
  },
};

export default function ComputerhulpDenHaagPage() {
  return <Computerhulp city="Den Haag" canonicalUrl="https://www.instantit.nl/computerhulp-den-haag" />;
}
