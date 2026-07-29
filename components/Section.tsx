import type { ReactNode } from "react";
import { Copy } from "./Copy";
import { Reveal } from "./Reveal";

/* Every section registers against the ledger rule with a tick and a label,
 * then states its heading. Nothing is centred; everything is left-registered. */

export function Section({
  id,
  label,
  heading,
  children,
}: {
  id: string;
  label?: string;
  heading: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId}>
      <Reveal as="header" className="reg">
        {label ? (
          <p className="t-label">
            <Copy>{label}</Copy>
          </p>
        ) : null}
        <h2 id={headingId} className={`t-h2 measure ${label ? "mt-6" : ""}`}>
          <Copy>{heading}</Copy>
        </h2>
      </Reveal>
      <div className="mt-[clamp(2rem,1.6rem+1.7vw,3.5rem)]">{children}</div>
    </section>
  );
}
