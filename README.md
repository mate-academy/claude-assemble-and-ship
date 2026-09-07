## custom-plugin

A Claude Code plugin that bundles a PR-summary command and a code-review subagent.

### What's in here

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

### Commands

#### `/custom-plugin:summarize-changes`

Summarises the changes on the current branch: lists each touched file with a
one-line description of what changed, formatted to drop straight into a
pull-request description.

**Usage:**

```
/custom-plugin:summarize-changes
```

### Agents

#### `code-reviewer`

Reviews changed code for bugs, security issues, and unclear names. It
determines the diff to review in this order — staged/unstaged changes
(`git diff HEAD`, plus untracked files), falling back to the last commit if
there's nothing pending — then reports findings by severity (Critical,
Warning, Suggestion), capped at 10 items, each as `file:line` with the
specific fix. It never modifies repository state.

Claude reaches for this agent automatically after you write or edit code, or
you can ask for it directly:

```
Review my recent changes
```

### Local testing

From the repo root:

```
claude --plugin-dir .
```

Run the command with its namespaced name (`/custom-plugin:summarize-changes`),
and trigger the subagent by asking Claude to review your recent changes. Use
`/reload-plugins` after making edits to pick up changes without restarting.