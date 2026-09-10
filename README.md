# Zemen Homes — Real Estate Website

A premium real estate website for **Zemen Homes** (ዘመን), a property development and
management company based in **Addis Ababa, Ethiopia**.

> **Zemen** (ዘመን) means *era* or *modern times* in Amharic — reflecting a forward-thinking
> approach to Ethiopian real estate.

## Features

- **Property listings** with live search and filter (location, type, status, bedrooms, price range)
- **Property detail modal** with image gallery, features list, and amenities
- **Inspection booking modal** — on-site form with date picker and time-slot selector (no external redirects)
- **Developments showcase** section
- **Contact enquiry form** with success state
- **Scroll-reveal animations** throughout
- Fully **responsive** — mobile sticky CTA bar, desktop navbar, WhatsApp float button
- **SEO-ready** with Open Graph meta tags

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@theme` tokens in `src/index.css`)
- lucide-react for icons

## Project Structure

```
src/
├── components/       # One file per section/component
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedProperties.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyModal.tsx
│   ├── PropertySearch.tsx
│   ├── InspectionModal.tsx   # On-site booking form
│   ├── ScheduleInspection.tsx
│   ├── Contact.tsx
│   ├── About.tsx
│   ├── Developments.tsx
│   ├── Services.tsx
│   ├── Footer.tsx
│   └── ...
├── data/
│   └── site.ts       # Single source of truth for all content
└── lib/
    ├── scheduleContext.ts   # React context for the inspection modal
    └── useReveal.ts         # Scroll-reveal IntersectionObserver hook
```

## Content Management

All site content lives in **`src/data/site.ts`** — business info, property listings,
services, prices, contact details. Edit that one file to update anything displayed on the site.

Property images are Unsplash stock photos. Replace `image` and `gallery` URLs in
`src/data/site.ts` with real listing photos when available.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`. Deploys to Vercel with zero config (Vite is auto-detected).

## Notes

- Property listings and the development project are demo content — labelled with `isDemo: true` in `site.ts`.
- The map section links to Google Maps using the business address. Swap in a Google Maps
  Embed API key if a live embedded map is preferred.
- The inspection booking form is fully front-end only; wire up a backend or form service
  (e.g. Formspree, EmailJS) to receive submissions in production.
