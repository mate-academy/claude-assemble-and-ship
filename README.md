## building-blocks

A small Claude Code plugin that adds a slash command and a subagent for reviewing and summarizing branch changes.

### What's included

- `/building-blocks:summarize-changes` — a slash command that summarizes what changed on the current branch, listing each touched file with a one-line description, formatted to paste into a pull-request description.
- `code-reviewer` — a subagent that reviews recent changes for bugs, missing error handling, and unclear names, and reports findings grouped by severity. Claude reaches for it automatically after code is written or edited, or you can ask for a review explicitly.

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

### Using it locally

From the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/building-blocks:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes to trigger the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up changes without restarting.
