import type { Metadata } from "next";

import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag | Snel & Betrouwbaar",
  description:
    "Trage computer? Virus? We helpen je snel — via je scherm of langs bij je in Den Haag. Transparante prijzen, geen verrassingen.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-den-haag",
  },
};

export default function ComputerhulpDenHaagPage() {
  return <Computerhulp />;
}
