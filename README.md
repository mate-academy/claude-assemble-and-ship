# qa-kit

A small Claude Code plugin for quick QA on a branch's changes: summarize what changed, then get a focused code review.

## What it adds

- **`/qa-kit:summarize-changes`** — a slash command that lists each changed file on the current branch with a one-line description, short enough to paste straight into a pull-request description.
- **`code-reviewer`** subagent — reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes — it will reach for the `code-reviewer` subagent automatically.

After editing plugin files, run `/reload-plugins` to pick up changes without restarting.
