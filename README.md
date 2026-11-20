# qa-kit

A small Claude Code plugin for checking your work before opening a pull request.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description — short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names; returns findings grouped by severity (high / medium / low). |

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

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent: ask Claude something like *"Review my recent changes"* — it delegates to `code-reviewer`.
- After editing any component, run `/reload-plugins`.
