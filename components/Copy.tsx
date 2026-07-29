import { Fragment } from "react";

/* Renders a string from content/site.ts and gives anything wrapped in
 * [SQUARE BRACKETS] a dotted clay underline, so unfilled placeholders are
 * visible on the page rather than hiding in plain text.
 *
 * The brackets themselves are kept — they are the signal that a real value is
 * still missing. Handles nesting, e.g. "[A / [X] group calls — DELETE IF NOT
 * INCLUDED]", which a simple regex would split in the wrong place. */

type Token = { text: string; placeholder: boolean };

/* Typesetting only — no words are changed. Straight apostrophes and quotes are
 * rendered as the real typographic marks, which matters at 84px in a serif.
 * If you ever want the copy back exactly as typed, delete this function and the
 * call to it below. */
export function typeset(input: string): string {
  return input
    .replace(/'/g, "’")
    .replace(/"/g, (match, index: number, whole: string) =>
      index === 0 || /[\s([{–—]/.test(whole[index - 1]) ? "“" : "”",
    );
}

export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let buffer = "";
  let depth = 0;

  for (const char of input) {
    if (char === "[") {
      if (depth === 0 && buffer) {
        tokens.push({ text: buffer, placeholder: false });
        buffer = "";
      }
      depth += 1;
    }

    buffer += char;

    if (char === "]" && depth > 0) {
      depth -= 1;
      if (depth === 0) {
        tokens.push({ text: buffer, placeholder: true });
        buffer = "";
      }
    }
  }

  if (buffer) tokens.push({ text: buffer, placeholder: depth > 0 });

  return tokens;
}

export function Copy({ children }: { children: string }) {
  return (
    <>
      {tokenize(typeset(children)).map((token, i) => (
        <Fragment key={i}>
          {token.placeholder ? <span className="ph">{token.text}</span> : token.text}
        </Fragment>
      ))}
    </>
  );
}
