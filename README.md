# qa-kit

A small Claude Code plugin that helps you wrap up a branch: summarise what changed, and get a quick code review before you open a pull request.

## What it adds

| Component | Type | Purpose |
|-----------|------|---------|
| `/qa-kit:summarize` | Slash command | Lists each file touched on the current branch with a one-line description of the change, short enough to paste into a PR description. |
| `/qa-kit:ship` | Slash command | One-word pre-PR workflow. Runs `code-reviewer` and `test-writer` in parallel, then (once both finish) has `test-writer` add regression tests for High-severity bugs, and ends with a PR-ready report. |
| `pr-description` | Skill | Drafts a PR description (title, what/why, how to test, risks) from the branch's git history and diff. Claude loads it when you ask for a PR description. |
| `scan-secrets` | Hook | After every `Write`/`Edit`, scans the file for hard-coded secrets (AWS keys, private keys, GitHub tokens, credentials) and tells Claude to remove them. Runs `scripts/scan-secrets.js` via `${CLAUDE_PLUGIN_ROOT}`. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It is read-only (`Read`, `Grep`, `Glob`, and `git diff/log/status`). |
| `test-writer` | Subagent | Writes and runs tests for code that has none, matching the project's existing framework. It edits test files only (`Read`, `Grep`, `Glob`, `Write`, `Edit`, `Bash`). |

## Install

```
/plugin marketplace add abdomostafa/claude-assemble-and-ship
/plugin install qa-kit@qa-kit-marketplace
```

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

After editing any component, run `/reload-plugins`.

### Summarise a branch

```
/qa-kit:summarize
```

Paste the output straight into your PR description.

### Review recent changes

Ask Claude in plain language, for example:

> Review my recent changes.

Claude will hand the work to the `code-reviewer` subagent, which is also meant to run right after you write or edit code.

## Layout

```
.
├── .claude-plugin/
│   ├── plugin.json            # manifest: name + version
│   └── marketplace.json       # lists this plugin for /plugin marketplace add
├── commands/
│   ├── summarize.md
│   └── ship.md
├── skills/
│   └── pr-description/
│       └── SKILL.md
├── hooks/
│   └── hooks.json
├── scripts/
│   └── scan-secrets.js
├── agents/
│   ├── code-reviewer.md
│   └── test-writer.md
└── README.md
```

Only the manifests (`plugin.json`, `marketplace.json`) live inside `.claude-plugin/`; the component folders sit at the repo root.

## Validation

A **Validate plugin** GitHub Action runs on every push. It checks that `plugin.json` exists with a `name` and that at least one component is present at the root.
