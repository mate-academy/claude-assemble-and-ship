# qa-kit

A small Claude Code plugin for preparing a pull request. It bundles a branch-summary command and a read-only code-review subagent.

## Components

- `commands/summarize-changes.md`: `/qa-kit:summarize-changes` summarizes each changed file from the actual branch diff.
- `agents/code-reviewer.md`: `code-reviewer` checks bugs, missing error handling, and unclear names using Read, Grep, and Glob.
- `.claude-plugin/plugin.json`: name `qa-kit`, version `0.1.0`. Component folders are at the repository root.

## Local use

From the repository root, start `claude --plugin-dir .`. Run `/qa-kit:summarize-changes`, then ask: “Use code-reviewer to review these changed files.” Pass the explicit diff/file list to the agent, since it has no Bash tool to obtain a Git diff itself. Use `/reload-plugins` after changing component files.

No component runs a bundled script. If one is added later, address it through `${CLAUDE_PLUGIN_ROOT}/scripts/...` so installation paths remain portable.

## Validation and execution status

Actually performed: created the plugin, moved supplied components to root folders, ran `node .github/scripts/validate-plugin.js`, and ran `claude plugin validate .`. Both structural checks passed.

The interactive command invocation and model-generated subagent review are a theoretical walkthrough, not an observed Claude run: this account does not have the paid plan required for Claude Code. Expected result: the namespaced command appears, returns a per-file summary, and the read-only reviewer returns findings grouped by severity. Structural validation does not prove those model outputs.
