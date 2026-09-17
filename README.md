# qa-kit

A small Claude Code plugin that helps you wrap up a branch of work: 
summarize what changed, and get a focused review before you open a PR.

## What's inside

- **`/qa-kit:summarize-changes`** — lists every file touched on the 
current branch with a one-line description of the change, formatted to 
paste straight into a PR description.
- **`code-reviewer` (subagent)** — reviews recent changes for bugs, 
missing error handling, and unclear names. Claude reaches for it 
automatically when you ask for a review of your changes; findings come 
back grouped by severity (high/medium/low) with file and a one-sentence 
fix per item.

## Usage

Load the plugin locally with:
```
claude --plugin-dir .
```

Then either:
- run `/qa-kit:summarize-changes` directly, or
- ask Claude to "review my recent changes" and it will invoke 
`code-reviewer`.
