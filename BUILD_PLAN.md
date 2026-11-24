# Nodda Paws commerce: phased build plan

**Living delivery plan** · **Created:** 24 November 2026 by Codex  
**Status:** proposed for Aryan and Claude  
Read with `DESIGN.md`, `techstack.md` and `context.md`.

## Outcome

Deliver a custom, mobile-first Nodda Paws website with:

- A distinctive public brand and service website
- A complete product catalogue with variants and stock
- Cart, delivery address, shipping and payment
- Order confirmation and tracking
- A private staff dashboard for products, inventory, packing and fulfilment
- Real photos, reels and local-business information
- Accessible, secure, search-friendly and measurable production operation

The build is divided into gated phases. A phase is complete only when its acceptance criteria pass; unfinished foundational work must not be hidden under visual polish.

## Workstreams

Four workstreams run through the phases:

1. **Business:** catalogue, pricing, tax, shipping, policies and staff workflow
2. **Experience:** brand direction, responsive interface, content and accessibility
3. **Commerce engineering:** database, inventory, cart, payment, orders and fulfilment
4. **Operations:** accounts, training, support, monitoring and launch ownership

Some work can happen in parallel, but the phase gates protect transactional correctness.

### Agreed sequencing

Aryan has chosen a frontend-first sequence:

1. Complete the responsive visual system and high-fidelity customer/staff prototypes in Phase 2.
2. Start the application, environments, authentication and database foundation in Phase 3.
3. Build the real catalogue and inventory backend in Phase 4.

The Phase 2 frontend uses realistic mock data and covers all transactional states. It is a design/prototype contract, not a separate production codebase. Production components are connected to the real schema from Phase 3 onward to avoid rebuilding the storefront.

---

## Phase 0 — Lock the project foundation

### Goal

Remove the decisions that would otherwise force major redesign or rework.

### Work

- Approve the visual mix: Birthday Poster for discovery, Cosy Catalogue for commerce, one controlled community section.
- Confirm logo-true sky blue or replace it using the original brand file.
- Confirm service names: Grooming, Boarding and/or Day care.
- Approve the custom Next.js + PostgreSQL architecture.
- Confirm who owns production accounts, billing and credentials.
- Obtain the original logo and confirm media rights.
- Name one client decision-maker and one staff operations owner.
- Define launch scope versus later features.

### Deliverables

- Approved design direction
- Approved technical foundation
- Account-ownership matrix
- Launch scope and deferred-feature list
- Initial risk register

### Gate

- No unresolved disagreement about visual direction, framework or account ownership.
- The approved decisions are reflected in `DESIGN.md`, `techstack.md` and `context.md`.

---

## Phase 1 — Catalogue and operations discovery

### Goal

Understand what the system must sell and how the shop will actually operate it.

### Work

- Inventory every launch product and collection.
- Define product variants: size, colour, SKU, price, compare-at price, weight and stock.
- Decide whether barcodes are needed.
- Confirm whether inventory exists at one location or more.
- Map the current order workflow from purchase to packing, courier and delivery.
- Confirm shipping zones, parcel rules, rates and free-shipping threshold.
- Confirm GST, invoices, cancellation, return and refund rules.
- Confirm payment methods and Cash on Delivery policy.
- Define staff roles: catalogue editor, packer, manager and refund authority.
- Confirm customer-notification channels and support ownership.

### Deliverables

- Clean catalogue import sheet
- Product-image checklist and naming rules
- Inventory and fulfilment workflow diagram
- Shipping, tax, payment and policy decision sheet
- Staff roles and permission matrix
- Confirmed launch acceptance scenarios

### Gate

- Every launch product has a valid title, SKU, variant structure, price, weight, stock and image status.
- The business can explain one complete order, cancellation and return journey without gaps.

---

## Phase 2 — Experience architecture and design system

### Goal

Turn the approved visual direction into a coherent responsive system before building every page.

