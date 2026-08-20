# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A course workspace (Unit 9, Lesson 3) for assembling a working Claude Code plugin from prebuilt components. The end goal is a plugin with the standard layout:

```
.
├── .claude-plugin/
│   └── plugin.json      # manifest: name + version — the ONLY file that belongs in this folder
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

The one rule that trips people up: component folders (`commands/`, `agents/`, `skills/`, `hooks/`) sit at the **repo root**, never inside `.claude-plugin/`.

## Current state

The plugin is fully assembled: `agents/code-reviewer.md` and `commands/summarize-changes.md` sit at the root, `.claude-plugin/plugin.json` defines `name: "qa-kit"`, `building-blocks/` is gone, and `README.md` describes the actual plugin. Validation passes and both components have been tested locally (see below).

## Validating the plugin

`.github/workflows/validate.yml` runs `.github/scripts/validate-plugin.js` on every push/PR. It checks, in order:

1. `.claude-plugin/plugin.json` exists, is valid JSON, and has a non-empty `name` field.
2. None of `commands/`, `agents/`, `skills/`, `hooks/` exist inside `.claude-plugin/`.
3. At least one of those component folders exists at the root and is non-empty.

Run it locally before pushing:

```
node .github/scripts/validate-plugin.js
```

A green run only confirms structure — it does not confirm the components actually work.

## Testing components locally

From the repo root:

```
claude --plugin-dir .
```

- Invoke the slash command as `/qa-kit:summarize-changes` (namespaced by the plugin's `name` in `plugin.json`).
- Trigger the subagent by asking Claude to review recent changes — it should be picked up automatically based on `agents/code-reviewer.md`'s `description`.
- After editing any component file, run `/reload-plugins` inside the session rather than restarting.

## Component conventions

- Any bundled script a component runs must be referenced via `${CLAUDE_PLUGIN_ROOT}`, never a hardcoded path — this keeps the plugin relocatable.
- Subagent files (`agents/*.md`) use frontmatter (`name`, `description`, `tools`, `model`) followed by the system prompt body — see `agents/code-reviewer.md` for the pattern.
- Command files (`commands/*.md`) are plain instructions/prompt text with no frontmatter required — see `commands/summarize-changes.md`.
