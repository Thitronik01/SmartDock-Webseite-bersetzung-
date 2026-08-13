
# Strukturierte Text-Extraktion: Warenkorb / Zusammenfassung (Configurator)

*Hinweis: Eine explizite `CartPage.jsx` existiert in den Routen der `App.jsx` nicht. Der Kauf- bzw. Anfrageprozess wird in dieser Anwendung über den Konfigurator (`ConfiguratorPage.jsx`) abgewickelt. Die Funktion eines Warenkorbs übernimmt hierbei die Zusammenfassung und Preisübersicht (`Step7Summary.jsx`, `SummaryPanel.jsx` sowie das finale Bestätigungs-Panel).*

Die folgende Liste enthält alle sichtbaren Texte dieser "Warenkorb"-äquivalenten Sektionen, basierend auf den vorhandenen Übersetzungsschlüsseln.

## 1) Überschriften (h1, h2, h3)

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Zusammenfassung & Anfrage | Hauptüberschrift Bestellabschluss | `conf_summary_req_title` | Nutzt Translation-Key |
| Zusammenfassung | Titel der Seitenleiste/Panel | `summary_title` | Nutzt Translation-Key |
| Deine Auswahl | Titel Sidebar (Mobile/Desktop) | `side_title` | Nutzt Translation-Key |
| Deine Konfiguration | Übersicht der gewählten Module | `conf_cfg_title` | Nutzt Translation-Key |
| Übersicht | Überschrift Check-Bereich | `sum_overview` | Nutzt Translation-Key |
| Produkte | Tabellenkopf Produkte | `sum_products` | Nutzt Translation-Key |

## 2) Beschreibungen und Body-Text

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Bitte überprüfe deine Konfiguration, gib deine Kontaktdaten ein | Einleitungstext Zusammenfassung | `conf_summary_req_desc` | Nutzt Translation-Key |
| und wähle einen Einbaupartner | Einleitungstext (Händler-Zusatz) | `conf_summary_req_desc_dealer` | Nutzt Translation-Key |
| Bitte prüfe deine Auswahl inklusive Preiskalkulation. | Hinweistext vor Absenden | `sum_check` | Nutzt Translation-Key |
| Die angezeigten Preise sind unverbindliche Preisempfehlungen inkl. MwSt. | Disclaimer im Footer/Panel | `sum_disclaimer` | Nutzt Translation-Key |

## 3) Warenkorb-Totals & Preisberechnung

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Zwischensumme: | Preisübersicht (Subtotal) | `summary_subtotal` | Nutzt Translation-Key |
| Paket-Rabatt: | Preisübersicht (Discount) | `summary_bundle_discount` | Nutzt Translation-Key |
| Netto Gesamt: | Preisübersicht (Net) | `summary_net_total` | Nutzt Translation-Key |
| MwSt.: | Preisübersicht (VAT Amount) | `summary_vat` | Nutzt Translation-Key |
| Mehrwertsteuersatz: | Preisübersicht (VAT Rate Info) | `side_vat_rate` | Nutzt Translation-Key |
| Gesamt (Brutto): | Preisübersicht (Gross) | `summary_gross_total` | Nutzt Translation-Key |
| Inklusive | Status für Inklusivleistungen | `sum_incl` | Nutzt Translation-Key |

## 4) Produktbezeichnungen & Item-Labels im Warenkorb

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Antriebstechnik: | Kategorie-Label im Warenkorb | `sum_engine` | Nutzt Translation-Key |
| Strahlruder: | Kategorie-Label im Warenkorb | `sum_thruster` | Nutzt Translation-Key |
| Service: | Kategorie-Label im Warenkorb | `sum_service` | Nutzt Translation-Key |
| Anzahl Motoren: | Label für Motor-Details | `sum_motor_count` | Nutzt Translation-Key |
| Benötigte Systeme | Label für Modul-Anforderungen | `sum_req_sys` | Nutzt Translation-Key |
| Engine Control Unit | Modul-Bezeichnung | `conf_cfg_ecu` | Nutzt Translation-Key |
| Gewählte Module | Bereich für Zusatzmodule | `conf_cfg_modules` | Nutzt Translation-Key |
| Keine zusätzlichen Module gewählt | Fallback bei leerem Modul-Warenkorb | `conf_cfg_mod_none` | Nutzt Translation-Key |

## 5) Button-Labels und CTAs

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Weiter | Button zur nächsten Sektion | `sum_next` | Nutzt Translation-Key |
| Zurück | Button zum vorherigen Schritt | `btn_back` | Nutzt Translation-Key |
| Jetzt anfragen | Kauf/Anfrage abschließen | `conf_btn_submit` | Nutzt Translation-Key |
| Wird gesendet... | Lade-Status Button | `conf_btn_submit_loading` | Nutzt Translation-Key |
| Als PDF herunterladen | Button (Export) | *Hardware/Komponente* | *Vorgeschlagen: `cart_btn_export_pdf`* |
| Drucken | Button (Druckansicht) | `common_print` | Nutzt Translation-Key |

## 6) Meldungen (Erfolg, Fehler, Ladezustände)

| Exakter Text (DE) | Sektion / Kontext | Aktueller Translation-Key | Status |
| :--- | :--- | :--- | :--- |
| Es gab einen Fehler beim Speichern deiner Daten. Bitte versuche es erneut. | Fehler beim Checkout | `conf_err_save` | Nutzt Translation-Key |
| Vielen Dank! | Success-Titel nach Anfrage | `conf_succ_title` | Nutzt Translation-Key |
| Der gewählte Händler wird sich in Kürze mit dir in Verbindung setzen. | Success-Beschreibung | `conf_succ_desc` | Nutzt Translation-Key |
| Anfragedetails | Überschrift Success-Screen | `conf_succ_details` | Nutzt Translation-Key |
| Referenznummer | Label für Order-ID | `conf_succ_ref` | Nutzt Translation-Key |

