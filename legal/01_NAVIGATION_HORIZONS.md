# Navigation: Welchen Code tauschen wir wo aus?

Für Max und Marlene. Praxisanleitung für Hostinger Horizons.
Stand: 2026-08-24

---

## 1. Wo ihr im Projekt seid

Öffnet in Horizons die **Code-Ansicht**. Ihr seht diesen Baum. Für die
Rechtstexte ist **nur der eingerahmte Bereich** relevant:

```
apps/
  web/
    src/
      App.jsx                  ← ★ die Weiche: welche Route zeigt welche Seite
      pages/                   ← ★ HIER liegen alle Rechtsseiten
        AGBPage.jsx
        AGBPage_EN.jsx
        ImpressumPage.jsx
        ImpressumPage_EN.jsx
        PrivacyPage.jsx
        WiderrufsbelehrungPage.jsx
        WiderrufsbelehrungPage_EN.jsx
        VersandbedingungPage.jsx
        VersandbedingungPage_EN.jsx
        AccessibilityPage.jsx
        AccessibilityPage_EN.jsx
        … (weitere Seiten, die uns nicht betreffen)
      components/              ← nicht anfassen
      contexts/                ← nicht anfassen
      config/routes.js         ← nicht anfassen (Pfade stimmen bereits)
      utils/translations/      ← ⛔ NICHT anfassen (s. Abschnitt 6)
```

**Merksatz:** Rechtstexte leben ausschließlich in `apps/web/src/pages/`.
Die einzige Ausnahme ist `App.jsx` — und die fassen wir genau **einmal**
an, in Stufe 3.

---

## 2. Die Landkarte: Route → Datei

Das ist die Tabelle, die ihr beim Arbeiten offen habt.

### Deutsch

| Seite | Route im Browser | Datei in Horizons |
|---|---|---|
| AGB | `/agb` | `apps/web/src/pages/AGBPage.jsx` |
| Impressum | `/impressum` | `apps/web/src/pages/ImpressumPage.jsx` |
| Datenschutz | `/datenschutz` | `apps/web/src/pages/PrivacyPage.jsx` |
| Widerruf | `/widerrufsbelehrung` | `apps/web/src/pages/WiderrufsbelehrungPage.jsx` |
| Versand | `/versandbedingungen` | `apps/web/src/pages/VersandbedingungPage.jsx` |
| Barrierefreiheit | `/barrierefreiheit` | `apps/web/src/pages/AccessibilityPage.jsx` |

### Englisch

| Seite | Route im Browser | Datei in Horizons |
|---|---|---|
| AGB | `/en/terms` | `apps/web/src/pages/AGBPage_EN.jsx` |
| Impressum | `/en/imprint` | `apps/web/src/pages/ImpressumPage_EN.jsx` |
| Datenschutz | `/en/privacy` | ⚠️ `apps/web/src/pages/PrivacyPage.jsx` — **dieselbe Datei wie Deutsch** |
| Widerruf | `/en/right-of-withdrawal` | `apps/web/src/pages/WiderrufsbelehrungPage_EN.jsx` |
| Versand | `/en/shipping` | `apps/web/src/pages/VersandbedingungPage_EN.jsx` |
| Barrierefreiheit | `/en/accessibility` | `apps/web/src/pages/AccessibilityPage_EN.jsx` |

### Französisch — existiert noch nicht

| Seite | Route im Browser | Zeigt **heute** | Datei, die wir **neu anlegen** |
|---|---|---|---|
| AGB | `/fr/cgv` | ❌ deutsche AGB | `AGBPage_FR.jsx` |
| Impressum | `/fr/mentions-legales` | ❌ deutsches Impressum | `ImpressumPage_FR.jsx` |
| Datenschutz | `/fr/confidentialite` | ❌ deutscher Datenschutz | `PrivacyPage_FR.jsx` |
| Widerruf | `/fr/droit-de-retractation` | ❌ deutscher Widerruf | `WiderrufsbelehrungPage_FR.jsx` |
| Versand | `/fr/livraison` | ❌ deutscher Versand | `VersandbedingungPage_FR.jsx` |
| Barrierefreiheit | `/fr/accessibilite` | ❌ deutsche Erklärung | `AccessibilityPage_FR.jsx` |

