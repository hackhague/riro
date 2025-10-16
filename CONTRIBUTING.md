# Contributing Guide

Dank voor je interesse in dit project. Volg onderstaande richtlijnen om consistente bijdragen te leveren tijdens de Next.js + Cloudflare + Sanity migratie.

## Branching
- Maak voor elke taak een feature branch met het format `feat/migration/<id>-<korte-naam>` (bijv. `feat/migration/t2-1-next-bootstrap`).
- Houd maximaal één open PR per hoofdmodule (bijv. routing, providers, marketing home).
- Rebase regelmatig op `main` om conflicten te voorkomen.

## Pull Requests
- Beschrijf duidelijk welke taak uit `docs/next-cloudflare-sanity-migration-tasks.md` is uitgevoerd.
- Verwijs naar relevante documentatie (bijv. `docs/t1-1-routes-audit.md`).
- Voeg een samenvatting en testresultaten toe conform het PR-sjabloon.

## Verplichte Checks
Gebruik de checklist uit [docs/templates/ci-checklist.md](docs/templates/ci-checklist.md) en voeg waar nodig extra controles toe.

Minimaal uit te voeren voor codewijzigingen:
- `npm run lint`
- `npm run test`
- `npm run build`
- Playwright rooktest: `npx playwright test --config playwright.smoke.config.ts` (indien relevant)
- Visuele regressie (Percy/Chromatic) wanneer UI wijzigt

## Documentatie
- Documenteer onderzoeksresultaten in de aangewezen bestanden binnen `/docs`.
- Bewaar ADR's in `/docs/adr/` met het format `ADR-XXX-titel.md`.
- Update templates niet zonder afstemming; maak kopieën in de relevante map (bijv. `/docs/launch/`).

## Communicatie
- Gebruik het projectboard (T0.1) voor statusupdates.
- Geef blockers aan in het teamkanaal en vermeld benodigde beslissingen in ADRs.

Bedankt voor je bijdrage!
