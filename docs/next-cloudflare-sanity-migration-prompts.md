# Startprompts per Migratietaak

Gebruik onderstaande prompts om taken uit `docs/next-cloudflare-sanity-migration-tasks.md` aan een Codex-agent te delegeren. Vul ontbrekende details (status afhankelijkheden, contextlinks) voor je de taak start.

## Fase 0 – Werkafspraken & Governance

### T0.1 – Projectboard & Rollen
```
Start taak T0.1 – Projectboard & rollen volgens docs/next-cloudflare-sanity-migration-tasks.md.
Maak branch feat/migration/t0-1-board. Gebruik template docs/templates/governance-board.md en vul boardlink + rollen.
Voer documentatie-only taak uit (geen code). Geen tests nodig.
```

### T0.2 – Branchstrategie
```
Start taak T0.2 – Branchstrategie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t0-2-branch-strategy. Werk in CONTRIBUTING.md sectie "Branching" bij met voorbeeldnamen en verwijzing naar docs/templates/ci-checklist.md.
Documentatie-only; voer `npm run lint` ter controle uit.
```

### T0.3 – CI-basisregels
```
Start taak T0.3 – CI-basisregels volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t0-3-ci-rules. Vul docs/templates/ci-checklist.md in en link vanuit CONTRIBUTING.md.
Verwachte checks: npm run lint.
```

## Fase 1 – Inventarisatie
(…)
### T1.1 – Routes & navigatie audit
```
Start taak T1.1 – Routes & navigatie audit volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t1-1-routes.
Vul docs/t1-1-routes-audit.md en voeg screenshots in docs/assets/routes/.
Documentatie-only; geen tests vereist.
```

### T1.2 – Component- & provider mapping
```
Start taak T1.2 – Component- & provider mapping volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t1-2-components.
Werk docs/t1-2-component-matrix.md bij. Geen code wijzigingen buiten docs.
Documentatie-only.
```

### T1.3 – Design tokens & assets audit
```
Start taak T1.3 – Design tokens & assets audit volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t1-3-design-tokens.
Exporteer Tailwind data naar docs/design-tokens/tailwind-baseline.json en beschrijf assets in README (maak indien nodig docs/design-tokens/README.md).
Geen tests vereist.
```

### T1.4 – SEO & integraties audit
```
Start taak T1.4 – SEO & integraties audit volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t1-4-seo.
Vul docs/t1-4-seo-integrations.md met verwijzingen naar code.
Geen tests vereist.
```

### T1.5 – Hosting requirements
```
Start taak T1.5 – Hosting requirements volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t1-5-hosting.
Werk docs/t1-5-hosting-requirements.md bij. Documenteer edge constraints en secrets.
Geen tests vereist.
```

## Fase 2 – Next.js basis & tooling

### T2.1 – Next project bootstrap
```
Start taak T2.1 – Next project bootstrap volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t2-1-next-bootstrap.
Voeg Next.js app toe in /next, actualiseer README.md met setup stappen.
Voer npm run lint en npm run test uit in root (en nieuwe app indien van toepassing).
```

### T2.2 – Tailwind & fonts migratie
```
Start taak T2.2 – Tailwind & fonts migratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t2-2-tailwind.
Migreer tailwind config naar next project, update app/globals.css. Verifieer compatibiliteit met shadcn.
Draai npm run lint en npm run test.
```

### T2.3 – Providers container
```
Start taak T2.3 – Providers container volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t2-3-providers.
Maak app/providers.tsx, hergebruik logica uit src/providers/AppProviders.tsx en voeg story tests toe.
Voer npm run lint en npm run test uit.
```

## Fase 3 – Layouts, metadata & globale UI

### T3.1 – app/layout.tsx
```
Start taak T3.1 – app/layout.tsx volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t3-1-root-layout.
Implementeer globale layout met fonts en providers. Voeg Jest snapshot test toe in app/__tests__/layout.test.tsx.
Voer npm run lint en npm run test uit.
```

### T3.2 – Globale component migratie
```
Start taak T3.2 – Globale component migratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t3-2-global-components.
Migreer Navigation, Footer, FloatingCallButton naar Next components + stories. Raak app/(marketing) pagina's niet aan.
Voer npm run lint, npm run test, en storybook gerelateerde checks uit indien beschikbaar.
```

### T3.3 – Metadata framework
```
Start taak T3.3 – Metadata framework volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t3-3-metadata.
Schrijf metadata helpers en documenteer in docs/metadata/next-metadata-guidelines.md.
Voer npm run lint en npm run test uit.
```

