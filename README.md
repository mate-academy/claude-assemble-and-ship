# qa-kit

A small Claude Code plugin for the last step before a pull request: see what changed, then get it reviewed.

## What it adds

| Component | Type | What it does |
|---|---|---|
| `/qa-kit:summarize-changes [base]` | Slash command | Lists every file touched on the current branch (compared with `base`, default `main`, plus uncommitted work), with a one-line description of each change. It's short enough to paste into a PR description. |
| `code-reviewer` | Subagent | Reviews recent changes for bugs, missing error handling and unclear names. It returns findings grouped by severity (high / medium / low), each with the file and a one-sentence fix. It covers uncommitted work, untracked files and the branch's commits, It has no Edit or Write tools and is told to run only read-only git commands (`status`, `diff`, `log`, `show`). Any other shell command still goes through your normal permission prompts. It runs on Sonnet. |

## Usage

Load the plugin from this repo's root:

```bash
claude --plugin-dir .
```

Then:

- **Summarise a branch:** run `/qa-kit:summarize-changes`, or `/qa-kit:summarize-changes develop` to compare against another base.
- **Get a review:** ask in plain words, e.g. *"review my recent changes"*. Claude hands the work to the `code-reviewer` subagent. You can also name it: *"use the code-reviewer agent on src/"*.

After editing any plugin file, run `/reload-plugins` to pick up the change.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json          # manifest: name, version, description
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

Only `plugin.json` lives in `.claude-plugin/`; the component folders sit at the root. Neither component runs a bundled script, so no paths need `${CLAUDE_PLUGIN_ROOT}`.

## Checks

The **Validate plugin** workflow (`.github/workflows/validate.yml`) runs on every push and pull request. It confirms the manifest is valid and has a `name`, that the component folders are at the root, and that at least one component exists.
