# T1.5 – Hosting Requirements (Cloudflare)

Documenteer alle vereisten voor deployment naar Cloudflare Pages/Workers.

## Secrets & Environment Variables
| Naam | Type | Beschrijving | Bron |
| ---- | ---- | ------------ | ---- |
| `SUPABASE_URL` | Pages Secret | | |

## Edge Constraints
- Maximum bundle size
- Node API limitaties
- Unsupported modules

## Analytics & Monitoring
- Cloudflare Web Analytics
- Error reporting (Sentry/Logflare)
- Alerting strategie

## Deploy Flow
1. Build command
2. Wrangler config vereisten
3. Preview vs production verschillen

> **Aanwijzing:** Vul dit document aan vóór het schrijven van Cloudflare deployment scripts.
