# Design: Consulting site homepage (v1)

## Context

New, standalone project — a premium personal consulting website for Olga Kratko (product strategy, marketing, GTM, AI consulting/advisory/mentoring/training). Separate from `my-site/` and the 12-week vibe-coding learning program; this project has its own repo at `D:\CODE\consulting-site\`.

Source of truth for content and requirements: `D:\CODE\ai-learning\Site_project.odt` (61-section brief, itself written as a CLAUDE.md-style implementation spec). Visual/tone reference: [lonardi.org](https://lonardi.org/) — used for inspiration (restrained, proof-led, confident tone), not copied verbatim, per the brief's own rule (§58).

The full brief covers ~15 pages (services subpages, 5 case studies, mentoring, training, insights, contact). This spec covers **only the homepage** — the first sub-project, per the brief's own Phase 1 plan, narrowed further at the user's request to a single page first.

## Scope

**In scope:** one homepage (`index.html` + `styles.css` + minimal `script.js` for the mobile nav), built as plain HTML/CSS/JS, no framework, no build step.

**Out of scope (later sub-projects):** About, Services subpages, Case study subpages, Mentoring, Training, Insights, Contact page, working lead-magnet form submission, booking/payment integration.

## Page structure

Homepage section order (adapted from brief §54; item 10's links point to `#contact` since Mentoring/Training pages don't exist yet):

1. Hero — eyebrow, headline, supporting copy, credentials, portrait, primary CTA (Book a Consultation) + secondary CTA (Explore Services, anchors to §4)
2. Trust bar — 20+ years / SaaS-B2B-Cloud / IBA Institute / AI Startups Mentor
3. Growth problem — 6 cards (Product/Market/Positioning/GTM/Growth/AI)
4. Services — 6 cards (Product Strategy, Marketing Strategy, GTM, AI + Product, Mentoring, Training), CTA per card anchors to `#contact`
5. Featured €50 Consultation
6. Productized Consulting — 3 cards (Marketing Health Check / Product & GTM Strategy Sprint / Fractional Advisory)
7. Selected Cases — 5 cases from the brief (Perenio/ASBIS, ActiveCloud, SmartMail & ActiveStorage, ActiveCloud Poland, Adenty PRO/LightPoint), challenge → approach → results structure per §15
8. Why work with Olga — 6 points
9. How I Work — 5-step process (Discovery → Research → Strategy → Action Plan → Support)
10. Mentoring & Training teaser — short, CTA anchors to `#contact`
11. Lead magnet — visual section per brief copy; form fields present but **not wired to a real submission endpoint** (static site, no backend yet) — marked as a follow-up
12. Final CTA
13. Footer — nav links (anchors within this page for sections that don't have real pages yet), social links, copyright

## Content rules

Follow brief §48 exactly: no invented clients, numbers, testimonials, or credentials. Case study results, credentials, and service descriptions come verbatim (in meaning) from the brief. Where the brief itself has no value (verified email, LinkedIn, Telegram — §29 says "use the verified value provided by Olga" but doesn't give one), use a placeholder and flag it — do not invent.

## Assets needed from the user (open items)

- **Portrait photo** — provided inline in chat during this conversation. I have no tool to save a pasted chat image directly to disk; the user needs to save it as a file (e.g. `consulting-site/assets/olga-portrait.jpg`) or give a path I can read. Blocks only the hero image — rest of the page can be built with a placeholder in the meantime.
- **Real contact details** (email, LinkedIn URL, Telegram handle) — not present in the brief. Placeholder text (`[CONTENT NEEDED]`) until supplied, per brief §48's own placeholder convention.

## Design system

From brief §32-33: font Inter (fallback Manrope/DM Sans), warm off-white background, dark navy/near-black text, deep blue accent (optional soft violet secondary), restrained palette, generous whitespace, large type, short copy blocks.

## Technical approach

- Static HTML/CSS/JS, mobile-first, responsive breakpoints (mobile/tablet/desktop/large desktop) per §44.
- Semantic HTML, one `<h1>`, logical heading hierarchy, alt text, visible focus states, keyboard navigation per §43 (accessibility target WCAG 2.2 AA where practical for a v1).
- Basic SEO metadata (title, meta description per §39, Open Graph) — full structured data (Person/ProfessionalService schema) deferred to a later pass once more pages exist.
- No analytics wiring yet (brief §41 lists events) — deferred; note as a follow-up rather than building dead tracking code now.

## Verification

- Open in a real browser via the `chrome-devtools-mcp` server (already set up) — screenshot at mobile/tablet/desktop widths, click through the mobile nav, click each CTA to confirm it scrolls to the right anchor, check the console for JS errors.
- Manual read-through against brief §48 (no invented content) and §54 (section order) before calling it done.
