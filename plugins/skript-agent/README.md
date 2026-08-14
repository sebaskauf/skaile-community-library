# skript-agent

Dein Short-Form-Content-Sparringspartner. Schreibt Skripte für Reels, TikToks, Shorts und Social-Posts in deiner Stimme, auf Basis der echten Daten aus deiner Nische.

Kein Prompt-Wrapper. Der Agent richtet sich beim ersten Aufruf selbst mit dir ein, zieht seine Formate aus den Creatorn, die du analysiert hast, und lernt aus den Zahlen deiner eigenen Videos.

## Installieren

```
/plugin marketplace add sebaskauf/skaile-community-library
/plugin install skript-agent@skaile-community-library
```

Danach Claude Code neu starten. Mit `/agents` prüfen, ob `skript-agent` in der Liste steht.

## Loslegen

Starte Claude Code in dem Ordner, in dem deine Analyse-Dateien liegen. Dann:

```
Nutze den skript-agent
```

Beim ersten Mal läuft das Setup: er schaut nach, was schon da ist, fragt dich nach Thema, Zielgruppe, Plattform und Ziel, zieht sich die Formate aus deinen Creator-Daten und legt seine Arbeitsdateien an. Fünf Minuten, einmalig.

Danach:

```
Nutze den skript-agent und schreib mir ein Skript über <Thema>
```

Oder ohne Thema, dann sucht er selbst:

```
Nutze den skript-agent und schlag mir 3 Themen vor
```

## Was er kann

| Modus | Was passiert |
|---|---|
| **Skript** | wählt das Format, baut den Hook auf allen drei Ebenen, schreibt in deiner Stimme, liest sich selbst kritisch gegen |
| **Themensuche** | schaut, was bei dir und in deiner Nische läuft, recherchiert, schlägt drei geschärfte Themen vor |
| **Hooks** | fünf Varianten, je eine pro Formel aus deiner Nische, mit Begründung |
| **Caption** | nach deinem festgelegten Format |
| **Überarbeiten** | nennt die drei schwächsten Stellen und fixt nur die |
| **Auswerten** | trägt deine Zahlen fort, stellt die Diagnose und sagt, was du als Nächstes drehst |

## Seine Dateien

Legt er beim Setup an. Alles normale Textdateien, die du jederzeit selbst ändern kannst.

| Datei | Was drinsteht |
|---|---|
| `content-kontext.md` | Thema, Zielgruppe, Plattform, Ziel, Länge |
| `hook-formeln.md` | die Hook-Muster aus deiner Nische, mit Belegen |
| `bauplan.md` | wie erfolgreiche Videos in deiner Nische gebaut sind |
| `caption-format.md` | dein Caption-Aufbau |
| `eigennamen.md` | Tools und Namen, exakte Schreibweise |
| `meine-videos.md` | deine Zahlen, wächst mit jedem Video |

Dazu braucht er `analyse.md` mit den Daten der fünf analysierten Creator und einen `voice-profil`-Skill. Fehlt eins davon, sagt er das und schreibt nicht generisch los.

## Wie er besser wird

Sag ihm, was dir nicht passt. Er schreibt es weg: Stimme ins Voice-Profil, Aufbau in den Bauplan, Hook-Muster in die Formeln, Schreibweisen in die Eigennamen. Feedback verpufft nicht in der Session.

Sobald du zehn eigene Videos ausgewertet hast, stellt er von den fremden Creator-Daten auf deine eigenen Zahlen um. Ab da schreibt er auf deiner Realität, nicht auf einer geliehenen.

## Sein Wissen

Unter `wissen/` liegt die Methode, nicht der Inhalt:

- `01-anatomie.md`: die Bauteile eines Skripts, Value in vier Schichten
- `02-hooks.md`: Hook-Muster und wie du deine eigenen daraus ableitest
- `03-value-over-feature.md`: die wichtigste Regel
- `04-caption.md`: Caption-Aufbau
- `05-daten-methodik.md`: wie man Zahlen korrekt auswertet, inklusive der vier Fehler, die falsche Regeln erzeugen
- `06-anti-pattern.md`: was nie passiert

Die Inhalte kommen aus deinen Daten. Deshalb schreibt der Agent nicht bei jedem dasselbe.
