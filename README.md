# change-kit

A small Claude Code plugin for the end of a piece of work. It summarizes what changed on your branch and has a dedicated reviewer check those changes.

## What it adds

| Component | Name | What it does |
|---|---|---|
| Command | `/change-kit:summarize-changes` | Lists each file touched on the current branch with a one-line description of the change. The result is short enough to paste into a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity. It is read-only (`Read, Grep, Glob`) and runs on sonnet. |

## Use it

Load it locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/change-kit:summarize-changes` to get a summary of the branch.
- Ask *"review my recent changes"*. Claude hands the job to the `code-reviewer` subagent.
- After editing any plugin file, run `/reload-plugins` to pick up the change without restarting.

## Layout

```
.claude-plugin/plugin.json   # manifest: name + version
commands/summarize-changes.md
agents/code-reviewer.md
README.md
```
