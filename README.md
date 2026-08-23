<p align="center">
  <img src="assets/smartdock-logo.png" alt="SMARTDOCK Logo" width="220">
</p>

# SMARTDOCK Website-Lokalisierung

Dieses private Repository bündelt den bestehenden Website-Quellstand und das geprüfte Lokalisierungspaket für die Erweiterung von SMARTDOCK um fünf Zielsprachen:

- Dänisch (`da-DK`)
- Spanisch (`es-ES`)
- Niederländisch (`nl-NL`)
- Norwegisch Bokmål (`nb-NO`)
- Schwedisch (`sv-SE`)

Deutsch (`de-DE`) ist der vollständige Master. Englisch und Französisch dienen ausschließlich als Bedeutungs- und Kontextreferenzen.

## Ausgangslage

Die Website verwendet mehrere nicht gleichwertige Übersetzungsmechanismen gleichzeitig: statische Wörterbücher, direkte Sprachzweige in React-Komponenten, dynamische PocketBase-Datensätze, separate Rechtstextseiten und einen teilweise wirkungslosen `Translate`-Wrapper. Dadurch lässt sich der tatsächliche Übersetzungsumfang weder aus einzelnen Wörterbüchern noch aus vorhandenen Sprachrouten zuverlässig ableiten.

Zusätzlich bestehen fachliche Konflikte, die nicht durch Übersetzung gelöst werden dürfen. Beispiele sind widersprüchliche Aussagen zur Selbstinstallation, technisch und sicherheitsrelevante Produktversprechen sowie Datenschutztexte, die gegen die produktiv eingesetzte Infrastruktur geprüft werden müssen.

## Technischer Stand

Sprachlich sind alle fünf Zielsprachen aufbereitet. **Technisch umgesetzt ist bisher
ausschließlich Spanisch**, als Pilot für den späteren Rollout der übrigen vier.

```text
DE  de-DE  LIVE      EN  en-GB  LIVE      FR  fr-FR  LIVE      CH  de-CH  LIVE
ES  es-ES  PREVIEW   nicht im Sprachmenü, über /es erreichbar
DA  da-DK  PLANNED   NL  nl-NL  PLANNED   NB  nb-NO  PLANNED   SV  sv-SE  PLANNED
```

Die Sprachliste liegt datengetrieben in `apps/web/src/config/locales.js`. Routing,
Sprachmenü, SEO und Übersetzungszugriff leiten sich daraus ab, damit weitere
Sprachen ohne Architekturumbau folgen können.

**Übertragung nach Hostinger:** 9 von 37 Dateien sind eingesetzt und gegen einen
frischen Export geprüft; `/es` lädt in der Vorschau. Die restlichen 28 Dateien
liegen als vorbereitete Blöcke unter `deployment/montag-block-a|b|c/`, jeweils mit
Anleitung und Kontrollwerten.

> **Vor einer Veröffentlichung:** In Hostinger steht `SeoHead.jsx` noch auf dem
> Ausgangsstand, deshalb fehlt den `/es`-Seiten `noindex,nofollow`. Block A
> behebt das. Vorher nicht veröffentlichen.

### Warum die Übertragung manuell läuft

Der Hostinger-Horizons-Chatbot arbeitet bei größeren Datenmengen unzuverlässig:
kürzt Inhalte, lässt Einträge aus, meldet Erfolg ohne Nachweis und beantwortet
Rückfragen aus dem Prompt statt von der Festplatte. Dateiinhalte werden deshalb
lokal vorbereitet und im Hostinger-Code-Editor eingesetzt; Horizons legt höchstens
leere Stub-Dateien an. Details in `deployment/FORTSETZUNG_PROMPT.md`.

### Bewusste Entscheidung zu DE, EN und FR

Der Auftrag umfasst Englisch und Französisch nicht. Die Live-Texte bleiben
unverändert — auch dort, wo `npm run qa:localization` Verbesserungen vorschlägt.
Ergänzt wurden ausschließlich 14 zusätzliche Schlüssel, die die überarbeiteten
Komponenten benötigen:

```text
DE  710 → 724      EN  503 → 517      FR  710 → 724
geändert: 0        entfernt: 0        neu: 14
```

Der QA-Abgleich meldet daher 116 Abweichungen. Sie sind gewollt und blockieren nicht.

## Sprachlicher Stand

Die sprachliche Arbeit für alle identifizierten, aktiven und browser-sichtbaren Inhalte ist abgeschlossen:

