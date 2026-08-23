# SMARTDOCK – Entscheidungsbriefing für Montag, 17. August 2026

## Ziel des Termins

In 30 Minuten drei Veröffentlichungsblocker entscheiden oder mit eindeutigem Verantwortlichen und verbindlichem Termin versehen. Bis dahin werden keine ungeprüften Rechts-, Sicherheits- oder Produktaussagen veröffentlicht.

## Gesicherter Ausgangsstand

- Der QA-Merge ist auf Branch `agent/localization-qa-corrections`, Commit `4bc742a`, abgeschlossen.
- Pull Request: [#12 – Complete localization QA and website text coverage](https://github.com/Thitronik01/SmartDock-Webseite-bersetzung-/pull/12)
- Alle 117 geprüften Wörterbuchkorrekturen sind übernommen: DE 47, EN 28, FR 42.
- Schlüsselzahlen bleiben unverändert: DE 724, EN 517, FR 725.
- Die korrigierbaren Blocker B2, B4, B6, B7 und B8 sind umgesetzt; B3 wurde zurückgezogen.
- Offen sind B1, B5 und B9. Sie benötigen eine Produkt- oder Rechtsentscheidung.
- DA, ES, NL, NB und SV sind sprachlich vorbereitet, aber technisch noch nicht produktiv eingebunden.

## Entscheidung 1 – Installation des SMARTDOCK-Systems (B1/E1)

**Entscheidungsfrage:** Darf das SMARTDOCK-Hauptsystem ausschließlich durch geschulte Fachkräfte zertifizierter Partner installiert werden?

**Aktueller Widerspruch:** FAQ und Produktseite bewerben Selbstinstallation ohne technische Vorkenntnisse. Die AGB schreiben grundsätzlich Fachinstallation vor und schließen Haftung bei unsachgemäßer Selbstinstallation aus.

**Empfehlung:** Option A – Marketing und FAQ an die AGB anpassen. Das Plug-and-play-Konzept bleibt als kurze, unkomplizierte Installation durch zertifizierte Einbaupartner erhalten; Aussagen zur Selbstinstallation entfallen.

**Alternativen:**

- Option B: AGB lockern und Selbstinstallation zulassen; benötigt neue haftungsrechtliche Bewertung.
- Option C: Nach Modulen differenzieren; benötigt eine technische Liste selbstinstallierbarer und partnerpflichtiger Komponenten.

**Betroffen:** FAQ 08, Produktseite `product.plug_play.*`, Modulbeschreibung, AGB § 4/§ 5 und anschließend alle acht Sprachfassungen.

**Entscheidung:** ☐ A  ☐ B  ☐ C  ☐ vertagt bis: __________

**Verantwortlich:** Geschäftsführung/Product: __________  Recht: __________

## Entscheidung 2 – Datenschutz und Einwilligung (B5/E2)

**Entscheidungsfrage:** Beschreibt der aktuelle DE/EN-Text die produktive Einwilligungslösung technisch korrekt, und kann dieser Text juristisch freigegeben werden?

**Aktueller Widerspruch:** DE/EN beschreiben das lokale Consent-Verfahren über `cookieConsent`. Die französische Erklärung nennt weiterhin Cookiebot/Usercentrics und einen abweichenden GA4-Ablauf.

**Empfehlung:** Die französische Datenschutzerklärung nicht veröffentlichen, bevor Technik und Rechtsprüfung den DE/EN-Master freigegeben haben. Danach den freigegebenen Inhalt nach FR sowie DA/ES/NL/NB/SV übertragen.

**Benötigte Nachweise:**

- Welche Dienste werden vor Zustimmung tatsächlich blockiert?
- Welche Local-Storage- und Cookie-Werte werden gesetzt oder gelöscht?
- Werden Daten an einen externen Consent-Anbieter übertragen?
- Entspricht der Widerruf über „Cookie-Einstellungen“ dem beschriebenen Verhalten?

**Entscheidung:** ☐ DE/EN freigegeben  ☐ Überarbeitung erforderlich  ☐ juristische Prüfung bis: __________

**Verantwortlich:** Technik: __________  Datenschutz/Recht: __________

## Entscheidung 3 – Impressum TMG→DDG (B9/E3)

**Entscheidungsfrage:** Können die veralteten TMG-Verweise im Impressum durch die juristisch bestätigten DDG-Verweise ersetzt werden?

**Vorbereiteter Vorschlag:** „§ 5 TMG“ → „§ 5 DDG“ sowie „§ 7 Abs. 1 TMG / §§ 8 bis 10 TMG“ → die juristisch bestätigte DDG-Fassung.

**Empfehlung:** Rechtsprüfung des exakten Wortlauts; danach mechanische Umsetzung in allen Sprachfassungen. Keine eigenständige Rechtsauslegung durch das Entwicklungsteam.

**Entscheidung:** ☐ Wortlaut freigegeben  ☐ Korrektur geliefert bis: __________

**Verantwortlich:** Recht/Impressumsverantwortliche Person: __________

## Weitere Entscheidungen – am Montag nur Verantwortliche festlegen

| Punkt | Klärung | Empfohlener Owner | Termin |
|---|---|---|---|
| E4 | Verbindungsverlust: Neutralstellung, Leerlauf oder Stopp? | Produkttechnik | __________ |
| E5 | Reichweite und absolute Werbeaussagen | Marketing + Recht | __________ |
| E6 | BGG/BFSG und zuständige Schlichtungsstelle | Recht | __________ |
| E7 | Cookie-Banner: Du oder Sie? | Marke/Marketing | __________ |
| E8 | Terminologie: SMARTDOCK-Komposita, Partner, Strahlruder, Winschen, UK-EN | Marke + Lokalisierung | __________ |

## Vorgeschlagene Agenda – 30 Minuten

1. 0–5 Min.: bestätigter QA- und Technikstand.
2. 5–15 Min.: B1 Installationslinie entscheiden.
3. 15–23 Min.: B5 Consent-Nachweise und Freigabeweg festlegen.
4. 23–27 Min.: B9 DDG-Verantwortung und Termin festlegen.
5. 27–30 Min.: Owner und Termine für E4–E8 eintragen.

## Unmittelbar nach dem Termin

- Entscheidungen mit Datum, Owner und Wortlaut im PR dokumentieren.
- Nur freigegebene Varianten umsetzen; `TARGET_REVIEW` nicht ohne Nachweis entfernen.
- B1/B5/B9 erneut über alle acht Sprachen abgleichen.
- PR #12 erneut bauen, prüfen und erst danach aus dem Entwurfsstatus nehmen.

Vollständige Begründungen: [`qa-arbeitsexport/01_BLOCKER_B1-B9.md`](qa-arbeitsexport/01_BLOCKER_B1-B9.md), [`qa-arbeitsexport/02_ENTSCHEIDUNGEN_E1-E8.md`](qa-arbeitsexport/02_ENTSCHEIDUNGEN_E1-E8.md) und [`qa-arbeitsexport/06_PRUEFBERICHT.md`](qa-arbeitsexport/06_PRUEFBERICHT.md).
