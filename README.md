# qa-kit

A small Claude Code plugin for reviewing your work.

## Components

- **`/qa-kit:summarize-changes`** — slash command that summarises what changed on the current branch, file by file, in a form ready to paste into a pull-request description.
- **`code-reviewer`** — subagent that reviews recent changes for bugs, missing error handling and unclear names, returning findings grouped by severity.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

1. Run `/qa-kit:summarize-changes`.
2. Ask Claude to "review my recent changes" — it will delegate to `code-reviewer`.

Use `/reload-plugins` after editing components.

## Structure

```
.claude-plugin/plugin.json
commands/summarize-changes.md
agents/code-reviewer.md
```
