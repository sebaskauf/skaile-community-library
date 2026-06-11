# SKAILE Community Skill-Library 📦

Skills und Plugins für Claude Code, von Community-Membern für Community-Member.

## Installation (30 Sekunden)

Öffne Claude Code und gib ein:

```
/plugin marketplace add sebaskauf/skaile-community-skills
```

Danach `/plugin` tippen, die Library `skaile-community` auswählen und installieren, was du brauchst. Updates bekommst du automatisch.

Einzelnen Skill direkt installieren:

```
/plugin install readme-pro@skaile-community
```

## Verfügbare Skills

<!-- PLUGINS:START — wird automatisch generiert, nicht von Hand bearbeiten -->
| Skill | Beschreibung | Autor | Installieren |
| :---- | :----------- | :---- | :----------- |
| [`readme-pro`](./plugins/readme-pro) | Schreibt ein sauberes, professionelles README für dein aktuelles Projekt | Sebastian Kauffmann | `/plugin install readme-pro@skaile-community` |
| [`skill-teilen`](./plugins/skill-teilen) | Teilt deinen Skill automatisch mit der Community: Claude übernimmt Fork, Einreichung und Pull Request für dich | Sebastian Kauffmann | `/plugin install skill-teilen@skaile-community` |
| [`test-dummy`](./plugins/test-dummy) | Temporärer Test-Skill zur Verifikation des PR-Flows | Sebastian Kauffmann | `/plugin install test-dummy@skaile-community` |
<!-- PLUGINS:END -->

## Eigenen Skill einreichen

Du hast einen Skill gebaut, der anderen helfen könnte? Stark! Der einfachste Weg: **Lass Claude das machen.**

```
/plugin install skill-teilen@skaile-community
```

Danach sagst du Claude Code einfach "Teile meinen Skill [Name] mit der SKAILE Community" und Claude übernimmt Fork, Struktur, Validierung und Pull Request komplett für dich.

Noch keinen GitHub-Account? In 5 Minuten eingerichtet, Anleitung (Mac + Windows) und der manuelle Weg stehen in [CONTRIBUTING.md](CONTRIBUTING.md).

Jede Einreichung wird automatisch technisch geprüft und vor der Freischaltung von Sebastian gereviewt.

## Sicherheit

Skills aus dieser Library laufen lokal auf deinem Rechner. Deshalb wird jede Einreichung vor dem Merge reviewt. Details in [SECURITY.md](SECURITY.md). Wenn dir an einem Skill etwas komisch vorkommt: [Issue aufmachen](../../issues).

## Lizenz

[MIT](LICENSE) — nutzen, anpassen, weitergeben erlaubt.
