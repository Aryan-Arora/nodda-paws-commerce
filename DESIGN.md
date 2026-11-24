# Nodda Paws website: DESIGN.md

**Owner:** Claude · **Status:** draft v1, direction **pending Aryan's approval** · **Updated:** 24 Nov 2026
**Source of truth** for brand, content, structure and rules. Anything unconfirmed is `[OPEN]` and must not appear on the live site as a claim.
**Related:** `DESIGN_DIRECTIONS.md` (the three visual options) · `directions-board.html` (visual comparison) · `COLLABORATION.md` (how Claude and GPT share this repo).

## 1. Mandate

Build the online home of **Nodda Paws**: a pet store, grooming studio and boarding / day care in Tilak Nagar, West Delhi. It must:

1. **Sell products online** with a clear browse, cart and checkout journey. (Today products are sold by DM or by commenting an emoji, so this is the biggest change from Instagram.)
2. **Book and enquire** for grooming, boarding and day care by Call, WhatsApp (once confirmed) or an enquiry form.
3. **Feel unmistakably like @noddapaws**: warm, cheeky, community-minded, with Noddy as host.
4. **Bring local customers** through search (Tilak Nagar, West Delhi) and Google listings.
5. **Show proof**: real photos, real reels, honest reviews, the community work.

### Scope decisions (Aryan)

- **Full online shop from day one** (not showcase-first).
- Unknown business facts are **parked** as `[OPEN]` (section 3) and not chased yet.
- Claude and GPT work side by side in this one repo (see `COLLABORATION.md`).

## 2. Verified facts and where they came from

Status: **Verified** (seen on a public source), **Evidence** (seen but needs client confirmation), **Time-sensitive** (changes; never hard-code).

| Item | Value | Source | Status |
|---|---|---|---|
| Brand | Nodda Paws | Instagram, Google | Verified |
| Tagline | "Curated By Paws, Approved By Tails" | Instagram, logo | Verified |
| Instagram | `@noddapaws` (verified account) | Instagram | Verified |
| Address | 19/18A, G Block, Tilak Nagar, New Delhi 110018 | Google Maps listing. Their posts write "19/18 A, Tilak Nagar" | Verified (Maps) |
| Phones | 96507 67651 and 89294 69026 | Instagram bio and posts, Maps shows 96507 67651 | Verified |
| WhatsApp | Their offer post says "Call/WhatsApp: 8929469026 / 9650767651" | Instagram post | **Evidence**: client to confirm before any WhatsApp button is shown |
| Mascot | Noddy, black-and-white staffy-type dog with a pink tongue | Logo, posts | Verified |
| Services | Grooming (book by DM), boarding ("grooming and boarding"), shop; "Day care" is a story highlight | Captions, highlights | Evidence (rules, prices, which names to use are `[OPEN]`) |
| Shop today | Winter Collection '26 dog sweaters ("DM us to order"), blankets, pet essentials ("Comment 🧸 to order") | Instagram captions | Verified |
| Google rating | 4.8 from 49 reviews (8 Nov 2026) | Maps listing | Time-sensitive |
| Instagram size | 145 posts, 1,466 followers (24 Nov 2026) | Instagram | Time-sensitive |
| Posting rhythm | About 2-3 posts a week; recent reels get roughly 7-19 likes | Instagram | Time-sensitive |
| Past offer | Noddy's Birthday Offer, 27-28 Oct: 25% off full grooming + free bandana, prebooking only | Instagram post | **Ended**, never show as bookable |
| Community | Birthday Donation Drive with **Seva Sarathi**, 17-27 Oct: donation box outside the store; the post says every donor gets a ₹99 Nodda Paws voucher | Instagram reels | Verified, dated (past) |
| Festive | Diwali greeting post | Instagram | Verified |

Never hard-code follower, post or review counts; fetch them or leave them out.

## 3. `[OPEN]` facts (parked, not chased yet)

Do not guess any of these. Keep the feature hidden or show an honest empty state (section 14).

- Opening hours and holiday exceptions
- Which number is the main one, and confirmed WhatsApp number and workflow
- Product catalogue: items, variants, sizes, prices, compare-at prices, stock, weights, images
- Size guide for clothing
- Shipping: zones, rates, free-shipping threshold, delivery times, who packs and ships
- Returns, refunds, cancellations, privacy and terms; GST / tax treatment; invoices
- Payment provider and accepted methods
- Grooming: services, packages, prices, durations, eligibility, booking rules
- Boarding and day care: which of these exist, naming, timings, capacity, vaccination and temperament rules, prices
- Current offers and terms
- Reviews that may be republished (with permission), staff names and roles, hiring details
- Original logo file, brand colour confirmation, photo and video rights, permissions for customers' pets
- Domain, email, Google Business Profile access, Shopify account ownership

