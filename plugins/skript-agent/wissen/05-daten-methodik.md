# Daten-Methodik

**Pflichtlektüre, bevor du selbst irgendetwas rechnest.**

Das hier ist das Handwerk. Wer es überspringt, produziert Regeln, die falsch sind und trotzdem überzeugend klingen. Genau das ist der teuerste Fehler, den ein Content-Agent machen kann: eine erfundene Regel, nach der jemand monatelang Videos dreht.

---

## Die vier Messfehler, die falsche Regeln erzeugen

Alle vier sind in echten Analysen passiert. Jeder hat eine Regel produziert, die später zurückgenommen werden musste.

### 1. Die Caption statt das Transkript auswerten

Die Caption und der gesprochene Hook sind **zwei verschiedene Texte**. Wer Hook-Merkmale in Captions zählt, misst etwas anderes als das, was im Video passiert. Ergebnisse können sich dadurch komplett umdrehen.

→ **Der gesprochene Hook steht nur im Transkript.** Für die Themen-Einordnung sind Captions in Ordnung, für Hook-Analyse nie.

### 2. Mit Mustersuche klassifizieren statt zu lesen

Eine Textsuche prüft, ob ein Hook mit einem bestimmten Wort anfängt, und leitet daraus eine Regel ab. Das geht schief, sobald dieselbe Formulierung zwei völlig verschiedene Dinge bedeutet.

Beispiel für die Falle: "Wenn du keine Lust hast, dass [konkreter Schmerz]" und "Wenn du [Rolle] bist" fangen beide mit "Wenn du" an. Das eine kann sehr gut laufen, das andere sehr schlecht. Der Mittelwert beschreibt dann **kein einziges Video**.

→ **Einordnen immer von Hand, nach dem Lesen des Volltextes.** Automatische Suche nur zum Vorsortieren, nie als Ergebnis. Bei jeder automatischen Einordnung Stichproben ausgeben und prüfen.

### 3. Ohne Zeitbereinigung rechnen

Ein Kanal wächst oder schrumpft. Ein Video aus einer starken Phase hat höhere Zahlen, ohne besser zu sein. Wer das nicht rausrechnet, misst die Kanalphase statt der Videoqualität.

→ **Zahlen innerhalb ihres Zeitraums vergleichen**, zum Beispiel Monat für Monat. Und dann prüfen, ob ein Befund **in jedem einzelnen Zeitraum** hält, nicht nur insgesamt.

### 4. Aus einer Teilmenge verallgemeinern

Ein Zusammenhang, der bei 26 Videos deutlich aussieht, kann bei 125 fast verschwinden. Und wer nur die besten 14 anschaut, findet garantiert ein Muster, weil er die Gegenbeispiele gar nicht erst sieht.

→ **Immer der volle Datensatz. Immer aktiv nach Gegenbeispielen suchen**, bevor eine Regel steht.

---

## Die Rechnungen, die zählen

**Raten statt Absolutzahlen.** Absolute Shares korrelieren fast perfekt mit Views, weil mehr Zuschauer automatisch mehr Shares bedeuten. Das ist zirkulär und sagt nichts. Richtig ist die Rate: Shares pro tausend Aufrufe.

**Zeitbereinigen.** Jeden Wert daran messen, wie er im Vergleich zum Durchschnitt seines Zeitraums liegt. Ein Video mit 30.000 Aufrufen kann in einem schwachen Monat stark und in einem starken Monat schwach sein.

**Einen Faktor konstant halten.** Wenn zwei Größen beide mit dem Erfolg zusammenhängen, kann eine davon nur mitlaufen. Der Test: hält der Zusammenhang noch, wenn die andere Größe konstant gehalten wird? Was dabei zusammenbricht, war nie ein eigener Hebel.

Genau daran scheitern viele Kennzahlen, die auf den ersten Blick wichtig aussehen. **Eine Zahl, die mit Erfolg korreliert, ist nicht automatisch eine Zahl, an der man drehen kann.**

**Auf Rangfolge prüfen, nicht nur auf Mittelwerte.** Video-Reichweiten sind extrem schief verteilt: wenige Ausreißer nach oben, viele im Mittelfeld. Ein einziges großes Video kann jeden Durchschnitt kippen.

---

## Pflicht-Gegenproben, bevor eine Regel steht

1. Hält der Befund **innerhalb jedes einzelnen Zeitraums**?
2. Hält er, wenn der **zweite Faktor konstant** gehalten wird?
3. Gibt es **Gegenbeispiele**, und wie viele? Aktiv danach suchen, nicht warten, bis jemand sie findet.
4. Ist die Gruppe **in sich gespalten**? Bei wenigen Fällen immer die Einzelwerte ausgeben, nie nur den Mittelwert.
5. Bei weniger als fünf Fällen: als **dünn kennzeichnen**, nie als Regel verkaufen.

---

## Wie du Zahlen ziehst

**Instagram**, wenn ein Token vorliegt: über `graph.instagram.com`. `me` funktioniert als Platzhalter statt der Account-ID. Zwei Dinge, an denen es regelmäßig scheitert:

- Beim Abholen vieler Beiträge **blättern**, sonst bekommst du nur die neuesten und übersiehst alles Ältere.
- Manche Kennzahlen kommen **nur in einem eigenen Aufruf** zurück, nicht zusammen mit den anderen. Kommt eine Kennzahl leer zurück, prüf erst das, bevor du sie für nicht verfügbar hältst.
- Wiedergabezeiten kommen in Millisekunden. Umrechnen.
- Skip-Rate und Wiedergabezeit gibt es nur bei Reels, nicht bei normalen Beiträgen. Das ist kein Fehler.

**TikTok, YouTube, LinkedIn:** keine vergleichbare Anbindung. Um Screenshots aus der jeweiligen App bitten und daraus auslesen. Die Zuschauerbindungs-Kurve ist dabei am wertvollsten, weil sie zeigt, **wo** ausgestiegen wird, nicht nur wie viele.

**Transkripte:** lokal transkribieren, nicht über kostenpflichtige Dienste. Transkriptions-Software verhört sich systematisch bei Eigennamen, gerade bei Produkt- und Firmennamen. Beim Auswerten mitdenken und nicht am falsch geschriebenen Wort scheitern. Was wiederholt falsch ankommt, gehört in `eigennamen.md`.

---

## Wie du Befunde formulierst

**Immer als Beobachtung, nie als Gesetz.**

- ✅ "Bei deinen letzten zwölf Videos hatten die drei mit den besten Zahlen alle einen Dritten als Absender. Das ist ein Hinweis, kein Beweis."
- ❌ "Videos mit einem Dritten als Absender laufen besser."

**Nie Zielwerte nennen.** Kein "unter 60 Prozent ist gut". Solche Werte hängen an Nische, Videolänge und Format. Wer einen fremden Zielwert übernimmt, optimiert auf die falsche Zahl.

**Und der ehrlichste Satz von allen:** ein Video ist kein Ergebnis. Erst zehn mit demselben Format sagen etwas. Vorher ist alles Zufall, und das gehört so gesagt.
