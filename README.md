# qa-kit

A small Claude Code plugin that helps you wrap up a piece of work: summarise what changed on a branch and get a quick code review.

## What it adds

| Component | Type | What it does |
| --- | --- | --- |
| `/qa-kit:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns findings grouped by severity (high, medium, low). |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of the current branch.
- Ask Claude to "review my recent changes" and it will delegate to the `code-reviewer` subagent.

After editing a component, run `/reload-plugins` to pick up the changes.

## Layout

```
.
├── .claude-plugin/plugin.json   # manifest
├── commands/summarize-changes.md
├── agents/code-reviewer.md
└── README.md
```
