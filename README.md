# qa-kit

A small Claude Code plugin with two QA helpers: one summarises a branch for a pull request, and one reviews recently changed code.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file changed on the current branch (compared with `main`) with a one-line description, short enough to paste into a PR. |
| `code-reviewer` | Subagent | Reads the recent diff and reports bugs, missing error handling and unclear names, grouped by severity. |

## Usage

Load the plugin from the repo root:

```sh
claude --plugin-dir .
```

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review changes:** ask Claude to "review my recent changes". It hands off to the `code-reviewer` subagent.

After editing any component, run `/reload-plugins` to pick up the changes.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json        # manifest: name, version, description
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## CI

The **Validate plugin** workflow (`.github/workflows/validate.yml`) runs on every push. It checks that the manifest exists and is valid, and that at least one component sits at the repo root.
