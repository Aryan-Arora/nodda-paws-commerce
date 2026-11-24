# Nodda Paws commerce: frontend design plan

**Owner:** shared design plan · **Created:** 24 November 2026 by Codex  
**Status:** active design work  
Read with `DESIGN.md`, `DESIGN_DIRECTIONS.md`, `BUILD_PLAN.md`, `techstack.md` and `context.md`.

## Working direction

The current design pass uses the recommended mix:

- **Birthday Poster** for the homepage, campaign moments, services and local brand storytelling.
- **Cosy Catalogue discipline** for shop, collection, product, cart and checkout pages.
- **One restrained community scrapbook section** for Noddy and the dated Seva Sarathi drive.
- **Quiet utility UI** for the future staff dashboard.

The design should feel unmistakably related to `@noddapaws` without copying the Instagram grid. It must not return to the soft clayomorphic style from the previous project.

## Experience principle

**Poster attracts → catalogue explains → checkout reassures.**

The visual energy decreases as the customer gets closer to payment:

1. Homepage: expressive, high-recognition brand moments.
2. Collection and product: controlled, image-led and easy to compare.
3. Cart and checkout: calm, factual and predictable.
4. Staff dashboard: dense only where useful, with no decorative styling.

## Design objectives

1. Make Shop, Grooming and local contact actions obvious in the first mobile viewport.
2. Give products enough space to sell without losing Nodda Paws personality.
3. Design all missing, loading, sold-out, failed-payment and shipping-unavailable states early.
4. Use only verified content; label prototype data as prototype data.
5. Design around real photography without using stock or AI pets as substitutes.
6. Meet WCAG 2.1 AA, 44px tap targets, visible focus and reduced motion from the component level.
7. Keep the system practical for future staff and developers to maintain.

## Visual foundation

### Colour roles

| Token | Working value | Role |
|---|---:|---|
| Sun | `#FFC92B` | Hero, campaign moments, primary action |
| Sky | `#5395D0` | Logo-true brand blue, section bands, active states |
| Ink | `#0A0F1C` | Text, outlines, footer, hard shadows |
| Cream | `#FFF6DC` | Reading and commerce surfaces |
| Paper | `#FFFCF2` | Product and checkout backgrounds |
| Pink | `#FF8DBF` | Stickers and tiny accents only |

Exact brand colours remain provisional until the original logo arrives.

### Type

- **Paytone One:** short campaign and homepage headlines.
- **DM Sans:** all body text, product facts, controls, prices and checkout.
- **Fraunces Italic:** short photo captions and Noddy asides only.

### Shape and depth

- Brand pages: 2–3px ink outlines, 4–8px hard offset shadows, 8–12px corners.
- Commerce pages: thinner rules, quieter cards and almost-square corners.
- Checkout: no tilted surfaces, stickers or decorative shadows around factual fields.
- Maximum two stickers in one viewport.

### Motion

- The hero is the single signature motion moment: awning, headline, doorway and tags settle once on load.
- Long marketing sections reveal once as they enter the viewport; they do not replay when scrolling back.
- Reveals use opacity and a short vertical transform with 30–80ms group staggering.
- Buttons and cards use fast transform-only hover/press feedback, gated to devices with a fine pointer.
- Search dialog uses a 200ms opacity/scale entrance tied to its state change.
- No looping marquee, floating decoration, scroll hijacking or animated factual content.
- Reduced motion removes positional movement and keeps only short opacity fades.

### Photography containers

- Product photography: consistent clean background plus at least one approved on-pet image.
- Service photography: real grooming and shop detail near animal eye level.
- Empty prototype containers must say what approved asset belongs there.
- Placeholder text and patterns never ship in production.

## Responsive layout

- Mobile starts at 320px and drives all component decisions.
- Main content width: approximately 1200px.
- Mobile gutters: 18–20px.
- Desktop gutters: 32px.
- Product grid: 2 columns on mobile where labels remain readable; 3–4 on larger screens.
- Body text measure: 45–68 characters.
- Sticky mobile contact/cart behavior must not obscure checkout controls.

## Page design sequence

