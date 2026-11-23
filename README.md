# qa-kit

A small Claude Code plugin with two helpers for checking your work before you open a pull request.

| Component | Name | What it does |
|---|---|---|
| Slash command | `/qa-kit:summarize-changes` | Summarises what changed on the current branch. It lists each file that was touched with a one-line description, short enough to paste into a pull-request description. |
| Subagent | `code-reviewer` | Reviews recent changes for bugs, missing error handling and unclear names. It returns a short list grouped by severity (high, medium, low), naming the file and giving a one-sentence fix for each item. It can only read files (`Read`, `Grep`, `Glob`): it cannot edit files or run shell commands, so it cannot run `git` itself. It runs on the `sonnet` model. |

## How to use it

Load the plugin from this folder (it is loaded for that session only):

```bash
claude --plugin-dir .
```

Then:

- **Summarise a branch:** run `/qa-kit:summarize-changes`.
- **Review your changes:** ask for the subagent by name, for example: "Use the `qa-kit:code-reviewer` subagent to review my recent changes."
  - Claude does not always hand a review to a subagent. If you only say "Review my recent changes", it often reviews them itself, so automatic delegation is not guaranteed. Naming the subagent is the reliable way.
  - The subagent is read-only and has no shell, so it cannot see a git diff by itself. Claude tells it which commits and files to look at. For a precise review, name the files or commits in your request, for example: "Use the `qa-kit:code-reviewer` subagent to review `src/calc.js` and `src/config.js`."
- **After editing a component,** run `/reload-plugins` to pick up the change.

## Layout

```
.
├── .claude-plugin/
│   └── plugin.json            # name + version (the manifest)
├── commands/
│   └── summarize-changes.md   # the /qa-kit:summarize-changes command
├── agents/
│   └── code-reviewer.md       # the code-reviewer subagent
└── README.md
```

Only `plugin.json` lives inside `.claude-plugin/`. The component folders sit at the repo root.

## Checking the structure

The "Validate plugin" GitHub Actions check runs on every push. It passes when:

- `.claude-plugin/plugin.json` exists, is valid JSON and has a `name`,
- no component folder is inside `.claude-plugin/`,
- at least one component folder at the root has content.

You can run the same check locally:

```bash
node .github/scripts/validate-plugin.js
claude plugin validate .
```

A passing check only means the structure is right. To see that the plugin works, load it with
`claude --plugin-dir .` and run each piece.
