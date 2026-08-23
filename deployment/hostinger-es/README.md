# SmartDock Spanisch – Übergabepaket für Hostinger Horizons

Stand: 17.08.2026  
Locale: `es-ES`  
URL-Präfix: `/es`  
Status: **technisch vollständig und bereit zur Integration als geschützte Vorschau**

## Was dieses Paket enthält

- `horizons-runtime-overlay/`: exakt die Dateien, die im bestehenden Horizons-Projekt ergänzt oder ersetzt werden müssen.
- `developer-audit/`: Tests, Generator und Paketdateien für eine technisch nachvollziehbare Übergabe.
- `static-upload-fallback/`: fertig gebauter statischer Stand inklusive `.htaccess` für einen klassischen Hostinger-Webhosting-Upload.
- `reference/`: die geprüfte Textquelle, aus der das spanische Wörterbuch erzeugt wurde.
- `manifest.json`: Dateiliste, Prüfsummen, Routen und QA-Ergebnis.
- `HORIZONS_PROMPTS.md`: kleine, kontrollierte Prompts für Horizons.
- `GO_LIVE_CHECKLIST.md`: technische Integrations- und Produktionsprüfung.
- `ROUTES.csv`: alle spanischen Zielrouten.

## Wichtige Hostinger-Grenze

Horizons kann ein exportiertes ZIP oder ein GitHub-Projekt nicht wieder als vollständiges Projekt importieren. Für das bestehende Horizons-Projekt ist deshalb **Weg A** vorgesehen. **Weg B** ist nur die statische Alternative außerhalb des Horizons-Editors.

## Weg A – empfohlen: in das bestehende Horizons-Projekt übernehmen

1. In Horizons zuerst einen aktuellen Code-Export als Sicherung erstellen.
2. Die vier noch nicht im Ursprungsprojekt vorhandenen Dateien mit Prompt 1 aus `HORIZONS_PROMPTS.md` anlegen lassen.
3. Im Horizons-Code-Editor jede Datei aus `horizons-runtime-overlay/` am gleichnamigen Pfad vollständig ersetzen. Keine anderen Dateien ändern.
4. Änderungen speichern, aber noch nicht veröffentlichen.
5. Alle Vorschauprüfungen aus `GO_LIVE_CHECKLIST.md` durchführen.
6. Sobald Spanisch öffentlich aktiviert werden soll, die zwei ES-Schalter in `src/config/locales.js` umlegen:
   - `release: PREVIEW` → `release: LIVE`
   - `selectable: false` → `selectable: true`
7. Produktionsprüfung durchführen und erst bei grünem Ergebnis veröffentlichen.

Diese Aktivierung nimmt Spanisch automatisch in Sprachmenü und `hreflang` auf und entfernt das Vorschau-`noindex`. Englisch und Französisch müssen dafür nicht bearbeitet werden.

### Neu anzulegende Dateien

- `src/config/locales.js`
- `src/pages/ImpressumPage_ES.jsx`
- `src/pages/PrivacyPage_ES.jsx`
- `src/utils/translations/sourceTranslation_ES.js`

Alle übrigen Dateien des Runtime-Overlays ersetzen vorhandene Dateien.

## Weg B – statischer Hostinger-Upload

Nur verwenden, wenn die Seite als klassisches statisches Hosting statt im Horizons-Editor betrieben werden soll:

Der enthaltene Build entspricht bewusst dem geschützten **PREVIEW-Stand**. Für einen öffentlichen ES-Go-live muss zuerst der Quellstand wie unter Weg A aktiviert und danach neu gebaut werden.

1. Den **Inhalt** von `static-upload-fallback/` in das Web-Stammverzeichnis eines leeren PHP/HTML-Hostings hochladen.
2. Darauf achten, dass die versteckte Datei `.htaccess` mit hochgeladen wird.
3. Nicht den Quellcode-Ordner und nicht das gesamte Übergabe-ZIP als Website hochladen.
4. Danach sämtliche Produktionsprüfungen aus der Checkliste ausführen.

## Technischer Prüfstand

- 580 spanische Schlüsselübersetzungen
- 668 spanische Quelltextübersetzungen für dynamische und eingebettete Inhalte
- 15 definierte ES-Routen
- aktive Importstruktur vollständig gegen fehlende ES-Schlüssel und deutsche Quelltexte geprüft
- Locale-Tests: 10/10 bestanden
- Produktions-Build: muss beim finalen Packen erfolgreich sein und wird im Manifest dokumentiert

Die 146 vom Generator gemeldeten deutschen Alt-Schlüssel sind inaktive bzw. historisch vorhandene Wörterbucheinträge. Die tatsächlich von der aktuellen Anwendung importierte Struktur ist vollständig abgedeckt.
