# TODO — what the client still needs to supply

Every item below is an unfilled `[SQUARE BRACKET]` placeholder from the approved copy.
All of them live in one file — **`content/site.ts`** — and all of them are rendered on the
live page with a dotted underline, so you can also just scroll the page and look for the
dotted text.

Nothing here has been guessed. No number, price, testimonial or credential has been
invented — where the copy left a blank, the blank is still on the page.

**81 placeholder instances, 44 distinct values.**

Regenerate this list at any time with `node tools/collect-placeholders.mjs`.

---

## Start here — the three that block launch

1. **`CTA_URL`** — every one of the five buttons points at it. Until it's set the buttons are
   deliberately inert and greyed out rather than linking to a 404; they become working links
   the moment you paste a real URL in.
2. **`site.pricing.price`** — the price, which also feeds the mobile sticky bar.
3. **`site.testimonials.items`** — four placeholder cards are currently visible. Either fill them
   with real, attributed quotes or delete the section; visible fake praise is worse than none.

---

## Decisions, not just values

Three places in the copy offer two branches. Both branches are currently rendered, with the
brackets intact, so nothing gets silently chosen for you:

- `site.pricing.includes[3]` — community access **or** group calls, or neither.
- `site.pricing.paymentPlan` — delete the whole line if you don't offer one.
- `site.faq.items[6].answer` — the live-access answer is written as YES / NO. Keep one.

---

## Checkout link — the one that matters most

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `CTA_URL` | `[CHECKOUT / PAYMENT LINK URL]` | The Stripe / Gumroad / Kajabi checkout URL. Until this is set, all five buttons go nowhere. |

