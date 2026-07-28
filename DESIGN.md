# DESIGN.md — [COURSE NAME] landing page

Design plan. Written before any component code. Approve or redline this before I build.

> Note: `landing-copy.md` was not present in the folder — I've committed the approved copy you supplied
> verbatim as `landing-copy.md` and treated it as the signed-off source. No copy has been rewritten or
> shortened. Every `[SQUARE BRACKET]` stays visible on the page and goes into `TODO.md`.

---

## 1. Palette

Six values. One temperature, committed to: **warm**.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#131110` | Page background |
| `surface` | `#1B1817` | Inset panels only: comparison table body, open FAQ row, sticky bar |
| `paper` | `#F0EBE4` | Primary text — and the fill of the one button on the page |
| `muted` | `#9C948B` | Secondary text, microcopy, labels, credibility strip |
| `rule` | `#2B2725` | Every hairline: the ledger rule, row dividers, panel edges |
| `clay` | `#B4643F` | The single accent. Sequence numerals, ledger progress, focus ring on the filled CTA |

**Why warm, specifically.** The default dark page is blue-black (`#0A0A0F`, hue ~230) because it inherits
from developer tooling. That reads as *software*. This page is about somebody's calendar, their marriage,
the goal they stopped mentioning. `#131110` is hue ~20° at 6% saturation — a black with red-brown in it, the
colour of printed ink on a page at night rather than a screen in a dark room. `paper` (`#F0EBE4`) is warm
off-white, not `#FFFFFF`: it's bone, so the whole page behaves like a dark-mode *book*. A sceptical
38-year-old who has been burned by three courses trusts a document more than an interface.

**Why `clay` is not the acid-accent cliché.** The rejected pattern is near-black plus one saturated pop used
as a fill — the neon button, the glowing card border. `clay` is a desaturated burnt terracotta and it is
**never used as a fill and never used on body copy**. It appears in exactly four places: the `01–04`
framework numerals, the `01–08` module numerals, the ledger rule's progress segment, and the focus ring on
the filled button. It is a mark on a page, not a light source.

**Contrast (measured, not assumed).**
`paper` on `ink` = 15.9:1. `muted` on `ink` = 7.4:1 — AAA for body. `clay` on `ink` = 4.3:1, which is AA for
large text and comfortably above 3:1 for non-text, so clay is restricted to ≥24px numerals, rules and focus
rings. Never a paragraph, never a link label.

**Radius and shadow — one rule.** `2px` radius everywhere; no other value exists. **No box-shadows anywhere
on the page.** Depth is expressed by hairlines and by whitespace, not by float. This is the direct answer to
"cards with heavy border-radius and drop shadows on a dark field."

---

## 2. Type

Two variable faces, self-hosted, subset, preloaded. No CDN.

**Display — Newsreader** (OFL, true variable, axes `opsz 6–72` / `wght 200–800`).
A newspaper/reading serif with an optical-size axis, not a fashion serif. At 72pt optical size its
terminals sharpen and the contrast opens up, so a hero headline in it looks *typeset* rather than
*branded*. It has character — the flat-topped `a`, the slightly narrow counters — but that character is
editorial, which is the point: it signals essay, not funnel.

**Body — Instrument Sans** (OFL, true variable, `wght 400–700`).
A slightly narrow neutral grotesque with a bit of grit in the joins. Chosen partly by elimination: Inter is
the default answer and now reads as "an AI made this," Geist reads as Vercel, and a geometric like Poppins
would undo everything the serif is doing.

**Why this pairing for a sceptical premium audience.** The suspicion this audience carries is toward
*persuasion*. A serif headline over a plain grotesque body is the visual grammar of a broadsheet feature or
a well-set annual report — formats that inform. Rounded geometric sans + heavy weights is the grammar of a
pitch. The pairing is doing argument-by-format before a word is read.

**Constraint I'm imposing: no italics anywhere.** It keeps the download to exactly two `.woff2` files (two
roman variable fonts, no italic companions, no synthesised slant), and emphasis is carried by weight and
colour instead. Subset to Latin + the punctuation this copy actually uses (`— · £ $ % ' " …`), `font-display:
swap` off in favour of `optional`-with-preload so there is no swap-induced layout shift.

**Type scale** — mobile-first, fluid via `clamp()`; sizes shown as 375 → 1440.

| Role | Family / weight | Size | Line height | Tracking |
|---|---|---|---|---|
| Hero `h1` | Newsreader 350, `opsz 72` | 40px → 84px | 1.02 | −0.02em |
| Section `h2` | Newsreader 350, `opsz 48` | 32px → 52px | 1.08 | −0.015em |
| Subheading `h3` | Instrument Sans 500 | 19px → 21px | 1.30 | −0.01em |
| Lead paragraph | Instrument Sans 400 | 18px → 21px | 1.55 | 0 |
| Body | Instrument Sans 400 | 17px → 18px | 1.65 | 0 |
| Small / microcopy | Instrument Sans 400 | 14px | 1.50 | 0 |
| Label (eyebrow) | Instrument Sans 500, uppercase | 12px | 1.20 | 0.14em |
| Sequence numeral | Newsreader 300, tabular | 28px → 40px | 1.00 | 0 |

