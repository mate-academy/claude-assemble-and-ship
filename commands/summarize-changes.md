Summarise the changes on the current branch. Report these four groups separately:

1. **Commits vs. `main`** — the commits on the current branch that are not on `main` (`git log main..HEAD`), with the content of those changes from `git diff main...HEAD` and the touched files from `git diff --name-status main...HEAD`. If the `main` branch does not exist, say so explicitly here and skip the comparison.
2. **Staged** — changes in the index (`git diff --cached`).
3. **Unstaged** — changes in the working tree not yet staged (`git diff`).
4. **Untracked** — new files not yet known to git (`git ls-files --others --exclude-standard`), listed by name.

For the commits, staged and unstaged groups, list each file that was touched, with a one-line description of what changed in it. The diffs are read only to write these summaries; do not print the full diff in the answer. If a group is empty, including untracked, write "none" under its heading.

Keep the whole thing short enough to paste into a pull-request description.
