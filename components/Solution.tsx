import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 3. One of only two places on the page where numbered markers appear,
 * because the four moves are a genuine sequence that must be run in order. */

export function Solution() {
  const { solution } = site;

  return (
    <Section id="solution" label={solution.label} heading={solution.heading}>
      <div className="measure space-y-5">
        <Reveal as="p">
          <Copy>{solution.intro}</Copy>
        </Reveal>
        <Reveal as="p" delay={60} className="t-bright">
          <Copy>{solution.stepsIntro}</Copy>
        </Reveal>
      </div>

      <ol className="reg-list mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        {solution.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 70}
            className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-t border-rule py-6 last:border-b sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-x-8 sm:py-8"
          >
            <span aria-hidden="true" className="t-numeral">
              {step.number}
            </span>
            <div className="max-w-[54ch]">
              <h3 className="t-h3">
                <span className="sr-only">{`Step ${step.number}: `}</span>
                <Copy>{step.title}</Copy>
              </h3>
              <p className="mt-3">
                <Copy>{step.body}</Copy>
              </p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        <p className="t-small measure text-muted">
          <Copy>{solution.credibilityLine}</Copy>
        </p>
      </Reveal>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]" delay={60}>
        <Cta />
      </Reveal>
    </Section>
  );
}
