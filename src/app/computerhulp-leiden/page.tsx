import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Leiden | Snel & Betrouwbaar",
  description:
    "Computerhulp en wifi optimalisatie in Leiden. Remote binnen 10–30 minuten, on-site meestal binnen 24 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-leiden",
  },
};

export default function ComputerhulpLeidenPage() {
  return <Computerhulp city="Leiden" />;
}
