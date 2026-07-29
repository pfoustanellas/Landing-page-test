import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 7. Flat panels: one hairline, 2px radius, no shadow, nothing
 * floating. Role and timeframe stay visible as placeholders — unattributed
 * praise reads as invented, so the gap should be obvious, not hidden. */

export function Testimonials() {
  const { testimonials } = site;

  return (
    <Section id="testimonials" heading={testimonials.heading}>
      <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
        {testimonials.items.map((item, i) => (
          <Reveal
            as="li"
            key={i}
            delay={i * 70}
            className="flex flex-col justify-between gap-6 rounded-[2px] border border-rule p-6 md:p-8"
          >
            <blockquote className="t-lead t-bright">
              <p>
                <Copy>{`“${item.quote}”`}</Copy>
              </p>
            </blockquote>
            <p className="t-small text-muted">
              <Copy>{item.name}</Copy>
              <span aria-hidden="true" className="text-muted/45">
                {" · "}
              </span>
              <Copy>{item.role}</Copy>
              <span aria-hidden="true" className="text-muted/45">
                {" · "}
              </span>
              <Copy>{item.result}</Copy>
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
