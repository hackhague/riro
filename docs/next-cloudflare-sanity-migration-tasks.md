# Next.js + Cloudflare + Sanity Migratie – Subtakenoverzicht

Dit document specificeert alle subtaken die nodig zijn voor de migratie vanuit de huidige Vite/React SPA naar een Next.js App Router platform op Cloudflare Pages/Workers met Sanity als CMS. Elke taak heeft een uniek ID, beschrijving, deliverables en afhankelijkheden. Volg de sequentie of de parallelle aanwijzingen om conflicten tussen branches of implementaties te voorkomen.

## Codex-agent delegatieprotocol

Gebruik onderstaande richtlijnen wanneer je een taak door een Codex-agent wilt laten uitvoeren. De stappen zijn identiek voor elke taak; vul de taak-ID en titel in op basis van de secties verderop.

1. **Startopdracht formuleren:** open de taak met een prompt in de vorm _“Start taak <ID> – <titel> volgens docs/next-cloudflare-sanity-migration-tasks.md”_. Vermeld de fase, afhankelijkheden die afgerond zijn en relevante context (links naar design-tokens document, schema’s, etc.).
2. **Branch & PR-naam:** vraag de agent expliciet om een branch `feat/migration/<id>-<korte-naam>` te creëren en een PR-titel `Migration <ID>: <titel>` te gebruiken. Zo blijven branches uniek wanneer meerdere agents parallel werken.
3. **Deliverable-template:** verwijs naar de bestandslocatie waar het resultaat moet landen (bijv. `/docs/t1-1-routes-audit.md`, `app/(marketing)/home/page.tsx`). Voeg indien nodig een vooraf aangemaakte template-bestand toe voordat je de taak delegeert.
4. **Test- en reviewverwachtingen:** benoem welke checks verplicht zijn (`npm run lint`, `npm run test`, `npm run storybook-test`, `npx playwright test`, etc.) zodat de agent ze uitvoert en rapporteert. Geef aan of het om documentatie-only gaat.
5. **Kruisverwijzingen bewaken:** herhaal in de prompt welke gerelateerde taken nog in uitvoering zijn zodat de agent geen overlappende bestanden aanpast. Bijvoorbeeld: “Let op: T5.2 (dienstenpagina) draait parallel, raak `app/(marketing)/diensten/page.tsx` niet.”
6. **Afronding controleren:** vraag de agent na het committen om een PR te genereren met een korte samenvatting en testsectie. Review daarna handmatig voordat je merge’t.

> **Snelle checklist voor delegatie:** taak-ID + titel, branchnaam, deliverable pad, verplichte tests, uitgesloten bestanden/branches, referentie naar dit document.

## 0. Werkafspraken & governance
- **T0.1 – Projectboard & rollen:** zet een centraal Kanban-board op met kolommen _Backlog_, _In progress_, _In review_, _Done_. Wijs per taak een eigenaar, QA reviewer en design guardian toe. Deliverable: gedeeld board + document met rolverdeling. _Codex hand-off:_ wijs de agent op het template `docs/templates/governance-board.md` (maak aan indien nodig) en laat hem de rollenlijst aanvullen.
- **T0.2 – Branchstrategie:** spreek af dat elke taak op een eigen feature branch plaatsvindt met het format `feat/migration/<id>-<korte-naam>`. Eén open PR per hoofdmodule tegelijk om overschrijvingen te voorkomen. Deliverable: branching-richtlijn in README of CONTRIBUTING. _Codex hand-off:_ laat de agent de sectie “Branching” in `CONTRIBUTING.md` bijwerken en voorbeeldnamen toevoegen.
- **T0.3 – CI-basisregels:** verplicht lint/build/test/visual checks per PR; documenteer in CONTRIBUTING. Deliverable: checklist voor reviewers. _Codex hand-off:_ verwijs naar `docs/templates/ci-checklist.md` zodat de agent die invult en linkt vanuit CONTRIBUTING.

> **Parallelisatie-opmerking:** T0.1–T0.3 blokkeren alle andere taken; voer ze eerst uit zodat iedereen dezelfde werkafspraken volgt.

