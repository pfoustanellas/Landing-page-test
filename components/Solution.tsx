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
      <div className="measure space-y-4">
        <Reveal as="p">
          <Copy>{solution.intro}</Copy>
        </Reveal>
        <Reveal as="p" delay={60} className="t-bright">
          <Copy>{solution.stepsIntro}</Copy>
        </Reveal>
      </div>

      <ol className="reg-list mt-[clamp(1.75rem,1.5rem+1.05vw,2.5rem)]">
        {solution.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 70}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-t border-rule py-5 last:border-b sm:grid-cols-[4rem_minmax(0,1fr)] sm:py-6 lg:grid-cols-[4.5rem_minmax(0,22ch)_minmax(0,1fr)] lg:gap-x-10"
          >
            <span aria-hidden="true" className="t-numeral">
              {step.number}
            </span>
            <h3 className="t-h3 self-center lg:self-auto">
              <span className="sr-only">{`Step ${step.number}: `}</span>
              <Copy>{step.title}</Copy>
            </h3>
            <p className="col-span-2 mt-3 max-w-[62ch] lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:mt-0">
              <Copy>{step.body}</Copy>
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-[clamp(1.75rem,1.5rem+1.05vw,2.5rem)]">
        <p className="t-small measure text-muted">
          <Copy>{solution.credibilityLine}</Copy>
        </p>
      </Reveal>

      <Reveal className="mt-[clamp(1.75rem,1.5rem+1.05vw,2.5rem)]" delay={60}>
        <Cta />
      </Reveal>
    </Section>
  );
}
