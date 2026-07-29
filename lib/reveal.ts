/* One shared observer for every scroll-in element on the page.
 *
 * IntersectionObserver alone is not enough: it only reports threshold
 * *crossings*, so an element that skips the whole viewport between two frames
 * — flick-scrolling on a phone, dragging the scrollbar, pressing End — never
 * fires a callback and would stay at opacity 0 for good. The rAF-throttled
 * sweep below is the safety net: anything already past the fold is revealed
 * whether or not the observer saw it.
 *
 * Both the observer and the listeners tear themselves down once every element
 * has been revealed, so nothing is left running on the main thread. */

type Reveal = () => void;

const pending = new Map<Element, Reveal>();

let observer: IntersectionObserver | null = null;
let queued = false;

function release(element: Element) {
  const reveal = pending.get(element);
  if (!reveal) return;
  pending.delete(element);
  observer?.unobserve(element);
  reveal();
}

function teardown() {
  if (pending.size > 0) return;
  observer?.disconnect();
  observer = null;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
}

function sweep() {
  queued = false;
  const fold = window.innerHeight * 0.88;
  for (const element of [...pending.keys()]) {
    if (element.getBoundingClientRect().top < fold) release(element);
  }
  teardown();
}

function onScroll() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(sweep);
}

export function registerReveal(element: Element, reveal: Reveal): () => void {
  const noMotion =
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (noMotion) {
    reveal();
    return () => {};
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) release(entry.target);
        }
        teardown();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  pending.set(element, reveal);
  observer.observe(element);

  return () => {
    pending.delete(element);
    observer?.unobserve(element);
  };
}
