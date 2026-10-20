# qa-kit

Claude Code plugin with two QA helpers: a slash command that summarises branch changes, and a subagent that reviews recent edits for bugs and unclear names.

## Components

| Type | Name | What it does |
|------|------|--------------|
| Command | `summarize-changes` | Lists each touched file with a one-line description — short enough for a PR description |
| Agent | `code-reviewer` | Reviews recent changes for bugs, missing error handling, and unclear names; groups findings by severity |

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then:

- **Summarise changes:** run `/qa-kit:summarize-changes`
- **Code review:** ask Claude to review your recent changes — it should use the `code-reviewer` agent

After editing plugin files, run `/reload-plugins`.
