# Dev Toolkit Plugin

A handy Claude Code plugin for developers who want to review their code faster and document changes.

## What does this plugin do?

The Dev Toolkit plugin adds two powerful tools to Claude Code:

### Commands (Slash Commands)

- **`/dev-toolkit:summarize-changes`** — Summarizes all changes on the current branch with one line per file. Perfect for quickly filling in pull-request descriptions.

### Agents (Subagents)

- **`code-reviewer`** — A specialized agent that analyzes your recent code changes for bugs, missing error handling, and unclear naming. Useful right after writing or modifying code.

## How to use

### Using the summarize-changes command

Run `/dev-toolkit:summarize-changes` in Claude Code to get a quick summary of changes on your current branch.

### Using the code-reviewer agent

Ask Claude to review your recent changes — the agent will automatically use the code-reviewer agent and give you feedback grouped by severity (high, medium, low).

## Requirements

- Claude Code
- Git repository

## Version

v0.1.0
