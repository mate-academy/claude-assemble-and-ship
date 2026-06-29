# qa-kit

A Claude Code plugin that adds a branch-summary command and an automated code-review agent to your workflow.

## What it does

**qa-kit** bundles two quality-assurance tools:

1. A slash command that produces a concise summary of every file changed on the current branch — ready to paste into a pull-request description.
2. A subagent that reviews recent changes for bugs, missing error handling, and unclear names, then returns a severity-grouped finding list.

## Commands

### `/qa-kit:summarize-changes`

Summarises the changes on the current branch.

Lists each file that was touched and gives a one-line description of what changed in it. The output is intentionally short so you can paste it straight into a PR description.

**Usage**

```
/qa-kit:summarize-changes
```

Run it from any directory inside the repo after making your changes.

## Agents

### `code-reviewer`

Reviews recently changed code for bugs and unclear names.

The agent reads the diff, then returns a short finding list grouped by severity:

| Severity | Meaning |
|----------|---------|
| **high** | Likely bug or missing error handling — fix before merging |
| **medium** | Code smell or risky pattern worth addressing |
| **low** | Style or naming issue that would improve readability |

Each finding names the file and describes what to fix in one sentence.

**Usage**

Ask Claude to review your recent changes in natural language:

```
Review my recent changes.
```

or

```
Can you check what I just wrote for bugs?
```

Claude will reach for the `code-reviewer` agent automatically.

## How to load the plugin

From the repo root, pass the directory to Claude Code:

```
claude --plugin-dir .
```

After editing any component, reload without restarting:

```
/reload-plugins
```

## Plugin structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest (name + version)
├── commands/
│   └── summarize-changes.md # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md     # code-reviewer subagent
└── README.md
```
