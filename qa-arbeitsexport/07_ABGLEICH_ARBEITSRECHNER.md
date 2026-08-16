# Abgleich mit dem Abzug auf dem Arbeitsrechner

Ziel: den QA-Stand aus diesem Paket mit dem Webseiten-Abzug auf dem Arbeitsrechner zusammenführen, ohne dabei Korrekturen zu verlieren oder alte Fehler zurückzuschreiben.

## Was abgeglichen werden muss

Die Änderungen verteilen sich auf drei Orte, die unterschiedlich behandelt werden:

| Ort | Umfang | Abgleich |
|---|---|---|
| Wörterbücher `translation_DE/EN/FR.js` | 117 Werte | maschinell, siehe unten |
| Rechtsseiten als JSX | 8 Stellen | manuell, Datei `05` |
| Textkataloge (zwei .md im Repo-Root) | 8 Zeilen | manuell, betrifft die Zielsprachen |

Nur der erste Block ist automatisierbar, weil dort Schlüssel existieren. Die anderen beiden brauchen den Blick in Datei `05` beziehungsweise in die Katalogzeilen.

## Schritt 1 — Stand feststellen

Das beiliegende Skript liest einen beliebigen Wörterbuch-Stand und vergleicht ihn gegen die 117 Sollwerte. Es ändert nichts.

```bash
node abgleich.mjs "<pfad>/apps/web/src/utils/translations"
```

Voraussetzung ist Node (das Projekt setzt Version 22 voraus). Das Skript liest seine Sollwerte aus `04_AENDERUNGEN_WOERTERBUECHER.md`, das dafür im selben Ordner liegen muss. Beim Start bestätigt es „Sollwerte geladen: DE 47, EN 28, FR 42 — vollständig."

Die Ausgabe teilt jeden geänderten Schlüssel in vier Kategorien:

- **bereits Sollwert** — nichts zu tun
- **noch Altwert** — die QA-Korrektur fehlt im Abzug, Sollwert übernehmen
- **dritter Wert** — der Abzug trägt weder Alt noch Neu. Das ist der interessante Fall: entweder wurde dort unabhängig gearbeitet, oder der Abzug stammt aus einem anderen Zweig. Muss einzeln entschieden werden.
- **fehlender Schlüssel** — der Abzug kennt den Schlüssel nicht; deutet auf einen deutlich älteren oder anderen Stand hin

Getestet wurde das Skript gegen beide bekannten Stände: gegen `bd78686` meldet es 117 Altwerte, gegen den QA-Branch meldet es nichts zu tun.

## Schritt 2 — Sollwerte übernehmen

Für alles, was als **noch Altwert** gemeldet wird, gilt der Wert aus der Spalte „Neu" in Datei `04`. Das ist mechanisch und risikoarm — es sind genau die Korrekturen, die geprüft wurden.

Für **dritte Werte** ist zu klären, woher die Abweichung stammt. Hilfreich ist dabei Datei `06`, der Prüfbericht: Wenn der abweichende Wert einem dort beschriebenen Befund entspricht, ist die Sache klar. Wenn nicht, hat jemand unabhängig gearbeitet und die Änderung braucht eine eigene Prüfung.

## Schritt 3 — Rechtsseiten und Kataloge

Datei `05` durchgehen. Fünf Dateien, acht Stellen, alle mit Suchtext dokumentiert. Besonderes Augenmerk auf die Anschrift: nach allen drei Schreibweisen suchen, die dort genannt sind.

## Schritt 4 — Gegenprüfen

Nach dem Zusammenführen:

```bash
node abgleich.mjs "<pfad>/apps/web/src/utils/translations"
```

Erwartetes Ergebnis: „Nichts zu tun". Zusätzlich sollten die Schlüsselzahlen unverändert bei **DE 724 / EN 517 / FR 725** liegen — die QA-Arbeit hat keinen einzigen Schlüssel hinzugefügt oder entfernt. Weicht eine dieser Zahlen ab, stammt die Abweichung aus dem Abzug, nicht aus diesem Paket.

## Was beim Abgleich nicht passieren darf

**Alt-Werte zurückschreiben.** Die Altwerte sind grammatisch korrekte, unverdächtig aussehende Sätze. Sie enthalten aber die Sie-Ausrutscher in Fehlermeldungen und Konfigurator, die Tippfehler in AGB und Datenschutz, die falsche Widerrufs-Anschrift und den MerCruiser-Kompatibilitätsfehler. Ein „das sah vorher auch gut aus"-Merge macht die QA zunichte.

**Die Textkataloge für den führenden Stand halten.** Die beiden großen .md-Dateien im Repo-Root sind Dokumentation, nicht Code. Führend für DE, EN und FR sind die Wörterbücher.

**Von den fünf neuen Sprachen ausgehen.** Dänisch, Spanisch, Niederländisch, Norwegisch und Schwedisch sind sprachlich fertig, aber technisch komplett unimplementiert — kein Routing, keine Wörterbücher, keine dynamischen Datensätze, kein hreflang. Die Dateien `translation_ES.js` und `translation_NL.js` im Repo sind **Platzhalter**: rund 95 % ihrer Werte sind deutscher Text mit Sprachpräfix („[ES] Startseite"), der Rest alte, als „needs-review" markierte Maschinenübersetzungen. Sie dürfen nicht als Referenz dienen. Die echten ES/NL-Texte existieren ausschließlich im geprüften Dokument.

## Wenn der Abzug älter ist als `bd78686`

Der schlüsselbasierte Abgleich funktioniert trotzdem — Datei `04` referenziert Schlüssel, keine Zeilennummern. Was dann zusätzlich zu prüfen ist: ob zwischen dem Abzugsstand und `bd78686` weitere Änderungen liegen, die dieses Paket gar nicht kennt. Das Skript zeigt sie als „dritter Wert" oder „fehlender Schlüssel" an, aber nur für die 117 betroffenen Schlüssel. Für einen vollständigen Vergleich über alle Schlüssel ist ein direkter Diff des Abzugs gegen `bd78686` nötig.
