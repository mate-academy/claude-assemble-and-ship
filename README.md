# qa-kit

A small Claude Code plugin for reviewing your work. It adds a read-only code-reviewer subagent and a slash command that summarises the changes on your branch.

## What's included

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file changed on the current branch with a one-line description, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high, medium, low). It is read-only (`Read`, `Grep`, `Glob`). |

## Usage

Load the plugin locally:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of your branch.
- Ask Claude to review your recent changes and it will use `code-reviewer`.
- Run `/reload-plugins` after editing any plugin file.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```

## Version

0.1.0
