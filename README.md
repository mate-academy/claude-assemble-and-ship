# QA Kit

QA Kit is a Claude Code plugin for summarising code changes and reviewing code.

## Features

### Summarize Changes

The `/qa-kit:summarize-changes` command lists modified files and briefly describes each change. Its output is suitable for a pull request description.

### Code Reviewer

The `code-reviewer` subagent reviews recent changes for bugs, missing error handling, and unclear names. Findings are grouped by severity: high, medium, and low.

## Installation

Load the plugin from the repository root:

`claude --plugin-dir .`

## Usage

Run the command:

`/qa-kit:summarize-changes`

To use the reviewer, ask Claude to review your recent changes.

After editing the plugin, use `/reload-plugins`.