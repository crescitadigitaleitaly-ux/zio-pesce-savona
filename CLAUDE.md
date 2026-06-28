# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> ⚠️ The import above is load-bearing: this repo runs a **modified Next.js (16.2.9)** with breaking changes vs. public docs. Before writing framework code, read the relevant guide under `node_modules/next/dist/docs/` and honor deprecation notices.

## Project

Production marketing + ordering site for **Zio Pesce**, a seafood restaurant & pizzeria in the Darsena of Savona, Italy. Next.js App Router, React 19, TypeScript, Tailwind CSS v4. Content is Italian; the site is statically prerendered (all 8 routes are `○ Static`).

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also the TypeScript gate — run before claiming done)
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite. `npm run build` is the correctness gate — it runs `tsc` and prerenders every page; a type error or a bad import fails the build. Playwright is a devDependency but no specs are checked in.

## Architecture

**Single source of truth — `src/data/menu.ts`.** All 136 dishes across 19 categories plus the `restaurantInfo` object (address, phone, hours, socials) live here. Pages import `menuCategories` and derive from it — never hardcode menu/restaurant facts in a page. Shapes: `MenuCategory { id, name, nameIt, items }` and `MenuItem { id, name, description, price, category, image, alt, dietary? }`. **Prices are strings** like `'€7'`; `CartContext.parsePrice` extracts the number. Category tabs render `nameIt`; `id` is the stable key used for filtering and routing.

**Cart is global React Context — `src/context/CartContext.tsx`.** `CartProvider` wraps the whole app in `layout.tsx`. Consume via `useCart()` (throws if used outside the provider). It owns cart items (qty + per-item notes), `subtotal`/`totalItems` (derived), and the `isCartOpen` drawer flag. State is **in-memory only** — no localStorage/backend; refresh clears it. `menu/page.tsx` and `order/page.tsx` both add to this same cart; `CartDrawer.tsx` (mounted once in the layout) renders it.

**Layout owns chrome + SEO — `src/app/layout.tsx`.** Mounts `Navigation`, `CartDrawer`, `Footer`, and `CartProvider` once. Loads Inter + Playfair Display via `next/font/google`, exposing them as the CSS vars `--font-inter` / `--font-playfair`. Sets global Metadata (OpenGraph/Twitter, `metadataBase: https://ziopesce.it`) **and** injects `Restaurant` JSON-LD structured data. Keep the JSON-LD, the `restaurantInfo` data, and any on-page contact details in sync when business facts change.

**Routes (`src/app/*/page.tsx`).** `/` home, `/about`, `/menu` (search + category tabs + add-to-cart), `/order` (takeaway: browse → cart sidebar → checkout with pickup/delivery + cash/online-placeholder), `/reservations` (booking form), `/gallery` (filter + lightbox), `/contact`. Forms and checkout are **client-only**: they validate, show a confirmation state, and `console.log` the payload — no network call yet. To wire a backend, replace the `handleSubmit` body with a `fetch` to a new `src/app/api/*/route.ts`; the UI already assembles the full payload.

**Server vs. client components.** Pages are Server Components by default (e.g. `about`, home). Anything with state/handlers is `'use client'` (`menu`, `order`, `gallery`, `contact`, `CartContext`, `CartDrawer`, `Navigation`). `MenuItemImage` is the client island used inside otherwise-server pages.

**`MenuItemImage` hydration note.** It shows a placeholder until the image loads and on error. It also re-syncs from the DOM (`img.complete` / `naturalWidth`) on mount — without this, an image that finishes loading before React hydration would leave the placeholder stuck on top. Keep that effect if you touch the component.

**Conversion / trust components** (all in `src/components`): `OpenStatus` (live open/closed badge in Europe/Rome time, in the footer), `Newsletter` (footer email capture, client-only), `Testimonials` (homepage social proof — sample reviews to replace), `BackToTop` (desktop). The takeaway page has a static service-info trust bar. Forms and these widgets are client-only and `console.log` their payload; wire to a backend via new `src/app/api/*/route.ts` handlers.

**Accessibility baseline** (in `globals.css`): global `:focus-visible` gold ring on links/buttons/inputs, an input focus ring, and a `prefers-reduced-motion` block that neutralizes animations/transitions. `<html lang="it">` — the site is Italian-only. Favicon is `src/app/icon.svg` (auto-registered by Next).

## Images

All images are **local** under `public/images/` (`menu/`, `interior/`, `atmosphere/`, `gallery/`) — no remote `next/image` domains configured. `MenuItem.image` is a path like `/images/menu/<suggested-filename>.jpg`; multiple dishes may share a file. Menu/dish images are served through **`src/components/MenuItemImage.tsx`**, which shows an elegant named placeholder until the real image loads and on error — so a missing file degrades gracefully instead of showing a broken-image glyph. Full-bleed home/about backgrounds intentionally use higher-res `atmosphere/` images (the 1000px `interior/` photos look soft full-screen); `interior/` photos are used where they render small and crisp (gallery grid, contained side images).

Image provenance: food/dish photos are AI-generated by the owner (do not replace without asking). Beverage photos were sourced from Wikimedia Commons / Unsplash / Open Food Facts and optimized locally to ~1000×750 JPEG. The four main sodas (`coca-cola`, `coca-cola-zero`, `fanta`, `sprite`) use clean branded **can** product shots. `chinotto`, `estathe`, `succo-frutta` are not cans (glass/bottle). When swapping a beverage image, download + optimize locally and keep the `/images/menu/<id>.jpg` path — do not hotlink remote URLs (keeps the page fast).

`fetch_images.py` (in the parent `Zio Pesce/` folder) is the one-off script that downloaded and optimized the current photo set; it is not part of the app build.

## Design tokens

Defined in `src/app/globals.css`: color scales `ocean-*` (dark maritime navy, the page background), `gold-*` (accent), `cream-*` (text); component classes `btn-gold`, `btn-outline`, `glass-card`, `menu-card`, `section-divider`, `hero-overlay`, `img-placeholder`, `animate-fade-in-up`. Serif headings use `style={{ fontFamily: 'var(--font-playfair)' }}`. Reuse these rather than introducing new colors/utilities.
