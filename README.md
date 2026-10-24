# qa-kit

A small Claude Code plugin to help you get a branch ready for a pull request: summarise what changed, then get a quick code review.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| `/qa-kit:summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description of the change. The output is short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high, medium, low). |

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json        # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Usage

1. From the repo root, load the plugin:
   ```
   claude --plugin-dir .
   ```
2. Summarise your branch:
   ```
   /qa-kit:summarize-changes
   ```
3. Get a review — just ask Claude, e.g. "review my recent changes". It will hand the task to the `code-reviewer` subagent.

After editing any plugin file, run `/reload-plugins` to pick up the changes.
