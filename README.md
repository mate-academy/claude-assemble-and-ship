# assemble-and-ship

A Claude Code plugin that helps you wrap up a coding session: review your changes, then summarize them for a pull request.

## What's included

- **`/assemble-and-ship:summarize-changes`** — a slash command that lists every file touched on the current branch with a one-line description of what changed, formatted to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recently changed code for bugs, missing error handling, and unclear naming. Claude reaches for it automatically when you ask for a review of your recent changes.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/assemble-and-ship:summarize-changes` to get a PR-ready summary of your branch.
- Ask Claude to review your recent changes to trigger the `code-reviewer` subagent.

After making changes to the plugin, run `/reload-plugins` to pick them up.
