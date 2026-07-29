"use client";

import { useState } from "react";

import { site } from "@/content/site";
import { Copy } from "./Copy";

/* Section 9. Native <details>/<summary>, so keyboard and screen-reader
 * behaviour comes for free. Single-open, first item open by default.
 * The open/close height transition is progressive enhancement via
 * ::details-content (see globals.css) — instant where unsupported. */

export function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);
  const { faq } = site;

  return (
    <div className="faq measure">
      {faq.items.map((item, i) => (
        <details
          key={item.question}
          open={openIndex === i}
          /* React needs onToggle for a11y tooling; the click handler below is
             what actually enforces single-open. */
          onToggle={(event) => {
            if (event.currentTarget.open) setOpenIndex(i);
          }}
        >
          <summary
            onClick={(event) => {
              event.preventDefault();
              setOpenIndex(openIndex === i ? -1 : i);
            }}
          >
            <span className="t-h3">
              <Copy>{item.question}</Copy>
            </span>
            <span className="faq-mark" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>
              <Copy>{item.answer}</Copy>
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
