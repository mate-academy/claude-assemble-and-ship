## qa-kit

A small Claude Code plugin with two components for reviewing and summarizing changes on a branch.

### What it does

- **`/summarize-changes`** — a slash command that lists each touched file with a one-line description of what changed, formatted to paste straight into a pull-request description.
- **`code-reviewer`** — a subagent Claude reaches for automatically after you write or edit code (or when you ask for a review). It checks recent changes for bugs, missing error handling, and unclear names, and returns a short list grouped by severity.

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

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes — it should reach for `code-reviewer` on its own.

After making edits to the plugin, run `/reload-plugins` to pick them up without restarting.
