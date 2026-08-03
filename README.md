# qa-kit

A small Claude Code plugin that bundles two everyday QA helpers: a slash command for summarizing branch changes and a subagent for reviewing them.

## What it does

- **`/qa-kit:summarize-changes`** — summarizes what changed on the current branch. Lists each touched file with a one-line description, short enough to paste straight into a pull-request description.
- **`code-reviewer` subagent** — reviews recent code changes for bugs, missing error handling, and unclear naming. Returns findings grouped by severity (high, medium, low), each with the file and a one-sentence fix. Claude reaches for it automatically when you ask for a review of your recent changes.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of the current branch's changes.
- Ask Claude to "review my recent changes" to trigger the `code-reviewer` subagent.

After editing plugin files, run `/reload-plugins` to pick up the changes without restarting.
