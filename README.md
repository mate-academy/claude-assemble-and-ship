# qa-kit

A small Claude Code plugin for everyday change hygiene: summarise what changed on a branch, and get a quick review of recent edits.

## What's inside

| Component | Type | What it does |
|-----------|------|--------------|
| `summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description of the change — short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity (high / medium / low). |

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json      # manifest: name + version
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Usage

Load the plugin locally from the repo root:

```bash
claude --plugin-dir .
```

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review recent changes:** ask Claude something like *"review my recent changes"* — it delegates to the `code-reviewer` subagent. You can also name it explicitly: *"use the code-reviewer agent"*.

After editing any component, run `/reload-plugins` to pick up the changes.

## Validation

The **Validate plugin** GitHub Action (`.github/scripts/validate-plugin.js`) checks on every push that the manifest exists and has a `name`, that component folders sit at the repo root, and that at least one component is present. Run it locally with:

```bash
node .github/scripts/validate-plugin.js
```
