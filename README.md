## summarizer

A Claude Code plugin for wrapping up a branch: summarize what changed, catch obvious bugs before review, and turn raw meeting notes into a clean summary.

### What's in here

**Command**

- `/summarizer:summarize-changes` — summarizes the changes on the current branch, file by file, in a format short enough to paste straight into a pull-request description.

**Agent**

- `code-reviewer` — reviews recently changed code for bugs, missing error handling, and unclear names. Claude reaches for this automatically when you ask it to review your changes; you can also invoke it directly.

**Skill**

- `meeting-notes` — converts raw post-meeting notes into a structured summary (decisions, action items with owner/deadline, open questions). Triggers automatically when you paste meeting notes.

### Usage

1. Load the plugin locally from the repo root:
   ```
   claude --plugin-dir .
   ```
2. Run the command: `/summarizer:summarize-changes`
3. Ask Claude to review your recent changes to trigger the `code-reviewer` subagent.
4. Paste raw meeting notes to trigger the `meeting-notes` skill.
5. After making changes to this plugin, run `/reload-plugins` to pick them up.
