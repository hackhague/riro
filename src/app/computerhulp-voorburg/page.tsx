import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Voorburg | Geduldig, Rustig & Betrouwbaar",
  description:
    "Computerhulp in Voorburg en Leidschendam met geduldige uitleg. Hulp aan huis binnen 24–48 uur en ondersteuning voor senioren en gezinnen.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-voorburg",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-voorburg",
    },
  },
};

export default function ComputerhulpVoorburgPage() {
  return <Computerhulp city="Voorburg" />;
}
