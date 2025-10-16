import { SEO } from "@/components/SEO";

export default function AlgemeneVoorwaarden() {
  return (
    <main className="container mx-auto px-4 py-10">
      <SEO title="Algemene Voorwaarden" description="Voorwaarden voor onze dienstverlening." canonical="https://www.instantit.nl/algemene-voorwaarden" />
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Algemene Voorwaarden</h1>
      <section className="prose prose-sm md:prose base:text-foreground max-w-none">
        <h2>1. Toepasselijkheid</h2>
        <p>Deze voorwaarden zijn van toepassing op alle offertes, werkzaamheden en overeenkomsten van InstantIT.</p>
        <h2>2. Tarieven en betaling</h2>
        <p>Prijzen zijn in euro inclusief btw tenzij anders vermeld. Betaling binnen 14 dagen na factuurdatum.</p>
        <h2>3. Aansprakelijkheid</h2>
        <p>Wij behandelen apparatuur en data zorgvuldig. Aansprakelijkheid is beperkt tot het factuurbedrag van de opdracht.</p>
        <h2>4. Garantie en nazorg</h2>
        <p>Indien een probleem binnen 7 dagen terugkeert, bieden wij een herbeoordeling op afstand tot 30 minuten.</p>
        <h2>5. Annuleren en verzetten</h2>
        <p>Tot 24 uur voor de afspraak kosteloos verzetten. Binnen 24 uur kan een annuleringsvergoeding gelden.</p>
      </section>
    </main>
  );
}
