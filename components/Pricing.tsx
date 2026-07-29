import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 8. One price, stated plainly. No comparison anchor, no crossed-out
 * "was", no urgency device — the copy makes the argument, the layout stays
 * out of its way. */

export function Pricing() {
  const { pricing } = site;

  return (
    <Section id="pricing" label={pricing.label} heading={pricing.heading}>
      <div className="border-t border-rule pt-8">
        <Reveal>
          <p className="t-label">
            <Copy>{pricing.productName}</Copy>
          </p>
          <p className="t-h2 mt-3">
            <Copy>{pricing.price}</Copy>
          </p>
        </Reveal>

        <ul className="rule-list measure mt-8">
          {pricing.includes.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 50}>
              <Copy>{item}</Copy>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="t-small measure mt-6 text-muted">
          <Copy>{pricing.paymentPlan}</Copy>
        </Reveal>

        <Reveal className="mt-[clamp(2.25rem,1.8rem+2vw,3rem)]">
          <Cta microcopy={pricing.ctaMicrocopy} />
        </Reveal>
      </div>

      <div className="mt-[clamp(3.5rem,2.8rem+3vw,6rem)] grid gap-[clamp(2.5rem,2rem+2vw,3.5rem)] md:grid-cols-2 md:gap-12">
        {[pricing.forYou, pricing.notForYou].map((group) => (
          <div key={group.heading}>
            <Reveal as="h3" className="t-label">
              <Copy>{group.heading}</Copy>
            </Reveal>
            <ul className="rule-list mt-5">
              {group.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50}>
                  <Copy>{item}</Copy>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