## 4. Audience (assumed)

`[ASSUMED]` until customer data says otherwise: pet parents, about 22-40, in Tilak Nagar, Janakpuri, Vikaspuri, Rajouri Garden, Uttam Nagar and nearby; mostly dog owners (cats appear in their story highlights and in a customer review, so do not exclude them); arriving from Instagram or Google Maps on a phone; comfortable with English plus a little Hinglish.

**The first five seconds must answer two questions**
1. "Can I trust this place with my pet?" Real photos, visible care, plain facts.
2. "Can I buy, book or reach them right now?" Shop, Grooming, Boarding, Call visible at once.

## 5. Brand character and voice

**Character:** warm, playful, cheeky, caring, community-minded. Premium in craft, never cold luxury; childish only in a wink, never in structure.

**Voice rules**
1. Information is plain English. Personality goes in headlines, captions and microcopy.
2. Puns and light Hinglish are seasoning, not the meal. Never use them in prices, policies, safety or checkout.
3. Headlines are short and easy to say aloud.
4. No medical, behavioural or safety promises. No invented awards, reviews, qualifications or outcomes.
5. Past offers are dated and visibly ended; live offers show terms and end date.
6. Emoji only in social-style captions, never in navigation or checkout.

**Their real voice (for tone, not for copying wholesale)**
- "Sweater weather, but make it PAW-shion!"
- "Ready for their next glow-up? DM us to book your pup's grooming session!"
- "Cozy Days Starts With Right Essentials."
- "Noddy's turning a year older, and this year the gifts are for the dogs who need them most."
- Words they use: pawrent, fur baby, glow-up, furry bestie, pawsome.

**Sample site copy (to refine):** "Your pet's favourite stop in West Delhi." · "Fresh trim. Full strut." · "No live offer right now. Follow the noticeboard for the next one." · "Aap bas directions tap karo."

## 6. Logo

- The logo is a round badge: **sky-blue ring** with "NODDA PAWS" arched across the top and "CURATED BY PAWS, APPROVED BY TAILS" along the bottom, **Noddy over a yellow disc**, a paw on each side.
- Use the **original client file** when received. Today only a 150px Instagram copy exists, which is fine at about 44px in the header and not larger.
- Never redraw, trace, recolour, reconstruct, crop inside, animate its parts or put effects inside it.
- Clear space at least 20% of its diameter; minimum 40px in the header, 72px where the circular text must stay readable.
- Test on yellow, cream, sky blue and ink. A white keyline may be needed on sky blue.
- Noddy may appear separately in real photography. A photo is not a logo substitute.

## 7. Colour

**Provisional.** Based on the logo and the offer posters (compressed screenshots), so approximate. Final values wait for the original brand files and Aryan's direction choice (`DESIGN_DIRECTIONS.md`).

| Token | Hex | Role |
|---|---|---|
| `sun` | `#FFC92B` | Primary action, hero, price tags. The logo disc looks paler (about `#F1DC49`) |
| `sky` | `#5395D0` | The logo's blue: bands, links, badges. **Replaces the darker navy `#0B4A8F` assumed earlier, to be confirmed** |
| `ink` | `#0A0F1C` | Text, borders, footer |
| `cream` | `#FFF6DC` | Warm reading surface |
| `pink` | `#FF8DBF` | Stickers and small accents only |

Rules
- Yellow leads in conversion moments; sky and ink give structure; cream is the calm surface. Pink and any extra accent stay under about 5%.
- Ink on yellow and cream, cream on ink; **test every pair to WCAG 2.1 AA**. Sky with cream text only at large sizes, and only if it passes.
- Pink never sits behind long text. No colour carries meaning alone.
- Never put body text directly on a busy photo; use a solid local panel.
- Do not give each service its own colour.

## 8. Typography

Aryan likes these, so they are the default unless a direction says otherwise.

| Role | Font | Use |
|---|---|---|
| Display | **Paytone One** | Short headlines, price tags. Never for product facts, policies or checkout |
| Body and UI | **DM Sans** | Everything operational, minimum 16px |
| Accent | **Fraunces Italic** | Photo captions and short asides only, never facts |

Apostrophes: use the typographic ’ in Paytone One headlines (the straight one leaves a gap). Sentence case for information; keep body measure 45-68 characters on desktop.

## 9. Photography and video

