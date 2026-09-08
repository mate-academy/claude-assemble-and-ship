# qa-kit

A small Claude Code plugin for the last mile of a change: get it reviewed, then get it written up.

It adds one slash command and one subagent.

| Component | Type | What it does |
| --- | --- | --- |
| `/qa-kit:summarize-changes` | command | Lists every file touched on the current branch with a one-line description of what changed — short enough to paste into a PR description. |
| `code-reviewer` | subagent | Reads the recent changes and returns findings grouped by severity (high / medium / low), each naming the file and the one-sentence fix. |

## Install

From this repo's root:

```bash
claude --plugin-dir .
```

That loads the plugin for the session. After editing any component, run `/reload-plugins` to pick the changes up without restarting.

## Usage

**Summarise a branch.** Run the command by its namespaced name:

```
/qa-kit:summarize-changes
```

You get a per-file changelog for the current branch, sized for a pull-request body.

**Review changes.** The subagent is triggered by intent, not by name — just ask:

```
review my recent changes
```

Claude reaches for `code-reviewer`, which runs read-only (`Read`, `Grep`, `Glob`) on `sonnet` and reports back. It can't edit your files, so the findings are yours to act on.

The natural pairing is review first, summarise second — fix what the reviewer flags, then write the PR description from the summary.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md   # → /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # → code-reviewer subagent
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`; the component folders sit at the repo root. If you add a component that shells out to a bundled script, reference it through `${CLAUDE_PLUGIN_ROOT}` rather than a hardcoded path, so it resolves wherever the plugin is installed.

## Development

`.github/workflows/validate.yml` runs `node .github/scripts/validate-plugin.js` on every push and pull request. It checks that the manifest exists, parses, and has a `name`; that no component folder has drifted into `.claude-plugin/`; and that at least one component is present.

A green check means the structure is right — not that the components behave. Confirm that by loading the plugin locally and running each piece.
