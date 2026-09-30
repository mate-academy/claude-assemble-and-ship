# Change Review Kit

Plugin Claude Code pour résumer et relire les changements.

## Commande

`/change-review-kit:summarize-changes`

Résume les fichiers modifiés sur la branche courante.

## Sous-agent

`code-reviewer`

Relit les changements récents pour rechercher les bugs,
les erreurs non gérées et les noms peu clairs.

## Utilisation

Charger le plugin depuis la racine du dépôt :

`claude --plugin-dir .`

Tester la commande :

`/change-review-kit:summarize-changes`

Tester le sous-agent en demandant :

`Peux-tu relire les changements que je viens de faire ?`

## Validation

`node .github/scripts/validate-plugin.js`
