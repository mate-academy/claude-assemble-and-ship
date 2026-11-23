# qa-kit

`qa-kit` is a small Claude Code plugin for the moment just before you open a pull request. It does two jobs:
- it writes the PR summary for you;
- it reviews what you changed for bugs.

## What's inside

| Component | Type | What it does |
|---|---|---|
| `summarize-changes` | slash command (`commands/summarize-changes.md`) | Lists every file touched on the current branch with a one-line description of the change. The output is short enough to paste into a PR description. |
| `code-reviewer` | subagent (`agents/code-reviewer.md`) | Reads the recent changes and returns findings grouped by severity (high / medium / low): bugs, missing error handling, unclear names. It is read-only (`Read, Grep, Glob`) and runs on Sonnet. |

## Use it

Load it locally from this folder:

```
claude --plugin-dir .
```

- **Summary:** run `/qa-kit:summarize-changes`. Plugin commands are namespaced as `plugin-name:command`.
- **Review:** ask *"review my recent changes"*. Claude picks the `code-reviewer` subagent from its description. You can also name it directly: *"use the code-reviewer subagent on my changes"*.
- **After editing a component:** run `/reload-plugins`.

## Layout

```
.claude-plugin/plugin.json   # manifest: name "qa-kit", version 0.1.0
commands/summarize-changes.md
agents/code-reviewer.md
```

Only `plugin.json` lives inside `.claude-plugin/`. The component folders sit at the root. There are no bundled scripts. If one is added later, components will reference it through `${CLAUDE_PLUGIN_ROOT}`, never through a hardcoded path.

## Checks

- `node .github/scripts/validate-plugin.js` reports **Plugin looks valid ✓**. CI runs the same check as **Validate plugin**.
- `claude plugin validate .` reports **Validation passed**.
