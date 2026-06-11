# Eigenen Skill einreichen

Danke, dass du was beisteuern willst! Der Standard-Weg ist Weg 1. Wenn du noch keinen GitHub-Account hast, mach vorher einmal Weg 2 (dauert 5 Minuten).

## Weg 1: Lass Claude das machen (empfohlen) 🤖

Du musst nichts von Forks oder Pull Requests verstehen. Claude erledigt das für dich.

1. Installiere den Skill `skill-teilen` aus dieser Library (einmalig):
   ```
   /plugin install skill-teilen@skaile-community-library
   ```
2. Sag Claude Code einfach:
   > Teile meinen Skill [Name/Pfad] mit der SKAILE Community.

Claude prüft die Voraussetzungen, verpackt deinen Skill in die richtige Struktur, validiert alles und reicht den Pull Request ein. Du bekommst am Ende den Link.

Alternativ ohne installierten Skill, mit diesem Prompt:

> Lies https://github.com/sebaskauf/skaile-community-library/blob/main/CONTRIBUTING.md und reiche meinen Skill [Name/Pfad] nach dieser Anleitung als Pull Request ein.

## Weg 2: Noch keinen GitHub-Account? In 5 Minuten eingerichtet

GitHub ist kostenlos und du brauchst es nur einmal einzurichten. Der schnellste Weg: Sag Claude Code einfach

> Richte GitHub für mich ein und verbinde meinen Account.

und er führt dich durch alles. Oder manuell in 3 Schritten:

**Schritt 1: Account erstellen** (alle Systeme)
Geh auf https://github.com/signup und registriere dich mit E-Mail, Passwort und einem Usernamen. Fertig in 2 Minuten.

**Schritt 2: GitHub CLI installieren**

- **Mac**: Terminal öffnen und eingeben:
  ```
  brew install gh
  ```
  (Falls `brew` nicht gefunden wird: sag Claude "installier mir Homebrew", dann nochmal.)
- **Windows**: Terminal bzw. Eingabeaufforderung öffnen und eingeben:
  ```
  winget install --id GitHub.cli
  ```
  Danach das Terminal einmal schließen und neu öffnen.

**Schritt 3: Mit deinem Account verbinden** (alle Systeme)

```
gh auth login
```

Dann einfach durchklicken: `GitHub.com` → `HTTPS` → `Login with a web browser`. Es öffnet sich dein Browser, du gibst den angezeigten Code ein, fertig. Ab jetzt kann Claude in deinem Namen Skills einreichen.

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
claude plugin install mein-skill@skaile-community-library
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
