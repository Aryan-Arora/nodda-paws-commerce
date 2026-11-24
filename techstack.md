# Nodda Paws commerce: technical stack

**Living document** · **Last updated:** 24 November 2026 by Codex  
Read this before making architecture or implementation decisions. Update it in the same commit whenever the stack, provider choice, deployment model or technical constraint changes.

## Decision status

| Area | Current decision | Status |
|---|---|---|
| Commerce platform | Custom commerce; **no Shopify** | **Locked by Aryan** |
| Stock ownership | Nodda Paws owns and manages its stock | **Locked by Aryan** |
| Fulfilment | Nodda Paws packs and ships orders | **Locked by Aryan** |
| Visual system | Birthday Poster for brand/discovery, Cosy Catalogue discipline for shopping, one controlled community section | Recommended; visual direction still needs Aryan's formal approval |
| Web framework | Next.js with TypeScript | Proposed by Codex; awaiting reconciliation into `DESIGN.md` |
| Database | PostgreSQL | Proposed |
| Managed backend | Supabase for PostgreSQL, staff authentication and product-image storage | Candidate; account and cost approval `[OPEN]` |
| Payments | Provider adapter; Razorpay is the leading candidate | `[OPEN]` pending client merchant setup |
| Shipping | Manual fulfilment at launch with a replaceable courier adapter | Proposed |
| Courier provider | Shiprocket or another confirmed provider | `[OPEN]` |
| Hosting | Managed Next.js hosting; Vercel is the leading candidate | `[OPEN]` pending account and cost approval |
| Transactional email/SMS | Not selected | `[OPEN]` |
| Analytics | Privacy-first commerce and contact events | Provider `[OPEN]` |

Do not present a **Proposed**, **Candidate** or `[OPEN]` item as a locked decision.

## Recommended application architecture

### Customer storefront

- Server-render product, collection, service and content pages.
- Interactive client code only where needed: search, filters, variant selection, cart and checkout.
- Guest checkout by default; customer accounts may be added later.
- Hosted or provider-rendered payment UI where possible; payment success is always verified server-side.
- Order-status access through a secure mechanism `[OPEN: signed link or account]`.

### Staff operations

- Private staff authentication with role checks.
- Product drafts, variants, SKU, price, weight, images and publish state.
- Inventory receipts, reservations, sales, cancellations, returns and corrections.
- Order queue: New → Packing → Shipped → Delivered.
- Manual courier and tracking entry at launch.
- Cancellation and refund records; never delete financial/order history.

### Data model

Expected core entities:

- `products`
- `product_variants`
- `product_images`
- `collections`
- `collection_products`
- `inventory_locations`
- `inventory_movements`
- `carts`
- `cart_items`
- `customers` or guest contact snapshots
- `addresses`
- `orders`
- `order_items`
- `payments`
- `payment_webhook_events`
- `fulfilments`
- `discounts`, only after real rules are approved

Store money as integer paise. Order items snapshot purchased names, SKUs, variants and prices so later catalogue edits never alter old orders.

## Inventory rules

- Use an append-only inventory movement ledger, not only one editable stock value.
- Revalidate product, variant, price and stock on the server during checkout.
- Reserve stock for a short period during payment `[OPEN: duration]`.
- Verified payment converts a reservation into a sale.
- Failed or expired payment releases the reservation.
- Cancellation or return creates a new movement; history is never rewritten.
- Out-of-stock variants cannot be purchased from stale browser sessions.

## Payment rules

- Keep payment integration behind an internal provider interface.
- Verify signatures and payment state on the server.
- Treat webhooks as idempotent; duplicates must not duplicate orders or payments.
- The browser cannot mark an order paid.
- Cash on Delivery is hidden until serviceability, fees and cancellation rules are confirmed.
- Never store raw card details.

## Shipping rules

- Launch can support manual fulfilment: staff enter courier and tracking details after packing.
- Keep courier integration behind an adapter to avoid coupling the order model to one provider.
- Do not promise shipping rates or delivery times until zones, weights and provider rules are confirmed.
- Product weights and package dimensions are required before automated rates or labels.

## Frontend design implementation

### Brand and discovery

- Active direction: premium-playful neighbourhood concept store.
- Use editorial Fraunces typography, warm ivory space and a deep moss foundation.
- Add personality through a restrained ochre/coral accent system, Noddy moments, organic arches, soft pills and occasional hand-drawn details.
- Avoid both extremes already tested: chunky clay/poster styling and austere monochrome luxury styling.
- Use this balance for the homepage, campaign banners, collection launches, offers and service entry points.

### Commerce

- Keep Cosy Catalogue discipline: calm cream surfaces, consistent grids and strong product/price hierarchy, with softly rounded media and small warm accents.
- Use for listing, search, product details, cart and checkout.
- No decorative tilt or stickers in address, payment, policy or error interfaces.

### Staff dashboard

- Quiet utility design: DM Sans, clear tables, restrained colour and predictable controls.
- Do not carry poster styling into operational tools.

## Quality constraints

- WCAG 2.1 AA.
- Mobile-first; tap targets at least 44px.
- Essential storefront content works before client JavaScript.
- Target LCP under 2.5s, INP under 200ms and CLS under 0.1 at mobile p75.
- One signature hero motion at most; reduced-motion and Save-Data fallbacks.
- Validate all transactional input server-side.
- Rate-limit authentication, checkout and payment endpoints.
- Keep secrets server-only and out of Git.
- Maintain audit trails for stock, price, order and refund changes.
- Back up the database and test restoration before launch.

## Technical decisions still required

1. Confirm Next.js as the web framework.
2. Confirm Supabase or choose another PostgreSQL/auth/storage provider.
3. Confirm payment provider and merchant ownership.
4. Decide whether Cash on Delivery exists.
5. Confirm manual courier workflow and future integration provider.
6. Confirm hosting and domain ownership.
7. Choose transactional email/SMS provider.
8. Confirm GST, invoicing and refund requirements.
9. Confirm order tracking approach.
10. Confirm staff roles and permissions.

## References

- `DESIGN.md`: source of truth for brand, content and product rules
- `DESIGN_DIRECTIONS.md`: visual directions
- `proposals/GPT_CUSTOM_COMMERCE.md`: full custom-commerce proposal
- `context.md`: current project state and next actions

