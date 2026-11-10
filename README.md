# QA Kit Plugin

QA Kit is a Claude Code plugin that helps developers understand code changes and review their code.

## Features

### 1. Summarize Changes

The `/qa-kit:summarize-changes` command analyzes recent Git changes and generates a summary.

Usage:

```text
/qa-kit:summarize-changes
```

### 2. Code Reviewer

The `code-reviewer` agent reviews recent code changes and identifies potential bugs, problems, and improvements.

To use it, ask Claude Code:

```text
Review my recent changes.
```

Claude can delegate the review to the `code-reviewer` agent.

## Installation

Load the plugin locally:

```bash
claude --plugin-dir .
```

## Reloading

After editing plugin files, run:

```text
/reload-plugins
```

## Version

0.1.0