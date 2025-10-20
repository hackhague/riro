import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp Voorburg | Geduldig, Rustig & Betrouwbaar",
  description:
    "Computerhulp in Voorburg (Leidschendam-Voorburg) - alle wijken: Voorburg West, Midden, Noord, Bovenveen. Gespecialiseerd in hulp voor senioren, families en rustende huishoudens. Geduldig on-site support en remote.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-voorburg",
  },
};

export default function ComputerhulpVoorburgPage() {
  return <Computerhulp city="Voorburg" />;
}
