## qa-kit

A small Claude Code plugin for wrapping up a change: summarize what you did, then get a quick review before you open the PR.

### What's in here

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```

- **`/qa-kit:summarize-changes`** — a slash command that summarizes the changes on the current branch: every file touched, with a one-line description of what changed, short enough to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names, and reports back a short list grouped by severity (high, medium, low).

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of the current branch.
- Ask Claude to "review my recent changes" (or similar) to have it reach for the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.
