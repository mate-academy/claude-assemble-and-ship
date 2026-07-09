## qa-kit

A small Claude Code plugin with two components for reviewing and summarizing branch changes.

### What's in here

- **Command** — `/qa-kit:summarize-changes`: summarizes what changed on the current branch, listing each touched file with a one-line description, formatted to paste straight into a pull-request description.
- **Subagent** — `code-reviewer`: reviews recent changes for bugs, missing error handling, and unclear names, and reports back a short list grouped by severity (high/medium/low).

### Structure

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

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:
- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes (it should reach for `code-reviewer`)

Run `/reload-plugins` after making edits to pick up changes.
