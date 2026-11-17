# qa-kit

A small Claude Code plugin for checking your work before you open a pull request. It adds one slash command that summarises the changes on your branch, and one subagent that reviews them.

## What's included

| Component | Type | What it does |
| --- | --- | --- |
| `summarize-changes` | Slash command | Lists every file touched on the current branch with a one-line description of what changed. The output is short enough to paste straight into a pull-request description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. Returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It is read-only (`Read`, `Grep`, `Glob`) and runs on Sonnet. |

## Installation

Clone the repository and load the plugin from its root:

```bash
git clone <repository-url>
cd claude-assemble-and-ship
claude --plugin-dir .
```

After editing any plugin file, run `/reload-plugins` in the session to pick up the changes.

## Usage

### Summarise your branch

Commands from a plugin are namespaced with the plugin name:

```
/qa-kit:summarize-changes
```

### Review your changes

The `code-reviewer` subagent starts automatically when you ask Claude for a review, for example:

```
Review my recent changes.
```

It is also meant to be used straight after you write or edit code, so Claude may call it on its own.

A typical workflow before opening a PR is to run the reviewer, fix what it finds, then run `/qa-kit:summarize-changes` to write the PR description.

## Project structure

```
.
├── .claude-plugin/
│   └── plugin.json              # plugin manifest (name, version)
├── commands/
│   └── summarize-changes.md     # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md         # code-reviewer subagent
├── .github/
│   ├── workflows/validate.yml   # CI: "Validate plugin" check
│   └── scripts/validate-plugin.js
└── README.md
```

Only `plugin.json` goes inside `.claude-plugin/`. The component folders (`commands/`, `agents/`) sit at the repository root.

## Validation

Every push and pull request runs the **Validate plugin** GitHub Actions workflow. It checks that:

- `.claude-plugin/plugin.json` exists, is valid JSON, and has a non-empty `name`
- no component folders (`commands`, `agents`, `skills`, `hooks`) are inside `.claude-plugin/`
- at least one component folder at the root contains a file

To run the same check locally (requires Node.js):

```bash
node .github/scripts/validate-plugin.js
```

A passing check only confirms the structure. To check that the plugin works, load it with `claude --plugin-dir .` and try the command and the subagent.

## Extending the plugin

- Add a slash command by putting a Markdown file in `commands/`. The file name becomes the command name (`/qa-kit:<file-name>`).
- Add a subagent by putting a Markdown file with `name`, `description` and optional `tools` / `model` frontmatter in `agents/`.
- If a component runs a bundled script, reference it through `${CLAUDE_PLUGIN_ROOT}`, never a hardcoded path.
- Bump `version` in `.claude-plugin/plugin.json` when you release changes.
