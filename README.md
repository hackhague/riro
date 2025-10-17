# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e1a130b6-3a0d-41f3-9d48-853115ae6774

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e1a130b6-3a0d-41f3-9d48-853115ae6774) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Next.js 14 (App Router)
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e1a130b6-3a0d-41f3-9d48-853115ae6774) and click on Share -> Publish.

### Deploying to Cloudflare Pages

Cloudflare Pages can deploy this site directly via static HTML export. Configure your project as follows:

1. In the Cloudflare dashboard, go to **Workers & Pages → Create application → Pages → Import an existing Git repository** and choose this repo.
2. Under **Build settings**, select the **Next.js (Static HTML Export)** preset. Cloudflare will populate:
   - **Production branch**: `main`
   - **Build command**: `npx next build`
   - **Build output directory**: `out`
3. Override the **Install command** to `npm ci` if you prefer reproducible installs.
4. Add the required `NEXT_PUBLIC_*` environment variables for Supabase, Zapier, analytics, etc. in the Pages dashboard.
5. Trigger your first deployment. Pages will install dependencies, run `npx next build` (which exports to `out` thanks to `next.config.mjs`), upload the static assets, and attach the Cloudflare Pages Functions bundled in `/functions`.

> Need a manual deployment instead? Run `npm ci && npx next build` locally, then upload the generated `out/` directory with `wrangler pages deploy out`.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
