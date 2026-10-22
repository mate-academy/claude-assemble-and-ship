# qa-kit

A small Claude Code plugin that helps you review and summarise your work before opening a pull request.

## What it adds

| Component | Type | Purpose |
|-----------|------|---------|
| `/qa-kit:summarize-changes` | Slash command | Summarises what changed on the current branch: one line per touched file, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high, medium, low). It is read-only (Read, Grep, Glob). |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review code:** ask Claude to review your recent changes (for example, "review my recent changes"). It should delegate to the `code-reviewer` subagent.
- After editing plugin files, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json   # manifest (name + version)
commands/summarize-changes.md
agents/code-reviewer.md
```