## Fase 4 – Routingstrategie

### T4.1 – Marketing layout shell
```
Start taak T4.1 – Marketing layout shell volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t4-1-marketing-layout.
Maak app/(marketing)/layout.tsx en app/not-found.tsx met gedeelde UI. Hergebruik Navigation/Footer.
Voer npm run lint en npm run test uit.
```

### T4.2 – Route skeletons
```
Start taak T4.2 – Route skeletons volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t4-2-route-skeletons.
Gebruik docs/t4-2-routes.json als bron om lege page.tsx bestanden aan te maken met TODO's.
Voer npm run lint uit.
```

### T4.3 – Navigation smoke test
```
Start taak T4.3 – Navigation smoke test volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t4-3-smoke-test.
Implementeer Playwright rooktest (playwright.smoke.config.ts) en valideer route skeletons.
Voer npm run lint en npx playwright test --config playwright.smoke.config.ts uit.
```

## Fase 5 – Pagina- & componentmigratie

> Let op: start één T5.x taak per branch.

### T5.x – Pagina migraties
```
Start taak T5.<nr> – <paginanaam> migratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t5-<nr>-<slug>.
Migreer content van corresponderende src/pages route naar app/(marketing)/.../page.tsx. Vervang react-router door next/navigation, migreer assets naar public/.
Voer npm run lint, npm run test, en npx playwright test --project=chromium uit. Voeg indien mogelijk visuele diff toe.
```

### T5.shared – Gedeelde componenten
```
Start taak T5.shared – gedeelde componenten volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t5-shared-components.
Verplaats gedeelde UI naar app/components, update imports. Voeg story/tests toe.
Voer npm run lint en npm run test uit.
```

## Fase 6 – Data & automatisering

### T6.1 – Supabase client migratie
```
Start taak T6.1 – Supabase client migratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t6-1-supabase.
Maak Next-compatible Supabase helper met process.env variabelen. Voeg unit tests toe.
Voer npm run lint en npm run test uit.
```

### T6.2 – AppointmentWizard backend
```
Start taak T6.2 – AppointmentWizard backend volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t6-2-appointment-api.
Implementeer app/api/appointments/route.ts inclusief Supabase insert + Zapier webhook.
Voer npm run lint, npm run test, en relevante contracttests uit.
```

### T6.3 – React Query evaluatie
```
Start taak T6.3 – React Query evaluatie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t6-3-react-query.
Schrijf docs/adr/ADR-006-react-query.md met besluit en update code/config indien nodig.
Voer npm run lint en npm run test uit voor eventuele codewijzigingen.
```

### T6.4 – Edge runtime tests
```
Start taak T6.4 – Edge runtime tests volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t6-4-edge-tests.
Draai npx wrangler dev tests voor Supabase/Zapier flows en leg resultaten vast in docs/t6-4-edge-tests.md (maak bestand).
Voer npm run lint uit indien code wordt aangepast.
```

## Fase 7 – Sanity CMS integratie

### T7.1 – Schema ontwerp
```
Start taak T7.1 – Sanity schema ontwerp volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t7-1-sanity-schemas.
Implementeer schema's in sanity/schemas/*.ts en documenteer in docs/sanity/schemas.md.
Voer npm run lint en relevante tests uit.
```

### T7.2 – next-sanity setup
```
Start taak T7.2 – next-sanity setup volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t7-2-next-sanity.
Maak lib/sanity.ts, update .env.example met keys, schrijf tests.
Voer npm run lint en npm run test uit.
```

### T7.3 – Content binding
```
Start taak T7.3 – Content binding volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t7-3-content-binding.
Koppel Sanity data aan gemigreerde pagina's, schrijf integration tests in tests/sanity-pages.spec.ts.
Voer npm run lint, npm run test, npx playwright test --config playwright.smoke.config.ts (indien van toepassing).
```

### T7.4 – Preview & Studio
```
Start taak T7.4 – Sanity preview & Studio volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t7-4-preview.
Implementeer /studio of subdomein, RBAC matrix, preview pagina.
Voer npm run lint en npm run test uit.
```

### T7.5 – Webhook & revalidate
```
Start taak T7.5 – Webhook & revalidate volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t7-5-webhooks.
Schrijf app/api/revalidate/route.ts en documenteer in docs/sanity/webhooks.md.
Voer npm run lint en npm run test uit.
```

