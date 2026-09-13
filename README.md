# qa-kit

A small Claude Code plugin with a command and a subagent for keeping your branch tidy: one summarises what you changed, the other reviews it for bugs before you open a PR.

## What's included

- **`/qa-kit:summarize-changes`** — a slash command that summarises the changes on the current branch. It lists each touched file with a one-line description, sized to paste straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. It returns findings grouped by severity (high, medium, low), each naming the file and what to fix.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes — it will reach for `code-reviewer` automatically.

After editing plugin files, run `/reload-plugins` to pick up changes without restarting.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json         # name + version
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```
