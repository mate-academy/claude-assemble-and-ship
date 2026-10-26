# qa-kit

Небольшой плагин для Claude Code, который помогает с ревью изменений.

## Что внутри

| Компонент | Тип | Что делает |
|-----------|-----|------------|
| `/qa-kit:summarize-changes` | команда | Кратко описывает, что изменилось в ветке |
| `code-reviewer` | субагент | Проверяет недавние изменения и даёт замечания |

## Как использовать

1. Запустите Claude Code с плагином: `claude --plugin-dir .`
2. Для сводки изменений выполните `/qa-kit:summarize-changes`
3. Для ревью попросите: «Review my recent changes» - Claude подключит `code-reviewer`

## Структура

.claude-plugin/plugin.json, commands/, agents/