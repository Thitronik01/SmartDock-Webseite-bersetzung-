# Rollout-Plan: fünf Zielsprachen sichtbar und funktionierend

Stand: 24. August 2026 · Grundlage: Branch `agent/localization-qa-corrections` (PR #12, Commit `91ac088`)

Dieser Plan führt von heute bis zu fünf veröffentlichten Zielsprachen. Er ist so
geschnitten, dass immer **genau ein Schritt** offen ist. Jeder Schritt nennt Ziel,
Zuständigkeit und woran man erkennt, dass er fertig ist.

---

## Zur Zählweise

„9 von 37" zählt die Dateien des **spanischen** Übertragungspakets nach Hostinger.
Das ist ein Teilstrang, nicht das Projekt. Vollständig sieht es so aus:

| Strang | Stand |
|---|---|
| Spanische Dateien in Hostinger | 9 / 37 |
| Sprachen technisch fertig | 1 von 5 (ES, als `PREVIEW`) |
| Sprachen sichtbar | 0 von 5 |
| Veröffentlichungs-Blocker offen | 3 (B1, B5, B9) |

Die 37 Dateien sind Etappe 1. Danach folgen fünf weitere Etappen.

---

## Etappe 1 — Spanisch vollständig nach Hostinger (9 → 37)

### Schritt 1 · Block A übertragen — 5 Dateien → 14/37

**Wer:** Marlene, Hostinger-Code-Editor. Kein Horizons-Chat.

`deployment/montag-block-a/`, Anleitung liegt daneben. Reihenfolge egal.

| Datei | Ziel |
|---|---|
| `1_translation_DE.js` | `apps/web/src/utils/translations/translation_DE.js` |
| `2_translation_EN.js` | `apps/web/src/utils/translations/translation_EN.js` |
| `3_translation_FR.js` | `apps/web/src/utils/translations/translation_FR.js` |
| `4_SeoHead.jsx` | `apps/web/src/components/SeoHead.jsx` |
| `5_LanguageSwitcher.jsx` | `apps/web/src/components/LanguageSwitcher.jsx` |

**Warum zuerst:** Diese fünf liefern die 14 neuen Schlüssel, die alle übrigen
Dateien brauchen — und `SeoHead.jsx` setzt `noindex,nofollow` für Spanisch.
Solange das fehlt, wären die halbfertigen `/es`-Seiten für Google indexierbar.

**Fertig, wenn:** Strg+F findet `noindex,nofollow` in `SeoHead.jsx` (1 Treffer),
`SELECTABLE_LOCALES` in `LanguageSwitcher.jsx` (3 Treffer), `df_user_location`
in jedem der drei Wörterbücher (je 1 Treffer). Vorschau: `/`, `/en`, `/fr`, `/ch`
unverändert.

### Schritt 2 · Block B übertragen — 7 Dateien → 21/37

`deployment/montag-block-b/`: FAQ, Installation, Konfigurator-Bestätigung,
Konfigurator-Seite, Händlerfinder, Startseite, 404.

**Fertig, wenn:** `/es/faq` zeigt elf spanische FAQ-Einträge, `/es/distribuidores`
lädt die Händlerkarte, eine unbekannte `/es/...`-URL zeigt die spanische 404.

### Schritt 3 · Block C übertragen — 16 Dateien → 37/37

`deployment/montag-block-c/`: Header, Footer, Hero, Breadcrumb, Kontakt,
App-Komponenten, Module, Konfigurator-Zusammenfassung, Funktionen und die vier
Rechtsseiten AGB, Barrierefreiheit, Versand, Widerruf.

**Fertig, wenn:** alle 37 Dateien übertragen sind.

### Schritt 4 · Vorschau-Abnahme Spanisch

**Wer:** Max.

Alle 15 spanischen Routen aufrufen. Geprüft wird: kein deutscher Resttext, keine
`[ES missing]`-Marker, Navigation und Breadcrumbs spanisch, interne Links bleiben
unter `/es`. Danach `/`, `/en`, `/fr`, `/ch` gegenprüfen — dort darf sich nichts
geändert haben.

**Fertig, wenn:** Befundliste vorliegt und abgearbeitet ist.

---

## Etappe 2 — Freigaben (läuft ab sofort parallel)

Diese Etappe blockiert **jede** Sprache, nicht nur Spanisch. Sie hat die längste
Vorlaufzeit, weil Dritte entscheiden. Deshalb parallel zu Etappe 1 starten.

### Schritt 5 · Die drei offenen Blocker entscheiden lassen

| | Frage | Entscheidet |
|---|---|---|
| **B1/E1** | Darf das Hauptsystem selbst installiert werden? FAQ und Produktseite sagen ja, AGB § 4 sagt nein, § 5 schließt die Haftung aus. | Geschäftsführung + Recht |
| **B5/E2** | Beschreibt der DE/EN-Consent-Text die produktive Lösung korrekt — und ist er juristisch freigegeben? Er trägt im Code noch „DRAFT – requires legal review". | Technik + Datenschutz |
| **B9/E3** | Wortlaut für TMG → DDG im Impressum. | Recht |

Vorlage: `MONTAG_BRIEFING_2026-08-17.md` (fertig, mit Ankreuzfeldern).
Hintergrund: `qa-arbeitsexport/01_BLOCKER_B1-B9.md` und `02_ENTSCHEIDUNGEN_E1-E8.md`.

**Fertig, wenn:** je Punkt Entscheidung, Wortlaut, Owner und Datum schriftlich
vorliegen. Ohne das bleibt `TARGET_REVIEW` stehen und es wird nichts veröffentlicht.

### Schritt 6 · E4 bis E8 mit Owner und Termin versehen

Verbindungsverlust-Verhalten (E4), Reichweiten- und Absolutaussagen (E5),
BGG vs. BFSG (E6), Du/Sie im Cookie-Banner (E7), Terminologie-Glossar (E8).

E4 und E5 wirken auf sicherheits- und werberelevante Sätze in allen acht Sprachen
und sollten mitentschieden werden. E7 und E8 dürfen nachlaufen.

### Schritt 7 · Entschiedene Texte im deutschen Master nachführen

**Wer:** ich, im Repository.

Beschlossene Wortlaute in `translation_DE.js` und die betroffenen Rechtsseiten
übernehmen, dann in ES nachziehen, `TARGET_REVIEW`-Marker entfernen. Danach
`npm run verify`.

**Fertig, wenn:** `npm run verify` grün ist und kein betroffener Schlüssel mehr
als `TARGET_REVIEW` geführt wird.

---

## Etappe 3 — Spanisch sichtbar schalten

### Schritt 8 · Muttersprachliche Endprüfung Spanisch

Ein spanischer Muttersprachler geht die 15 Routen in der Vorschau durch.
Besonders: Konfigurator, Rechtsseiten, App-Zitate, Anrede (`usted` in der
Datenschutzerklärung gegen `tú` im Rest — siehe E7).

### Schritt 9 · Spanisch auf LIVE stellen

**Wer:** ich, im Repository; danach Marlene für die Übertragung.

In `apps/web/src/config/locales.js` für ES `release: LIVE` und
`selectable: true`. Damit fällt `noindex,nofollow` automatisch weg, ES erscheint
im Sprachmenü und bekommt hreflang-Gegenstücke. Sitemap und `llms.txt` neu erzeugen.

**Fertig, wenn:** Locale-Tests grün, Build grün, `/es` liefert genau einen
Canonical und vollständige hreflang-Verweise.

### Schritt 10 · Veröffentlichen

**Nur nach ausdrücklicher Zustimmung von Max.** Danach: Indexierung von `/es`
beobachten, Rollback-Weg ist der Rücksprung auf `release: PREVIEW`.

**Damit ist Sprache 1 von 5 erledigt.**

---

## Etappe 4 — Den Piloten verallgemeinern

Diese Etappe liefert keine sichtbare Sprache, sondern macht die vier folgenden
billig. Sie ist der Grund, warum Sprache 2 bis 5 zusammen weniger Aufwand
verursachen als Sprache 1 allein.

### Schritt 11 · Sprachverzweigungen auflösen

**Wer:** ich, im Repository.

Rund 40 fest verdrahtete `'ES'`-Stellen in 23 Dateien durch die Locale-Registry
ersetzen:

```
translateSourceText(faq.question_de, 'ES')   →  translateSourceText(faq.question_de, currentLanguage)
const esText = (k, f) => currentLanguage === 'ES' ? t(k) : f
const tt = (de, en, fr) => isEs ? ... : isFr ? ... : isEn ? ... : de
```

`translateSourceText` ist bereits sprachneutral und liefert für jede registrierte
Sprache korrekt `[XX missing]`. Nur die Aufrufstellen sind es nicht.

**Fertig, wenn:** kein `currentLanguage === 'ES'` mehr im Produktivcode steht,
die zehn Locale-Tests grün sind und `/es` sich unverändert verhält.

**Wirkung:** Das Übertragungspaket je weiterer Sprache schrumpft von 37 auf
etwa 7 Dateien — zwei neue Wörterbücher, zwei Rechtsseiten, drei kleine Edits.

### Schritt 12 · Wörterbuch-Generator und Prüfskript

Aus den 747 geprüften Katalogzeilen je Sprache `translation_XX.js` (~580
Schlüssel) und `sourceTranslation_XX.js` (~668 Einträge) erzeugen, statt von Hand.
Dazu ein Prüfskript: Schlüsselgleichheit gegen DE, keine Platzhalterpräfixe,
keine deutschen Restwerte.

**Fertig, wenn:** der Generator ES exakt reproduziert — 580 und 668 Schlüssel,
Datei identisch mit dem geprüften Stand. Erst dann ist er für DA/NL/NB/SV
vertrauenswürdig.

### Schritt 13 · Locale-Testmatrix erweitern

Die zehn ES-Tests auf alle registrierten Sprachen verallgemeinern, damit jede
neue Sprache automatisch mitgeprüft wird.

---

## Etappe 5 — Dänisch (Vorlage für die restlichen drei)

### Schritt 14 · Wörterbücher DA erzeugen und prüfen
### Schritt 15 · Slugs, Rechtsseiten und Registry-Eintrag DA
`release: PREVIEW`, `selectable: false` — wie ES zu Beginn.
### Schritt 16 · Übertragungspaket DA schnüren (~7 Dateien) und übertragen
### Schritt 17 · Vorschau-Abnahme, muttersprachliche Prüfung
### Schritt 18 · DA auf LIVE und veröffentlichen

**Sprache 2 von 5.** Der hier gefundene Ablauf wird für NL, NB und SV nur noch
wiederholt.

---

## Etappe 6 — Niederländisch, Norwegisch, Schwedisch

Je Sprache derselbe Fünferblock wie Etappe 5.

- **Schritte 19–23:** Niederländisch. Achtung: `translation_NL.js` liegt als
  265-Schlüssel-**Platzhalter** im Repo (deutscher Text mit `[NL]`-Präfix). Muss
  vollständig ersetzt, nicht ergänzt werden.
- **Schritte 24–28:** Norwegisch Bokmål.
- **Schritte 29–33:** Schwedisch.

**Für NB und SV zusätzlich verbindlich:** Kreuzabgleich der drei skandinavischen
Fassungen. Blocker B8 war eine dänische Form im schwedischen Sicherheitstext
(„signalet" statt „signalen") — ausgerechnet im sicherheitskritischsten Satz der
Seite. Die Kontamination ist prozessbedingt und sitzt vermutlich an weiteren
Stellen.

---

## Etappe 7 — Abschluss

### Schritt 34 · Zehn lokalisierte Grafikassets
Zwei Grafikfamilien × fünf Sprachen. Produktionscopy liegt vor. Kann je Sprache
vorgezogen werden, blockiert den Textrollout aber nicht.

### Schritt 35 · End-to-End-Matrix Route × Sprache
Alle Seiten × alle Sprachen automatisiert: Build, Navigation, fehlende Schlüssel,
Canonicals, hreflang, Alt-Texte, ARIA-Labels.

### Schritt 36 · Abhängigkeits-Schwachstellen (Issue #9)
`npm audit` meldet 12 Schwachstellen, davon 1 kritisch (`jspdf`, ReDoS) und
7 hoch (u. a. `react-router` Open Redirect, `postcss`, `vite`). Unabhängig von
der Lokalisierung, aber vor dem finalen Release zu klären. **Nicht während einer
laufenden Übertragung** — ein `react-router`-Sprung kann Routing-Dateien ändern,
die gerade nach Hostinger wandern.

---

## Was parallel laufen darf und was nicht

**Parallel:** Etappe 2 (Freigaben) neben Etappe 1 (Übertragung) — die Freigaben
haben externe Vorlaufzeit und blockieren später alles.

**Nacheinander:** Etappe 4 (Verallgemeinerung) vor jeder weiteren Sprache. Wer
Dänisch nach dem ES-Muster baut, verdoppelt die Sprachverzweigungen und macht
Schritt 11 danach viermal so teuer.

**Nie parallel:** Abhängigkeits-Updates und eine laufende Hostinger-Übertragung.

---

## Regeln, die über den ganzen Plan gelten

- Nicht veröffentlichen ohne ausdrückliche Zustimmung von Max.
- EN- und FR-Texte nicht bearbeiten, DE-Texte nur nach entschiedener Freigabe.
- Erfolgsmeldungen des Horizons-Chatbots nie ungeprüft übernehmen — immer
  unabhängig nachweisen. Einen fehlgeschlagenen Prompt nie unverändert wiederholen.
- Neue Sprachen starten immer als `PREVIEW` + `selectable: false`. Der Wechsel auf
  `LIVE` ist ein eigener, bewusster Schritt.
- `TARGET_REVIEW` wird nur gegen einen dokumentierten Nachweis entfernt.
- Beim Vergleich von Hostinger-Dateien `diff -wB` verwenden; der Editor dort
  entfernt führende Einrückung.
- `apps/api/src/routes/orders.js` hat einen bestehenden, unabhängigen Fehler
  (fehlende `emailService.js`). Nicht anfassen, nicht mit der Lokalisierung vermischen.

---

## Der nächste Schritt

**Schritt 1: Block A nach Hostinger.** Fünf Dateien, Code-Editor, kein
Horizons-Chat. Anleitung: `deployment/montag-block-a/ANLEITUNG.md`.

Parallel dazu Schritt 5 anstoßen — die drei Blocker-Entscheidungen brauchen am
längsten.
