# qa-kit

A small Claude Code plugin with two QA-focused helpers: a slash command for summarizing branch changes, and a subagent for reviewing them.

## What's included

- **`/qa-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch. Lists each touched file with a one-line description, sized to paste directly into a pull-request description.
- **`code-reviewer`** subagent — reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high, medium, low), with the file and a one-sentence fix for each item. Claude reaches for it automatically when asked to review recent changes, or it can be invoked directly.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes — it will use `code-reviewer`.

After making changes to the plugin, reload with `/reload-plugins`.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
