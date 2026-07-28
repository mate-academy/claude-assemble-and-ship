# qa-kit

A small Claude Code plugin with two components for reviewing and summarizing changes on a branch.

## What it does

- **`/qa-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch. It lists each touched file with a one-line description, sized to paste directly into a pull-request description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. It returns findings grouped by severity (high, medium, low), with the file and a one-sentence fix for each item.

## Commands

| Command | Description |
|---|---|
| `/qa-kit:summarize-changes` | Summarizes the diff on the current branch into a PR-ready list of changed files. |

## Agents

| Agent | Description |
|---|---|
| `code-reviewer` | Reviews recent changes for bugs and unclear names; runs with `Read`, `Grep`, `Glob` on the `sonnet` model. |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command directly: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes (e.g. "review what I just changed") — Claude will reach for `code-reviewer` automatically, since it matches the description.

After editing any component, run `/reload-plugins` to pick up the changes without restarting.
