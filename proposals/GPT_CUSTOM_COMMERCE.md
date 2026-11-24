# GPT proposal: custom commerce without Shopify

**Author:** Codex / GPT · **Date:** 24 November 2026  
**Status:** proposal for Aryan and Claude; this does not replace `DESIGN.md`.

## Decision understood

Nodda Paws will not use Shopify. The team owns its stock, packs orders and ships its products. The website therefore needs a custom storefront **and** a private operations area for products, inventory, orders and fulfilment.

Owning stock and fulfilment does not yet answer which payment gateway or courier aggregator will be used. Those integrations remain `[OPEN]` and should sit behind replaceable adapters.

## Recommended product shape

Build two connected interfaces:

1. **Customer storefront:** product discovery, variants, cart, checkout, order confirmation and order tracking.
2. **Staff dashboard:** products, variants, stock, orders, packing, shipment details, cancellations and refunds.

The public site must never expose a product until it has a price, at least one valid sellable variant, stock state and approved images. The staff dashboard may keep incomplete products as drafts.

## Recommended technology

### Application

- **Next.js with TypeScript**, using server-rendered storefront pages and server actions / route handlers for transactional work.
- Use React only where interaction is required: filters, variant selection, cart, checkout and the admin dashboard.
- Keep product, collection and service content server-rendered for SEO and resilience.

Next.js is recommended over a mostly static Astro build here because the project now includes authenticated staff tools, inventory mutations, payment callbacks, order state transitions and tracking. Astro remains possible, but would require assembling the same server application around it.

### Data and files

- **PostgreSQL** for products, variants, inventory, carts, orders, payments and fulfilment records.
- **Supabase** is a suitable managed option for PostgreSQL, staff authentication and product-image storage, but account ownership and hosting approval remain `[OPEN]`.
- Store money as integer paise, never floating-point rupees.
- Record stock movements in an append-only inventory ledger; do not rely only on one editable stock number.
- Keep customer addresses and order data private, with role-based access for staff.

### Payments

- Use a provider adapter, with **Razorpay as the leading India-focused candidate**, pending client approval and merchant onboarding.
- The browser never marks an order paid. Payment status changes only after server-side signature verification and webhook processing.
- Webhooks must be idempotent: repeated events must not create duplicate payments or orders.
- Cash on Delivery remains `[OPEN]`; if enabled, it needs explicit serviceability, fee and cancellation rules.

### Shipping

Support two fulfilment modes from the beginning:

- **Manual fulfilment:** staff enter courier name and tracking number after packing.
- **Courier integration:** later connect a confirmed provider or aggregator such as Shiprocket through an adapter.

This lets Nodda Paws launch without waiting for a courier API while avoiding a rebuild later. Shipping rates, serviceable postcodes, package weights, free-shipping threshold and delivery promises remain `[OPEN]`.

### Hosting

- Deploy the Next.js application to a managed platform such as Vercel, pending account ownership and cost approval.
- Database, storage, payment and courier accounts must be client-owned.
- Separate development, staging and production credentials. Never put service keys in browser code.

## Core data model

### Catalogue

- `products`: title, slug, description, status (`draft`, `active`, `archived`), category, material/care, SEO fields
- `product_variants`: SKU, size, colour, price, compare-at price, weight, status
- `product_images`: product/variant relation, alt text, sort order
- `collections` and `collection_products`
- `inventory_locations`: start with one Tilak Nagar stock location
- `inventory_movements`: receipt, sale reservation, sale completion, cancellation, return, correction

### Shopping and orders

- `carts` and `cart_items`
- `customers` or guest contact details
- `addresses`
- `orders` and immutable `order_items` snapshots
- `payments` and webhook event log
- `fulfilments`, shipment provider, tracking code and status
- `discounts` only when the business approves real rules

Order items must snapshot the purchased name, SKU, variant and price. Editing a product later must not rewrite old orders.

## Inventory behaviour

1. Staff receive or correct stock through the dashboard.
2. Checkout creates a short stock reservation `[OPEN: reservation duration]`.
3. Successful verified payment converts the reservation into a sale.
4. Failed or expired payment releases the reservation.
5. Cancellation or approved return creates a new inventory movement; history is never rewritten.
6. An out-of-stock variant cannot be added or purchased, even if an old browser tab still shows it.

All final stock checks happen on the server during checkout.

## Order states

Keep payment and fulfilment separate.

- Payment: `pending`, `paid`, `failed`, `refunded`, `partially_refunded`
- Order: `pending_payment`, `confirmed`, `cancelled`, `completed`
- Fulfilment: `unfulfilled`, `packing`, `shipped`, `delivered`, `returned`

The dashboard should show a simple operational queue: **New → Packing → Shipped → Delivered**, while retaining the detailed states underneath.

## Customer checkout

Recommended launch flow:

