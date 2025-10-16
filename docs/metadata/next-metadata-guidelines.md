# Next.js Metadata Guidelines

Gebruik dit document om de migratie van custom SEO naar het Next.js metadata API framework te sturen.

## Default Metadata
- Site titel
- Beschrijving
- Canonical base URL
- Locale instellingen

## Route-specifieke metadata
| Route | Brondata | generateMetadata notities | Structured data |
| ----- | -------- | ------------------------- | --------------- |

## Best Practices
- Gebruik `metadataBase` voor absolute URL's.
- Lever OpenGraph/Twitter objecten vanuit Sanity zodra T7 gereed is.
- Voeg JSON-LD via `Metadata` API waar nodig.

## Taken
- [ ] `app/layout.tsx` defaults instellen
- [ ] Helpers in `lib/metadata.ts` schrijven
- [ ] Documenteer overrides per marketing route

> **Referentie:** Zie `docs/next-cloudflare-sanity-migration-tasks.md` fase 3 en 8.
