# qa-kit

A small Claude Code plugin for reviewing your work before you open a pull request.
It bundles one slash command and one subagent.

## What's inside

| Component | Name | What it does |
|-----------|------|--------------|
| Command | `/qa-kit:summarize-changes` | Summarises the changes on the current branch — one line per touched file — short enough to paste into a PR description. |
| Agent | `code-reviewer` | Reviews recent changes for bugs, missing error handling, and unclear names, and returns a short list grouped by severity. |

## Structure

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

Only `plugin.json` lives in `.claude-plugin/`; the component folders sit at the root.

## Try it locally

From the repo root, load the plugin:

```
claude --plugin-dir .
```

Then:

- Run the command by its namespaced name: `/qa-kit:summarize-changes`
- Trigger the subagent by asking Claude to review your recent changes — it should reach for `code-reviewer`.

After editing any component, run `/reload-plugins` to pick up the changes.
