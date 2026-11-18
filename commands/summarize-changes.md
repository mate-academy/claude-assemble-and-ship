---
description: Summarise the files changed on the current branch, ready to paste into a PR description.
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*), Bash(git rev-parse:*), Bash(git branch:*)
---
Summarise the changes on the current branch.

Compare the current branch against `main` (use `origin/main` if there is no local `main`). Use `git diff --stat main...HEAD` to find the touched files and `git diff main...HEAD -- <file>` to see what changed. If `$ARGUMENTS` names a different base branch, compare against that instead.

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.

If the branch has no commits beyond the base, say so, and summarise any uncommitted changes from `git status` and `git diff HEAD` instead. If there are none of those either, say there is nothing to summarise.
