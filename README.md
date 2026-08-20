## qa-kit

A small Claude Code plugin that bundles a PR-summary command and a code-review subagent, ready to load with `claude --plugin-dir .`.

### What it does

- **`/qa-kit:summarize-changes`** — summarizes what changed on the current branch: one line per touched file, short enough to paste into a pull-request description.
- **`code-reviewer` subagent** — reviews recent changes for bugs, missing error handling, and unclear names, grouped by severity (high/medium/low). Claude reaches for it automatically when asked to review recent changes.

### Structure

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

### Usage

Load the plugin locally from the repo root:

```
claude --plugin-dir .
```

Then run the command:

```
/qa-kit:summarize-changes
```

Or trigger the subagent by asking Claude to review your recent changes.

After editing plugin files, run `/reload-plugins` to pick up changes without restarting.
