---
description: Reicht einen Skill oder ein Plugin in die SKAILE Community Skill-Library ein. Nutzen wenn der User sagt "teile meinen Skill", "lade meinen Skill in die Community hoch", "reiche meinen Skill ein", "skill teilen" oder "in die Skill-Library hochladen". Übernimmt Fork, Struktur, Validierung und Pull Request komplett.
---

# Skill teilen

Du reichst einen Skill des Users in die SKAILE Community Skill-Library ein (Repo: `sebaskauf/skaile-community-library`). Du übernimmst den kompletten GitHub-Prozess. Der User muss nichts von Forks oder PRs verstehen.

## Schritt 0: Voraussetzungen prüfen

1. `gh --version` — wenn die GitHub CLI fehlt: installiere sie für den User (macOS: `brew install gh`, Windows: `winget install --id GitHub.cli`, danach Terminal-Neustart nötig).
2. `gh auth status` — wenn nicht eingeloggt: prüfe, ob der User schon einen GitHub-Account hat. Falls nein: schicke ihn auf https://github.com/signup (kostenlos, 2 Minuten) und warte, bis er fertig ist. Dann führe ihn durch `gh auth login`: GitHub.com → HTTPS → "Login with a web browser", Code im Browser eingeben. Das ist alles einmalig, danach läuft jede künftige Einreichung ohne Setup.

## Schritt 1: Klären, was geteilt wird

Finde heraus (nachfragen falls unklar):

- **Was**: ein fertiger Skill (SKILL.md), ein ganzer Plugin-Ordner, oder Wissen/ein Prompt, das du erst als Skill verpacken sollst.
- **Name**: kebab-case, nur Kleinbuchstaben/Zahlen/Bindestriche, noch nicht in der Library vergeben (prüfe die marketplace.json im Repo).
- **Beschreibung**: 1 Satz was der Skill macht + bei welchen Anfragen er triggern soll.
- **Autor-Name** des Users für den Credit.

## Schritt 2: Fork und Clone

```bash
gh repo fork sebaskauf/skaile-community-library --clone
```

In ein temporäres oder Projekt-Verzeichnis. Existiert der Fork schon, clone ihn und bringe main auf den neuesten Stand (`git fetch upstream && git merge upstream/main`, upstream ggf. hinzufügen).

## Schritt 3: Skill einbauen

1. Arbeits-Branch: `git checkout -b add-<skill-name>`
2. Kopiere die Vorlage `plugins/readme-pro/` nach `plugins/<skill-name>/`
3. `plugins/<skill-name>/.claude-plugin/plugin.json`: `name`, `description` anpassen, User als `author` eintragen. **KEIN `version`-Feld** (Updates laufen über Git).
4. `plugins/<skill-name>/skills/<skill-name>/SKILL.md`: Inhalt des Users. Frontmatter-`description` ist Pflicht und entscheidet, wann der Skill triggert.
5. Registriere den Skill in `.claude-plugin/marketplace.json`: neuen Eintrag im `plugins`-Array (am `readme-pro`-Eintrag orientieren).

## Schritt 4: Validieren (Pflicht vor dem PR)

```bash
node scripts/validate-structure.mjs .
```

Muss grün sein. Fehler erst beheben, dann weiter.

## Schritt 5: Einreichen

```bash
git add -A && git commit -m "feat: add <skill-name> skill"
git push -u origin add-<skill-name>
gh pr create --repo sebaskauf/skaile-community-library --title "Neuer Skill: <skill-name>" --body "<ausgefülltes Template>"
```

Fülle im PR-Body das Template aus `.github/PULL_REQUEST_TEMPLATE.md` ehrlich aus (nur abhaken, was wirklich zutrifft).

## Schritt 6: Abschluss

Gib dem User den PR-Link und sag ihm:

1. Sebastian reviewt und schaltet frei, danach wird der Skill automatisch an alle Member verteilt.
2. Mach einen Post in der Skool-Kategorie "Show & Share", damit die Community deinen Skill kennenlernt.

## Harte Regeln

- Keine Secrets, API-Keys oder persönliche Daten in den eingereichten Dateien.
- Kein Code, der ungefragt löscht, Daten verschickt oder externe Scripts ausführt. Im Zweifel: nicht einreichen, erst in Skool fragen.
- Ein PR = ein Skill. Keine Änderungen an `.github/`, `scripts/` oder fremden Plugins.
