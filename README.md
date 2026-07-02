## qa-kit

A small Claude Code plugin with two components for keeping a branch's changes tidy and reviewed.

### What's included

- **`/qa-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch. Lists each touched file with a one-line description, short enough to paste into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear naming. Claude reaches for it automatically when you ask it to review your changes.

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then either:

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of the current branch.
- Ask Claude to "review my recent changes" and it will invoke the `code-reviewer` subagent.

After editing a component, run `/reload-plugins` to pick up the changes without restarting.

### Structure

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```
