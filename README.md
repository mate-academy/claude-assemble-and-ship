# qa-kit

A small Claude Code plugin that helps you wrap up a piece of work: summarise what changed on a branch and get a quick code review.

## Components

| Type | Name | What it does |
|------|------|--------------|
| Slash command | `/qa-kit:summarize-changes` | Summarises the changes on the current branch: lists each touched file with a one-line description, short enough for a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names. Returns findings grouped by severity (high / medium / low). |

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a PR-ready summary of your branch.
- Ask Claude to "review my recent changes" and it will delegate to `code-reviewer`.
- After editing plugin files, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json
commands/summarize-changes.md
agents/code-reviewer.md
```
