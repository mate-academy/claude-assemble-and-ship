# qa-kit

Plugin de Claude Code com ferramentas de apoio à revisão de mudanças em um branch. Ele reúne um comando que resume o que foi alterado e um subagent que procura problemas no código.

## O que ele adiciona

| Componente | Tipo | Arquivo | Para que serve |
|---|---|---|---|
| `summarize-changes` | Comando (slash command) | `commands/summarize-changes.md` | Lista os arquivos alterados no branch atual, com uma linha descrevendo cada mudança. O resultado é curto o bastante para colar na descrição de um Pull Request. |
| `code-reviewer` | Subagent | `agents/code-reviewer.md` | Revisa as mudanças recentes em busca de bugs, tratamento de erro ausente e nomes pouco claros. Usa somente as ferramentas `Read`, `Grep` e `Glob`, ou seja, não edita arquivos. |

## Estrutura

```
.
├── .claude-plugin/
│   └── plugin.json            # nome e versão do plugin
├── commands/
│   └── summarize-changes.md
├── agents/
│   └── code-reviewer.md
└── README.md
```

## Instalação e uso

Na raiz do repositório, carregue o plugin com:

```bash
claude --plugin-dir .
```

Depois disso, use:

- **Resumo das mudanças:** `/qa-kit:summarize-changes`
- **Revisão de código:** peça ao Claude para revisar as suas mudanças recentes (por exemplo, "revise o que acabei de alterar"). Ele deve acionar o subagent `code-reviewer` automaticamente.

Depois de editar qualquer arquivo do plugin, use `/reload-plugins` para recarregar.

## Validação

O repositório tem um check automático (`.github/scripts/validate-plugin.js`), executado pelo GitHub Actions a cada push. Ele confirma que:

- `.claude-plugin/plugin.json` existe, é JSON válido e tem `name`;
- as pastas de componentes estão na raiz, não dentro de `.claude-plugin/`;
- há pelo menos um componente.

Para rodar localmente:

```bash
node .github/scripts/validate-plugin.js
```
