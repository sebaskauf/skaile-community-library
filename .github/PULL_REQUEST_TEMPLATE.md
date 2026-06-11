# Neuer Skill: <Name>

## Was macht der Skill?

<!-- 2-3 Sätze: Was macht er, wann triggert er, was hat man davon? -->

## Checkliste

- [ ] Ein PR = ein Skill (keine Änderungen an anderen Plugins, `.github/` oder `scripts/`)
- [ ] Ordnername ist kebab-case und einzigartig (`plugins/mein-skill/`)
- [ ] `plugin.json` ausgefüllt (name, description, author) und **ohne** `version`-Feld
- [ ] Eintrag in `.claude-plugin/marketplace.json` ergänzt
- [ ] `SKILL.md` hat eine aussagekräftige `description` im Frontmatter
- [ ] Keine Secrets, keine API-Keys, keine persönlichen Daten
- [ ] Kein Code, der ungefragt löscht, Daten verschickt oder externe Scripts ausführt
- [ ] Selbst getestet: `claude plugin validate ./plugins/mein-skill` läuft durch und der Skill funktioniert bei mir
