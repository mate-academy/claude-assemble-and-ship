## qa-kit

A small Claude Code plugin for wrapping up a branch: summarize what changed, and get a quick review of the changes before opening a pull request.

### What's in here

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

### Commands

- **`/qa-kit:summarize-changes`** — summarizes the changes on the current branch. Lists each touched file with a one-line description, kept short enough to paste straight into a pull-request description.

### Agents

- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. Returns a short list grouped by severity (high, medium, low), with the file and a one-sentence fix for each item. Claude reaches for this automatically when you ask it to review your recent changes, or you can invoke it directly.

### Usage

1. Load the plugin locally from the repo root:
   ```
   claude --plugin-dir .
   ```
2. Run the command:
   ```
   /qa-kit:summarize-changes
   ```
3. Trigger the subagent by asking Claude to review your recent changes — it should reach for `code-reviewer`.
4. After making edits to the plugin, run `/reload-plugins` to pick up the changes.
