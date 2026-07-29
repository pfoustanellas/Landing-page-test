import { site } from "@/content/site";
import { Copy } from "./Copy";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* Section 4. Eight ruled rows hanging off the ledger — a register, not a card
 * grid. The second genuine sequence on the page, so numerals are earned here.
 * "What you'll do" and "Why it matters" are a real definition list. */

export function Course() {
  const { course } = site;

  return (
    <Section id="course" label={course.label} heading={course.heading}>
      <Reveal as="p" className="t-lead measure">
        <Copy>{course.intro}</Copy>
      </Reveal>

      {/* One band per module. Below 1024 the numeral hangs beside the title and
          the prose runs full width; from 1024 the row becomes three columns so
          "what you'll do" and "why it matters" sit side by side instead of
          stacking. */}
      <ol className="reg-list mt-[clamp(1.75rem,1.5rem+1.05vw,2.5rem)]">
        {course.modules.map((module, i) => (
          <Reveal
            as="li"
            key={module.number}
            delay={i * 50}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-t border-rule py-5 last:border-b sm:grid-cols-[4rem_minmax(0,1fr)] sm:py-6 lg:grid-cols-[4.5rem_minmax(0,30ch)_minmax(0,1fr)] lg:gap-x-10"
          >
            <span aria-hidden="true" className="t-numeral lg:row-span-2">
              {module.number}
            </span>

            <h3 className="t-h3 max-w-[40ch] self-center lg:self-auto">
              <span className="sr-only">{`Module ${module.number}: `}</span>
              <Copy>{module.title}</Copy>
            </h3>

            <p className="col-span-2 mt-3 max-w-[58ch] lg:col-span-1 lg:col-start-2 lg:mt-2">
              <Copy>{module.doing}</Copy>
            </p>

            <dl className="col-span-2 mt-4 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <dt className="t-label">
                <Copy>{course.whyLabel}</Copy>
              </dt>
              <dd className="mt-2 max-w-[46ch]">
                <Copy>{module.why}</Copy>
              </dd>
            </dl>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
