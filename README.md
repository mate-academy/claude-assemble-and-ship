# assemble-and-ship

A Claude Code plugin that helps you review and summarise code changes before shipping.

## What it does

- Summarises every file changed on the current branch in a format ready to paste into a pull-request description.
- Reviews recent code changes for bugs, missing error handling, and unclear names, grouped by severity.

## Components

### Command — `summarize-changes`

Lists each file touched on the current branch with a one-line description of what changed.

**Usage**

```
/assemble-and-ship:summarize-changes
```

Run this before opening a PR to get a concise diff summary.

### Agent — `code-reviewer`

A subagent (powered by Claude Sonnet) that reads your recent changes and returns a short list of findings grouped by severity: **high**, **medium**, and **low**. Each finding names the file and describes the fix in one sentence.

**Usage**

Ask Claude to review your recent changes in plain language:

```
Please review my recent changes.
```

Claude will automatically reach for the `code-reviewer` agent.

## Installation

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

After making edits, reload without restarting:

```
/reload-plugins
```

## Plugin structure

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
