# qa-kit

A small Claude Code plugin that helps you summarise and review code changes.

## What it adds

| Component | Type | Description |
|-----------|------|-------------|
| `/qa-kit:summarize-changes` | Slash command | Summarises the changes on the current branch: lists each touched file with a one-line description, short enough for a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns findings grouped by severity (high, medium, low). |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude: "Review my recent changes" (it delegates to `code-reviewer`).
- After editing components, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json   # manifest
commands/summarize-changes.md
agents/code-reviewer.md
```
