# Cloudflare Routing & Caching Strategie

Leg uit hoe Next-on-Pages routes en Workers caching worden geconfigureerd.

## Routing
- Edge functions vs static assets
- Fallback gedrag (404/500)
- Internationale ondersteuning (indien van toepassing)

## Caching
- Default TTL
- Stale-while-revalidate
- Custom caches (KV/DO)

## Configuratiebestanden
- `wrangler.toml`
- `_headers` / `_routes.json`

## TODO
- [ ] Analyseer huidige `vercel.json`
- [ ] Definieer Cloudflare-equivalent regels
