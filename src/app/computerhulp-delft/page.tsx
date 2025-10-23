import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Delft | Binnenstad, Wippolder & Tech Startups",
  description:
    "Computerhulp in Delft voor studenten, gezinnen en startups. Remote fix binnen 30 minuten en aan huis in alle Delftse wijken.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-delft",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-delft",
    },
  },
};

export default function ComputerhulpDelftPage() {
  return <Computerhulp city="Delft" canonicalUrl="https://www.instantit.nl/computerhulp-delft" />;
}
