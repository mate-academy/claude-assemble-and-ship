# qa-kit

A Claude Code plugin that adds lightweight QA tools to your workflow — summarise branch changes and get a fast code review without leaving the terminal.

## What it does

| Component | Type | Purpose |
|---|---|---|
| `summarize-changes` | Command | Lists every file touched on the current branch with a one-line description of what changed — ready to paste into a PR description |
| `code-reviewer` | Agent | Reviews recent changes for bugs, missing error handling, and unclear names; returns findings grouped by severity |

## Commands

### `/qa-kit:summarize-changes`

Summarises all changes on the current branch. Run it before opening a PR.

```
/qa-kit:summarize-changes
```

Output: a short list of touched files, each with a one-line description of the change.

## Agents

### code-reviewer

Triggered automatically when you ask Claude to review your recent changes (e.g. "review what I just wrote"). Uses the `Read`, `Grep`, and `Glob` tools to inspect the diff and returns findings in three severity buckets:

- **high** — bugs or missing error handling that could cause failures
- **medium** — logic issues or unclear names worth fixing before merge
- **low** — style and readability suggestions 

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then in a Claude Code session:

```
/qa-kit:summarize-changes          # summarise branch changes
review my recent changes           # triggers the code-reviewer agent
```

After editing any component, reload without restarting:

```
/reload-plugins
```
