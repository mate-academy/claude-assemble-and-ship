# qa-kit

A Claude Code plugin with quality helpers for your branch: one command summarizes what changed, and one agent reviews the changes for bugs and unclear names.

## Commands

- `/qa-kit:summarize-changes` lists every file changed on the current branch compared to `main`, including untracked files, with a one-line description of each change. The output is short enough to paste into a pull-request description.

## Agents

- `code-reviewer` reviews your recent changes for bugs, missing error handling, and unclear names. It finds the changes itself with read-only git commands (`git status`, `git diff main`, `git log main..HEAD`) and reports findings grouped by severity (high, medium, low).

  To invoke it, ask Claude in plain language, for example "review my recent changes". To make sure Claude picks this agent, ask for it by name: "use the code-reviewer agent to review my changes".

## Requirements

- [Claude Code](https://claude.com/claude-code)
- git
- A local `main` branch, which both components use as the comparison base

## Installation and usage

1. Clone this repository.
2. From the repository root, start Claude Code with the plugin loaded:

   ```
   claude --plugin-dir .
   ```

3. Run `/qa-kit:summarize-changes`, or ask Claude to review your recent changes.
4. After editing any component, run `/reload-plugins` to load the new version.

## Plugin structure

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name, version, description
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer agent
└── README.md
```
