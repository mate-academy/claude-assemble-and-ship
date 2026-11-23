# qa-kit

A small Claude Code plugin for QA and code-review helpers. It bundles:

- **`/qa-kit:summarize-changes`** — a slash command that summarises the changes on the current branch, file by file, in four groups: commits relative to `main`, staged, unstaged and untracked files. It is short enough to paste into a pull-request description.
- **`code-reviewer`** — a subagent that reviews recently changed code for bugs, missing error handling and unclear names, and returns findings grouped by severity (high, medium, low).

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # plugin manifest (name, version)
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

## Installation (local load)

The plugin is not published to a marketplace. Load it from a local copy of this repository:

```bash
claude --plugin-dir /path/to/claude-assemble-and-ship
```

Run `/reload-plugins` inside Claude Code after you edit any plugin file.

## Usage

### Summarise changes

Run the slash command from inside a git repository, on the branch you want to describe:

```
/qa-kit:summarize-changes
```

If the repository has no `main` branch, the command says so and skips the commits-vs-`main` group.

### Review recent changes

The `code-reviewer` subagent is triggered by asking Claude for a review, for example:

```
Review my recent changes for bugs and unclear names.
```

The calling Claude collects the diff and the list of changed files for both the staged and the unstaged changes (for example with `git diff --cached`, `git diff`, `git diff --cached --name-status` and `git diff --name-status`), then delegates the review to `code-reviewer`. The agent has no Bash access (tools: Read, Grep, Glob), so it cannot run git itself. If the diff or the file list is missing, it returns a short message listing what is missing instead of reviewing. Otherwise it reads and searches the surrounding code and returns a short, severity-grouped list.

## Requirements

- Claude Code with plugin support
- A git repository for `/qa-kit:summarize-changes`
