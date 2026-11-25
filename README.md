## code-review

A Claude Code plugin that reviews recent changes and summarizes the changes on a branch.

### What's in here

| Component | Type | What it does |
| --- | --- | --- |
| `/code-review:summarize-changes` | Slash command | Lists each file touched on the current branch with a one-line description of what changed, short enough to paste into a pull-request description. |
| `code-reviewer` | Subagent | Checks recent changes for bugs, missing error handling and unclear names, and returns findings grouped by severity (high, medium, low). |

### Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # name, version and description (the manifest)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

### How to use it

From the repo root, load the plugin:

```bash
claude --plugin-dir .
```

**Summarize the changes on your branch** by running the command:

```
/code-review:summarize-changes
```

**Review your code** by asking Claude, for example:

```
Review my recent changes
```

Claude should hand the task to the `code-reviewer` subagent. It uses git to find what to review:

- uncommitted changes, including new untracked files
- if there are none, the commits on your branch compared with `main`

You can also name specific files or commits for it to review.

The subagent runs on Sonnet with `Read`, `Grep`, `Glob` and `Bash`. It's instructed to use `Bash` only to inspect the repository, without editing files or changing git state. That is an instruction, not an enforced restriction, so check any permission prompts before approving them.

If you edit the plugin while Claude Code is running, use `/reload-plugins` to pick up the changes.
