# qa-kit

A small Claude Code plugin that helps you review and summarize changes before opening a pull request.

### What it does

- Summarizes what changed on your current branch, in a format short enough to paste into a PR description.
- Reviews your recent code changes for bugs, missing error handling, and unclear naming.

### Commands

| Command | What it does |
| --- | --- |
| `/qa-kit:summarize-changes` | Lists each file touched on the current branch with a one-line description of what changed in it. |

### Agents

| Agent | What it does |
| --- | --- |
| `code-reviewer` | Reviews recent changes for bugs and unclear names, returning findings grouped by severity (high, medium, low), with the file and a one-sentence fix for each. |

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Run the summarize command directly:

```
/qa-kit:summarize-changes
```

Trigger the code reviewer by asking Claude to review your recent changes — it will reach for the `code-reviewer` agent automatically.

After editing a command or agent, reload with `/reload-plugins`.

### Structure

```
.
├── .claude-plugin/
│   └── plugin.json            # plugin manifest (name + version)
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```
