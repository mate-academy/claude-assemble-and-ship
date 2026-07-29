# qa-kit

A small Claude Code plugin with two lightweight QA helpers: a slash command
that summarizes branch changes for a PR description, and a subagent that
reviews recent code changes.

## What's inside

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest (name + version)
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

### `/qa-kit:summarize-changes`

Summarizes the changes on the current branch: lists each touched file with a
one-line description, formatted to drop straight into a pull-request
description.

### `code-reviewer` subagent

Reviews recent changes for bugs, missing error handling, and unclear naming.
Returns a short list grouped by severity (high, medium, low), one sentence
per issue. Claude reaches for this agent automatically when you ask it to
review your recent changes — no explicit invocation needed.

## Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then:

- Run the command: `/qa-kit:summarize-changes`
- Trigger the subagent: ask Claude to "review my recent changes"

After editing any plugin file, run `/reload-plugins` to pick up the changes
without restarting the session.
