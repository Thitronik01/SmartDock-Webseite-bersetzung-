# Entscheidungen E1–E8

> Übernommen aus `ENTSCHEIDUNGSVORLAGE_QA.md` (Commit `92acd2f`) — die ausführlichere der beiden vorliegenden Fassungen; das gleichnamige Word-Dokument ist inhaltlich identisch, nennt aber die betroffenen Wörterbuchschlüssel nicht.

---


**Stand:** 15. August 2026
**Kontext:** Die sprachliche QA über acht Sprachen ist abgeschlossen (siehe Prüfbericht). Alle objektiv korrigierbaren Befunde sind im Branch `agent/qa-corrections-2026-08-15` bereits behoben. Die folgenden Punkte erfordern eine **Geschäftsführungs- bzw. juristische Entscheidung**, bevor die betroffenen Texte veröffentlicht oder in weitere Sprachen ausgerollt werden. Jeder Punkt nennt Optionen und eine Empfehlung; die Umsetzung in allen acht Sprachfassungen erfolgt nach Entscheidung kurzfristig.

---

## E1 – Selbstinstallation vs. Installationspflicht (Blocker B1, haftungsrelevant)

**Widerspruch:** FAQ 08 und die Produktseite bewerben die Selbstinstallation („kannst du SMARTDOCK sogar ohne technische Vorkenntnisse selbst installieren", „weder komplexe Umbauten noch spezielles technisches Know-how"). Die AGB § 4 (2) schreiben das Gegenteil fest („Installation durch geschultes Fachpersonal unserer zertifizierten Händler zwingend vorgeschrieben") und schließen in § 5 (3) die Haftung bei Selbstinstallation aus („Das SMARTDOCK System greift tief in die Steuerungselektronik des Bootes ein").

**Optionen:**
- **A (empfohlen):** Marketing/FAQ an die AGB anpassen – Selbstinstallations-Aussagen ersetzen durch „Installation durch zertifizierte SMARTDOCK-Einbaupartner" mit Betonung des geringen Aufwands („Plug-and-play-Konzept, kurze Einbauzeit beim Partner"). Geringstes Haftungsrisiko, konsistent mit dem Vertriebsmodell über Einbaupartner.
- **B:** AGB lockern (Selbstinstallation zulassen, Haftungsausschluss präzisieren). Erfordert juristische Neubewertung der Produkthaftung.
- **C:** Differenzieren (z. B. bestimmte Module selbstinstallierbar, Hauptsystem nur durch Partner). Erfordert technische Festlegung, welche Module das betrifft.

**Betroffen:** FAQ 08, product.plug_play.*, home.modules.description, AGB § 4/§ 5 – in allen 8 Sprachen.

---

## E2 – Französische Datenschutzerklärung veraltet (Blocker B5, juristisch)

**Befund:** Die FR-Datenschutzerklärung (PrivacyPage_FR.jsx, Schlüssel `priv_s7_p3/p4`, `priv_s8_p1`) beschreibt noch das Consent-Tool „Cookiebot" (Usercentrics) und GA4 ohne Consent-Vorschaltung. DE/EN beschreiben bereits die aktuelle eigene Einwilligungslösung (Local-Storage-Schlüssel `cookieConsent`). Die FR-Fassung macht damit falsche Angaben über die tatsächliche Datenverarbeitung.

**Hinweis:** Auch der aktuelle DE/EN-Text zur Einwilligungslösung trägt im Code den Vermerk „DRAFT – requires legal review before publication". Die deutschen Wörterbuchwerte `priv_s7_p1–p4` wurden im Fix-Branch bereits von Englisch auf Deutsch zurückgestellt und mit TARGET_REVIEW markiert.

**Erforderlich:** Juristische Freigabe des Einwilligungs-Textes (DE/EN) und Übertragung in die FR-Fassung (Übersetzungsvorschlag liegt vor, Übernahme nach Freigabe in <1 Tag). Danach identische Übernahme in DA/ES/NL/NB/SV vor deren Rollout.

---

## E3 – Impressum: TMG durch DDG ersetzen (Blocker B9, juristisch)

**Befund:** Das Impressum zitiert „§ 5 TMG" und „§ 7 Abs.1 TMG / §§ 8 bis 10 TMG". Das Telemediengesetz ist seit Mai 2024 durch das Digitale-Dienste-Gesetz (DDG) abgelöst; korrekt wären „§ 5 DDG" bzw. „§ 7 Abs. 1 DDG, §§ 8 bis 10 DDG".

**Erforderlich:** Juristische Bestätigung, dann Umstellung in DE + allen Sprachfassungen (mechanisch, <1 Stunde).

---

## E4 – Sicherheitsverhalten bei Verbindungsverlust (technische Festlegung)

**Befund:** Dasselbe sicherheitskritische Systemverhalten wird dreifach unterschiedlich beschrieben: „alle Antriebe in den Leerlauf geschaltet" (Funktionsseite), „Auto-Stop bei Verbindungsverlust" (Feature-Liste), „Motoren wechseln in die Neutralstellung" (FAQ 09). Leerlauf (Drehzahl), Neutralstellung (ausgekuppelt) und Stopp sind technisch verschieden; DA/NB haben den Widerspruch geerbt.

