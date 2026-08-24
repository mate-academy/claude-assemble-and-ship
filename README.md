# qa-kit

A small Claude Code plugin for the last mile before you open a pull request: get a
readable summary of what changed on your branch, and get those changes reviewed.

## What it does

`qa-kit` bundles two components:

| Component | Type | What it's for |
| --- | --- | --- |
| `summarize-changes` | slash command | Turns the current branch's diff into a short, PR-ready description |
| `code-reviewer` | subagent | Reviews recent changes for bugs, missing error handling, and unclear names |

## Install

From the repo root:

```bash
claude --plugin-dir .
```

That loads the plugin for the session. After editing any plugin file, run
`/reload-plugins` inside Claude Code to pick up the changes.

## Usage

### `/qa-kit:summarize-changes`

Run it on a branch with commits or uncommitted work:

```
/qa-kit:summarize-changes
```

You get one line per touched file describing what changed — short enough to paste
straight into a pull-request description.

### `code-reviewer`

This one is a subagent, so you don't call it by name. Just ask for a review in
plain language and Claude reaches for it:

```
review my recent changes
```

It reads the changed files (read-only: `Read`, `Grep`, `Glob`) and returns a list
of findings grouped by severity — high, medium, low — with the file name and a
one-sentence fix for each.

A typical loop: make your changes → ask for a review → fix what comes back →
`/qa-kit:summarize-changes` → open the PR.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # the manifest: name + version
├── commands/
│   └── summarize-changes.md   # the slash command
├── agents/
│   └── code-reviewer.md       # the subagent
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`; the component folders sit at
the repo root. Neither component shells out to a bundled script — if you add one,
reference it through `${CLAUDE_PLUGIN_ROOT}` (e.g. `${CLAUDE_PLUGIN_ROOT}/scripts/foo.sh`)
rather than a hardcoded path, so it resolves wherever the plugin is installed.

## Validation

`.github/workflows/validate.yml` runs `node .github/scripts/validate-plugin.js` on
every push: it checks that the manifest exists, is valid JSON, has a `name`, that
no component folders were nested under `.claude-plugin/`, and that at least one
component is present.
