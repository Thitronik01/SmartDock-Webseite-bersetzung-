# Interne Blocker vor dem spanischen Go-live

Diese Datei ist ausschließlich für die interne SmartDock-Prüfung bestimmt und darf nicht an Hostinger Horizons übergeben werden.

## Freigabepflichtig

- **Rechtstexte:** Spanische Fassung von Datenschutz, AGB, Widerruf, Versand, Barrierefreiheit und Impressum durch die zuständige Rechts-/Datenschutzstelle freigeben lassen. Firmendaten und gesetzliche Verweise ausdrücklich mitprüfen.
- **Produktaussagen:** Reichweite, Temperaturbereiche, Stromwerte, Kompatibilitäten, NMEA-/DAME-Aussagen, Versicherungsschutz und sonstige technische oder werbliche Behauptungen durch Produktverantwortliche bestätigen lassen.
- **Spanischer App-Screenshot:** Auf der ES-Seite wird derzeit aus Layoutgründen noch das vorhandene deutsche App-Interface-Bild verwendet. Vor Go-live ist ein spanischer Screenshot einzusetzen oder die bewusste Verwendung schriftlich freizugeben.
- **Dynamische Live-Daten:** FAQ, Händlerfinder und Installationsanleitungen beziehen Inhalte aus PocketBase. Der aktuelle deutsche Quellbestand wird übersetzt; neu oder anders formulierte Datensätze können sichtbar mit `[ES missing]` markiert werden. Staging- und Live-Daten müssen geprüft werden.
- **PDF-Dokumente:** Spanische Linkbeschriftungen ändern nicht den Inhalt bestehender PDFs. Prüfen, ob spanische PDFs erforderlich sind.
- **Kontaktzustellung:** Das Formular im Zielsystem mit einer autorisierten Testnachricht prüfen: Zustellung, Pflichtfelder, Datenschutzlink und Erfolgsmeldung.
- **Externe Medien:** Vimeo-/Video-Einbettungen nach der Veröffentlichung im echten Browser und auf der endgültigen Domain prüfen.

## Release-Zustand

Bis diese Punkte intern geprüft sind, bleibt ES absichtlich:

- unter `/es` aufrufbar,
- als Vorschau mit `noindex,nofollow` geschützt,
- aus dem öffentlichen Sprachmenü ausgeblendet,
- aus produktiven `hreflang`-Verweisen und der Sitemap ausgeschlossen.

## Kein Blocker

Der Wörterbuchgenerator meldet 146 historische deutsche Schlüssel ohne spanischen Wert. Diese Schlüssel liegen außerhalb der aktiven Importstruktur. Die aktuelle Anwendung wurde zusätzlich importgraphbasiert geprüft; dort fehlen keine verwendeten statischen oder dynamischen ES-Schlüssel und keine verwendeten eingebetteten deutschen Quelltexte.

