"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { registerReveal } from "@/lib/reveal";

/* Scroll-in motion: opacity plus an 8px translate, 400ms, nothing else.
 * `delay` staggers siblings where the stagger clarifies reading order.
 *
 * The transition itself lives in globals.css, which is also where
 * prefers-reduced-motion switches the whole system off. The observing is
 * shared across the page — see lib/reveal.ts. */

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return registerReveal(node, () => setShown(true));
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