This is the first active build/design phase after project decisions and catalogue discovery. Frontend experience is completed and approved before backend implementation begins.

### Work

- Define colour, typography, spacing, borders, shadows, motion and focus tokens.
- Design the mobile navigation, search, cart count and bottom contact bar.
- Design reusable product cards, collection banners, service cards, notices and forms.
- Design operational states: loading, empty, error, sold out, unavailable and payment failure.
- Design calm catalogue, product, cart and checkout interfaces.
- Design the staff dashboard separately as a quiet utility system.
- Build high-fidelity responsive prototypes for the highest-risk flows.
- Test contrast, keyboard order, zoom and 44px tap targets in the system itself.

### Required prototypes

- Homepage hero and first viewport
- Product listing and filters
- Product detail with variants
- Cart
- Delivery and payment checkout
- Order confirmation
- Staff product editor
- Staff order-packing view

### Deliverables

- Approved responsive design system
- Component inventory
- Page templates and state matrix
- Motion and reduced-motion specification
- Content and image requirements by component

### Gate

- Mobile and desktop prototypes are approved.
- Commerce surfaces remain clear when decorative brand effects are removed.
- Every transactional state has a designed outcome.

---

## Phase 3 — Application, data and environment foundation

### Goal

Create a secure, repeatable engineering foundation.

### Work

- Scaffold the approved Next.js TypeScript application.
- Add linting, formatting, type checking and test commands.
- Set up local, preview/staging and production environments.
- Create PostgreSQL migrations and seed data.
- Implement staff authentication and role-based authorization.
- Configure private secrets and environment validation.
- Configure product-image storage and transformations.
- Add CI checks for types, tests and production build.
- Add error monitoring and structured server logs without personal data.
- Create backup and restore procedures for the database.

### Deliverables

- Running local application
- Preview deployment
- Versioned database schema and migrations
- Staff sign-in skeleton
- CI pipeline
- Environment and recovery documentation

### Gate

- A fresh checkout of the repository can be configured and run from documentation.
- Migrations apply cleanly to an empty database.
- Unauthorized users cannot access staff routes.
- No secrets are committed or exposed to browser code.

---

## Phase 4 — Catalogue and inventory operations

### Goal

Give Nodda Paws a safe internal system for maintaining sellable products and real stock.

### Work

- Build staff product drafts and publishing controls.
- Build collections, categories, product variants and image ordering.
- Add SKU, size, colour, price, compare-at price, weight and status validation.
- Build the append-only inventory movement ledger.
- Add stock receipts, corrections and return-to-stock actions.
- Add catalogue search, filters and CSV import/export.
- Add low-stock operational views without exposing fake scarcity publicly.
- Record an audit trail for product, price and stock changes.

### Deliverables

- Usable staff catalogue editor
- Inventory adjustment interface
- Catalogue import process
- Audit and stock history views
- First real catalogue loaded into staging

### Gate

- Staff can create, review, publish and unpublish a complete product.
- Stock totals can be explained from inventory movements.
- Incomplete products cannot become purchasable.
- Real launch catalogue passes a data-quality review.

---

## Phase 5 — Public storefront and discovery

### Goal

Let customers find, understand and select real products quickly.

### Work

- Build header, navigation, search entry and cart count.
- Build shop, collection and product-detail pages.
- Add responsive product imagery and variant-aware galleries.
- Add filters, sorting and search.
- Add variant selection, stock state and delivery-information placeholders driven only by confirmed rules.
- Add structured data for products, offers and breadcrumbs.
- Add canonical URLs, metadata and clean empty/search states.
- Apply Cosy Catalogue discipline to buying surfaces.

### Deliverables

- Browseable real staging catalogue
- Search, filters and sorting
- Variant-selectable product pages
- Product SEO and structured data
- Accessible loading, empty, error and sold-out states

### Gate

