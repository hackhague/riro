import type { Metadata } from "next";

import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag",
  description:
    "Snelle computerhulp in Den Haag en omgeving. Remote binnen 30 minuten, on-site meestal binnen 2 uur.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-den-haag",
  },
};

export default function ComputerhulpDenHaagPage() {
  return <Computerhulp />;
}
