# qa-kit

A small Claude Code plugin for wrapping up a branch: summarise what changed and get a quick review before opening a pull request.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity (high, medium, low). |

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

1. From the repo root, load the plugin:
   ```bash
   claude --plugin-dir .
   ```
2. Summarise the branch: `/qa-kit:summarize-changes`
3. Get a review: ask Claude to "review my recent changes" and it delegates to the `code-reviewer` subagent.
4. After editing the plugin, run `/reload-plugins`.
