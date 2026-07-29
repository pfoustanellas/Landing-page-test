import { site } from "@/content/site";
import { isUnfilled } from "@/lib/placeholder";
import { Copy } from "./Copy";

export function Footer() {
  const { footer } = site;

  return (
    /* Extra bottom padding on mobile so the sticky bar never covers the last line. */
    <footer className="border-t border-rule pt-10 pb-24 md:pb-10">
      <p className="t-small measure text-muted">
        <Copy>{footer.disclaimer}</Copy>
      </p>

      {/* A link whose href is still [/terms] would resolve to a real URL and
          land on a 404, so unfilled links render as plain text until they point
          somewhere. */}
      <ul className="t-small mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {footer.links.map((link) => (
          <li key={link.label}>
            {isUnfilled(link.href) ? (
              <span className="text-muted">
                <Copy>{link.label}</Copy>
              </span>
            ) : (
              <a
                className="underline decoration-rule underline-offset-4 transition-colors hover:text-paper hover:decoration-muted"
                href={link.href}
              >
                <Copy>{link.label}</Copy>
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="t-small mt-6 text-muted">
        <Copy>{footer.copyright}</Copy>
      </p>
    </footer>
  );
}
