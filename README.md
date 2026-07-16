# Claude QA Kit Plugin

This repository contains a working Claude plugin focused on quick review workflows after making code changes.

## What this plugin does

- Adds a slash command to summarize branch changes.
- Adds a subagent specialized in reviewing recent diffs for bugs, error handling gaps, and naming quality.

## Components

- `commands/summarize-changes.md`
   - Command name: `summarize-changes`
   - Purpose: list touched files and a short one-line summary per file.

- `agents/code-reviewer.md`
   - Subagent name: `code-reviewer`
   - Purpose: review recent changes and report findings by severity.

## Plugin manifest

The plugin manifest is in `.claude-plugin/plugin.json`:

```json
{
   "name": "claude-qa-kit",
   "version": "0.1.0"
}
```

## How to use locally

1. From the repository root, load the plugin:

```bash
claude --plugin-dir .
```

2. Run the slash command:

```text
/claude-qa-kit:summarize-changes
```

3. Trigger the review subagent by asking Claude to review your recent changes (for example: "Review my recent changes for bugs and naming issues").

4. After editing plugin files, reload:

```text
/reload-plugins
```

## Notes

- Component folders live at the repository root (`commands/` and `agents/`).
- Only `plugin.json` lives inside `.claude-plugin/`.
- None of the current components rely on bundled scripts, so no `${CLAUDE_PLUGIN_ROOT}` path substitution is required right now.
