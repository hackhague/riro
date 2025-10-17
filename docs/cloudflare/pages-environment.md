# Cloudflare Pages Environment Configuration

## Required environment variables
Configure these secrets in the **Cloudflare Pages** project dashboard under **Settings → Environment variables**. Define them for both the production and preview environments so local previews match production behavior.

| Variable | Purpose | Suggested value source |
| --- | --- | --- |
| `RESEND_API_KEY` | Authenticates requests to the Resend transactional email API. | Copy from the **API Keys** tab in the Resend dashboard. Use a restricted key that is limited to the project’s domain. |
| `ADMIN_INBOX` | Destination inbox for operational alerts and escalations. | Use a monitored shared mailbox (e.g., Google Workspace group) so multiple maintainers receive alerts. |
| `ZAPIER_WEBHOOK_CONTACT` | Zapier webhook URL that proxies contact form submissions into the CRM/Zap. | Create or locate the corresponding Zap in Zapier and copy the "Catch Hook" URL. |
| `ZAPIER_WEBHOOK_SUPPORT` | Zapier webhook URL for support requests or other automations. | Provide distinct URLs per workflow to simplify debugging. |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project REST endpoint used by browser and edge clients. | Copy from **Project Settings → API → Project URL** in Supabase. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`<br/>or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Publishable (anon) key used to instantiate the Supabase client in the browser. | Copy the **anon** key from **Project Settings → API → Project API keys**. Supabase may label this key as “publishable default” in the dashboard—either variable name works. |
| `SUPABASE_SERVICE_ROLE_KEY` *(optional)* | Service-role key for privileged server-side Supabase access (not currently used by this app). | Only set if future routes require it. Store as an encrypted secret and never expose this key client-side. |

**Tips**
- Use the **Bulk add variables** option to paste all secrets at once.
- When copying from the Supabase dashboard, paste the `https://...supabase.co` project URL into `NEXT_PUBLIC_SUPABASE_URL` and the publishable anon key (e.g., `sb_publishable_...`) into the chosen `NEXT_PUBLIC_SUPABASE_*` variable.
- For preview branches, override values only when you must isolate traffic (e.g., dedicated staging Supabase project).
- Audit the **Deployments → Environment variables** history after rotations to confirm the expected values.

## Local API route testing
You can validate the Next.js API routes before deploying to Cloudflare Pages:

1. **Cloudflare runtime parity**: Run `npx @cloudflare/next-on-pages@latest preview`. This compiles the application with the same adapter used in production and serves it at `http://localhost:8788`. Use this for end-to-end testing of edge runtime behavior.
2. **Standard Next.js dev server**: Run `npm run dev` for rapid iteration when you do not need Cloudflare-specific shims. This uses `next dev` at `http://localhost:3000` and hot reloads file changes.
3. Point your REST clients (e.g., Thunder Client, curl) at the corresponding local URLs and send representative payloads to `/api` routes. Inspect console output and ensure responses match expectations.

## Verifying downstream deliveries
- **Resend**: Open the Resend dashboard → **Emails** to confirm each API-triggered email. Filter by environment-specific tags or recipient addresses. Drill into an email to view SMTP responses and bounce reasons when diagnosing delivery failures.
- **Zapier**: In the Zapier dashboard, open the relevant Zap → **Task history**. Each webhook invocation should appear with a payload snapshot. Use **Retest** to replay a specific task if the downstream app failed.

## Incident response checklist
When a failure is reported (e.g., missing email, webhook mismatch), follow this runbook:

1. **Capture context**
   - Identify the affected route, timestamp, and user inputs.
   - If using Supabase for persistence, query the relevant table for recent inserts/updates.
2. **Retrieve logs**
   - Use `npx @cloudflare/next-on-pages@latest preview --remote` (or the Cloudflare Pages dashboard → **Functions → Logs**) to tail production logs for the exact timeframe.
   - Export log lines that include the request IDs and correlate them with Resend/Zapier dashboards.
3. **Check downstream systems**
   - Resend: Confirm whether the email was sent, deferred, or bounced. Capture the event ID for future reference.
   - Zapier: Review the task history for errors; download the raw request/response payloads if available.
4. **Replay or requeue**
   - Resend: Trigger a resend via the dashboard ("Resend email") or call the API with the same payload.
   - Zapier: Use the **Retest** button on the failed task or fire the webhook manually with the logged payload.
5. **Document resolution**
   - Record the incident in the team runbook, noting root cause, mitigation steps, and whether credentials or secrets were updated.
   - If the issue involved secret rotation, update Cloudflare Pages environment variables and notify stakeholders.

Maintain this checklist in the repository so future maintainers can extend it with service-specific nuances.