## 1. Inventarisatie & bronmateriaal
- **T1.1 – Routes & navigatie audit:** documenteer alle paden, params en nested layout requirements uit `src/pages`, inclusief 404 gedrag. Deliverable: spreadsheet/markdown-lijst. _Codex hand-off:_ laat de agent `docs/t1-1-routes-audit.md` vullen en screenshots in `/docs/assets/routes` plaatsen.
- **T1.2 – Component- & provider mapping:** beschrijf welke componenten client-side state of side-effects hebben (Navigation, Footer, FloatingCallButton, TooltipProvider, QueryClientProvider, shadcn-toasters, AppointmentWizard). Deliverable: schema met SSR/CSR vereisten. _Codex hand-off:_ verwijs naar `docs/t1-2-component-matrix.md` en vraag om een tabel met kolommen _Component_, _Status_, _SSR/CSR_, _Notities_.
- **T1.3 – Design tokens & assets audit:** exporteer Tailwind-config, CSS variabelen, fonts, iconen, breakpoints, spacing. Leg vast in design-tokens document. Deliverable: tokens.json of markdown. _Codex hand-off:_ wijs op `docs/design-tokens/tailwind-baseline.json` als output en vraag om exports in JSON + toelichting.
- **T1.4 – SEO & integraties audit:** noteer huidige react-helmet-async config, canonical logica, Supabase/Zapier envs, Cloudflare redirect rules. Deliverable: architectuurnotitie. _Codex hand-off:_ gebruik `docs/t1-4-seo-integrations.md` als template en laat de agent codevoorbeelden met bestandsverwijzingen toevoegen.
- **T1.5 – Hosting requirements:** verzamel Cloudflare Pages/Workers vereisten, edge constraints, secrets, analytics. Deliverable: infra memo. _Codex hand-off:_ vraag de agent `docs/t1-5-hosting-requirements.md` bij te werken met tabellen voor secrets en edge limits.

> **Parallelisatie-opmerking:** T1.1–T1.5 kunnen parallel lopen zolang elke eigenaar het resultaat opslaat in `/docs`. Alle taken uit fase 1 moeten afgerond zijn voordat fase 2 begint.

## 2. Next.js basis & tooling
- **T2.1 – Next project bootstrap:** initieer Next.js 14/15 App Router project met TypeScript, ESLint config gelijk aan huidige setup. Deliverable: nieuwe projectmap in repo (zonder legacy code verwijderd). _Codex hand-off:_ instrueer de agent om `npx create-next-app@latest` in `/next` submap te draaien, vervolgens README te actualiseren met setup stappen.
- **T2.2 – Tailwind & fonts migratie:** breng Tailwind configuratie, fonts en index.css tokens over naar `app/globals.css` en `tailwind.config.ts`. Verifieer shadcn utility compatibiliteit. Deliverable: werkende Tailwind build. _Codex hand-off:_ vraag om `npm run lint` en `npm run test` te draaien na migratie en resultaten te loggen in de PR.
- **T2.3 – Providers container:** bouw `app/providers.tsx` voor TooltipProvider, QueryClientProvider, Toaster en toekomstige contexten (`use client`). Deliverable: provider component met tests/story waar mogelijk. _Codex hand-off:_ geef referentie naar `src/providers/AppProviders.tsx` als bron en verzoek om Storybook-story `app/providers.stories.tsx` toe te voegen.

> **Afhankelijkheden:** fase 2 start pas na afronding van fase 1. Taken T2.1–T2.3 worden sequentieel uitgevoerd (in genoemde volgorde) om merge conflicten te vermijden.

## 3. Layouts, metadata & globale UI
- **T3.1 – `app/layout.tsx`:** implementeer `html lang="nl"`, globale fonts, body wrappers, provider integratie. Deliverable: layout bestand met snapshot test. _Codex hand-off:_ vraag om Jest snapshot in `app/__tests__/layout.test.tsx` en vermeld dat `npm run test` verplicht is.
- **T3.2 – Globale component migratie:** migreer Navigation, Footer, FloatingCallButton als client componenten met `next/link`/`usePathname`, verwijder React Router afhankelijkheden. Deliverable: componenten + stories. _Codex hand-off:_ wijs op bestaande componenten in `src/components/layout` en verbied wijzigingen aan `app/(marketing)/` pagina’s tijdens deze taak.
- **T3.3 – Metadata framework:** vervang custom SEO door Next metadata (`generateMetadata`), configureer defaults voor OG/Twitter, canonical logica en metadata types. Deliverable: metadata util + documentatie in `/docs`. _Codex hand-off:_ laat de agent `docs/metadata/next-metadata-guidelines.md` aanmaken en voorbeelden toevoegen met referenties naar `app/(marketing)` routes.

> **Afhankelijkheden:** T3.1 vereist afronding van fase 2. T3.2 en T3.3 kunnen parallel nadat T3.1 klaar is, mits er aparte branches gebruikt worden.

