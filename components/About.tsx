import Image from "next/image";

import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 6. Portrait plus bio. The portrait is a plain framed rectangle —
 * no rounded avatar, no float, no shadow. */

export function About() {
  const { about } = site;

  return (
    <Section id="about" label={about.label} heading={about.name}>
      <Reveal as="p" className="t-label -mt-4 mb-10">
        <Copy>{about.credential}</Copy>
      </Reveal>

      <div className="grid gap-[clamp(2rem,1.4rem+2.6vw,3.5rem)] md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-12">
        <Reveal as="figure">
          <div className="overflow-hidden rounded-[2px] border border-rule">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              width={about.portrait.width}
              height={about.portrait.height}
              sizes="(min-width: 768px) 15rem, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="t-small mt-3 text-muted">
            <Copy>{about.portrait.caption}</Copy>
          </figcaption>
        </Reveal>

        <div>
          <div className="measure space-y-5">
            {about.body.map((paragraph, i) => (
              <Reveal as="p" key={i} delay={i * 60}>
                <Copy>{paragraph}</Copy>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 border-t border-rule pt-6">
            <p className="measure t-bright">
              <Copy>{about.disclaimer}</Copy>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
