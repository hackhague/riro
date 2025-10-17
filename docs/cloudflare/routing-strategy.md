# Cloudflare Routing & Caching Strategie

Deze applicatie wordt als statische export gedeployed via Cloudflare Pages. Alle content wordt door Next.js voorgebakken in `out/` en direct vanaf de edge geserveerd. Cloudflare Pages Functions verzorgen de noodzakelijke logica vóórdat een request de statische assets bereikt.

## Routing

- **Statische assets:** standaard requests vallen automatisch terug op de gegenereerde HTML-, CSS- en JS-bestanden in `out/`.
- **Redirects:** legacy paden worden afgehandeld in `functions/[[path]].ts`. De functie normaliseert het pad en geeft een `301` redirect terug.
- **Fallback gedrag:** wanneer een pad niet bestaat en niet door de functie wordt overgenomen, levert Pages de standaard 404-pagina uit de export.

## Caching

- **Edge caching:** Pages host de `out/` assets op Cloudflare's CDN, waardoor statische pagina's wereldwijd gecachet worden.
- **Stale-while-revalidate:** voor dynamische data zijn er momenteel geen edge fetches; wanneer dit verandert kan de fetch-cache van Next worden gebruikt in combinatie met `Cache-Control` headers vanuit een functie.
- **Custom caches:** er zijn geen KV of Durable Objects nodig zolang de site volledig statisch blijft.

## Configuratiebestanden

- `next.config.mjs` – schakelt `output: "export"` in zodat `npx next build` een statische site produceert.
- `functions/[[path]].ts` – Pages Function die redirects en toekomstig edge-gedrag beheert.
- `docs/launch/cloudflare-deployment.md` – build- en deployinstructies voor het Pages-project.
