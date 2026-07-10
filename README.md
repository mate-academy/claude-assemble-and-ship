# Assemble and Ship Plugin

A Claude Code plugin that helps you review and document your code changes before shipping.

## Features

### Commands

- **`/assemble-and-ship:summarize-changes`** — Summarizes all changes on your current branch in a concise format. Lists each modified file with a one-line description of what changed. Perfect for crafting pull request descriptions.

### Agents

- **`code-reviewer`** — An AI code reviewer that examines your recent changes for bugs, missing error handling, and unclear variable names. Organizes findings by severity (high, medium, low). Automatically triggered when you ask Claude to review your code.

## Installation

Clone this repository and load it in Claude Code:

```bash
claude --plugin-dir .
```

## Usage

### Summarize Changes
Get a quick summary of what you changed:
```
/assemble-and-ship:summarize-changes
```

### Review Code
Ask Claude to review your recent changes:
```
"Can you review my recent changes for bugs?"
```

The code-reviewer agent will analyze your modifications and provide feedback grouped by severity.

## Version

0.1.0
