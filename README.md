# qa-kit

A small Claude Code plugin that helps you review and describe your work. It adds one slash command and one subagent.

## What it adds

### Command: `/qa-kit:summarize-changes`

Summarises the changes on the current branch. It lists each touched file with a one-line description of what changed, short enough to paste into a pull-request description.

### Subagent: `code-reviewer`

Reviews recent changes for bugs, missing error handling, and unclear names. It returns a short list grouped by severity (high, medium, low). Each item names the file and says what to fix in one sentence. It is read-only (`Read`, `Grep`, `Glob`).

## Usage

Load the plugin from the repo root:

```
claude --plugin-dir .
```

Then:

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review code:** ask Claude to review your recent changes, for example "review my recent changes". Claude should delegate to `code-reviewer`. Claude can also invoke it on its own right after writing or editing code.

After editing the plugin, run `/reload-plugins` to pick up the changes.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
