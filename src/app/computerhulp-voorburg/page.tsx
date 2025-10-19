import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Voorburg | Snel & Betrouwbaar",
  description:
    "Computerhulp aan huis in Voorburg en Leidschendam. Remote binnen 10–30 minuten, on-site meestal binnen 24 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-voorburg",
  },
};

export default function ComputerhulpVoorburgPage() {
  return <Computerhulp city="Voorburg" />;
}
