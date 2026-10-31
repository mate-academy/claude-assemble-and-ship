# QA Kit – Claude Code Plugin

QA Kit is a Claude Code plugin designed to help developers understand code changes and improve code quality.

## Features

### 1. Summarize Changes

Command: `/qa-kit:summarize-changes`

Summarises the changes made on the current Git branch, helping developers quickly understand what has changed.

### 2. Code Reviewer

Agent: `code-reviewer`

Reviews recent code changes and identifies potential bugs, issues and opportunities for improvement.

## Installation

Load the plugin locally from the repository root:

```bash
claude --plugin-dir .
```

## Usage

Run the following command inside Claude Code:

```text
/qa-kit:summarize-changes
```

To use the code reviewer, ask Claude:

```text
Please review my recent changes for bugs and potential issues.
```

Claude Code can use the `code-reviewer` agent for the review.

## Plugin Structure

- `.claude-plugin/plugin.json` – Plugin manifest
- `commands/` – Slash commands
- `agents/` – Subagents

## Version

0.1.0