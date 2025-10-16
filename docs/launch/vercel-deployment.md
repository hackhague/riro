# Vercel deployment notes

- The project relies on Next.js' default routing without a `vercel.json` catch-all rewrite, so dynamic routes render via the Next server output.
- Configure any required rewrites or redirects in `next.config.mjs` to stay aligned with the Next.js router.
- Use `vercel --prebuilt` for previews after building locally with `next build` (requires Vercel authentication).
