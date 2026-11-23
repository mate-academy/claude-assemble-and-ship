---
description: Summarise the changes on the current branch
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*), Bash(git branch:*), Read
---
Summarise the changes on the current branch compared with `main`.

1. Run `git branch --show-current` to find the current branch.
2. Gather the changes. File lists alone are not enough: read the actual diff for every file you describe.
   - **On a branch other than `main`:** run `git log main..HEAD` for context and `git diff main...HEAD` for the committed edits. Then run `git diff HEAD` for any uncommitted edits, and mention those separately.
   - **On `main`:** there are no branch commits, so summarise the uncommitted work. Run `git diff HEAD` to see staged and unstaged edits together.
   - **Untracked files** (`??` in `git status --short`) don't appear in any diff, so read them with the Read tool.
   - For renames, use `git diff -M` so a moved file shows as a rename rather than a delete plus an add.
3. If the diff is large, use `git diff --stat` to get the file list, then `git diff <base> -- <path>` to read each file's changes in turn.

List each file that was touched, and give a one-line description of what changed in it, based on the diff and not just the file's name or status. Keep the whole thing short enough to paste into a pull-request description. If there are no changes, say so.