**Erforderlich:** Technische Auskunft, was das System tatsächlich tut. **Empfohlene Sprachregelung** (falls Getriebe ausgekuppelt wird): einheitlich „werden alle Antriebe sofort in die Neutralstellung geschaltet"; Feature-Label „Auto-Stop" ggf. in „Automatische Neutralschaltung" umbenennen. Umsetzung danach in allen 8 Sprachen.

---

## E5 – Reichweiten- und Absolutaussagen (Claims, ggf. wettbewerbsrechtlich relevant)

**Befunde:**
1. Reichweite dreifach unterschiedlich: „bis zu 50 m" (Technikdaten), „ca. 50 Meter" (FAQ 01), „überall an Bord" (Vorteile) – zusammen mit „Für Boote jeder Größe" nicht haltbar.
2. FAQ 10: „jeder Steuerbefehl **ohne Verzögerung** ausgeführt" – technisch nicht haltbare Absolutaussage (BLE hat immer Latenz).
3. SV-Fassung verschärft „orientieren wir uns an den hohen Standards" zu „wir befolgen die Standards" (Compliance-Behauptung; Eintrag ist bereits als TARGET_REVIEW markiert).

**Empfehlung:** Einheitlich „bis zu 50 m"; FAQ 01 angleichen; „überall an Bord" relativieren („nahezu überall an Bord"); FAQ 10 „nahezu verzögerungsfrei"; SV-Formulierung abschwächen. Entscheidung, ob Marketing diese Abschwächungen mitträgt.

---

## E6 – Schlichtungsstelle: BGG vs. BFSG (juristisch)

**Befund:** Die Barrierefreiheitserklärung nennt dieselbe Stelle einmal als „Schlichtungsstelle nach dem Behindertengleichstellungsgesetz (BGG) bei der Bundesnetzagentur", einmal als „Schlichtungsstelle gemäß BFSG bei der Bundesnetzagentur". Die BGG-Schlichtungsstelle ist zudem nicht bei der Bundesnetzagentur angesiedelt. Zusätzlich nennt das Impressum ein „Universalschiedsverfahren" – gemeint ist ein Universal**schlichtungs**verfahren; mehrere Zielsprachen haben daraus fälschlich „Schiedsgerichtsbarkeit" (arbitrage/voldgift) gemacht.

**Erforderlich:** Juristische Klärung der korrekten Stelle und Rechtsgrundlage (BFSG-Schlichtungsstelle bei der Bundesnetzagentur ist vermutlich gemeint); danach Vereinheitlichung in allen Sprachen, inkl. Korrektur der Schiedsverfahren-Fehlübersetzungen.

---

## E7 – Cookie-Banner: Du oder Sie? (Markenentscheidung, klein)

**Befund:** Der Cookie-Banner ist das einzige seitenweite UI-Element in Sie-Form („Ihre Erfahrung"), die gesamte Website duzt. Die Zielsprachen haben unterschiedlich normalisiert (DA/NB/SV/NL: du/je; ES: tú – kollidiert dort mit der usted-Datenschutzerklärung).

**Empfehlung:** Banner auf Du umstellen (er ist UI-Copy, kein Rechtstext) und je Sprache die dokumentierte Konvention bestätigen. Aufwand: minimal.

---

## E8 – Terminologie-Leitentscheidungen (Marke/Produkt, einmalig festlegen)

Für das Glossar sind fünf Leitbegriffe zu bestätigen (Empfehlungen aus dem Prüfbericht):

| Feld | Empfehlung |
|---|---|
| SMARTDOCK-Komposita | Durchgängig mit Bindestrich: „SMARTDOCK-App", „SMARTDOCK-System" (33 Fundstellen uneinheitlich) |
| Händler vs. Partner | Zwei Begriffe sauber trennen: „Händler" (Vertrieb) / „zertifizierter Einbaupartner" (Installation) – aktuell 7 Varianten |
| Strahlruder-Familie | DE-Leitbegriff „Strahlruder" (Bug-/Heckstrahlruder); „Querstrahlruder" nur technisch begründet. Je Zielsprache ein Leitbegriff (EN thruster, FR propulseur d'étrave/de poupe, NL boeg-/hekschroef, DA/NB thruster, SV bog-/häckpropeller) |
| Winden | „Winsch/Winschen" statt „Winch/Winches"; Abgrenzung zu „Ankerwinde" |
| EN-Varietät | Britisches Englisch verbindlich (metres, manoeuvre, postcode); „en-US"-Deklaration im Code entsprechend ändern oder Varietät wechseln |

---

## Bereits erledigt (keine Entscheidung nötig)

Im Branch `agent/qa-corrections-2026-08-15` umgesetzt: MerCruiser „ab Baujahr 2016" in EN/FR wiederhergestellt (B2); Widerrufs-Anschrift auf „Finkenweg 9-15" korrigiert – verifiziert gegen das offizielle Thitronik-Impressum (B4); deutsche Datenschutz-Wörterbuchtexte wiederhergestellt (B6); Versicherungs-Deckungsausnahme USA/Kanada im EN-Impressum ergänzt (B7); schwedischer Grammatikfehler im Sicherheitstext behoben (B8); defekte Buttons/Strings (dealerFinder, „équipage") repariert; 39 DE- / 26 EN- / 37 FR-REVIEWED-Korrekturen in die aktiven Wörterbücher zurückgespielt; Tippfehler in AGB/Datenschutz/Impressum beseitigt.
