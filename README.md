# qa-kit

A small Claude Code plugin for wrapping up a branch: summarize what changed, and get a quick review before you open a PR.

## What it does

`qa-kit` bundles two components:

- **`/qa-kit:summarize-changes`** — a slash command that lists every file touched on the current branch with a one-line description of the change, sized to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear naming, and reports back a severity-grouped list (high/medium/low) with a one-sentence fix for each item.

## Installation

From the repo root:

```
claude --plugin-dir .
```

After making changes to the plugin, reload it with `/reload-plugins`.

## Usage

**Summarize changes:**

```
/qa-kit:summarize-changes
```

Run this on a branch with commits to get a per-file summary of what changed.

**Code review:**

There's no slash command for this — just ask Claude to review your recent changes (e.g. "review what I just wrote" or "check my changes for bugs"), and it will invoke the `code-reviewer` subagent automatically.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json         # plugin manifest (name, version)
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```
