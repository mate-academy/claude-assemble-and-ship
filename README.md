# qa-kit

A tiny Claude Code plugin that helps with the last mile before a pull request:
summarise what changed on your branch, then get a quick review of that code.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| `/qa-kit:summarize-changes` | slash command | Lists every file touched on the current branch with a one-line note per file, short enough to paste into a PR description. |
| `code-reviewer` | subagent | Reads the recent changes and returns a short list of bugs, missing error handling, and unclear names, grouped by severity. |

## Install

From the repo root:

```
claude --plugin-dir .
```

After editing any component, run `/reload-plugins`.

## Usage

**Summarise a branch:**

```
/qa-kit:summarize-changes
```

**Review recent changes:** just ask Claude in plain language, e.g.

> Review my recent changes.

Claude will hand off to the `code-reviewer` subagent.

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
