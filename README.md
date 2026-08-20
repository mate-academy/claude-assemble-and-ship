# qa-kit

A small Claude Code plugin for quick branch QA: summarize what changed, then get it reviewed.


## What it does

- **`/qa-kit:summarize-changes`** — summarizes the changes on the current branch. Lists each touched file with a one-line description of what changed, short enough to paste straight into a pull-request description.
- **`code-reviewer` subagent** — reviews recent changes for bugs, missing error handling, and unclear names. Returns a short list grouped by severity (high/medium/low), with the file and a one-sentence fix for each item. Claude reaches for it automatically when asked to review recent changes, or invoke it directly.

## Usage

From the repo root:

```sh
claude --plugin-dir .
```

Then, inside that session:

```
/qa-kit:summarize-changes
```

or just ask Claude to review your recent changes — it will use the `code-reviewer` subagent.

After editing anything under `commands/`, `agents/`, or `.claude-plugin/plugin.json`, run `/reload-plugins` to pick up the changes without restarting the session.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # name + version (the manifest)
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```
