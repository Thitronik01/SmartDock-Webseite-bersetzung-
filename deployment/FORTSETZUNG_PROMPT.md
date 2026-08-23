# Fortsetzungs-Prompt SmartDock-Lokalisierung

Diesen Text in eine neue Sitzung einfügen, um dort weiterzuarbeiten.

---

Du übernimmst die technische Lokalisierung der SmartDock-Website.
Arbeite mit mir auf Deutsch und nenne immer nur den nächsten Arbeitsschritt.

## Wer beteiligt ist

- **Max** (ich) arbeitet hier mit dir, bereitet Dateien lokal vor und prüft.
- **Marlene** bedient Hostinger Horizons und setzt die Dateien dort ein.

## Ziel

Die Website erhält fünf neue Sprachen. Spanisch ist der Pilot, die übrigen vier
folgen mit derselben Architektur, ohne erneuten Umbau:

| Reihenfolge | Sprache | Locale | Präfix |
|---|---|---|---|
| 1 | Spanisch | es-ES | /es |
| 2 | Dänisch | da-DK | /da |
| 3 | Niederländisch | nl-NL | /nl |
| 4 | Norwegisch Bokmål | nb-NO | /no |
| 5 | Schwedisch | sv-SE | /sv |

Bestehend und live: DE (de-DE), EN (en-GB), FR (fr-FR), CH (de-CH).

## Arbeitsweise — wichtig

Der Horizons-Chatbot arbeitet bei größeren Datenmengen **unzuverlässig**: kürzt
Inhalte, lässt Einträge aus, meldet „Alles erledigt" ohne Nachweis, zählt falsch
und beantwortet Rückfragen aus dem Prompt statt von der Festplatte.

Deshalb gilt:

- Dateiinhalte werden lokal vorbereitet und von Marlene im Hostinger-Code-Editor
  per Strg+A / Strg+V eingesetzt.
- Horizons legt höchstens **leere Stub-Dateien** an — nie Inhalte.
- Erfolgsmeldungen nie ungeprüft übernehmen. Immer unabhängig nachweisen.
- Einen fehlgeschlagenen Prompt nie unverändert wiederholen.
- **Nicht veröffentlichen** ohne meine ausdrückliche Zustimmung.

## Stand (23.08.2026)

**9 von 37 Dateien sind in Hostinger und funktional geprüft.** `/es` lädt in der
Vorschau. Erledigt: `config/locales.js`, `config/routes.js`,
`contexts/LanguageContext.jsx`, `App.jsx`, `utils/translations/index.js`,
`translation_ES.js`, `sourceTranslation_ES.js`, `pages/ImpressumPage_ES.jsx`,
`pages/PrivacyPage_ES.jsx`.

**28 Dateien sind offen.** Reihenfolge:

1. **Zuerst** `translation_DE.js`, `translation_EN.js`, `translation_FR.js` —
   sie liefern 14 Schlüssel, die die übrigen Dateien brauchen.
2. 12 Komponenten, 2 Konfigurator-Schritte, 11 Seiten. Untereinander
   unabhängig, Reihenfolge beliebig.

Die 28 offenen Dateien umfassen zusammen nur rund 350 geänderte Zeilen. Der
spanische Fließtext läuft bereits über `t()` und `<Translate>`. Offen sind vor
allem FAQ- und Installations-Seite, Sprachumschalter, Konfigurator-Bestätigung,
`SeoHead.jsx` sowie alt-Texte und aria-Labels.

**Wichtig:** `SeoHead.jsx` steht noch auf dem Ausgangsstand, deshalb ist
`noindex,nofollow` für ES nicht aktiv. Diese Datei muss vor jeder
Veröffentlichung übertragen sein, sonst wären die spanischen Vorschauseiten
für Suchmaschinen indexierbar.

Spanisch ist doppelt gegen versehentliche Sichtbarkeit gesichert: `selectable:
false` in `locales.js` und die fest verdrahtete DE/EN/FR-Liste im
Sprachumschalter.

## Pfade

```text
Arbeitsverzeichnis   C:\Users\max.behrens\Desktop\Smartdock Übersetzung
Übertragungspaket    deployment/hostinger-es-2026-08-17/   (alle 37 Dateien)
Übertragungsliste    deployment/hostinger-es-2026-08-17/UEBERTRAGUNGSLISTE.md
Hostinger-Zustand    horizons-export-*/                    (neuesten Ordner nehmen)
Letzter Commit       ecb90b4
```

`deployment/rest-schritt6/` ist eine **veraltete** Fassung vom 17.08. und darf
nicht verwendet werden. Maßgeblich ist ausschließlich `hostinger-es-2026-08-17/`.

## Verbindliche Sollwerte

```text
translation_ES.js        580 Schlüssel
sourceTranslation_ES.js  668 Schlüssel
DE / EN / FR             Ausgangstext + genau 14 ergänzte Schlüssel,
                         0 geändert, 0 entfernt
```

## Regeln

- EN- und FR-Texte nicht bearbeiten. DE-Texte unverändert lassen.
- ES bleibt `release: PREVIEW` und `selectable: false`, bis ich freigebe.
  Es ist über `/es` erreichbar, erscheint aber nicht im Sprachmenü — das ist so gewollt.
- Nicht übertragen: `ImpressumPage_FR.jsx`, `PrivacyPage_FR.jsx`,
  `translation_NL.js`, `translateConfigValue.js`, `*.test.js`.
- `apps/api/src/routes/orders.js` hat einen bestehenden, unabhängigen Fehler
  (fehlende `emailService.js`). Nicht anfassen, nicht mit ES vermischen.

## So prüfst du

```bash
cd apps/web && npm run test:locales && npm run build && npm run lint
```

Erwartet: 10/10 Tests, Build und Lint bestanden.

Beim Vergleich von Hostinger-Dateien `diff -wB` verwenden — der Hostinger-Editor
entfernt führende Einrückung, das ist funktional bedeutungslos.

## Erste Aufgabe

Lies zuerst den neuesten `horizons-export-*`-Ordner und vergleiche ihn mit
`deployment/hostinger-es-2026-08-17/`. Sag mir, welche Dateien noch offen sind.
Ändere vorher nichts.
