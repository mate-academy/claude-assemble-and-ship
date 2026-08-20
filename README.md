## qa-kit

A small Claude Code plugin with two components for reviewing and summarizing changes on a branch.

### Commands

- `/qa-kit:summarize-changes` — summarizes what changed on the current branch: each touched file with a one-line description, short enough to paste into a pull-request description.

### Agents

- `code-reviewer` — reviews recent code changes for bugs, missing error handling, and unclear names. Triggered automatically when you ask Claude to review recent changes, or invoke it directly.

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then run `/qa-kit:summarize-changes`, or ask Claude to review your recent changes to trigger `code-reviewer`. After editing a component, run `/reload-plugins` to pick up the change without restarting.
