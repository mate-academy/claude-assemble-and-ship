## qa-kit

A small Claude Code plugin that bundles a branch-summary command and a code-review subagent.

### What's in here

- `commands/summarize-changes.md` — `/qa-kit:summarize-changes` summarises what changed on the current branch, file by file, in a format short enough to paste into a PR description.
- `agents/code-reviewer.md` — a `code-reviewer` subagent that reviews recent changes for bugs, missing error handling, and unclear names, grouped by severity.

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then either:

- run `/qa-kit:summarize-changes` to get a PR-ready summary of the current branch, or
- ask Claude to review your recent changes — it will reach for the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes.
