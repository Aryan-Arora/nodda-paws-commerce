# Nodda Paws commerce: shared project context

**Living document** · **Last updated:** 24 November 2026 by Codex  
Claude and Codex must read this at the start of every task and update it before finishing whenever work, decisions, blockers, ownership or next actions change.

This is a concise operational record. Detailed brand and product rules remain in `DESIGN.md`; detailed technical decisions remain in `techstack.md`; agent-to-agent requests remain in `HANDOFFS.md`.

## Current objective

Create a full custom online shop and local service website for Nodda Paws, a pet store, grooming studio and boarding/day-care business in Tilak Nagar, West Delhi.

The website must let customers browse and purchase stocked products, enquire about services, call or get directions, and see real brand content. Nodda Paws will hold stock, pack orders and ship products itself.

## Locked decisions

- Full online shop from day one.
- No Shopify.
- Nodda Paws owns stock and fulfils shipments.
- Unknown business facts remain `[OPEN]` and are never invented.
- Use the original logo unchanged when received.
- Use real approved pet, product, shop and team media; no stock or AI pets.
- Public Instagram reels load only after a tap and are not re-hosted without supplied originals/permission.
- Mobile-first experience.
- One shared local working copy on `main`, with small commits pushed immediately.
- Execution order: complete the frontend design and responsive prototype first; begin the application/backend foundation in Phase 3 and the catalogue/inventory backend in Phase 4.

## Recommended direction awaiting formal approval

- Birthday Poster for homepage, campaigns and brand moments.
- Cosy Catalogue discipline for product listing, product details, cart and checkout.
- One controlled Noddy/community section inspired by Noddy's Neighbourhood.
- Logo-true sky blue `#5395D0` is recommended over the older dark navy.
- Technical recommendation: custom Next.js + PostgreSQL architecture; see `techstack.md`.

## Work completed

### 24 November 2026 — Claude

- Established collaboration and file-ownership rules.
- Created `DESIGN.md`, the brand/content/experience source of truth.
- Created three visual directions in `DESIGN_DIRECTIONS.md`.
- Created `directions-board.html` for visual comparison.
- Recorded verified public business facts and parked unknown facts as `[OPEN]`.

### 24 November 2026 — Codex / GPT

- Reviewed the repository and summarized scope, decisions and blockers.
- Added `proposals/GPT_CUSTOM_COMMERCE.md` for a no-Shopify, owned-stock commerce architecture.
- Recommended a customer storefront plus a private staff operations dashboard.
- Proposed Next.js, PostgreSQL, an inventory movement ledger, provider adapters and a phased build plan.
- Added `techstack.md` and `context.md` as shared living documents.
- Added `BUILD_PLAN.md`, a gated 13-phase roadmap from decision lock through launch stabilization.
- Added `DESIGN_PLAN.md` and started Design Sprint 1 with responsive homepage and shop-listing prototypes in `prototype/`.
- Added the Sprint 1 motion system: one signature hero entrance, one-time section reveals, subtle card/button feedback and reduced-motion fades.

## Repository state

- Repository: `https://github.com/Aryan-Arora/nodda-paws-commerce`
- Working branch: `main`
- Application code: not scaffolded yet
- Current repository contents: planning documents, visual direction board and architecture proposal
- Product catalogue imported: no
- Database created: no
- Payment provider connected: no
- Shipping provider connected: no
- Deployment created: no

## Immediate decisions for Aryan

1. Approve the recommended visual mix or choose Direction A, B or C.
2. Confirm logo-true sky blue as the main blue, subject to original brand files.
3. Confirm whether navigation uses Boarding, Day care, or both.
4. Approve Next.js + PostgreSQL as the custom-commerce foundation.
5. Confirm who owns and operates the production accounts.

## Business information still needed

- Complete product catalogue
- Variants, sizes, colours, SKUs, prices and stock
- Product weights and dimensions
- Product and real-pet photography rights
- Clothing size guide
- Opening hours and holiday exceptions
- Primary phone and confirmed WhatsApp workflow
- Grooming packages, prices, durations and eligibility
- Boarding/day-care naming, rules, timings, capacity and prices
- Shipping zones, rates, free-shipping threshold and delivery promises
- Courier process/provider
- Returns, refunds and cancellation policies
- GST, tax and invoice treatment
- Payment provider and Cash on Delivery decision
- Staff roles and permissions
- Domain, business email and account ownership

## Current delivery phase

**Phase 0 — Lock the project foundation.** See `BUILD_PLAN.md`.

Phase 0 is not complete. Visual direction, framework, service naming and production account ownership still need approval.

Aryan has approved the broad sequencing: frontend design first, backend foundation in Phase 3 and working catalogue/inventory backend in Phase 4. “Frontend first” means an approved high-fidelity prototype with realistic mock data, not a disconnected production frontend that later needs to be rebuilt around the data model.

Design Sprint 1 has started as reversible prototype work while remaining Phase 0/1 business facts stay open. The active visual direction is **premium-playful neighbourhood concept store**: editorial Fraunces typography and calm commerce structure, warmed by Noddy-led ochre, moss and coral accents, organic arches, soft pills and restrained character moments. The earlier bright poster/clay treatment and the subsequent monochrome boutique pass were both rejected as extremes. Prototype placeholders are explicitly labelled and cannot ship to production.

## Next recommended work

1. Complete Phase 0 decisions in `BUILD_PLAN.md`.
2. Begin Phase 1 catalogue and operations discovery with the client.
3. Do not start transactional implementation until its preceding phase gate passes.

## Current blockers

- Visual direction is not formally approved.
- Framework/provider recommendation is not formally approved.
- Product catalogue and stock structure are unavailable.
- Payment, tax, shipping and return rules are unavailable.
- Original logo and approved product/pet assets are unavailable.

These blockers prevent production commerce implementation, but do not prevent design-system planning or a reversible local scaffold after Aryan approves the framework.

## Update protocol for both agents

At the start of a task:

1. Read `COLLABORATION.md`.
2. Read `context.md`.
3. Read `techstack.md`.
4. Read `DESIGN.md` and relevant proposal/handoff files.
5. Run `git pull --rebase`, then `git status`.

Before finishing a task:

1. Update `context.md` if completed work, current state, blockers or next actions changed.
2. Update `techstack.md` if a technical decision or provider status changed.
3. Add a concise `HANDOFFS.md` entry when another agent needs to act.
4. Commit one coherent idea and push it immediately.
5. Confirm the tree is clean and `origin/main..HEAD` is empty.

Do not turn either living document into a chronological dump. Keep the current state accurate and concise; retain only milestones that help the next agent understand the project.

