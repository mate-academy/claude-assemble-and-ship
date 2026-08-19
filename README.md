## qa-kit

A small Claude Code plugin for reviewing your work before opening a pull request.

### What's in here

- **`/qa-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch, in a form short enough to paste into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. Claude reaches for it automatically when you ask for a review of your recent changes.

### Usage

Load the plugin locally:

```
claude --plugin-dir .
```

Then either:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes, or
- Ask Claude to "review my recent changes" to trigger the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.

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
