# qa-kit

A small Claude Code plugin with a slash command and a subagent for reviewing your work.

## What it adds

| Component | Type | What it does |
|-----------|------|--------------|
| `/qa-kit:summarize-changes` | Slash command | Summarises the changes on the current branch: one line per touched file, short enough for a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a list grouped by severity (high, medium, low). |

## Install

```
/plugin install qa-kit --marketplace akennich/claude-assemble-and-ship
```

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to get a summary of your branch.
- Ask Claude to "review my recent changes" and it should delegate to `code-reviewer`.
- Run `/reload-plugins` after editing any component.

## Structure

```
.claude-plugin/plugin.json   # manifest
.claude-plugin/marketplace.json   # marketplace listing
commands/summarize-changes.md
agents/code-reviewer.md
```