- 747 strukturierte Zielsprachzeilen mit stabilen Translation IDs
- vollständige Zielsets für DA, ES, NL, NB und SV
- globale Navigation, Homepage, Kontakt, Produkt, Funktionen und Installation
- FAQ-Seite einschließlich aller elf dynamischen FAQ-Einträge
- Händlerfinder und browser-sichtbarer Konfigurator
- Cookie-Dialog, Fehlerseite, SEO-, Alt-, ARIA- und Downloadbeschriftungen
- Barrierefreiheit, Versand/Zahlung, Widerruf, AGB, Impressum und Datenschutzerklärung
- vollständige Datenschutzerklärung mit allen Abschnitten 1–14 in fünf Zielsprachen
- lokalisierte Produktionscopy für zwei Grafikfamilien; zehn Zielgrafiken müssen noch erstellt werden

Das zentrale Arbeits- und Übergabedokument ist [SMARTDOCK_LOCALIZATION_PACKAGE.md](SMARTDOCK_LOCALIZATION_PACKAGE.md). Es enthält Mastertexte, Zielübersetzungen, Statuskennzeichnungen, Scope-Entscheidungen und die vollständige Review Queue.

## Verbindlicher Umfang

Übersetzt werden nur Inhalte, die direkt im Browser angezeigt werden. Ausgeschlossen sind:

- verlinkte oder herunterladbare PDF-Inhalte
- generierte Konfigurator-PDFs
- E-Mail-Texte und interne Servermeldungen
- ungenutzte oder alte Komponenten

Sichtbare Dokumenttitel, Downloadbuttons, ARIA-Beschriftungen und aufklappbare dynamische Website-Inhalte bleiben im Umfang. Produktnamen, Modulcodes, Marken und technische Tokens werden nicht verändert.

## Was noch fehlt

Die Übersetzungen sind sprachlich vollständig, aber noch nicht veröffentlichungsbereit. Vor dem Rollout sind folgende Arbeitsströme erforderlich:

1. Rechtliche, technische, sicherheitsbezogene, kommerzielle und markenbezogene Freigaben abschließen.
2. Widersprüche im deutschen Master verbindlich entscheiden und betroffene Zieltexte nachführen.
3. Die fünf Zielsprachen in Routing, Wörterbüchern, dynamischen Datensätzen, SEO und Barrierefreiheit implementieren.
4. Zehn lokalisierte Grafikassets produzieren und visuell prüfen.
5. Native Sprachprüfung und End-to-End-QA in allen Zielrouten durchführen.

Die konkreten Arbeitspakete werden als GitHub Issues geführt. `TARGET_REVIEW` bedeutet: Übersetzung vorhanden, Veröffentlichung erst nach der jeweils genannten Freigabe.

## Vorbereitung und Projektsteuerung

- [Entscheidungsbriefing für Montag, 17. August 2026](MONTAG_BRIEFING_2026-08-17.md)
- [Technische Roadmap für DA, ES, NL, NB und SV](TECHNISCHE_ROADMAP_LOKALISIERUNG.md)
- [QA-Arbeitsexport und vollständiger Prüfbericht](qa-arbeitsexport/00_INDEX.md)
- [Release-Tracking-Issue #10](https://github.com/Thitronik01/SmartDock-Webseite-bersetzung-/issues/10)
- [Fortsetzungs-Prompt und Übertragungsprozess](deployment/FORTSETZUNG_PROMPT.md)

## Repository-Struktur

```text
apps/web/                         React-/Vite-Website
apps/api/                         API-Dienst
apps/pocketbase/                  PocketBase-Hooks und Migrationen
assets/smartdock-logo.png         Repository-Logo
deployment/hostinger-es-*/        geprüftes Übertragungspaket, alle 37 Dateien
deployment/montag-block-a|b|c/    Blöcke für die restlichen 28 Dateien
deployment/FORTSETZUNG_PROMPT.md  Übergabe und Arbeitsprozess
SMARTDOCK_LOCALIZATION_PACKAGE.md Vollständiges Lokalisierungs- und Übergabepaket
```

Lokale `.env`-Dateien, PocketBase-Laufzeitdaten, ausführbare Binärdateien und ausgeschlossene PDFs werden nicht versioniert.

## Lokale Entwicklung

Voraussetzungen: eine zur `.nvmrc` passende Node.js-Version und npm.

```bash
cp apps/api/.env.example apps/api/.env
npm install
npm run dev
```

Vollständige lokale Prüfung mit Node 22:

```bash
npm run verify
```

Der Prüfablauf umfasst den QA-Abgleich, die zehn Locale-Tests, die Codeprüfung und den Produktions-Build. Derselbe Ablauf läuft bei Pull Requests automatisch über GitHub Actions.

Erwartet: 10/10 Tests, Lint und Build bestanden, `translation_ES.js` mit 580 und `sourceTranslation_ES.js` mit 668 Schlüsseln.

Benötigte Zugangsdaten werden ausschließlich lokal oder über die jeweilige Deployment-Umgebung bereitgestellt.
