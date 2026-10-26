---
description: Summarize the changes on the current branch compared to main
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*)
---
Summarize the changes on the current branch compared to `main`. Include committed, staged, and unstaged changes (`git diff main`) as well as untracked files (`git status`).

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.
