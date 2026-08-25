# Niederländisch — Stand der Implementierung

## Einbau

```
Datei:  apps/web/src/utils/translations/translation_NL.js
```

Kompletter Austausch. **`index.js` bleibt unverändert** — Niederländisch
ist damit implementiert, aber nicht scharf geschaltet, genau wie Spanisch.

## Inhalt

| | Anzahl |
|---|---|
| Keys gesamt | 367 |
| davon echte niederländische Übersetzung | **244** |
| davon Platzhalter `[NL] <deutscher Text>` | 123 |
| DE-Wörterbuch zum Vergleich | 704 Keys |

Deckung gegen das deutsche Wörterbuch: 52 % der Keys vorhanden,
34 % davon mit echtem niederländischem Text.

## Herkunft der Übersetzungen

Alle 244 echten Werte stammen aus `SMARTDOCK_LOCALIZATION_PACKAGE.md`,
Abschnitte 7.9 bis 7.30. Dort liegen 35 Tabellen im Format

```
| translation_id / key | DE master | DA | ES | NL | NB | SV | Status |
```

Der Dictionary-Key steht in Backticks in der ersten Spalte. Übernommen
wurde ausschließlich die NL-Spalte. Nichts davon ist von Claude übersetzt.

## Was noch fehlt

1. **337 DE-Keys haben keinen NL-Eintrag.** Sie fallen über die
   Fallback-Kette in `LanguageContext.jsx` auf Deutsch zurück.
2. **123 Keys sind Platzhalter** im Format `[NL] Startseite`. Solange
   Niederländisch nicht scharf ist, stört das nicht — bei Aktivierung
   würde der Marker sichtbar.
3. **454 Zeilen des Lokalisierungspakets haben gar keinen
   Dictionary-Key.** Das sind Texte, die direkt im JSX stehen
   (Konfigurator-Schritte, Kontaktformular, Bestätigungsseite). Die
   sind über das Wörterbuch grundsätzlich nicht erreichbar und
   brauchen denselben Umbau wie seinerzeit die Rechtsseiten.

## Vor dem Scharfschalten nötig

- `index.js` um `NL` erweitern
- `LanguageContext.jsx`: `['DE','EN','FR']` um `NL` erweitern
- `config/routes.js`: NL-Pfade je Seite ergänzen
- `App.jsx`: NL-Routen ergänzen
- `SeoHead.jsx`: hreflang und canonical für NL
- Sprachumschalter im Header um NL erweitern
- die 123 Platzhalter und die 337 fehlenden Keys füllen
