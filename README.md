# qa-kit

A small Claude Code plugin that helps you wrap up a branch: summarise what changed, and get a quick code review.

## What's included

### Command: `/qa-kit:summarize-changes`

Summarises the changes on the current branch. It lists each touched file with a one-line description of what changed, short enough to paste into a pull-request description.

### Subagent: `code-reviewer`

Reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It is read-only (`Read`, `Grep`, `Glob`).

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of your branch.
- Ask Claude to "review my recent changes" and it will delegate to `code-reviewer`.

After editing the plugin, run `/reload-plugins` to pick up the changes.

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
