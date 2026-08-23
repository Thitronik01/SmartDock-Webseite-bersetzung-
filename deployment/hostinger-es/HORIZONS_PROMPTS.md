# Kontrollierte Horizons-Prompts

Die Prompts einzeln ausführen. Zwischen den Prompts den Stand prüfen und speichern. Nicht mehrere Schritte zusammenwerfen.

## Prompt 1 – fehlende Dateien anlegen

```text
Bereite ausschließlich die technische Grundstruktur für die spanische Locale es-ES vor.

1. Lege exakt diese vier Dateien an, falls sie noch nicht existieren:
- src/config/locales.js
- src/pages/ImpressumPage_ES.jsx
- src/pages/PrivacyPage_ES.jsx
- src/utils/translations/sourceTranslation_ES.js

2. Fülle sie nur mit minimalem syntaktisch gültigem Platzhalter-Code, damit ich ihren exakten Inhalt anschließend im Code-Editor einsetzen kann.
3. Verändere keine englischen oder französischen Texte und keine weiteren Dateien.
4. Veröffentliche die Website nicht.
5. Melde anschließend nur, welche der vier Dateien erfolgreich angelegt wurden.
```

## Danach – exakte Dateien im Code-Editor einsetzen

Jetzt alle Dateien aus `horizons-runtime-overlay/` am gleichnamigen Pfad vollständig einsetzen. Nicht von Horizons umformulieren oder automatisch übersetzen lassen.

## Prompt 2 – Integrität prüfen

```text
Prüfe den soeben eingesetzten spanischen Locale-Stand, ohne Inhalte umzuschreiben.

1. Prüfe, ob alle Importe auf vorhandene Dateien zeigen und die Anwendung kompiliert.
2. Prüfe, ob alle /es-Routen aus der beigefügten Routenliste erreichbar sind.
3. Prüfe, dass Spanisch noch PREVIEW und nicht im öffentlichen Sprachmenü auswählbar ist.
4. Prüfe, dass spanische Vorschauseiten noindex,nofollow ausgeben.
5. Verändere weder Englisch noch Französisch und veröffentliche nicht.

Nenne anschließend nur konkrete Fehler mit Dateipfad und Ursache. Wenn alles passt, bestätige jeden Punkt einzeln.
```

## Prompt 3 – Vorschauprüfung

```text
Führe eine Vorschauprüfung für es-ES durch, ohne zu veröffentlichen.

1. Prüfe die 15 angegebenen /es-Routen auf sichtbare Platzhalter, rohe Übersetzungsschlüssel und deutschen Resttext.
2. Prüfe Navigation, Footer, Sprache, 404-Seite und Kontaktbereich.
3. Prüfe die Darstellung auf Desktop und Mobilgerät.
4. Prüfe Browser-Konsole, Bilder, interne Links und dynamische FAQ-/Installationsdaten.
5. Ändere nichts automatisch; gib mir eine kurze Fehlerliste mit Route und sichtbarer Stelle.
```

## Prompt 4 – Spanisch für den Go-live aktivieren

```text
Aktiviere die bereits geprüfte spanische Locale es-ES für den Go-live.

1. Ändere in src/config/locales.js beim Eintrag ES ausschließlich release von PREVIEW auf LIVE.
2. Ändere beim selben Eintrag selectable von false auf true.
3. Prüfe, dass Spanisch im Sprachmenü erscheint, kein noindex mehr hat und es-ES-hreflang erzeugt wird.
4. Verändere keine englischen oder französischen Dateien oder Texte.
5. Veröffentliche erst, wenn alle vier Prüfungen erfolgreich sind; andernfalls stoppe und melde den Fehler.
```
