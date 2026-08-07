## qa-kit

A small Claude Code plugin with two components for wrapping up a branch: a quick change summary and an automated code review.

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

- `/qa-kit:summarize-changes` — summarizes what changed on the current branch: lists each touched file with a one-line description, sized to paste straight into a pull-request description.

### Agents

- `code-reviewer` — reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high, medium, low), one sentence per issue. Claude reaches for this agent automatically when you ask for a review of recent changes.

### Usage

1. Load the plugin locally from the repo root:
   ```
   claude --plugin-dir .
   ```
2. Run the command:
   ```
   /qa-kit:summarize-changes
   ```
3. Trigger the agent by asking Claude to review your recent changes — it will invoke `code-reviewer`.
4. After editing plugin files, run `/reload-plugins` to pick up the changes.
