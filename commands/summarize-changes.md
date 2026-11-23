---
description: Summarise the changes on the current branch
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*)
---
Summarise the changes on the current branch compared with `main`.

Use `git log main..HEAD` and `git diff main...HEAD --stat` to see committed changes, and `git status` for anything not yet committed (mention uncommitted work separately). If the branch is `main` itself, summarise the uncommitted changes instead.

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.
