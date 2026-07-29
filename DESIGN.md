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

---

## As built — where the finished page departs from this plan

Six changes, all made during the build and all deliberate:

1. **Section rhythm was halved.** The plan specified `padding-block: 176px`, which produces
   *352px* between adjacent sections. On screen that stopped reading as generous and started
   reading as broken. `--space-section` is now the gap *between* sections and each side pays
   half, so the measured rhythm is the 88 / 120 / 176px the plan intended.
2. **The mobile comparison lost its row numbers.** The plan said matched pairs would share "a
   row number" at 375px. That would have been decorative numbering outside the two real
   sequences — against this brief and against my own rule. The pairs are held together by the
   OLD WAY / THIS WAY labels instead.
3. **The FAQ height transition** is done with `::details-content` and `interpolate-size`
   rather than `grid-template-rows`, so the accordion can stay native `<details>`/`<summary>`
   and keep the browser's keyboard and screen-reader behaviour. It animates where supported and
   opens instantly elsewhere.
4. **Scroll-in reveals needed a safety net.** `IntersectionObserver` only reports threshold
   *crossings*, so an element that skips the whole viewport between two frames — flick-scroll,
   dragging the scrollbar, pressing End — never fires and would sit at `opacity: 0` for good.
   This was caught in the 1440 screenshot, where a whole section rendered blank. `lib/reveal.ts`
   now runs one shared observer plus a rAF-throttled sweep, and both tear themselves down once
   everything has been revealed.
5. **A typographic pass was added.** Straight apostrophes and quotes in the copy are rendered as
   real typographic marks (`'` → `’`). No words are changed; at 84px in a serif, straight quotes
   were the single most amateur thing on the page. It is one function in `components/Copy.tsx`
   and deleting the call reverts it.
6. **The ledger rule now registers the sequences directly** — see the critique below.

## Self-critique against the brief, from the 375 and 1440 screenshots

**1. The signature element was under-delivering.** The plan promised the rule would be "the
page's spine, its measure, and its progress," with sections registering against it. As first
built it carried exactly ten ticks across 12,772px — one per section — so for the overwhelming
majority of its length it was an undifferentiated 1px grey line, visually identical to a
decorative border. A measure with marks 1,300px apart is not a measure. Worse, the one place the
page has a genuine dense sequence to register — the eight modules — drew its own full-width
hairlines and ignored the rule completely. The boldness allowance was spent on something too
quiet to be remembered. **This was the worst of the three, and it is the one I fixed:** the four
framework steps and the eight modules now hang off the rule directly, each row's hairline
running back to it and crossing it, so the rule becomes the spine the register hangs from — the
`┼` structure this document's own wireframe drew. Twelve crossings where the sequences are real,
quiet everywhere else.

**2. The hero media slot is the weakest relationship on the page.** At 1440 the headline runs at
84px across roughly 700px while the media sits in a 22rem column pinned top-right, top-aligned
to the `h1` and ending nowhere in particular — not on the subheadline, not on the CTA, not on
any horizontal the page establishes elsewhere. It reads as a rectangle parked beside the type
rather than a composed pairing, and it leaves a soft void beneath it. At 375 it stacks and is
fine. Desktop is where it is under-designed. Not fixed — it needs the real image to resolve
properly, since the crop and tonal weight will drive the alignment.

**3. Section labelling is inconsistent, and the FAQ heading is a label doing a heading's job.**
Eight sections carry an eyebrow label above the `h2`; Testimonials and the Final CTA don't,
because the approved copy gave those sections a title but no separate heading line. The sourcing
is defensible — inventing a heading would have been worse — but the visible result is that two
sections open with a bare display heading and no tick-anchored label, breaking the registration
rhythm exactly where the page is trying to close. The FAQ is the sharpest case: its `h2` is
literally "FAQ" set at 52px in the display face. Not fixed, because the fix is a copy decision,
not a design one: three short heading lines from the client would resolve all three at once.

## Post-launch fix — placeholders must never become live destinations

Reported as "it's not working." It was: every one of the five CTA buttons, plus the footer
links, navigated to a 404. `href="[CHECKOUT / PAYMENT LINK URL]"` is a *relative URL*, so the
browser resolved it against the origin and served a not-found page. The buttons looked
completely functional right up until someone clicked one.

Preserving the bracket placeholder was right. Feeding it into an `href` was not — a placeholder
is content, and content is not a destination. Anything that turns a value from `site.ts` into a
place the browser will go now checks `isUnfilled()` first (`lib/placeholder.ts`):

- the CTA renders as an inert `<button disabled>` with the placeholder shown beneath it, and
  becomes a real `<a href>` the moment `CTA_URL` holds a URL;
- footer links render as plain text until their `href` points somewhere.

Both paths are verified: with the placeholder in place nothing on the page links to a bracketed
value and clicking a CTA does not navigate; with a real URL set, all five instances render as
anchors carrying it. Next was also moved to 15.5.22, the patched release for CVE-2025-66478.


## Shortening pass — 22% off desktop, 15% off mobile, no copy cut

Feedback: the page reads well but scrolls too far. The copy is signed off, so the length came out
of the layout rather than the words.

| | Before | After | Change |
|---|---|---|---|
| Desktop (1440) | 12,962px — 14.4 screens | 10,151px — 11.3 screens | −22% |
| Mobile (375) | 16,917px — 18.8 screens | 14,391px — 16.0 screens | −15% |

What changed:

- **Section rhythm** from 88/176px to 56/104px between sections. Still the largest single interval
  on the page and still clearly generous, just no longer a void.
- **The two sequences became bands.** From 1024px up, each module row is three columns —
  numeral, what-you'll-do, why-it-matters — instead of two stacked blocks, and each framework step
  is numeral, title, body. Below 1024 the numeral hangs beside the title and the prose runs the
  full column width instead of being indented past it, which is also a readability win on a phone.
  The modules section alone dropped 716px on desktop and 625px on mobile.
- **Leading 1.65 → 1.55** and lead paragraphs 1.55 → 1.45. Roughly 3% off the height of every
  block of text on the page.
- **Measure 62ch → 66ch**, so desktop paragraphs run fewer lines.
- **Media slots capped on small screens.** A 4:5 portrait at full mobile width is ~385px tall;
  the hero and the About portrait are now capped and cropped with `object-cover` below the
  breakpoint, and unconstrained above it.
- Row padding, card padding and internal block spacing trimmed throughout.

Verified after the pass: desktop 100/100/100/100, mobile 97 performance / 100 accessibility,
CLS still 0 at both sizes, no horizontal overflow at 375/768/1024/1440, one h1, heading order
intact.

**What's left is words, not spacing.** Mobile is still 16 screens because at 375px the page is
almost entirely reflowed body copy — whitespace is no longer what's driving the height. Taking it
materially below that means cutting copy, which is the client's call, not mine.
