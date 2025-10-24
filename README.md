# Riro Web Application

This repository contains the Riro marketing site and application shell built with **Next.js 15** and the App Router. The app is deployed to **Cloudflare Pages** with dynamic routes running as **Cloudflare Workers**. Supabase provides REST APIs for persistence, and transactional email is handled by **Resend**.

## Stack Overview

- **Framework:** Next.js 15 (App Router, Server Components, Route Handlers)
- **UI:** React 18 with TypeScript, shadcn/ui, Tailwind CSS
- **Hosting:** Cloudflare Pages for static assets and Cloudflare Workers for server logic
- **Data:** Supabase REST endpoints
- **Email:** Resend

## Local Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Cloudflare Build Workflow

Cloudflare Pages builds and deploys the project using `@cloudflare/next-on-pages`. To generate the production output locally, run:

```sh
npm run cf:build
```

This produces the `.vercel/output` directory, including the Pages Functions bundle that Cloudflare deploys alongside static assets.

To emulate the Cloudflare runtime (Workers, bindings, and static hosting) locally, use Wrangler:

```sh
npm run preview
```

This command runs `npm run cf:build` and then serves the generated bundle with `wrangler pages dev`.

## Deployment via Cloudflare Pages

1. Push changes to the branch configured in your Cloudflare Pages project (typically `main`).
2. Cloudflare installs dependencies (`npm install`) and executes `npm run cf:build`.
3. The generated `.vercel/output/static` assets and the Workers bundle are deployed automatically.
4. Manage secrets such as Supabase keys and Resend tokens from the Cloudflare Pages dashboard.

For manual deployments or hotfixes, you can upload the build output with:

```sh
npx wrangler pages deploy .vercel/output/static
```

## Dependency Hygiene

Check for unused dependencies before committing changes:

```sh
npm run check:deps
```

The command is also executed in CI to keep the dependency graph tidy.

---

For contribution guidelines and additional documentation, explore `docs/` and `CONTRIBUTING.md`.
