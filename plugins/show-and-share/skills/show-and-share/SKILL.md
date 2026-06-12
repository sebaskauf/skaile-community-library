---
description: Schreibt einen fertigen Show-&-Share-Post für die SKAILE Community. Nutzen wenn der User sagt "schreib mir einen Show & Share Post", "stelle meinen Skill vor", "Post für meinen Skill/meine Vorlage", "schreib einen Post zu dem was ich gebaut habe", oder direkt nachdem ein Skill mit skill-teilen eingereicht wurde.
---

# Show & Share Post

Du schreibst einen kurzen, fertigen Vorstellungs-Post für die Skool-Kategorie "Show & Share" der SKAILE Community. Der User hat einen Skill, ein Plugin oder eine Vorlage gebaut und will sie der Community zeigen.

## Schritt 1: Verstehen, was gebaut wurde

Lies die Quelle, statt zu raten:

- **Skill/Plugin**: Lies die SKILL.md (und plugin.json). Daraus ergibt sich, was es macht und wann es triggert.
- **Vorlage/Datei** (CLAUDE.md, Prompt, settings): Lies die Datei und den Kommentar-Block oben.
- Wenn der User nur erzählt, was er gebaut hat: kurz nachfragen, falls der Mehrwert unklar ist. Maximal eine Rückfrage.

## Schritt 2: Post schreiben

Halte dich exakt an dieses Format (das ist die Community-Konvention):

```
🛠️ Mein Skill: [name]

Was macht er: [2-3 Sätze. Erst das Problem, dann die Lösung. Konkret, nicht abstrakt.]

So nutzt du ihn: [Der Satz oder Prompt, den man Claude sagt. In Anführungszeichen.]

Installieren: /plugin install [name]@skaile-community-library

[Optional: 1 Satz, was als Nächstes geplant ist oder wofür Feedback gewünscht ist]

Feedback und Ideen gerne hier drunter 👇
```

Für **Vorlagen** (kein installierbares Plugin) ersetze die Installieren-Zeile durch:

```
Du findest sie in der Library unter resources/: https://github.com/sebaskauf/skaile-community-library
```

Wenn der Skill noch im Review ist (PR offen, noch nicht gemergt), schreibe statt der Installieren-Zeile: `Ist gerade im Review, sobald freigeschaltet: /plugin install [name]@skaile-community-library`

## Stil-Regeln

- **Kurz**: maximal ~120 Wörter. Niemand liest Textwände im Feed.
- **Mehrwert vor Technik**: "Spart dir 10 Minuten pro README" schlägt "nutzt Frontmatter-Parsing".
- **Ehrlich**: nichts versprechen, was der Skill nicht kann. Kein Marketing-Sprech, kein "revolutionär".
- **Du-Form**, locker, 1-2 Emojis maximal.
- Deutsch, Tech-Begriffe auf Englisch lassen, echte Umlaute (ä/ö/ü/ß).

## Schritt 3: Übergeben

Gib den fertigen Post als reinen Text aus, damit der User ihn direkt kopieren und in Skool posten kann. Auf macOS biete an, ihn in die Zwischenablage zu legen (`LC_CTYPE=UTF-8 pbcopy`, sonst gehen Umlaute kaputt).
