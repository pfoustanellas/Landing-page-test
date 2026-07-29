import Image from "next/image";

import { site } from "@/content/site";
import { Copy, typeset } from "./Copy";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

/* Section 1. The only h1 on the page.
 * The headline is set as two lines — one sentence each — because the copy is
 * built as a correction ("not this / but this") and the break is where the
 * argument turns. Line breaks only; no words changed. */

export function Hero() {
  const { hero, brand } = site;
  const lines = typeset(hero.headline).split(/(?<=\.)\s+/);

  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-[clamp(2.25rem,1.75rem+2.1vw,4rem)] pb-0"
    >
      <Reveal className="reg">
        <p className="t-label">
          <Copy>{brand.courseName}</Copy>
        </p>
      </Reveal>

      <div className="mt-[clamp(1.75rem,1.45rem+1.3vw,2.75rem)] grid gap-[clamp(2.5rem,1.5rem+4vw,4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-16">
        <div>
          <Reveal>
            <h1 id="hero-heading" className="t-hero">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="t-lead measure mt-[clamp(1.25rem,1.1rem+0.66vw,1.75rem)]">
              <Copy>{hero.subheadline}</Copy>
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-[clamp(1.5rem,1.32rem+0.75vw,2.25rem)]">
            <Cta microcopy={hero.ctaMicrocopy} />
          </Reveal>
        </div>

        <Reveal as="figure" delay={120} className="lg:pt-2">
          <div className="relative overflow-hidden rounded-[2px] border border-rule">
            <Image
              src={hero.media.src}
              alt={hero.media.alt}
              width={hero.media.width}
              height={hero.media.height}
              priority
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="block h-auto max-h-[19rem] w-full object-cover sm:max-h-none"
            />
          </div>
          <figcaption className="t-small mt-3 text-muted">
            <Copy>{hero.media.caption}</Copy>
          </figcaption>
        </Reveal>
      </div>

      {/* Watched by the mobile sticky bar. */}
      <div id="hero-sentinel" aria-hidden="true" className="h-px" />

      <Reveal className="mt-[clamp(2rem,1.72rem+1.22vw,3rem)] border-y border-rule py-3.5">
        <ul className="t-small flex flex-wrap gap-x-3 gap-y-1 text-muted">
          {/* The separator trails its own item so a wrapped line can never
              start with a stray middot. */}
          {hero.credibility.map((item, i) => (
            <li key={item}>
              <Copy>{item}</Copy>
              {i < hero.credibility.length - 1 ? (
                <span aria-hidden="true" className="ml-3 text-muted/45">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
