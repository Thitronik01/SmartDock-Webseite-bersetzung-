# Sprachlicher Prüf- und Bewertungsbericht

> Konvertiert aus `SMARTDOCK_Lokalisierung_Pruefbericht.docx` (Revision 2, 15.08.2026). Inhaltlich unverändert, Tabellen als Markdown.

---


Sprachlicher Prüf- und Bewertungsbericht

Qualitätssicherung der Übersetzungen in acht Sprachen

Prüfgegenstand: SmartDock_Website_Texte_Alle_Sprachen_REVIEWED_FINAL_QA.md (Stand 14. August 2026)

Referenz: Repository Thitronik01/SmartDock-Webseite-bersetzung-, Branch agent/localization-qa-corrections

Sprachen: Deutsch (Master) · Englisch · Französisch · Dänisch · Spanisch · Niederländisch · Norwegisch (Bokmål) · Schwedisch

Berichtsdatum: 15. August 2026 · Revision 2

# Inhalt

# 1  Management Summary

Die geprüfte Übersetzung ist eine professionelle, redaktionell gepflegte Lokalisierung auf gutem bis sehr gutem Niveau – Gesamtnote 2,3 (gut). Sie erfüllt die zentrale Vorgabe: Die Texte sind erkennbar nicht maschinell durchübersetzt, sondern transkreiert und lektoriert, und sie arbeiten in allen acht Sprachen überwiegend mit einer modernen, zeitgemäßen maritimen Fachsprache. In keiner Sprache wurde ein flächiges Muster maschineller Übersetzung festgestellt; Rest-Artefakte beschränken sich auf Einzelstellen, vor allem in Konfigurator- und Rechtstext-Strings.

Die Abdeckung ist vollständig: Alle 724 aktiven Wörterbuchschlüssel des Website-Codes sind im Dokument erfasst, es gibt keine erfundenen Einträge, und die Eigenangaben des Dokuments halten der Prüfung im Wesentlichen stand (747 statt der genannten 746 Zielsprachzeilen). Die dänische und spanische Fassung stechen positiv hervor (Noten 2,0 und 1,7); der deutsche Master selbst ist mit 2,7 die schwächste Einzelwertung – nicht wegen der Sprachqualität, sondern wegen inhaltlicher Widersprüche und Terminologie-Streuung, die er als Source of Truth in alle Zielsprachen vererbt.

Vor einer Veröffentlichung sind jedoch acht Blocker zu beheben (Kapitel 4), darunter: ein haftungsrelevanter Widerspruch zwischen Marketing/FAQ („Selbstinstallation ohne Vorkenntnisse") und AGB („Fachinstallation zwingend vorgeschrieben"), ein Kompatibilitätsfehler in EN und FR („MerCruiser Baujahr 2016" statt „ab Baujahr 2016"), eine abweichende Anschrift in der deutschen und englischen Widerrufsbelehrung sowie eine inhaltlich veraltete französische Datenschutzerklärung.

Nachtrag (Revision 2, 15.08.2026): Der ursprünglich als B3 geführte Befund „Sprachkontamination in zwei SEO-Titeln" wurde zurückgezogen — er war ein Artefakt des Prüfwerkzeugs (fehlerhafte Behandlung maskierter Tabellenzeichen), kein Fehler der Übersetzung; die betroffene Dokumentzeile ist korrekt. Alle objektiv korrigierbaren Blocker (B2, B4, B6, B7, B8) sowie die mechanischen Einzelfehler sind inzwischen im Repository-Branch agent/qa-corrections-2026-08-15 umgesetzt; die verbleibenden Punkte sind als Entscheidungsvorlage (E1–E8) aufbereitet.

### Notenübersicht

