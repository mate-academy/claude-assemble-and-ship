# qa-kit

A small Claude Code plugin for reviewing and describing code changes.

## Components

- `/qa-kit:summarize-changes` — slash command that lists each file changed on the current branch with a one-line description, ready to paste into a PR.
- `code-reviewer` — read-only subagent that reviews recent changes for bugs, missing error handling and unclear names, grouped by severity.

## Usage

```bash
claude --plugin-dir .
```

- Run `/qa-kit:summarize-changes` to summarise your branch.
- Ask "Review my recent changes" to trigger `code-reviewer`.
- Run `/reload-plugins` after editing plugin files.

## Structure

```
./
├── .claude-plugin/plugin.json
├── commands/summarize-changes.md
└── agents/code-reviewer.md
```

A GitHub Actions workflow (**Validate plugin**) checks this structure on every push.
