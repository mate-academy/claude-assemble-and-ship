# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A course workspace (Unit 9, Lesson 3) for assembling a working Claude Code plugin from ready-made components. `building-blocks/` holds the raw pieces — `summarize-changes.md` (a slash command) and `code-reviewer.md` (a subagent) — which are meant to be moved into a proper plugin layout and the folder deleted afterwards. The final README should describe the plugin itself, not the exercise.

## Commands

- **Validate the plugin structure** (same check CI runs): `node .github/scripts/validate-plugin.js` from the repo root. The `Validate plugin` GitHub Actions workflow runs it on every push and PR; it stays red until the plugin is correctly structured.
- **Test the plugin locally**: `claude --plugin-dir .` from the repo root, then run the command by its namespaced name (e.g. `/qa-kit:summarize-changes`) and trigger the subagent by asking for a review of recent changes. Use `/reload-plugins` after edits.

There is no build, lint, or test suite beyond the validator.

## Plugin structure rules

The validator (`.github/scripts/validate-plugin.js`) enforces:

- `.claude-plugin/plugin.json` exists, is valid JSON, and has a non-empty string `name` (a `version` is also expected, e.g. `{ "name": "qa-kit", "version": "0.1.0" }`).
- **Only `plugin.json` goes inside `.claude-plugin/`.** Component folders (`commands/`, `agents/`, `skills/`, `hooks/`) sit at the repo root — placing them inside `.claude-plugin/` is the classic mistake and fails validation.
- At least one non-empty component folder exists at the root.

If a component references a bundled script, use `${CLAUDE_PLUGIN_ROOT}` — never a hardcoded path.
