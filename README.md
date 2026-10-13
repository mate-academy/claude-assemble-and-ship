# qa-kit

A small Claude Code plugin that helps with pull-request prep and code quality.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Summarises the current branch: each touched file with a one-line description, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high, medium, low). |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes; it should delegate to `code-reviewer`.
- After editing plugin files, run `/reload-plugins`.

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
