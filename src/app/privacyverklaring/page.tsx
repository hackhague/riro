import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Lees hoe InstantIT omgaat met jouw gegevens.",
  alternates: {
    canonical: "https://www.instantit.nl/privacyverklaring",
  },
};

export default function Privacyverklaring() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Privacyverklaring</h1>
      <p className="text-foreground/80 mb-4">Wij verwerken persoonsgegevens uitsluitend voor het leveren van onze diensten, communicatie en facturatie, conform de AVG.</p>
      <ul className="list-disc pl-5 space-y-2 text-foreground/80">
        <li>Doelen: planning afspraken, klantenservice, facturatie en nazorg.</li>
        <li>Grondslagen: overeenkomst, toestemming en gerechtvaardigd belang.</li>
        <li>Bewaartermijnen: zo kort als noodzakelijk en conform wettelijke plichten.</li>
        <li>Rechten: inzage, rectificatie, verwijdering, bezwaar en dataportabiliteit.</li>
        <li>Contact: support@instantit.nl voor privacy-gerelateerde vragen.</li>
      </ul>
    </main>
  );
}
