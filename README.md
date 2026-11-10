# qa-kit

A small Claude Code plugin that helps with quality assurance on your branch changes.

## What it adds

| Component | Type | Name | What it does |
|---|---|---|---|
| `commands/summarize-changes.md` | Slash command | `/qa-kit:summarize-changes` | Summarises the changes on the current branch, one line per touched file, short enough for a PR description. |
| `agents/code-reviewer.md` | Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names; returns findings grouped by severity (high/medium/low). |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" and it will delegate to the `code-reviewer` subagent.
- Use `/reload-plugins` after editing any component.

## Structure

```
.
├── .claude-plugin/plugin.json   # manifest (name + version)
├── commands/summarize-changes.md
├── agents/code-reviewer.md
└── README.md
```
