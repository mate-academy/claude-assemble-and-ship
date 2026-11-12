# qa-kit

A small Claude Code plugin that helps you review and describe your work.

## What it adds

| Component | Type | Description |
|-----------|------|-------------|
| `/qa-kit:summarize-changes` | Slash command | Summarises what changed on the current branch: one line per touched file, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, returning a list grouped by severity (high, medium, low). |

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" and it will delegate to `code-reviewer`.
- Run `/reload-plugins` after editing any component.

## Structure

```
.claude-plugin/plugin.json   # manifest
commands/summarize-changes.md
agents/code-reviewer.md
```
