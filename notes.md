## Prediction

I added a `greet` function in a new `scripts/greet.js` file and renamed its parameter from `name` to `person`.

## Claude's summary

Summarize what I've changed, and flag anything that looks unintended:

- **`scripts/greet.js`** (new file) — adds a `greet(person)` function that returns a `Hello, <person>!` string, plus a `console.log(greet("qa-kit"))` call to demo it.
- **`README.md`** (modified) — appends a new closing line: "Fun fact: this plugin was assembled from two ready-made components." **This looks unintended/out of place** — it's a trivia aside tacked onto usage instructions, unrelated to the `scripts/greet.js` work, and reads like a stray edit rather than a deliberate documentation change.

## Did it catch the stray change?

Yes — Claude correctly flagged the README "Fun fact" line as the unintended stray edit, separate from the `scripts/greet.js` work I predicted.
