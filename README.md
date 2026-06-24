# qa-kit

A Claude Code plugin with two quality-assurance tools: a command that summarises branch changes and a subagent that reviews code for bugs.

## Commands

### `/qa-kit:summarize-changes`

Lists every file touched on the current branch with a one-line description of what changed in each. Output is short enough to paste directly into a pull-request description.

**Usage**

```
/qa-kit:summarize-changes
```

## Agents

### `code-reviewer`

Reviews recent changes for bugs, missing error handling, and unclear names. Findings are grouped by severity (high / medium / low); each item names the file and states the fix in one sentence.

**Usage**

Ask Claude to review your recent changes:

```
Review my recent changes
```

Claude will reach for the `code-reviewer` agent automatically.

## Installation

Load the plugin from the repo root:

```
claude --plugin-dir /path/to/claude-assemble-and-ship
```

After editing any component, reload without restarting:

```
/reload-plugins
```
