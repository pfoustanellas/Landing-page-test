import type { Metadata } from "next";
import type { ReactNode } from "react";

import { instrumentSans, newsreader } from "@/lib/fonts";
import { site } from "@/content/site";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

import "./globals.css";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${newsreader.variable} ${instrumentSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-[2px] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        {/* The shell holds the whole document so the ledger rule can run its
            full height. See DESIGN.md section 5. */}
        <div className="shell">
          <span className="ledger" aria-hidden="true" />
          <div className="inset">
            {children}
            <Footer />
          </div>
        </div>

        <StickyCta />
      </body>
    </html>
  );
}
