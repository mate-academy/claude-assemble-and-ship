# QA Kit Plugin

A Claude Code plugin that streamlines your development workflow with code review and change documentation tools.

## Features

### Commands

- **`/qa-kit:summarize-changes`** — Summarizes all changes on your current branch with a one-line description per file. Perfect for crafting pull request descriptions.

### Agents

- **`code-reviewer`** — Reviews your recently changed code for bugs, missing error handling, and unclear naming. Triggered automatically when you ask Claude to review your changes.

## Usage

### Install the plugin

```bash
claude --plugin-dir .
```

### Summarize changes

```
/qa-kit:summarize-changes
```

This lists each modified file with a short description of what changed, formatted for easy copy-paste into PR descriptions.

### Review code

Ask Claude to review your recent changes:

> Review my recent changes

The `code-reviewer` agent will analyze your modifications and report findings by severity (high, medium, low).

## How it works

- **summarize-changes**: Scans your git branch and extracts meaningful summaries from diffs
- **code-reviewer**: Uses static analysis to identify potential bugs, error handling gaps, and naming issues
