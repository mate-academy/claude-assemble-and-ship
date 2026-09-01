# qa-kit

A small Claude Code plugin with two components for reviewing and summarising your branch changes.

## What's in here

- **`/qa-kit:summarize-changes`** — a slash command that summarises what changed on the current branch: each touched file with a one-line description, short enough to paste into a PR description.
- **`code-reviewer`** — a subagent that reviews recent code changes for bugs, missing error handling, and unclear names, returning findings grouped by severity (high/medium/low).

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the slash command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes — it will reach for `code-reviewer` automatically.

After making edits to the plugin, reload with `/reload-plugins`.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # plugin manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
