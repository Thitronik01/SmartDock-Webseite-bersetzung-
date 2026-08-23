# ES-Go-live-Checkliste

## 1. Vor der Integration

- [ ] Aktuellen Horizons-Code exportieren und als Rückfallebene sichern.
- [ ] Prüfsummen des Übergabepakets mit `manifest.json` vergleichen.
- [ ] Bestätigen, dass nur Dateien aus `horizons-runtime-overlay/` übernommen werden.
- [ ] Sicherstellen, dass Englisch und Französisch nicht manuell bearbeitet werden.

## 2. Vorschau in Horizons

- [ ] Projekt kompiliert ohne Fehler.
- [ ] Alle 15 Routen aus `ROUTES.csv` liefern die erwartete Seite.
- [ ] `<html lang="es-ES">` ist auf ES-Routen gesetzt.
- [ ] ES-Seiten liefern `noindex,nofollow`.
- [ ] Spanisch erscheint noch nicht im öffentlichen Sprachmenü.
- [ ] Keine sichtbaren `[ES missing]`, Übersetzungsschlüssel oder deutschen Resttexte.
- [ ] Navigation, Breadcrumbs, Buttons, Footer und Kontaktbereich sind spanisch.
- [ ] Unbekannte `/es/...`-Route zeigt die spanische 404-Seite.
- [ ] Desktop, Tablet und Mobilansicht sind ohne Überlauf oder Überlagerung.
- [ ] Browser-Konsole enthält keine neuen Fehler.
- [ ] FAQ, Installation und Händlerdaten wurden mit den Zielsystem-Daten geprüft.
- [ ] Bilder, Video, Downloads und interne Links funktionieren.

## 3. Aktivierung

- [ ] In `src/config/locales.js` beim Eintrag ES: `release: LIVE`.
- [ ] Beim selben Eintrag: `selectable: true`.
- [ ] Keine weitere Locale oder Sprachdatei geändert.

## 4. Produktionsprüfung vor Veröffentlichung

- [ ] Spanisch erscheint im Sprachmenü und wechselt auf die äquivalente ES-Seite.
- [ ] `noindex,nofollow` ist auf ES-Seiten verschwunden.
- [ ] Canonical verweist auf die jeweilige endgültige `/es`-URL.
- [ ] `hreflang="es-ES"` wird auf veröffentlichten Sprachvarianten ausgegeben.
- [ ] Sitemap, `robots.txt` und `llms.txt` sind nach Veröffentlichung auf der Zieldomain vorhanden und enthalten den freigegebenen Stand.
- [ ] Alle 15 ES-Routen funktionieren in einem privaten Browserfenster.
- [ ] Keine neuen Konsolen-, Netzwerk- oder 404-Fehler.
- [ ] Kontaktformular und dynamische Daten funktionieren auf der endgültigen Domain.

## 5. Nach Veröffentlichung

- [ ] Mobil- und Desktop-Smoke-Test auf der endgültigen Domain abgeschlossen.
- [ ] Indexierbarkeit und Canonicals erneut geprüft.
- [ ] Verantwortliche Person und Veröffentlichungszeit dokumentiert.
- [ ] Bei einem kritischen Fehler: Veröffentlichung zurücknehmen bzw. gesicherten Vorzustand wiederherstellen und ES erneut auf PREVIEW/nicht auswählbar setzen.
