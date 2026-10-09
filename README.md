# qa-kit

A small Claude Code plugin for checking your work before you open a pull request.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists each file changed on the current branch with a one-line description, short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity (high / medium / low). |

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then:

- Run `/qa-kit:summarize-changes` to get a summary of your branch.
- Ask Claude to review your recent changes; it will use the `code-reviewer` subagent.
- After editing plugin files, run `/reload-plugins`.

## Structure

```
.claude-plugin/plugin.json      # manifest (name, version, description, author)
commands/summarize-changes.md   # slash command
agents/code-reviewer.md         # subagent
```

## Validation

The **Validate plugin** GitHub Action checks the plugin structure on every push.
You can run the same check locally:

```
node .github/scripts/validate-plugin.js
```
