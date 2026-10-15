My plugin contains a command and an agent.

The command summarizes the changes on the current branch. Lists each file that was touched, and give a one-line description of what changed in it. Usage: /qa-kit:summarize-changes

The agent is a careful code reviewer. Looks at the recent changes and checks for bugs, missing error handling, and unclear names. Usage: we have to tell Claude that it has to use the code reviewer subagent.