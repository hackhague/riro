import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Zoetermeer | Rokkeveen, Oosterheem & Bedrijven",
  description:
    "Computerhulp in Zoetermeer voor huishoudens, winkels en scale-ups. Directe hulp bij gehackt, netwerkoptimalisatie en on-site support zonder voorrijkosten.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-zoetermeer",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-zoetermeer",
    },
  },
};

export default function ComputerhulpZoetermeerPage() {
  return <Computerhulp city="Zoetermeer" />;
}
