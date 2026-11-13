# qa-kit

A small Claude Code plugin to help you check your changes before you open a pull request. It adds one slash command for summarising a branch and one subagent for reviewing code.

## What's included

| Component | Type | What it does |
|---|---|---|
| `summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of what changed, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns a short list grouped by severity (high, medium, low). |

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # plugin manifest (name + version)
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

## Usage

1. From the repo root, load the plugin:
   ```
   claude --plugin-dir .
   ```
2. Summarise your branch:
   ```
   /qa-kit:summarize-changes
   ```
3. Review your changes by asking Claude, for example:
   ```
   Review my recent changes
   ```
   Claude delegates to the `code-reviewer` subagent, which has read-only tools (`Read`, `Grep`, `Glob`).

After editing any component, run `/reload-plugins` to pick up the changes.

## Validation

A GitHub Actions workflow (**Validate plugin**) runs on every push. It checks that `.claude-plugin/plugin.json` exists and has a `name`, that component folders sit at the repo root, and that at least one component is present.