---

## 3. ⚠️ Rückwärts gelesen — das Wichtigste überhaupt

Eine Datei kann **mehrere Routen gleichzeitig** bedienen. Wenn ihr eine
deutsche Datei bearbeitet, ändert ihr damit **auch Französisch und die
Schweiz**. Das ist die häufigste Falle.

| Datei | bedient heute diese Routen |
|---|---|
| `AGBPage.jsx` | `/agb` **+** `/fr/cgv` **+** `/ch/agb` |
| `ImpressumPage.jsx` | `/impressum` **+** `/fr/mentions-legales` **+** `/ch/impressum` |
| `WiderrufsbelehrungPage.jsx` | `/widerrufsbelehrung` **+** `/fr/droit-de-retractation` **+** `/ch/widerrufsbelehrung` |
| `VersandbedingungPage.jsx` | `/versandbedingungen` **+** `/fr/livraison` **+** `/ch/versandbedingungen` |
| `AccessibilityPage.jsx` | `/barrierefreiheit` **+** `/fr/accessibilite` **+** `/ch/barrierefreiheit` |
| **`PrivacyPage.jsx`** | `/datenschutz` **+** `/en/privacy` **+** `/fr/confidentialite` **+** `/ch/datenschutz` — **vier Routen, DE und EN in einer Datei** |
| `AGBPage_EN.jsx` | `/en/terms` **+** `/agb-en` (alte Adresse) |
| `ImpressumPage_EN.jsx` | `/en/imprint` **+** `/impressum-en` |
| `AccessibilityPage_EN.jsx` | `/en/accessibility` **+** `/barrierefreiheit-en` |
| `WiderrufsbelehrungPage_EN.jsx` | `/en/right-of-withdrawal` **+** `/widerrufsbelehrung-en` |
| `VersandbedingungPage_EN.jsx` | `/en/shipping` **+** `/versandbedingungen-en` |

**Zwei Konsequenzen:**

1. **Die Schweiz nutzt bewusst die deutschen Dateien.** Wenn ihr die
   deutschen Rechtstexte austauscht, ändert sich `/ch/…` automatisch mit.
   Das ist so gewollt — nicht „reparieren".
2. **Französisch wird erst dann eigenständig,** wenn wir in Stufe 3 die
   sechs `_FR.jsx`-Dateien anlegen und in `App.jsx` umhängen. Bis dahin
   hängt FR an den deutschen Dateien. Deshalb: **Stufe 3 nicht vorziehen.**

`PrivacyPage.jsx` ist der Sonderfall: darin stehen Deutsch und Englisch
in **derselben** Datei nebeneinander, im Muster
`{isEn ? "englischer Text" : "deutscher Text"}`. Diese Datei ist die
einzige, bei der ihr beim Bearbeiten zwei Sprachen gleichzeitig im Blick
haben müsst.

---

## 4. Bin ich in der richtigen Datei?

Öffnet die Datei und schaut auf die ersten ~20 Zeilen. Dort steht immer
eine `<title>`-Zeile. Vergleicht sie mit dieser Liste:

| Datei | Erkennungszeile · Zeilen gesamt |
|---|---|
| `AGBPage.jsx` | `AGB & Kundeninformationen - SMARTDOCK` · 258 |
| `AGBPage_EN.jsx` | `Terms & Conditions - SMARTDOCK` · 256 |
| `ImpressumPage.jsx` | `Impressum - SMARTDOCK` · 293 |
| `ImpressumPage_EN.jsx` | `Legal Notice - SMARTDOCK` · 301 |
| `PrivacyPage.jsx` | `{isEn ? \`Privacy Policy…\` : \`Datenschutz…\`}` · 418 |
| `WiderrufsbelehrungPage.jsx` | `Widerrufsbelehrung - SMARTDOCK` · 361 |
| `WiderrufsbelehrungPage_EN.jsx` | `Right of Withdrawal Policy \| SMARTDOCK` · 360 |
| `VersandbedingungPage.jsx` | `Versand- und Zahlungsbedingungen - SMARTDOCK` · 279 |
| `VersandbedingungPage_EN.jsx` | `Shipping & Payment Terms - SMARTDOCK` · 278 |
| `AccessibilityPage.jsx` | `Barrierefreiheit - SMARTDOCK` · 243 |
| `AccessibilityPage_EN.jsx` | `Accessibility Statement \| Smartdock` · 242 |

