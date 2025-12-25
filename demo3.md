Demo 3 — Bar / Night Venue (Events-First, Dark / Luxe)
“Venue Nights”
Project Goal

Create a high-end, dark, nightlife venue demo designed to convert users into:

Event attendees (ticket clicks)

VIP booth enquiries

This demo should feel exclusive, energetic, and premium, suitable for:

Cocktail bars

Nightclubs

Late-night lounges

DJ venues

Event-driven hospitality businesses

Primary CTA focus:

“Get Tickets”

“Book VIP Booth”

1. Style & Visual Direction
Overall Feel

Dark luxe with nightclub energy

Neon accents, glassy UI, controlled glow

Heavy use of negative space

High contrast, but never harsh or unreadable

Think:

Soho House × Boiler Room × modern cocktail bar

Color System

Base

Background: #0B0B0F (near-black, slightly blue-toned)

Surface cards: #12121A

Borders/dividers: rgba(255,255,255,0.06)

Accent (choose ONE primary neon)

Electric Purple: #9B5CFF

OR Neon Pink: #FF3D81

OR Acid Blue: #2EE8FF

Text

Primary text: #F2F2F5

Secondary text: #B4B4C0

Muted/meta text: #7C7C8A

Glow usage

Glow only on:

Primary CTAs

Active event cards

Hover states

Glow should be subtle (box-shadow, not blur spam)

Typography

Headings

Condensed sans-serif
Examples:

Bebas Neue

Inter Tight (condensed)

Archivo Narrow

Usage:

ALL CAPS for large section headers

Tight letter spacing

Strong vertical rhythm

Body

Clean modern sans-serif
Examples:

Inter

DM Sans

Manrope

Numbers & Dates

Use tabular numerals if possible

Dates should feel bold and scannable

2. Motion & Interaction

Motion should feel smooth, intentional, and minimal.

Allowed:

Fade-in on scroll

Subtle Y-axis slide (8–16px)

Hover lift on cards (translateY(-4px))

Neon glow on hover

Avoid:

Parallax

Heavy animation libraries

Scroll hijacking

Performance target:

Lighthouse 95+

Minimal JS, optional small vanilla JS for modals

3. Site Structure
Pages
/
 /events/        ← CORE PAGE
 /vip/
 /gallery/
 /contact/

4. Home Page Structure
Hero Section

Full-width video placeholder

Fallback static image

Dark overlay gradient (top → bottom)

Content

Venue name

Short punchline:

“Late nights. Live DJs. Signature cocktails.”

Primary CTA: View Events

Secondary CTA: Book VIP

Upcoming Events Preview

3–4 EventCard components

Sorted by soonest date

CTA: View all events

Signature Cocktails

3 cards

Dark glass aesthetic

Cocktail name + 1-line description

Optional price

VIP Teaser

Dark panel with accent glow

Short copy:

“Private booths, premium spirits, priority entry.”

CTA → /vip/

Location / Late-Night Info

Venue address

Open hours (emphasize late nights)

“Open until late” messaging

Subtle map placeholder (no embed needed)

5. Events Page (CORE)
Events Hero

Bold heading: Upcoming Events

Short subheading: DJ nights, themed events, specials

Filter Bar (static OK)

Component: EventFilterBar.astro

Filters:

This Week

Live DJs

Specials

Active filter:

Neon underline or glow indicator

Event Grid

Component: EventCard.astro

Each card includes

Event name

Date (ISO source, formatted UI)

Time

Genre / vibe tag

CTA button: Get Tickets

Hover:

Card lifts slightly

Accent glow appears

CTA intensifies

Event Detail Handling

Choose ONE:

Modal view (preferred)

Light JS

Dark overlay

Event details + CTA

Dedicated event pages (optional)

6. VIP Page

Purpose: Conversion

Hero

Dark cinematic image

Headline:

“VIP Booth Experience”

Subtext: exclusivity, service, bottle packages

VIP Benefits

Priority entry

Private seating

Dedicated host

Premium spirits

Use icon + text rows

VIP Booking Form

Component: VIPForm.astro

Fields:

Name

Email

Date

Number of guests

Optional message

CTA:

Request VIP Access

7. Gallery Page

Component: GalleryMasonry.astro

Masonry or staggered grid

Dark overlays on hover

Show nightlife, crowd, cocktails, DJs

No lightbox required (optional)

8. Contact Page

Minimal, dark, clean:

Address

Email

Phone

Social links (Instagram priority)

9. Components (Astro)

Required components:

EventCard.astro
EventFilterBar.astro
VIPForm.astro
GalleryMasonry.astro


Design rules:

Fully reusable

No page-specific hacks

Props driven

Accessible (focus states, labels)

10. Data Layer
events.json

Sorted by date (ascending)

ISO date strings only

Example structure:

[
  {
    "id": "neon-friday",
    "title": "Neon Friday",
    "date": "2025-08-15",
    "time": "10:00 PM",
    "genre": "House / Techno",
    "featured": true
  }
]

11. SEO & GEO Requirements
Structured Data

JSON-LD:

BarOrPub

Event (basic fields only)

GEO Signals

Mention nightlife areas naturally:

Perth CBD

Northbridge

Late-night Perth scene

Example copy tone:

“One of Perth’s late-night destinations in Northbridge…”

12. Performance & Accessibility

Contrast AA minimum (even with neon)

No autoplay sound

Video must have image fallback

Buttons ≥ 44px tap targets

Keyboard navigable modals

13. Demo Positioning (Meta)

This demo should clearly communicate:

“Perfect for bars, clubs, nightlife venues”

Event-driven businesses

Premium hospitality branding

This is not a restaurant or cafe demo — it should feel unmistakably nightlife.