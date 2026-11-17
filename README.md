# qa-kit

A small Claude Code plugin for the moment before you open a pull request: summarise what changed on your branch, then get it reviewed for bugs.

## What it adds

| Component | Name in Claude Code | What it does |
|---|---|---|
| Command | `/qa-kit:summarize-changes` | Lists each file touched on the current branch with a one-line description of what changed. Short enough to paste into a PR description. |
| Subagent | `qa-kit:code-reviewer` | Reviews changed code for bugs, missing error handling and unclear names. Returns findings grouped by severity (high, medium, low) as `file:line` with a one-sentence fix, plus a **ready** / **needs changes** verdict. |

The reviewer has read-only tools (`Read`, `Grep`, `Glob`) and runs on Sonnet. It can't edit files or run commands. The main Claude session collects the diff and hands it over when delegating.

## Usage

Load the plugin from a local checkout:

```sh
claude --plugin-dir /path/to/qa-kit
```

Then, in any git repository:

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review changes:** ask Claude to review your changes, e.g. *"review my recent changes"*. Claude decides whether to delegate. For small diffs it may review them itself, so to make sure the subagent is used, ask for it by name: *"use the code-reviewer subagent to review my changes"*.

After editing the plugin's files, run `/reload-plugins` to pick up the changes without restarting.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest: name, version, description
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` lives in `.claude-plugin/`; the component folders sit at the root. The **Validate plugin** GitHub Action (`.github/scripts/validate-plugin.js`) checks this on every push.
