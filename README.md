# review-toolkit

A small Claude Code plugin for wrapping up a change: summarize what you did, and
get a second pair of eyes on it before you open the PR.

## What's inside

- **`/review-toolkit:summarize-changes`** — a command that lists every file touched
  on the current branch with a one-line description of the change, sized to paste
  straight into a PR description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing
  error handling, and unclear names, and reports findings grouped by severity.
  Claude reaches for it on its own when asked to review recent work, or invoke it
  directly.

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then either:

- Run `/review-toolkit:summarize-changes` to get a PR-ready summary of the current
  branch's changes.
- Ask Claude to "review my recent changes" — it will use the `code-reviewer`
  subagent automatically.

After editing a component, run `/reload-plugins` to pick up the change without
restarting the session.
