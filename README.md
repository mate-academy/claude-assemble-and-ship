# Claude Assemble and Ship Plugin

A small [Claude Code](https://claude.com/claude-code) plugin that bundles the
review-and-ship helpers you reach for at the end of a change: a subagent that
reviews your edits and a slash command that writes the pull-request summary.

## What it adds

| Type | Name | Purpose |
| --- | --- | --- |
| Command | `/summarize-changes` | Summarise the changes on the current branch into a PR-ready description. |
| Agent | `code-reviewer` | Reviews recent code edits for bugs, missing error handling, and unclear names. |

## Setup

Load the plugin from a local clone:

```
claude --plugin-dir /path/to/claude-assemble-and-ship
```

Run `/reload-plugins` after editing any component. To confirm the structure is
valid, run `node .github/scripts/validate-plugin.js` from the repo root.

## Using it

### `/qa-kit:summarize-changes`

Run it from within a Claude Code session on the branch you want to describe:

```
/qa-kit:summarize-changes
```

It lists each touched file with a one-line note on what changed, kept short
enough to paste straight into a pull-request description.

### `code-reviewer` agent

Invoke it right after writing or editing code:

```
Use the code-reviewer agent to check my changes.
```

It reads the recent changes (using `Read`, `Grep`, and `Glob` only — it never
edits) and returns a short list grouped by severity (high, medium, low), naming
the file and the one-sentence fix for each item.
