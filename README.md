# plugin_mate

A small Claude Code plugin that helps to check a branch before you open a pull request.

It has two parts: one command that tells you what you changed, and one subagent that
looks at those changes and reports problems.

## What is inside

```
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
└── agents/
    └── code-reviewer.md
```

Only `plugin.json` lives in `.claude-plugin/`. The component folders stay in the root —
if you move them inside `.claude-plugin/`, Claude will not find them.

## Components

### `/plugin_mate:summarize-changes`

Lists every file you touched on the current branch and gives one line about each of them.
The output is short on purpose, so you can paste it into a pull request description.

The command is allowed to run `git status`, `git diff` and `git log`, so it does not ask
for permission on every git call.

### `code-reviewer` (subagent)

Reads the recent changes and looks for bugs, missing error handling and unclear names.
It answers with a short list grouped by severity: high, medium, low.

Inside the plugin its full name is `plugin_mate:code-reviewer`. Usually it is enough to
ask Claude to review your recent changes, but Claude does not always delegate on its own,
so if you want the agent for sure, name it: "use the code-reviewer subagent". It only has
`Read`, `Grep` and `Glob`, so it can read the code but cannot change it.

## How to use it

From the root of this repo:

```bash
claude --plugin-dir .
```

Then inside the session:

```
/plugin_mate:summarize-changes
```

and, for the review:

```
use the code-reviewer subagent to review my recent changes
```

After you edit any file of the plugin, run `/reload-plugins` — Claude reads the components
once at start, so without a reload you keep working with the old version.

## Check

`.github/workflows/validate.yml` runs on every push. It checks the structure: the manifest
exists and is valid JSON with a `name`, the component folders are in the root, and at least
one component is there. You can run the same check locally:

```bash
node .github/scripts/validate-plugin.js
```
