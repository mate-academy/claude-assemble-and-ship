# qa-kit

A small Claude Code plugin for quality checks on your work: summarize what changed on a branch, and get a quick code review of recent edits.

## What's inside

| Component | Type | What it does |
|---|---|---|
| `summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of the change, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high, medium, low). |

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json      # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Install / load locally

From the repo root:

```bash
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` to pick up the changes.

## Usage

**Summarize branch changes**

```
/qa-kit:summarize-changes
```

**Review recent changes**

Ask Claude something like *"Review my recent changes"* and it will hand the task to the `code-reviewer` subagent (read-only tools: Read, Grep, Glob).
