# review-kit

A small Claude Code plugin for wrapping up a branch: summarize what changed, and get a second pair of eyes on it before you open a PR.

## What's inside

- **`/review-kit:summarize-changes`** — a slash command that lists every file touched on the current branch with a one-line description of what changed, short enough to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names, and reports back grouped by severity (high/medium/low). Claude reaches for it automatically when you ask for a review of your recent changes.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then either:

- Run `/review-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" and it will invoke the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.
