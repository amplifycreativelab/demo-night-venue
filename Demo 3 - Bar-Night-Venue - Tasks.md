# Development Tasks - Demo 3 (Bar / Night Venue)

Source docs:

- `docs/global prompt.md`
- `Bar-Night Venue-demo/demo3.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm GitHub Pages repo name for Astro `base` (will be `"/bar-night-venue/"`).
- [x] Choose styling approach: Tailwind.
- [x] Choose the ONE primary neon accent: Electric Purple `#9B5CFF`.
- [x] Choose fonts (max 2): condensed headings (Bebas Neue) + modern sans body (Inter).
- [x] Confirm business placeholders (Venue Nights, Perth WA).
- [x] Confirm conversion CTAs and labels: "Get Tickets" + "Book VIP Booth".
- [x] Confirm event detail handling: modal (preferred).

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [ ] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [x] Add `src/assets/images/` placeholder images (hero fallback, events, VIP hero, gallery, OG image).
  - *Converted source images to WebP format for optimization.*
- [x] Add a hero video placeholder strategy (no autoplay sound; provide image fallback).

## Phase 2 - Design System (Dark Luxe / Nightlife)

- [ ] Define neutrals: background `#0B0B0F`, surface `#12121A`, borders `rgba(255,255,255,0.06)`.
- [ ] Define text colors: primary `#F2F2F5`, secondary `#B4B4C0`, muted `#7C7C8A`.
- [ ] Define accent/glow rules: glow only on primary CTAs, active event cards, and hover states (subtle box-shadow).
- [ ] Define spacing scale (4/8/12/16/24/32/48/64).
- [ ] Define typography scale (ALL CAPS section headers; tight letter spacing; strong vertical rhythm).
- [ ] Implement focus-visible styles for links/buttons/inputs (do not rely on glow alone).
- [ ] Implement reduced motion support (`prefers-reduced-motion`).

Motion rules:

- [ ] Fade-in on scroll (optional).
- [ ] Subtle Y-axis slide (8-16px) for entrances (optional).
- [ ] Hover lift on cards (translateY(-4px)).
- [ ] Neon glow on hover (subtle).

Avoid:

- [ ] Parallax, scroll hijacking, heavy animation libraries.

If using Tailwind:

- [x] Install/configure Tailwind for Astro.
- [x] Add Tailwind theme tokens (neutrals, accent, radii, shadows, fonts).
- [x] Create base/global styles (typography defaults, container widths, utilities).

If using CSS modules + tokens:

- [ ] Create `src/styles/tokens.css` (colors, font families, spacing, radii, shadows).
- [ ] Create base/global styles (typography defaults, container widths, utilities).

## Phase 3 - Core Layout & Shared Components

- [x] Create `src/layouts/BaseLayout.astro` with:
  - [x] Skip link
  - [x] Header/nav (links: Events, VIP, Gallery, Contact)
  - [x] Footer with NAP + hours + social links (Instagram priority)
  - [x] Title/meta slots
  - [x] OG/Twitter meta placeholders
- [x] Build design-system components (reused across pages):
  - [x] `Button` (primary/secondary + focus states + subtle glow)
  - [x] `Card`
  - [x] `SectionHeader`
  - [ ] `FormInput` / `Textarea` (label + help/error text pattern)
  - [x] `Badge` (genre/vibe tags; featured label)
- [x] Build demo-specific components (Astro):
  - [x] `EventCard.astro` (name, date, time, genre tag, CTA)
  - [x] `EventFilterBar.astro` (This Week / Live DJs / Specials)
  - [x] `VIPForm.astro` (Name, Email, Date, Guests, Message, CTA)
  - [x] `GalleryMasonry.astro` (masonry/staggered grid)

If using modal event details:

- [ ] Add a lightweight modal pattern (keyboard accessible; focus trap; ESC to close).
- [ ] Ensure modal works with reduced motion.

## Phase 4 - Content & Data Layer

- [x] Create `src/data/events.json`:
  - [x] Sorted by date (ascending)
  - [x] ISO date strings only
  - [x] Fields: `id`, `title`, `date`, `time`, `genre`, `featured` (as needed)
- [x] Add 8-12 realistic events (mix of DJ nights, themed events, specials).
- [ ] Add signature cocktails content (3 items with 1-line descriptions; optional price).
- [ ] Add VIP benefits copy (priority entry, private seating, dedicated host, premium spirits).
- [ ] Add venue NAP content used site-wide (footer + contact + schema).

## Phase 5 - Pages (Demo IA + Required Pages)

### Home (`src/pages/index.astro`)

