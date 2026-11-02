# qa-kit

A small Claude Code plugin for wrapping up a branch: summarise what changed, and get a quick code review.

## What it adds

| Component | Type | What it does |
|-----------|------|--------------|
| `/qa-kit:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of the change. Short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns a short list grouped by severity (high, medium, low), with the file and a one-sentence fix per item. Read-only (`Read`, `Grep`, `Glob`). |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

**Summarise a branch**

```
/qa-kit:summarize-changes
```

**Review recent changes**

Ask Claude in plain language, e.g. "Review my recent changes". Claude delegates to `code-reviewer` automatically. It is also a good fit right after writing or editing code.

After editing any plugin file, run `/reload-plugins`.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # name + version (the manifest)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Validation

The **Validate plugin** GitHub Action runs on every push. It checks that `plugin.json` is valid and named, that component folders sit at the repo root (not inside `.claude-plugin/`), and that at least one component exists.
