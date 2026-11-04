# qa-kit

A small Claude Code plugin for checking your work before you open a pull request.

## What's included

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file changed on the current branch with a one-line description, short enough to paste into a PR |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names, grouped by severity |

## How to use

1. From the repo root, run `claude --plugin-dir .`
2. Type `/qa-kit:summarize-changes` to get a summary of your branch
3. Ask Claude "review my recent changes" and it will hand off to the `code-reviewer` subagent
4. After editing any plugin files, run `/reload-plugins` to pick up the changes