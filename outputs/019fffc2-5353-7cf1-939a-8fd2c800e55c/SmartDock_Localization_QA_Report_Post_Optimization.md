# SmartDock Localization – QA-Abschlussbericht

**Stand:** 14. August 2026  
**Prüfumfang:** Englisch, Französisch, Dänisch, Spanisch, Niederländisch, Norwegisch Bokmål und Schwedisch  
**Gesamtbewertung:** **96,3 von 100 Punkten**

## Ergebnisübersicht

| Zielsprache | Sprachcode | Bewertung | Einordnung |
|---|---:|---:|---|
| Englisch | en | 95,9 | Sehr gut – Zielwert erreicht |
| Französisch | fr-FR | 95,6 | Sehr gut – Zielwert erreicht |
| Dänisch | da-DK | 96,6 | Sehr gut – Zielwert erreicht |
| Spanisch | es-ES | 96,6 | Sehr gut – Zielwert erreicht |
| Niederländisch | nl-NL | 96,6 | Sehr gut – Zielwert erreicht |
| Norwegisch Bokmål | nb-NO | 96,5 | Sehr gut – Zielwert erreicht |
| Schwedisch | sv-SE | 96,4 | Sehr gut – Zielwert erreicht |

Alle sieben Zielsprachen erreichen mindestens 95 von 100 Punkten. Es bestehen keine offenen kritischen Übersetzungsfehler.

## Umgesetzte Verbesserungen

- Die sechs französischen Rechtsrouten wurden vollständig lokalisiert und im Browser geprüft.
- Deutsche Textrückfälle auf französischen Seiten wurden beseitigt.
- Die Bestätigungsseite des Konfigurators wurde vollständig an das Übersetzungssystem angebunden.
- Installationswerte, Kartenbeschriftungen und zentrale UI-Texte wurden sprachabhängig verdrahtet.
- Englische Marketingformulierungen wurden idiomatischer und fachlich präziser formuliert.
- Das französische Sprachregister sowie maritime Fachbegriffe wurden vereinheitlicht.
- Datenschutz-, Marken-, Barrierefreiheits- und UI-Terminologie wurde in allen sieben Zielsprachen harmonisiert.
- Das SmartDock-Glossar wurde um verbindliche Fachbegriffe und zu vermeidende Varianten ergänzt.
- Interne Links, Seitentitel, Metadaten und Sprachkennzeichnungen der Rechtsseiten wurden lokalisiert.

## Behobene Schwerpunkte

### Französische Rechtsseiten

Die folgenden Routen wurden mit französischen Seitentiteln, Metadaten, Navigation und sichtbaren Inhalten geprüft:

- `/fr/confidentialite`
- `/fr/mentions-legales`
- `/fr/cgv`
- `/fr/accessibilite`
- `/fr/droit-de-retractation`
- `/fr/livraison`

In den geprüften sichtbaren Inhalten wurden keine deutschen Rückfälle festgestellt. Offizielle deutsche E-Mail-Adressen oder Behörden-URLs bleiben unverändert, wenn sie Bestandteil der rechtlichen Kontaktangaben sind.

### Terminologie

Unter anderem wurden folgende Begriffsfelder vereinheitlicht:

- Ankerwinde und allgemeine Windenbegriffe
- Bug- und Heckstrahlruder
- Händler- und Installationsservice
- Konfigurator- und App-Terminologie
- Paketpreisnachlass
- Datenschutz-Grundverordnung und Auftragsverarbeitungsvertrag
- Sprachabhängige juristische Zitierweisen

## Verbleibende Restpunkte

Die noch offenen Punkte stellen keine kritischen Übersetzungsfehler dar. Sie betreffen überwiegend Inhalte, die externe Daten, neue Assets oder fachliche Freigaben benötigen:

1. Dynamische technische Werte aus PocketBase sollten abschließend mit realen Datensätzen geprüft werden.
2. Texte in Rastergrafiken benötigen sprachspezifische Bildvarianten oder bearbeitbare Quelldateien.
3. Einzelne ALT-, ARIA- und Titeltexte sollten nach finaler Asset-Zuordnung nochmals kontrolliert werden.
4. Juristische Zitierkonventionen können je Zielmarkt noch durch eine lokale Rechtsprüfung verfeinert werden.
5. Die technische Produktbezeichnung „Joystick EVC 2.0 & D E“ bleibt bis zur fachlichen Produktfreigabe unverändert.

## Technische Verifikation

- Produktions-Build erfolgreich
- Code-Qualitätsprüfung ohne Fehler
- Browserprüfung der französischen Rechtsrouten erfolgreich
- 153 von 153 gemeinsam genutzten französischen Rechtstext-Blöcken korrekt zugeordnet
- Keine Browser-Konsolenfehler auf den geprüften Routen
- Keine offenen kritischen Übersetzungsfehler

## Freigabehinweis

Die sprachliche QA ist mit mindestens 95 Punkten pro Zielsprache bestanden. Rechtliche Konformität, Produktkompatibilität, Preise, Fristen, Zertifizierungen und technische Varianten benötigen weiterhin die jeweils zuständige fachliche oder juristische Freigabe.

## Zugehörige Datei

Der ausführliche tabellarische Prüfbericht befindet sich in:

`SmartDock_Localization_QA_Report_Post_Optimization.xlsx`