### Design Sprint 1 — Foundation, homepage and shop language

**Now in progress.**

- Design tokens and shared page shell
- Responsive header and mobile navigation
- Birthday Poster homepage
- Practical address/contact strip
- Calm featured-product cards
- Service entry points
- Real-reel poster treatment
- Dated community section
- Visit/contact ending
- Shop listing page showing catalogue hierarchy and filters

**Output:** `prototype/index.html`, `prototype/shop.html`, shared CSS and lightweight interaction script.

### Design Sprint 2 — Product selection

- Collection page
- Product detail gallery
- Variant chips and size selection
- Stock, sold-out and unavailable states
- Size-guide placement
- Delivery-information state
- Mobile add-to-cart area

### Design Sprint 3 — Cart and checkout

- Cart drawer and full page
- Changed-price and unavailable-item messages
- Contact and delivery address
- Shipping/serviceability
- Payment selection
- Pending, failed and successful payment states
- Order confirmation and secure tracking entry

### Design Sprint 4 — Services and local trust

- Grooming
- Boarding and/or Day care after naming is confirmed
- Offers archive and honest empty state
- About Noddy and community story
- Contact, map-on-tap and local information
- FAQ and approved review treatment

### Design Sprint 5 — Staff operations

- Staff sign-in
- Product list and editor
- Variant and stock management
- Inventory movement history
- Order queue
- Packing view
- Shipment/tracking entry
- Cancellation and refund recording

### Design Sprint 6 — System review

- Responsive review at phone, tablet and desktop sizes
- Keyboard, focus, contrast and 200% zoom review
- Reduced-motion review
- Complete state matrix
- Content and asset audit
- Final prototype sign-off before production component implementation

## Homepage narrative

Each section must add new information:

1. **Header:** logo placeholder, Shop, services, Search, Call and Cart.
2. **Hero:** what the business is, where it is, Shop and Grooming actions, real Noddy photo slot.
3. **Practical strip:** verified address, phones and Directions; no hours until confirmed.
4. **Shop preview:** real collection/product slots; prototype labels until catalogue arrives.
5. **Services:** clear routes for verified service names, with honest missing-detail copy.
6. **Grooming proof:** approved real image slot and Call action.
7. **From the feed:** tap-to-play reel posters and text context.
8. **Offer notice:** no live offer state until a dated offer is confirmed.
9. **Community:** dated Seva Sarathi story, not an implied ongoing programme.
10. **Questions:** verified factual answers only.
11. **Visit:** full address, phone and Maps action.

## Commerce component checklist

- Product card
- Price and genuine compare-at price
- Collection banner
- Product gallery
- Variant group
- Size/colour chip
- Stock status
- Quantity control
- Add-to-cart action
- Cart row
- Order summary
- Address field and validation
- Shipping option
- Payment state
- Inline error and page-level error
- Empty state and skeleton
- Confirmation and tracking state

## Prototype content rules

- Product entries are labelled “Prototype product” or “Price pending”.
- No invented review text, hours, service prices or stock claims.
- No fake sale prices or scarcity.
- No client-facing use of placeholder assets.
- Real public reels may be represented by tap-to-load poster slots, but not downloaded or re-hosted.
- The Google rating may appear only as a linked, dated snapshot or fetched live.

## Approval checkpoints

1. Homepage first viewport and overall visual weight
2. Shop/product clarity versus brand personality
3. Mobile navigation and action priority
4. Cart/checkout calmness and trust
5. Staff dashboard usability
6. Final responsive/state/accessibility review

## Current asset needs

- Original logo
- Noddy cut-out and portrait
- Shop exterior and interior
- Grooming process and finished-pet photos
- Product packshots and on-pet images
- Collection names and product catalogue
- Approved reel captions/posters or original files
- Any customer/pet media permissions

## Definition of design complete

- Every launch route has approved mobile and desktop treatment.
- Every commerce and service state has an explicit design.
- Real content requirements are documented per module.
- The visual system passes accessibility checks.
- The prototype demonstrates the full customer and staff journey.
- No important decision depends on an invented business fact.