- A customer can find any launch product and select a valid variant on phone and desktop.
- Price and stock are always sourced from the server.
- Product pages remain usable without optional motion or rich media.

---

## Phase 6 — Cart, pricing and stock reservation

### Goal

Create a trustworthy cart that cannot purchase stale or invalid data.

### Work

- Build persistent guest cart behavior.
- Add, update and remove cart items.
- Revalidate variants, prices and stock on the server.
- Explain changed price, unavailable variant and reduced stock states.
- Calculate subtotal and approved discounts.
- Create timed stock reservations `[OPEN: duration]`.
- Release expired/failed reservations safely.
- Add analytics for product view, search, add, remove and begin checkout.

### Deliverables

- Cart drawer and full cart page
- Server-side cart pricing
- Inventory reservation service
- Cart recovery from common errors
- Transactional cart tests

### Gate

- Two simultaneous carts cannot oversell the last unit.
- Stale client data never controls final price or availability.
- Cart remains intact after a failed checkout attempt.

---

## Phase 7 — Checkout, payments and order creation

### Goal

Accept a real payment exactly once and create a correct order.

### Work

- Build guest contact and delivery-address forms.
- Validate postcode serviceability and shipping charges before payment.
- Create immutable order-item snapshots.
- Integrate the confirmed payment provider through an adapter.
- Verify signatures and payment status server-side.
- Store and process idempotent webhook events.
- Handle pending, successful, failed, cancelled and refunded payment states.
- Implement Cash on Delivery only if approved.
- Send order confirmation through the confirmed channel.
- Add secure order-status access.

### Deliverables

- Complete staging checkout
- Payment adapter and verified webhooks
- Order creation and confirmation
- Failed-payment recovery
- Payment reconciliation view

### Gate

- Real test payments succeed and produce exactly one order.
- Duplicate callbacks do not duplicate payments, orders or stock deductions.
- Failed and abandoned payments release stock correctly.
- Refund flow is tested, not merely documented.

---

## Phase 8 — Packing, shipping and post-purchase operations

### Goal

Let staff fulfil orders without spreadsheets or informal messages.

### Work

- Build order search and operational filters.
- Build New → Packing → Shipped → Delivered queue.
- Build packing view with immutable product and variant details.
- Add courier, tracking number and shipment status.
- Add cancellation, refund and return handling.
- Add manual shipping workflow first.
- Add courier API integration only after the manual workflow is proven.
- Add customer shipment notifications and tracking links.
- Add order/inventory CSV export.

### Deliverables

- Staff order dashboard
- Packing workflow
- Manual tracking workflow
- Cancellation, refund and return records
- Customer shipment updates

### Gate

- Staff can fulfil a test order from payment to delivery without developer help.
- Cancellation and return actions preserve financial and stock history.
- Support staff can find an order and explain its current state.

---

## Phase 9 — Brand homepage, services and local content

### Goal

Complete the expressive customer experience after the commerce core is reliable.

### Work

- Build the Birthday Poster homepage and collection campaigns.
- Add Noddy-led hero using approved real assets.
- Build Grooming, Boarding and/or Day care pages using verified information.
- Add tap-to-play Instagram reels with text context.
- Add the dated Seva Sarathi community story.
- Build offers with Live, Upcoming and Ended states.
- Add About, Contact, directions and map-on-tap.
- Add verified FAQs and approved review content only.
- Add LocalBusiness structured data and consistent name/address/phone.

### Deliverables

- Complete brand homepage
- Service and local pages
- Reel and community modules
- Offer states
- Local SEO implementation

### Gate

- The first mobile viewport answers what Nodda Paws is and how to shop/book/reach it.
- No unconfirmed facts, expired offers or unapproved review text appear.
- Essential meaning exists outside videos and canvas.

---

## Phase 10 — Policies, accessibility, security and performance

### Goal

Make the complete system safe and launch-quality.

### Work

