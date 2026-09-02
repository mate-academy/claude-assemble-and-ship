# QA Kit

QA Kit is a small Claude Code plugin for preparing a branch for review. It bundles a concise change-summary command with a read-only code-review subagent.

## Included tools

- `/qa-kit:summarize-changes` lists every changed file and produces a compact summary suitable for a pull-request description.
- `code-reviewer` examines recent changes for bugs, missing error handling, and unclear names, then reports findings by severity.

## Run locally

From this repository, start Claude Code with:

```sh
claude --plugin-dir .
```

Run `/qa-kit:summarize-changes` to test the command. To trigger the agent, ask Claude to review the recent changes. After editing a plugin file, run `/reload-plugins` before testing it again.

The manifest lives at `.claude-plugin/plugin.json`; component directories sit beside `.claude-plugin/` at the repository root.
