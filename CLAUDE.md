# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Claude Code plugin development project for the Unit 9, Lesson 3 coursework task. The goal is to assemble two pre-built components into a working Claude Code plugin with proper structure and validation.

**Current components:**
- `building-blocks/summarize-changes.md` — a slash command that summarizes what changed on a branch
- `building-blocks/code-reviewer.md` — a subagent that reviews recent code changes for bugs and unclear names

## Required Plugin Structure

The plugin must follow this exact structure (the validation check enforces this):

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest with name and version
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md                  # plugin description
```

**Critical rule:** Only `plugin.json` goes inside `.claude-plugin/` — component folders (`commands/`, `agents/`, etc.) must sit at the repo root.

## Development Workflow

### 1. Build the Plugin
Move the building blocks into place:
```bash
# Create the manifest directory
mkdir -p .claude-plugin commands agents

# Create a minimal plugin.json
echo '{"name": "qa-kit", "version": "0.1.0"}' > .claude-plugin/plugin.json

# Move components to their target folders
mv building-blocks/summarize-changes.md commands/
mv building-blocks/code-reviewer.md agents/

# Clean up empty building-blocks directory
rmdir building-blocks
```

### 2. Update References
If any component file references the validation script or other resources via hardcoded paths, replace them with `${CLAUDE_PLUGIN_ROOT}`. For example:
```
${CLAUDE_PLUGIN_ROOT}/.github/scripts/validate-plugin.js
```

### 3. Load and Test Locally
```bash
# Load the plugin from the repo root
claude --plugin-dir .

# Reload after making edits
/reload-plugins
```

Once loaded, test both components:
- **Command:** Run `/qa-kit:summarize-changes` (or whatever you name your plugin)
- **Subagent:** Ask Claude to review your recent changes — it should trigger the code-reviewer subagent

### 4. Validation
The repository runs automated validation on every push via `.github/workflows/validate.yml`:

```bash
# Run the validation check locally
node .github/scripts/validate-plugin.js
```

**Validation checks for:**
- `.claude-plugin/plugin.json` exists and contains valid JSON with a non-empty `name` field
- Component folders (`commands/`, `agents/`, `skills/`, `hooks/`) are at the repo root, not inside `.claude-plugin/`
- At least one component folder exists and contains files

The check passes (turns green) once all three conditions are met.

## File Structure

- `.claude-plugin/` — Plugin metadata (manifest only)
- `commands/` — Slash commands
- `agents/` — Subagents
- `.github/workflows/validate.yml` — GitHub Actions workflow that validates the plugin structure
- `.github/scripts/validate-plugin.js` — Validation script (enforces the plugin structure requirements)
- `building-blocks/` — Pre-made components to assemble (remove after moving them)

## Common Tasks

**Create the plugin structure:**
```bash
mkdir -p .claude-plugin commands agents
echo '{"name": "qa-kit", "version": "0.1.0"}' > .claude-plugin/plugin.json
mv building-blocks/summarize-changes.md commands/
mv building-blocks/code-reviewer.md agents/
rmdir building-blocks
```

**Load the plugin locally:**
```bash
claude --plugin-dir .
```

**Run the validation check:**
```bash
node .github/scripts/validate-plugin.js
```

**Run validation and see the GitHub workflow result:**
Push changes to trigger `.github/workflows/validate.yml` — view the result in the GitHub Actions tab.

## Next Steps

1. Move the components into the proper folder structure
2. Create `.claude-plugin/plugin.json` with a plugin name and version
3. Update the README.md to describe your plugin instead of the task instructions
4. Load the plugin locally with `claude --plugin-dir .` and test both components
5. Commit and push — the validation check should turn green
