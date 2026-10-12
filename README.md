# qa-kit

A small Claude Code plugin that helps with reviewing and summarising code changes.

## What it adds

| Component | Type | Purpose |
|-----------|------|---------|
| `/qa-kit:summarize-changes` | Slash command | Summarises the changes on the current branch: lists each touched file with a one-line description, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high, medium, low). |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review code:** ask Claude to review your recent changes (e.g. "review my recent changes") and it will delegate to `code-reviewer`.

After editing any component, run `/reload-plugins`.
