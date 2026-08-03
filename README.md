# qa-kit

A small Claude Code plugin for the two things you do at the end of a piece of work: **write up what changed**, and **get it reviewed**.

It bundles one slash command and one subagent. Both operate on the changes in your working branch — neither needs configuration, and neither runs a bundled script.

## What's inside

| Component | Type | What it does |
| --- | --- | --- |
| `summarize-changes` | slash command | Lists each touched file with a one-line description of what changed, short enough to paste into a PR description. |
| `code-reviewer` | subagent | Reviews recent changes for bugs, missing error handling, and unclear names. Returns findings grouped by severity. |

## Install

Load it straight from a clone:

```bash
git clone https://github.com/christian-salafia/claude-assemble-and-ship.git
cd claude-assemble-and-ship
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` — you don't need to restart Claude.

## Usage

### `/qa-kit:summarize-changes`

Run it once you've finished a chunk of work:

```
/qa-kit:summarize-changes
```

Commands are namespaced by plugin name, so it's `/qa-kit:summarize-changes`, not `/summarize-changes`. You get back a per-file summary sized for a pull-request body.

### `code-reviewer`

This one is invoked by description rather than by name — just ask for a review and Claude reaches for it:

```
Review my recent changes.
```

It reads with `Read`, `Grep`, and `Glob` only, so it inspects code but never edits it. Findings come back grouped **high / medium / low**, each naming a file and the one-sentence fix.

A natural pairing is to review first, then summarise — so the summary describes the code you actually intend to ship.

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

Only `plugin.json` lives inside `.claude-plugin/`. The component folders sit at the repo root — putting `commands/` or `agents/` inside `.claude-plugin/` is the one mistake that reliably breaks a plugin.

## Development

`.github/workflows/validate.yml` runs on every push and checks that the manifest is valid JSON with a `name`, that the component folders are at the root, and that at least one component exists. Run it yourself before pushing:

```bash
node .github/scripts/validate-plugin.js
```

A green check confirms the *structure*. To confirm it actually works, load the plugin locally and run each piece.
