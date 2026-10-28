# pr-helper

Un plugin de Claude Code para preparar pull requests: resume los cambios de tu rama y revisa el código reciente antes de pedir revisión.

## Qué agrega

| Componente | Nombre | Qué hace |
|---|---|---|
| Comando | `/pr-helper:summarize-changes` | Resume los cambios de la rama actual: lista cada archivo tocado con una línea de descripción, listo para pegar en la descripción del PR. |
| Subagente | `code-reviewer` | Revisa los cambios recientes en busca de bugs, manejo de errores faltante y nombres poco claros. Devuelve una lista corta por severidad (alta, media, baja). Solo lee código (Read, Grep, Glob). |

## Cómo usarlo

1. Desde la raíz del repo, carga el plugin: `claude --plugin-dir .`
2. Resume tu rama: `/pr-helper:summarize-changes`
3. Pide una revisión y Claude usará el subagente `code-reviewer`: "Revisa mis cambios recientes"
4. Si editas el plugin, recárgalo con `/reload-plugins`.

## Estructura

- `.claude-plugin/plugin.json` — manifiesto (nombre y versión)
- `commands/summarize-changes.md`
- `agents/code-reviewer.md`
- `README.md`

Ningún componente ejecuta scripts incluidos, así que no hace falta `${CLAUDE_PLUGIN_ROOT}`.
