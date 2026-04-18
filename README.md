# Aksora Labs Website

Next.js marketing site for Aksora Labs, a software design and engineering partner.

The build is designed around trust, clarity, and premium perception. It includes:

- Multi-page App Router site
- Responsive premium UI system
- Real client case studies with anonymized company descriptors where needed
- SEO metadata, robots, sitemap, manifest, and generated OG images
- Validated contact form with Telegram delivery support
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

## Contact Delivery

The simplest setup is Telegram. Telegram bots cannot send to a phone number directly, so you need a bot token and the target Telegram `chat_id`.

Configure these in `.env.local`:

```bash
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

Notes:

- The number `+251708851368` is not enough for the Bot API by itself. The bot must message a Telegram `chat_id`.
- To get the `chat_id`, create a bot with `@BotFather`, start a chat with that bot from the target Telegram account, then call `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates` and read the `message.chat.id` value.
- `CONTACT_WEBHOOK_URL` is still optional if you also want to forward the submission into a CRM or automation flow after the Telegram message is sent.
- Copy [`.env.example`](./.env.example) to `.env.local` and fill in the real values before testing.

Optional SMTP fallback is still supported:

```bash
CONTACT_RECIPIENT_EMAIL=hello@yourcompany.com
CONTACT_FROM_NAME=Aksora Labs
CONTACT_FROM_EMAIL=hello@yourcompany.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=hello@yourcompany.com
SMTP_PASS=your-gmail-app-password
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

1. Update company URL, email, response language, and contact channels in [`src/lib/site-data.ts`](./src/lib/site-data.ts).
2. Review the case studies in [`src/lib/site-data.ts`](./src/lib/site-data.ts) and confirm the client descriptors, outcomes, and metrics are approved for public use.
3. Update the generated OG artwork copy in [`src/app/opengraph-image.tsx`](./src/app/opengraph-image.tsx) if the headline or positioning changes.
4. Configure Telegram delivery in [`.env.example`](./.env.example) or swap the route handler in [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts) for your preferred provider.
5. Review icon and brand mark files in [`src/app/icon.svg`](./src/app/icon.svg) and [`src/app/apple-icon.svg`](./src/app/apple-icon.svg).

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
