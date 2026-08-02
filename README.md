# qa-kit

A Claude Code plugin with two components for reviewing and summarising code changes.

## Commands

### `/qa-kit:summarize-changes`

Summarises every file touched on the current branch with a one-line description per file — ready to paste into a pull-request description.

## Agents

### `code-reviewer`

Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high / medium / low).

Ask Claude to review your recent changes and it will reach for this agent automatically.

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then run the command:

```
/qa-kit:summarize-changes
```

Or trigger the subagent by asking:

> "Review my recent changes."
