import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Rijswijk | Oud-Rijswijk, Te Werve & Leeuwendaal",
  description:
    "Computerhulp in Rijswijk - winkels, restaurants en huishoudens. Alle wijken: Oud-Rijswijk, Rembrandtkwartier, Te Werve. Kassasystemen, PIN-problemen, netwerk-optimalisatie. Remote support en on-site beschikbaar.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-rijswijk",
  },
};

export default function ComputerhulpRijswijkPage() {
  return <Computerhulp city="Rijswijk" />;
}
