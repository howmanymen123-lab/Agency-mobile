# 02_UX_AND_STRUCTURE — THAI HEALTH MASSAGE
**Phase status:** Phase 2 — UX & STRUCTURE. No code. No visual design (Phase 3). No motion spec (Phase 4).
**Architecture:** One-page, anchored sections. Single conversion path: tap-to-call 01708 748026.
**Concept carried through:** THE SLOW HOUR — time is the product; the page is one unhurried scroll from arrival to phone call.

---

## 1. SITEMAP (ONE PAGE, EIGHT SECTIONS + PERSISTENT ELEMENTS)

```
/  (single URL)
├── #top        HERO — The Slow Hour
├── (trust strip — unanchored, belongs to hero exit)
├── #pressure   CHOOSE YOUR PRESSURE
├── #prices     SERVICES & PRICES — The Duration Matrix
├── #studio     THE STUDIO — first-visit guidance
├── #about      NID & HER TEAM — why it works
├── #reviews    4.8★ — WHAT ROMFORD SAYS
├── #visit      VISIT US — map, hours, address
└── (final CTA band + footer)

Persistent: sticky nav (desktop + mobile) · sticky mobile call bar
```

Nav labels: **Pressure · Prices · Studio · Reviews · Visit** + phone number as the nav CTA. Five anchors maximum — nav stays minimal per design system. "About" is reachable by scroll; it doesn't earn a nav slot (nav slots are for decision-driving sections).

---

## 2. USER JOURNEYS

**Journey A — "I need a massage this week" (primary, ~15 seconds, mobile).**
Google → hero. Sees: what it is, where it is, 4.8★, open-today status, one gold call button. Taps call. Done. Everything Journey A needs exists in the first viewport.

**Journey B — the nervous first-timer (~90 seconds, mobile).**
Hero (reassured by rating) → Pressure section ("you choose — light, medium, deep… very adaptable to what you want") → Prices (honest, upfront, no surprises) → Studio (sees the real, clean, calm room; knows what happens on arrival) → Reviews (nine more strangers confirm) → sticky bar has been patiently holding the call button the whole time → taps call.

**Journey C — the occasion booker (couples / four hands).**
Hero → Prices → sees Couples & Four Hands rows flagged "call for availability" → that phrase IS the CTA → calls.

Every journey ends at the same phone number. No dead ends, no exits (social links live in the footer only).

---

## 3. PERSISTENT ELEMENTS

### 3.1 Sticky navigation
- **Desktop:** wordmark left · five anchor links centre-right · phone number as a button, far right. Transparent over hero → solid ivory with hairline gold rule once scrolled past hero. Height compact (~72px), never obstructs.
- **Mobile:** wordmark left · call icon-button right. No hamburger, no drawer — a one-pager with a sticky call bar doesn't need a menu; every section arrives by scroll. (Fewer interactive elements = fewer failure points = faster.)

### 3.2 Sticky mobile call bar
- Bottom-fixed, appears only after the user scrolls past the hero (the hero has its own call button — no doubling).
- Full-width single action: **"Call 01708 748026"** with a small open-status line ("Open today until 7pm" / "Opens Tuesday 9am"), computed from verified hours with a static safe fallback ("Open Tue–Sun").
- One thumb target. No split buttons — there is nothing to split; call is the only path.
- Safe-area-inset aware (iPhone home indicator). Never overlaps content: page gets matching bottom padding.

---

## 4. SECTION-BY-SECTION STRUCTURAL BLUEPRINT

