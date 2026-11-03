# qa-kit

A small Claude Code plugin for checking your work before a pull request.

## What it adds

| Component | Name | What it does |
|---|---|---|
| Command | `/qa-kit:summarize-changes` | Lists every file touched on the current branch with a one-line description — short enough to paste into a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity. Read-only (`Read, Grep, Glob`), runs on Sonnet. |

## Use it

Load it locally from this folder:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a summary of the branch.
- Ask "review my recent changes" — Claude delegates to the `code-reviewer` subagent.
- After editing the plugin files, run `/reload-plugins`.

## Layout

```
.claude-plugin/plugin.json   # manifest: name + version
commands/summarize-changes.md
agents/code-reviewer.md
```
