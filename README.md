# qa-kit

A small Claude Code plugin that bundles two lightweight quality-assurance helpers: a slash command for writing branch summaries and a subagent for reviewing recent code changes.

## What it does

`qa-kit` adds two components to Claude Code:

- **`/qa-kit:summarize-changes`** — a slash command that summarises the changes on the current branch. It lists each touched file with a one-line description of what changed, kept short enough to paste straight into a pull-request description.
- **`code-reviewer`** — a subagent that reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. It has read-only access (`Read`, `Grep`, `Glob`) and runs on Sonnet.

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

## Installing

From the repo root, load the plugin into a Claude Code session:

```
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` to pick up the changes.

## Using it

**Summarise a branch:**

```
/qa-kit:summarize-changes
```

Run it while you have unmerged work on a branch; paste the output into your PR description.

**Review recent changes:** ask Claude to review what you just wrote, e.g.

```
Review my recent changes.
```

Claude will delegate to the `code-reviewer` subagent, which reports back a severity-grouped list of issues. You can also invoke it explicitly by asking Claude to "use the code-reviewer subagent".
