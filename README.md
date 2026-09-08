## qa-kit

A small Claude Code plugin with a command and a subagent for reviewing branch changes.

### What's included

- `/qa-kit:summarize-changes` — a slash command that summarizes what changed on the current branch, formatted to paste into a pull-request description.
- `code-reviewer` — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. Claude reaches for it automatically when asked to review recent code.

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to review your recent changes, and it will invoke the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes.

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
