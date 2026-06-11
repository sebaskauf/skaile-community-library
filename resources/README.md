# Resources 📂

Hier liegen Vorlagen und Dateien, die keine installierbaren Skills sind: CLAUDE.md-Templates, settings.json-Beispiele, nützliche Prompts.

## Nutzen

Einfach die Datei öffnen, Inhalt kopieren und in dein Projekt übernehmen. Oder sag Claude Code:

> Hol mir das CLAUDE.md-Template [Name] aus der SKAILE Community Library und pass es an mein Projekt an.

## Struktur

```
resources/
├── claude-md/    # CLAUDE.md-Vorlagen (pro Vorlage eine Datei, Dateiname = Thema)
├── settings/     # settings.json-Beispiele, Hooks-Konfigurationen
└── prompts/      # Wiederverwendbare Prompts und Prompt-Vorlagen
```

## Eigene Vorlage einreichen

Genauso wie bei Skills: Sag Claude einfach

> Teile meine CLAUDE.md-Vorlage [Name/Pfad] mit der SKAILE Community.

(braucht den `skill-teilen`-Skill, siehe [CONTRIBUTING.md](../CONTRIBUTING.md)). Jede Datei braucht oben einen kurzen Kommentar-Block: was sie macht, für wen sie ist, wer sie beigesteuert hat.
