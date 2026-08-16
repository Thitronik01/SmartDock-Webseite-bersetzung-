# Technische Roadmap für DA, ES, NL, NB und SV

Stand: 16. August 2026

## Aktuelle technische Ausgangslage

- Produktiv registriert sind nur DE, EN und FR; CH verwendet deutsche Inhalte.
- `translations/index.js` lädt nur die drei aktiven Wörterbücher.
- `LanguageContext` akzeptiert nur DE/EN/FR und lädt PocketBase-Laufzeitwerte nur für DE und EN.
- `routes.js`, Sprachumschalter, Canonicals und hreflang sind auf DE/EN/FR/CH ausgelegt.
- `translation_ES.js` und `translation_NL.js` sind unvollständige Platzhalter und keine freigegebene Quelle.
- Für DA, NB und SV existieren noch keine produktiven Wörterbuchdateien.
- Dynamische FAQ-, Händler-, Konfigurator- und Installationsdaten benötigen eine locale-fähige Datenstruktur.
- Zehn lokalisierte Grafikassets müssen noch produziert und eingebunden werden.

Die freigegebene sprachliche Quelle ist das geprüfte Textpaket, nicht die vorhandenen ES/NL-Platzhalter.

## Phase 0 – Entscheidungen und Änderungsdisziplin

**Voraussetzung für veröffentlichbare Texte:** B1, B5 und B9 sowie die relevanten Punkte E4–E8 sind entschieden oder ausdrücklich aus dem ersten Rollout ausgeschlossen.

**Parallel möglich:** technische Grundstruktur, Tests und Importwerkzeuge können vorbereitet werden. Betroffene Texte bleiben bis zur Freigabe mit `TARGET_REVIEW` gesperrt.

## Phase 1 – Locale-Grundgerüst

1. Eine zentrale Locale-Registry für `de-DE`, `en-GB`, `fr-FR`, `da-DK`, `es-ES`, `nl-NL`, `nb-NO`, `sv-SE` und die bestehende CH-Variante definieren.
2. `translations/index.js` und `LanguageContext` auf registrierte Locales statt fest codierter Dreierlisten umstellen.
3. Sprachumschalter, URL-Erkennung und äquivalente Seitennavigation aus derselben Registry ableiten.
4. Fallback-Regel dokumentieren und in Tests sichtbar machen; auf Zielrouten darf kein stiller deutscher Fallback verbleiben.

**Abnahme:** Jede Locale lässt sich aktivieren, wechselt auf eine äquivalente Route und meldet fehlende Schlüssel prüfbar.

## Phase 2 – Wörterbücher und statische UI

1. Vollständige DA/ES/NL/NB/SV-Wörterbücher aus den 747 geprüften Katalogzeilen erzeugen.
2. ES/NL-Platzhalter vollständig ersetzen; sie dürfen nicht gemischt weiterverwendet werden.
3. Schlüsselgleichheit und erlaubte locale-spezifische Zusatzschlüssel automatisch prüfen.
4. Pluralformen, Datums-/Zahlenformate und länderspezifische Anredekonventionen testen.

**Abnahme:** Keine Platzhalterpräfixe, keine unerwarteten deutschen Werte und keine unbekannten Schlüssel auf aktiven Zielrouten.

## Phase 3 – Routing, SEO und Barrierefreiheit

1. Für alle sichtbaren Seiten lokale Slugs festlegen und in `routes.js` ergänzen.
2. Canonical-, hreflang-, Open-Graph- und HTML-`lang`-Werte erweitern.
3. Sitemap, Navigation, Footer, Breadcrumbs und 404-Seiten je Locale prüfen.
4. Alt-Texte, ARIA-Labels, Formfehler und Downloadbeschriftungen in die automatisierte Abdeckung aufnehmen.

**Abnahme:** Jede Seite besitzt genau einen Canonical, vollständige hreflang-Gegenstücke und korrekte interne Links.

## Phase 4 – Dynamische Inhalte und PocketBase

1. Bestandsaufnahme aller zur Laufzeit geladenen Collections und Felder abschließen.
2. Ein Locale-Modell wählen: locale-Spalten oder locale-spezifische Datensätze mit stabiler Translation-ID.
3. Migrationen für FAQ, Händler, Installationsdaten und relevante Konfiguratorwerte erstellen.
4. Fallback und fehlende Übersetzungen protokollieren; keine stillen DE-Werte auf veröffentlichten Zielrouten.
5. Seed-, Rollback- und Staging-Prüfung dokumentieren.

**Abnahme:** Dynamische Daten erscheinen in allen fünf Zielsprachen und bleiben nach Migration/Rollback konsistent.

## Phase 5 – Rechtsseiten und Assets

1. Freigegebene Rechtsmaster nach B1/B5/B9/E6 übernehmen und erst dann in alle Zielsprachen ausrollen.
2. Zehn lokalisierte Grafikassets anhand der vorhandenen Produktionscopy erstellen.
3. Responsive Darstellung, Lesbarkeit, Dateigröße und Alt-Texte visuell prüfen.

**Abnahme:** Kein Rechts- oder Grafikasset wird ohne dokumentierte Freigabe aktiviert.

## Phase 6 – End-to-End-Abnahme

1. Automatische Route×Locale-Matrix für Build, Navigation, fehlende Schlüssel, Canonicals und hreflang ausführen.
2. Kernabläufe je Locale prüfen: Startseite, Produkt, FAQ, Konfigurator, Händlerfinder, Kontakt und Rechtsseiten.
3. Muttersprachliche Endprüfung je Zielsprache durchführen.
4. Besonderer Fokus: skandinavische Kreuzkontamination, App-UI-Zitate, Kompatibilitätsangaben und Consent-Texte.

**Definition of Done:**

- Keine deutschen Fallbacks oder Platzhalter auf Zielrouten.
- Alle P0-Blocker geschlossen oder formal akzeptiert.
- CI, Build, Lint und Locale-Testmatrix erfolgreich.
- Rechtliche, technische, Marketing- und native Freigaben dokumentiert.
- Rollback- und Veröffentlichungsplan vorhanden.

## Empfohlene Umsetzungspakete

| Paket | Inhalt | Abhängigkeit |
|---|---|---|
| A | Locale-Registry, Routing-Grundgerüst, Tests | keine Textentscheidung nötig |
| B | Wörterbuchgenerator und fünf vollständige Wörterbücher | geprüfter Katalog |
| C | SEO, hreflang, Navigation, Barrierefreiheit | Paket A |
| D | PocketBase-Modell und Migrationen | technische Architekturentscheidung |
| E | Rechtsseiten und entscheidungsabhängige Texte | B1/B5/B9/E6 |
| F | Grafikassets | Produktionscopy und Markenfreigabe |
| G | Native E2E-Abnahme und Release | A–F |

Mit Paketen A und der technischen Vorbereitung von B kann sofort begonnen werden. Veröffentlichungsreife entsteht erst nach E und G.
