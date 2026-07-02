# qa-kit

A small QA toolkit plugin for Claude Code: a slash command for summarising branch changes and a subagent for reviewing them.

## What's included

### `/qa-kit:summarize-changes`

Summarises what changed on the current branch — one line per touched file, sized to paste straight into a pull-request description.

### `code-reviewer` subagent

Reviews recent changes for bugs, missing error handling, and unclear names, and reports findings grouped by severity (high, medium, low). Claude reaches for it automatically when you ask it to review your recent changes.

## Usage

From the repo root:

```
claude --plugin-dir .
```

Then run the command:

```
/qa-kit:summarize-changes
```

Or trigger the subagent by asking Claude to review your recent changes.

After editing plugin files, run `/reload-plugins` to pick up the changes.
