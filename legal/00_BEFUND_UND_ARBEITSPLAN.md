# Rechtstexte DE / EN / FR — Befund und Arbeitsplan

Stand: 2026-08-24 · Branch `claude/hostinger-horizons-translations-kttjk6`
Betrifft: AGB, Datenschutz, Impressum, Versandbedingungen, Widerrufsbelehrung
(+ Barrierefreiheit als sechste Rechtsseite)

---

## 1. Was ich prüfen konnte — und was nicht

**Geprüft:** der komplette Website-Quellstand in diesem Repository
(`apps/web/`). Das ist der Hostinger-Horizons-Export.

**Nicht geprüft:** die Dokumente in
`C:\Users\max.behrens\Desktop\Smartdock Übersetzung\Rechtliches`.
Diese liegen auf Max' Rechner. Ich arbeite in einem abgeschotteten
Container in der Cloud und habe auf lokale Windows-Ordner keinen Zugriff.
**Ohne diese Dateien kann ich die Rechtstexte nicht erstellen.**
Wie ihr sie mir gebt, steht in Abschnitt 6.

Damit ihr trotzdem sofort vergleichen könnt, habe ich den **aktuell auf der
Website sichtbaren Rechtstext** aus dem Code extrahiert:
→ `legal/_ist-zustand/*.txt` (11 Dateien, DE und EN)

---

## 2. Befund: der Ist-Zustand ist schlechter als er aussieht

Die Website benutzt für Rechtsseiten **drei verschiedene, sich
widersprechende Übersetzungsmechanismen** gleichzeitig.

### 2.1 Die entscheidende Fehlfunktion

`apps/web/src/components/Translate.jsx` ruft `translateText()` auf.
Diese Funktion steht in `apps/web/src/contexts/LanguageContext.jsx`
und lautet vollständig:

```js
const translateText = async (text) => text;
```

Sie gibt den Text unverändert zurück. **`<Translate>` übersetzt nichts.**
Auf AGB, Versandbedingungen, Widerrufsbelehrung und Barrierefreiheit sind
aber 148 Textblöcke in genau dieses `<Translate>` eingepackt. Die stehen
in jeder Sprache auf Deutsch.

### 2.2 Die 234 toten Wörterbucheinträge

In `apps/web/src/utils/translations/` liegen fertige Rechtstext-Keys:

| Präfix | Seite | DE | EN | FR |
|---|---|---|---|---|
| `priv_*` | Datenschutz | 68 | 0 | 68 |
| `imp_*` | Impressum | 33 | 0 | 33 |
| `agb_*` | AGB | 41 | 0 | 41 |
| `acc_*` | Barrierefreiheit | 26 | 0 | 26 |
| `rev_*` | Widerruf | 41 | 0 | 41 |
| `ship_*` | Versand | 25 | 0 | 25 |
| **Summe** | | **234** | **0** | **234** |

Es gibt also bereits 234 französische Rechtstext-Einträge im Code.
**Keine einzige Rechtsseite benutzt sie.** Ich habe alle sechs Seiten
geprüft: null `t('agb_…')`-Aufrufe, null `t('priv_…')`-Aufrufe, usw.
Diese 234 FR-Einträge sind toter Code und stammen aus einem früheren,
nie fertig verdrahteten Anlauf. **Nicht darauf verlassen** — sie sind
ungeprüft und nicht gegen den heutigen deutschen Stand abgeglichen.

### 2.3 Was der Nutzer heute tatsächlich sieht

| Seite | Deutsch | Englisch | Französisch |
|---|---|---|---|
| Impressum | ✅ `ImpressumPage.jsx` | ✅ `ImpressumPage_EN.jsx` | ❌ **deutsch** |
| AGB | ✅ `AGBPage.jsx` | ✅ `AGBPage_EN.jsx` | ❌ **deutsch** |
| Widerruf | ✅ `WiderrufsbelehrungPage.jsx` | ✅ `…Page_EN.jsx` | ❌ **deutsch** |
| Versand | ✅ `VersandbedingungPage.jsx` | ✅ `…Page_EN.jsx` | ❌ **deutsch** |
| Barrierefreiheit | ✅ `AccessibilityPage.jsx` | ✅ `…Page_EN.jsx` | ❌ **deutsch** |
| Datenschutz | ✅ `PrivacyPage.jsx` | ✅ gleiche Datei, `isEn`-Zweig | ❌ **deutsch** |

