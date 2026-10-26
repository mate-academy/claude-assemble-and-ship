# qa-kit

Claude Code plugin with two quality helpers.

## Commands
- `/qa-kit:summarize-changes` - summarizes what changed on the current branch.

## Agents
- `code-reviewer` - reviews your recent changes. Trigger it by asking Claude: "review my recent changes".

## Usage
Load the plugin from the repo root:

    claude --plugin-dir .

Use `/reload-plugins` after editing any component.
