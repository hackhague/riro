import type { Metadata } from "next";
import Computerhulp from "../computerhulp-aan-huis/page";

export const metadata: Metadata = {
  title: "Computerhulp Leiden | Bos- en Gasthuisdistrict, Merenwijk & Meer",
  description:
    "Computerhulp in Leiden voor praktijken, kantoren en huishoudens. Remote triage binnen 30 minuten en aan huis dezelfde dag in veel wijken.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-leiden",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-leiden",
    },
  },
};

export default function ComputerhulpLeidenPage() {
  return <Computerhulp city="Leiden" />;
}