Stimmt die Zeilenzahl grob und der Titel exakt → richtige Datei.

---

## 5. Anatomie einer Rechtsseite

Jede der elf Dateien ist gleich aufgebaut. Wenn ihr das einmal versteht,
könnt ihr jede Seite lesen.

```jsx
// ── ZONE 1 · Zeile 1–10 · Technik ────────────────────────────
import React from 'react';
import { Helmet } from 'react-helmet';
…                                    ⛔ NIE ändern

const AGBPage = () => {              ⛔ Name NIE ändern
  useLanguageRouting();
  useScrollRestoration();
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">

// ── ZONE 2 · SEO — was Google und der Browser-Tab sehen ──────
      <Helmet>
        <html lang="de-DE" />                    ✏️ Sprachkürzel
        <title>AGB & Kundeninformationen - SMARTDOCK</title>   ✏️
        <meta name="description" content="…" />                ✏️
      </Helmet>

// ── ZONE 3 · Breadcrumb — die Brotkrümel oben ────────────────
      <Breadcrumb items={[
        { label: 'Startseite', path: '/' },      ✏️ Text UND Pfad
        { label: 'AGB', path: '/agb' }           ✏️
      ]} />

// ── ZONE 4 · Hero — Überschrift und Einleitungssatz ──────────
      <h1 …>Allgemeine Geschäftsbedingungen</h1>        ✏️
      <p …>Rechtliche Rahmenbedingungen …</p>           ✏️

// ── ZONE 5 · Inhalt — der eigentliche Rechtstext ─────────────
      <h2>Teil I: Allgemeine Geschäftsbedingungen</h2>  ✏️
      <h3>§ 1 Grundlegende Bestimmungen</h3>            ✏️
      <p>(1) Die nachstehenden Geschäftsbedingungen …</p>  ✏️
      …

// ── ZONE 6 · Abschluss ───────────────────────────────────────
    </div>
  );
};
export default AGBPage;              ⛔ NIE ändern
```

- **✏️ = Text, den wir austauschen.**
- **⛔ = Technik. Wird nur berührt, wenn wir eine neue `_FR`-Datei anlegen
  (dann heißt die Komponente `AGBPage_FR` statt `AGBPage`).**

**Zwei Sonderfälle, die ihr kennen müsst:**

1. **`<Translate>…</Translate>`** taucht in `AGBPage.jsx`,
   `VersandbedingungPage.jsx`, `WiderrufsbelehrungPage.jsx` und
   `AccessibilityPage.jsx` auf — insgesamt 148-mal. **Diese Klammer tut
   nichts.** Sie gibt den Text unverändert zurück (nachgewiesen in
   `LanguageContext.jsx`). In den `_EN`-Dateien fehlt sie deshalb auch.
   Beim Austausch dürft ihr sie entfernen — ich liefere die Dateien
   ohne sie.

2. **`VersandbedingungPage.jsx` Zeile 26–32** enthält eine Länderliste
   direkt im Code:
   ```js
   const EU_COUNTRIES = ["Belgien", "Bulgarien", "Dänemark", …];
   ```
   Das ist **Inhalt, kein Layout** — 27 Ländernamen, die auf der Seite
   erscheinen. In der EN-Datei stehen sie auf Englisch, in der FR-Datei
   müssen sie auf Französisch stehen. Nicht übersehen.

---

## 6. ⛔ Was ihr auf keinen Fall anfasst

