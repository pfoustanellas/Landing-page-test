import { CTA_LABEL, CTA_URL } from "@/content/site";
import { isUnfilled } from "@/lib/placeholder";
import { Copy } from "./Copy";

/* The single primary call to action. Same label, same styling, five instances:
 * hero, after the framework, after why-this-works, in pricing, and in the final
 * section. It is the only filled element on the page.
 *
 * Until CTA_URL is a real link it renders as an inert button with the
 * placeholder shown beneath it. An <a href="[CHECKOUT / PAYMENT LINK URL]">
 * is a relative URL: it would look like a working button and land every visitor
 * on a 404. */

export function Cta({ microcopy }: { microcopy?: string }) {
  const unset = isUnfilled(CTA_URL);

  return (
    <div className="flex w-full flex-col items-start gap-4 sm:w-auto">
      {unset ? (
        <button type="button" className="btn" disabled>
          {CTA_LABEL}
        </button>
      ) : (
        <a className="btn" href={CTA_URL}>
          {CTA_LABEL}
        </a>
      )}

      {unset ? (
        <p className="t-small text-muted">
          Link not set — <Copy>{CTA_URL}</Copy> in <code>content/site.ts</code>
        </p>
      ) : null}

      {microcopy ? (
        <p className="t-small text-muted">
          <Copy>{microcopy}</Copy>
        </p>
      ) : null}
    </div>
  );
}
