import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Rijswijk | Snel & Betrouwbaar",
  description:
    "Snelle computerhulp en wifi-ondersteuning in Rijswijk. Remote binnen 10–30 minuten, on-site meestal binnen 24 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-rijswijk",
  },
};

export default function ComputerhulpRijswijkPage() {
  return <Computerhulp city="Rijswijk" />;
}