| Datei | Warum |
|---|---|
| `src/utils/translations/translation_DE.js` | 65.000 Zeichen. Enthält 234 Rechtstext-Einträge, die **keine Seite benutzt** — toter Code aus einem früheren Anlauf. Änderungen dort wirken sich nirgends aus und kosten nur Zeit. |
| `src/utils/translations/translation_EN.js` | dito |
| `src/utils/translations/translation_FR.js` | dito — enthält 234 ungeprüfte FR-Rechtstexte. **Nicht als Vorlage verwenden.** |
| `src/components/Translate.jsx` | Der wirkungslose Wrapper. Reparieren wäre ein eigenes Projekt. |
| `src/contexts/LanguageContext.jsx` | Steuert die Sprachumschaltung der ganzen Website. |
| `src/config/routes.js` | Alle FR-Pfade sind dort **bereits korrekt** hinterlegt. |
| `src/components/Footer.jsx` | Verlinkt schon sprachabhängig richtig. |
| alle `/ch/…`-Routen in `App.jsx` | Schweiz nutzt bewusst Deutsch. |

Wenn der Horizons-Chatbot vorschlägt, eine dieser Dateien zu ändern:
**ablehnen** und mir Bescheid geben.

---

## 7. Die drei Handgriffe

Mehr als diese drei Vorgänge gibt es im ganzen Projekt nicht.

### Handgriff A · Bestehende Datei ersetzen (Stufe 1 DE, Stufe 2 EN)

1. Code-Ansicht → `apps/web/src/pages/` → Datei anklicken
2. Erkennungszeile aus Abschnitt 4 prüfen
3. `Strg`+`A`, dann `Entf` — Datei ist leer
4. Meinen Inhalt einfügen (`Strg`+`V`)
5. Speichern
6. Vorschau → Route aus Abschnitt 2 aufrufen → Text lesen

### Handgriff B · Neue Datei anlegen (Stufe 3 FR)

1. Code-Ansicht → Ordner `apps/web/src/pages/` markieren
2. **Neue Datei** → Name exakt `AGBPage_FR.jsx`
   → Groß-/Kleinschreibung zählt. `agbpage_fr.jsx` funktioniert **nicht**.
3. Meinen Inhalt einfügen, speichern
4. Für alle sechs FR-Dateien wiederholen
5. **Danach erst** Handgriff C — vorher zeigt die Seite nichts an

### Handgriff C · Die Weiche umlegen (genau einmal, Stufe 3)

Datei: **`apps/web/src/App.jsx`**

**C1 — Importe.** Geht zu **Zeile 28**. Dort steht:
```jsx
import VersandbedingungPage_EN from '@/pages/VersandbedingungPage_EN.jsx';
```
Direkt **darunter** diese sechs Zeilen neu einfügen:
```jsx
import PrivacyPage_FR from '@/pages/PrivacyPage_FR.jsx';
import ImpressumPage_FR from '@/pages/ImpressumPage_FR.jsx';
import AGBPage_FR from '@/pages/AGBPage_FR.jsx';
import AccessibilityPage_FR from '@/pages/AccessibilityPage_FR.jsx';
import WiderrufsbelehrungPage_FR from '@/pages/WiderrufsbelehrungPage_FR.jsx';
import VersandbedingungPage_FR from '@/pages/VersandbedingungPage_FR.jsx';
```

**C2 — Routen.** Geht zu **Zeile 106 bis 111**. Dort steht heute genau das:
```jsx
<Route path="/fr/confidentialite" element={<PrivacyPage />} />
<Route path="/fr/mentions-legales" element={<ImpressumPage />} />
<Route path="/fr/cgv" element={<AGBPage />} />
<Route path="/fr/accessibilite" element={<AccessibilityPage />} />
<Route path="/fr/droit-de-retractation" element={<WiderrufsbelehrungPage />} />
<Route path="/fr/livraison" element={<VersandbedingungPage />} />
```

Ersetzt **diese sechs Zeilen** durch:
```jsx
<Route path="/fr/confidentialite" element={<PrivacyPage_FR />} />
<Route path="/fr/mentions-legales" element={<ImpressumPage_FR />} />
<Route path="/fr/cgv" element={<AGBPage_FR />} />
<Route path="/fr/accessibilite" element={<AccessibilityPage_FR />} />
<Route path="/fr/droit-de-retractation" element={<WiderrufsbelehrungPage_FR />} />
<Route path="/fr/livraison" element={<VersandbedingungPage_FR />} />
```

