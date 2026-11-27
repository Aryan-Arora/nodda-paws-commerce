# Handoffs

Newest first. Keep entries short: what changed, which files, what is next, anything left open.

## 2026-11-27, Codex / GPT (brand and design reports)
- Added `reports/BRAND_CONTENT_REPORT.md`: positioning, voice, message hierarchy, full-site copy deck, SEO copy, proof requirements and content priorities.
- Added `reports/GRAPHIC_DESIGN_REVIEW.md`: independent art-direction review with strengths, risks and P0/P1/P2 recommendations.
- Recommended master message: “Good things for pets. Good people to ask.” Recommended visual principle: “Poster attracts → catalogue explains → checkout reassures.”
- Next: consolidate the layered CSS into one system, lock typography and product-card behaviours, then replace placeholders when approved assets arrive.

## 2026-11-24, Codex / GPT (prototype motion)
- Added restrained motion to `prototype/`: one-time hero entrance, IntersectionObserver section reveals, fine-pointer card feedback and search-dialog entrance.
- Motion uses transform/opacity only, plays once, has no looping decoration and falls back to short opacity fades for reduced motion.
- Next: visually feel-check desktop/mobile timing, then continue Design Sprint 2 product detail.

## 2026-11-24, Codex / GPT (design started)
- Added `DESIGN_PLAN.md` and began Design Sprint 1 in `prototype/` with a responsive Birthday Poster homepage and calmer shop listing.
- Prototype uses only verified facts and explicitly labelled product/media placeholders; no backend or live commerce behavior exists yet.
- Claude next: review visual direction and content treatment without editing `prototype/**` concurrently; leave requested changes here. Codex next: browser QA, refine Sprint 1, then design product detail.

## 2026-11-24, Codex / GPT (sequence decision)
- Aryan approved frontend-first sequencing: responsive design/prototype in Phase 2, backend foundation in Phase 3, catalogue/inventory backend in Phase 4.
- Updated `BUILD_PLAN.md` and `context.md`. Phase 2 uses realistic mock data but is not a separate throwaway production frontend.
- Next: finish Phase 0 approvals, gather enough Phase 1 catalogue shape to design realistic product states, then start Phase 2.

## 2026-11-24, Codex / GPT (build roadmap)
- Added `BUILD_PLAN.md`: gated roadmap covering foundation, discovery, design, application setup, catalogue, storefront, cart, payments, fulfilment, brand/services, QA, UAT and launch stabilization.
- Updated shared instructions and `context.md`; project is currently in Phase 0.
- Next: Aryan/Claude lock visual direction, framework, service naming and account ownership, then begin catalogue/operations discovery.

## 2026-11-24, Codex / GPT (shared context)
- Added `techstack.md` and `context.md` as living documents for both agents.
- Updated `AGENTS.md`, `CLAUDE.md` and `COLLABORATION.md` so both agents read and maintain them with every relevant task.
- Next: Claude should reconcile accepted architecture decisions into `DESIGN.md`; both agents keep the living documents current and push each coherent update.

## 2026-11-24, Codex / GPT
- Added `proposals/GPT_CUSTOM_COMMERCE.md`: no-Shopify architecture for an owned-stock, self-fulfilled store, including storefront, staff dashboard, inventory ledger, order states, provider adapters and build phases.
- Recommendation: custom Next.js + PostgreSQL; Birthday Poster for discovery, Cosy Catalogue for buying surfaces, quiet utility styling for staff operations.
- Claude next: review the proposal and reconcile the accepted technology decision into `DESIGN.md`. Payment, tax, courier, shipping and catalogue facts remain `[OPEN]`.

## 2026-11-24, Claude (later)
- Done and pushed: `DESIGN_DIRECTIONS.md` (three directions + recommendation), `directions-board.html` (visual comparison; open it in a browser), `DESIGN.md` (source of truth, direction pending approval).
- Aryan's decisions: full online shop from day one; unknown facts stay `[OPEN]` for now; one local copy, clean tree, continuous pushes.
- GPT next: read `DESIGN.md` and `DESIGN_DIRECTIONS.md`, then add your own take in `proposals/GPT_*.md` (disagreements, extra directions, shop-flow ideas). Do not edit Claude's files; note changes you want here.
- Waiting on Aryan: pick a direction (A, B, C or the recommended mix), confirm the logo-true blue, and say whether the overnight service is "Boarding" or "Day care".

## 2026-11-24, Claude
- Set up the single working copy and the collaboration rules (`COLLABORATION.md`, `AGENTS.md`, `CLAUDE.md`, `.gitignore`).
- Next from Claude: `DESIGN_DIRECTIONS.md`, `directions-board.html`, then `DESIGN.md`.
- GPT: once those land, add your own take in `proposals/GPT_*.md` (do not edit Claude's files).
- Open: all unconfirmed business facts stay `[OPEN]` for now (hours, catalogue, prices, shipping, returns, reviews permission, original logo and photos).
# 26 November 2026 — GPT frontend completion pass

- Added a session-only Noddy loading animation with reduced-motion handling.
- Expanded the shop to nine responsive preview cards with category navigation, functional filters and a tested empty state.
- Added working search, quick-add, session cart persistence, quantity controls and item removal.
- Kept checkout disabled with explicit prototype messaging; this UI is the contract for later order/payment integration.
- Added fulfilment assurances and a sourced public-reputation section.
- Verified public listing snapshot: 4.8/5 from 49 Google reviews; hours shown with a call-to-confirm caveat.
- Do not treat preview product names, media or prices as approved catalogue data.
- Next agent should replace the CSS Noddy stand-in and catalogue previews only when approved assets/data arrive.

