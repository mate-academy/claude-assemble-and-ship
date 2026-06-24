Summarise the changes on the current branch.

Run `git diff origin/main --name-status` to identify touched files, and `git diff origin/main -- <file>` to understand what changed in each. Also include any untracked files (`git ls-files --others --exclude-standard`).

List each file that was touched, and give a one-line description of what changed in it. Keep the whole thing short enough to paste into a pull-request description.
