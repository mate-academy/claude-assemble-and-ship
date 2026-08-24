# qa-kit

A small Claude Code plugin for wrapping up a branch: summarize what changed, then get a quick code review before opening a PR.

## What it does

- **`/qa-kit:summarize-changes`** — a slash command that lists every file touched on the current branch with a one-line description of the change, short enough to paste straight into a PR description.
- **`code-reviewer`** subagent — reviews recent changes for bugs, missing error handling, and unclear names, and reports back grouped by severity (high/medium/low).

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

Run the slash command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes (e.g. "review my recent changes") — it will reach for `code-reviewer` automatically.

After editing plugin files, reload with `/reload-plugins`.

## Structure

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
