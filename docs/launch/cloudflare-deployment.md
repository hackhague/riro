# Cloudflare Pages deployment notes

- The project uses Next.js static export (`output: "export"`) so `npx next build` emits the final site to `out/`.
- Add any redirects to `functions/[[path]].ts`; Cloudflare Pages Functions run before static assets and keep the redirects edge-native.
- Configure build settings in the Pages dashboard with `npm ci` (install), `npx next build` (build), and `out` (output directory).
- For manual deploys, run the same build locally and upload with `wrangler pages deploy out`.