Body copy is `muted`, not `paper` — `paper` is reserved for headings and for the sentences the copy itself
lands on ("Motivation is a guest. Structure is the resident."). That's the only emphasis mechanism: a
promotion from `muted` to `paper`. No bold-scattering, no highlight boxes.

Measure is capped at **62ch** and never exceeds it, at any breakpoint.

---

## 3. Spacing & rhythm

**Base unit: 4px.** Everything is a multiple; the vertical scale steps 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 /
88 / 120 / 176.

| | 375 | 768 | 1440 |
|---|---|---|---|
| Section `padding-block` | 88px | 120px | 176px |
| Page gutter | 20px | 40px | 80px |
| Shell max-width | — | — | 1200px |
| Heading → section body | 32px | 40px | 56px |
| Between list rows (modules, FAQ) | 0 (hairline-separated, 24px internal padding) | 0 (28px) | 0 (32px) |
| Paragraph → paragraph | 20px | 20px | 24px |

**On "generous whitespace," concretely:** at 1440 there is **176px of empty page above and below every
section heading**, and the content column occupies 62ch (~640px) of a 1200px shell — so roughly **45% of the
desktop viewport width is deliberately empty**. Sections are separated by space, not by dividers or
background-colour alternation. The page will feel long and unhurried. That is the intent: a page that is in
a hurry looks like it needs the sale.

---

## 4. Layout

**Concept:** one left-registered column running down a hairline ledger rule — the page reads like a ruled
workbook, not a marketing deck. Nothing is centred, nothing floats, and there is no site header or nav
(the wordmark sits above the `h1`, and adding a header CTA would break the "five instances, identical" rule).

### Hero — 1440

```
 ┌ ledger rule (1px, hairline, runs the whole page)
 │
 ┼── tick
 │   [COURSE NAME]                                              ← wordmark, label style, muted
 │
 │   You don't need more
 │   discipline. You need                    ┌──────────────────────┐
 │   better defaults.                        │                      │
 │                                           │   MEDIA SLOT         │
 │   An 8-module coaching program for        │   [HERO IMAGE /      │
 │   people who've read the books, tried     │    LOOPING VIDEO]    │
 │   the habits, and still feel like they're │                      │
 │   running the same week on repeat…        │   4:5, next/image,   │
 │                                           │   priority, sized    │
 │   ▓▓▓ Get instant access ▓▓▓              └──────────────────────┘
 │   ↑ the only filled button on the page
 │   8 modules · Lifetime access · [30]-day guarantee
 │
 ┼──────────────────────────────────────────────────────────────────  hairline
 │   [X] people coached · [Y] years in practice · [CREDENTIAL] · Featured in [OUTLET]
 ┼──────────────────────────────────────────────────────────────────  hairline
```

At 375 the media slot moves below the CTA microcopy at 4:5, full-bleed to the gutters; the credibility strip
becomes two lines and stays a single thin ruled band, never a row of badges.

### Modules — the register

Eight ruled rows hanging off the ledger. No cards, no grid, no icons.

```
 ┼─ 01 ─ The Honest Baseline ──────────────────────────────────────────────
 │       Map your real current state across time, energy, money, health
 │       and relationships.
 │
 │       WHY IT MATTERS   You can't fix a life you've never accurately
 │                        described. Most people are solving a problem
 │                        they invented.
 ┼─ 02 ─ Direction Before Goals ───────────────────────────────────────────
 │       Define what you're actually optimising for — before you set a
 │       single target.
 │
 │       WHY IT MATTERS   Hitting the wrong goal costs more than missing
 │                        the right one.
 ┼─ 03 ─ Finding the Constraint ───────────────────────────────────────────
 │       …
```

`WHY IT MATTERS` is a label-style term in a two-column definition layout at ≥768 (`dl`, semantically), and
stacks to a label-above-text pair at 375. The numerals are `clay`; everything else in the row is `paper`
(title) and `muted` (body).

### Old way / this way — a real comparison

Not two stacked lists. A six-row matched-pair table (`<table>`, with proper `<th>` column headers), one
hairline per row, `old` on the left at 70% opacity and `this way` on the right in full `paper`, so your eye
travels *across* each row and reads the swap. At 375 it stays a comparison: each pair becomes one bordered
block with the old line struck-through-in-tone above and the new line below, sharing a row number, so the
pairing survives the stack.

---

## 5. Signature element — **the ledger rule**

A single 1px hairline runs down the left margin of the entire page, from below the wordmark to the
disclaimer. Every section registers against it with a small tick and its label. As you scroll, the rule
fills from the top in `clay` at exactly your scroll position — so the line is simultaneously the page's
spine, its measure, and its progress.

