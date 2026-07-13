# QA Kit

QA Kit is a small Claude Code plugin for reviewing and summarizing repository changes.

## Components

### `/qa-kit:summarize-changes`

Summarizes the changes made on the current Git branch. It is useful before creating a commit or pull request.

### `code-reviewer`

A subagent that reviews recent code changes and looks for bugs, regressions, risky behavior, and missing validation.

## Local usage

Load the plugin from the repository root:

```bash
claude --plugin-dir .
```
