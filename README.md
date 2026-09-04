## qa-kit

A small Claude Code plugin with two lightweight QA helpers: a slash command
that summarises branch changes for a PR description, and a subagent that
reviews recent edits for bugs and unclear naming.

### What's in here

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

### Commands

- `/qa-kit:summarize-changes` — summarises the changes on the current branch:
  lists each touched file with a one-line description of what changed, short
  enough to paste straight into a pull-request description.

### Agents

- `code-reviewer` — reviews recent code changes for bugs, missing error
  handling, and unclear names, and reports back a short list grouped by
  severity (high, medium, low). Claude reaches for it automatically when you
  ask for a review of your recent changes, or you can invoke it directly.

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent: ask Claude something like "review my recent changes"

After editing plugin files, run `/reload-plugins` to pick up the changes
without restarting the session.