- [ ] Hero: venue name + punchline ("Late nights. Live DJs. Signature cocktails.") + CTAs (View Events / Book VIP).
- [ ] Hero background: video placeholder + image fallback + dark overlay gradient.
- [ ] Upcoming events preview: render 3-4 soonest events from `events.json` + CTA to all events.
- [ ] Signature cocktails: 3 dark-glass cards (name + 1-line description + optional price).
- [ ] VIP teaser panel: short premium copy + CTA to `/vip/`.
- [ ] Location / late-night info: address + open hours (emphasize late nights) + map placeholder.
- [ ] Footer: NAP + hours + socials + minimal links.

### Events (`src/pages/events/index.astro`) (CORE)
- [x] Events hero: "Upcoming Events" + short subheading.
- [x] Filter bar component (`EventFilterBar.astro`) with active state styling (neon underline/glow indicator).
- [x] Event grid rendering from `events.json`:
  - [x] Date formatted from ISO source (scannable, bold)
  - [x] CTA button per event: "Get Tickets"
  - [x] Hover: lift + accent glow; CTA intensifies
- [x] Event detail handling implemented (modal or dedicated pages).

### VIP (`src/pages/vip/index.astro`)
- [x] Hero: "VIP Booth Experience" + subtext (exclusivity, service, bottle packages).
- [x] VIP benefits list with icon + text rows.
- [x] VIP booking form component (`VIPForm.astro`) with accessible labels and focus states.
- [x] Primary CTA: "Request VIP Access".

### Gallery (`src/pages/gallery/index.astro`)
- [x] Masonry/staggered gallery component (`GalleryMasonry.astro`).
- [x] Dark overlays on hover.
- [x] Nightlife imagery mix: crowd, cocktails, DJs (no lightbox required; optional).

### Contact (`src/pages/contact/index.astro`)

- [ ] Minimal contact layout: address, email, phone, socials.
- [ ] Emphasise Instagram link.

### Required pages from base prompt

- [ ] About (`src/pages/about.astro`) - venue story, vibe, music-first positioning.
- [ ] Services (`src/pages/services.astro` or equivalent) - private events, VIP packages, group bookings.
- [ ] Privacy (`src/pages/privacy.astro`) - simple legal page.
- [ ] Local SEO/GEO page (choose one):
  - [ ] Create a dedicated page (e.g., `src/pages/areas-we-serve.astro`), OR
  - [ ] Ensure Home/Contact include robust Perth-targeted content (e.g., Perth CBD, Northbridge, late-night Perth scene)

## Phase 6 - SEO & GEO (Nightlife)

- [ ] Page titles follow a consistent template (per-page + venue name).
- [ ] Meta description per page (unique, conversion-focused).
- [ ] Canonical URLs set correctly (respecting `site` + `base`).
- [ ] OpenGraph: title/description + placeholder OG image.
- [ ] Twitter card meta.
- [ ] Add JSON-LD:
  - [ ] `BarOrPub` (LocalBusiness fields + NAP, Perth WA)
  - [ ] `Event` schema (basic fields only) for upcoming events (on Events page)
- [ ] Add GEO signals naturally (Perth CBD, Northbridge, late-night Perth scene).
- [ ] Add `robots.txt`.
- [ ] Add sitemap (if straightforward) and verify it works with the configured `site`.
- [ ] Internal linking: Home -> Events -> VIP -> Contact (and back) with clear CTAs.

## Phase 7 - Accessibility & UX Checks

- [ ] Contrast AA minimum (even with neon).
- [ ] One H1 per page; heading order is logical.
- [ ] Skip link works and is visible on focus.
- [ ] Keyboard navigation works across header, CTAs, filters, cards, and forms.
- [ ] Buttons have 44px+ tap targets.
- [ ] If using modal: focus trap + ESC close + accessible dialog labels.

## Phase 8 - Performance

- [ ] Target Lighthouse 95+ (mobile).
- [ ] Use `astro:assets` for images where possible; responsive sizes + lazy loading.
- [ ] Avoid heavy JS (no animation libraries; keep modal/filter logic minimal).
- [ ] Video must have image fallback; no autoplay sound.

## Phase 9 - Deployment & Handoff

- [ ] Add build/run instructions (README or `/docs/`):
  - [ ] `npm install`
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Quick QA pass:
  - [ ] Events filtering states + active indicator
  - [ ] Event card hover + CTA behavior
  - [ ] Modal (if used): keyboard + focus + scroll lock
  - [ ] VIP form: labels + focus styles
  - [ ] Basic SEO meta presence (view-source)

## Optional / Bonus

- [ ] Dedicated event pages (`/events/<id>/`) with minimal duplication (data-driven).
- [ ] Featured event spotlight on Home hero (if `featured: true`).
- [ ] Newsletter signup (UI only; keep JS minimal).

