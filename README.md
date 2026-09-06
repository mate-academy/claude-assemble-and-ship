# qa-kit

Un plugin de Claude Code con dos herramientas rapidas de control de calidad para tu flujo de trabajo diario: resumir los cambios de una rama y revisar codigo recien modificado.

## Que incluye

### Comando: `/qa-kit:summarize-changes`

Resume los cambios de la rama actual: lista cada archivo tocado junto con una descripcion de una linea de lo que cambio. Pensado para pegarse directamente en la descripcion de un pull request.

**Uso:**

```
/qa-kit:summarize-changes
```

### Subagente: `code-reviewer`

Revisa los cambios recientes en busca de bugs, manejo de errores faltante y nombres poco claros. Devuelve una lista corta agrupada por severidad (alta, media, baja), indicando el archivo afectado y que corregir en cada caso.

Claude invoca este subagente automaticamente cuando le pides que revise tus cambios recientes, o puedes pedirlo explicitamente:

**Uso:**

```
Revisa mis cambios recientes
```

## Instalacion local

Desde la raiz de este repositorio:

```
claude --plugin-dir .
```

Luego ejecuta `/qa-kit:summarize-changes` o pide una revision de codigo para activar `code-reviewer`. Despues de editar cualquier componente, corre `/reload-plugins` para recargar los cambios sin reiniciar la sesion.
