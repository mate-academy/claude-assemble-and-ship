# qa-kit

A Claude Code plugin for Git change summaries and code review.

| | |
|---|---|
| **Name** | `qa-kit` |
| **Version** | `0.1.0` |
| **Purpose** | Git change summaries and code review |

## What's included

| Component | Type | Description |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Summarises what changed on a branch |
| `code-reviewer` | Subagent | Reviews recent changes |

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # name + version (the manifest)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` goes inside `.claude-plugin/`; the component folders sit at the repository root.

## Test locally

From the repository root:

```bash
claude --plugin-dir .
```

## Usage

**Summarise changes** — run the namespaced command inside Claude Code:

```
/qa-kit:summarize-changes
```

**Request a code review** — ask Claude to review your recent changes, for example:

```
Please review my recent changes.
```

Claude should delegate the work to the `code-reviewer` subagent.

## Reload after changes

After editing any plugin file, reload without restarting Claude Code:

```
/reload-plugins
```

## Validation and submission

- The **Validate plugin** GitHub check runs on every push. It turns green when `.claude-plugin/plugin.json` exists, is valid JSON and has a `name`, the component folders sit at the root, and at least one component is present.
- A green check confirms the structure only. Confirm it works by loading the plugin locally and running each component.
- To submit, open a pull request from your fork into `mate-academy/claude-assemble-and-ship` (base: `main`). Check that the base repository is `mate-academy`, not your own fork. The review starts automatically.
