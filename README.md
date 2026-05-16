# Silverline Story Builder Deployment

This app is a TanStack Start SSR project. It must run a server runtime on both platforms.

## Local

```bash
npm install
npm run dev
```

## Cloudflare (SSR)

This project deploys to **Cloudflare Workers** (not static Pages output).

```bash
npm run deploy:cloudflare
```

What this does:
- Builds SSR output into `dist/server` and client assets into `dist/client`.
- Uses Wrangler's redirected config (`dist/server/wrangler.json`) during deploy.

Useful check without publishing:

```bash
npm run deploy:cloudflare:dry-run
```

## Vercel (SSR)

This project uses Nitro only for Vercel builds.

```bash
npm run deploy:vercel
```

What this does:
- Runs `build:vercel` with `DEPLOY_TARGET=vercel`.
- Generates Vercel Build Output API files under `.vercel/output`.
- Deploys production with `vercel deploy --prod`.

## Required Dashboard Settings

### Vercel
- Do not use static rewrite rules to `/index.html`.
- Keep build command aligned with `npm run build:vercel` (already set in `vercel.json`).

### Cloudflare
- If using Cloudflare Pages Git builds, this SSR app may not behave as expected with static output only.
- Recommended: deploy with Wrangler (`npm run deploy:cloudflare`) so server runtime and assets are both published.
