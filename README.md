# qa-kit plugin

A Claude Code plugin that summarises branch changes and reviews recent code.

## Commands

- `/qa-kit:summarize-changes` — lists every file touched on the current branch with a one-line description of each change, ready to paste into a pull-request description.

## Agents

- `code-reviewer` — reviews recent changes for bugs, missing error handling, and unclear names; returns a short list grouped by severity (high, medium, low).

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Run the summary command:

```
/qa-kit:summarize-changes
```

Trigger the code reviewer by asking Claude to review your recent changes — it will delegate to the `code-reviewer` subagent automatically.
