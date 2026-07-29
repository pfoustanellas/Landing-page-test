"use client";

import { useEffect, useState } from "react";

import { CTA_LABEL, CTA_URL, site } from "@/content/site";
import { Copy } from "./Copy";

/* Mobile only (<768px). Appears once the hero has scrolled past, holding the
 * price and the same CTA. Flat, one hairline, no shadow, no animation beyond a
 * short fade. Watches a sentinel element rather than the scroll position, so
 * there is no scroll handler on the main thread. */

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show once the sentinel has left the viewport upwards.
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-surface pb-[env(safe-area-inset-bottom)] transition-opacity duration-200 md:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <p className="t-small text-paper">
          <Copy>{site.pricing.price}</Copy>
        </p>
        <a className="btn !w-auto min-h-[2.75rem] !px-5 text-[0.9375rem]" href={CTA_URL} tabIndex={visible ? 0 : -1}>
          {CTA_LABEL}
        </a>
      </div>
    </div>
  );
}
