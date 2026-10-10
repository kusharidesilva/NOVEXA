# NOVEXA portfolio

A responsive Next.js App Router site for NOVEXA. The original supplied logo is stored unchanged at `public/logo.png`. The portfolio includes eight live websites and browser-based products with optimized project covers.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` and `npm run lint` before deploying.

## Cloudflare Workers hosting

The production site is hosted at `https://novexa.kusharidesilva3.workers.dev`. The public site origin is recorded in `.env.production` so the generated sitemap, canonical links, and Open Graph URLs point to the hosted site.

```bash
npm ci
npm run lint
npm run cf:build
npm run cf:preview
npm run deploy
```

`cf:preview` runs the built Worker locally. Stop it before running `deploy`. Deployment uses the signed-in Cloudflare account through Wrangler. If the site moves to a custom domain, update `NEXT_PUBLIC_SITE_URL` in `.env.production` and redeploy.

The contact form needs the following Cloudflare Worker secrets or variables before it can deliver inquiries: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. The sender must be verified in Resend. Set them with `wrangler secret put <NAME>` from this directory, then redeploy. Until configured, the form returns a setup error instead of claiming a message was sent.

## Configure inquiries and SEO

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: Resend API key.
- `CONTACT_TO_EMAIL`: address that receives inquiries.
- `CONTACT_FROM_EMAIL`: verified sender address in Resend.
- `NEXT_PUBLIC_SITE_URL`: deployed site origin, for canonical URLs, sitemap, and Open Graph links.

The contact form validates input on the client and server. If email delivery is not configured or fails, it shows an error and does not claim the inquiry was sent.

## Content sources

- `data/projects.ts`: live portfolio entries, links, and case study copy.
- `data/services.ts`: services.
- `components/testimonials.tsx`: testimonial placeholders.
- `app/page.tsx`: statistics placeholders and featured content.
- `components/footer.tsx`: contact and social details.

Project cover images are stored in `public/projects`. Add verified testimonials and company statistics only after approval.
