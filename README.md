## qa-kit

A small Claude Code plugin with two components for reviewing and summarizing branch changes.

### What's in here

- **`/qa-kit:summarize-changes`** — a slash command. Summarizes what changed on the current branch: lists each touched file with a one-line description, short enough to paste into a pull-request description.
- **`code-reviewer`** — a subagent. Reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

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

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command directly: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes (e.g. "review my recent changes") — it will reach for `code-reviewer`.

After editing any component, run `/reload-plugins` to pick up the changes without restarting.
