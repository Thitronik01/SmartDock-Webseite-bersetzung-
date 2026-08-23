# Montag, Block A — 5 Dateien

> ## Vorher NICHT veröffentlichen
>
> Den spanischen Seiten fehlt noch der Vermerk, der Google sagt: nicht in die
> Suchergebnisse aufnehmen. Wird jetzt veröffentlicht, könnte Google die
> halbfertigen spanischen Seiten anzeigen — und das dauert Wochen, bis es
> wieder verschwindet.
>
> **Block A setzt diesen Vermerk. Erst danach ist Veröffentlichen unbedenklich.**

Alle fünf existieren in Hostinger bereits. **Kein Horizons-Chat nötig**, nur
Code-Editor. Reihenfolge egal.

## Ablauf je Datei

1. Datei hier öffnen, **Strg+A**, **Strg+C**
2. In Hostinger im Code-Editor die Zieldatei öffnen
3. **Strg+A**, **Strg+V**, **speichern**
4. Datei schließen, neu öffnen — nur das zählt als gespeichert

**Nicht veröffentlichen. Keinen Build starten.**

## Die fünf Dateien

| Nr | Hier | Ziel in Hostinger | Zeilen |
|---|---|---|---|
| 1 | `1_translation_DE.js` | `apps/web/src/utils/translations/translation_DE.js` | 786 |
| 2 | `2_translation_EN.js` | `apps/web/src/utils/translations/translation_EN.js` | 590 |
| 3 | `3_translation_FR.js` | `apps/web/src/utils/translations/translation_FR.js` | 786 |
| 4 | `4_SeoHead.jsx` | `apps/web/src/components/SeoHead.jsx` | 59 |
| 5 | `5_LanguageSwitcher.jsx` | `apps/web/src/components/LanguageSwitcher.jsx` | 55 |

## Kontrolle danach

Jeweils **Strg+Ende** und die letzte Zeile prüfen:

| Datei | letzte Zeile |
|---|---|
| translation_DE.js | `};` |
| translation_EN.js | `};` |
| translation_FR.js | `};` |
| SeoHead.jsx | `export default SeoHead;` |
| LanguageSwitcher.jsx | `export default LanguageSwitcher;` |

Zusätzlich mit **Strg+F** suchen:

| Datei | Suchbegriff | erwartet |
|---|---|---|
| translation_DE.js | `df_user_location` | 1 Treffer |
| translation_EN.js | `df_user_location` | 1 Treffer |
| translation_FR.js | `df_user_location` | 1 Treffer |
| SeoHead.jsx | `noindex,nofollow` | 1 Treffer |
| LanguageSwitcher.jsx | `SELECTABLE_LOCALES` | 3 Treffer |

## Was Block A bewirkt

- Die 14 Schlüssel, die die übrigen Dateien brauchen, sind vorhanden.
  Bestehende DE-, EN- und FR-Texte bleiben dabei unverändert.
- `noindex,nofollow` wird für Spanisch aktiv. **Erst danach** wäre eine
  Veröffentlichung technisch unbedenklich.
- Der Sprachumschalter zeigt auf `/es` die richtige Sprache an.
  Spanisch erscheint weiterhin **nicht** im Menü — das ist so gewollt.

## Danach

In der Vorschau kurz `/`, `/en`, `/fr` und `/ch` aufrufen: alles muss
unverändert funktionieren. Dann `/es` — Navigation auf Spanisch.
