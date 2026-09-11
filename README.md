## qa-kit

A small Claude Code plugin that bundles two things for reviewing and describing your changes before you open a PR.

### What's in here

- **`/qa-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch: each touched file with a one-line description, short enough to paste into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names, and reports back grouped by severity (high, medium, low).

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes (e.g. "review my recent changes") — it will reach for the `code-reviewer` subagent automatically.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.
