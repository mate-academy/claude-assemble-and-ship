# qa-kit

A small Claude Code plugin with a command and a subagent for everyday QA on your branch: summarizing what changed and reviewing it for bugs.

## What's in here

- `commands/summarize-changes.md` — the `/summarize-changes` slash command. Lists each changed file with a one-line description, short enough to paste into a PR description.
- `agents/code-reviewer.md` — the `code-reviewer` subagent. Reviews recent changes for bugs, missing error handling, and unclear names, and reports findings grouped by severity.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes — it will reach for `code-reviewer` automatically.

After editing plugin files, run `/reload-plugins` to pick up the changes.
