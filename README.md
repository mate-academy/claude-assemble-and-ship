# qa-kit

A small Claude Code plugin with one slash command and one subagent.

## Components

| Type | Name | What it does |
|------|------|--------------|
| Command | `/qa-kit:summarize-changes` | Summarises what changed on the current branch, file by file, short enough for a PR description |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names; returns findings grouped by severity |

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" and it will delegate to `code-reviewer`.
- After editing plugin files, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json
commands/summarize-changes.md
agents/code-reviewer.md
```
