# qa-kit

A Claude Code plugin with two small QA helpers for everyday development: one to summarize what changed on a branch, and one to review recent code changes for bugs and unclear names.

## What's included

### Command: `/qa-kit:summarize-changes`

Summarizes the changes on the current branch. Lists each touched file with a one-line description of what changed, formatted to be short enough to paste directly into a pull-request description.

**Usage:**

```
/qa-kit:summarize-changes
```

Run it from a branch with commits ahead of main (or any changes you want summarized).

### Subagent: `code-reviewer`

Reviews recently changed code for bugs, missing error handling, and unclear naming. Returns a short list grouped by severity (high, medium, low), naming the file and what to fix in one sentence for each item.

**Usage:**

Ask Claude to review your recent changes, e.g.:

```
Can you review the changes I just made?
```

Claude will reach for the `code-reviewer` subagent automatically. You can also invoke it explicitly by name.

## Installing locally

From the repo root:

```
claude --plugin-dir .
```

After making edits to the plugin, run `/reload-plugins` to pick up the changes without restarting.
