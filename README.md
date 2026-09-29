# qa-kit

A small Claude Code plugin that bundles two review helpers for wrapping up a branch: a command that drafts the PR summary, and a subagent that checks the code itself.

## What's in it

- **`/qa-kit:summarize-changes`** — summarises what changed on the current branch: every file touched, with a one-line description of the change, kept short enough to paste straight into a pull-request description.
- **`code-reviewer` subagent** — reviews recently changed code for bugs, missing error handling, and unclear names. Claude reaches for it automatically when you ask for a review of your recent changes; results come back as a short list grouped by severity (high/medium/low), with the file and a one-line fix for each item.

## Using it

1. Load the plugin: `claude --plugin-dir .`
2. Run the command: `/qa-kit:summarize-changes`
3. Trigger the subagent by asking Claude to review your recent changes (e.g. "review what I just changed") — it should reach for `code-reviewer` on its own.
4. After editing a component file, run `/reload-plugins` to pick up the change without restarting the session.
