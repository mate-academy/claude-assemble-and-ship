# qa-kit

A small Claude Code plugin that helps you understand and check your recent work.

## What it adds

- **Command** `/qa-kit:summarize-changes`: summarises what changed on the current branch.
- **Subagent** `code-reviewer`: reviews your recent changes and reports problems.

## How to use

1. From the repo root, load the plugin:

   claude --plugin-dir .

2. Run the command:

   /qa-kit:summarize-changes

3. Trigger the subagent by asking, for example: "Review my recent changes". Claude will hand the task to `code-reviewer`.

After editing plugin files, run /reload-plugins to pick up changes.

## Structure

.claude-plugin/plugin.json   manifest (name + version)
commands/summarize-changes.md
agents/code-reviewer.md
