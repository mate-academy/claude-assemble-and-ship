# qa-kit

A small Claude Code plugin with two quality-assurance helpers: a command that summarizes the changes on your branch, and a subagent that reviews recent code changes.

## Components

### `summarize-changes` command

Summarizes the changes on the current branch. It lists each touched file with a one-line description of what changed, short enough to paste into a pull-request description.

### `code-reviewer` subagent

Reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low), naming the file and giving a one-sentence fix for each item. It is read-only (`Read`, `Grep`, `Glob`) and runs on Sonnet.

## Usage

### Load the plugin locally

From the repository root:

```
claude --plugin-dir .
```

### Run the command

```
/qa-kit:summarize-changes
```

### Trigger the code reviewer

Ask Claude to review your recent changes, for example:

```
Review my recent changes.
```

Claude will delegate to the `code-reviewer` subagent.

### Reload after edits

After editing the plugin's files, run this inside your session to pick up the changes without restarting:

```
/reload-plugins
```

## Layout

```
.claude-plugin/plugin.json      Plugin manifest
commands/summarize-changes.md   Slash command
agents/code-reviewer.md         Subagent
```
