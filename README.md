# qa-kit

A small Claude Code plugin for quality checks before you open a pull request. It adds a slash command that summarises your branch and a subagent that reviews recent changes.

**Version:** 0.1.0

## What's included

| Component | Type | What it does |
|-----------|------|--------------|
| `summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of what changed. Short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high / medium / low), each with the file and a one-sentence fix. Read-only (`Read`, `Grep`, `Glob`), runs on Sonnet. |

## Installation

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` inside Claude Code to pick up the changes.

## Usage

### Summarise your branch

```
/qa-kit:summarize-changes
```

Plugin commands are namespaced with the plugin name, so use `/qa-kit:summarize-changes`, not `/summarize-changes`.

### Review your changes

Ask Claude for a review in plain language, for example:

```
Review my recent changes
```

Claude delegates to the `code-reviewer` subagent automatically. You can also ask for it by name: *"Use the code-reviewer agent on my changes."*

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── .github/
    ├── workflows/validate.yml
    └── scripts/validate-plugin.js
```

## Validation

Every push runs the **Validate plugin** GitHub Action. It checks that:

- `.claude-plugin/plugin.json` exists, is valid JSON, and has a `name`
- the component folders sit at the repo root, not inside `.claude-plugin/`
- at least one component is present
