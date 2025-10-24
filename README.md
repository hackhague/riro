# Riro Web Application

This repository contains the Riro marketing and application shell built with **Next.js 15** and the App Router. The project is designed to run on **Cloudflare Pages** with server-side logic handled by **Cloudflare Workers**. Data access is powered by **Supabase REST** endpoints, and transactional email is delivered through **Resend**.

## Stack Overview

- **Framework:** Next.js 15 (App Router, server actions, Route Handlers)
- **UI:** React 18 with TypeScript, shadcn/ui, Tailwind CSS
- **Hosting:** Cloudflare Pages for static assets and Cloudflare Workers for dynamic routes
- **Data:** Supabase REST APIs
- **Email:** Resend

## Getting Started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000) with hot reloading.

## Building for Production

Cloudflare Pages uses the standard Next.js build output together with `@cloudflare/next-on-pages`.

```sh
# Generate the Cloudflare-compatible build output
npm run cf:build
```

The build artifact is written to the `.vercel/output` directory and includes the Pages Functions bundle.

## Previewing Locally with Cloudflare Workers

You can preview the production build locally using Wrangler:

```sh
npm run preview
```

This command runs `npm run cf:build` and then serves the generated output with `wrangler pages dev`, emulating the Cloudflare environment (including Workers bindings).

## Deploying

1. Push your changes to the `main` branch (or the branch configured in Cloudflare Pages).
2. Cloudflare Pages will install dependencies (`npm install`), execute `npm run cf:build`, and deploy the generated `.vercel/output/static` assets along with the Workers bundle.
3. Configure environment variables such as Supabase API keys or Resend secrets via the Cloudflare Pages dashboard.

For manual deployments, you can upload the `.vercel/output/static` directory using `wrangler pages deploy` if needed.

## Dependency Checks

Use the bundled depcheck script to ensure there are no unused dependencies:

```sh
npm run check:deps
```

The script runs automatically in CI to keep the dependency graph clean.

---

For contribution guidelines and additional documentation, refer to the files in the `docs/` directory and `CONTRIBUTING.md`.
