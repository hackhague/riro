import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Rijswijk | Oud-Rijswijk, Te Werve & Leeuwendaal",
  description:
    "Computerhulp in Rijswijk voor winkels, horeca en gezinnen. Snelle PIN- en kassasysteem support, directe hulp bij gehackt en geen voorrijkosten.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-rijswijk",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-rijswijk",
    },
  },
};

export default function ComputerhulpRijswijkPage() {
  return <Computerhulp city="Rijswijk" canonicalUrl="https://www.instantit.nl/computerhulp-rijswijk" />;
}
