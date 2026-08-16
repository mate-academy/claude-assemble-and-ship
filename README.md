# QA Kit

A small Claude Code plugin for reviewing and summarizing branch changes.

## Command

`/qa-kit:summarize-changes` — summarizes the changes on the current branch.

## Agent

`code-reviewer` — reviews recent changes for bugs, edge cases, and potential issues.

## Usage

Load the plugin with:

    claude --plugin-dir .

Then run `/qa-kit:summarize-changes` or ask Claude to review recent changes.
