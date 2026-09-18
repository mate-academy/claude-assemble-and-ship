# qa-kit

A small Claude Code plugin for reviewing and summarising code changes.

## Commands

- `/qa-kit:summarize-changes` — lists changed files on the current branch and gives a short description of each change for use in a pull request.

## Subagents

- `code-reviewer` — reviews recent changes for bugs, missing error handling, and unclear names, and groups findings by severity.

## Usage

Load the plugin locally with:

```bash
claude --plugin-dir .
```

Then run `/qa-kit:summarize-changes` or ask Claude to review your recent changes.