- Publish approved shipping, returns, privacy and terms pages.
- Run keyboard, screen-reader, contrast, zoom and reduced-motion testing.
- Test mobile Core Web Vitals and JavaScript budgets.
- Optimize images, fonts and server responses.
- Run authorization and data-access tests.
- Rate-limit authentication, checkout and provider callbacks.
- Test common abuse, invalid input and replay scenarios.
- Verify analytics excludes phone numbers, addresses and payment details.
- Verify sitemap, robots, canonicals and indexing exclusions.
- Verify backups and perform a restore drill.

### Deliverables

- Accessibility report
- Performance report
- Security and privacy checklist
- SEO/indexing checklist
- Backup restore evidence
- Fixed launch-blocking defects

### Gate

- No critical or high-severity accessibility, security or order-integrity issue remains.
- Core Web Vitals and documented budgets are met on representative mobile devices.
- Policies accurately match implemented behavior.

---

## Phase 11 — Client UAT, catalogue freeze and training

### Goal

Prove the real team can run the system before customers depend on it.

### Work

- Freeze launch catalogue structure and reconcile physical stock.
- Run client acceptance scenarios on staging.
- Train staff on catalogue, stock, orders, packing, tracking, cancellation and refund flows.
- Produce a short operations runbook with screenshots.
- Confirm support contacts and incident ownership.
- Run a full paid order, shipment, cancellation and refund rehearsal.
- Prepare launch redirects, DNS and rollback plan.

### Deliverables

- Signed UAT checklist
- Reconciled opening stock
- Staff operations runbook
- Trained named owners
- Launch and rollback checklist

### Gate

- Staff complete critical workflows without developer intervention.
- Opening stock matches the physical shop.
- Aryan/client signs off staging for launch.

---

## Phase 12 — Launch and stabilization

### Goal

Launch safely, observe real behavior and stabilize operations.

### Work

- Deploy production database migrations and application.
- Configure domain, SSL, email and provider webhooks.
- Run production smoke tests with a controlled real order.
- Submit sitemap and verify search-console ownership.
- Monitor errors, payment callbacks, stock reservations and order creation closely.
- Reconcile the first orders manually against payments and inventory.
- Fix launch defects in small, documented releases.
- Review analytics and customer-support friction without making premature visual redesigns.

### Deliverables

- Live production storefront and staff dashboard
- Verified production order and refund
- Monitoring and incident log
- Stabilization backlog
- Post-launch review

### Gate

- Production orders, payments, stock and fulfilment reconcile correctly.
- No unresolved launch-critical incident remains.
- Normal maintenance ownership has transferred to the agreed team.

---

## Deferred enhancements

These are not launch requirements unless Aryan explicitly promotes them:

- Customer accounts and saved addresses
- Wishlists
- Loyalty or referral programme
- Product reviews
- Automated courier label generation
- Multiple inventory locations
- Advanced promotions and bundles
- Abandoned-cart messages
- Care guides and blog
- Personalised recommendations
- Native mobile application
- Optional 3D hero work

## Agent collaboration proposal

- **Claude:** owns `DESIGN.md`, visual-direction reconciliation, brand/content rules and review of visual consistency.
- **Codex:** owns Codex proposal files, architecture/build planning and implementation files it creates until ownership is reassigned.
- **Shared:** `context.md`, `techstack.md`, `BUILD_PLAN.md`, collaboration instructions and handoffs.
- Before implementation begins, record ownership for application directories in `COLLABORATION.md` to prevent overlapping edits.

## Definition of launch complete

The project is not complete when pages merely look finished. Launch is complete when:

- Real products and stock are loaded.
- Customers can place and pay for an order on mobile.
- Stock cannot be oversold under tested concurrency.
- Staff can pack, ship, cancel and refund without developer help.
- Customer notifications and tracking work.
- Policies match the implemented workflow.
- Accessibility, performance, security and SEO gates pass.
- A real production order and refund reconcile across payment, order and inventory records.