## Fase 8 – SEO, analytics & performance

### T8.1 – Metadata koppeling
```
Start taak T8.1 – Metadata koppeling volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t8-1-metadata.
Verbind Sanity SEO velden met Next generateMetadata, update tests in app/(marketing)/__tests__/metadata.test.ts.
Voer npm run lint en npm run test uit.
```

### T8.2 – MetadataRoute implementatie
```
Start taak T8.2 – MetadataRoute implementatie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t8-2-metadataroutes.
Bouw app/sitemap.ts, app/robots.txt, app/manifest.ts indien nodig.
Voer npm run lint en npm run test uit.
```

### T8.3 – Analytics migratie
```
Start taak T8.3 – Analytics migratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t8-3-analytics.
Migreer scripts naar next/script, update docs/analytics/README.md.
Voer npm run lint en npm run test uit.
```

### T8.4 – Performance optimalisatie
```
Start taak T8.4 – Performance optimalisatie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t8-4-performance.
Voer npm run lighthouse:ci, werk docs/performance/lighthouse-report.json en README bij, optimaliseer afbeeldingen.
Voer npm run lint, npm run test, npm run lighthouse:ci.
```

### T8.5 – LLM-proofing
```
Start taak T8.5 – LLM-proofing volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t8-5-llm.
Schrijf docs/adr/ADR-007-llm-readiness.md en voeg checklist toe.
Voer npm run lint uit indien code wijzigt.
```

## Fase 9 – Cloudflare Pages/Workers deployment

### T9.1 – next-on-pages integratie
```
Start taak T9.1 – next-on-pages integratie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t9-1-next-on-pages.
Installeer @cloudflare/next-on-pages, maak wrangler.toml, configureer bindings.
Voer npm run lint en npm run build uit.
```

### T9.2 – GitHub Actions pipeline
```
Start taak T9.2 – GitHub Actions pipeline volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t9-2-ci.
Maak .github/workflows/next-cloudflare.yml met lint/build/test/deploy stappen, voeg badge toe in README.
Voer npm run lint en npm run test uit.
```

### T9.3 – Routing & caching strategie
```
Start taak T9.3 – Routing & caching strategie volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t9-3-routing.
Vul docs/cloudflare/routing-strategy.md aan en commit configuratiebestanden (bijv. infra/).
Voer npm run lint indien code wijzigt.
```

### T9.4 – Observability setup
```
Start taak T9.4 – Observability setup volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t9-4-observability.
Documenteer monitoring in docs/cloudflare/observability.md, voeg scripts/config toe.
Voer npm run lint uit indien code wijzigt.
```

## Fase 10 – QA, regressie & release

### T10.1 – Visual regressie suite
```
Start taak T10.1 – Visual regressie suite volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-1-visual-regression.
Integreer Percy/Chromatic in CI en documenteer baseline screenshots.
Voer npm run lint, npm run test en relevante visuele checks uit.
```

### T10.2 – Playwright/Cypress E2E
```
Start taak T10.2 – Playwright/Cypress E2E volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-2-e2e.
Schrijf E2E tests voor kernpagina's, sla rapporten op in docs/tests/playwright-report/.
Voer npx playwright test --project=all-browsers.
```

### T10.3 – Edge case simulaties
```
Start taak T10.3 – Edge case simulaties volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-3-edge-cases.
Draai npx wrangler dev --test-config cf-tests.config.ts, documenteer in docs/t10-3-edge-cases.md (maak bestand).
Voer npm run lint uit indien code wijzigt.
```

### T10.4 – Accessibility audit
```
Start taak T10.4 – Accessibility audit volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-4-a11y.
Voer npx pa11y http://localhost:3000 uit, sla resultaten op in docs/accessibility/a11y-report.json en documenteer bevindingen.
Voer npm run lint uit indien code wijzigt.
```

### T10.5 – Launch checklist & cut-over plan
```
Start taak T10.5 – Launch checklist volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-5-launch.
Vul docs/templates/launch-checklist.md in (kopieer naar docs/launch/<release>.md) en documenteer go/no-go stappen.
Documentatie-only.
```

### T10.6 – Hypercare plan
```
Start taak T10.6 – Hypercare plan volgens docs/next-cloudflare-sanity-migration-tasks.md.
Branch: feat/migration/t10-6-hypercare.
Vul docs/hypercare/48h-plan.md in met shifts en feedbackloops.
Documentatie-only.
```
