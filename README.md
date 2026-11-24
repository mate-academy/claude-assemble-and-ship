# vlad-review-kit

A small Claude Code plugin with two tools for preparing a pull request: a command that summarizes what changed on your branch, and a subagent that reviews the changed code.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/vlad-review-kit:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description, short enough to paste into a pull request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns the findings grouped by severity. It can only read and search (Read, Grep, Glob) and runs on Sonnet. |

## Structure

    .claude-plugin/plugin.json      manifest: name and version
    commands/summarize-changes.md   the slash command
    agents/code-reviewer.md         the subagent

## Try it locally

From the repository root, run:

    claude --plugin-dir .

Then:

- Run `/vlad-review-kit:summarize-changes` to get a summary of the changes on your branch.
- Ask "Review my recent changes" and Claude should reach for the `code-reviewer` subagent. To call it directly, ask "Use the code-reviewer subagent on my changes".

After editing a file in the plugin, run `/reload-plugins` to pick up the change without restarting the session.