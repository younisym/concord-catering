# Concord for Catering — Website

Production-ready marketing website for Concord for Catering, an aviation and
industrial catering company based in Egypt. Built with Next.js 16 (App
Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx              Root layout — fonts, header, footer, metadata
  page.tsx                 Home (full storytelling flow — see below)
  about/page.tsx            About
  services/page.tsx         Services index (links to each dedicated page)
  services/[slug]/page.tsx   Dedicated page per service (dynamic route)
  why-us/page.tsx            What Makes Us Different
  values/page.tsx            Purpose & Values
  journey/page.tsx            Our Journey
  contact/page.tsx             Contact
  globals.css               Design tokens (color palette, fonts, gradients)
components/
  layout/                   Header, Footer
  sections/                 Page-level sections (Hero, ClientsSection,
                              OperationalCoverage, ProductionProcess,
                              Operations247, Gallery, Timeline, ...)
  ui/                       Reusable primitives (Button, SectionHeading,
                              Reveal / StaggerChild, PageHero, ...)
lib/
  content.ts                All site copy: stats, services (with full detail
                              pages), airports, why-choose items, gallery,
                              client list. Edit this file to update copy
                              anywhere on the site.
public/
  logo/                     Cleaned, transparent-background logo
  clients/                  Airline client logos (see licensing note below)
  images/                   Production, logistics, and meal photography
```

## Homepage storytelling flow

The homepage is a single continuous narrative, in this order: Hero → About
Concord → Our Services → Why Choose Concord → 24/7 Operations → Our Clients →
Certifications → Operational Coverage → Production Process → Company
Statistics → Gallery → Contact CTA.

## Service detail pages

Each of the four services (Airline Catering, Meal Solutions, Special Events
Catering, International Cuisine & Special Meals) has its own dedicated page
at `/services/[slug]`, built from a single template
(`app/services/[slug]/page.tsx`) driven by the `services` array in
`lib/content.ts`. Every service includes: Hero, Overview, Detailed
Description, Benefits, Operational Workflow, Industries Served, Food Safety
Standards, Gallery, and a closing CTA. To edit a service's copy, edit its
object in `lib/content.ts` — the page layout updates automatically.

## Before going live — placeholders & licensing to review

- **Phone numbers** (`siteConfig.phones` in `lib/content.ts`) — placeholder
  format, not real numbers.
- **Email address** (`siteConfig.email`) — placeholder `info@concordcatering.com`.
- **Contact form submission** (`components/sections/ContactForm.tsx`) —
  currently simulates a submit with a timeout. Wire it up to a real endpoint
  (an API route, Formspree, HubSpot, etc.) before launch.
- **Google Map embed** (`app/contact/page.tsx`) — centered on Obour City by
  name search; replace with the exact facility address/coordinates once
  available.
- **Certification badges** (ISO 22000, Lloyd's Register, Unicert) — no
  official badge artwork was supplied, so these render as elegant
  text-based badges (`CertificationBadge`) rather than logo graphics.
- **Client logos — important licensing note.** Four of the five airline
  logos in `public/clients/` (Nile Air, Air Cairo, Nesma Airlines, Sudan
  Airways) were sourced from Wikimedia Commons under CC-BY-SA / free-license
  terms. El Masria Airlines has no free-licensed logo available and is shown
  as a text wordmark instead. **Displaying any airline's logo as a "client"
  on a commercial site generally implies endorsement and should be confirmed
  directly with each airline before launch**, regardless of the logo's public
  licensing status — swap in each airline's own approved brand asset once
  confirmed.

## Design system

- **Colors**: Corporate Blue (`--color-navy`, a deep blue rather than
  near-black), Concord Red (`--color-red`, sampled directly from the logo),
  White, and Light Gray — defined in `app/globals.css` and exposed as
  Tailwind utilities (`bg-navy`, `text-red`, `bg-gray-light`, etc.), plus a
  few very subtle gradient utilities (`bg-fade-navy`, `bg-fade-gray`).
- **Typography**: Plus Jakarta Sans, loaded via `next/font/google`.
- **Header**: fixed, transparent-over-hero, solidifies with a blur on scroll;
  logo / nav / actions sit in dedicated CSS grid tracks so they can never
  collide at any viewport width.
- **Motion**: Framer Motion only — slow (20–25s) mirrored Ken Burns zoom on
  hero and banner imagery, scroll-triggered fade-ups and staggered grids,
  animated stat counters, and a lightbox gallery. No parallax, no fast or
  bouncy motion.

## Performance notes

- All non-priority images are lazy-loaded automatically by `next/image`.
- Every image sits inside a fixed-aspect-ratio or fixed-height container to
  avoid layout shift.
- Animations only ever animate `transform`/`opacity` (scale, x, y, opacity) —
  never layout-triggering properties.

## Deployment

The project is unmodified `next build` output — deploy directly to
[Vercel](https://vercel.com/new) by importing the repository, or run
`npm run build && npm run start` on any Node.js host.
