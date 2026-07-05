# AGENCY PLAYBOOK

This document contains all validated design, UX, motion, and conversion patterns discovered through real client projects.

It is continuously updated via the AGENCY MEMORY LOOP.

---

## RULES FOR CONTRIBUTION

Only include insights that are:

- Proven in real builds
- Repeatable across clients
- Impactful to UX, conversion, or perception
- Not client-specific

Do NOT include:
- One-off design decisions
- Aesthetic preferences without evidence
- Client branding choices
- Temporary experiments

---

## UX PATTERNS

- **Two-action conversion architecture for trades.** Call + WhatsApp only. WhatsApp-a-photo-of-the-damage is a lower-commitment ask than a call, works out of hours, and starts the quote conversation — push it as hard as (or harder than) the call. Forms underperform for stressed mobile users. (Validated: 3+ automotive builds.)
- **Mobile sticky action bar** (Call / WhatsApp / Directions) at the bottom of the viewport is the single highest-value mobile pattern for local trade sites. Min 56px touch height, safe-area padded. (Validated: repeated across builds.)
- **The 3-second hero test.** A stressed mobile visitor must answer three questions in ten seconds: can they fix it, are they good, how do I get a price. Every hero is designed against this test.
- **Single long-scroll page beats thin multi-page** for small trade businesses — better for the user, for Google, and for the WhatsApp mock-up reveal. Sections expand into pages post-sale without redesign.

## CONVERSION PATTERNS

- **Never display an unverifiable number.** A broken or wrong review counter (rating, count, "X jobs done") destroys credibility faster than having no number at all. Numbers are read off the live source on build day or omitted. (Learned: live portfolio bug.)
- **Facts register discipline.** Every claim on a page (hours, certifications, guarantees, ratings) has a verified source before it ships. Unverified placeholder facts (e.g. opening hours) are the first thing clients flag. (Learned: repeated.)
- **The WhatsApp link preview is the client's first impression.** OG title + OG image must be set and tested — the site is judged before it's opened.

## DESIGN SYSTEM INSIGHTS

- **Micro-typography is the £20k signal.** A small letter-spaced label layer (uppercase, 0.7–0.75rem, wide tracking, muted colour) is the cheapest way to make a site read premium.
- **Dark palettes need soft white** (`#F4F5F7`-class), never `#FFFFFF` — pure white on near-black reads harsh and cheap.
- **One accent colour, used scarcely.** Accent appears on CTAs, one identity detail, and hover states only. Scarcity of the accent is what makes it feel expensive.
- **Crush photo blacks toward the page background hex** so photography sits IN the page instead of pasted on. Never place text on untreated photography — always a gradient overlay.
- **Deliberately vary type + palette per client** to avoid portfolio repetition; check every new system against the existing portfolio before locking.

## MOTION DESIGN INSIGHTS

- **Content visible by default; JS adds animation.** No element ships with `opacity: 0` in CSS. Reveals are applied via a JS-added class so a script failure leaves a complete site, not a blank one.
- **Full-screen loaders/overlays are the highest-risk pattern on record.** A failed GSAP timeline can lock an overlay over the whole site. Avoid loaders entirely on single-pagers; where used, require timeout + try/catch + `js-ready` fallback. (Learned: production incident.)
- **One reveal grammar per site** (e.g. fade-up 20px / 0.6s / power2.out), `once: true`. Repeat-triggering reveals read gimmicky and cost frames.
- **Reduced-motion is checked before init**, not patched after: skip Lenis, replace tweens with instant states, kill Ken Burns.
- **Animate only transform + opacity.** `will-change` applied narrowly and removed after entrance.

## PERFORMANCE INSIGHTS

- **Single self-contained HTML file is the delivery standard.** All assets base64/inlined, GSAP/Lenis inlined from npm — CDN references break local preview and messaging-app sharing. (Validated: every delivered build.)
- **Budget for the base64 tax (~33%).** Set the pre-encoding image budget from the target file size, not the other way round. Compress to WebP with JPEG fallback before encoding.
- **Test offline and with JS disabled before every handover.** These two tests catch the entire class of "it worked on my machine" failures.

## MOBILE INSIGHTS

- **Design the hero crop as a decision, not an accident.** Lock a focal point for the background image and verify at 390×844 and 360×800. No horizontal overflow, ever.
- **No hover-dependent meaning.** Hover states are desktop garnish; every interaction must be complete on touch.
- **Test at 4x CPU throttle** — the client's customer is on a mid-range Android, not the dev machine.

## ASSET & CLIENT-OPS INSIGHTS

- **Audit portfolio links before every cold call / share.** One visual bug in a shared example undermines the entire pitch.
- **Low-res client photos (<400px) are tester-only.** Real beats stock for mock-ups, but always request full-resolution originals via WhatsApp before the live build — dark premium designs magnify blur.
- **Share the public deployment URL only, never the hosting admin URL.**

---
*Last updated: 05 Jul 2026 — consolidated validated learnings from SWSR, Massi, MB AutoFix, LFD, Ali & Sons (spec), Sparks (pre-build).*
