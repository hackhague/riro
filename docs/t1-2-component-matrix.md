# T1.2 – Component- & Provider Mapping

Documenteer welke componenten client-side state of side-effects hebben en hoe ze in Next.js landen.

| Component | Huidige locatie | SSR/CSR | State/Effect notities | Migratie-acties |
| --------- | ---------------- | ------- | ---------------------- | --------------- |
| Navigation | `src/components/layout/Navigation.tsx` | | | |

## Observaties
- 

## Aanpaknotities
- Controleer context providers (`src/providers`).
- Markeer componenten die `useEffect` of browser-API's gebruiken als `use client` kandidaten.
