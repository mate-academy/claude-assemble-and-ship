# qa-kit

A small Claude Code plugin for pull-request prep: describe what changed on a branch, and get a second pair of eyes on it before you open the PR.

## What it adds

### `/qa-kit:summarize-changes`

A slash command that walks the current branch and returns a per-file summary — one line each, short enough to paste straight into a PR description.

```
/qa-kit:summarize-changes
```

### `code-reviewer` (subagent)

A read-only reviewer (`Read`, `Grep`, `Glob`) that looks over recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity — high, medium, low — naming the file and the fix for each item.

You don't invoke it directly; just ask for a review and Claude reaches for it:

```
Review my recent changes
```

## Install

From the repo root:

```bash
claude --plugin-dir .
```

Run `/reload-plugins` after editing any component to pick the changes up without restarting.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`; the component folders sit at the repo root.
