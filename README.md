# qa-kit

A Claude Code plugin that bundles small QA helpers — a slash command for summarising branch changes and a subagent for reviewing code.

## What it does

- **Summarise changes** — lists every file touched on the current branch with a one-line description. Great for pasting straight into a pull-request description.
- **Code review** — a subagent that inspects recent changes for bugs, missing error handling, and unclear names, returning findings grouped by severity.

## Components

| Component | Type | How it's invoked |
|-----------|------|------------------|
| `summarize-changes` | Slash command | `/qa-kit:summarize-changes` |
| `code-reviewer` | Subagent | Ask Claude to *"review my recent changes"* |

## Loading the plugin

From the repo root:

```bash
claude --plugin-dir .
```

After editing a component, reload without restarting:

```
/reload-plugins
```

## Usage

### Summarise changes

Run from any branch:

```
/qa-kit:summarize-changes
```

You get a concise list of changed files and what each one changed.

### Code reviewer

Just ask Claude to review your recent changes:

```
Please review my recent changes.
```

Claude reaches for the `code-reviewer` subagent and returns a short, severity-grouped report.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest — name + version
├── commands/
│   └── summarize-changes.md   # slash command
├── agents/
│   └── code-reviewer.md       # subagent
└── README.md
```

> Only `plugin.json` lives inside `.claude-plugin/`. The component folders sit at the repo root.
