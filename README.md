# qa-kit

A Claude Code plugin that streamlines code quality and change management workflows.

## What it does

**qa-kit** provides two tools to help you review and document code changes efficiently:

- **Summarize Changes** — Quick snapshot of what changed on your branch
- **Code Reviewer** — Automated code review for bugs and unclear naming

## Commands

### `/qa-kit:summarize-changes`

Summarizes all changes on the current branch in a concise format.

**What it does:**
- Lists each file that was touched
- Provides a one-line description of what changed in each file
- Keeps output short enough to paste into a pull-request description

**How to use:**
```
/qa-kit:summarize-changes
```

Perfect for quickly understanding what's in your branch before opening a PR.

## Agents

### Code Reviewer

Automatically reviews your recent changes for bugs, missing error handling, and unclear variable names.

**What it does:**
- Analyzes recent code changes
- Identifies potential bugs and issues
- Flags unclear naming
- Returns findings organized by severity (high, medium, low)

**How to use:**
Simply ask Claude to review your recent changes after writing or editing code:
```
Can you review the changes I just made?
```

The agent will automatically analyze your work and provide actionable feedback.

## Installation

Load this plugin in Claude Code:

```bash
claude --plugin-dir .
```

After loading, use `/reload-plugins` to refresh if you make edits to the plugin components.

## Version

0.1.0
