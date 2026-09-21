QA-kit plugin:
This plugin contains a slash command and a sub-agent. The slash command that summarizes what changed on a branch, the subagent reviews recent changes.
The command can be used directly after "/": it can be found as "/qa-kit:summarize-changes". The subagent can be referenced directly or indirectly when user tells Claude what to do.   
Usage: start Claude from PowerShell with `--plugin-dir` switch, and add a reference to its folder.