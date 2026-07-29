import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 2. Body copy in muted; the one line the argument turns on is
 * promoted to paper. That promotion is the page's only emphasis mechanism. */

export function Problem() {
  const { problem } = site;

  return (
    <Section id="problem" label={problem.label} heading={problem.heading}>
      <div className="measure space-y-5">
        {problem.body.map((paragraph, i) => (
          <Reveal as="p" key={i} delay={i * 60}>
            <Copy>{paragraph}</Copy>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        <p className="t-h3 measure text-balance">
          <Copy>{problem.pullquote}</Copy>
        </p>
      </Reveal>

      <div className="mt-[clamp(3rem,2.4rem+2.5vw,4.5rem)]">
        <Reveal as="h3" className="t-label">
          <Copy>{problem.costHeading}</Copy>
        </Reveal>

        <ul className="rule-list measure mt-6">
          {problem.costs.map((cost, i) => (
            <Reveal as="li" key={cost} delay={i * 60}>
              <Copy>{cost}</Copy>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        <p className="t-lead t-bright measure">
          <Copy>{problem.closer}</Copy>
        </p>
      </Reveal>
    </Section>
  );
}
