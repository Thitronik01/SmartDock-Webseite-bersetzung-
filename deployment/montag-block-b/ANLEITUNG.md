# Montag, Block B — 7 Dateien

Erst nach Block A machen. Alle sieben existieren in Hostinger bereits,
**kein Horizons-Chat nötig**. Reihenfolge egal.

## Ablauf je Datei

1. Datei hier öffnen, **Strg+A**, **Strg+C**
2. In Hostinger im Code-Editor die Zieldatei öffnen
3. **Strg+A**, **Strg+V**, **speichern**
4. Datei schließen, neu öffnen — nur das zählt als gespeichert

**Nicht veröffentlichen. Keinen Build starten.**

## Dateien und Kontrolle

| Nr | Datei | Ziel in Hostinger | Zeilen |
|---|---|---|---|
| 1 | `1_FAQPage.jsx` | `apps/web/src/pages/FAQPage.jsx` | 253 |
| 2 | `2_InstallationPage.jsx` | `apps/web/src/pages/InstallationPage.jsx` | 509 |
| 3 | `3_Step10Confirmation.jsx` | `apps/web/src/components/configurator/Step10Confirmation.jsx` | 163 |
| 4 | `4_ConfiguratorPage.jsx` | `apps/web/src/pages/ConfiguratorPage.jsx` | 49 |
| 5 | `5_DealerFinderPage.jsx` | `apps/web/src/pages/DealerFinderPage.jsx` | 430 |
| 6 | `6_HomePage.jsx` | `apps/web/src/pages/HomePage.jsx` | 87 |
| 7 | `7_NotFoundPage.jsx` | `apps/web/src/pages/NotFoundPage.jsx` | 66 |

Nach dem Speichern **Strg+Ende** und **Strg+F**:

| Nr | letzte Zeile | Suchbegriff | erwartet |
|---|---|---|---|
| 1 | `export default FAQPage;` | `translateSourceText` | 3 |
| 2 | `export default InstallationPage;` | `translateSourceText` | 4 |
| 3 | `export default Step10Confirmation;` | `esText(` | 5 |
| 4 | `export default ConfiguratorPage;` | `currentLanguage === 'ES'` | 1 |
| 5 | `export default DealerFinderPage;` | `currentLanguage === 'ES'` | 3 |
| 6 | `export default HomePage;` | `currentLanguage === 'ES'` | 3 |
| 7 | `export default NotFoundPage;` | `ES: {` | 1 |

## Was Block B bewirkt

Beseitigt, was ein spanischer Besucher als deutschen Text sieht: FAQ-Seite,
Installationsanleitungen aus der Datenbank, Konfigurator-Bestätigung,
Händlerfinder, Startseite und die spanische 404-Seite.

## Danach prüfen

In der Vorschau `/es/faq`, `/es/instalacion`, `/es/configurador` und
`/es/distribuidores` aufrufen. Dort darf kein deutscher Text mehr stehen.
Danach `/`, `/en`, `/fr` gegenprüfen — unverändert.
