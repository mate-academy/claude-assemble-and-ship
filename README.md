# qa-kit

A small Claude Code plugin for everyday QA and review work. It bundles a slash command that summarises a branch's changes and a subagent that reviews recent code for bugs and unclear names.

## What it adds

| Component | Type | Purpose |
| --- | --- | --- |
| `/qa-kit:summarize-changes` | Slash command (`commands/summarize-changes.md`) | Lists every file touched on the current branch with a one-line description of each change, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent (`agents/code-reviewer.md`) | Reviews recent changes and returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. Uses read-only tools (`Read`, `Grep`, `Glob`). |

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # plugin manifest (name, version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`. The component folders sit at the root.

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review recent changes:** ask Claude to review your recent changes, for example "review what I just changed". Claude should pick up the `code-reviewer` subagent.

After editing any component, run `/reload-plugins` to pick up the changes without restarting.

## Validation

The repo's **Validate plugin** workflow (`.github/workflows/validate.yml`) checks that:

- `.claude-plugin/plugin.json` exists, is valid JSON, and has a `name`
- component folders are at the root, not inside `.claude-plugin/`
- at least one component is present
