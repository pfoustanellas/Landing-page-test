import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 5. A real comparison, not two stacked lists: six matched pairs in a
 * genuine <table>, read across a shared row rule. On mobile the pairing
 * survives the stack — each pair stays one bordered block with both sides
 * labelled, so the swap is still the thing you read. */

export function WhyThisWorks() {
  const { whyThisWorks } = site;

  return (
    <Section id="why-this-works" label={whyThisWorks.label} heading={whyThisWorks.heading}>
      <Reveal>
        <table className="cmp">
          <caption className="sr-only">
            The old way compared with this way, six matched pairs
          </caption>
          <thead>
            <tr>
              <th scope="col">{whyThisWorks.oldWayHeading}</th>
              <th scope="col">{whyThisWorks.newWayHeading}</th>
            </tr>
          </thead>
          <tbody>
            {whyThisWorks.comparison.map((pair) => (
              <tr key={pair.old}>
                <td className="cmp-old">
                  <span className="cmp-tag" aria-hidden="true">
                    {whyThisWorks.oldWayHeading}
                  </span>
                  <Copy>{pair.old}</Copy>
                </td>
                <td className="cmp-new">
                  <span className="cmp-tag" aria-hidden="true">
                    {whyThisWorks.newWayHeading}
                  </span>
                  <Copy>{pair.new}</Copy>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <div className="mt-[clamp(2.5rem,2.1rem+1.69vw,3.75rem)]">
        <Reveal as="h3" className="t-label">
          <Copy>{whyThisWorks.whyNow.heading}</Copy>
        </Reveal>

        <div className="measure mt-6 space-y-4">
          {whyThisWorks.whyNow.body.map((paragraph, i) => (
            <Reveal as="p" key={i} delay={i * 60} className={i === 2 ? "t-lead t-bright" : ""}>
              <Copy>{paragraph}</Copy>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-[clamp(1.75rem,1.5rem+1.05vw,2.5rem)]">
        <Cta />
      </Reveal>
    </Section>
  );
}
