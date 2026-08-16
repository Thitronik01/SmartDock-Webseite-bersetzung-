# Änderungen in den Rechtsseiten (JSX)

Diese acht Änderungen liegen **nicht** in den Wörterbüchern, sondern als fest verdrahteter Text in React-Komponenten. Beim Abgleich mit dem Arbeitsrechner-Abzug sind sie separat zu prüfen — ein Wörterbuch-Abgleich findet sie nicht.

Alle Angaben zwischen `bd78686` und `92acd2f`. Zeilennummern beziehen sich auf den Stand `bd78686` und können im Abzug abweichen; maßgeblich ist der Suchtext.

## apps/web/src/pages/WiderrufsbelehrungPage.jsx — 2 Stellen · Blocker B4

Zeilen 148 und 284

```diff
-<p>Finkenweg 11–15</p>
+<p>Finkenweg 9-15</p>
```

Rechtlich der wichtigste Fix des ganzen Branches: eine falsche Anschrift kann die Widerrufsbelehrung unwirksam machen. Zu beachten ist nicht nur die Hausnummer, sondern auch der Strich — alt stand dort ein Halbgeviertstrich (–), neu ein einfacher Bindestrich (-), passend zu allen anderen Seiten.

## apps/web/src/pages/WiderrufsbelehrungPage_EN.jsx — 2 Stellen · Blocker B4

Zeilen 144 und 280, identische Änderung wie oben.

## apps/web/src/pages/ImpressumPage_EN.jsx — 1 Stelle · Blocker B7

Zeile 229

```diff
-<p>Professional liability insurance is valid worldwide.</p>
+<p>Professional liability insurance is valid worldwide, with the exception of the USA, Canada and their territories.</p>
```

Materielle Falschangabe zur Versicherungsdeckung; die Ausnahme steht in der deutschen und französischen Fassung.

## apps/web/src/pages/AGBPage.jsx — 1 Stelle · Grammatik

Zeile 123, § zur Lieferung und Installation

```diff
-… in sicherheitsrelevanten maritime Umgebungen zu gewährleisten.
+… in sicherheitsrelevanten maritimen Umgebungen zu gewährleisten.
```

Fehlende Adjektivflexion.

## apps/web/src/pages/PrivacyPage.jsx — 1 Stelle · Tippfehler

Zeile 311, deutscher Zweig zu Art. 20 DSGVO

```diff
-… in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten.
+… in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
```

## Prüfhinweis für den Abgleich

Die Anschrift ist der einzige Wert, der auf mehreren Seiten und zusätzlich in beiden Textkatalogen vorkommt. Im Abzug auf dem Arbeitsrechner sollte nach **beiden** Schreibweisen gesucht werden:

```
Finkenweg 11–15     (Halbgeviertstrich, veraltet)
Finkenweg 11-15     (Bindestrich, veraltet)
Finkenweg 9-15      (Sollwert)
```

Der Prüfbericht empfiehlt ausdrücklich, alle Adressvorkommen aller Sprachen gegeneinander zu prüfen — die Blocker-Korrektur deckt die bekannten Stellen ab, garantiert aber keine Vollständigkeit über einen fremden Abzug.
