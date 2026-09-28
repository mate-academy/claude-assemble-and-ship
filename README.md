# qa-kit

A small Claude Code plugin for checking your work before you open a pull request.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description — short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity (high / medium / low). |

## Installation

Load it locally from the repo root:

```bash
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` to pick up the changes.

## Usage

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review code:** ask Claude something like *"review my recent changes"* — it delegates to the `code-reviewer` subagent (read-only: `Read`, `Grep`, `Glob`).

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