## 4. Routingstrategie
- **T4.1 – Marketing layout shell:** creëer `app/(marketing)/layout.tsx` en `app/not-found.tsx` voor gedeelde hero/footer wrappers. Deliverable: layout skeleton met snapshot. _Codex hand-off:_ vraag de agent om bestaande `Navigation`/`Footer` imports te gebruiken en `npm run lint` + `npm run test` uit te voeren.
- **T4.2 – Route skeletons:** maak lege `page.tsx` bestanden per bestaande route inclusief dynamische segmenten (`computerhulp/[stad]`, etc.). Lever `generateStaticParams` placeholders en revalidate defaults. Deliverable: route bestandenset met TODO markers. _Codex hand-off:_ lever een lijst met gewenste routes als prompt (bijv. via `docs/t4-2-routes.json`) en vraag de agent geen content te implementeren.
- **T4.3 – Navigation smoke test:** valideer dat route skeletons renderen via Next dev server; voeg Playwright rooktest toe. Deliverable: test script. _Codex hand-off:_ instrueer om `npx playwright test --config playwright.smoke.config.ts` toe te voegen en lokaal te draaien.

> **Parallelisatie:** voer T4.1 eerst uit, daarna kunnen T4.2 en T4.3 parallel (eigen branches) zolang beiden op T4.1 rebasen.

## 5. Pagina- & componentmigratie
- **T5.x – Pagina migraties:** voor elke bestaande pagina (Home, Diensten, Computerhulp, Contact, etc.) maak een aparte taak:
  - Kopieer JSX naar nieuwe `page.tsx`.
  - Vervang `react-router-dom` APIs door `next/link`, `usePathname`.
  - Migreer afbeeldingen naar `/public` + `next/image` component.
  - Voeg `use client` toe voor DOM-afhankelijke componenten.
  - Verifieer styling t.o.v. Storybook baseline.
- **T5.shared – Gedeelde componenten:** migreer generieke UI (cards, banners, CTA’s) en update imports.

> **Parallelisatie:** voer nooit twee T5-taken uit op dezelfde route/component tegelijkertijd. Gebruik feature flags of `git sparse-checkout` per pagina. Merge naar main pas na geslaagde visuele diff (Percy/Chromatic) en Playwright rooktest.

_Codex hand-off:_ creëer voor elke T5.x taak een afzonderlijke prompt met exacte bronbestand(en) (`src/pages/...`) en doelbestand. Vraag de agent Percy/Chromatic diff-screenshots te genereren en `npm run lint`, `npm run test`, `npx playwright test --project=chromium` te draaien. Voor T5.shared geef een lijst met componenten en hun nieuwe locatie in `app/components`.

## 6. Data & automatisering
- **T6.1 – Supabase client migratie:** vervang `import.meta.env` door `process.env.NEXT_PUBLIC_*`, configureer Supabase helper voor server runtime. Deliverable: client module + unit test. _Codex hand-off:_ wijs de agent op `supabase/client.ts` als bron, laat `npm run test supabase` of relevante unit tests draaien en resultaten loggen.
- **T6.2 – AppointmentWizard backend:** bouw Next API route (`app/api/appointments/route.ts`) of Cloudflare Worker stub die Supabase insert + Zapier webhook afhandelt met edge-compliant fetch. Deliverable: API route + contracttests. _Codex hand-off:_ verstrek env placeholders via `.env.example` en vraag om contracttests in `tests/appointments.contract.test.ts`.
- **T6.3 – React Query evaluatie:** beslis of React Query behouden moet blijven; bij behoud configureer QueryClientProvider in `app/providers.tsx`, anders verwijder dependencies + state refactor. Deliverable: ADR (architectuur besluit record). _Codex hand-off:_ gebruik `docs/adr/` map en vraag agent ADR-nummer `ADR-006-react-query.md` te schrijven.
- **T6.4 – Edge runtime tests:** voer integratietests in wrangler dev omgeving uit voor Supabase/Zapier flows. Deliverable: testlog + mitigatieplan. _Codex hand-off:_ vraag agent `npm run cf:dev` of `npx wrangler dev` te gebruiken en resultaten in `docs/t6-4-edge-tests.md` vast te leggen.

> **Afhankelijkheden:** fase 6 start na voltooiing van relevante T5 pagina’s die AppointmentWizard of data gebruiken. T6.1 → T6.2 → T6.3 kan parallel met T6.4 zodra API bestaat.

