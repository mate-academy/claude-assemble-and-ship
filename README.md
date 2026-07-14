# qa-kit

A small Claude Code plugin that bundles a couple of QA helpers for reviewing and describing changes on a branch.

## What's included

- **`/qa-kit:summarize-changes`** — a slash command that lists every file touched on the current branch with a one-line description of what changed, short enough to paste straight into a PR description.
- **`code-reviewer` subagent** — reviews recent changes for bugs, missing error handling, and unclear names, returning findings grouped by severity (high/medium/low).

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

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes — it will reach for the `code-reviewer` subagent automatically.

After editing plugin files, run `/reload-plugins` to pick up changes.
