# Sicherheit

Skills und Plugins aus dieser Library laufen lokal auf den Rechnern der Member. Deshalb gilt:

## Was wir tun

- **Jede Einreichung wird reviewt**: Kein Skill geht ohne manuelles Review durch den Maintainer live (Branch-Protection + CODEOWNERS).
- **Automatische Prüfung**: Jeder PR durchläuft eine CI-Validierung (Struktur, Manifest, verdächtige Muster).
- **Kein Auto-Merge**: Es gibt keinen Weg an dem Review vorbei.

## Was Einreichungen NICHT enthalten dürfen

- Code, der ungefragt Dateien löscht oder verändert außerhalb des Projektkontexts
- Netzwerk-Calls an nicht dokumentierte Ziele (Daten-Exfiltration)
- Download und Ausführung externer Scripts (z.B. `curl ... | bash`)
- Verschleierten oder kodierten Code (Base64-Blobs, Obfuskierung)
- Secrets, API-Keys, persönliche Daten

## Problem melden

Wenn dir an einem Skill etwas komisch vorkommt: bitte ein [GitHub-Issue](../../issues) aufmachen oder Sebastian direkt in Skool anschreiben. Im Zweifel wird der Skill sofort aus dem Katalog genommen und nachträglich geprüft.

## Für Member

Gesunde Vorsicht gehört dazu: Schau dir vor der Installation kurz an, was ein Skill macht (jeder Skill ist hier im Repo voll einsehbar). Installiere nur, was du nachvollziehen kannst.
