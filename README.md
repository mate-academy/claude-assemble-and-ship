## qa-kit

A Claude Code plugin that bundles a code-review subagent with a change-summary command.

### What it does

- Helps you quickly see what changed in the current branch before opening a PR.
- Automatically reviews recently changed code for bugs, missing error handling, and unclear names.

### What it adds

- **`/qa-kit:summarize-changes`** — a slash command that summarizes the changes on the current branch: lists each touched file with a one-line description of what changed. Short enough to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recently changed code, looking for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command manually: `/qa-kit:summarize-changes`
- Ask Claude to review your recent changes (e.g. "review my recent changes") — it will reach for the `code-reviewer` subagent on its own.

After editing plugin files, run `/reload-plugins` to pick up the changes.
