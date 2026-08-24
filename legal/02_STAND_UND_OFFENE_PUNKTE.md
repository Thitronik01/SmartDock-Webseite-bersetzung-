# Stand der Rechtstexte und offene Punkte

Stand: 2026-08-24 · Branch `claude/hostinger-horizons-translations-kttjk6`

---

## 1. Was geliefert ist

18 Dateien, alle syntaktisch geprüft (esbuild) und gegen die freigegebenen
Quelldokumente satz- bzw. bausteinweise verifiziert.

| Seite | Deutsch | Englisch | Französisch |
|---|---|---|---|
| Impressum | `legal/code/DE/01_…` | `EN/01_…` | `FR/03_…` |
| Versand | `DE/02_…` | `EN/05_…` | `FR/04_…` |
| Widerruf | `DE/03_…` | `EN/06_…` | `FR/05_…` |
| AGB | `DE/04_…` | `EN/02_…` | `FR/01_…` |
| Datenschutz | `DE/05_…` | `EN/03_…` | `FR/02_…` |
| Barrierefreiheit | unverändert | unverändert | `FR/06_…` ⚠️ |
| Routing | — | `EN/04_App.jsx.txt` | `FR/07_App.jsx.txt` |

`FR/07_App.jsx.txt` ersetzt `EN/04_App.jsx.txt` und enthält alle
Routenänderungen für Englisch **und** Französisch.

## 2. Einbaureihenfolge für den letzten Schritt

1. Alle sechs `*_FR.jsx` in `apps/web/src/pages/` anlegen
2. **Danach** `apps/web/src/App.jsx` durch `FR/07_App.jsx.txt` ersetzen

Nie umgekehrt — sonst importiert die App Dateien, die es noch nicht gibt.

## 3. Verifizierte Eigenschaften aller Seiten

- Komponentenname = Dateiname = Exportname
- `<html lang>` passt zur Sprache
- Brotkrümel-Pfade zeigen in die eigene Sprache
- interne Links (Impressum-Verweis) zeigen in die eigene Sprache
- kein `<Translate>`-Wrapper mehr enthalten

## 4. Offene Punkte — nach Dringlichkeit

### 4.1 Anschrift: 9-15 oder 11-15?

Ungeklärt, betrifft **acht** Stellen:

| Dokument | Hausnummer |
|---|---|
| Impressum DE / EN / FR | 11-15 |
| Widerruf DE / EN / FR — Rücksendeadresse | **9-15** |
| Datenschutz DE / EN / FR — Verantwortlicher | **9-15** |
| Barrierefreiheit DE / FR — Kontakt | **9-15** |
| AGB DE / EN / FR — Identität des Verkäufers | 11-15 |
| Widerruf — Musterformular | 11-15 |

Sobald entschieden: eine Ansage genügt, dann werden alle Stellen nachgezogen.

### 4.2 Fehler in den freigegebenen Dokumenten

Alle unverändert übernommen, alle beim Händlerbund zu melden:

| Dokument | Fund |
|---|---|
| CGV FR § 6.2 | Verneinung verloren: „une entreprise de transport **que nous avons nommée**" statt „que nous n'avons **pas** désignée" — kehrt den Gefahrübergang um |
| Widerruf FR | doppelte Verneinung: „en aucun cas, nous **ne** facturerons **pas** de suppléments" |
| Widerruf FR | Musterformular enthielt **italienisch** „Indirizzo e-mail" (korrigiert) |
| AGB EN § 4 (2) | „in writing" nur in der englischen Fassung — zusätzliche Schriftform |
| AGB EN 5.3 | „we may incur **unreasonable** additional costs … which you must bear" — widersprüchlich |
| Datenschutz EN | Widerspruchsrecht zitiert „art. 6 (1) GDPR" ohne „f" |
| Datenschutz FR | Absatz zum Advanced Consent Mode fehlt ganz (in DE und EN vorhanden) |
| Datenschutz FR | Cloudfront als „réseau **national**" beschrieben |
| Impressum FR | „Champ d'application **national**" bei weltweiter Geltung (korrigiert) |
| Impressum EN | Geltungsbereich der Haftpflicht steht auf **Deutsch** |
| Versand EN / FR | Länderliste stand auf Deutsch (auf Wunsch korrigiert) |
| Vertragssprache | drei Seiten nennen drei verschiedene: deutsch / English / français |

### 4.3 Datenschutzerklärung stimmt nicht mit der Technik überein

Im Code nachgewiesen:

| Dienst | Dokument | Realität |
|---|---|---|
| Google Analytics 4 | erklärt | ✅ läuft (`G-5DDPJH2NRW`) |
| Cookiebot | erklärt | ❌ läuft nicht — Eigenbau-Banner |
| Google Tag Manager | erklärt | ❌ läuft nicht |
| Cloudfront | erklärt | ❓ Hosting-Frage, bei Hostinger klären |
| PocketBase | **nicht erwähnt** | ✅ läuft (`/hcgi/platform`) |
| Consent-Modus | „Advanced" | ❌ Code fährt strikt „Basic" |

Konfigurator-Daten (Name, E-Mail, Bootsdaten) gehen an PocketBase und an
Händler — beides steht in keiner Fassung.

### 4.4 Grundsatzfrage: Online-Shop

Die AGB beschreiben Warenkorb, Kasse und Bestellbutton. Die Website hat
keinen Shop, sondern einen Konfigurator mit unverbindlicher Anfrage.
Der Händlerbund schreibt in den Einstellhinweisen ausdrücklich:
„Die Rechtstexte können ausschließlich für den Verkauf über einen
Online-Shop verwendet werden."

### 4.5 Weitere Punkte

- **AGB-Klausel zur Barrierefreiheit** fehlt. Die Einstellhinweise
  verweisen auf „§ 2 der AGB" — dort steht aber „Zustandekommen des
  Vertrages". Entweder Kleinstunternehmen oder falsche AGB-Variante.
- **Batteriehinweis** und **Verpackungshinweis** sind Teil des
  Händlerbund-Pakets, stehen aber nirgends auf der Website.
- **Barrierefreiheitserklärung FR** ist von Claude übersetzt, nicht
  anwaltlich freigegeben. Verweist auf BFSG und Bundesnetzagentur.
- **WEEE-Nummer** `DE33826840` ist beim Impressum-Austausch entfallen,
  weil sie im freigegebenen Dokument fehlt.

## 5. Danach

Nach dem Rollout DE/EN/FR steht die eigentliche Übersetzungsphase an:
Dänisch, Spanisch, Niederländisch, Norwegisch, Schwedisch.
Grundlage ist `SMARTDOCK_LOCALIZATION_PACKAGE.md`.

Vor dieser Phase sollte entschieden werden, ob die Rechtsseiten weiter
als eine Datei pro Sprache geführt werden (dann 6 × 8 = 48 Dateien) oder
auf das Wörterbuch umgestellt werden.
