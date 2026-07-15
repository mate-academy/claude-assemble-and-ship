# qa-kit

A small Claude Code plugin with two QA helpers for working on a branch: one summarizes what changed, the other reviews your recent edits.

## What's inside

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest (name + version)
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

## Components

### `/qa-kit:summarize-changes` (slash command)
Summarizes the changes on the current branch — lists each touched file with a
one-line description, short enough to paste into a pull-request description.

### `code-reviewer` (subagent)
A careful code reviewer that inspects recent changes for bugs, missing error
handling, and unclear names, then returns a short list grouped by severity
(high / medium / low). Claude reaches for it automatically when you ask for a
review; it has read-only access (`Read`, `Grep`, `Glob`).

## Install & use

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then:

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent: ask Claude to *"review my recent changes"* — it should
  reach for `code-reviewer`.

After editing any plugin file, run `/reload-plugins` to pick up the changes.
