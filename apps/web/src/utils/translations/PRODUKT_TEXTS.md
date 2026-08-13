
# Strukturierte Text-Extraktion: ProduktPage.jsx & Produkt.jsx

*Hinweis: Die Komponente `Produkt.jsx` ist leer (`const Produkt = () => null;`) und enthält keine Texte. Die folgenden Texte stammen aus `ProduktPage.jsx`. Die meisten Texte verwenden bereits Translation-Keys (`prod_*`), jedoch sind einige `alt`-Attribute noch hardcoded.*

## 1) Überschriften (h1, h2, h3)

| Exakter Text (DE) | Komponente & Sektion | Aktueller / Vorgeschlagener Key |
| :--- | :--- | :--- |
| SMARTDOCK | ProduktPage > Hero | `prod_hero_title` |
| Deine Crew bist du | ProduktPage > Zig-Zag Row 1 | `prod_crew_title` |
| Das float Magazin hat getestet | ProduktPage > Zig-Zag Row 2 | `prod_float_title` |
| Plug & Play | ProduktPage > Zig-Zag Row 3 | `prod_plug_title` |
| SMARTDOCK-ECU | ProduktPage > Zig-Zag Row 4 | `prod_ecu_title` |
| SMARTDOCK-TCU | ProduktPage > Zig-Zag Row 5 | `prod_tcu_title` |
| Kompatibilität | ProduktPage > Kompatibilität | `prod_compat_title` |
| Dein Antrieb ist nicht dabei? Kein Problem - nimm Kontakt mit uns auf! | ProduktPage > Kompatibilität | `prod_compat_contact_title` |
| Bereit für die nächste Ausfahrt? | ProduktPage > CTA Section | `prod_cta_title` |

## 2) Beschreibungen und Body-Text

| Exakter Text (DE) | Komponente & Sektion | Aktueller / Vorgeschlagener Key |
| :--- | :--- | :--- |
| Dein Plug & Play-Upgrade für maximale Kontrolle an Bord. | ProduktPage > Hero | `prod_hero_desc` |
| Du kennst dein Boot, jede Reaktion, jedes Manöver. Jetzt hast du ein System an deiner Seite, das dir genau diese Kontrolle noch einfacher macht – ganz ohne fremde Hilfe. | ProduktPage > Zig-Zag Row 1 | `prod_crew_p1` |
| Mit SMARTDOCK steuerst du dein Boot direkt über dein Smartphone – egal ob du am Bug bist, am Heck oder mittschiffs. | ProduktPage > Zig-Zag Row 1 | `prod_crew_p2` |
| Anlegen wird zur souveränen Ein-Mann-Show. Kein Stress, kein Gerufe, keine Kompromisse – nur du und dein Boot im perfekten Zusammenspiel. | ProduktPage > Zig-Zag Row 1 | `prod_crew_p3` |
| SMARTDOCK wurde mit dem Anspruch entwickelt, erfahrenen Skippern eine völlig neue Freiheit zu bieten. Ein System, das sich in bestehende Setups integrieren lässt und dir volle Kontrolle in jeder Situation gibt. | ProduktPage > Zig-Zag Row 1 | `prod_crew_p4` |
| Erster Eindruck: Die Benutzung ist verblüffend simpel – und macht Riesenspaß. | ProduktPage > Zig-Zag Row 2 | `prod_float_desc` |
| SMARTDOCK ist nach dem Plug & Play-Prinzip konzipiert – einmal eingebaut, steuerst du alles bequem über die App. Die Installation an Bord ist schnell erledigt und erfordert weder komplexe Umbauten noch spezielles technisches Know-how. | ProduktPage > Zig-Zag Row 3 | `prod_plug_p1` |
| Nach dem Einbau übernimmt die App: Einrichtung, Steuerung, Kontrolle – alles läuft intuitiv und zentral über dein Smartphone. Du brauchst kein separates Bedienpanel, keine zusätzliche Hardware. | ProduktPage > Zig-Zag Row 3 | `prod_plug_p2` |
| Einfach verbinden, starten und volle Kontrolle genießen – so sieht moderne Bootssteuerung aus. | ProduktPage > Zig-Zag Row 3 | `prod_plug_p3` |
| ECU steht für Engine Control Unit. Es handelt sich dabei um eine Steuereinheit, die es dir ermöglicht, deinen Bootsmotor mithilfe der SMARTDOCK App zu steuern. Dazu nutzt SMARTDOCK-ECU die digitalen Steuersysteme deines Bootes. | ProduktPage > Zig-Zag Row 4 | `prod_ecu_p1` |
| Die Steuerinformationen werden vom Smartphone an die ECU gesendet und dort in Informationen umgewandelt, die von der Bootssteuerung korrekt interpretiert und ausgeführt werden. Dabei wird immer auch der Steuerstand des Bootes überwacht, sodass eine Übernahme der Kontrolle durch diesen jederzeit möglich ist. | ProduktPage > Zig-Zag Row 4 | `prod_ecu_p2` |
| TCU steht für Thruster Control Unit. Es handelt sich dabei um eine Steuereinheit, mit der du die Bug- und Heckstrahlruder per SMARTDOCK App ansteuern kannst. | ProduktPage > Zig-Zag Row 5 | `prod_tcu_p1` |
| Die Steuerinformationen aus der App werden in Signale für die Strahlruder umgewandelt, so dass eine gezielte Bedienung in die gewünschte Richtung möglich ist. | ProduktPage > Zig-Zag Row 5 | `prod_tcu_p2` |
| SMARTDOCK lässt sich nahtlos in bestehende Technik integrieren. Das System ist kompatibel mit Volvo Penta-Antrieben ab Baujahr 2010, MerCruiser/Mercury-Systemen ab 2016 sowie Yamaha ab Bj. 2021 (Helm Master EX-System). Damit unterstützt SMARTDOCK eine Vielzahl gängiger Motoren und Bootstypen – für einen einfachen Einstieg in die smarte Bootssteuerung. | ProduktPage > Kompatibilität | `prod_compat_desc` |

