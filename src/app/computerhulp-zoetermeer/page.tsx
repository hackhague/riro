import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Zoetermeer | Snel & Betrouwbaar",
  description:
    "InstantIT helpt Zoetermeer met snelle computerhulp, wifi en cybersecurity. Remote binnen 10–30 minuten, on-site meestal binnen 24 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-zoetermeer",
  },
};

export default function ComputerhulpZoetermeerPage() {
  return <Computerhulp city="Zoetermeer" />;
}