| Sprache | Note | Kritisch | Hoch | Kurzurteil |
|---|---|---|---|---|
| Deutsch (Master) | 2,7 | 1 | 13 | Sprachlich sauber; inhaltliche Widersprüche und Terminologie-Streuung, die alle Zielsprachen erben |
| Englisch | 2,3 | 1 | 15 | Deutlich über MT-Niveau, gelungene Transkreationen; UK/US-Mix und Terminologie-Inkonsistenzen |
| Französisch | 2,3 | 1 | 7 | Durchgängiges Vouvoiement (0 Verstöße im Kernbestand); Typografie und Strahlruder-Terminologie schwach |
| Dänisch | 2,0 | 0 | 4 | Hohes professionelles Niveau, sehr gute Rechtstexte; wenige Terminologie-Lücken |
| Spanisch | 1,7 | 0 | 4 | Beste Einzelwertung: muttersprachliches Niveau mit echter Domänenkompetenz |
| Niederländisch | 2,3 | 0 | 5 | Idiomatisch stark; juristische Bedeutungsverschiebungen in AGB und Impressum |
| Norwegisch (Bokmål) | 2,3 | 0 | 7 | Konsistentes, modernes Bokmål; mehrdeutiger Hero-Claim und Fachterm-Brüche |
| Schwedisch | 2,3 | 0 | 5 | Copywriter-Niveau; dänische Kontamination im Sicherheitstext („signalet") |
| EN-Anhänge | 2,7 | 2 | 4 | Gute Rechtstexte nach EU-Muster; falsche Widerrufsanschrift, fehlende Versicherungsausnahme |
| FR-Anhänge | 3,0 | 2 | 3 | Solide, aber Datenschutzerklärung veraltet (Cookiebot) und sichtbare Einzelfehler |

Gesamturteil: Die Übersetzung ist als Arbeitsstand ausdrücklich gelungen und eine belastbare Grundlage für den Rollout. Sie ist jedoch noch nicht veröffentlichungsreif: Erst nach Behebung der Blocker aus Kapitel 4, der Vereinheitlichung der in Kapitel 5 beschriebenen sprachübergreifenden Terminologie und der Rückführung der korrigierten Fassungen in den Code (Kapitel 7) sollte sie live gehen. Eine native Endkontrolle pro Zielsprache bleibt – wie im Dokument selbst vorgesehen – der letzte Schritt.

# 2  Prüfgegenstand und Methodik

Geprüft wurde das Dokument „SmartDock_Website_Texte_Alle_Sprachen_REVIEWED_FINAL_QA (1).md" (812 KB, 3.013 Zeilen, Revisionsstand 14. August 2026). Es enthält den deutschen Master, die Referenzsprachen Englisch und Französisch sowie die fünf neuen Zielsprachen Dänisch, Spanisch, Niederländisch, Norwegisch Bokmål und Schwedisch – strukturiert in 747 Zielsprachzeilen mit stabilen Translation-IDs, elf dynamischen FAQ-Einträgen sowie fünf Anhängen (vollständige DE/EN/FR-Wörterbücher, Seitencode-Texte, Rechtstexte, Live-Rohdaten, Quelltextvarianten).

Als Referenz diente der tatsächliche Website-Quellcode aus dem GitHub-Repository Thitronik01/SmartDock-Webseite-bersetzung-, Branch agent/localization-qa-corrections (Commit bd78686), insbesondere die aktiven Wörterbücher translation_DE/EN/FR.js, die Sprachsteuerung (LanguageContext, Language-Switcher) und die Übergabedokumente im Repository-Root.

Die Prüfung erfolgte in drei Strängen: Erstens eine sprachliche Tiefenprüfung jeder der acht Sprachen durch jeweils einen spezialisierten Prüfdurchgang (Genauigkeit gegenüber dem DE-Master, Natürlichkeit, moderne maritime Fachsprache, Register, Konsistenz, Erkennung maschineller Übersetzungsartefakte). Zweitens eine gesonderte Prüfung der EN/FR-Anhänge einschließlich der Rechtstexte (DSGVO, AGB, Widerruf, Barrierefreiheit). Drittens ein systematischer Voll-Abgleich des Dokuments gegen den Repository-Quellcode (Schlüsselabdeckung, Wortlaut-Treue, Implementierungsstatus). Bewertet wurde nach deutschem Schulnotensystem; Befunde sind nach Schweregrad klassifiziert (KRITISCH = sinnentstellend, rechtlich riskant oder falsche Sprache; HOCH = fachlich/juristisch relevant oder prominent sichtbar; MITTEL = stilistisch-terminologisch; GERING = kosmetisch).

# 3  Gesamtbewertung

Maschinelle Übersetzung: Die Kernvorgabe ist erfüllt. In keiner der acht Sprachen wurde ein flächiges MT-Muster gefunden. Alle Prüfungen stießen im Gegenteil auf klare Belege menschlicher Redaktion: freie Transkreationen („The clever way to dock", „La tripulación en la palma de tu mano", „Mannskapet rett i hånden", „Læg nemt og smart til"), bewusste Registerentscheidungen (skandinavisches Du auch in Rechtstexten, spanische Trennung tú/usted) und Rechtstexte, die den amtlichen Mustern der jeweiligen Rechtsordnung folgen statt einer Wort-für-Wort-Übertragung. MT-typische Rest-Artefakte finden sich punktuell (Genitiv-Calques im EN-Konfigurator, „équipage" für „Team" im FR-Wörterbuch, deutsche Anführungszeichen in ES/NL/NB/SV-Datenschutztexten) und sind in den Sprachkapiteln einzeln ausgewiesen.

Moderne maritime Sprache: Ebenfalls überwiegend erfüllt, mit echter Fachkompetenz in allen Sprachen: „helm" und „amidships" im Englischen, „poste de pilotage" und „guindeau" im Französischen, „styreplads/styreplass", „ankerspil/ankervinsj" und „midtskibs/midtskips" in den skandinavischen Sprachen, „puesto de gobierno", „molinete de ancla" und „patrones" im Spanischen, „stuurstand", „boegschroef" und „midscheeps" im Niederländischen. Der wichtigste sprachübergreifende Schwachpunkt ist die uneinheitliche Behandlung des Begriffsfelds „Strahlruder/Querstrahlruder" – fast jede Sprache führt hier zwei bis vier konkurrierende Termini (Kapitel 5).

Register: Sehr diszipliniert. Das deutsche Du wird in allen Marketing- und UI-Texten konsequent gespiegelt (EN direkt-modern, FR durchgängig „vous" mit null Verstößen im Kernbestand, DA/NB/SV durchgängig „du", NL „je", ES „tú"); Rechtstexte sind je Sprache konventionsgerecht gelöst. Der einzige systematische Registerbruch liegt im deutschen Master selbst: Der seitenweit sichtbare Cookie-Banner siezt, während die gesamte Website duzt – die Zielsprachen haben das unterschiedlich (und meist besser als das Original) aufgelöst.

# 4  Veröffentlichungs-Blocker

Die folgenden Befunde sollten vor jedem Livegang behoben werden. Sie sind entweder sinnentstellend, rechtlich riskant oder für Endkunden unmittelbar sichtbar falsch. (B3 wurde in Revision 2 zurückgezogen, siehe Tabelle.)

| Nr. | Fundstelle | Befund | Erforderliche Maßnahme |
|---|---|---|---|
| B1 | DE-Master: FAQ 08, Produktseite vs. AGB § 4 | Haftungsrelevanter Widerspruch: „kannst du SMARTDOCK sogar ohne technische Vorkenntnisse selbst installieren" vs. „Installation durch geschultes Fachpersonal unserer zertifizierten Händler zwingend vorgeschrieben". Wird in alle Zielsprachen vererbt. | Verbindliche Produktlinie festlegen; Marketing/FAQ oder AGB anpassen und alle acht Sprachfassungen nachziehen. (Im Dokument bereits als SOURCE_CONFLICT markiert – Entscheidung steht aus.) |
| B2 | EN + FR: configurator.mercruiser.system_2016 | „MerCruiser ab Baujahr 2016" wurde zu „MerCruiser Built 2016" (EN) bzw. „MerCruiser 2016" (FR) – die Kompatibilität liest sich als „nur Baujahr 2016" statt „2016 und neuer". Kaufrelevanter Fehler im Konfigurator. | EN: „MerCruiser from model year 2016 (Sterndrive or Zeus)"; FR: „MerCruiser à partir de 2016 (embase Z ou Zeus)". |
| B3 | NL + SV: seo.product.title (Z. 201) | ZURÜCKGEZOGEN (Rev. 2): Der vermeintliche Sprachmix war ein Artefakt des Prüfwerkzeugs, das die korrekt maskierten Pipe-Zeichen der Zeile falsch aufgelöst hat. Die Dokumentzeile ist intakt; alle acht Sprachwerte sind korrekt (NL „Slimme havenmanoeuvres", SV „Smarta hamnmanövrer"). | Keine Maßnahme erforderlich. Die darauf beruhenden Einzelbefunde in den Kapiteln ES/NL/SV wurden ebenfalls zurückgezogen. |
| B4 | EN-Anhang C: Widerrufsbelehrung | Abweichende Anschrift „Finkenweg 11–15" statt „Finkenweg 9-15" (alle anderen Seiten). Eine falsche Anschrift kann die Widerrufsbelehrung unwirksam machen. | Anschrift korrigieren; alle Adressvorkommen aller Sprachen gegeneinander prüfen. |
| B5 | FR-Anhang A: Datenschutz §§ 7–8 | Die FR-Datenschutzerklärung beschreibt noch „Cookiebot" und GA4 ohne Consent-Vorschaltung; die EN/DE-Fassung beschreibt die aktuelle eigene Consent-Lösung („cookieConsent", Local Storage). Widersprüchliche Rechtstexte je Sprache. | FR-Abschnitte 7/8 auf den aktuellen Stand bringen (juristische Freigabe erforderlich). |
| B6 | DE-Anhang A: priv_s7_p1–p4 | In der deutschen Spalte des aktiven Wörterbuchs steht englischer Text – deutsche Nutzer sähen im Cookie-Abschnitt der Datenschutzerklärung Englisch. | Deutsche Originaltexte wiederherstellen (Code-seitig prüfen, ob der Live-Zustand betroffen ist). |
| B7 | EN-Anhang C: Impressum | „The professional liability insurance provides worldwide coverage." unterschlägt die Deckungsausnahme „mit Ausnahme der USA, Kanada und deren Territorien" (in DE und FR vorhanden). Materielle Falschangabe. | Ausnahme ergänzen: „…worldwide coverage, with the exception of the USA, Canada and their territories." |
| B8 | SV: functions.safety.description | Grammatikfehler mit Kontaminationsindiz im sicherheitskritischen Text: „Om signalet bryts…" – „signalet" ist die dänisch/norwegische Form, schwedisch korrekt „signalen". | „Om signalen bryts försätts alla drivsystem omedelbart i neutralläge." |
| B9 | DE-Master: Impressum (TMG) | Impressum zitiert „§ 5 TMG" / „§ 7 Abs.1 TMG"; das TMG ist seit Mai 2024 durch das DDG abgelöst. Veraltete Rechtsgrundlage auf aktiver Rechtsseite. | Auf DDG umstellen (§ 5 DDG usw.), juristisch bestätigen lassen; Zielsprachen nachziehen. |

