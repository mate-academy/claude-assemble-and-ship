# qa-kit
A plugin that works as a code reviewer and summarizes changes.

## Components
- commands: 
    - summarize-changes - a command that runs the changes summarizing
- agents: 
    - code-reviewer - an agent that reviews changed code for bugs and unclear names.

## Usage
Load the plugin from the repo root:

```
claude --plugin-dir .
```

Summarize the changes on the current branch:

```
/qa-kit:summarize-changes
```

Run a code review: ask Claude in plain words, for example "review my recent changes". Claude will hand the task to the `code-reviewer` subagent.

After editing the plugin files, run `/reload-plugins`.
