# Eigenen Skill einreichen

Danke, dass du was beisteuern willst! Es gibt drei Wege, vom einfachsten zum manuellsten.

## Weg 1: Lass Claude das machen (empfohlen) 🤖

Du musst nichts von Forks oder Pull Requests verstehen. Claude erledigt das für dich.

1. Installiere den Skill `skill-teilen` aus dieser Library (einmalig):
   ```
   /plugin install skill-teilen@skaile-community
   ```
2. Sag Claude Code einfach:
   > Teile meinen Skill [Name/Pfad] mit der SKAILE Community.

Claude prüft die Voraussetzungen, verpackt deinen Skill in die richtige Struktur, validiert alles und reicht den Pull Request ein. Du bekommst am Ende den Link.

**Einzige Voraussetzung**: ein kostenloser GitHub-Account und die GitHub CLI (`gh auth login`, einmalig). Auch dabei hilft dir Claude, frag ihn einfach.

Alternativ ohne installierten Skill, mit diesem Prompt:

> Lies https://github.com/sebaskauf/skaile-community-skills/blob/main/CONTRIBUTING.md und reiche meinen Skill [Name/Pfad] nach dieser Anleitung als Pull Request ein.

## Weg 2: Ohne GitHub-Account

Pack deinen Skill-Ordner als ZIP und schick ihn Sebastian per DM in Skool. Er nimmt ihn für dich auf, dein Name kommt trotzdem als Autor rein.

## Weg 3: Manuell (für alle, die es selbst machen wollen)

1. **Fork**: Klicke oben rechts auf "Fork" (erstellt deine eigene Kopie dieses Repos).
2. **Kopiere die Vorlage**: Dupliziere den Ordner `plugins/readme-pro/` und benenne ihn nach deinem Skill, z.B. `plugins/mein-skill/`. Der Name: nur Kleinbuchstaben, Zahlen und Bindestriche (kebab-case).
3. **Fülle deine Dateien**:
   - `plugins/mein-skill/.claude-plugin/plugin.json` → `name` und `description` anpassen, dich als `author` eintragen. **Kein `version`-Feld eintragen** (Updates laufen automatisch über Git).
   - `plugins/mein-skill/skills/mein-skill/SKILL.md` → dein Skill-Inhalt. Die `description` im Frontmatter entscheidet, wann Claude deinen Skill nutzt: schreib rein, bei welchen Anfragen er triggern soll.
4. **Registriere deinen Skill**: Füge in `.claude-plugin/marketplace.json` einen Eintrag im `plugins`-Array hinzu (kopiere einfach den `readme-pro`-Eintrag und passe ihn an).
5. **Pull Request**: Erstelle einen PR gegen dieses Repo. Die automatische Prüfung läuft sofort, Sebastian reviewt und schaltet frei. Fertig!

### Vorher lokal testen (empfohlen)

```bash
# Im Repo-Ordner:
node scripts/validate-structure.mjs .
claude plugin validate .
claude plugin validate ./plugins/mein-skill

# Komplett durchtesten:
claude plugin marketplace add ./pfad/zu/deinem/fork
claude plugin install mein-skill@skaile-community
```

## Regeln (gelten für alle Wege)

- **Ein PR = ein Skill.** Macht das Review schneller.
- **Beschreibung auf Deutsch**, Tech-Begriffe auf Englisch lassen.
- **Keine Secrets**: keine API-Keys, Tokens oder persönliche Daten im Code.
- **Kein gefährlicher Code**: keine Befehle, die ungefragt Dateien löschen, Daten irgendwohin schicken oder Software installieren. Skills, die Bash-Befehle ausführen, müssen klar dokumentieren, was sie tun.
- **Kein verschleierter Code**: alles muss lesbar und nachvollziehbar sein. Obfuskierter Code wird abgelehnt.
- **Getestet**: du hast den Skill selbst mindestens einmal erfolgreich benutzt.
- Änderungen an `.github/`, `scripts/` oder fremden Plugins gehören nicht in einen Skill-PR.

## Fragen?

Stell sie in der Skool-Community in der Kategorie "Show & Share". Da sitzt auch der Rest von uns.
