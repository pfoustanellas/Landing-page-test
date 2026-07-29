/* A value straight from the copy that still has its [SQUARE BRACKETS] is not a
 * usable URL. Putting one in an href produces a live link to a 404 — which is
 * worse than no link at all, because it looks like it works until someone
 * clicks it. Anything that turns content into a destination checks this first. */

export function isUnfilled(value: string): boolean {
  return value.includes("[");
}
