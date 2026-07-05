# 04 — MOTION SYSTEM (LOCKED)
## Sparks Car Body Repair
Status: ✅ Approved. Motion is defined here and only here.

---

## Stack
GSAP 3.12.5 + ScrollTrigger + Lenis 1.0.42 — **all inlined from npm into the single file. Zero CDN requests.** No Three.js: nothing on this page earns 3D, and the tester must be bulletproof on a mid-range Android.

## Non-negotiable safety architecture (Massi lesson — this is the "test" layer)
1. **Content visible by default.** All reveal animations run `gsap.from()` state applied via a `.js-anim` class added by JS. If JS fails to load or throws, the page is a complete, styled, readable site with zero animation. No element ships with `opacity: 0` in the CSS.
2. **No loader, no full-screen overlays, ever** on this build. Nothing exists that can lock the viewport.
3. **try/catch around the entire animation init.** On error: log, add `.anim-off` to `<html>`, site remains fully functional.
4. **`prefers-reduced-motion: reduce`** → Lenis not initialised, all tweens replaced by instant states, Ken Burns off. Checked before init, not after.
5. Lenis wrapped in its own try/catch — if it fails, native scroll takes over silently.

## Hero
- **Entrance (one-time, on load):** H1 rises word-by-word — GSAP stagger 60ms per word, y: 24px → 0, opacity 0 → 1, `power3.out`, total ≤ 900ms. Sub + CTA row follow at 150ms offset. Trust strip fades last.
- **Ken Burns:** background photo scales 1.0 → 1.08 over 12s, `transform: scale` only (GPU-composited), one-time then holds. Disabled under reduced motion and on `saveData` connections.
- **Scroll parallax:** hero content translates up ~15% faster than the photo as user scrolls out (ScrollTrigger scrub). Subtle — if it's noticeable as an "effect", it's too much.

## Section reveals
Single consistent grammar across the page: fade-up 20px, 0.6s, `power2.out`, triggered at `top 80%`. Services cards stagger 80ms; Why-Sparks columns stagger 100ms. **Once per element (`once: true`)** — no re-triggering on scroll-up; repeat reveals read gimmicky and cost frames.

## Reviews carousel
Crossfade only: outgoing quote opacity 1→0 / incoming 0→1 with a 6px y-drift, 0.5s, 6s interval, pause on hover/touch. No sliding, no 3D flips. Buildable in pure CSS if GSAP is unavailable — implement it so.

## Micro-interactions
- Buttons: background shift to `--spark-deep` + 2px lift, 200ms. CSS transitions, not GSAP.
- Service cards: 4px lift + orange underline draws left-to-right under title, 300ms. Desktop hover only — no hover simulation on touch.
- Nav: solid background + border fade-in after 80px scroll (ScrollTrigger toggle class).
- Link underlines: draw on hover, 250ms.

## What is deliberately absent
Pinned sections, horizontal scroll, scroll-jacking, cursor effects, magnetic buttons, text scramble, page transitions. One-pager for a body shop — the restraint IS the premium signal (ANIMATION_GUIDE: every animation must have intent).

## Performance budget
- 60fps target; only `transform` and `opacity` are animated. No animated `filter`, `box-shadow`, or layout properties.
- `will-change` applied only to the hero photo and active carousel quotes, removed after entrance completes.
- Mobile: parallax scrub reduced by half; everything else identical. Test on a throttled 4x CPU profile before delivery.
