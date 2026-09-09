# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Claude Code plugin assembly project**. The task is to organize pre-built components (a slash command and a subagent) into a properly structured Claude Code plugin that can be loaded locally and validated via GitHub Actions.

The project contains:
- Two building-block components in `building-blocks/`:
  - `summarize-changes.md` — a slash command that summarizes branch changes
  - `code-reviewer.md` — a subagent that reviews changed code for bugs
- A validation script (`validate-plugin.js`) that enforces the plugin structure
- A GitHub Actions workflow that runs the validation on every push

## Plugin Structure

The final plugin must follow this exact structure:

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest (name + version only)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md                  # describes the plugin
```

**Critical rule:** Only `plugin.json` goes inside `.claude-plugin/`. All component folders (`commands/`, `agents/`, `skills/`, `hooks/`) must sit at the repository root.

## Common Commands

### Validate the plugin structure locally
```powershell
node .github/scripts/validate-plugin.js
```
Checks that plugin.json exists, is valid JSON, has a `name` field, component folders are at the root, and at least one component is present.

### Load and test the plugin locally
```powershell
claude --plugin-dir .
```
Loads the plugin into Claude Code. Commands are invoked with `/plugin-name:command-name` (e.g., `/qa-kit:summarize-changes`). Subagents are triggered by asking Claude to review code changes.

### Reload plugins after edits
```
/reload-plugins
```
Run this Claude Code slash command after modifying any component to pick up changes without restarting.

## Plugin Manifest (plugin.json)

Create `.claude-plugin/plugin.json` with at minimum:

```json
{
  "name": "plugin-name-here",
  "version": "0.1.0"
}
```

The `name` field is required and used to namespace commands and identify the plugin. The version follows semantic versioning.

## Component File Format

### Slash Commands (in `commands/`)

Slash commands are markdown files with frontmatter specifying the command name and description:

```markdown
---
name: command-name
description: Brief description of what the command does
---

Command instructions and logic here.
```

### Subagents (in `agents/`)

Subagents are markdown files with frontmatter specifying agent configuration:

```markdown
---
name: agent-name
description: Brief description of what the agent does
tools: Tool1, Tool2, Tool3
model: sonnet
---

Agent instructions and behavioral guidelines here.
```

## Validation Workflow

GitHub Actions runs `.github/scripts/validate-plugin.js` on every push and PR. The validation checks:

1. **Manifest exists and is valid**: `.claude-plugin/plugin.json` must exist and be parseable JSON with a non-empty `name` field
2. **Correct directory structure**: Component folders (`commands/`, `agents/`, etc.) must be at the repository root, not nested inside `.claude-plugin/`
3. **At least one component**: At least one of `commands/`, `agents/`, `skills/`, or `hooks/` must exist and contain files

The workflow turns green once all three checks pass. You can verify locally by running the validation script before pushing.

## Development Workflow

1. **Create the manifest**: Add `.claude-plugin/plugin.json` with a name and version
2. **Create component folders**: Make `commands/` and `agents/` directories at the root
3. **Move components**: Move `building-blocks/summarize-changes.md` to `commands/summarize-changes.md` and `building-blocks/code-reviewer.md` to `agents/code-reviewer.md`
4. **Update README**: Replace the template README with one describing the actual plugin
5. **Validate locally**: Run `node .github/scripts/validate-plugin.js` to catch issues before pushing
6. **Test locally**: Load with `claude --plugin-dir .` and test each command and subagent
7. **Commit and push**: The GitHub Actions check will validate automatically

## Important Notes

- **Component references**: If a component script references other files, use `${CLAUDE_PLUGIN_ROOT}` instead of hardcoded paths
- **Component isolation**: Each component (command or subagent) is independent and can be used separately
- **Reload after edits**: Use `/reload-plugins` in Claude Code after modifying components to pick up changes
- **Clean up**: Delete `building-blocks/` once components have been moved to their final locations
