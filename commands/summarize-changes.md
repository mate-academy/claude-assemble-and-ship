---
description: Summarise the changes on the current branch, ready to paste into a PR description
argument-hint: "[base branch — defaults to main]"
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*), Bash(git merge-base:*), Bash(git rev-parse:*)
---

Summarise the changes on the current branch.

Compare against the base branch `$ARGUMENTS`. If no base was given, use `main`, or `master` if `main` doesn't exist. Include uncommitted changes too, if there are any.

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.
