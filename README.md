# [COURSE NAME] — landing page

A single-page sales site. Statically rendered Next.js, deploys to Vercel with no configuration.

**If you only read one thing:** every word, price, image path and link on this page lives in
**`content/site.ts`**. You never need to open any other file to change the page.

---

## The three things you'll actually want to do

### 1. Change some words

Open `content/site.ts`. It is laid out in the same order as the page, top to bottom, with a
comment above each section:

```
hero          →  1. the headline, subheadline, button microcopy, credibility strip
problem       →  2. the problem, and the "what that costs you" list
solution      →  3. the four-step method
course        →  4. the eight modules
whyThisWorks  →  5. the old-way / this-way comparison, and "why now"
about         →  6. your photo, name and bio
testimonials  →  7. the quote cards
pricing       →  8. the price, what's included, who it's for
faq           →  9. the questions and answers
finalCta      →  10. the closing recap and guarantee
footer        →      disclaimer, links, copyright
```

Find the line you want, change the text between the quote marks, save. So to change the
headline you edit this and nothing else:

```ts
hero: {
  headline: "You don't need more discipline. You need better defaults.",
```

Three rules:

- Keep the quote marks and the comma at the end of the line.
- An apostrophe inside a `"double-quoted"` line is fine: `"you've"`. A double quote inside one
  is not — write `\"` if you truly need one.
- In a list (anything inside `[ ... ]`), each line is one bullet. Add or delete whole lines,
  keeping the commas.

### 2. Swap an image

Put your file in `public/images/`, using the existing filename:

| Replace this file | Shows up as | Shape |
|---|---|---|
| `public/images/hero.jpg` | The hero media slot | Portrait, 4:5 |
| `public/images/portrait.jpg` | Your photo in the About section | Portrait, 4:5 |

Keep the filename and you don't need to touch any code. Two things to do afterwards:

- If your image is a different pixel size, update `width` and `height` in `content/site.ts`
  to match it. Those numbers are what stop the page jumping around while images load.
- Update the `alt` text next to it. Right now it describes the *brief* for the photo
  (`[YOUR PHOTO — editorial, natural light]`), not the photo. Alt text is what a blind visitor
  hears, so describe what's actually in the picture.

### 3. Update the price

One line, in `content/site.ts`:

```ts
pricing: {
  price: "[£/$XXX]",
```

That single value also feeds the sticky bar that follows you down the page on a phone, so
there's only one place to change it. The price also appears in the final button's microcopy —
search `finalCta.ctaMicrocopy` and change it there too.

### And the checkout link

The "Get instant access" button appears five times and every one points at the same value:

```ts
export const CTA_URL = "[CHECKOUT / PAYMENT LINK URL]";
```

Paste your Stripe / Gumroad / Kajabi link there.

Until you do, the buttons deliberately do nothing: they render greyed out with a
"Link not set" note underneath. That's on purpose. A button pointing at
`[CHECKOUT / PAYMENT LINK URL]` would look like it worked and send every visitor to a
404 page. The moment you paste a real URL in, all five turn into working links
automatically — you don't change anything else. The same applies to the footer links.

---

## Things still to fill in

The copy arrived with blanks in it — prices, numbers, credentials, testimonials. None of them
have been invented. They are all still on the page, wrapped in `[SQUARE BRACKETS]` and marked
with a **dotted underline** so you can spot them by scrolling.

**`TODO.md`** lists all 81 of them with the exact key to edit and what's needed. Start there.

Three of them are decisions rather than values — community access, payment plan, and whether
there's live access to you. Both options are on the page for each; pick one and delete the
other.

---

## Running and deploying it

```bash
npm install
npm run dev     # preview at http://localhost:3000 while you edit
npm run build   # check it still builds before you deploy
```

Deploying: push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new).
No settings to change — Vercel detects Next.js on its own. After that, every push to the branch
redeploys the site automatically.

---

## Notes for whoever works on this next

- **Nothing is hardcoded in a component.** If you find yourself typing copy into a `.tsx` file,
  it belongs in `content/site.ts` instead.
- **`DESIGN.md`** documents the palette, type scale, spacing and the one signature element
  (the ledger rule down the left margin), and why each was chosen.
- **Fonts** are two self-hosted variable faces — Newsreader and Instrument Sans — subset to the
  characters this page actually uses, 82 KB in total. No request is made to Google Fonts.
  Regenerating them is only necessary if the copy gains characters outside Latin-1.
- **Typography.** Straight apostrophes and quotes in `site.ts` are rendered as proper
  typographic marks (`'` → `’`). No words are changed — it happens at render time in
  `components/Copy.tsx`, and deleting the `typeset()` call reverts it.
- **`node tools/collect-placeholders.mjs`** rescans `site.ts` and prints every remaining
  placeholder, so `TODO.md` can be regenerated rather than maintained by hand.
