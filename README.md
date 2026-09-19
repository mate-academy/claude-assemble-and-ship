# qa-kit

A Claude Code plugin with two components for reviewing and summarising work on a branch.

## What it does

- **`/qa-kit:summarize-changes`** — a slash command that summarises the changes on the current branch. It lists each touched file with a one-line description, short enough to paste straight into a pull-request description.
- **`code-reviewer`** — a subagent that reviews recent code changes for bugs, missing error handling, and unclear names, and reports back a short list grouped by severity (high, medium, low).

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command directly: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes — it will reach for `code-reviewer` automatically.

After making changes to the plugin, run `/reload-plugins` to pick them up.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```
