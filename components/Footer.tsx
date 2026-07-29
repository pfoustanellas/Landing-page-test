import { site } from "@/content/site";
import { Copy } from "./Copy";

export function Footer() {
  const { footer } = site;

  return (
    /* Extra bottom padding on mobile so the sticky bar never covers the last line. */
    <footer className="border-t border-rule pt-12 pb-28 md:pb-12">
      <p className="t-small measure text-muted">
        <Copy>{footer.disclaimer}</Copy>
      </p>

      <ul className="t-small mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {footer.links.map((link) => (
          <li key={link.label}>
            <a
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-paper hover:decoration-muted"
              href={link.href}
            >
              <Copy>{link.label}</Copy>
            </a>
          </li>
        ))}
      </ul>

      <p className="t-small mt-8 text-muted">
        <Copy>{footer.copyright}</Copy>
      </p>
    </footer>
  );
}
