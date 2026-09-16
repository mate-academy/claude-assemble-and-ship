# review-kit

A small Claude Code plugin for wrapping up a branch of work: summarize what changed, then get a quick code review.

## What's included

- **`/review-kit:summarize-changes`** — a slash command that summarizes what changed on the current branch, file by file, in a form short enough to paste straight into a pull-request description.
- **`code-reviewer`** subagent — reviews recent changes for bugs, missing error handling, and unclear names, and reports back a severity-grouped list (high/medium/low) with a one-sentence fix for each item. Claude reaches for this automatically after you've written or edited code, or when you ask for a review.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/review-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to "review my recent changes" (or similar) to trigger the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