## 3) Button-Labels und CTAs

| Exakter Text (DE) | Komponente & Sektion | Aktueller / Vorgeschlagener Key |
| :--- | :--- | :--- |
| Zum Testbericht | ProduktPage > Zig-Zag Row 2 | `prod_float_link` |
| Kontakt aufnehmen | ProduktPage > Kompatibilität | `prod_compat_contact_btn` |
| Jetzt Konfigurieren | ProduktPage > CTA Section | `prod_cta_config_btn` |
| Händler finden | ProduktPage > CTA Section | `prod_cta_dealer_btn` |

## 4) Labels und Formular-Texte

*(Keine Formulare in dieser Komponente vorhanden)*

## 5) Fehlermeldungen und Validierungstexte

*(Keine Fehlermeldungen in dieser Komponente vorhanden)*

## 6) Sonstige UI-Texte (Tabs, Badges, Alt-Texte, Meta)

| Exakter Text (DE) | Komponente & Sektion | Aktueller / Vorgeschlagener Key |
| :--- | :--- | :--- |
| SMARTDOCK \| Intelligente Hafenmanöver | ProduktPage > Helmet (Meta) | `prod_meta_title` |
| Dein Plug & Play-Upgrade für maximale Kontrolle an Bord. | ProduktPage > Helmet (Meta) | `prod_meta_desc` |
| Startseite | ProduktPage > Breadcrumb | `prod_nav_home` |
| Produkt | ProduktPage > Breadcrumb | `prod_nav_product` |
| PRODUKT | ProduktPage > Hero Kicker | `prod_hero_kicker` |
| Einbauen. Einschalten. Alles in der App | ProduktPage > Zig-Zag Row 3 Kicker | `prod_plug_kicker` |
| ENGINE CONTROL UNIT | ProduktPage > Zig-Zag Row 4 Kicker | `prod_ecu_kicker` |
| THRUSTER CONTROL UNIT | ProduktPage > Zig-Zag Row 5 Kicker | `prod_tcu_kicker` |
| Professioneller Skipper steuert Boot mit Smartphone | ProduktPage > Image Alt Text (Hardcoded) | `prod_alt_crew` |
| Float Magazin Artikel: Praxistest Mit dem Handy in den Hafen steuern | ProduktPage > Image Alt Text (Hardcoded) | `prod_alt_float` |
| Darstellung der Systemfunktionen | ProduktPage > Image Alt Text (Hardcoded) | `prod_alt_plug` |
| SMARTDOCK-ECU | ProduktPage > Image Alt Text (Hardcoded) | `prod_alt_ecu` |
| SMARTDOCK-TCU Thruster Control Unit | ProduktPage > Image Alt Text (Hardcoded) | `prod_alt_tcu` |

---

### JSON-Format für Translation-Dateien (Ergänzung für Alt-Texte)

