# Veröffentlichungs-Blocker B1–B9

Quelle: Sprachlicher Prüf- und Bewertungsbericht, Revision 2 vom 15.08.2026, Kapitel 4. Der Status ergänzt den Umsetzungsstand im Branch `agent/qa-corrections-2026-08-15`.

## Übersicht

| Nr. | Kurzfassung | Schwere | Status |
|---|---|---|---|
| B1 | Selbstinstallation vs. Installationspflicht | haftungsrelevant | **offen** → Entscheidung E1 |
| B2 | MerCruiser-Kompatibilität in EN/FR verengt | kaufrelevant | behoben (Commit `c6ff1c6`) |
| B3 | Sprachmix in zwei SEO-Titeln | — | **zurückgezogen** in Rev. 2 |
| B4 | Falsche Anschrift in der Widerrufsbelehrung | rechtlich | behoben (Commit `c6ff1c6`) |
| B5 | Französische Datenschutzerklärung veraltet | juristisch | **offen** → Entscheidung E2 |
| B6 | Englischer Text in der deutschen Datenschutz-Spalte | sichtbar falsch | behoben (Commit `c6ff1c6`) |
| B7 | Fehlende Versicherungs-Deckungsausnahme (EN) | materielle Falschangabe | behoben (Commit `c6ff1c6`) |
| B8 | Dänische Form im schwedischen Sicherheitstext | sicherheitsrelevant | behoben (Commit `a6ead94`, Katalog) |
| B9 | Impressum zitiert das abgelöste TMG | juristisch | **offen** → Entscheidung E3 |

Damit sind fünf Blocker behoben, einer zurückgezogen und drei offen. Alle drei offenen hängen an einer Entscheidung, nicht an Umsetzungsaufwand.

## Im Einzelnen

### B1 — Selbstinstallation vs. Installationspflicht · offen

**Fundstelle:** DE-Master, FAQ 08 und Produktseite gegen AGB § 4

FAQ und Produktseite bewerben, man könne SMARTDOCK „sogar ohne technische Vorkenntnisse selbst installieren". Die AGB schreiben in § 4 (2) die Installation durch geschultes Fachpersonal zertifizierter Händler zwingend vor, § 5 (3) schließt die Haftung bei Selbstinstallation aus. Ein direkter Widerspruch zwischen Marketing und Vertragswerk, der sich in alle acht Sprachen vererbt.

Nicht durch Übersetzung lösbar — siehe Entscheidung E1.

### B2 — MerCruiser-Kompatibilität · behoben

**Fundstelle:** `configurator.mercruiser.system_2016` in EN und FR

Aus „MerCruiser ab Baujahr 2016" wurde „MerCruiser Built 2016" (EN) und „MerCruiser 2016" (FR). Die Kompatibilitätszusage las sich damit als „nur Baujahr 2016" statt „2016 und neuer" — ein kaufrelevanter Fehler mitten im Konfigurator.

Korrigiert zu „MerCruiser from model year 2016 (Sterndrive or Zeus)" und „MerCruiser à partir de 2016 (embase Z ou Zeus)", sowohl im Wörterbuch als auch im Textkatalog.

### B3 — SEO-Titel · zurückgezogen

In Revision 1 als kritischer Sprachmix in `seo.product.title` (NL und SV) geführt. Die Nachprüfung ergab ein Artefakt des Prüfwerkzeugs: maskierte Pipe-Zeichen der Tabellenzeile wurden falsch aufgelöst. Die Dokumentzeile ist intakt, alle acht Sprachwerte sind korrekt (NL „Slimme havenmanoeuvres", SV „Smarta hamnmanövrer").

Keine Maßnahme. Die darauf beruhenden Einzelbefunde in den Kapiteln ES, NL und SV wurden ebenfalls zurückgezogen.

### B4 — Anschrift in der Widerrufsbelehrung · behoben

**Fundstelle:** Widerrufsbelehrung DE und EN

Dort stand „Finkenweg 11–15", auf allen anderen Seiten „Finkenweg 9-15". Eine falsche Anschrift kann die Widerrufsbelehrung unwirksam machen, weil der Verbraucher den Widerruf nicht wirksam erklären kann.

Korrigiert auf „Finkenweg 9-15" an allen vier Vorkommen in den beiden JSX-Seiten sowie in beiden Textkatalogen, verifiziert gegen das offizielle Thitronik-Impressum.

### B5 — Französische Datenschutzerklärung · offen

**Fundstelle:** FR-Datenschutzerklärung §§ 7–8

Die französische Fassung beschreibt noch das Consent-Tool „Cookiebot" und GA4 ohne vorgeschaltete Einwilligung. DE und EN beschreiben bereits die aktuelle eigene Lösung über den Local-Storage-Schlüssel `cookieConsent`. Damit macht die FR-Fassung falsche Angaben über die tatsächliche Datenverarbeitung.

Erschwerend: Auch der aktuelle DE/EN-Einwilligungstext trägt im Code den Vermerk „DRAFT – requires legal review". Die juristische Freigabe steht also für alle Sprachen aus — siehe Entscheidung E2.

### B6 — Englischer Text in der deutschen Spalte · behoben

**Fundstelle:** `priv_s7_p1` bis `priv_s7_p4` im aktiven deutschen Wörterbuch

Im Cookie-Abschnitt der deutschen Datenschutzerklärung stand englischer Text. Deutsche Nutzer hätten dort Englisch gesehen.

Deutsche Originaltexte wiederhergestellt; der Einwilligungstext ist mit `TARGET_REVIEW` markiert, weil er inhaltlich noch juristisch freizugeben ist (siehe B5/E2).

### B7 — Versicherungs-Deckungsausnahme · behoben

**Fundstelle:** Impressum EN

„The professional liability insurance provides worldwide coverage." unterschlug die in DE und FR vorhandene Ausnahme „mit Ausnahme der USA, Kanada und deren Territorien" — eine materielle Falschangabe zur Versicherungsdeckung.

Ergänzt zu „Professional liability insurance is valid worldwide, with the exception of the USA, Canada and their territories."

### B8 — Schwedischer Sicherheitstext · behoben

**Fundstelle:** `functions.safety.description`, schwedische Fassung

„Om signalet bryts…" — „signalet" ist die dänisch/norwegische Form, schwedisch korrekt ist „signalen". Ein Grammatikfehler mit Kontaminationsindiz, und zwar im sicherheitskritischsten Satz der ganzen Seite.

Korrigiert zu „Om signalen bryts försätts alla drivsystem omedelbart i neutralläge." Die Korrektur liegt im Textkatalog, nicht im Code — Schwedisch ist technisch noch nicht implementiert.

Der Befund sollte Anlass für einen gezielten Kreuzabgleich aller drei skandinavischen Fassungen sein; die Kontamination ist prozessbedingt und kann an weiteren Stellen sitzen.

### B9 — TMG im Impressum · offen

**Fundstelle:** Impressum DE

Zitiert „§ 5 TMG" und „§ 7 Abs. 1 TMG / §§ 8 bis 10 TMG". Das Telemediengesetz ist seit Mai 2024 durch das Digitale-Dienste-Gesetz abgelöst.

Mechanisch in unter einer Stunde erledigt, braucht aber juristische Bestätigung — siehe Entscheidung E3.
