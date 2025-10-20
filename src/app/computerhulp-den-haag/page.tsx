import type { Metadata } from "next";
import Computerhulp from "../computerhulp/page";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag | Scheveningen, Centrum & Duinoord",
  description:
    "Computerhulp in Den Haag - Scheveningen, Centrum, Statenkwartier en meer wijken. Computer traag, virus of WiFi down? We helpen snel via remote of on-site. VOG-gecertificeerd, transparante prijzen.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-den-haag",
  },
};

export default function ComputerhulpDenHaagPage() {
  return <Computerhulp city="Den Haag" />;
}
