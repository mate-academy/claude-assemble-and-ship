# qa-kit

A small Claude Code plugin that helps you wrap up a piece of work: summarise what changed, and get a quick code review.

## Components

| Type | Name | What it does |
|------|------|--------------|
| Command | `/qa-kit:summarize-changes` | Lists each file touched on the current branch with a one-line description, short enough to paste into a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names. Returns findings grouped by severity (high / medium / low). |

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" and it will delegate to the `code-reviewer` subagent.
- After editing the plugin, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json   # manifest
commands/summarize-changes.md
agents/code-reviewer.md
```
