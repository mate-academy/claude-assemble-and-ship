# qa-kit

A small Claude Code plugin for checking your work before you open a pull request. It adds one slash command and one subagent.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file changed on the current branch (compared with `main`) with a one-line description, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity (high, medium, low). |

## Install and use

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

Then, inside Claude Code:

- **Summarise a branch:** run `/qa-kit:summarize-changes`
- **Review code:** ask something like "review my recent changes". Claude delegates the task to the `code-reviewer` subagent. You can also ask for it by name.

If you edit the plugin files while a session is open, run `/reload-plugins` to pick up the changes.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest: name, version, description
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Notes

- `code-reviewer` runs on the `sonnet` model with `Read`, `Grep`, `Glob` and `Bash`. It uses `Bash` only for read-only git commands to find the changes, and never edits files.
- `/qa-kit:summarize-changes` compares against `main` by default. Pass a branch name to compare against something else, for example `/qa-kit:summarize-changes develop`.
- Neither component runs a bundled script. If you add one, reference it as `${CLAUDE_PLUGIN_ROOT}/...` instead of using a hardcoded path.
