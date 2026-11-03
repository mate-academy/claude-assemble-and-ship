# qa-kit

A small Claude Code plugin that helps you wrap up a piece of work: summarize what changed on a branch, and review the changes for bugs before a commit or PR.

## What's included

### Command: `/qa-kit:summarize-changes`

Summarizes the changes on the current branch. It lists each touched file with a one-line description of what changed, short enough to paste into a pull-request description.

### Subagent: `code-reviewer`

Reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It is read-only (Read, Grep, Glob).

Claude uses it automatically right after code is written or edited, or you can trigger it by asking Claude to review your recent changes.

## Load it locally

From the repo root:

```
claude --plugin-dir .
```

Then run `/qa-kit:summarize-changes`, or ask Claude to review your recent changes. After editing the plugin, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json
commands/summarize-changes.md
agents/code-reviewer.md
```