Ihr hängt nur `_FR` an sechs Namen an. Die Pfade in Anführungszeichen
bleiben **unverändert**.

> **Verwechslungsgefahr:** Bei **Zeile 146–151** stehen fast identisch
> aussehende Zeilen — das sind die Schweizer Routen (`/ch/…`).
> **Die bleiben, wie sie sind.** Achtet auf das `/fr/` bzw. `/ch/` im Pfad.

---

## 8. Regeln für den Horizons-Chatbot

Der Chatbot formuliert Rechtstexte um. Bei AGB und Widerruf ist das
gefährlich, weil eine kleine Umformulierung die Rechtslage ändert.

**Niemals sagen:**
- „Übersetze die AGB ins Französische"
- „Passe den Absatz zum Widerrufsrecht an"
- „Mach den Text schöner / kürzer / verständlicher"

**Wenn überhaupt, dann so:**
- „Ersetze den kompletten Inhalt von `apps/web/src/pages/AGBPage_FR.jsx`
  durch Folgendes: …" *(gesamter Dateiinhalt)*
- „Lege eine neue Datei `apps/web/src/pages/AGBPage_FR.jsx` an mit
  folgendem Inhalt: …"

**Besser noch:** Text direkt im Editor einfügen, ganz ohne Chatbot.

**Nach jedem Chatbot-Eingriff prüfen:** Hat er nur die genannte Datei
angefasst? Zeigt die Seite den Text, den ihr eingefügt habt — Wort für
Wort? Wenn er „zusätzlich noch verbessert" hat: rückgängig machen.

---

## 9. Abnahme nach jeder Stufe

Diese Routen aufrufen und den Text lesen:

| | Deutsch | Englisch | Französisch |
|---|---|---|---|
| AGB | `/agb` | `/en/terms` | `/fr/cgv` |
| Impressum | `/impressum` | `/en/imprint` | `/fr/mentions-legales` |
| Datenschutz | `/datenschutz` | `/en/privacy` | `/fr/confidentialite` |
| Widerruf | `/widerrufsbelehrung` | `/en/right-of-withdrawal` | `/fr/droit-de-retractation` |
| Versand | `/versandbedingungen` | `/en/shipping` | `/fr/livraison` |
| Barrierefreiheit | `/barrierefreiheit` | `/en/accessibility` | `/fr/accessibilite` |

Zusätzlich:

- [ ] Sprachumschalter auf jeder Rechtsseite DE → EN → FR durchklicken.
      Ihr müsst auf der **gleichen** Seite landen, nicht auf der Startseite.
- [ ] Footer-Links auf einer `/fr/…`-Seite zeigen auf `/fr/…`.
- [ ] Alte Adressen funktionieren weiter: `/agb-en`, `/impressum-en`,
      `/fr-fr/cgv`, `/fr-fr/mentions-legales`. Die sind bei Google indexiert.
- [ ] `/ch/agb` zeigt weiterhin den **deutschen** Text.
- [ ] Browser-Tab zeigt den richtigen Seitentitel in der richtigen Sprache.
- [ ] `/fr/livraison`: die 27 Ländernamen stehen auf Französisch.

---

## 10. Merkzettel — eine Seite

```
Rechtstexte liegen NUR in:   apps/web/src/pages/
Die Weiche ist:              apps/web/src/App.jsx  (Zeile 28, 106–111)
Niemals anfassen:            utils/translations/*  ·  Translate.jsx
                             LanguageContext.jsx   ·  routes.js
                             alle /ch/-Routen

Deutsche Datei ändern  →  ändert DE + FR + CH gleichzeitig
PrivacyPage.jsx ändern →  ändert DE + EN + FR + CH gleichzeitig
_EN-Datei ändern       →  ändert nur Englisch

Reihenfolge:  DE festziehen → EN → FR (Dateien + App.jsx) → Rest
Immer:        ganze Datei ersetzen, nie einzelne Absätze
Chatbot:      nur „ersetze Datei X komplett durch:" — sonst gar nicht
```
