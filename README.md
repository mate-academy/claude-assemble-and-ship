## qa-kit

A Claude Code plugin with a couple of quick QA helpers: summarizing branch changes for a PR description, and reviewing recent edits for bugs and unclear names.

### What's included
#### Commands
- **`/qa-kit:summarize-changes`** (command) — lists each file touched on the current branch with a one-line description of the change, sized to paste straight into a pull-request description.
#### Agents
- **`code-reviewer`** (agent) — reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high, medium, low).

### Setup

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of your branch.
- Ask Claude to review your recent changes — it will reach for the `code-reviewer` agent automatically.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.

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
