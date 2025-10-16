# CI Checklist Template

Gebruik deze checklist als referentie voor elke PR en release.

- [ ] `npm run lint`
- [ ] `npm run test`
- [ ] `npm run build`
- [ ] `npx playwright test` (rook/smoke configuratie)
- [ ] Visuele diff (Percy/Chromatic)
- [ ] Lighthouse/performancerapport geüpload
- [ ] Environment secrets geverifieerd
- [ ] Checklist ondertekend door QA reviewer

> **Tip:** Voeg aanvullende stappen toe voor specifieke taken (bijv. Sanity schema deploys, Cloudflare wrangler tests).
