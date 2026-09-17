# qa-kit

A Claude Code plugin with a couple of small QA helpers: summarizing branch changes for a PR description, and reviewing recent code for bugs and unclear naming.

### What's included

- **`/qa-kit:summarize-changes`** (command, `commands/summarize-changes.md`) — summarizes the changes on the current branch, one line per file touched, short enough to paste straight into a PR description.
- **`code-reviewer`** (agent, `agents/code-reviewer.md`) — reviews recent changes for bugs, missing error handling, and unclear names, and returns findings grouped by severity (high/medium/low).

### Usage

1. Load the plugin locally: `claude --plugin-dir .`
2. Run the command: `/qa-kit:summarize-changes`
3. Trigger the review agent by asking Claude to review your recent changes — it will reach for `code-reviewer` automatically.
4. After editing the plugin, run `/reload-plugins` to pick up the changes.
