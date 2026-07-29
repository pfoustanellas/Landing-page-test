import localFont from "next/font/local";

/* Two self-hosted variable faces, subset to the characters this page actually
 * uses, preloaded, served from our own origin. No Google Fonts CDN request is
 * made at any point. See DESIGN.md section 2.
 *
 * Both are roman only — the design uses no italics, which keeps the page to
 * exactly two font files (82 KB total).
 *
 * adjustFontFallback generates a size-adjusted local fallback from each font's
 * own metrics, so there is no layout shift while the webfont loads. */

export const newsreader = localFont({
  src: "../public/fonts/newsreader-var.woff2",
  variable: "--font-newsreader",
  display: "swap",
  weight: "300 500",
  style: "normal",
  preload: true,
  adjustFontFallback: "Times New Roman",
});

export const instrumentSans = localFont({
  src: "../public/fonts/instrument-sans-var.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
  style: "normal",
  preload: true,
  adjustFontFallback: "Arial",
});
