# Changelog — InstantIT

## 2025-02-14
- Rebuilt the computerhulp city pages for Den Haag, Delft, Zoetermeer, Rijswijk, Voorburg en Leiden with refreshed hero copy, internal links en de nieuwe `PriceBox` component. `PriceBox` haalt tarieven uit `src/data/pricing.ts`, dat nu de bron van waarheid is voor remote, aan-huis en gehackt-diensten.
- Toegevoegd: JSON-LD helpers (`localBusinessJsonLd`, `serviceOfferJsonLd`, `faqPageJsonLd`) in `src/lib/seo.ts` en geïntegreerd op de city pagina's, `/diensten` en `/ik-ben-gehackt` voor LocalBusiness-, Service- en FAQ-structuurdata.
- Nieuw: `sitemap.ts` en `robots.ts` leveren nu automatisch bijgewerkte sitemap en robots policies inclusief hreflang `nl-NL` en canonical alternates.
- Terminologie opgeschoond: overal "Incident Response" vervangen door "Directe hulp bij gehackt" inclusief tarieven, diensten en homepage-secties.
- JSON-LD voor hackdiensten en tariefweergave verwijst nu naar dezelfde prijzen uit `src/data/pricing.ts`, zodat Remote QuickFix, aan-huis en spoed-/First Response-tarieven centraal beheerd zijn.
