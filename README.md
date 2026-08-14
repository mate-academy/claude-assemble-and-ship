# qa-kit

A small Claude Code plugin that bundles two everyday QA helpers: a slash
command that summarizes what changed on a branch, and a subagent that
reviews recent changes for bugs and unclear names.

## What's in here

```
.
├── .claude-plugin/
│   └── plugin.json          # name + version (the manifest)
├── commands/
│   └── summarize-changes.md # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md     # the code-reviewer subagent
└── README.md
```

## Commands

### `/qa-kit:summarize-changes`

Summarizes the changes on the current branch: lists each touched file with
a one-line description of what changed, sized to paste straight into a
pull-request description.

## Agents

### `code-reviewer`

A subagent that reviews recently changed code for bugs, missing error
handling, and unclear names. It reports findings grouped by severity
(high, medium, low), with the file and a one-sentence fix for each item.
Claude reaches for it automatically when you ask for a review of your
recent changes — you can also invoke it directly by name.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to "review my recent changes" to trigger the `code-reviewer`
  subagent.

After making edits to the plugin, reload it with `/reload-plugins`.
