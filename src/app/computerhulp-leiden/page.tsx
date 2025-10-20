import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Leiden | Bos- en Gasthuisdistrict, Merenwijk & Meer",
  description:
    "Computerhulp in Leiden voor huishoudens, medische praktijken en bedrijven. Alle wijken: Merenwijk, Boerhaavedistrict, Morsdistrict. GDPR-compliant, snel remote support, on-site beschikbaar. Remote 10-30 min reactie.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-leiden",
  },
};

export default function ComputerhulpLeidenPage() {
  return <Computerhulp city="Leiden" />;
}
