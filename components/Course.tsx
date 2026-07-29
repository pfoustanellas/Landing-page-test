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

      <ol className="reg-list mt-[clamp(2.5rem,2rem+2vw,3.5rem)]">
        {course.modules.map((module, i) => (
          <Reveal
            as="li"
            key={module.number}
            delay={i * 50}
            className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-t border-rule py-7 last:border-b sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-x-8 sm:py-9"
          >
            <span aria-hidden="true" className="t-numeral">
              {module.number}
            </span>

            <div>
              <h3 className="t-h3 max-w-[40ch]">
                <span className="sr-only">{`Module ${module.number}: `}</span>
                <Copy>{module.title}</Copy>
              </h3>

              <p className="mt-3 max-w-[54ch]">
                <Copy>{module.doing}</Copy>
              </p>

              <dl className="mt-5 gap-x-8 md:grid md:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="t-label md:mt-[0.55rem]">
                  <Copy>{course.whyLabel}</Copy>
                </dt>
                <dd className="mt-2 max-w-[48ch] md:mt-0">
                  <Copy>{module.why}</Copy>
                </dd>
              </dl>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
