# NOVEXA portfolio

A responsive Next.js App Router site for NOVEXA. The original supplied logo is stored unchanged at `public/logo.png`. The portfolio cases, testimonials, and company statistics are explicitly labeled as sample content until approved material is available.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` and `npm run lint` before deploying.

## Configure inquiries and SEO

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: Resend API key.
- `CONTACT_TO_EMAIL`: address that receives inquiries.
- `CONTACT_FROM_EMAIL`: verified sender address in Resend.
- `NEXT_PUBLIC_SITE_URL`: deployed site origin, for canonical URLs, sitemap, and Open Graph links.

The contact form validates input on the client and server. If email delivery is not configured or fails, it shows an error and does not claim the inquiry was sent.

## Replace sample content

- `data/projects.ts`: concept portfolio entries and case study copy.
- `data/services.ts`: services.
- `components/testimonials.tsx`: testimonial placeholders.
- `app/page.tsx`: statistics placeholders and featured content.
- `components/footer.tsx`: contact and social details.

Replace concept visuals with approved project images when available. Add verified client names, project outcomes, and testimonials only after approval.