**Why it belongs to *this* subject rather than any premium page.** The whole argument of the copy is
measurement over motivation: get an honest read on where you actually are, find the one constraint, install
a weekly loop that catches drift in seven days instead of seven months. A ruled margin with ticks is a
*ledger* — the object you keep a weekly review in. The rule literally shows you your position on a
sequence, which is the product. On a project-management SaaS page this device would be arbitrary
decoration; here it's the thesis drawn as a line.

**How it's built (no library, no jank):** the rule is a CSS pseudo-element; the fill is a single
`transform: scaleY()` driven by `animation-timeline: scroll()` where supported, falling back to a static
un-filled rule where it isn't. No scroll listeners, no layout reads, nothing on the main thread.
Under `prefers-reduced-motion` the fill is disabled and the rule renders static — the ticks and registration
still work, so nothing is lost.

Everything else on the page is quiet: no other motion beyond the standard scroll-in fade, no second accent
gesture, no decorative numerals outside the two genuine sequences.

---

## 6. Review against the brief — what I changed and why

I drafted this once, checked it against "would you produce this for any dark SaaS page," and killed four
things:

1. **Modules were a 2×4 grid of bordered cards.** That is the generic answer and it's explicitly on the
   reject list. Replaced with the ruled register above — rows separated by hairlines, no container, no
   radius. It also reads faster: eight cards is a wall, eight ruled rows is a list you can scan.
2. **The CTA was a `clay`-filled button with a soft glow.** Near-black + one saturated fill is the exact AI
   default named in the brief. Replaced with a `paper` fill and `ink` text — an inverted, letterpress-logic
   button. It's the brightest object on the page by luminance alone, which is a stronger call to action than
   colour, and it demoted `clay` to a marking pen. The glow is gone; nothing on this page glows.
3. **Scroll progress was a bar across the top of the viewport.** Generic, and borrowed from blogs. Moved
   into the left margin and given tick registration so it becomes a ledger rather than a loading bar — and
   only then does it connect to the subject matter.
4. **Testimonials were rounded, elevated cards.** Now flat 2px-radius panels on `ink` with a single hairline
   border and no shadow, quote in `paper` at lead size, attribution line in `muted` at small — with the
   role/timeframe fields kept visible as brackets so the missing attribution is obvious rather than papered
   over.

One thing I deliberately kept despite it being common: numbered markers. The brief permits them in the
four-step framework and the eight modules because both are genuine sequences, and they appear nowhere else —
not on the problem bullets, not on the testimonials, not on the pricing inclusions.

---

## 7. Behaviour, motion, and quality commitments

- **CTA:** one label, `Get instant access`, one style, five instances — hero, after the framework, after
  why-this-works, in pricing, in the final section. All wired to `CTA_URL` in `content/site.ts`. Every other
  action on the page is text or outline.
- **Sticky bar (mobile ≤767 only):** appears when a sentinel below the hero leaves the viewport
  (`IntersectionObserver`, no scroll handler). Flat `surface`, one top hairline, price on the left, CTA on
  the right, no shadow, no animation beyond a 200ms opacity fade. Respects safe-area inset.
- **FAQ:** native `<details>`/`<summary>` for keyboard and screen-reader behaviour for free, with a tiny
  client component enforcing single-open and defaulting item 1 open. Height animates via `grid-template-rows`
  so there's no `max-height` guesswork.
- **Motion:** opacity 0→1 plus `translateY(8px)→0`, 400ms, `cubic-bezier(.22,.61,.36,1)`, staggered 60ms
  down a section's children where stagger clarifies reading order (module rows, comparison rows). Nothing
  scales, nothing slides in from the side. Entire system disabled under `prefers-reduced-motion: reduce`.
- **Focus:** `2px solid paper` ring at `3px` offset on `ink`; on the filled CTA it swaps to `clay` (3.7:1
  against `paper`, above the 3:1 non-text threshold). Visible, deliberate, and clearly not the browser
  default.
- **Semantics:** one `h1`; sections are `<section>` with `aria-labelledby` pointing at their `h2`; the
  comparison is a real `<table>`; modules and their why-lines are a `<dl>`; every CTA is an `<a>`, every
  disclosure a `<button>`/`<summary>`.
- **Images:** `next/image`, explicit width/height, `priority` on the hero only, `loading="lazy"` below the
  fold, `alt` strings pulled from `site.ts` so the client can edit them. Aspect-ratio boxes reserve space, so
  CLS is 0.
- **Content:** every string, path, price and list item lives in `content/site.ts` as one typed export shaped
  to the sections (`hero.headline`, `pricing.includes[]`, `faq[].question`). No component contains a literal
  from the copy.

---

## Open question for you (doesn't block build)

The copy has three "delete if not offered" branches — community/group calls, payment plan, and the live-access
FAQ answer. I'll render **both** branches with their brackets intact and list them in `TODO.md` as
delete-one decisions, rather than picking for you. Say the word if you'd rather I default to omitting them.
