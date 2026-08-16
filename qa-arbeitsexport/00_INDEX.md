# SMARTDOCK Lokalisierung — Arbeitsstand der Sprach-QA

Stand: 16. August 2026

Referenz: Repository `Thitronik01/SmartDock-Webseite-bersetzung-`, Branch `agent/qa-corrections-2026-08-15` über Basis `bd78686`

Dieses Paket bündelt den vollständigen QA-Arbeitsstand, damit er auf einem anderen Rechner mit dem dortigen Webseiten-Abzug zusammengeführt werden kann. Es liegt im Repository unter `qa-arbeitsexport/` und zusätzlich in diesem Google-Drive-Ordner.

## Inhalt

| Datei | Inhalt | Wofür |
|---|---|---|
| `01_BLOCKER_B1-B9.md` | Neun Veröffentlichungs-Blocker mit Status | Was ist erledigt, was blockiert noch |
| `02_ENTSCHEIDUNGEN_E1-E8.md` | Acht offene Entscheidungen | Was die Geschäftsführung festlegen muss |
| `03_GLOSSAR.md` | Terminologie-Leitbegriffe über acht Sprachen | Grundlage für den Konsistenz-Pass |
| `04_AENDERUNGEN_WOERTERBUECHER.md` | 117 geänderte Werte, schlüsselgenau mit Alt/Neu | **Das Kernstück für den Abgleich** |
| `05_AENDERUNGEN_RECHTSSEITEN.md` | 8 Änderungen in JSX-Rechtsseiten | Nicht über Wörterbücher abbildbar, separat prüfen |
| `06_PRUEFBERICHT.md` | Vollständiger Prüfbericht, acht Sprachen | Begründung und Befunde im Detail |
| `07_ABGLEICH_ARBEITSRECHNER.md` | Vorgehen für die Zusammenführung | Anleitung Schritt für Schritt |
| `08_STAND_UND_OFFENE_DEFEKTE.md` | Commit-Referenz, Prüfergebnisse, ein offener Defekt | Belegt, worauf die Zahlen beruhen |
| `abgleich.mjs` | Prüft einen beliebigen Wörterbuchstand gegen die Sollwerte | Braucht Node 22 und die Datei `04` im selben Ordner |

Das Skript liest seine Sollwerte direkt aus der Tabelle in `04_AENDERUNGEN_WOERTERBUECHER.md` — es gibt also nur eine Datenquelle, dieselbe, die auch ein Mensch liest. Beim Start meldet es „Sollwerte geladen: DE 47, EN 28, FR 42 — vollständig."; erscheint stattdessen eine Warnung, ist die Tabelle unvollständig übertragen worden.

## Ausgangslage in einem Absatz

Die Website liegt in acht Sprachen vor: Deutsch als Master, Englisch und Französisch als aktive Referenzsprachen, dazu Dänisch, Spanisch, Niederländisch, Norwegisch Bokmål und Schwedisch als fertig übersetzte, aber technisch noch nicht implementierte Zielsprachen. Eine sprachliche Vollprüfung ergab Gesamtnote 2,3 bei vollständiger Abdeckung aller 724 aktiven Wörterbuchschlüssel. Neun Blocker standen einer Veröffentlichung entgegen; fünf davon sind objektiv korrigierbar und im Branch umgesetzt, einer wurde als Prüfwerkzeug-Artefakt zurückgezogen, drei hängen an Entscheidungen. Zusätzlich wurden die redaktionell geprüften REVIEWED-Fassungen in die aktiven Wörterbücher zurückgespielt.

## Der entscheidende Punkt für den Abgleich

Vor dieser Arbeit existierten **zwei Wahrheiten**: die Live-Wörterbücher im Code und die QA-korrigierte REVIEWED-Fassung des Textdokuments. Der Branch führt sie zusammen — die REVIEWED-Korrekturen sind jetzt im Code.

Wenn der Abzug auf dem Arbeitsrechner älter ist als `bd78686` oder aus einer anderen Quelle stammt, greift die Schlüsselzuordnung trotzdem: Datei `04` listet jede Änderung unter ihrem Wörterbuchschlüssel, nicht unter einer Zeilennummer. Maßgeblich ist immer die Spalte **Neu**.

Was dabei nicht passieren darf: die Alt-Werte aus dem Arbeitsrechner-Abzug zurückschreiben. Sie sehen unverdächtig aus — es sind grammatisch korrekte deutsche Sätze — enthalten aber die Sie-Ausrutscher, Tippfehler, die falsche Widerrufs-Anschrift und den MerCruiser-Kompatibilitätsfehler, die hier gerade behoben wurden.