## 7. Sanity CMS integratie
- **T7.1 – Schema ontwerp:** definieer schema’s voor pagina’s, hero’s, USP’s, FAQ’s, tarieven, cases, regio’s, navigatie. Deliverable: `sanity/schema` bestanden + documentatie. _Codex hand-off:_ geef toegang tot huidig contentinventaris (`docs/t1-1`, `docs/t1-3`) en vraag de agent schema’s te plaatsen in `sanity/schemas/*.ts` plus uitleg in `docs/sanity/schemas.md`.
- **T7.2 – next-sanity setup:** configureer client, GROQ queries, helper functions en environment variables. Deliverable: `lib/sanity.ts` + tests. _Codex hand-off:_ vraag om `.env.example` bij te werken met Sanity keys en `npm run lint` + `npm run test` uit te voeren.
- **T7.3 – Content binding:** verbind Sanity data aan gemigreerde pagina’s (Home, Diensten, stadsvarianten). Implementatie in `generateStaticParams` en `generateMetadata`. Deliverable: data fetching modules. _Codex hand-off:_ vermeld welke pagina’s reeds gemigreerd zijn en vraag om integration tests in `tests/sanity-pages.spec.ts`.
- **T7.4 – Preview & Studio:** implementeer `/studio` of subdomein voor Sanity Studio met RBAC + `app/(marketing)/[slug]/preview/page.tsx`. Deliverable: werkende preview. _Codex hand-off:_ lever RBAC matrix in prompt en vraag om deploy script `npm run sanity:deploy` toe te voegen.
- **T7.5 – Webhook & revalidate:** configureer Sanity webhooks → Next revalidate endpoints. Deliverable: webhook handler + docs. _Codex hand-off:_ vraag om webhook handler in `app/api/revalidate/route.ts` te schrijven en documenteer in `docs/sanity/webhooks.md`.

> **Afhankelijkheden:** start T7 na afronding van relevante T5 pagina’s (zodat render targets bestaan) en na T6.2 (zodat API infra bekend is). T7.1 moet klaar zijn voordat T7.2–T7.5 beginnen. Sommige subtaken (T7.3–T7.5) kunnen parallel mits schema’s stabiel zijn.

## 8. SEO, analytics & performance
- **T8.1 – Metadata koppeling:** koppel Sanity SEO velden aan `generateMetadata`, canonical URL’s, structured data (FAQ, LocalBusiness). Deliverable: metadata utils + tests. _Codex hand-off:_ geef de agent toegang tot `docs/sanity/seo-fields.md` en vraag om Jest tests in `app/(marketing)/__tests__/metadata.test.ts`.
- **T8.2 – MetadataRoute implementatie:** bouw `app/sitemap.ts`, `app/robots.txt`, eventuele `app/manifest.ts`. Deliverable: routes + testcases. _Codex hand-off:_ vermeld output URLs en laat `npm run lint` + `npm run test` draaien.
- **T8.3 – Analytics migratie:** migreer tracking scripts naar `next/script`, verwijder react-helmet-async. Deliverable: analytics module. _Codex hand-off:_ specificeer welke scripts behouden moeten blijven en vraag om documentatie-update in `docs/analytics/README.md`.
- **T8.4 – Performance optimalisatie:** optimaliseer hero’s/CTA’s via Next Image responsive config, controleer LCP in Lighthouse. Deliverable: rapport + verbeteringen. _Codex hand-off:_ vraag om Lighthouse run (`npm run lighthouse:ci`) en resultaten opslaan in `docs/performance/lighthouse-report.json`.
- **T8.5 – LLM-proofing:** documenteer hoe SSR/SSG zorgt voor crawlbare content voor zoekmachines en LLM’s; voeg checklist toe voor structured data en sitemap. Deliverable: ADR + checklist. _Codex hand-off:_ laat de agent `docs/adr/ADR-007-llm-readiness.md` schrijven inclusief verwijzingen naar SSR/SSG beslissingen.

> **Afhankelijkheden:** fase 8 start na T7 (data beschikbaar). T8.1 is prerequisite voor T8.2–T8.5; de rest kan parallel met duidelijke branch grenzen.

