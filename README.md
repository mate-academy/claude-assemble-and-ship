# QA Kit Plugin

A Claude Code plugin that provides quality assurance tools for code repositories.

## Features

- **/summarize-changes**: Summarizes all recent commits and code updates on the active branch.
- **code-reviewer agent**: Automatically reviews recent code changes for potential bugs and quality issues.

## Usage

Load the plugin locally from the repository root:
```bash
claude --plugin-dir .
```

/qa-kit:summarize-changes

Ask Claude to review recent code changes to invoke the code-reviewer agent.
