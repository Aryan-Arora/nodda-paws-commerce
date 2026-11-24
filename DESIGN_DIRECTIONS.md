# Nodda Paws: three design directions

**Owner:** Claude · **Status:** for Aryan's review · **Written:** 24 Nov 2026
**Read with:** `DESIGN.md` (facts, rules) and `directions-board.html` (visual comparison).

## What every direction must satisfy

These come from the Instagram review and from Aryan's feedback, so they are not up for debate between directions.

- **It is a shop first.** Today the brand sells by DM and by commenting an emoji ("Comment 🧸 to order"). The site replaces that friction: browse, pick a size, order. Grooming, boarding and day care sit beside the shop, not under it.
- **It looks like Nodda Paws, not a template.** The feed is playful, pun-led and emoji-friendly ("pawrent", "glow-up", "PAW-shion"), with bold poster graphics for offers and close, candid photos of real pets.
- **It uses the real logo untouched** (round badge, sky-blue ring, Noddy on a yellow disc) and Noddy as the host.
- **No soft "clay" look.** No pillowy gradients, inflated shapes or blurry glow. Flat colour, crisp edges, deliberate shadows and borders.
- **Fonts Aryan liked remain available:** Paytone One (display), DM Sans (body), Fraunces Italic (captions). A direction may swap the display face if it says why.
- **Real content only.** No stock pets, no invented products, prices, hours, reviews or staff. Unknown facts are `[OPEN]` in `DESIGN.md`.
- **Mobile first.** Most visits will come from Instagram on a phone. Shop, Grooming, Boarding, Call and Cart must be one tap away.

### Colour facts we are designing from

Sampled from the logo and the offer posters (compressed screenshots, so approximate until we get the brand files):

| Source | Colour |
|---|---|
| Logo ring | sky blue, about `#5395D0` |
| Logo disc | pale sun yellow, about `#F1DC49` |
| Offer posters | strong yellow, about `#FFC92B`, with ink/navy type |
| Noddy | black and white with a pink tongue |

The logo's blue is lighter than the navy we assumed earlier. Every direction below is built on the logo's real blue and yellow; the exact values are confirmed with the original brand files.

---

## Direction A: Birthday Poster

**One line:** the website feels like walking past one of Nodda Paws's own offer posters: yellow, loud, joyful, and impossible to mistake for anyone else.

**Mood:** sunny, cheeky, confident, a little chaotic in a good way.

### Colour
| Token | Hex | Use |
|---|---|---|
| `sun` | `#FFC92B` | Hero, primary buttons, price tags (about 40% of the home page) |
| `ink` | `#0A0F1C` | Text, borders, hard shadows, footer |
| `sky` | `#5395D0` | Logo blue; section bands, links, badges |
| `cream` | `#FFF6DC` | Reading surfaces, product cards |
| `pink` | `#FF8DBF` | Stickers only, never behind long text |

Rules: ink on yellow, ink on cream, cream on ink, ink on sky for large text only (check contrast). Pink never carries information.

### Type
- **Display:** Paytone One, very large, tight, 2-4 words per headline, mixed with one highlighted word on a blue or ink block.
- **Body/UI:** DM Sans. **Captions:** Fraunces Italic, used for photo captions and Noddy's asides only.

### Layout language
Hard offset shadows (4-8px, ink), 2.5-3px ink outlines, square-ish corners (8-12px), tilted price tags and stickers, a taped ticker band, halftone dots as texture. Sections alternate yellow, cream, sky and ink. Stickers: two per screen at most.

### Hero idea
Full-bleed yellow with the headline "Your pet's favourite stop in West Delhi" and a big photo of Noddy cut out over a sky-blue arch (a doorway). Two buttons: **Shop the Winter Collection** and **Book grooming**. A tilted tag shows "Noddy approved". Under it, a static ticker lists Shop · Grooming · Boarding · Day care · Tilak Nagar.

### Shop and services
- **Product cards** look like price tags: photo, name, price in a yellow tag, size chips, "Add" button. Sale badges are stickers and appear only when a real compare-at price exists.
- **Collections** are poster banners ("Winter Collection '26").
- **Grooming / Boarding / Day care** are three large numbered cards with a "Call or WhatsApp" action and, when prices are known, "from ₹..." labels. Until then: "Call for prices".

### Motion
One hero moment (the door and tag settle, a short scroll expansion); hard-shadow press on buttons; quiet everywhere else. Full reduced-motion fallback.

### Pros
- Closest to what followers already recognise, so the jump from Instagram to site feels seamless.
- Strongest standout. Very shareable.
- Cheap to extend with new offers: just another poster.

### Risks
- Can get loud and tiring if every section shouts. Needs strict limits on stickers, tilt and colour.
- Product photos need to be good; a busy frame around a weak photo looks worse than a quiet one.
- Dense poster styling can fight with clarity on product pages, so those pages use the calm card from Direction B.

**Best if:** the priority is brand recognition and impulse buying from Instagram traffic.

---

## Direction B: Cosy Catalogue

**One line:** a warm, editorial lookbook for a pet shop with taste: the products are the stars and the brand speaks softly.

**Mood:** calm, premium-but-friendly, seasonal, like a good independent boutique.

### Colour
| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBF4E4` | Main background (about 55%) |
| `ink` | `#14213D` | Text, rules, footer |
| `sky` | `#5395D0` | Accent, links, active states |
| `sun` | `#F3C623` | Buttons and small highlights (about 10%) |
| `blush` | `#F4B6C8` | Gentle seasonal accent |

