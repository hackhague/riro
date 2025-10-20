import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Zoetermeer | Rokkeveen, Oosterheem & Bedrijven",
  description:
    "Computerhulp in Zoetermeer voor particulieren en bedrijven. Alle wijken: Rokkeveen, Oosterheem, Seghwaert, Meerzicht. Netwerk-upgrades, WiFi-optimalisatie, cybersecurity. Remote support en on-site snel beschikbaar.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-zoetermeer",
  },
};

export default function ComputerhulpZoetermeerPage() {
  return <Computerhulp city="Zoetermeer" />;
}