### SECTION 1 — HERO — "The Slow Hour" (#top)
**Job:** In one viewport: what, where, proof, action. Serve Journey A completely.
**Content elements:**
- Typeset wordmark (small, top-left in nav)
- H1 (the page's only H1): headline in the "An hour that belongs to you" territory — final copy in Phase 3 alongside type scale
- One supporting line: what + where ("Traditional Thai massage in Collier Row, Romford — light, medium or deep. You choose.")
- Rating lockup: 4.8★ · 240+ Google reviews (links to #reviews, not off-site)
- Primary CTA: call button (tel: link)
- Open-status microline beneath CTA
- Background: atmospheric AI video (external host, poster fallback, reduced-motion → poster only) with dark aubergine overlay for contrast
**Layout direction:** full-viewport dark. Content left-aligned on desktop (asymmetric per design system, not centred-generic), bottom-third weighted — type sits low, calm, unhurried. Mobile: same hierarchy, comfortable bottom padding above the fold line.
**Conversion role:** Journey A conversion point. Rating = borrowed trust before a single scroll.
**Motion intent (spec in Phase 4):** slow single-element video movement; restrained text entrance; no parallax gimmicks here.

### SECTION 2 — TRUST STRIP (unanchored, hero exit)
**Job:** compress the four trust facts into one glanceable beat between the dark hero and light body.
**Content:** Family-run · Nid & her team · You choose the pressure · 4.8★ 240+ reviews · Open six days a week. (Pick four of five in Phase 3 if the line crowds — rating and family-run are untouchable.)
**Layout direction:** single horizontal band on ivory, hairline rules, small caps. Mobile: two rows max. No icons-for-the-sake-of-icons.
**Conversion role:** trust scaffolding; earns the scroll into Pressure.

### SECTION 3 — CHOOSE YOUR PRESSURE (#pressure)
**Job:** the differentiator. Convert the nervous first-timer; frame the whole menu.
**Content elements:**
- Section intro: two lines — the treatment adapts to you.
- Three panels: **Light/Medium** (unwind, first-timers welcome → Aromatherapy, Combination) · **Deep** (working on knots, tension, desk-back → Deep Tissue) · **Your Choice** (tell us on the day, we adjust as we go → Back & Shoulders, Foot, Four Hands, Couples).
- Each panel: who it's for (plain English), what it feels like, which treatments carry it, and a quiet "from £40 · 30 min" anchor line.
- Proof element: one embedded review quote — Jo O.: "I suffer with a serious back condition and the girls listened and knew exactly what to do — and not do." (Genuine quote, lightly trimmed, attribution "Jo O. — Google review." Verbatim source on file.)
- Micro-CTA: "Not sure which? Call and ask — Nid will tell you straight."
**Layout direction:** desktop — three tall panels, deliberately asymmetric (middle panel drops lower; avoids the generic three-card row). Mobile — stacked full-width, generous breathing room.
**Conversion role:** removes the #1 first-timer objection ("what if it's too hard/too soft?"); routes readers into Prices already knowing their lane.

### SECTION 4 — SERVICES & PRICES — THE DURATION MATRIX (#prices)
**Job:** every service, every price, one glance. Kill the old site's seven repeated cards. Honest pricing as a weapon.
**Content elements:**
- Section intro: one line ("Straight prices. No packages, no pressure — except the kind you ask for.")
- **Desktop layout: the matrix.** Rows = seven services (each with a small pressure tag). Columns = 30 min / 1 hr / 90 min / 2 hrs. Cells = prices. Empty cells rendered as quiet em-dashes — the whitespace itself communicates the menu's shape. Four Hands & Couples rows carry "please call for availability" as a gold inline note (verbatim from their live menu — it's a call trigger, not a caveat).
- **Mobile layout: stacked service blocks.** Each service = name + pressure tag + a compact duration/price grid (2×2 or 1×2 as available). NOT a squeezed table, NOT horizontal scroll — 320px must be flawless per standards.
- Inline CTA after the matrix: call button + "Open six days a week."
**Conversion role:** the decision section for Journeys A-returning, B and C. Price transparency = trust = call.
**Structural note:** this section is the concept made physical — time as the organising axis. It must read like a beautiful menu, not a spreadsheet (execution in Phase 3).

### SECTION 5 — THE STUDIO (#studio)
**Job:** show the real place; answer "what happens when I walk in?"
**Content elements:**
- Editorial image group from the real photo set: Image 6 (table, lead), Image 7 (room), Image 9 (plants, supporting).
- Copy block: "Your first visit" — arrive a few minutes early, tell us where you're carrying tension and how much pressure you want, the room is yours for the time you've booked. Calm, factual, zero fluff.
- Cleanliness/calm line supported by Linda D.'s review language ("clean, calm and so relaxing") — paraphrased in copy, quoted in Reviews.
**Layout direction:** asymmetric editorial split — one large image, two offset smaller, copy in the counter-column. Mobile: lead image full-width, copy, then the two supporting images.
**Conversion role:** de-risks the unknown-venue objection; authenticity beats stock.

### SECTION 6 — NID & HER TEAM (#about)
**Job:** put humans behind the hands. Family-run is a claim; Nid is a person.
**Content elements:**
- Short intro: family-run, Nid & her team, traditional Thai techniques.
- Benefits copy (modest, honest): ease muscle tension, help with everyday aches, improve circulation, leave relaxed. No medical claims beyond their own approved language.
- Optional portrait slot: one warm candid of Nid/team **if supplied** — section is designed text-led-first so the photo is an upgrade, not a dependency. (Asset request open with client; not a blocker.)
**Layout direction:** split layout, copy-dominant. If no photo: textile texture crop from Image 6 as the visual counterweight.
**Conversion role:** "family-run" + a name converts the trust-driven caller; also the section regulars forward to friends.

### SECTION 7 — REVIEWS — WHAT ROMFORD SAYS (#reviews)
**Job:** deploy the 4.8★/241 asset the old site wasted.
**Content elements:**
- Rating lockup: large 4.8 · stars · "from 240+ Google reviews" · link out to their Google profile (the ONE off-site link outside the footer — social proof verification is worth the exit risk).
- Six curated genuine quotes (verbatim, on file, attributed first name + initial):
  1. Mrs B — "I go once a month, and feel like I'm walking on air when I leave. I won't go anywhere else now."
  2. Linda D. — "Best Thai massage. Professional, polite and welcoming. The place is clean, calm and so relaxing."
  3. Anne W. — couples massage story (trim to the couples + "reasonable price" beats) → supports Journey C.
  4. Colossal Kratos → attribute as "C.K." — "My first massage and it was great… very adaptable to what you want" → first-timer proof.
  5. Marco P. — "…the masseuse was amazing, 10/10" (deep tissue) → pressure-seeker proof.
  6. Hana S. — "The masseuse knows exactly what she was doing. Definitely will be coming back." (recent — freshness signal)
- Jo O.'s quote already lives in #pressure — not repeated here.
**Curation logic:** each quote covers a different objection (loyalty, cleanliness, couples, first-timer, deep tissue, recency). No quote wall padding.
**Layout direction:** desktop — staggered two/three-column quote composition with the rating lockup as the anchor element (not a carousel; carousels hide proof and users don't swipe). Mobile — rating lockup, four quotes stacked, "Read all reviews on Google" link.
**Conversion role:** final objection-clearing before the visit/call close.

### SECTION 8 — VISIT US (#visit)
**Job:** zero-friction logistics. Where, when, how to reach.
**Content elements:**
- Address: 166 Collier Row Lane, Mawneys, Romford RM5 3EA
- Hours table, verified: Mon Closed · Tue–Sat 09:00–19:00 · Sun 10:00–15:00 — with today's row highlighted (JS, static-safe fallback)
- Map: **static map image** linking out to Google Maps directions (a live embed is ~500KB of third-party JS and a Core Web Vitals hit — the static image is instant and tap-to-navigate). 
- Phone, repeated, tap-to-call. Email as quiet secondary line.
- No parking claim (unverified — omitted per facts register).
**Layout direction:** split — logistics column + map visual. Mobile: address → call button → hours → map.
**Conversion role:** the "can I actually get there before it shuts" close for Journey A stragglers.

### SECTION 9 — FINAL CTA BAND (unanchored)
**Job:** the exhale. Close the loop on The Slow Hour.
**Content:** dark aubergine band. Headline territory: "Your hour is waiting." One call button. Open-status microline. Nothing else.
**Layout direction:** generous vertical padding, centred single-axis composition (the one intentionally centred moment on the page — stillness).

### FOOTER
Wordmark · address · phone (tap-to-call) · hours one-liner · Facebook + Instagram (verified URLs, the only social links on the page) · © Thai Health Massage 2026. No sitemap-links-to-nowhere, no "powered by" anything.

---

## 5. STRUCTURAL SEO & SEMANTICS PLAN

- One H1 (hero). H2 per section, logical order, no skipped levels.
- Meta title: "Thai Health Massage — Traditional Thai Massage in Romford | Collier Row" (final copy locked in Phase 3 copy pass). Meta description sells pressure-choice + 4.8★ + call.
- `LocalBusiness`/`MassageTherapist` JSON-LD: name, address, geo, phone, opening hours, sameAs (FB/IG). **Deliberately NO aggregateRating markup** — rating shown on-page comes from Google; marking it up as our own review data violates Google's structured-data guidelines and risks a manual action. The 4.8★ lives in visible content only.
- Alt text on every image (real descriptions, not keyword stuffing).
- All prices in real text (no image-based pricing), fully crawlable.

---

## 6. CONVERSION LOGIC MAP (every call CTA on the page)

1. Hero call button (Journey A)
2. Sticky mobile call bar (persistent, post-hero)
3. Nav phone button (desktop persistent)
4. Pressure section micro-CTA ("call and ask")
5. Post-matrix inline CTA
6. "Call for availability" rows (Four Hands / Couples)
7. Visit section phone
8. Final CTA band
9. Footer phone

Nine touchpoints, one number, zero competing actions. Off-site exits: Google reviews link (#reviews, earns its place) and footer socials only.

---

## 7. PERFORMANCE & MOBILE RISKS FLAGGED NOW (mitigations locked before Phase 5)

- Hero video: external host, poster-first, `prefers-reduced-motion` → static poster, no loader, no opacity:0 gating (playbook motion-safety rules apply in full).
- Static map image instead of Maps embed (saves ~0.5MB + third-party JS).
- Real photos (Images 6/7/9) need compression + modern format at build; base64-inlined per single-file standard — budget checked in Phase 5.
- Matrix → stacked blocks on mobile; test at 320px explicitly.
- Fraunces is a variable font with heavy axes — subset + limited weights, locked in Phase 3.

---

**END OF PHASE 2. No code written. Awaiting sign-off to proceed to Phase 3 — DESIGN SYSTEM (typography scale, palette lock, spacing/grid, UI patterns).**
