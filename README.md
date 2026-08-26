# Claude Assemble and Ship

A Claude Code plugin that helps summarize changes and review recent code changes.

## Commands

### /claude-assemble-and-ship:summarize-changes

Summarizes the changes on the current branch. It lists each touched file and gives a short description of what changed, making the result suitable for a pull request description.

### code-reviewer

Reviews recent code changes for bugs, missing error handling, and unclear names. Findings are grouped by severity: high, medium, and low.

## Installation

From the repository root, load the plugin with:

    claude --plugin-dir .

After making edits to the plugin, reload it with:

    /reload-plugins

## Usage

Run the change summary command with:

    /claude-assemble-and-ship:summarize-changes

To use the code reviewer, ask Claude to review your recent changes. Claude can then use the code-reviewer subagent to inspect the changes and report its findings.

## Structure

    .claude-plugin/
    L-- plugin.json

    commands/
    L-- summarize-changes.md

    agents/
    L-- code-reviewer.md
