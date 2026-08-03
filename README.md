# qa-kit

A small Claude Code plugin for branch QA: see what you changed, then get it reviewed.

## What it adds

| Component | Name | What it does |
|---|---|---|
| Command | `/qa-kit:summarize-changes` | Summarises the changes on the current branch — each touched file with a one-line description, short enough to paste into a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling, and unclear names; reports a list grouped by severity (high/medium/low). Read-only (Read, Grep, Glob) and runs on Sonnet. |

## Structure

```
.claude-plugin/plugin.json   # the manifest (name + version)
commands/summarize-changes.md
agents/code-reviewer.md
```

## Use it

From a repo where you want the helpers:

```
claude --plugin-dir path/to/this/repo
```

- Run the command: `/qa-kit:summarize-changes`
- Trigger the reviewer: just ask — "review my recent changes" — and Claude delegates to `code-reviewer`.
- After editing the plugin, run `/reload-plugins` to pick up changes.
