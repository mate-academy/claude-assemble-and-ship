# qa-kit

A small Claude Code plugin that helps you wrap up a branch: summarise what changed, and get a quick code review before you open a pull request.

## What it adds

| Component | Type | Purpose |
|-----------|------|---------|
| `/qa-kit:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of the change, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It is read-only (`Read`, `Grep`, `Glob`). |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

After editing any component, run `/reload-plugins`.

### Summarise a branch

```
/qa-kit:summarize-changes
```

Paste the output straight into your PR description.

### Review recent changes

Ask Claude in plain language, for example:

> Review my recent changes.

Claude will hand the work to the `code-reviewer` subagent, which is also meant to run right after you write or edit code.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`; the component folders sit at the repo root.

## Validation

A **Validate plugin** GitHub Action runs on every push. It checks that `plugin.json` exists with a `name` and that at least one component is present at the root.
