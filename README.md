# qa-kit

A small quality-assurance plugin for Claude Code. It bundles two pieces that help you check your work before opening a pull request: a command that summarizes what changed on your branch, and a subagent that reviews recent changes for problems.

## What's included

### `/qa-kit:summarize-changes` (command)

Summarizes the changes on the current branch: lists each touched file with a one-line description of what changed, short enough to paste straight into a pull-request description.

### `code-reviewer` (subagent)

A careful reviewer that checks recent changes for bugs, missing error handling, and unclear names. It returns a short list of findings grouped by severity (high, medium, low), naming the file and the fix for each. Claude reaches for it automatically after writing or editing code — or you can ask directly, e.g. *"review my recent changes"*.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── .github/                 # CI that validates the plugin structure
```

## Try it locally

From the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a branch summary.
- Ask Claude to review your recent changes to trigger the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes.