1. Cart
2. Contact and delivery address
3. Serviceability and shipping charge
4. Order summary
5. Payment provider
6. Server-verified confirmation

Guest checkout should be the default. Do not force an account before purchase. An optional order-status link can use a secure, expiring token; customer accounts can come later.

## Staff dashboard

Launch requirements:

- Secure staff sign-in and role checks
- Create and edit draft products
- Manage variants, SKU, price, weight and stock
- Upload and reorder approved product images
- Publish/unpublish products
- Order list with search and status filters
- Packing view with items, variants, quantity and delivery address
- Mark packed/shipped and add tracking information
- Record cancellations and refunds without deleting order history
- Low-stock view based on a configurable threshold, never fake scarcity on the storefront
- Basic CSV export for orders and inventory

The dashboard should be visually quiet: DM Sans, cream/white surfaces, thin rules, clear tables and restrained sky-blue accents. It should not inherit the tilted poster styling.

## Visual direction with custom commerce

Use the recommended mix from `DESIGN_DIRECTIONS.md`:

### Brand and discovery: Direction A, Birthday Poster

- Yellow, logo-true sky blue, ink outlines and hard shadows on the homepage.
- Noddy-led hero with **Shop** and **Book grooming** as the two primary actions.
- Poster-style collection campaigns, real reels and the dated community story.
- Strong collection banners such as “Winter Collection ’26”.

### Buying surfaces: Direction B, Cosy Catalogue discipline

- Product listing, search, cart and checkout use calm cream surfaces and consistent grids.
- Product imagery, title, variant and price carry the hierarchy.
- No tilted cards in cart, checkout, address, payment or policy UI.
- Hard-shadow styling remains on one primary action per view, not every control.

### Community: one controlled element from Direction C

- A single taped-photo / scrapbook section for Noddy and the Seva Sarathi drive.
- Do not extend scrapbook styling into the catalogue or dashboard.

This creates a useful rhythm: **poster attracts → catalogue explains → checkout reassures**.

## Required storefront states

- Product draft: staff only
- Active and in stock: purchasable
- Active but sold out: visible, not purchasable
- Archived/discontinued: removed from listings; existing order links remain meaningful
- Variant unavailable: disabled with text, not colour alone
- Cart item changed or sold out: explain and require review before checkout
- Payment pending: never imply success
- Payment failed: preserve cart and allow retry
- Shipping unavailable: stop before payment and show an honest message

## Security and reliability requirements

- Validate all prices, variants, stock and shipping server-side.
- Rate-limit checkout, payment and authentication endpoints.
- Verify payment and shipping webhooks cryptographically.
- Use idempotency keys for order creation and provider callbacks.
- Keep an audit trail for price, stock and order-status changes.
- Back up the database and test restoration before launch.
- Never log payment details, full addresses or phone numbers to analytics.
- Add monitoring for failed payments, webhook errors and stock inconsistencies.

## What must be confirmed before the commerce build

1. Approximate number of products and variants
2. Who updates products and stock, and from which devices
3. Whether stock is held only at the Tilak Nagar shop
4. Product SKUs and barcode needs
5. Product prices, GST and invoice requirements
6. Shipping zones, parcel weights, rates and delivery promises
7. Courier workflow: manual, direct courier or aggregator
8. Payment provider, merchant account and whether COD exists
9. Cancellation, return, refund and damaged-item policies
10. Whether guest order tracking is enough for launch
11. Staff roles and who may refund or adjust stock

## Recommended build order

### Phase 1: foundation and catalogue

- Lock visual direction and technical accounts
- Create the Next.js project, design tokens and database schema
- Build staff authentication and product drafts
- Build collections, product pages, variants and inventory ledger

### Phase 2: cart and checkout

- Cart with server revalidation
- Address and shipping calculation
- Payment adapter, webhook verification and confirmation
- Order records and transactional notifications `[OPEN: provider]`

### Phase 3: fulfilment

- Order queue and packing view
- Manual tracking workflow
- Cancellation/refund recording
- Courier integration only after its workflow is confirmed

### Phase 4: brand and services

- Birthday Poster homepage and collection campaigns
- Grooming, boarding/day-care, offers, about and contact
- Reels on tap, community section, LocalBusiness and Product structured data

### Phase 5: launch verification

- Real catalogue import and stock reconciliation
- End-to-end paid test order and refund
- Failed-payment and duplicate-webhook tests
- Shipping and tracking tests
- Accessibility, mobile, performance and SEO checks
- Staff runbook and training

## Recommendation to lock

Proceed with **custom Next.js commerce + PostgreSQL**, using a managed database/auth/storage service and replaceable payment/shipping adapters. Use **Birthday Poster for discovery**, **Cosy Catalogue for buying**, and a quiet utility system for staff operations.

Do not begin checkout implementation until catalogue shape, taxes, payment provider and shipping rules are confirmed. The visual system and catalogue foundation can begin earlier with draft data in staging.
