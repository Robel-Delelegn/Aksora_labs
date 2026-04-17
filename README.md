# Aksora Labs Website

Production-ready Next.js marketing site for Aksora Labs, a premium software design and engineering partner.

The build is designed around trust, clarity, and premium perception. It includes:

- Multi-page App Router site
- Responsive premium UI system
- Sample case studies and testimonials clearly marked as demo content
- SEO metadata, robots, sitemap, manifest, and generated OG images
- Validated contact form with optional webhook delivery
- Strategy notes and content replacement guidance

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- Lucide React
- Zod

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Optional Environment Variables

The contact form works without extra setup and will log submissions on the server. For production routing into email, CRM, or automation, set:

```bash
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.example.com
```

## Project Structure

```text
src/
  app/
    about/
    api/contact/
    contact/
    industries/
    process/
    services/
    work/
    apple-icon.svg
    icon.svg
    layout.tsx
    manifest.ts
    not-found.tsx
    opengraph-image.tsx
    page.tsx
    robots.ts
    sitemap.ts
    twitter-image.tsx
  components/site/
    button-link.tsx
    case-study-card.tsx
    contact-form.tsx
    cta-section.tsx
    faq-list.tsx
    footer.tsx
    header.tsx
    logo.tsx
    mobile-nav.tsx
    page-hero.tsx
    section-heading.tsx
    section-shell.tsx
    structured-data.tsx
  lib/
    contact-schema.ts
    metadata.ts
    site-data.ts
docs/
  brand-strategy.md
```

## Content Replacement Checklist

Replace these before launch:

1. Update company URL, email, response language, and social URLs in [`src/lib/site-data.ts`](./src/lib/site-data.ts).
2. Replace all sample case studies in [`src/lib/site-data.ts`](./src/lib/site-data.ts) with approved client work.
3. Replace sample testimonials and placeholder client identities in [`src/lib/site-data.ts`](./src/lib/site-data.ts).
4. Update the generated OG artwork copy in [`src/app/opengraph-image.tsx`](./src/app/opengraph-image.tsx) if the headline or positioning changes.
5. Connect `CONTACT_WEBHOOK_URL` or swap the route handler in [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts) for your preferred email or CRM workflow.
6. Review icon and brand mark files in [`src/app/icon.svg`](./src/app/icon.svg) and [`src/app/apple-icon.svg`](./src/app/apple-icon.svg).

## Validation

```bash
npm run lint
npm run build
```

## Strategy Notes

See [`docs/brand-strategy.md`](./docs/brand-strategy.md) for:

- Information architecture
- Brand and visual direction
- Ethical persuasion choices
- Copy system rationale
- UX and conversion notes
