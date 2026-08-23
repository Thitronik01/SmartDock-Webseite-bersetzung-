# Montag, Block C — 16 Dateien

Erst nach Block A und B. Alle existieren in Hostinger bereits,
**kein Horizons-Chat nötig**. Reihenfolge egal.

Block C ist der unkritischste Teil: überwiegend Bildbeschreibungen,
Bedienhilfen und sprachabhängige Breadcrumb-Pfade. Er kann auch nach einem
Go-live nachgezogen werden.

## Ablauf je Datei

1. Datei hier öffnen, **Strg+A**, **Strg+C**
2. In Hostinger im Code-Editor die Zieldatei öffnen
3. **Strg+A**, **Strg+V**, **speichern**
4. Datei schließen, neu öffnen — nur das zählt als gespeichert

**Nicht veröffentlichen. Keinen Build starten.**

## Komponenten — Ziel: `apps/web/src/components/`

| Nr | Datei | Suchbegriff | erwartet |
|---|---|---|---|
| 1 | `1_Header.jsx` | `currentLanguage === 'ES'` | 2 |
| 2 | `2_Footer.jsx` | `currentLanguage === 'ES'` | 2 |
| 3 | `3_Hero.jsx` | `currentLanguage === 'ES'` | 1 |
| 4 | `4_Breadcrumb.jsx` | `currentLanguage === 'ES'` | 1 |
| 5 | `5_Kontakt.jsx` | `currentLanguage === 'ES'` | 1 |
| 6 | `6_SmartdockApp.jsx` | `currentLanguage === 'ES'` | 1 |
| 7 | `7_SmartdockAppDownload.jsx` | `currentLanguage === 'ES'` | 1 |
| 8 | `8_SmartdockAppInterface_DE.jsx` | `currentLanguage === 'ES'` | 1 |
| 9 | `9_SmartdockConfigurator.jsx` | `currentLanguage === 'ES'` | 1 |
| 10 | `10_SmartdockModules.jsx` | `currentLanguage === 'ES'` | 1 |

`11_Step8UnifiedSummaryAndContact.jsx` gehört nach
`apps/web/src/components/configurator/` — Suchbegriff `df_user_location`, 1 Treffer.

## Seiten — Ziel: `apps/web/src/pages/`

| Nr | Datei | Suchbegriff | erwartet |
|---|---|---|---|
| 12 | `12_FunktionenPage.jsx` | `currentLanguage === 'ES'` | 1 |
| 13 | `13_AGBPage.jsx` | `pathFor` | 3 |
| 14 | `14_AccessibilityPage.jsx` | `pathFor` | 3 |
| 15 | `15_VersandbedingungPage.jsx` | `pathFor` | 4 |
| 16 | `16_WiderrufsbelehrungPage.jsx` | `pathFor` | 3 |

## Letzte Zeile prüfen

Jede Datei endet mit `export default` und ihrem eigenen Namen, zum Beispiel
`export default Header;` oder `export default AGBPage;`. Steht dort etwas
anderes, wurde nicht vollständig ersetzt.

## Danach

Damit sind alle 37 Dateien übertragen. In der Vorschau `/es/terminos`,
`/es/accesibilidad`, `/es/envios` und `/es/desistimiento` aufrufen — die
Brotkrümel-Navigation muss auf spanische Pfade zeigen.

Dann `/`, `/en`, `/fr` und `/ch` gegenprüfen.

**Spanisch bleibt weiterhin nicht im Sprachmenü.** Die Freigabe ist ein
eigener, bewusster Schritt und erfolgt erst nach Max' Zustimmung.
