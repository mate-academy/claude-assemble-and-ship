# QA Kit Claude Code Plugin

This plugin provides a small quality-assurance toolkit for Claude Code.

## What it includes

- `/qa-kit:summarize-changes` — summarizes the changes on the current branch.
- `code-reviewer` agent — reviews recent code changes and points out possible bugs, edge cases, missing tests, and readability issues.

## How to use

Load the plugin from the repository root:

```bash
claude --plugin-dir .