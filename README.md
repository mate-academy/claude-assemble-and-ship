## qa-kit

A Claude Code plugin with two components for reviewing and summarising changes on a branch.

### What's in here

- `/qa-kit:summarize-changes` — a slash command that summarises what changed on the current branch, formatted to paste into a pull-request description.
- `code-reviewer` — a subagent that reviews recent changes for bugs, missing error handling, and unclear names, and reports findings grouped by severity.

### Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # name + version (the manifest)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

### Usage

Load it locally with `claude --plugin-dir .` (use `/reload-plugins` after edits).

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent: ask Claude to review your recent changes — it will reach for `code-reviewer`.
