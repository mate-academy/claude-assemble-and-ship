# qa-kit

A Claude Code plugin that helps you wrap up a branch: summarise what changed, then get a quick code review before you open a pull request.

## What's included

### Command: `/qa-kit:summarize-changes`

Summarises the changes on your current branch — lists each touched file with a one-line description of what changed, sized to paste straight into a PR description.

### Agent: `code-reviewer`

A subagent that reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low), with the file and a one-sentence fix for each item. Claude reaches for it automatically when you ask for a review of your recent changes.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the command:

```
/qa-kit:summarize-changes
```

Trigger the subagent by asking Claude to review your recent changes, e.g. "review my recent changes" — it will use `code-reviewer`.

After making edits to the plugin, run `/reload-plugins` to pick them up.
