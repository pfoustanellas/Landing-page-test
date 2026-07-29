import { CTA_LABEL, CTA_URL } from "@/content/site";
import { Copy } from "./Copy";

/* The single primary call to action. Same label, same styling, five instances:
 * hero, after the framework, after why-this-works, in pricing, in the final
 * section. It is the only filled element on the page. */

export function Cta({ microcopy, id }: { microcopy?: string; id?: string }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <a className="btn" href={CTA_URL} id={id}>
        {CTA_LABEL}
      </a>
      {microcopy ? (
        <p className="t-small text-muted">
          <Copy>{microcopy}</Copy>
        </p>
      ) : null}
    </div>
  );
}
