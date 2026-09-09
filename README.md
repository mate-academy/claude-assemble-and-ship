# QA Kit

A Claude Code plugin for code quality and change management.

## What it does

QA Kit provides tools to help you understand and review code changes:

- **summarize-changes** — Summarizes what changed on your current branch, listing each file with a one-line description. Perfect for pull-request descriptions.
- **code-reviewer** — Reviews recent changes for bugs, missing error handling, and unclear names, organized by severity.

## How to use

### Load the plugin

```bash
claude --plugin-dir .
```

### Summarize changes on your branch

```
/qa-kit:summarize-changes
```

This command analyzes the current branch, lists each modified file, and provides concise descriptions suitable for pasting into pull-request descriptions.

### Review code changes

Ask Claude to review your recent changes:

> "Can you review my recent changes for bugs?"

Claude will automatically use the code-reviewer subagent to analyze your code for potential issues.

## Commands

- `/qa-kit:summarize-changes` — Summarize branch changes for PR descriptions

## Agents

- `code-reviewer` — Reviews code for bugs, error handling, and naming issues
