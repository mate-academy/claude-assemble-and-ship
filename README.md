# qa-kit

A small Claude Code plugin that helps you check your work before opening a pull request.

## What it adds

| Component | Type | What it does |
| --- | --- | --- |
| `/qa-kit:summarize-changes` | Command | Lists each file touched on the current branch with a one-line description, short enough to paste into a PR description |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` on a branch with changes.
- Ask Claude to review your recent changes (for example "review my recent changes"). It should hand the work to `code-reviewer`.
- After editing plugin files, run `/reload-plugins`.

## Layout

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
