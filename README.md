# qa-kit

A small Claude Code plugin with two QA helpers: a slash command that summarises what changed on a branch, and a subagent that reviews recent code changes.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description of the change — short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high / medium / low), naming the file and the fix. Read-only (`Read`, `Grep`, `Glob`). |

## Usage

Load the plugin from the repo root:

```bash
claude --plugin-dir .
```

Then:

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review code:** ask Claude to review your recent changes (for example, "review what I just changed"). It delegates to the `code-reviewer` subagent, which fits the "use right after writing or editing code" trigger in its description.

After editing any component, run `/reload-plugins` to pick up the change without restarting.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md   # slash command
├── agents/
│   └── code-reviewer.md       # subagent
└── README.md
```

Only `plugin.json` lives in `.claude-plugin/`; the component folders sit at the repo root.

## Validation

The **Validate plugin** workflow (`.github/workflows/validate.yml`) runs on every push. It checks that the manifest exists and is valid JSON with a `name`, that no component folder is nested inside `.claude-plugin/`, and that at least one component is present. You can run the same check locally:

```bash
node .github/scripts/validate-plugin.js
```
