# qa-kit

A small Claude Code plugin for lightweight QA on a branch: summarize what
changed, then get a focused review of it.

## What's inside

- **`/qa-kit:summarize-changes`** — a slash command that summarizes the
  changes on the current branch: each touched file, with a one-line
  description of what changed, short enough to paste into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs,
  missing error handling, and unclear names, and reports back a short list
  grouped by severity (high, medium, low).

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then either:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes — it will reach for the
  `code-reviewer` subagent on its own.

After editing plugin files, run `/reload-plugins` to pick up the changes.