Die sechs französischen Routen `/fr/cgv`, `/fr/mentions-legales`,
`/fr/confidentialite`, `/fr/droit-de-retractation`, `/fr/livraison`,
`/fr/accessibilite` sind in `App.jsx` **auf die deutschen Komponenten
verdrahtet**. Sie sind erreichbar, verlinkt und im hreflang angemeldet —
und liefern deutschen Text aus.

Besonders kritisch: ein französischer Verbraucher bekommt heute die
Widerrufsbelehrung und das Muster-Widerrufsformular auf Deutsch.

Der Footer ist davon **nicht** betroffen — er verlinkt über
`pathFor(key, lang)` korrekt sprachabhängig. Kaputt sind nur die
Seiteninhalte.

---

## 3. Rechtlicher Hinweis, den ich euch schulde

Ihr habt geschrieben: „Die Übersetzung muss sehr gut sein, sonst bekommen
wir rechtliche Probleme." Deshalb sage ich das deutlich, bevor wir anfangen:

**Eine sprachlich perfekte Übersetzung reicht bei AGB, Widerruf und
Datenschutz nicht aus.**

1. **AGB / Widerruf.** Nach Art. 6 Rom-I-VO kann sich ein französischer
   Verbraucher auf die zwingenden Schutzvorschriften seines Heimatrechts
   berufen, auch wenn eure AGB deutsches Recht wählen. Der französische
   *Code de la consommation* stellt eigene Anforderungen an
   Widerrufsbelehrung und Muster-Formular. Ein 1:1 übersetzter deutscher
   Text kann formal korrekt übersetzt und trotzdem abmahnbar sein.
2. **Impressum.** Die Pflichtangaben nach § 5 DDG sind deutsches Recht.
   Die englische und französische Fassung ist eine Serviceübersetzung.
   Firmierung, Rechtsform, Registernummer, USt-IdNr. und die Anschrift
   **dürfen nicht übersetzt werden** — „Thitronik GmbH" bleibt
   „Thitronik GmbH", nicht „Thitronik Ltd.".
3. **Datenschutz.** Die Erklärung muss den *tatsächlich eingesetzten*
   Verarbeitungen entsprechen. Der Text im Repo nennt 14 Abschnitte;
   ob die zu eurer produktiv laufenden Infrastruktur (PocketBase,
   Analytics, Cookie-Consent) passen, ist eine Sachfrage, keine
   Übersetzungsfrage.

**Meine Empfehlung:** Ich liefere euch die Übersetzung in
Anwaltsqualität — terminologisch konsistent, mit dem Fachvokabular des
jeweiligen Rechtskreises, ohne Bedeutungsdrift. Bevor die FR-Fassung
live geht, lasst sie einmal von eurem Anwalt bzw. eurem
Rechtstext-Dienstleister gegenzeichnen. Das ist ein Prüfvorgang von
wenigen Stunden, kein neues Projekt — und es ist der Unterschied
zwischen „übersetzt" und „rechtssicher".

Ich markiere in jedem gelieferten Text die Stellen, die diese Prüfung
zwingend brauchen.

---

## 4. Architekturentscheidung: wie wir es einbauen

Es gibt zwei Wege. Ich empfehle klar Weg A.

### Weg A — eine Datei pro Sprache (EMPFOHLEN)

Genau das Muster, das für Englisch **bereits existiert und funktioniert**:
`AGBPage.jsx` (DE) und `AGBPage_EN.jsx` (EN) sind zwei getrennte,
in sich abgeschlossene Dateien. Wir ergänzen `AGBPage_FR.jsx` usw.

Vorteile — und die zählen bei einem unzuverlässigen Chatbot:
- **Eine Datei = ein Austausch.** Ihr ersetzt den kompletten Dateiinhalt.
  Kein Suchen von Textstellen, kein Teil-Merge, keine halb übernommenen
  Änderungen.
- **Kein Kollateralschaden.** Wenn der Chatbot eine Datei verhunzt, ist
  genau eine Sprache einer Seite betroffen. Der Rest der Website bleibt heil.
- **Sofort sichtbar prüfbar.** Route aufrufen, Text lesen, fertig.
- Kein Anfassen der 65.000-Zeichen-Wörterbuchdateien.

### Weg B — alles über die Wörterbücher (NICHT JETZT)

