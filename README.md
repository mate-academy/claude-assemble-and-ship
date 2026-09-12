# Pre-commit Plugin

A Claude Code plugin that provides essential tools for pre-commit checks, helping you review and summarize your changes before committing.

## What it does

This plugin adds two useful tools to your Claude Code workflow:
- **Code review subagent**: Automatically reviews your recent changes for bugs and unclear naming
- **Change summarization command**: Generates a concise summary of your branch changes suitable for pull request descriptions

## Components

### 1. Code Reviewer Subagent (`/pre-commit:code-reviewer`)
Reviews changed code for bugs and unclear names. Best used right after writing or editing code.

**How to use**: Ask Claude to "review my recent changes" or "check for bugs in my code" - it will automatically invoke the code-reviewer subagent.

**What it checks**:
- Potential bugs in modified code
- Missing error handling
- Unclear or confusing variable/function names
- Returns a short list grouped by severity (high, medium, low)

### 2. Summarize Changes Command (`/pre-commit:summarize-changes`)
Lists each file that was touched and gives a one-line description of what changed. Output is kept short enough to paste directly into a pull request description.

**How to use**: Type `/pre-commit:summarize-changes` in your conversation with Claude.

**Output example**:
```
- src/auth/login.js: Added JWT token validation middleware
- src/components/Button.tsx: Fixed accessibility issue with color contrast
- README.md: Updated installation instructions
```

## Installation & Usage

1. **Load the plugin**: From the repository root, run:
   ```
   claude --plugin-dir .
   ```

2. **Use the command**: Type `/pre-commit:summarize-changes` to get a summary of your changes

3. **Trigger the subagent**: Ask Claude to review your code (e.g., "Please review my recent changes")

4. **Reload after edits**: If you modify any plugin files, use `/reload-plugins` to refresh

## Plugin Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest (name: pre-commit, version: 0.1.0)
├── agents/
│   └── code-reviewer.md     # Code review subagent definition
├── commands/
│   └── summarize-changes.md # Change summarization command
└── README.md                # This file
```

## Development Tips

- The `plugin.json` file must remain in `.claude-plugin/` directory
- Component folders (`agents/`, `commands/`) must be at the repository root (not inside `.claude-plugin/`)
- After making changes to plugin components, use `/reload-plugins` to test updates
- Commit and push your changes to see the automated validation pass