- Real photos only: close noses, paws in hands, eye contact, grooming detail, shop shelves, products on real pets, Noddy. Shot near animal eye level, warm and honest. No stock pets, no AI pets, no fake products, no smoothing or fake blur.
- Products need clean, consistent product photos plus at least one on a real pet.
- AVIF first with WebP fallback, responsive sizes, explicit dimensions, descriptive alt text.
- **Reels:** embed the public @noddapaws reels **only after a tap** (poster first, "Watch on Instagram" link beside it). Do not copy or re-host their videos unless the client supplies the files. Captions and meaning also live as text on the page.
- Poster graphics support the gallery, but essential words always exist as HTML.

## 10. Information architecture (shop-ready)

| Route | Purpose |
|---|---|
| `/` | Brand, shop entry, services, proof, visit |
| `/shop` | All products, filters, sort |
| `/collections/[slug]` | Collections, e.g. Winter Collection '26 |
| `/products/[slug]` | Product detail |
| `/search` | Product and content search (noindex for result pages) |
| `/cart` | Cart page plus cart drawer |
| Checkout | Hosted, secure |
| `/grooming` | Grooming service page |
| `/boarding` and `/day-care` | `[OPEN]` which exist and what to call them; one page each if both |
| `/offers` | Live offer or honest empty state, plus dated archive |
| `/gift-box` | Only if the gift box is active `[OPEN]` |
| `/about` | Noddy, the shop, community work |
| `/contact` | Address, phones, hours `[OPEN]`, map, directions |
| `/shipping`, `/returns`, `/privacy`, `/terms` | Policies `[OPEN]` |
| `/guides/[slug]`, `/blog` | Later phase: original, factual care and shop guides |

### Navigation (mobile first)
Shop · Grooming · Boarding / Day care · Offers · About · Contact, with **Search**, **Call** and **Cart (count)** always visible. On a phone, Shop, Grooming, Boarding and Cart are reachable in one tap. A bottom action bar offers Call, WhatsApp (only when confirmed) and Directions.

### Homepage order
1. **Header:** logo, Shop, services, search, cart.
2. **Hero:** Noddy-led; what Nodda Paws is; primary actions **Shop** and **Book grooming**.
3. **Practical strip:** address, phones, hours `[OPEN]`, directions.
4. **Shop:** current collection and featured products with real prices and stock states.
5. **Services:** Grooming, Boarding, Day care as three clear routes.
6. **Grooming feature:** real photos, verified details, booking or enquiry.
7. **From the feed:** a few tap-to-play reels with real captions.
8. **Offer notice:** live dated offer, or "No live offer right now."
9. **Noddy and community:** the mascot, the Seva Sarathi drive with dates and context.
10. **Questions:** verified FAQs only.
11. **Visit:** address, map on tap, phone, Instagram.
12. **Footer and action bar:** repeated name, address and phone, policies, contact.

Every section must add new information; do not repeat the same pitch in different cards.

## 11. Shop rules

- **Product page:** name, price, genuine compare-at price only if real, variant chips (size, colour), stock state, delivery note `[OPEN]`, description, care/material, size guide `[OPEN]`, real photos, related products from real collections. Persistent mobile "Add to cart" only after required options are valid.
- **Never:** invented scarcity ("only 2 left"), fake discounts, fake reviews, stock photos of pets.
- **States:** loading, empty, error, in stock, low stock (only if true), sold out, discontinued.
- **Cart:** accessible drawer and a full page; change quantity, remove, see totals, discount codes only when approved.
- **Checkout:** hosted by the platform (billing, shipping, payment). Tax, shipping zones, order emails and refunds are `[OPEN]` and must be tested end-to-end before launch.
- **Fulfilment:** Nodda Paws packs and ships `[OPEN: confirm]`; the site only promises delivery times the team has confirmed.
- **Instagram bridge:** until WhatsApp is confirmed, "Enquire" falls back to Call. Posts can link straight to product pages.
- **Technology:** headless storefront (Astro with React islands for cart and search) over Shopify, **or** a custom Shopify theme. `[OPEN]` until the catalogue size, payment provider and fulfilment flow are known; decide before building. Do not keep two half-built storefronts.

## 12. Services rules

- Grooming, boarding and day care each get a page with: what is included, who it suits, how to book, real photos, and an honest "call for prices" until prices are confirmed.
- No packages, durations, eligibility, vaccination or safety rules until confirmed. No invented staff or qualifications.
- Booking order: Call and confirmed WhatsApp first. A simple enquiry form only if someone commits to answering it.

## 13. Offers, community and reviews

- **Offer notice** needs: title, start and end dates, status in words (Live, Upcoming, Ended), what it covers, full terms, how to claim. Ended offers have no booking button.
- **Community:** tell the Seva Sarathi drive factually (dates, what was collected, what donors received). Do not imply an ongoing programme or a running total unless the client confirms.
- **Reviews:** show the Google star rating only as a link to the Maps listing unless fetched live. Show customer text only with permission and source `[OPEN]`; until then, omit the module.