Alle Seiten auf `t('agb_…')` umbauen und die Texte in
`translation_DE.js` / `_EN.js` / `_FR.js` pflegen. Technisch die
sauberere Architektur, und für die spätere Erweiterung auf DA/ES/NL/NB/SV
das Ziel. Aber: es erfordert Eingriffe in drei sehr große Dateien plus
sechs Seitenkomponenten gleichzeitig. Genau die Art Änderung, an der der
Horizons-Chatbot scheitert — und bei Rechtstexten ist ein stiller
Teilfehler teuer.

**Entscheidung: Weg A für DE/EN/FR jetzt.** Weg B bewerten wir neu, wenn
die fünf Nordic-/ES-/NL-Sprachen anstehen — dann liegt eine
funktionierende, geprüfte Referenz vor.

### Was Weg A konkret bedeutet

| Was | Anzahl | Aktion |
|---|---|---|
| DE-Rechtsseiten | 5 | Inhalt ersetzen, **falls** eure Dokumente vom Ist-Zustand abweichen |
| EN-Rechtsseiten | 5 | Inhalt ersetzen (4 `_EN.jsx` + `isEn`-Zweig in `PrivacyPage.jsx`) |
| FR-Rechtsseiten | 6 | **neu anlegen** als `*_FR.jsx` |
| `App.jsx` | 1 | 6 Routen-Zeilen umhängen + 6 Import-Zeilen ergänzen |

---

## 5. Reihenfolge

Wir arbeiten strikt in dieser Reihenfolge. Jede Stufe wird abgenommen,
bevor die nächste beginnt.

| Stufe | Inhalt | Ergebnis |
|---|---|---|
| **0** | Ihr liefert mir die Dokumente aus `Rechtliches` | Quellenlage geklärt |
| **1** | Abgleich Dokumente ⇄ Ist-Zustand, DE festziehen | **DE ist Master** |
| **2** | EN gegen den festgezogenen DE-Master | EN live |
| **3** | FR — 6 neue Dateien + `App.jsx` | FR live, Defekt behoben |
| **4** | erst danach: DA / ES / NL / NB / SV | separates Paket |

**Warum DE zuerst:** Solange der deutsche Text nicht final ist,
übersetzen wir gegen ein bewegliches Ziel. Jede spätere DE-Änderung
zieht dann Nacharbeit in 7 Sprachen nach sich.

---

## 6. Was ich von euch brauche (Stufe 0)

Die Dateien aus `C:\Users\max.behrens\Desktop\Smartdock Übersetzung\Rechtliches`.

**Am einfachsten:** Ordner in dieses Repository legen und pushen.
In der Windows-Eingabeaufforderung, im geklonten Repo-Ordner:

```bat
git checkout claude/hostinger-horizons-translations-kttjk6
mkdir legal\quellen
xcopy "C:\Users\max.behrens\Desktop\Smartdock Übersetzung\Rechtliches" legal\quellen /E /I
git add legal/quellen
git commit -m "Rechtliche Quelldokumente hinzugefuegt"
git push -u origin claude/hostinger-horizons-translations-kttjk6
```

Dann sagt mir kurz Bescheid — ich lese sie und melde mich mit dem Abgleich.

**Alternativ:** Direkt in den Chat hochladen oder den Text hineinkopieren.
Bei PDF/DOCX gerne die Originaldatei, ich lese beide Formate.

**Bitte sagt mir außerdem:**

1. **Welche Fassung gilt?** Sind die Dokumente in `Rechtliches` der neue
   verbindliche Stand, der den heutigen Website-Text ersetzt — oder ist
   der Website-Text aktueller und die Dokumente sind das Archiv?
2. **Sind sie anwaltlich freigegeben?** Wenn ja, ändere ich am deutschen
   Wortlaut **nichts** und übersetze nur. Wenn nein, melde ich euch
   Auffälligkeiten, bevor wir übersetzen.
3. **Wo werden die Rechtstexte gepflegt?** Nur in Horizons — oder gibt es
   parallel PocketBase-Einträge, die den Code überschreiben? Das
   Lokalisierungspaket erwähnt aktive Datenbank-Overrides; für
   Rechtstexte muss eindeutig sein, wer gewinnt.
