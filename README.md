# qa-kit

Plugin Claude Code kecil untuk bantu kerjaan harian: ringkas perubahan di branch dan review kode terbaru.

## Isi plugin

| Komponen | Jenis | Fungsi |
|---|---|---|
| `/qa-kit:summarize-changes` | Slash command | Meringkas perubahan di branch aktif: tiap file yang berubah plus deskripsi satu baris. Cukup singkat untuk ditempel ke deskripsi pull request. |
| `code-reviewer` | Subagent | Mereview kode yang baru ditulis atau diubah. Mencari bug, error handling yang kurang, dan nama yang tidak jelas. Hasilnya dikelompokkan per severity (high, medium, low). |

## Cara pakai

Jalankan dari root repo:

```bash
claude --plugin-dir .
```

- **Ringkas perubahan:** ketik `/qa-kit:summarize-changes`
- **Review kode:** minta Claude, misalnya "review perubahan terakhir gue". Claude akan memakai subagent `code-reviewer`.

Setelah mengedit file plugin, jalankan `/reload-plugins`.

## Struktur

```
.claude-plugin/plugin.json   # manifest (name, version)
commands/summarize-changes.md
agents/code-reviewer.md
```
