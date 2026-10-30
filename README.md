# Plugin README

This plugin adds two AI-assisted tools to your workflow:

- **`code-reviewer`** — reviews recent code changes for bugs, missing error handling, and unclear names.
- **`summarize-changes`** — summarizes the changes on the current branch for use in a pull request description.

## What it does

This plugin helps you in two common situations after making code changes:

1. **Review the code**  
   The `code-reviewer` agent checks recent changes and returns a short list of issues grouped by severity.

2. **Summarize the work**  
   The `summarize-changes` command creates a concise, file-by-file summary of what changed, short enough to paste into a pull request description.

## Commands included

### `code-reviewer`

**Description:** Reviews changed code for bugs and unclear names. Use right after writing or editing code.

**Tools used:** `Read`, `Grep`, `Glob`

**Model:** `sonnet`

**How it works:**
- Looks at recent changes
- Checks for bugs, missing error handling, and unclear names
- Returns findings grouped by severity:
  - high
  - medium
  - low

**Example output:**
- **High** — `src/auth.js`: the token check can fail before error handling is applied.
- **Medium** — `src/api.js`: a variable name is unclear and should be renamed.
- **Low** — `src/utils.js`: an unused variable can be removed.

### `summarize-changes`

**Description:** Summarise the changes on the current branch.

**How it works:**
- Lists each file that was touched
- Gives a one-line description of what changed in each file
- Keeps the result short enough to paste into a pull request description

**Example output:**
- `src/auth.js` — Added token expiry validation.
- `src/api.js` — Improved error handling and renamed variables.
- `README.md` — Documented the new workflow.

## How to use it

1. Make your code changes.
2. Run **`code-reviewer`** to check for problems.
3. Fix any issues that matter.
4. Run **`summarize-changes`** to generate a short summary of the branch.
5. Paste the summary into your pull request description.

## When to use each tool

- Use **`code-reviewer`** right after writing or editing code.
- Use **`summarize-changes`** when you want a clean summary of your branch changes.

## Notes

- `code-reviewer` is for reviewing code, not editing it.
- `summarize-changes` should be used when you want a short, human-readable changelog for a PR.
- Both tools are designed to save time and make code review easier.