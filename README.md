# qa-kit

Плагін Claude Code для перегляду та рев'ю змін у гілці.

## Що входить

- `/qa-kit:summarize-changes` — команда, яка підсумовує зміни в гілці
- `code-reviewer` — сабагент, який робить рев'ю останніх змін

## Структура

```text
.
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Як використовувати

1. Запустіть Claude Code з кореня репозиторію:

   ```bash
   claude --plugin-dir .
   ```

2. Щоб отримати підсумок змін у гілці, виконайте:

   ```text
   /qa-kit:summarize-changes
   ```

3. Щоб запустити рев'ю, напишіть Claude:

   ```text
   Review my recent changes
   ```

   Для цього запиту Claude має використати сабагент `code-reviewer`.

4. Якщо ви змінили файли плагіна, застосуйте зміни командою:

   ```text
   /reload-plugins
   ```