# 5  Sprachübergreifende Befunde

Neben den Blockern zeigen sich fünf Muster, die nicht einer einzelnen Sprache zuzurechnen sind, sondern im Prozess bzw. im deutschen Master entstehen und daher zentral gelöst werden sollten.

### 5.1  Terminologiefeld „Strahlruder"

Der deutsche Master verwendet „Strahlruder", „Querstrahlruder", „Bugstrahlruder" und „Heckstrahlruder" nebeneinander; nahezu jede Zielsprache hat diese Streuung übernommen und eigene Varianten ergänzt: EN mischt „thruster"-Komposita sauber, aber FR pendelt zwischen „propulseur" und veraltetem „hélice d’étrave" (vier Benennungen), DA nutzt „thruster", bricht aber im Konfigurator zu „tværpropel" aus, NL führt „boegschroef", „thrusters" und „dwarsstuwers" in einem einzigen Konfigurator-Flow, NB wechselt zu „tverrpropell", SV streut über „manöverpropeller", „tvärpropeller" und „akterpropeller" (statt marktüblich „bogpropeller/häckpropeller"). Empfehlung: pro Sprache einen verbindlichen Leitbegriff samt Kurzform im Glossar festlegen und den Konfigurator-Flow als Erstes vereinheitlichen – dort trifft die Streuung auf kaufentscheidende Auswahlschritte.

### 5.2  Sicherheitsverhalten bei Verbindungsverlust

Der Master beschreibt dasselbe sicherheitskritische Systemverhalten dreifach unterschiedlich: „alle Antriebe in den Leerlauf geschaltet", „Auto-Stop bei Verbindungsverlust" und „Motoren wechseln in die Neutralstellung". Leerlauf (Drehzahl), Neutralstellung (ausgekuppelt) und Stopp sind technisch nicht dasselbe. DA und NB haben den Widerspruch geerbt („tomgang" vs. „neutral/fri"), ES, NL und FR haben ihn stillschweigend korrekt auf „Neutralstellung" vereinheitlicht. Empfehlung: tatsächliches Systemverhalten technisch klären, im Master auf eine Formulierung festlegen (empfohlen: „in die Neutralstellung geschaltet") und alle Sprachen angleichen.

### 5.3  Registerbruch Cookie-Banner

Der deutsche Cookie-Banner siezt als einziges seitenweites UI-Element („Ihre Erfahrung"), während die gesamte Website duzt. Die Zielsprachen lösen das uneinheitlich: DA, NB, SV und NL normalisieren auf Du/je (konventionsgerecht), ES bleibt bei „tú" und kollidiert damit mit der usted-Datenschutzerklärung, die den Banner beschreibt. Empfehlung: den Master auf Du umstellen (der Banner ist UI-Copy, kein Rechtstext) und die Entscheidung je Sprache dokumentieren.

### 5.4  Bedeutungsverschiebungen in Rechtstexten

Drei wiederkehrende Verschiebungen: Erstens wird „sicherheitsrelevant" in ES, NL und NB zu „sicherheitskritisch" verschärft – in einem AGB-Haftungskontext keine Nuance. Zweitens wird das (im Master selbst fehlerhafte) „Universalschiedsverfahren" in FR, NL, NB und SV als Schiedsgerichtsbarkeit übersetzt („arbitrage", „arbitrageprocedure", „voldgift", „skiljeförfarande"), gemeint ist aber Verbraucherschlichtung. Drittens verschieben DA, NB und SV „ab Baujahr" zu „Modelljahr" („modelår/modellår") – bei Kompatibilitätszusagen eine faktische Änderung. Empfehlung: Master präzisieren („Universalschlichtungsverfahren"), Glossareinträge für „sicherheitsrelevant" und „Baujahr" anlegen, betroffene Zeilen korrigieren.

### 5.5  Typografie-Übertragungen

Deutsche Anführungszeichen („cookieConsent") sind in die ES-, NL-, NB- und SV-Datenschutztexte durchgerutscht; die deutsche Schreibweise „3 - 5 Tage" (mit Spatien) wurde in mehrere Sprachen übernommen, deren Konvention „3–5" ist; Ellipsen und Gedankenstriche sind uneinheitlich. Im Französischen fehlen fast durchgängig die geschützten Leerzeichen vor Doppelzeichen-Interpunktion (nur 1 von ca. 300 Stellen korrekt), und typografische Apostrophe mischen sich mit geraden (ca. 54 : 260). Empfehlung: ein skriptgestützter Typografie-Pass pro Sprache vor dem Rollout.

# 6  Bewertung im Einzelnen

## 6.1  Deutsch (Master / Source of Truth)

| Note | 2,7 |
|---|---|
| Statistik | 758 geprüfte Einträge · 1 kritischer, 13 hohe, 14 mittlere, 9 geringe Befunde |
| Kurzurteil | Sprachlich überwiegend sauber und im modernen Wassersport-Register sicher; echte Rechtschreibfehler sind selten. Die Note drücken der Selbstinstallations-Widerspruch (B1), sicherheitsrelevante Terminologie-Inkonsistenzen und die uneinheitliche Schreibweise der SMARTDOCK-Komposita. Als Source of Truth vererbt der Master jede dieser Schwächen in sieben Sprachen – seine Bereinigung hat den größten Hebel. |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| KRITISCH | FAQ 08 / Produktseite vs. AGB § 4 | Selbstinstallation beworben, in AGB zwingende Fachinstallation – Widerspruch (B1) | Produktlinie festlegen, Fassungen angleichen |
| HOCH | functions.safety.* vs. FAQ 09 | „Leerlauf" / „Auto-Stop" / „Neutralstellung" für dasselbe Sicherheitsverhalten | Einheitlich „in die Neutralstellung geschaltet" |
| HOCH | Reichweitenangaben (3 Stellen) | „bis zu 50 m" vs. „ca. 50 Meter" vs. „überall an Bord" | Einheitlich „bis zu 50 m"; „überall an Bord" relativieren |
| HOCH | global.cookie.description | Cookie-Banner siezt, Website duzt (einziger UI-Registerbruch) | Auf Du-Form umstellen |
| HOCH | SMARTDOCK-Komposita (33 Fundstellen) | „SMARTDOCK App" vs. „SMARTDOCK-App" – Durchkopplung uneinheitlich | Verbindlich mit Bindestrich durchkoppeln |
| HOCH | Händler/Partner-Begriffe | Sieben Benennungen für dasselbe Konzept (Händler, Einbaupartner, zertifizierte Partner …) | Zwei Begriffe definieren: Händler (Vertrieb) / zertifizierter Einbaupartner (Installation) |
| HOCH | configurator.system.winches | „Winches/Winch" statt fachsprachlich „Winsch(en)"; Konflikt mit „Winden" | Einheitlich „Winsch/Winschen" |
| HOCH | Impressum | Veraltete TMG-Zitate (seit 05/2024: DDG) (B9) | Auf DDG umstellen, juristisch prüfen |
| HOCH | Barrierefreiheit § 6 | BGG vs. BFSG als Rechtsgrundlage derselben Schlichtungsstelle | Rechtsgrundlage klären, beide Zeilen angleichen |
| MITTEL | seo.home.description | „anspruchsvolle Kapitäne" statt „Skipper" (Registerfehler Sportboot) | „Entwickelt für anspruchsvolle Skipper" |
| MITTEL | product.control.description_3 | „Ein-Mann-Show" statt nautisch „einhand" | „Anlegen wird zum souveränen Einhandmanöver." |

### Maritime Fachsprache und Gesamtbild

Das Kernmarketing ist fachsprachlich stark: „Einfach clever anlegen.", „mittschiffs", „Bug- und Heckstrahlruder", „Gashebel in Neutralstellung", „Hafenmanöver" und die konsequente Skipper-Ansprache sind zeitgemäßes Borddeutsch. Verbesserungswürdig sind die Anglizismen „Winches" und „Anker-Kontrolle", der Solitär „Querstrahlruder" im Konfigurator sowie „Kapitäne" im SEO-Text. Die Du-Form ist außerhalb der Rechtstexte ausnahmslos durchgehalten – einzige Ausnahme ist der Cookie-Banner.

## 6.2  Englisch

| Note | 2,3 |
|---|---|
| Statistik | ca. 380 Tabelleneinträge + 11 FAQ-Paare geprüft (Haupttabellen) · 1 kritischer, 15 hohe, 19 mittlere Befunde · Anhänge separat (Kapitel 6.9) |
| Kurzurteil | Deutlich über MT-Niveau: Weite Teile lesen sich wie native Marine-Marketingtexte („The clever way to dock", „mobile helm", „Dock confidently on your own"), die Rechtstexte folgen den amtlichen EU-Mustern. Schwächen: der MerCruiser-Kompatibilitätsfehler (B2), durchgängige Begriffspaar-Inkonsistenzen und ein UK/US-Varietäten-Mix. |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| KRITISCH | configurator.mercruiser.system_2016 | „ab Baujahr 2016" → „Built 2016" – Kompatibilität verengt (B2) | „MerCruiser from model year 2016" |
| HOCH | Händlerfinder (mehrere Keys) | „retailer" vs. „dealer" gemischt; Branchenstandard ist „dealer" | Durchgängig „dealer" / „Dealer locator" |
| HOCH | global.legal.imprint | „Imprint" ist deutscher Calque; interner Verweis nennt „Legal Notice" | Durchgängig „Legal Notice" |
| HOCH | PLZ-Felder (3 Keys) | „ZIP Code" (US) in ansonsten britischem Englisch, EU-Liefergebiet | „Postcode" bzw. „Postal code" |
| HOCH | Ankerwinde (ACU, Konfigurator) | „anchor winch" vs. fachlich korrekt „anchor windlass" | Einheitlich „anchor windlass" |
| HOCH | Joystick-Fragen (5 Keys) | „Is a joystick available…?" – „vorhanden" ≠ „erhältlich"; Fehlbedienungsrisiko | „Does your boat have a … joystick?" |
| HOCH | installation.spec.max_on_duration | „Max. switch-on duration" – Calque ohne EN-Fachbedeutung | „Max. run time" / „Max. on-time" |
| HOCH | home.advantages.title | „Five Reasons for SMARTDOCK" – unidiomatisch | „Five Reasons to Choose SMARTDOCK" |
| HOCH | FAQ 01/04 | „BLUETOOTH" in Versalien (Markenname), inkonsistent zur selben Antwort | Überall „Bluetooth" |
| HOCH | FAQ 05 | „connected" vs. „paired" gemischt – BT-fachlich verschieden | Durchgängig „paired" |
| MITTEL | privacy.last_updated | US-Datumsformat „October 22, 2024" im UK-Dokument | „22 October 2024" |
| MITTEL | functions (2 Titel) | Zwei DE-Headlines kollabieren zu „Everything under control"-Dublette | Z. B. „Complete control – at your fingertips" |

### Varietät und Gesamtbild

Basis ist klar britisches Englisch (manoeuvre, harbours, metres, per cent, dialogue box) – dagegen stehen US-Elemente wie „ZIP Code", das US-Datumsformat und „Inquire now". Empfehlung: UK-Englisch verbindlich festschreiben und einen Termbase-gestützten Konsistenz-Pass fahren (retailer/dealer, winch/windlass, motor/engine, request/enquiry, Submitting/Sending). Maritime Fachsprache im Kern sehr gut: „helm", „amidships", „bow/stern thruster", „Sterndrive", „docking in tight harbours and in strong crosswinds".

## 6.3  Französisch

| Note | 2,3 |
|---|---|
| Statistik | 583 geprüfte FR-Strings (561 Tabellen + 22 FAQ) · 1 kritischer, 7 hohe, 15 mittlere Befunde · 0 Tutoiement-Verstöße im Kernbestand |
| Kurzurteil | Gute, überwiegend idiomatische Lokalisierung mit vorbildlich durchgehaltenem Vouvoiement und Rechtstexten nahe an den amtlichen französischen Mustern (Widerrufsformular fast wortgleich mit dem offiziellen Modell). Abwertung wegen des MerCruiser-Fehlers (B2), der vierfachen Strahlruder-Terminologie und der flächig fehlenden französischen Typografie (geschützte Leerzeichen, Apostrophe). |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| KRITISCH | configurator.mercruiser.system_2016 | „MerCruiser 2016" statt „ab 2016" (B2) | „MerCruiser à partir de 2016 (embase Z ou Zeus)" |
| HOCH | configurator.summary.total | „Total brut" – suggeriert Betrag vor Abzügen; Preise sind TTC | „Total TTC" / „Montant total" |
| HOCH | Strahlruder (4 Varianten) | „propulseur d’étrave" vs. veraltet „hélice d’étrave" vs. „propulseurs transversaux/de manœuvre" | Sitewide „propulseur d’étrave / de poupe" |
| HOCH | terms.general.scope | „anbahnen und abschließen" → nur „concluez" – AGB-Geltungsbereich verengt | „que vous engagez et concluez avec nous" |
| HOCH | withdrawal.consequences.withholding | „selon la date la plus proche" mehrdeutig, weicht vom amtlichen Muster ab | „la date retenue étant celle du premier de ces faits" |
| HOCH | Typografie korpusweit | Keine geschützten Leerzeichen vor ? ! ; : (1 von ~300 korrekt); Apostrophe gemischt (54 : 260) | Skriptgestützter Typografie-Pass |
| MITTEL | home.hero.claim | „Amarrer en toute simplicité" – „amarrer" = festmachen; Produktkern ist Anlegen | „Accostez en toute simplicité." |
| MITTEL | configurator.confirmation.title | „Demande réussie !" – MT-artig | „Demande envoyée !" |
| MITTEL | home.intro.awards | „a été nominé" – beanstandeter Anglizismus | „a été nommé" / „est finaliste" |
| MITTEL | FAQ 08 | „installer a posteriori" statt Branchenterm | „en seconde monte" / „en rétrofit" |

### Register und Gesamtbild

Das Vouvoiement ist im Kernbestand ausnahmslos eingehalten (maschinell gegengeprüft); lediglich in Anhang B findet sich ein „Tu trouveras"-Ausreißer (Kapitel 6.9). Maritime Fachsprache überwiegend stark: „poste de pilotage", „guindeau", „point mort", „manette des gaz", „accoster dans des ports étroits et par fort vent latéral". Schwachpunkte neben der Strahlruder-Streuung: „propulsion en Z" statt „embase Z", „Durée de mise en marche max." und der Hero-Claim.

## 6.4  Dänisch

| Note | 2,0 |
|---|---|
| Statistik | ca. 770 geprüfte Segmente · 0 kritische, 4 hohe, 11 mittlere Befunde |
| Kurzurteil | Hohes professionelles Niveau: durchgängige korrekte du-Form, idiomatisches modernes Marine-Dänisch und sauber ins dänische Rechtsregister übertragene Rechtstexte („mangelansvar", „værneting", Widerrufsbelehrung nach dänischem Standardformular). Wenige, klar umrissene Schwächen. |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | functions.safety.description | „tomgang" (Leerlaufdrehzahl) vs. FAQ 09 „neutral" – Sicherheitsverhalten uneinheitlich | „sættes alle motorer straks i frigear (neutral)" |
| HOCH | configurator.thruster_manufacturer.* | Einziger „tværpropel"-Ausreißer gegen die etablierte „thruster"-Linie | „Producent af dine thrustere" |
| HOCH | Baujahr-Angaben (2 Keys) | „fra modelår 2010/2016" – Baujahr ≠ Modelljahr bei Kompatibilitätszusagen | „fra årgang/byggeår 2010" |
| HOCH | Website-Benennung sitewide | „website" / „websted" / „hjemmeside" dreifach gemischt, teils auf derselben Seite | Eine Form festlegen und durchziehen |
| MITTEL | installation.spec.max_on_duration | „indkoblingstid" = Einschaltzeitpunkt, gemeint ist Betriebsdauer | „Maks. driftstid" |
| MITTEL | functions.app.high_mode.description | „skubkraft" unüblich; Branchenterm „trykkraft" | „maksimal trykkraft" |
| MITTEL | imprint.dispute.title | „voldgiftsprocedure" (Schiedsverfahren) statt Schlichtung | „universel mæglingsprocedure" |
| MITTEL | FAQ 04 | App-Label „Styreenhed" kollidiert mit „styreenhed" = ECU/TCU | Reales App-Label übernehmen, Begriffe trennen |

### Gesamtbild

Die dänische Fassung zeigt an vielen Stellen eigenständige Lokalisierungsentscheidungen auf Muttersprachler-Niveau: „Læg nemt og smart til" als Hero-Claim, „i stævnen, agter eller midtskibs", konsequent „styreplads" und „ankerspil", vorbildliche Kommasetzung. Die Sie→du-Normalisierung in Rechtstexten entspricht dänischer Konvention und ist konsequent durchgehalten. Die Wahl „thruster" statt „bovpropel" ist vertretbar, sollte aber als Glossar-Entscheidung dokumentiert werden.

## 6.5  Spanisch

| Note | 1,7 |
|---|---|
| Statistik | ca. 770 geprüfte Segmente · 0 kritische, 3 hohe, 12 mittlere Befunde |
| Kurzurteil | Beste Einzelwertung der Prüfung: durchgängig idiomatisches Spanisch (Spanien), korrekte moderne Yacht-Terminologie, sauber getrenntes Register (tú im Marketing, usted in Rechtstexten) und Rechtstexte, die sich an den offiziellen ES-Fassungen der EU-Muster orientieren. Keine systematischen MT-Muster; stattdessen echte Transkreationen. |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | imprint.company.management_label | „Geschäftsführung:" → „Dirección:" – kollidiert mit „Dirección:" für Anschrift auf derselben Seite | „Gerencia:" bzw. „Administrador/es:" |
| HOCH | „Anfrage"-Terminologie (Flow-weit) | „consulta" (Kontakt) vs. „solicitud" (Konfigurator) vs. „consulta" (AGB) – Begriffsspaltung im Rechtskonzept | Leitbegriff festlegen (empf. „solicitud") und global vereinheitlichen |
| HOCH | global.cookie.* | Banner in tú, beschreibende Datenschutzerklärung in usted – Registernaht inkonsistent | Entscheidung treffen und dokumentieren (empf. mit Master-Umstellung auf Du) |
| MITTEL | „IVA legal" (3 Keys) | Calque aus „gesetzliche Mehrwertsteuer" | „el IVA aplicable" / „(IVA incluido)" |
| MITTEL | terms.prices_delivery.installation | „críticos para la seguridad" verschärft „sicherheitsrelevant" | „relevantes para la seguridad" |
| MITTEL | Gashebel (2 Keys) | „palanca del acelerador" automobil gefärbt | „palanca de gases" |
| MITTEL | accessibility.enforcement.title | „Procedimiento de ejecución" klingt nach Zwangsvollstreckung | „Procedimiento de aplicación" |

### Gesamtbild

Die spanische Fassung glänzt mit Domänenkompetenz: „atracar", „propulsor de proa/popa", „puesto de gobierno", „molinete de ancla", „punto muerto", „patrones" statt Calque „capitanes", „cola Z" für Z-Antrieb. UI-Konventionen (¿…?, «…», „18 %", „22/10/2024") sitzen. Die wenigen Befunde sind gezielt behebbar; die Impressum-Label-Kollision ist der einzige Fehler mit echter Verwechslungsgefahr.

## 6.6  Niederländisch

| Note | 2,3 |
|---|---|
| Statistik | ca. 750 geprüfte Einträge + 11 FAQ-Paare · 0 kritische, 5 hohe, 16 mittlere Befunde |
| Kurzurteil | Liest sich über weite Strecken wie von einem niederländischen Watersport-Copywriter: sauberes je/u-Register, korrekte Marineterminologie, gelungene Transkreationen. Abwertung wegen mehrerer juristisch relevanter Bedeutungsverschiebungen und der Thruster-Terminologie im Konfigurator. (Der in Rev. 1 als kritisch geführte „Fremdsprachen-Leak" im SEO-Titel war ein Prüfwerkzeug-Artefakt und wurde zurückgezogen.) |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | accessibility.limitations.images | „grafieken" = Diagramme (falscher Freund); Aussage sachlich falsch | „afbeeldingen en grafische elementen" |
| HOCH | terms.contract.inquiry | „beoordelen wij of onze partners…" liest sich als „wir prüfen, OB…" – AGB-Sinn kippt | Satz umbauen: „beoordelen wij, of een van onze installatiepartners, …" |
| HOCH | terms.warranty.business_customers | Zusatz „wettelijke" macht die vertraglich verkürzte Frist zur gesetzlichen – juristisch falsch | „De garantietermijn voor ondernemers bedraagt één jaar" |
| HOCH | Thruster-Cluster (Konfigurator) | „boegschroef" / „Thrusters" / „dwarsstuwers" in einem Flow | Konsequent „boeg-/hekschroeven" |
| HOCH | product.control.description_3 | „Alleen aanmeren wordt…" – liest sich als „NUR das Anlegen"; Solo-Aussage verloren | „Aanmeren doe je voortaan moeiteloos in je eentje." |
| MITTEL | imprint (2 Überschriften) | „Impressum" und „Unternehmensangaben" beide → „Bedrijfsgegevens" | Seitentitel „Colofon" (NL-Konvention) |
| MITTEL | privacy.analytics.ga4_transfer | IP-Kürzungs-Satz falsch angebunden (Kürzung vs. Übermittlung in EU) | Satz gemäß Korrekturvorschlag umstellen |
| MITTEL | imprint.disclaimer.title | „Aansprakelijkheidsbeperking" (Beschränkung) statt Ausschluss | „Uitsluiting van aansprakelijkheid" |

### Gesamtbild

Fachterminologisch stark: „boegschroef/hekschroef", „ankerlier", „stuurstand", „midscheeps", „gashendel", „neutraalstand", „schipper", „pleziervaartuigen". Das je/u-Register ist ohne einen einzigen Bruch innerhalb einer Textsorte durchgehalten; die bewusste je-Normalisierung des Cookie-Banners ist dokumentationswürdig. Die Rechtstexte tragen die meisten Rest-Artefakte – dort ist ein juristisch begleiteter Zweitpass sinnvoll.

## 6.7  Norwegisch (Bokmål)

| Note | 2,3 |
|---|---|
| Statistik | ca. 769 geprüfte Einheiten · 0 kritische, 7 hohe, 11 mittlere Befunde |
| Kurzurteil | Solides, konsequent modernes Bokmål ohne Nynorsk-Formen oder Svesismen; Rechtstexte treffen die norwegische Gesetzesterminologie bemerkenswert genau („angrerett", „uten ugrunnet opphold", Datatilsynet-Vokabular). Abwertung wegen des mehrdeutigen Hero-Claims, zweier Fachterm-Brüche mit Sicherheitsbezug und zweier juristischer Begriffsfehler. |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | home.hero.claim | „Legg til enkelt og smart." – „Legg til" ohne Objekt = UI-„Hinzufügen"; Claim bistabil | „Legg til kai – enkelt og smart." |
| HOCH | configurator.thruster_manufacturer.* | „tverrpropell"-Bruch gegen die „thruster"-Linie | „Produsent av thrusterne" |
| HOCH | Installationsanleitungs-Titel | „Yamaha-drev" – Außenborder sind keine „drev"; „dobbeltdrev" liest sich als Getriebetyp | „Yamaha-motorer"; „dobbelinstallasjon/enkeltinstallasjon" |
| HOCH | functions.safety vs. FAQ 09 | „tomgang" vs. „nøytralstilling" für dasselbe Sicherheitsverhalten | Einheitlich „settes i fri (nøytral)" |
| HOCH | configurator.dealer.description | „i nærheten til installasjonen" ungrammatisch, Sinn verschoben | „…i nærheten som skal utføre installasjonen" |
| HOCH | imprint.dispute.title | „voldgiftsprosedyre" (Schiedsverfahren) statt Schlichtung; widerspricht Folgetext | „universell meklingsordning" |
| HOCH | terms.general.definitions | „handleevne" (Geschäftsfähigkeit) statt „rettsevne" (Rechtsfähigkeit) in AGB-Definition | „et personselskap med rettsevne" |
| MITTEL | Baujahr (2 Keys) | „modellår" statt idiomatisch „årsmodell"; Sachverschiebung Baujahr→Modelljahr | „fra årsmodell …" bzw. „produsert fra …" |
| MITTEL | privacy.hosting.dpa_retention | „webhotellleverandøren" – Dreifachkonsonant | „webhotelleverandøren" |

### Gesamtbild

Starke Termkonsistenz („forespørsel", „forhandler", „pare/paring", differenziert „konfigurasjon/konfigurering") – NB vereinheitlicht sogar Inkonsistenzen des Masters (Horn/Signalhorn → durchgängig „signalhorn"). Maritime Sprache aktuell: „styreplass", „legge til", „baugthruster/hekkthruster", „ankervinsj", „gasspak", „midtskips". Die Sie→du-Normalisierung entspricht norwegischer Konvention.

## 6.8  Schwedisch

| Note | 2,3 |
|---|---|
| Statistik | 746 geprüfte Einträge · 0 kritische, 5 hohe, 12 mittlere Befunde |
| Kurzurteil | Muttersprachliches Copywriter-Niveau mit idiomatischen Umformulierungen und korrekter schwedischer Rechts-/GDPR-Terminologie. Abwertung wegen einer Kontamination aus der dänisch/norwegischen Lokalisierung im sicherheitskritischen Text („signalet", B8) sowie der gestreuten Thruster-Terminologie. (Der in Rev. 1 als kritisch geführte dänische SEO-Titel war ein Prüfwerkzeug-Artefakt und wurde zurückgezogen.) |

### Wichtigste Befunde

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | functions.safety.description | „Om signalet bryts" – dänisch/norwegische Form im Sicherheitstext (B8) | „Om signalen bryts …" |
| HOCH | Thruster-Terminologie (3 Lexeme) | „manöverpropeller" / „tvärpropeller" / „akterpropeller" statt marktüblich „bog-/häckpropeller" | Einheitlich „bog- och häckpropellrar" |
| HOCH | home.intro.awards | „följer vi … standarderna" – aus „orientieren an" wird Compliance-Behauptung (TARGET_REVIEW-Eintrag) | „utgår vi dessutom från de höga standarderna" |
| HOCH | Baujahr (2 Keys) | „från modellår" – Sachverschiebung und unidiomatisch | „tillverkade från 2010" / „årsmodell … och senare" (klären) |
| MITTEL | functions (2 Titel) | Zwei DE-Headlines kollabieren zu identischem „Allt under kontroll" | Z. 254: „Full koll – med ett finger" |
| MITTEL | dealer.results.count_label | „återförsäljare hittad/hittade" – unidiomatischer Anglizismus nach Zahl | „återförsäljare hittades" |
| MITTEL | configurator.summary.included | „Moms: inkluderad" steif | „ingår" |

### Gesamtbild

Sehr gute Basis: „lägga till/tilläggning", „ankarspel", „fören, aktern eller midskepps", „förarplats", „gasreglage", „skeppare" (auch für „Kapitäne" – gute Vereinheitlichung), korrekte schwedische Konventionen („ca" ohne Punkt, ISO-Datum, „B × H × D"). Die „signalet"-Kontamination ist prozessbedingt und sollte Anlass für einen gezielten Cross-Language-Check aller drei skandinavischen Fassungen sein.

## 6.9  EN/FR-Anhänge (vollständige Wörterbücher, Seitencode- und Rechtstexte)

| Noten | EN-Anhänge: 2,7 · FR-Anhänge: 3,0 |
|---|---|
| Umfang | Anhang A: 776 Schlüssel · Anhang B: 116 Einträge · Anhang C: ca. 335 Rechtstext-Bausteine |
| Kurzurteil | Die Rechtstexte beider Sprachen folgen den amtlichen EU-Mustern auf professionellem Niveau (EN: „whichever is the earliest", „model withdrawal form"; FR: amtsnahe Widerrufsformulierungen, korrekte RGPD-Terminologie). Vier kritische Befunde sind Blocker (B4–B7). Darunter liegt eine Schicht unlektorierter Alt-Strings (defekte Buttons „Open Find Retailer" / „Ouvrir le revendeurs", „équipage commerciale" für „Team", EN-only-Checkout mit „Place an Order" im Widerspruch zum Unverbindlichkeits-Konzept). |

### Wichtigste Befunde (über die Blocker B4–B7 hinaus)

| Schwere | Fundstelle | Befund | Empfohlene Korrektur |
|---|---|---|---|
| HOCH | FR: contact_fast_reply_desc u. a. | „Notre équipage commerciale" – Lexemfehler (équipage = Schiffsbesatzung) + Genusfehler; 3 Schlüssel betroffen | „Notre équipe commerciale" / „notre équipe" |
| HOCH | EN+FR: dealerFinder.buttonText | Beidseitig defekt: „Open Find Retailer" / „Ouvrir le revendeurs" | „Find a Dealer" / „Trouver un revendeur" |
| HOCH | EN: Checkout-Strecke (EN-only) | „Place an Order" / „Thank you for your order!" widerspricht dem unverbindlichen Anfrage-Konzept der AGB | „Submit Request" / „Thank you for your request" |
| HOCH | FR: Anhang B Installation | Einziger Tutoiement-Ausreißer „Tu trouveras ici…" (Anhang A hat „Vous trouverez") | Auf „vous" vereinheitlichen |
| HOCH | DE-Quelle: imp_s4_p4 | Korrupter DE-Text „nicht kommer commerciales Gebrauch" (FR-Fragment im deutschen Satz) | „nicht kommerziellen Gebrauch" |
| MITTEL | EN: Varietät | Locale „en-US" deklariert, Texte überwiegend UK-Schreibung mit US-Einsprengseln | Varietät festlegen und durchziehen |
| MITTEL | EN/FR: app_reasons_title | EN/FR („More Control. Less Stress. More Freedom.") entspricht nicht DE („Fünf Gründe für SMARTDOCK") – Titel/Kicker vertauscht | Zuordnung korrigieren |

Hinweis zur DE-Kleinschreibung in Anhang B: Die durchgängige Kleinschreibung der deutschen Spalte ist mit hoher Sicherheit ein Extraktionsartefakt (auch Eigennamen, Mess-IDs und Einheiten sind lowercased) – die DE-Strings dienen offenbar als Lookup-Schlüssel der dreisprachigen Hilfsfunktion. Restrisiko: Rendert die Funktion bei DE den Schlüssel selbst, erschiene die Kleinschreibung im Frontend. Stichprobe auf den DE-Rechtsseiten empfohlen.

# 7  Abgleich mit dem Repository

Abdeckung: Vollständig. Alle 724 Schlüssel des aktiven deutschen Wörterbuchs sind im Dokument erfasst; Anhang A bildet mit 776 Schlüsseln exakt die Vereinigungsmenge der drei aktiven Wörterbücher ab (DE 724, EN 517, FR 725). Es gibt weder erfundene Einträge noch fehlende Schlüssel. Die Eigenangabe „776 Wörterbuchschlüssel" stimmt; die Angabe „746 strukturierte Zielsprachzeilen" in README und Lokalisierungspaket ist um eins zu niedrig (real: 747).

Wortlaut-Treue: Das Dokument ist keine wortgetreue Kopie des Codes, sondern eine bereits QA-korrigierte REVIEWED-Fassung: 26 EN-Werte und 37 FR-Werte in Anhang A sowie 42 von 246 eindeutig zuordenbaren DE-Master-Zeilen weichen redaktionell vom aktiven Code ab – durchweg zugunsten des Dokuments (z. B. korrigiert das Dokument den Code-Anredebruch „Folgen Sie uns" zu „Folge uns" und den Code-Tippfehler „s´effectuer").

Diese Verbesserungen sind bisher nicht in den Code zurückgespielt. Damit existieren derzeit zwei Wahrheiten: die Live-Wörterbücher und die REVIEWED-Fassung. Für den Rollout muss das Dokument formal zur Source of Truth erklärt und die Differenzliste (26 EN + 37 FR + 42 DE) in die Wörterbücher übernommen werden – sonst gehen die QA-Korrekturen beim nächsten Code-Deployment verloren.

ES/NL-Dateien im Repo: Die im Repository vorhandenen Dateien translation_ES.js und translation_NL.js (je 267 Schlüssel) sind Platzhalter bzw. Alt-Entwürfe: Rund 95 % der Werte sind deutscher Text mit Sprachpräfix („[ES] Startseite"), der Rest alte, als „needs-review" markierte Maschinenübersetzungen. Sie sind nicht in die Website eingebunden und dürfen nicht als Referenz dienen – die ES/NL-Zieltexte existieren ausschließlich im geprüften Dokument. (Nebenbefund: Das Lokalisierungspaket nennt für diese Dateien „265" Schlüssel, real sind es 267.)

Implementierungsstatus: Der Code bestätigt die Dokument-Aussagen: Aktiv sind ausschließlich DE, EN und FR (index.js, LanguageContext, Language-Switcher); PocketBase-Laufzeit-Überschreibungen existieren nur für DE und EN. Die fünf neuen Zielsprachen sind sprachlich fertig, aber technisch komplett unimplementiert (Routing, Wörterbücher, dynamische Datensätze, SEO, hreflang).

# 8  Empfehlungen und nächste Schritte

Priorisierte Reihenfolge auf dem Weg zur Veröffentlichung:

1 – Quellentscheidungen (vor allem anderen): Selbstinstallations-Widerspruch (B1) verbindlich entscheiden; Sicherheitsverhalten bei Verbindungsverlust technisch klären (5.2); Reichweiten-Formulierung festlegen; TMG→DDG-Umstellung (B9) und BGG/BFSG-Frage juristisch klären. Jede dieser Entscheidungen ändert Texte in bis zu acht Sprachen – sie gehören an den Anfang.

2 – Blocker beheben: Die objektiv korrigierbaren Blocker (B2, B4, B6, B7, B8) und die mechanischen Einzelfehler sind bereits im Branch agent/qa-corrections-2026-08-15 umgesetzt (drei Commits: Backport der REVIEWED-Korrekturen, Blocker-Fixes, Katalog-Korrekturen). Offen bleibt nur, was von den Entscheidungen aus Schritt 1 abhängt.

3 – Terminologie fixieren: Verbindliches Glossar je Sprache für die in Kapitel 5 benannten Felder (Strahlruder-Familie, Händler/Partner, Winsch/Winde, Anfrage-Begriff, Website-Benennung, SMARTDOCK-Durchkopplung) und einen Konsistenz-Pass über alle 747 Zeilen fahren. EN zusätzlich: UK-Varietät festschreiben.

4 – Typografie-Pass: Skriptgestützt je Sprache (FR: geschützte Leerzeichen und Apostrophe; ES/NL/NB/SV: eingeschleppte deutsche Anführungszeichen; alle: Ellipsen, Gedankenstriche, Zahlenspannen).

5 – Rückführung in den Code: Die REVIEWED-Fassung zur Source of Truth erklären, die 26 EN- / 37 FR- / 42 DE-Differenzen in die Wörterbücher übernehmen und erst danach die fünf neuen Sprachen implementieren. Die Platzhalter-Dateien translation_ES/NL.js ersetzen.

6 – Native Endkontrolle: Wie im Dokument vorgesehen: ein muttersprachlicher End-to-End-Durchgang pro Zielsprache in den echten Website-Routen, mit besonderem Blick auf App-UI-Zitate in den FAQ (die zitierten Labels müssen den tatsächlichen App-Strings entsprechen) und auf die skandinavische Kreuzkontamination (B8).

Fazit: Die vorgelegte Übersetzung ist eine überdurchschnittlich sorgfältige, menschlich redigierte Lokalisierung mit vollständiger Abdeckung und überzeugender maritimer Fachsprache – Gesamtnote 2,3. Mit den oben beschriebenen, klar umrissenen Korrekturen ist sie veröffentlichungsreif.
