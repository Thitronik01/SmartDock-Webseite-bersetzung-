# Stand, Prüfergebnisse und offene Defekte

## Commit-Referenz

Repository `Thitronik01/SmartDock-Webseite-bersetzung-`, Branch `agent/qa-corrections-2026-08-15`

```
(Kopf)   QA-Arbeitsexport als Markdown-Paket — dieses Paket
92acd2f  Entscheidungsvorlage für offene QA-Punkte (E1-E8) hinzufügen
a6ead94  Katalog-Korrekturen: SV-Grammatik, MerCruiser-Kompatibilität, Anschrift
c6ff1c6  Objektive QA-Blocker-Fixes in Code und Rechtsseiten (B2, B4, B6, B7 + Defekte)
89b0f54  Backport REVIEWED-QA-Korrekturen in aktive Wörterbücher (39 DE, 26 EN, 37 FR)
bd78686  Complete localization QA and website text coverage   ← Basis
```

Umfang der inhaltlichen Commits: 11 Dateien, 223 eingefügte und 132 entfernte Zeilen.

**Der Branch war zum Zeitpunkt dieses Exports noch nicht auf GitHub gepusht.**

## Wie sich die 117 Änderungen auf die Commits verteilen

| Commit | DE | EN | FR | Was |
|---|---|---|---|---|
| `89b0f54` | 39 | 26 | 37 | Backport der REVIEWED-Korrekturen |
| `c6ff1c6` | +8 | +2 | +5 | Blocker-Fixes B2, B6 und defekte UI-Strings |
| `a6ead94` | — | — | — | nur Textkataloge, keine Wörterbücher |
| `92acd2f` | — | — | — | nur neue Datei `ENTSCHEIDUNGSVORLAGE_QA.md` |
| **Summe** | **47** | **28** | **42** | **117** |

Die Commit-Nachricht von `89b0f54` nennt 39/26/37 — das ist die Zahl für den Backport allein und nicht die Gesamtzahl. Wer die Commit-Nachrichten als Prüfmaß nimmt, kommt auf 102 statt 117.

## Was verifiziert wurde

| Prüfung | Ergebnis |
|---|---|
| Patches auf `bd78686` anwendbar | konfliktfrei, alle vier |
| `translation_DE/EN/FR.js` syntaktisch | parsen fehlerfrei als ES-Module |
| Schlüsselmengen gegen Basis | DE 724 → 724 · EN 517 → 517 · FR 725 → 725, keine hinzugefügt, keine entfernt |
| Ergebnis gegen mitgeliefertes Bundle | tree-identisch (`ae85c9c`) |
| Abgleichskript gegen alten Stand | meldet korrekt 117 Altwerte |
| Abgleichskript gegen neuen Stand | meldet korrekt nichts zu tun |

Nicht geprüft: ob die Website mit diesem Stand baut oder rendert. Es wurde kein `npm install` und kein Build ausgeführt. Die Änderungen sind reine Stringänderungen ohne strukturelle Eingriffe, ein Build-Bruch ist unwahrscheinlich — aber „unwahrscheinlich" ist nicht „geprüft".

## Offener Defekt

### D1 — Sinnentstellende Ersetzung in `SMARTDOCK_LOCALIZATION_PACKAGE.md`

**Fundstelle:** Zeile 2416, Eintrag `SOURCE_CONFLICT / withdrawal.contact_address`

Bei der Korrektur der Anschrift (Blocker B4) wurde in Commit `a6ead94` offenbar pauschal ersetzt. Der Eintrag beschreibt aber gerade den Widerspruch zwischen zwei Adressen — und liest sich nach der Ersetzung so:

> The withdrawal page and its model form show `Finkenweg 9-15`, while the accessibility page shows `Finkenweg 9-15`; both identify Thitronik GmbH.

Ein Konflikteintrag, der zweimal denselben Wert nennt. Der Befund ist inhaltlich erledigt, seine Beschreibung dadurch aber unverständlich geworden.

**Auswirkung:** gering. Es ist Dokumentation, kein ausgelieferter Text, und der Sachverhalt ist korrekt behoben. Wer den Eintrag aber später liest, versteht ihn nicht mehr.

**Vorschlag:** Eintrag als erledigt markieren statt den beschreibenden Text zu verändern, etwa:

> RESOLVED (2026-08-15): The withdrawal page and its model form showed `Finkenweg 11–15`, while the accessibility page showed `Finkenweg 9-15`. Corrected to `Finkenweg 9-15` throughout, verified against the official Thitronik imprint.

Dieselbe Prüfung lohnt für die anderen Vorkommen der Ersetzung: In `SMARTDOCK_WEBSITE_TEXTS_COMPLETE.md` sind es die Zeilen mit `Immutable visible values retained` sowie zwei nummerierte Adresszeilen — dort ist die Ersetzung inhaltlich unproblematisch.

## Zahlenangaben, die im Bestand nicht stimmen

Vom Prüfbericht festgestellt, bislang nicht korrigiert:

| Angabe | Steht in | Real |
|---|---|---|
| „746 strukturierte Zielsprachzeilen" | README, Lokalisierungspaket | 747 |
| „265 Schlüssel" für `translation_ES/NL.js` | Lokalisierungspaket | 267 |

Beide sind Dokumentationsfehler ohne Auswirkung auf ausgelieferten Text, sollten aber beim nächsten Durchgang mitgenommen werden.

## Reihenfolge der nächsten Schritte

Aus Kapitel 8 des Prüfberichts, unverändert gültig:

1. **Quellentscheidungen zuerst** — E1 (Selbstinstallation), E4 (Sicherheitsverhalten), E5 (Reichweiten), E3 (TMG→DDG), E6 (BGG/BFSG). Jede ändert Texte in bis zu acht Sprachen und gehört deshalb an den Anfang.
2. **Blocker beheben** — fünf sind im Branch erledigt; offen ist nur, was an Schritt 1 hängt.
3. **Terminologie fixieren** — Glossar je Sprache festlegen (Datei `03`), dann Konsistenz-Pass über alle 747 Zeilen.
4. **Typografie-Pass** — skriptgestützt je Sprache.
5. **Rückführung in den Code** — für DE/EN/FR mit diesem Branch erledigt; danach die fünf neuen Sprachen implementieren und die Platzhalterdateien ersetzen.
6. **Native Endkontrolle** — muttersprachlicher Durchgang je Zielsprache in den echten Routen, mit besonderem Blick auf die skandinavische Kreuzkontamination (B8) und auf App-UI-Zitate in den FAQ.
