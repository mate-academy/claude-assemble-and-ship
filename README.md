# review-kit

A small Claude Code plugin for the last step before a pull request: see what changed on your branch, then get it reviewed.

## What it adds

| Component | Name | What it does |
|---|---|---|
| Slash command | `/review-kit:summarize-changes` | Lists every file touched on the current branch with a one-line description of the change, short enough to paste into a PR description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names, and returns a short list grouped by severity (high / medium / low), each with the file and a one-sentence fix. Read-only (`Read`, `Grep`, `Glob`), runs on Sonnet. |

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json        # manifest: name, version, description
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` lives in `.claude-plugin/`; the component folders sit at the root so Claude Code can discover them.

## Try it locally

From the repo root:

```
claude --plugin-dir .
```

Then, in the session:

- run `/review-kit:summarize-changes` on a branch with some commits;
- ask "review my recent changes" and Claude hands the job to the `code-reviewer` subagent.

After editing any file in the plugin, run `/reload-plugins` to pick up the change without restarting.

## Versioning

`version` in `plugin.json` follows MAJOR.MINOR.PATCH: bump PATCH for fixes, MINOR for new commands or agents, MAJOR for anything that breaks existing names.
