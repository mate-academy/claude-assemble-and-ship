# qa-kit

A small Claude Code plugin that helps you check your work before it goes out. It adds one slash command for summarising a branch and one subagent for reviewing recent code changes.

## What it adds

| Component | Type | Name | What it does |
| --- | --- | --- | --- |
| `commands/summarize-changes.md` | Slash command | `/qa-kit:summarize-changes` | Summarises the changes on the current branch: lists each touched file with a one-line description. Short enough to paste into a pull-request description. |
| `agents/code-reviewer.md` | Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling, and unclear names. Returns a short list grouped by severity (high, medium, low), naming the file and the fix for each item. Read-only (`Read`, `Grep`, `Glob`) and runs on Sonnet. |

## Installation

Load the plugin from a local checkout:

```sh
git clone <this-repo>
cd claude-assemble-and-ship
claude --plugin-dir .
```

After editing any component, run `/reload-plugins` to pick up the changes.

## Usage

### `/qa-kit:summarize-changes`

Run it from a branch with changes:

```
/qa-kit:summarize-changes
```

Example output:

```
- src/auth.js: added token expiry check
- src/routes/login.js: return 401 instead of 500 on bad credentials
- test/auth.test.js: added tests for expired tokens
```

Paste the result straight into your PR description.

### `code-reviewer`

The subagent is invoked automatically when you ask Claude to review code you just wrote or edited. For example:

```
Review my recent changes.
```

Claude delegates to `code-reviewer`, which returns findings like:

```
High
- src/auth.js: handle the case where the token is missing before calling verify().

Medium
- src/routes/login.js: wrap the database call in try/catch and return a clear error.

Low
- src/utils.js: rename `d` to `daysUntilExpiry`.
```

You can also ask for it by name: "Use the code-reviewer agent on my last commit."

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # manifest: name + version
├── commands/
│   └── summarize-changes.md   # /qa-kit:summarize-changes
├── agents/
│   └── code-reviewer.md       # code-reviewer subagent
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`; the component folders sit at the plugin root.

## Validation

The **Validate plugin** GitHub Action runs on every push and checks that `plugin.json` is valid JSON with a `name`, that component folders are at the root, and that at least one component exists.
