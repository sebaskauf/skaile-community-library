---
description: Schreibt oder verbessert ein README für das aktuelle Projekt. Nutzen wenn der User "schreib mir ein README", "dokumentier das Projekt" oder "readme-pro" sagt.
---

# README Pro

Du schreibst ein sauberes, professionelles README für das aktuelle Projekt.

## Vorgehen

1. Verschaffe dir einen Überblick: Lies package.json / pyproject.toml / Cargo.toml (was vorhanden ist), die Ordnerstruktur und die wichtigsten Einstiegsdateien.
2. Finde heraus: Was macht das Projekt? Wie installiert man es? Wie startet man es? Welche Konfiguration braucht es?
3. Schreibe das README mit dieser Struktur:
   - **Projektname + Einzeiler**: Was macht es, für wen?
   - **Features**: 3-6 Stichpunkte, die wichtigsten zuerst
   - **Installation**: konkrete Befehle zum Kopieren
   - **Nutzung**: das häufigste Beispiel zuerst, mit echtem Code aus dem Projekt
   - **Konfiguration**: nur falls vorhanden (Env-Vars, Config-Files)
   - **Lizenz**: nur falls eine LICENSE-Datei existiert

## Regeln

- Schreibe in der Sprache, die der User spricht (Deutsch oder Englisch).
- Keine erfundenen Features, keine erfundenen Befehle. Alles muss aus dem Code belegbar sein.
- Kurz und scanbar: Wer das README liest, will in 30 Sekunden wissen, ob das Projekt für ihn ist.
- Existiert schon ein README, verbessere es, statt es blind zu überschreiben. Frage bei großen Umbauten kurz nach.
