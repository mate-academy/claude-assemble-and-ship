# qa-kit

A Claude Code plugin for working with code changes: a slash command that summarises what changed on a branch, and a code-reviewer subagent that reviews your recent edits.

## What it adds

- **`/qa-kit:summarize-changes`** — a slash command that summarises the changes on the current branch. It lists each file that was touched with a one-line description of what changed, and keeps the output short enough to paste into a pull-request description.
- **`code-reviewer`** — a subagent that reviews changed code for bugs, missing error handling, and unclear names. It returns a short list of findings grouped by severity (high, medium, low). Ask Claude to review your recent changes and it will use this agent.

## How to use it

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then run the command by its namespaced name:

```bash
/qa-kit:summarize-changes
```

To trigger the subagent, just ask Claude to review your recent changes — it should reach for `code-reviewer` on its own.

Use `/reload-plugins` after editing the plugin's files.
