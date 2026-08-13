# qa-kit

A Claude Code plugin with two lightweight QA helpers: a slash command for summarizing branch changes and a subagent for reviewing them.

## What's included

- **`/qa-kit:summarize-changes`** (command) — summarizes what changed on the current branch: each touched file with a one-line description, short enough to paste into a PR description.
- **`code-reviewer`** (agent) — reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

## Load and test locally

From the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command: `/qa-kit:summarize-changes`
- Trigger the agent: ask Claude to review your recent changes — it should reach for `code-reviewer`

After making edits to either component, run `/reload-plugins` to pick up the changes without restarting.

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
