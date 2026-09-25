## qa-kit

A small Claude Code plugin with two components for keeping changes reviewed and documented as you work.

### What's in here

- **`/qa-kit:summarize-changes`** (command) — summarizes what changed on the current branch: lists each touched file with a one-line description, formatted to paste straight into a pull-request description.
- **`code-reviewer`** (agent) — a subagent that reviews recently changed code for bugs, missing error handling, and unclear names, and reports findings grouped by severity (high/medium/low).

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes, e.g.:

```
Please review my recent changes.
```

Claude will reach for the `code-reviewer` agent automatically.

After editing a component, run `/reload-plugins` to pick up the changes without restarting.

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