## 14. Honest content states

| Module | Confirmed | Missing or expired |
|---|---|---|
| Hours | Today's hours and full week | Omit open/closed language entirely |
| WhatsApp | Link to the confirmed number | Hide the button |
| Prices | Show them | "Call for prices" (services) or hide the product until priced |
| Offer | Dated status and terms | "No live offer right now." |
| Reviews | Approved quote with source | Omit |
| Boarding / day care | Rules, timings, prices | Show only what is verified, plus Call |
| Gift box | Contents, price | Omit the page and teaser |

Placeholders are allowed in staging and never in production HTML.

## 15. SEO and GEO (local and shop)

- Server-render or statically generate product, collection, service and guide pages. One canonical URL per page; unique title, description and H1.
- `sitemap.xml`, `robots.txt`; keep cart, checkout, search results and filter combinations out of the index.
- Structured data: LocalBusiness (PetStore) with the verified address and phones, Product and Offer (price in INR, availability), BreadcrumbList, Article for guides. FAQ and Review markup only for visible, genuine content.
- Keep the name, address and phone identical on the site, Google Business Profile and Instagram (including "19/18A, G Block").
- GEO: one consistent entity description and plain factual answers first; never promise inclusion in AI answers.
- Initial keyword themes (validate before use): pet shop Tilak Nagar, dog grooming West Delhi, pet boarding West Delhi, dog winter clothes Delhi.

## 16. Accessibility, performance, analytics

- **Accessibility:** WCAG 2.1 AA; one H1 per page; logical headings; keyboard-operable menu, cart, filters and dialogs; visible 3px focus; tap targets 44px or more; body 16px or more; 200% zoom; reduced motion respected; no information by colour alone.
- **Performance (mobile, p75):** LCP under 2.5s, INP under 200ms, CLS under 0.1; first-load JavaScript under 180KB gzipped (ceiling 250KB); lazy chunks (cart, 3D if any) never block content or the LCP. Essential content works before JavaScript.
- **Motion:** one signature hero moment at most; everything else quiet; reduced-motion, Save-Data and no-WebGL fallbacks if any 3D is used. No scroll hijacking, no looping animation, no content hidden until JavaScript loads.
- **Analytics (privacy-first):** product view, search, add and remove from cart, begin checkout, purchase, call, WhatsApp, directions. Never send phone numbers, messages or payment details.

## 17. Decisions to lock

| # | Decision | Recommendation | Status |
|---|---|---|---|
| 1 | Visual direction | A (Birthday Poster) for brand and home, with B (Cosy Catalogue) discipline on shop pages, plus one community section from C | **Pending approval** |
| 2 | Main blue | Logo sky blue `#5395D0`, not the darker navy | Pending (check brand files) |
| 3 | Fonts | Paytone One, DM Sans, Fraunces Italic | Recommended (Aryan likes them) |
| 4 | Service naming | "Boarding" and/or "Day care" | `[OPEN]` |
| 5 | Shop technology | Shopify headless vs theme | `[OPEN]` after catalogue audit |
| 6 | Booking | Call and confirmed WhatsApp first; form only with an owner | Recommended |
| 7 | Reels | Embed on tap; no re-hosting | Recommended |
| 8 | Offers | Compact home notice plus `/offers` page | Recommended |
| 9 | Domain and email | Short exact-brand `.in` or `.com`, client-owned | `[OPEN]` |
| 10 | 3D | Optional, only after content and shop work; fallback required | Deferred |

## 18. Guardrails

- Do not redraw or reconstruct the logo.
- Do not invent reviews, prices, hours, stock, delivery times, awards, qualifications, staff or safety claims.
- Do not show an ended offer as bookable.
- Do not publish customers' or pets' photos without permission.
- Do not hide essential content in video, canvas or client-only rendering.
- Do not use stock or AI pet images to represent Nodda Paws.
- Do not show WhatsApp until the correct number and workflow are confirmed.
- Do not commit secrets, tokens or merchant credentials.

## 19. File map

- `DESIGN.md`: this file (owner: Claude)
- `DESIGN_DIRECTIONS.md`: three visual directions and a recommendation (Claude)
- `directions-board.html`: visual comparison of the three directions (Claude)
- `COLLABORATION.md`, `AGENTS.md`, `CLAUDE.md`, `HANDOFFS.md`: working rules and handoffs (shared)
- `proposals/GPT_*.md`: GPT's proposals (GPT)