## Browser tab, search results, social shares

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.meta.title` | `[COURSE NAME]` | The course's final name. |
| `site.meta.siteUrl` | `[https://YOUR-DOMAIN.com]` | The live domain, including https://. |

## Names used across the whole page

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.brand.courseName` | `[COURSE NAME]` | The course's final name. |
| `site.brand.methodName` | `[The Baseline Method]` | The method's final name, or delete the brackets to keep this one. |

## 1. Hero

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.hero.ctaMicrocopy` | `[30]` | Guarantee length in days. Appears in five places — change every one. |
| `site.hero.media.alt` | `[HERO IMAGE / SHORT LOOPING VIDEO — quiet, editorial, no text overlay]` | Replace public/images/hero.jpg, then rewrite this as real alt text describing the image. |
| `site.hero.media.caption` | `[HERO IMAGE / SHORT LOOPING VIDEO — quiet, editorial, no text overlay]` | Replace public/images/hero.jpg, then rewrite this as real alt text describing the image. |
| `site.hero.credibility[0]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.hero.credibility[1]` | `[Y]` | A number — years in practice, or number of one-to-one clients. |
| `site.hero.credibility[2]` | `[CREDENTIAL / TRAINING]` | Your actual qualification or training body. Leave it out entirely rather than stretching it. |
| `site.hero.credibility[3]` | `[OUTLET]` | A publication that genuinely featured you. Delete this whole list item if none has. |

## 3. The Solution

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.solution.label` | `[The Baseline Method]` | The method's final name, or delete the brackets to keep this one. |
| `site.solution.intro` | `[The Baseline Method]` | The method's final name, or delete the brackets to keep this one. |
| `site.solution.credibilityLine` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.solution.credibilityLine` | `[Y]` | A number — years in practice, or number of one-to-one clients. |
| `site.solution.credibilityLine` | `[£/$X]` | A price, with the right currency symbol. |

## 4. The Course

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.course.intro` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |

## 5. Why This Works

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.whyThisWorks.comparison[5].old` | `[£/$X,XXX]` | What one-to-one coaching costs, for the comparison. |
| `site.whyThisWorks.whyNow.body[0]` | `[£/$XXX]` | The course price. Also shown in the mobile sticky bar. |
| `site.whyThisWorks.whyNow.body[0]` | `[£/$29]` | A representative cheap-course price. |

## 6. About

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.about.portrait.alt` | `[YOUR PHOTO — editorial, natural light]` | Replace public/images/portrait.jpg, then rewrite this as real alt text describing the photo. |
| `site.about.portrait.caption` | `[YOUR PHOTO — editorial, natural light]` | Replace public/images/portrait.jpg, then rewrite this as real alt text describing the photo. |
| `site.about.name` | `[YOUR NAME]` | Your name — this is the About section's heading. |
| `site.about.credential` | `[CREDENTIAL / TRAINING]` | Your actual qualification or training body. Leave it out entirely rather than stretching it. |
| `site.about.body[0]` | `[2–3 sentences: who you are and what you did before this. Keep it factual — the credibi…` | Your bio. Factual and specific — the credibility is in the specifics. |
| `site.about.body[1]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.about.body[1]` | `[SPECIFIC CLIENT TYPE — e.g. founders, senior operators, clinicians]` | Who you actually work with. |
| `site.about.body[2]` | `[The Baseline Method]` | The method's final name, or delete the brackets to keep this one. |
| `site.about.body[2]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |

## 7. Testimonials

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.testimonials.items[0].quote` | `[Short quote — one specific thing that changed. Two sentences maximum.]` | A real quote, two sentences maximum, naming one specific change. |
| `site.testimonials.items[0].name` | `[Name or initials]` | Attribution. Never publish this card without it. |
| `site.testimonials.items[0].role` | `[Role]` | The person's role — required on every card. |
| `site.testimonials.items[0].result` | `[Specific result / timeframe]` | What changed and how long it took. |
| `site.testimonials.items[1].quote` | `[Short quote.]` | A real quote, two sentences maximum, naming one specific change. |
| `site.testimonials.items[1].name` | `[Name or initials]` | Attribution. Never publish this card without it. |
| `site.testimonials.items[1].role` | `[Role]` | The person's role — required on every card. |
| `site.testimonials.items[1].result` | `[Specific result / timeframe]` | What changed and how long it took. |
| `site.testimonials.items[2].quote` | `[Short quote.]` | A real quote, two sentences maximum, naming one specific change. |
| `site.testimonials.items[2].name` | `[Name or initials]` | Attribution. Never publish this card without it. |
| `site.testimonials.items[2].role` | `[Role]` | The person's role — required on every card. |
| `site.testimonials.items[2].result` | `[Specific result / timeframe]` | What changed and how long it took. |
| `site.testimonials.items[3].quote` | `[Short quote.]` | A real quote, two sentences maximum, naming one specific change. |
| `site.testimonials.items[3].name` | `[Name or initials]` | Attribution. Never publish this card without it. |
| `site.testimonials.items[3].role` | `[Role]` | The person's role — required on every card. |
| `site.testimonials.items[3].result` | `[Specific result / timeframe]` | What changed and how long it took. |

## 8. Pricing

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.pricing.productName` | `[COURSE NAME]` | The course's final name. |
| `site.pricing.price` | `[£/$XXX]` | The course price. Also shown in the mobile sticky bar. |
| `site.pricing.includes[0]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.pricing.includes[0]` | `[immediately / weekly]` | **Pick one** and delete the other. |
| `site.pricing.includes[1]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.pricing.includes[3]` | `[Private community access / [X] group calls — DELETE IF NOT INCLUDED]` | **Decide, then delete the branch you don't use.** Both options are currently on the page. |
| `site.pricing.includes[4]` | `[30]` | Guarantee length in days. Appears in five places — change every one. |
| `site.pricing.paymentPlan` | `[PAYMENT PLAN — [X] payments of [£/$XX] — DELETE IF NOT OFFERED]` | **Decide, then delete the branch you don't use.** Both options are currently on the page. |
| `site.pricing.ctaMicrocopy` | `[30]` | Guarantee length in days. Appears in five places — change every one. |
| `site.pricing.forYou.items[2]` | `[2–3]` | Hours per week. |
| `site.pricing.forYou.items[2]` | `[8]` | Number of weeks. |
| `site.pricing.notForYou.items[1]` | `[If that's where you are, please speak to a qualified professional first.]` | Keep or cut this sentence — it is a duty-of-care line. |

## 9. FAQ

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.faq.items[0].answer` | `[2–3]` | Hours per week. |
| `site.faq.items[0].answer` | `[8]` | Number of weeks. |
| `site.faq.items[6].answer` | `[YES — [X] group calls per [month], plus the community. / NO — this is a self-paced pro…` | **Decide, then delete the branch you don't use.** Both options are currently on the page. |
| `site.faq.items[7].answer` | `[two]` | A month number. |
| `site.faq.items[7].answer` | `[six]` | A month number. |
| `site.faq.items[8].answer` | `[30]` | Guarantee length in days. Appears in five places — change every one. |
| `site.faq.items[8].answer` | `[EMAIL]` | The refund/contact address. |
| `site.faq.items[9].answer` | `[One-to-one coaching exists if you want it later, but nothing in the course is gated be…` | Keep or cut, depending on whether you offer it. |
| `site.faq.items[11].answer` | `[PLATFORM]` | Where the course is hosted — Kajabi, Teachable, Circle, etc. |

## 10. Final CTA

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.finalCta.listIntro` | `[COURSE NAME]` | The course's final name. |
| `site.finalCta.items[0]` | `[X]` | A number. Check the sentence around it: lessons, years, clients, worksheets or group calls. |
| `site.finalCta.guarantee` | `[30]` | Guarantee length in days. Appears in five places — change every one. |
| `site.finalCta.ctaMicrocopy` | `[£/$XXX]` | The course price. Also shown in the mobile sticky bar. |
| `site.finalCta.ctaMicrocopy` | `[30]` | Guarantee length in days. Appears in five places — change every one. |

## Footer

| Key in `content/site.ts` | Placeholder | What's needed |
|---|---|---|
| `site.footer.disclaimer` | `[MANDATORY DISCLAIMER IF REQUIRED — e.g. "Individual results vary. This program is educ…` | Check whether your jurisdiction/processor requires one. Delete the item if not. |
| `site.footer.links[0].label` | `[Terms]` | Link text and URL for your terms page, or delete the whole link. |
| `site.footer.links[0].href` | `[/terms]` | URL of the terms page. |
| `site.footer.links[1].label` | `[Privacy]` | Link text and URL for your privacy page, or delete the whole link. |
| `site.footer.links[1].href` | `[/privacy]` | URL of the privacy page. |
| `site.footer.links[2].label` | `[Contact — EMAIL]` | Link text for the contact link. |
| `site.footer.links[2].href` | `[mailto:EMAIL]` | Your contact address, as mailto:you@example.com. |
| `site.footer.copyright` | `[YEAR]` | Copyright year. |
| `site.footer.copyright` | `[YOUR NAME / COMPANY]` | Whoever holds the copyright. |

---

## Images

Two placeholder images ship with the project so the layout is correct and nothing shifts
while loading. Replace the files, keep the filenames:

| File | Used for | Shape |
|---|---|---|
| `public/images/hero.jpg` | Hero media slot | Portrait, 4:5 (currently 1200×1500) |
| `public/images/portrait.jpg` | About section | Portrait, 4:5 (currently 900×1125) |

If your replacement has different pixel dimensions, update `width` and `height` in
`content/site.ts` to match — they are what stop the page jumping as images load.
And rewrite the `alt` text: right now it describes the *brief* for the photo, not the photo.