## 9. Cloudflare Pages/Workers deployment
- **T9.1 – next-on-pages integratie:** voeg `@cloudflare/next-on-pages`, configureer `wrangler.toml`, definieer environment bindings voor Supabase, Sanity, Zapier. Deliverable: config bestanden. _Codex hand-off:_ instrueer om `npm install @cloudflare/next-on-pages --save-dev` uit te voeren en `wrangler.toml` te genereren met placeholders.
- **T9.2 – GitHub Actions pipeline:** implementeer workflow voor lint, build, tests, next-on-pages deploy naar staging. Deliverable: `.github/workflows/next-cloudflare.yml` + secrets documentatie. _Codex hand-off:_ vraag om matrix-builds (Node 18/20) en statusbadge update in README.
- **T9.3 – Routing & caching strategie:** implementeer Cloudflare Pages Functions voor redirects en caching; overweeg KV/DO voor caching van Sanity responses. Deliverable: infra document + config. _Codex hand-off:_ laat agent `docs/cloudflare/routing-strategy.md` aanvullen en configuratiebestanden plaatsen in `infra/`.
- **T9.4 – Observability setup:** configureer Cloudflare Analytics, error logging, alerts. Deliverable: monitoring checklist. _Codex hand-off:_ vraag om checklist in `docs/cloudflare/observability.md` plus verwijzingen naar dashboard-URL’s.

> **Afhankelijkheden:** T9 start nadat T8 minimaal functioneel is (metadata/SSR gereed). T9.1 voorafgaand aan T9.2–T9.4; de overige taken kunnen parallel mits ze niet dezelfde bestanden wijzigen.

## 10. QA, regressie & release
- **T10.1 – Visual regressie suite:** implementeer Percy/Chromatic runs in CI; koppel aan Storybook stories. Deliverable: CI config + baseline screenshots. _Codex hand-off:_ geef Percy/Chromatic project ID’s in de prompt en vraag om script `npm run chromatic` toe te voegen aan CI.
- **T10.2 – Playwright/Cypress E2E:** schrijf tests voor Home, Diensten, AppointmentWizard, Contact. Lever error handling cases. Deliverable: test scripts + recordings. _Codex hand-off:_ specificeer welke data te mocken en vraag om `npx playwright test --project=all-browsers` rapport te uploaden naar `/docs/tests/playwright-report`.
- **T10.3 – Edge case simulaties:** test Supabase down, Zapier failure, lege appointment slots binnen Cloudflare runtime. Deliverable: testlog + mitigaties. _Codex hand-off:_ vraag de agent `npx wrangler dev --test-config cf-tests.config.ts` te draaien en resultaten te documenteren.
- **T10.4 – Accessibility audit:** voer AXE/Pa11y checks uit, controleer focus states, kleurcontrast. Deliverable: auditrapport. _Codex hand-off:_ laat `npx pa11y http://localhost:3000` uitvoeren en resultaten opslaan in `docs/accessibility/a11y-report.json`.
- **T10.5 – Launch checklist & cut-over plan:** stel gedetailleerde go/no-go lijst op inclusief SEO (Search Console inspectie), DNS switch, rollback procedure. Deliverable: document. _Codex hand-off:_ geef planningstemplate `docs/templates/launch-checklist.md` mee voor invulling.
- **T10.6 – Hypercare plan:** plan 48u monitoring, log alerts, marketing/design feedback loop. Deliverable: hypercare schema. _Codex hand-off:_ vraag om `docs/hypercare/48h-plan.md` aan te maken met rollen en shifts.

> **Afhankelijkheden:** fase 10 start als fases 5–9 gereed zijn. Taken kunnen parallel indien verschillende teams verantwoordelijk zijn, maar T10.5 moet als laatste voltooid worden na succesvolle QA-resultaten.

## Samenvatting afhankelijkheden
1. **Fase 0 → Fase 1 → Fase 2 → Fase 3 → Fase 4** zijn strikt sequentieel.
2. **Fase 5** (pagina migraties) kan parallel per pagina zodra Fase 4 klaar is; gebruik branch-strategie om conflicten te vermijden.
3. **Fase 6 & 7** starten na relevante Fase 5 pagina’s; binnen deze fases bestaan interne afhankelijkheden zoals beschreven.
4. **Fase 8** vereist Fase 7 output; **Fase 9** vereist Fase 8 functionaliteit.
5. **Fase 10** sluit af na succesvolle implementatie van Fase 5–9.

## Deliverable checklist per fase
- ✅ Documentatie (markdown/ADR) in `/docs`
- ✅ Code in feature branch + PR met visuele en functionele tests
- ✅ CI pipelines geüpdatet met lint/test/visual checks
- ✅ SEO & LLM checklist ingevuld (Fase 8)
- ✅ Infra checklists voor Cloudflare deploy en monitoring (Fase 9)
- ✅ QA/Launch checklist (Fase 10)

Volg dit plan om taken één voor één of gecontroleerd parallel te starten zonder dat implementaties elkaar overschrijven of regressies veroorzaken.
