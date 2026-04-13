# Fifty & Five

Next.js 14 (App Router) + TypeScript + Tailwind + Motion. Dark-mode
visual system with glassmorphism, aurora gradients, cursor spotlight,
magnetic CTAs, and tilt cards.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in values you want locally
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. All are optional for local dev — the site degrades
gracefully when values are missing (Calendly falls back to a default
URL, Resend logs to the console, Plausible simply doesn't render).

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, robots |
| `NEXT_PUBLIC_CALENDLY_URL` | Inline scheduler on /contact |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics (omit to disable) |
| `RESEND_API_KEY` | Contact form email delivery |
| `CONTACT_TO_EMAIL` | Inbox for contact submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |

## Replacing the placeholders

- **Client logos** — drop SVGs in `/public/logos/` and add
  `asset: '/logos/foo.svg'` to entries in `lib/data/clients.ts`.
- **Case study imagery** — swap the `<PlaceholderImage>` components in
  `app/work/[slug]/page.tsx` and the bento grid on the homepage for
  `<Image>` tags pointing at real assets in `/public/images/`.
- **Lucas's portrait** — replace the placeholder on `/about` with an
  `<Image>` at `/public/images/lucas.jpg`.

## Deploying to Vercel

1. Import `fiftyandfive/fifty-and-five-site` as a new Vercel project.
2. Add the env vars above in Project Settings → Environment Variables.
3. Push to main for production; every other branch gets a preview URL.

No build config required — Vercel detects Next.js automatically.
