import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Delft | Snel & Betrouwbaar",
  description:
    "InstantIT helpt particulieren en bedrijven in Delft met computerproblemen, wifi en cybersecurity. Remote binnen 10–30 minuten, on-site meestal binnen 24 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-delft",
  },
};

export default function ComputerhulpDelftPage() {
  return <Computerhulp city="Delft" />;
}
