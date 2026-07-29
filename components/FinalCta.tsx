import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 10. The recap. Same button, same label, same styling as the other
 * four — nothing is scaled up or coloured differently to shout at the end. */

export function FinalCta() {
  const { finalCta } = site;

  return (
    <Section id="final" heading={finalCta.heading}>
      <Reveal as="p" className="t-lead measure">
        <Copy>{finalCta.intro}</Copy>
      </Reveal>

      <Reveal as="p" className="t-label mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        <Copy>{finalCta.listIntro}</Copy>
      </Reveal>

      <ul className="rule-list measure mt-5">
        {finalCta.items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 50}>
            <Copy>{item}</Copy>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        <h3 className="t-label">
          <Copy>{finalCta.guaranteeHeading}</Copy>
        </h3>
        <p className="measure mt-4">
          <Copy>{finalCta.guarantee}</Copy>
        </p>
      </Reveal>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]" delay={60}>
        <Cta microcopy={finalCta.ctaMicrocopy} />
      </Reveal>
    </Section>
  );
}
