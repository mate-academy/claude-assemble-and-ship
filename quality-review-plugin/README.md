## Summarize-changes plugin
 
This plugin has two components: 
- `code-reviewer.md` — a subagent that reviews recent changes
- `summarize-changes.md` — a slash command that calls the agent code-reviewer and afterwards summarizes what changed on a branch

### Plugin structure
 
```
.
├── .claude-plugin/
│   └── plugin.json            
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md                  
