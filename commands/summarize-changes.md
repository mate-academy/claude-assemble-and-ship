---
description: Summarise the changes on the current branch, file by file, ready to paste into a PR description.
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*)
---
Summarise the changes on the current branch, compared with the repository's default branch (usually `main`). Use `git diff <default-branch>...HEAD --stat` and `git log <default-branch>..HEAD --oneline` to see what changed, and mention any uncommitted changes from `git status`.

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.
