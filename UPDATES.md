# Zio Pesce — Update Log

Restaurant website for **Zio Pesce — Ristorante di Pesce e Pizzeria**, Darsena di Savona.

- **Live:** https://ziopesce.crescitadigitaleitalia.com
- **Repo:** https://github.com/crescitadigitaleitaly-ux/zio-pesce-savona
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4 — Italian-only (`lang="it"`)
- **Deploy:** Vercel project `zio-pesce-website` (team `crescita-digitale-italia-s-projects`)

---

## 2026-06-28

### Mobile image tearing — root cause fixed
- The rainbow horizontal "scan-line" tearing over dish images while scrolling on Android was a **GPU compositing bug**.
- First attempt (removing `backdrop-filter` from the fixed nav/CTA bars) did not resolve it.
- **Actual cause:** the per-image opacity fade-in (`transition-opacity`) promoted every dish image to its own GPU layer; mid-fade during scroll the layer was mis-rasterized.
- **Fix:** `MenuItemImage` now renders the image **statically** — no opacity/transform transition (solid background while decoding, placeholder only on error). `.menu-card` transitions only border/shadow (not `all`); hover-lift is gated to `pointer:fine` (desktop) so touch scrolling never creates transform layers.

### Cart flow streamlined (faster ordering)
- Menu floating pill now **opens the cart drawer** ("Carrello · N") instead of navigating to the menu-heavy order page.
- Cart drawer "Procedi all'ordine" and the mobile "Ordina Asporto" CTA jump to **`/order#checkout`**, landing directly on the cart/checkout section.

### Earlier mobile-responsiveness pass
- Made the fixed nav, mobile dropdown, and bottom CTA bar **fully opaque** (removed `backdrop-blur`).
- Floating cart pill (Menu) and WhatsApp button (Contact) raised **above** the 89px bottom bar (no overlap).
- Menu category tabs: **horizontal scroll** on mobile instead of an 8-row wrap.
- Touch targets bumped: nav cart/menu icons to 44×44px, category pills `min-h-44`.
- Fixed a CSS bug where `.btn-gold` overrode Tailwind's `hidden` (wrapped the redundant top "Prenota" button so it correctly hides on mobile).
- Deleted 14 orphan/corrupt unused image files; reduced `.glass-card` blur.

### Soft-drink images → clean cans
- Replaced incorrect/cluttered beverage photos (Coca-Cola had a skulls image, Fanta a nutrition label) with **clean branded can shots** for Coca-Cola, Coca-Cola Zero, Fanta, and Sprite (sourced from Unsplash / Wikimedia Commons, optimized locally).

### Image rendering reliability
- Fixed a **React hydration race** in `MenuItemImage` where images that finished loading before hydration left the placeholder stuck. (Superseded by the static-image rewrite above.)

### Menu imagery
- All 138 menu items mapped to real, optimized local photos. Food/dish photos are the owner's AI-generated images (not to be replaced without asking); beverages were sourced and optimized to ~1000×750 JPEG.
- Broken beverage links (PDFs, `loremflickr` placeholders, a photo of Armenian brandy barrels) were replaced with accurate, license-clear images stored locally.

### Conversion & trust features
- **Testimonials** section on the homepage (sample reviews — replace with real Google/TripAdvisor reviews before launch).
- **Live "Aperto ora / Chiuso"** badge in the footer (computed in Europe/Rome time).
- **Newsletter** capture in the footer (client-only; ready to wire to email/CRM).
- **Takeaway trust bar** on the order page (ready in 30–45 min · delivery · pay at pickup).
- **Back-to-top** button and a **favicon** (`src/app/icon.svg`).

### Accessibility & polish
- Global `:focus-visible` gold focus ring on links/buttons/inputs; input focus ring.
- `prefers-reduced-motion` block that neutralizes animations/transitions.
- Confirmed Italian default (`<html lang="it">`), semantic input types, no horizontal overflow on any page.
- Copy cleanup (Humanizer pass): removed AI-cliché phrasing such as "esperienza culinaria indimenticabile", the abstract hero tail, and a negative-parallelism line.

---

## Initial build

- Full multi-page site: Home, Chi Siamo, Menu, Galleria, Prenota (reservations), Ordina Asporto (takeaway), Contatti.
- Global cart context + slide-out drawer, takeaway checkout, reservation form (client-side; structured to connect to a backend via `src/app/api/*/route.ts`).
- SEO: per-page metadata, OpenGraph/Twitter tags, `Restaurant` JSON-LD structured data.
- Google Maps embed, WhatsApp CTAs, mobile sticky CTA bar.

---

## Known follow-ups (before / after launch)

- [ ] Replace sample testimonials with real reviews (`src/components/Testimonials.tsx`).
- [ ] Wire the reservation, takeaway, contact, and newsletter forms to a real backend (email / CRM). They currently validate and `console.log` the payload.
- [ ] Confirm the real email address and social media URLs in `src/data/menu.ts`.
- [ ] Add payment gateway keys if online payment is wanted (cash is functional from the UI).
- [ ] If any image tearing persists on a specific device: convert all menu JPEGs to guaranteed-baseline encoding and add `content-visibility: auto` to the cards.
