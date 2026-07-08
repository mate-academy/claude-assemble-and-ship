# qa-kit

A small Claude Code plugin for keeping changes reviewable: summarize what changed on a branch, and get a quick bug/naming review of recent edits.

## What it adds

- **`/qa-kit:summarize-changes`** — a slash command that lists each touched file with a one-line description of what changed, sized to paste straight into a PR description.
- **`code-reviewer`** subagent — reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the slash command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes (e.g. "review my recent changes") — it will reach for `code-reviewer` automatically.

After editing plugin files, reload with `/reload-plugins`.
