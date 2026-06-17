# qa-kit

A small QA toolkit for Claude Code. It bundles a slash command and a subagent
that help you wrap up a branch before opening a pull request.

## Components

### `/qa-kit:summarize-changes` (command)
Summarises the changes on the current branch: lists each touched file with a
one-line description, short enough to paste into a PR description.

### `code-reviewer` (subagent)
A careful reviewer that inspects recent changes for bugs, missing error
handling, and unclear names. It returns a short list grouped by severity
(high / medium / low), naming the file and the fix for each item.
Triggered automatically when you ask Claude to review your recent changes.

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a PR-ready change summary.
- Ask Claude to "review my recent changes" to invoke the `code-reviewer` subagent.

After editing any component, run `/reload-plugins` to pick up the changes.
