/* =============================================================================
 * site.ts — EVERY word, price, image and link on the landing page.
 *
 * This is the only file you need to edit to change the page. Components read
 * from here and contain no copy of their own.
 *
 * Anything written inside [SQUARE BRACKETS] is a placeholder that still needs a
 * real value. It is rendered on the live page with a dotted underline so it is
 * impossible to miss. See TODO.md at the root of the project for the full list.
 *
 * Rules of thumb:
 *   - Keep the quote marks and commas exactly where they are.
 *   - An apostrophe inside a "double-quoted" string is fine: "you've".
 *   - Lines in a [ ... ] list are items; add or remove whole lines.
 * ========================================================================== */

/** The one destination every "Get instant access" button points at. */
export const CTA_URL = "[CHECKOUT / PAYMENT LINK URL]";

/** The one button label, used identically in all five places. */
export const CTA_LABEL = "Get instant access";

export const site = {
  /* --- Browser tab, search results and social shares --------------------- */
  meta: {
    title: "[COURSE NAME] — You don't need more discipline. You need better defaults.",
    description:
      "An 8-module coaching program for people who've read the books, tried the habits, and still feel like they're running the same week on repeat.",
    siteUrl: "[https://YOUR-DOMAIN.com]",
  },

  /* --- Names used in several places ------------------------------------- */
  brand: {
    courseName: "[COURSE NAME]",
    methodName: "[The Baseline Method]",
  },

  /* --- 1. HERO ----------------------------------------------------------- */
  hero: {
    headline: "You don't need more discipline. You need better defaults.",
    subheadline:
      "An 8-module coaching program for people who've read the books, tried the habits, and still feel like they're running the same week on repeat. It replaces motivation with structure — so the results hold after the energy runs out.",
    ctaMicrocopy: "8 modules · Lifetime access · [30]-day guarantee",
    media: {
      /* Swap this file in public/images/. Keep the same filename and you don't
         need to touch this line. Keep width/height matching the real image. */
      src: "/images/hero.jpg",
      alt: "[HERO IMAGE / SHORT LOOPING VIDEO — quiet, editorial, no text overlay]",
      width: 1200,
      height: 1500,
      caption: "[HERO IMAGE / SHORT LOOPING VIDEO — quiet, editorial, no text overlay]",
    },
    /* Thin bar under the hero. Add or remove items freely. */
    credibility: [
      "[X] people coached",
      "[Y] years in practice",
      "[CREDENTIAL / TRAINING]",
      "Featured in [OUTLET]",
    ],
  },

  /* --- 2. THE PROBLEM ---------------------------------------------------- */
  problem: {
    label: "The problem",
    heading: "The issue was never effort.",
    body: [
      "You've already tried harder. That's the part nobody gives you credit for.",
      "You've read the books. Downloaded the app. Started the journal, the routine, the 5am experiment. For two weeks it worked. Then a hard week arrived and the whole thing quietly folded.",
      "So you assumed the problem was you.",
      "It wasn't. You were using willpower to fight a system that was built to produce exactly the life you're living now — your calendar, your defaults, your relationships, the things you say yes to without thinking.",
    ],
    /* The one line the eye should land on. Rendered brighter than the rest. */
    pullquote: "Motivation is a guest. Structure is the resident.",
    costHeading: "What that actually costs you",
    costs: [
      "Another year of the same week, repeated 52 times",
      "Decisions made on tiredness instead of direction",
      "The specific goal you've now moved three times and stopped telling people about",
      "The low hum of knowing you're operating at maybe 60% of what you're capable of",
      "The money already spent on courses, apps and books that gave you information but no operating system",
    ],
    closer: "Here's the clean way out.",
  },

  /* --- 3. THE SOLUTION --------------------------------------------------- */
  solution: {
    label: "The solution — [The Baseline Method]",
    heading: "Change the conditions. The behaviour follows.",
    intro:
      "[The Baseline Method] is a structured process for rebuilding the conditions of your life so the outcomes you want become the path of least resistance — not a daily fight you have to win.",
    stepsIntro: "It runs in four moves:",
    /* A real sequence — the numbers matter. Keep them in order. */
    steps: [
      {
        number: "01",
        title: "Baseline",
        body: "Get an honest, unflattering read on where you actually are — time, energy, money, relationships, direction. Not where you think you are. Most people skip this and spend a year solving the wrong problem.",
      },
      {
        number: "02",
        title: "Constraint",
        body: "Find the single bottleneck holding the rest of it still. There's almost always one. Working on everything at once is why nothing moves.",
      },
      {
        number: "03",
        title: "Defaults",
        body: "Rebuild the four or five decisions that quietly run your week — what your mornings, your calendar, your inputs and your yeses are set to. You stop relying on discipline because the easy option becomes the right one.",
      },
      {
        number: "04",
        title: "Loop",
        body: "Install a weekly review that catches drift in seven days instead of seven months. This is the part that makes it permanent, and it's the part every other program leaves out.",
      },
    ],
    credibilityLine:
      "Built over [X] years and [Y] one-to-one clients — the same process, run privately at [£/$X] per engagement, now structured so you can run it yourself.",
  },

  /* --- 4. THE COURSE — 8 MODULES ----------------------------------------- */
  course: {
    label: "The course — 8 modules",
    heading: "What you'll actually be able to do.",
    intro:
      "Each module is [X] short lessons plus one worksheet. You finish a module, you finish something.",
    whyLabel: "Why it matters",
    modules: [
      {
        number: "01",
        title: "The Honest Baseline",
        doing:
          "Map your real current state across time, energy, money, health and relationships.",
        why: "You can't fix a life you've never accurately described. Most people are solving a problem they invented.",
      },
      {
        number: "02",
        title: "Direction Before Goals",
        doing:
          "Define what you're actually optimising for — before you set a single target.",
        why: "Hitting the wrong goal costs more than missing the right one.",
      },
      {
        number: "03",
        title: "Finding the Constraint",
        doing:
          "Identify the one bottleneck that's holding everything else in place, and how to test it.",
        why: "Fix the constraint and three other problems disappear on their own.",
      },
      {
        number: "04",
        title: "Rebuilding Your Defaults",
        doing:
          "Redesign the handful of automatic decisions that generate 80% of your week.",
        why: "This is where discipline stops being required.",
      },
      {
        number: "05",
        title: "The Week That Carries the Goal",
        doing:
          "Build a calendar that protects the work instead of burying it, including how to handle the weeks that go wrong.",
        why: "Ambition without a container is just pressure.",
      },
      {
        number: "06",
        title: "Performing Under Pressure",
        doing:
          "Practical regulation tools for the moments that usually derail you — conflict, setbacks, low-energy stretches, self-doubt.",
        why: "Everyone can run the system on a good day. This is for the other days.",
      },
      {
        number: "07",
        title: "The People Layer",
        doing:
          "Reset boundaries, expectations and the conversations you've been avoiding.",
        why: "You can rebuild every habit you own and still get pulled back by one unaddressed relationship.",
      },
      {
        number: "08",
        title: "The Compounding Loop",
        doing:
          "Install the weekly and quarterly review that keeps all of it running twelve months from now.",
        why: "Without this, every program has a shelf life. With it, you never start over again.",
      },
    ],
  },

  /* --- 5. WHY THIS WORKS -------------------------------------------------- */
  whyThisWorks: {
    label: "Why this works",
    heading: "It's structured. That's the whole answer.",
    oldWayHeading: "The old way",
    newWayHeading: "This way",
    /* Each row is one matched pair, read left to right. Keep them paired. */
    comparison: [
      {
        old: "Consume more information, hope insight turns into change",
        new: "One sequence, run in order, built to produce a decision at every step",
      },
      {
        old: "Rely on motivation, which is a mood, not a plan",
        new: "Defaults do the work motivation used to do",
      },
      {
        old: "Work on everything at once",
        new: "One constraint at a time, so progress is visible",
      },
      {
        old: "Set goals with no system to carry them",
        new: "Structure first, goals second",
      },
      {
        old: "Restart from zero every time a hard week hits",
        new: "A weekly loop that catches drift before it becomes a relapse",
      },
      {
        old: "Pay [£/$X,XXX] for one-to-one coaching you have to keep paying for",
        new: "Run it once, own it permanently, revisit it whenever life changes",
      },
    ],
    whyNow: {
      heading: "Why this matters now",
      body: [
        "Coaching stopped being a luxury and started being infrastructure — the same way therapy did fifteen years ago. But the market split in two: [£/$XXX] one-to-one work most people can't sustain, and [£/$29] courses that hand you information and wish you luck.",
        "There's very little in between: a real methodology, structured properly, that you can run yourself.",
        "That's what this is.",
        "And the honest cost of waiting isn't dramatic. It's just another year of the same week — which is exactly how the last one went.",
      ],
    },
  },

  /* --- 6. ABOUT ----------------------------------------------------------- */
  about: {
    label: "About me",
    /* Swap the file in public/images/. Keep width/height matching the real photo. */
    portrait: {
      src: "/images/portrait.jpg",
      alt: "[YOUR PHOTO — editorial, natural light]",
      width: 900,
      height: 1125,
      caption: "[YOUR PHOTO — editorial, natural light]",
    },
    name: "[YOUR NAME]",
    credential: "[CREDENTIAL / TRAINING]",
    body: [
      "[2–3 sentences: who you are and what you did before this. Keep it factual — the credibility comes from specifics, not from the story.]",
      "I've spent [X] years working one-to-one with [SPECIFIC CLIENT TYPE — e.g. founders, senior operators, clinicians]. Same pattern, almost every time: capable people with no shortage of drive, running a life that quietly worked against them.",
      "[The Baseline Method] is what came out of running that process [X] times. This course is that process, structured so you don't need me in the room to use it.",
    ],
    disclaimer:
      "What I'm not: a motivational speaker, a guru, or someone who's going to tell you to visualise harder.",
  },

  /* --- 7. TESTIMONIALS ----------------------------------------------------- */
  testimonials: {
    heading: "What people say",
    /* Add up to 6. Strongest first and last. Every card needs a role and a
       timeframe — unattributed praise reads as invented. */
    items: [
      {
        quote:
          "[Short quote — one specific thing that changed. Two sentences maximum.]",
        name: "[Name or initials]",
        role: "[Role]",
        result: "[Specific result / timeframe]",
      },
      {
        quote: "[Short quote.]",
        name: "[Name or initials]",
        role: "[Role]",
        result: "[Specific result / timeframe]",
      },
      {
        quote: "[Short quote.]",
        name: "[Name or initials]",
        role: "[Role]",
        result: "[Specific result / timeframe]",
      },
      {
        quote: "[Short quote.]",
        name: "[Name or initials]",
        role: "[Role]",
        result: "[Specific result / timeframe]",
      },
    ],
  },

  /* --- 8. PRICING ---------------------------------------------------------- */
  pricing: {
    label: "Pricing",
    heading: "One price. Lifetime access.",
    productName: "[COURSE NAME]",
    /* The price. Also shown in the mobile sticky bar. */
    price: "[£/$XXX]",
    includes: [
      "All 8 modules, [X] lessons, released [immediately / weekly]",
      "[X] worksheets and templates, including the Baseline Audit and the Weekly Loop",
      "Lifetime access, including every future update",
      "[Private community access / [X] group calls — DELETE IF NOT INCLUDED]",
      "[30]-day guarantee",
    ],
    /* Delete this line entirely if you don't offer a payment plan. */
    paymentPlan: "[PAYMENT PLAN — [X] payments of [£/$XX] — DELETE IF NOT OFFERED]",
    ctaMicrocopy: "Instant access · [30]-day guarantee · No subscription",
    forYou: {
      heading: "Who this is for",
      items: [
        "You're already capable and already trying — the gap is structure, not effort",
        "You want a method you can run yourself rather than an ongoing dependency",
        "You're willing to give it [2–3] focused hours a week for [8] weeks",
      ],
    },
    notForYou: {
      heading: "Who this isn't for",
      items: [
        "Anyone looking for motivation rather than a system",
        "Anyone in acute crisis — this is coaching, not therapy or clinical care. [If that's where you are, please speak to a qualified professional first.]",
        "Anyone who wants someone else to do the deciding",
      ],
    },
  },

  /* --- 9. FAQ -------------------------------------------------------------- */
  faq: {
    heading: "FAQ",
    /* The first item is open by default. Opening one closes the others. */
    items: [
      {
        question: "How much time does this take?",
        answer:
          "Around [2–3] hours a week for [8] weeks. Lessons are short — the work is in the worksheets, and most of that work is decisions, not busywork. If you can't find two hours, Module 5 is specifically about that.",
      },
      {
        question: "How is this different from every other course I've bought?",
        answer:
          "Most courses give you information and assume change follows. This one is sequenced to produce a decision and an artefact at every step — you finish with a written baseline, a named constraint, a rebuilt set of defaults and a working weekly loop. If you don't do the worksheets, don't buy it. It won't work as reading material.",
      },
      {
        question: "I've tried coaching before and it didn't stick.",
        answer:
          "That's the most common reason people join. Coaching usually fails at the maintenance stage — the sessions end, and there's no mechanism to catch the drift. Module 8 exists entirely for that.",
      },
      {
        question: "Is this therapy?",
        answer:
          "No. Therapy generally works backwards from what happened to you; coaching works forwards from where you are. They're compatible, and plenty of people do both. If you're dealing with acute mental health difficulties, please work with a qualified clinician — this course isn't a substitute for that.",
      },
      {
        question: "Do I need to be at a certain stage of life to benefit?",
        answer:
          "No specific stage. But it's built for people who are functional and want more, not people looking for a rescue. If you're capable and stuck, you're the target.",
      },
      {
        question: "What if I fall behind?",
        answer:
          "You keep lifetime access, so there's no cohort to fall behind. The material is sequenced, not scheduled. Come back to it in three months if you need to.",
      },
      {
        question: "Is there any live access to you?",
        answer:
          "[YES — [X] group calls per [month], plus the community. / NO — this is a self-paced program. One-to-one work is available separately at [£/$X], but the course is designed to stand alone.]",
      },
      {
        question: "What results should I expect?",
        answer:
          "Honestly: it depends on what you put in. Most people finish the Baseline Audit in week one and describe that alone as the most clarifying hour they've had in a year. Bigger, life-level change typically shows up between month [two] and month [six]. Anyone promising you a fixed outcome on a fixed date is guessing.",
      },
      {
        question: "What if it doesn't work for me?",
        answer:
          "[30] days, full refund, no explanation required. Do the first two modules. If it isn't for you, email [EMAIL] and it's handled.",
      },
      {
        question: "Is there a subscription or upsell after this?",
        answer:
          "No subscription. One payment, lifetime access. [One-to-one coaching exists if you want it later, but nothing in the course is gated behind it.]",
      },
      {
        question: "Can I do this alongside a demanding job?",
        answer:
          "That's who it was built for. Modules 4 and 5 are specifically about constrained time.",
      },
      {
        question: "How do I access it after buying?",
        answer:
          "You'll get login details by email within a minute of purchase. Everything sits in [PLATFORM], on desktop and mobile.",
      },
    ],
  },

  /* --- 10. FINAL CTA -------------------------------------------------------- */
  finalCta: {
    heading:
      "If the last twelve months looked like the twelve before them, that's a structural problem — not a character one.",
    intro:
      "You already have the effort. What's missing is a system that holds when the motivation doesn't.",
    listIntro: "[COURSE NAME] gives you:",
    items: [
      "8 modules and [X] lessons, in the order they need to be done",
      "The Baseline Audit — an honest read on where you actually are",
      "A named constraint, so you stop working on everything at once",
      "Rebuilt defaults, so the right choice becomes the easy one",
      "The Weekly Loop — the maintenance system that makes it permanent",
      "Lifetime access, including every future update",
    ],
    guaranteeHeading: "Risk reducer",
    guarantee:
      "Try it for [30] days. Do the first two modules properly. If it isn't what you needed, email us and you get every penny back — no questions, no form to fill in.",
    ctaMicrocopy: "[£/$XXX] · Instant access · [30]-day guarantee · No subscription",
  },

  /* --- Footer ---------------------------------------------------------------- */
  footer: {
    disclaimer:
      "[MANDATORY DISCLAIMER IF REQUIRED — e.g. \"Individual results vary. This program is educational and is not a substitute for medical or psychological treatment.\"]",
    links: [
      { label: "[Terms]", href: "[/terms]" },
      { label: "[Privacy]", href: "[/privacy]" },
      { label: "[Contact — EMAIL]", href: "[mailto:EMAIL]" },
    ],
    copyright: "© [YEAR] [YOUR NAME / COMPANY]. All rights reserved.",
  },
} as const;

export type Site = typeof site;