4. **Ansprache:** Der DE-Master siezt auf den Rechtsseiten („Sie haben das
   Recht…"), während die Website sonst duzt. Für Rechtstexte ist „Sie"
   richtig — ich behalte es bei, außer ihr sagt etwas anderes.

---

## 7. So läuft der Austausch in Hostinger Horizons

Sobald ich einen Text geliefert habe, ist der Ablauf **immer identisch**.
Ihr müsst nie eine Textstelle suchen und nie mit dem Chatbot diskutieren.

### 7.1 Bestehende Datei ersetzen (DE und EN)

1. In Horizons das Projekt öffnen → **Code-Ansicht / Dateibrowser**.
2. Zur Datei navigieren, exakter Pfad z. B.:
   `apps/web/src/pages/AGBPage_EN.jsx`
3. Datei öffnen, **kompletten Inhalt markieren** (`Strg`+`A`) und löschen.
4. Meinen gelieferten Dateiinhalt einfügen (`Strg`+`V`).
5. Speichern.
6. Vorschau öffnen, die zugehörige Route aufrufen (z. B. `/en/terms`)
   und den Text lesen.

> **Nicht** den Chatbot bitten, „die AGB zu übersetzen" oder „den Absatz
> zu ändern". Er formuliert Rechtstexte um. Immer die ganze Datei ersetzen.

### 7.2 Neue Datei anlegen (FR)

1. Im Dateibrowser den Ordner `apps/web/src/pages/` öffnen.
2. **Neue Datei** anlegen, Name exakt: `AGBPage_FR.jsx`
   (Groß-/Kleinschreibung zählt — `agbpage_fr.jsx` funktioniert nicht.)
3. Meinen Dateiinhalt einfügen, speichern.
4. Für alle sechs FR-Seiten wiederholen.

### 7.3 Die Routen umhängen — der einzige Eingriff in `App.jsx`

Datei: `apps/web/src/App.jsx`

**Schritt 1 — Importe ergänzen.** Sucht diesen bereits vorhandenen Block
(ca. Zeile 19–29) und fügt die sechs `_FR`-Zeilen hinzu:

```jsx
import VersandbedingungPage_EN from '@/pages/VersandbedingungPage_EN.jsx';
// ↓ diese sechs Zeilen NEU einfügen:
import PrivacyPage_FR from '@/pages/PrivacyPage_FR.jsx';
import ImpressumPage_FR from '@/pages/ImpressumPage_FR.jsx';
import AGBPage_FR from '@/pages/AGBPage_FR.jsx';
import AccessibilityPage_FR from '@/pages/AccessibilityPage_FR.jsx';
import WiderrufsbelehrungPage_FR from '@/pages/WiderrufsbelehrungPage_FR.jsx';
import VersandbedingungPage_FR from '@/pages/VersandbedingungPage_FR.jsx';
```

**Schritt 2 — sechs Routen austauschen.** Im Block
`{/* ---------- French routes (/fr prefix, canonical) ---------- */}`
stehen heute diese sechs Zeilen:

```jsx
<Route path="/fr/confidentialite" element={<PrivacyPage />} />
<Route path="/fr/mentions-legales" element={<ImpressumPage />} />
<Route path="/fr/cgv" element={<AGBPage />} />
<Route path="/fr/accessibilite" element={<AccessibilityPage />} />
<Route path="/fr/droit-de-retractation" element={<WiderrufsbelehrungPage />} />
<Route path="/fr/livraison" element={<VersandbedingungPage />} />
```

Ersetzt **genau diese sechs Zeilen** durch:

```jsx
<Route path="/fr/confidentialite" element={<PrivacyPage_FR />} />
<Route path="/fr/mentions-legales" element={<ImpressumPage_FR />} />
<Route path="/fr/cgv" element={<AGBPage_FR />} />
<Route path="/fr/accessibilite" element={<AccessibilityPage_FR />} />
<Route path="/fr/droit-de-retractation" element={<WiderrufsbelehrungPage_FR />} />
<Route path="/fr/livraison" element={<VersandbedingungPage_FR />} />
```

Geändert wird nur das, was zwischen `<` und `/>` steht — die Pfade
bleiben unverändert. **Die `/ch/…`-Routen weiter unten sehen ähnlich aus
und bleiben unangetastet** (Schweiz nutzt bewusst die deutschen Seiten).

### 7.4 Abnahme

Nach jedem Block diese Routen aufrufen und den Text lesen:

| | DE | EN | FR |
|---|---|---|---|
| AGB | `/agb` | `/en/terms` | `/fr/cgv` |
| Impressum | `/impressum` | `/en/imprint` | `/fr/mentions-legales` |
| Datenschutz | `/datenschutz` | `/en/privacy` | `/fr/confidentialite` |
| Widerruf | `/widerrufsbelehrung` | `/en/right-of-withdrawal` | `/fr/droit-de-retractation` |
| Versand | `/versandbedingungen` | `/en/shipping` | `/fr/livraison` |
| Barrierefreiheit | `/barrierefreiheit` | `/en/accessibility` | `/fr/accessibilite` |

Zusätzlich prüfen:
- Auf jeder FR-Seite **einmal die Sprachumschaltung** DE → EN → FR
  durchklicken. Ihr müsst auf der jeweils gleichen Seite landen, nicht
  auf der Startseite.
- Die Footer-Links unten auf einer `/fr/…`-Seite müssen auf `/fr/…`
  zeigen, nicht auf die deutschen Pfade.
- Die alten Adressen `/fr-fr/cgv`, `/agb-en` usw. müssen weiter
  funktionieren (Weiterleitung). Die sind indexiert.

---

## 8. Sofort nutzbar: der extrahierte Ist-Zustand

In `legal/_ist-zustand/` liegen elf Textdateien mit dem, was heute
tatsächlich auf der Website steht:

```
AGB_DE_ist.txt                  AGB_EN_ist.txt
Impressum_DE_ist.txt            Impressum_EN_ist.txt
Widerruf_DE_ist.txt             Widerruf_EN_ist.txt
Versand_DE_ist.txt              Versand_EN_ist.txt
Barrierefreiheit_DE_ist.txt     Barrierefreiheit_EN_ist.txt
Datenschutz_DE-und-EN_ist.txt   (DE und EN in einer Datei, s. 2.3)
```

Das sind maschinell aus dem JSX extrahierte Lesefassungen zum Abgleich —
**keine Rechtstext-Originale**. Für die Gegenprüfung mit euren Dokumenten
reichen sie; als Vertragsgrundlage nicht.

Damit könnt ihr schon jetzt, ohne mich, Punkt 1 aus Abschnitt 6 klären:
weicht der Website-Text von euren `Rechtliches`-Dokumenten ab?

---

## 9. Offene Punkte, die ich beim Lesen notiert habe

Keine Übersetzungsfragen — inhaltliche Fragen, die vor der Übersetzung
entschieden sein müssen, weil sie sonst in sieben Sprachen falsch werden.

1. **Widerruf/Versand ohne Online-Kauf.** Die AGB (§ 2) sagen, über die
   Website kommt **kein** Vertrag zustande — es gibt nur unverbindliche
   Anfragen; der Vertrag entsteht erst durch Annahme eines separaten
   verbindlichen Angebots. Trotzdem stehen ausführliche
   Versandbedingungen und eine Widerrufsbelehrung mit Muster-Formular
   online. Das ist nicht zwingend falsch, sollte aber bewusst so gewollt
   sein. Bitte mit dem Anwalt klären.
2. **Selbstinstallation.** AGB § 5 (3) schließt Haftung bei
   Selbstinstallation aus und § 4 (2) nennt die Fachinstallation
   „zwingend vorgeschrieben". Das Lokalisierungspaket vermerkt an anderer
   Stelle widersprüchliche Aussagen zur Selbstinstallation. Vor der
   Übersetzung eine verbindliche Linie festlegen.
3. **Preisangaben.** § 4 (1) nennt Preise in Euro inkl. deutscher
   Mehrwertsteuer. Für FR ist das inhaltlich haltbar, für die spätere
   Norwegen-Fassung nicht. Für dieses Paket nur zur Kenntnis.
4. **Gerichtsstand Eckernförde** gilt laut § 6 (2) ausdrücklich nicht für
   Verbraucher. Das muss in der FR-Fassung sauber erhalten bleiben — eine
   verkürzte Übersetzung dieser Klausel wäre in Frankreich eine
   unwirksame Klausel („clause abusive").
5. **Datenschutz ⇄ Infrastruktur.** Die 14 Abschnitte müssen gegen den
   tatsächlichen Einsatz von PocketBase, Analytics und Cookie-Consent
   geprüft werden. Das ist keine Übersetzungsarbeit — bitte separat
   verantworten.

---

## 10. Nächster Schritt

**Ihr:** Dokumente aus `Rechtliches` liefern (Abschnitt 6) und die vier
Fragen dort beantworten.

**Ich danach:** Abgleich Dokumente ⇄ Ist-Zustand als Differenzliste,
dann Stufe 1 (DE) — fertige Dateien zum Einfügen, eine pro Seite,
mit exakter Angabe welcher Pfad in Horizons.