### Type
- **Display:** Fraunces (upright, semi-bold) for editorial headings, with Fraunces Italic for captions and pull quotes.
- **Body/UI:** DM Sans. Paytone One is kept for the logo-adjacent wordmark moments only (for example "Noddy's picks").

### Layout language
Generous white space, thin 1px rules, large product photography on a clean grid, drop-cap intros, "issue" style collection pages ("Winter Collection '26", "Diwali edit"). Corners nearly square; borders instead of shadows. Noddy appears as a small stamp-like illustration of the real logo and in photos, not as a giant mascot.

### Hero idea
A tall editorial split: left, a short headline ("Winter, but make it paw-shion") with one button; right, a large lookbook photo of a dog in a winter sweater from the real collection. Below it, a quiet row: Shop · Grooming · Boarding · Day care.

### Shop and services
- **Product cards:** big photo, small caps brand/category, name, price, colour/size chips. Hover swaps to a second photo. Persistent mobile "Add to cart" on product pages.
- **Collections** are mini magazines: hero image, short intro, products.
- **Services** are written like a menu: a two-column list with a short description and a "Book" link per service, plus one photo for each. Prices appear in the list when confirmed.

### Motion
Slow, subtle fades and image hover only. No signature 3D. Fastest and simplest to build.

### Pros
- Best at making products and prices easy to compare; scales to a large catalogue.
- Feels premium, which helps higher-priced items such as bedding and outfits.
- Lowest risk of looking childish or cluttered.

### Risks
- Quietest and least like their current feed; Instagram followers may feel it is "someone else's brand".
- Depends heavily on professional-looking product photography.
- The playful, cheeky voice has less visual support, so copy must carry more of the personality.

**Best if:** the catalogue grows large and the goal is to be seen as a premium, trustworthy pet boutique.

---

## Direction C: Noddy's Neighbourhood

**One line:** a community scrapbook: real photos, stickers, handwritten notes and a hint of Tilak Nagar, with kindness and character at the centre.

**Mood:** warm, human, local, a pinboard in a friendly shop window.

### Colour
| Token | Hex | Use |
|---|---|---|
| `sky` | `#5395D0` | Page backdrop and big bands (about 35%) |
| `sun` | `#FFD23F` | Buttons, highlighter swipes, sticker backs |
| `cream` | `#FFF8E7` | Note cards and polaroid borders |
| `ink` | `#101624` | Text |
| `pink` | `#FF8DBF` | Washi tape, heart stickers |
| `leaf` | `#6BA368` | Community and kindness notes only |

### Type
- **Display:** Bricolage Grotesque (characterful, bold) for headings.
- **Body/UI:** DM Sans. **Handwriting:** Caveat for short margin notes and captions (one or two words at a time, never for facts).

### Layout language
Pinboard: slightly tilted photo cards with tape, torn-paper section edges, a simple hand-drawn map line from the station to the shop, highlighter underline on key words, flat colour and thin outlines (no pillowy shapes). Cards are rotated at most 2°.

### Hero idea
A sky-blue "window" with a pinboard of real photos around a big Noddy portrait and a note: "Hi, I'm Noddy. Come say hi." Under it, three sticker links: Shop, Grooming & Boarding, Our Kindness Drive.

### Shop and services
- **Product cards:** polaroid style with a handwritten price note, size chips, "Add" button. Collections are "pinboards".
- **Services** are "Noddy's guide" cards with a short real note from the team and a Call/WhatsApp button.
- A **community section** tells the Birthday Donation Drive with Seva Sarathi (17-27 Oct) and future activities, with dates and context.

### Motion
Gentle: cards "pin" in with a small drop, tape peels on hover. Keep to two or three effects per page.

### Pros
- Most human and the most distinctive for a local shop; turns the community work into a real asset.
- Very photo and reel friendly, which fits their content.
- Differentiates well from chain stores like Heads Up For Tails.

### Risks
- Scrapbook styling can become cluttered or childish; needs firm limits and strong photography.
- Harder to keep consistent as the team uploads products and posts themselves.
- Product comparison and filtering are weaker than in Direction B.

**Best if:** the priority is local trust, community and reels, with the shop as one part of the story.

---

## Side by side

| | A. Birthday Poster | B. Cosy Catalogue | C. Noddy's Neighbourhood |
|---|---|---|---|
| Feels like their Instagram | Closest | Furthest | Close in warmth |
| Shop clarity | Good (tag cards) | Best | Fair |
| Standout / memorable | Highest | Medium | High |
| Premium feel | Medium | Highest | Medium |
| Photo quality it needs | Good | Excellent | Good, imperfect is fine |
| Build effort | Medium | Lowest | Medium-high |
| Main risk | Too loud | Too quiet | Too busy |

## Recommendation

**Direction A as the brand, with Direction B's discipline on shop pages.**

- Use A's poster energy for the home page, offers, collection banners and service pages, since it is what followers already recognise and it makes the site stand out.
- On product listing and product detail pages, switch to B's calm grid, thin rules and clear price hierarchy, because shoppers need clarity more than personality there.
- Borrow C's community story as a single honest section ("Noddy's kindness") rather than a whole visual system.

If you pick a different direction, or a different mix, I will update `DESIGN.md` to match and mark the decision **Approved**.

## What needs your decision

1. Which direction (A, B, C, or the recommended mix)?
2. Is the logo-true blue (`#5395D0`) the main blue, instead of the darker navy used before? (Needs a check against the original brand files.)
3. Boarding or day care as the main overnight/daytime service name? Instagram uses "boarding" in captions and "Day care" as a highlight, so the nav label stays `[OPEN]`.
