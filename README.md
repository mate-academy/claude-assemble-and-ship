# pr-prep-kit

A small Claude Code plugin for the two things worth doing right before you
open a pull request: knowing exactly what changed, and having someone
sanity-check the code first.

## What it does

- **`/pr-prep-kit:summarize-changes`** — a command that summarizes what
  changed on the current branch: every file touched, with a one-line
  description of the change. Short enough to paste straight into a PR
  description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs,
  missing error handling, and unclear naming. It reports findings grouped
  by severity (high/medium/low), each with the file and a one-sentence fix.
  Claude reaches for it on its own whenever you ask for a review of your
  recent changes — you don't need to name it.

## Install / use locally

From the plugin's repo root:

```
claude --plugin-dir .
```

Then:

- Run `/pr-prep-kit:summarize-changes` to get a branch summary.
- Ask something like "review my recent changes" — Claude will use the
  `code-reviewer` subagent automatically.

After editing a component, run `/reload-plugins` to pick up the change
without restarting the session.

## Structure

```
.
├── .claude-plugin/
│   └── plugin.json        # name + version (the manifest)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
