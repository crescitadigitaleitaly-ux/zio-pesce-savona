# Zio Pesce — Ristorante e Pizzeria | Website

A premium, production-grade website for **Zio Pesce**, a seafood restaurant and pizzeria in the Darsena of Savona, Italy. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

The design takes its visual cues from premium restaurant templates: a dark maritime palette, gold accents, Playfair Display serif headings, generous spacing, and warm interior photography.

---

## Features

| Page | Route | Highlights |
|------|-------|-----------|
| Homepage | `/` | Hero, story, signature dishes, Ligurian seafood + pizza gourmet sections, gallery preview, reservation CTA, Google Maps |
| Chi Siamo (About) | `/about` | Restaurant story, philosophy, Darsena location, kitchen values |
| Menu | `/menu` | 136 dishes across 19 categories, live search, category tabs, dietary badges, add-to-cart |
| Galleria | `/gallery` | Interior + food gallery with lightbox modal and category filters |
| Prenota (Reservations) | `/reservations` | Full booking form with validation and confirmation state |
| Asporto (Order) | `/order` | Takeaway ordering system: browse, cart, quantity, notes, checkout, pickup/delivery, payment selection |
| Contatti (Contact) | `/contact` | Google Maps, contact form, info cards, WhatsApp button |

Plus: global cart (slide-out drawer), mobile sticky CTA bar, responsive navigation, SEO metadata, and Restaurant schema (JSON-LD).

---

## Getting started

```bash
cd zio-pesce-website
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout: fonts, nav, footer, cart provider, SEO + JSON-LD
│   ├── globals.css          # Design tokens (colors, fonts) + component classes
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx
│   ├── menu/page.tsx
│   ├── gallery/page.tsx
│   ├── reservations/page.tsx
│   ├── order/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx       # Sticky nav + mobile menu + mobile sticky CTA
│   ├── Footer.tsx
│   ├── CartDrawer.tsx       # Slide-out cart
│   └── MenuItemImage.tsx    # Lazy image with graceful placeholder fallback
├── context/
│   └── CartContext.tsx      # Cart state (add, remove, quantity, notes, subtotal)
└── data/
    └── menu.ts              # All 136 menu items + restaurant info (source of truth)
public/
└── images/
    ├── interior/            # 4 real interior/terrace photos (in use)
    ├── menu/                # Menu dish images (see "Images" below)
    └── gallery/
```

---

## Data source

All restaurant details and the full menu live in [`src/data/menu.ts`](src/data/menu.ts). This is the single source of truth — edit prices, descriptions, or `restaurantInfo` (address, phone, hours, social) here and every page updates.

The data was extracted from the official **Executive Summary** PDF and the provided menu asset manifest (`zio_pesce_complete_claude_code_menu_assets.json`).

**Verified from the PDF:**
- Name: Zio Pesce – Ristorante e Pizzeria
- Address: Via Antonio Baglietto 8R, Savona (Darsena)
- Phone / WhatsApp: +39 393 330 4614
- Hours: daily 12:00–15:00 and 19:00–23:00
- Founded 2015 by Andrea Colombo and Gigliola Peroni
- Full menu with prices

**Placeholders that need real values:**
- `email` — set to `info@ziopesce.it` (placeholder; confirm the real address)
- `social.instagram` / `social.facebook` — point to the official handles before launch
- Map coordinates are approximate for the Darsena; replace the embed URL with the exact Google Maps place link

---

## Images

### Interior photos (live)
The 4 supplied interior/terrace photos are in `public/images/interior/` and used across the homepage, about, gallery, and reservation sections.

### Menu dish photos (placeholders)
No real dish photography was supplied. Every menu item references a file under `public/images/menu/` (e.g. `/images/menu/tartare-di-tonno.jpg`). Until those files exist, `MenuItemImage` shows an elegant placeholder card with the dish name — **no broken images**.

To add real photos, drop a file matching the `image` path in each item in `menu.ts`. The asset manifest (`zio_pesce_complete_claude_code_menu_assets.json` in the parent folder) contains an `ai_prompt` and `suggested_filename` for every dish if you want to generate custom imagery. Recommended workflow:

1. Generate or shoot each dish photo.
2. Save it as the `suggested_filename` (e.g. `tartare-di-tonno.jpg`) in `public/images/menu/`.
3. Optimize (WebP/AVIF, ~1200px wide) before committing.

The image filenames in `menu.ts` already match the manifest's `suggested_filename` values.

---

## Reservation & order handling

Both the reservation form and the takeaway checkout currently run **client-side only**: on submit they validate, show a confirmation state, and log the payload to the console. No data leaves the browser.

The code is structured so you can wire a backend without touching the UI:

- **Reservations** (`src/app/reservations/page.tsx`) — replace the `handleSubmit` body with a `fetch('/api/reservations', ...)` call. Add a route handler at `src/app/api/reservations/route.ts` to email the restaurant, write to a database, or push to a CRM.
- **Orders** (`src/app/order/page.tsx`) — same pattern; the cart payload (items, quantities, notes, customer info, pickup/delivery, payment method) is assembled before the confirmation screen.

### Payments
No payment processing is implemented (no keys were provided). The checkout offers:
- **Contanti al ritiro / consegna** — fully functional from the UI (no gateway needed).
- **Pagamento online** — present but disabled, labelled "prossimamente".

To enable online payments, add a provider (Stripe / PayPal / local gateway) in a server route and swap the disabled option. The checkout already collects everything a payment intent needs.

---

## SEO

- Per-page `title` / `description` via Next.js Metadata API
- Open Graph + Twitter Card tags (`layout.tsx`)
- `Restaurant` + `LocalBusiness` JSON-LD structured data with address, geo, hours, cuisine, founder
- Semantic HTML, descriptive `alt` text on every image, clean URLs
- `metadataBase` set to `https://ziopesce.it` — update if the production domain differs

---

## Conversion & trust features

- **Live "Aperto ora / Chiuso" badge** (`OpenStatus.tsx`) — computed in Europe/Rome time from the service hours, shown in the footer.
- **Newsletter capture** (`Newsletter.tsx`) — email lead-gen in the footer; client-only, ready to wire to an email/CRM backend (`console.log` for now).
- **Guest testimonials** (`Testimonials.tsx`) — social-proof section on the homepage. ⚠️ The 3 reviews are **representative samples** — replace with real Google/TripAdvisor reviews before launch (keep the same shape).
- **Takeaway trust bar** — pickup time / delivery / pay-at-pickup badges on `/order` to reduce ordering friction and lift average order value.
- **Back-to-top button** and **favicon** (`src/app/icon.svg`) for finishing polish.

## Notes / TODO before launch

- [ ] Replace the sample testimonials in `src/components/Testimonials.tsx` with real reviews
- [ ] Wire the newsletter form (`Newsletter.tsx`) to a real email/CRM provider
- [ ] Confirm real email address and social media URLs in `src/data/menu.ts`
- [ ] Replace the Google Maps embed with the exact place link for Via Antonio Baglietto 8R
- [ ] Add real menu dish photography (see "Images")
- [ ] Wire reservation + order forms to a backend (email / DB / CRM)
- [ ] Add payment gateway keys if online payment is desired
- [ ] Add a favicon / app icons and an OG share image
- [ ] Update the copyright domain if not `ziopesce.it`

---

Built with Next.js 16, TypeScript, Tailwind CSS v4. Dark maritime theme, gold accents, Playfair Display + Inter.
