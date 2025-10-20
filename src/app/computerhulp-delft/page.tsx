import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Delft | Binnenstad, Wippolder & Tech Startups",
  description:
    "Computerhulp in Delft voor particulieren, studenten en tech startups. Snel remote support, cybersecurity, WiFi-optimalisatie. Alle wijken: Binnenstad, Voorhof, Tanthof. Remote 10-30 min, on-site snel beschikbaar.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-delft",
  },
};

export default function ComputerhulpDelftPage() {
  return <Computerhulp city="Delft" />;
}
