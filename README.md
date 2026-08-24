# QA Kit

QA Kit is a Claude Code plugin for summarizing branch changes and reviewing recent code changes.

## Components

- `/qa-kit:summarize-changes` creates a concise per-file summary suitable for a pull-request description.
- `qa-kit:code-reviewer` reviews changed code and groups findings by severity.

## Test locally

From this repository, run:

    claude --plugin-dir .

Then:

1. Run `/qa-kit:summarize-changes`.
2. Ask Claude to use the `qa-kit:code-reviewer` agent.
3. Run `/reload-plugins` after changing plugin files.