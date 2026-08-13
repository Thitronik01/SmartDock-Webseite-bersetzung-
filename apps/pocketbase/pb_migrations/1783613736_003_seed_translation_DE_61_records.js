/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "o34dvai54umfotb";
    record0.set("key", "hero_title");
    record0.set("de", "Revolution\u00e4re Drohnensteuerung");
    record0.set("page", "HomePage");
    record0.set("section", "Hero");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "9khlt05bjfj0j4x";
    record1.set("key", "hero_subtitle");
    record1.set("de", "Pr\u00e4zision und Kontrolle f\u00fcr professionelle Drohnenoperationen");
    record1.set("page", "HomePage");
    record1.set("section", "Hero");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "7zru4vvb5owj3z0";
    record2.set("key", "hero_cta");
    record2.set("de", "Jetzt Konfigurieren");
    record2.set("page", "HomePage");
    record2.set("section", "Hero");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "aglgdfvofs96b9j";
    record3.set("key", "intro_heading");
    record3.set("de", "Warum unsere L\u00f6sung w\u00e4hlen?");
    record3.set("page", "HomePage");
    record3.set("section", "Intro");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "9ytoowl4hrst8u5";
    record4.set("key", "intro_text");
    record4.set("de", "Unsere fortschrittliche Drohnensteuerungstechnologie bietet unvergleichliche Pr\u00e4zision und Zuverl\u00e4ssigkeit f\u00fcr professionelle Anwendungen.");
    record4.set("page", "HomePage");
    record4.set("section", "Intro");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "4xgcr9p0nn4aq9f";
    record5.set("key", "app_heading");
    record5.set("de", "Intelligente Steuerungsanwendung");
    record5.set("page", "HomePage");
    record5.set("section", "App");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "07c16jhzdzybfuf";
    record6.set("key", "app_text");
    record6.set("de", "Benutzerfreundliche Schnittstelle mit erweiterten Funktionen f\u00fcr optimale Drohnenleistung.");
    record6.set("page", "HomePage");
    record6.set("section", "App");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "9wkwhzrdwyekfn6";
    record7.set("key", "modules_heading");
    record7.set("de", "Modulare Komponenten");
    record7.set("page", "HomePage");
    record7.set("section", "Modules");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "ea8u6hs4yenebgo";
    record8.set("key", "modules_text");
    record8.set("de", "W\u00e4hlen Sie aus einer Vielzahl von Modulen, um Ihre Drohne perfekt zu konfigurieren.");
    record8.set("page", "HomePage");
    record8.set("section", "Modules");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "vxab74p2oqu4slk";
    record9.set("key", "dealer_heading");
    record9.set("de", "Finden Sie einen H\u00e4ndler");
    record9.set("page", "HomePage");
    record9.set("section", "Dealer");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "jc6vzdrctapt0zd";
    record10.set("key", "dealer_text");
    record10.set("de", "Verbinden Sie sich mit autorisierten H\u00e4ndlern in Ihrer N\u00e4he.");
    record10.set("page", "HomePage");
    record10.set("section", "Dealer");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "64a6at8fvhzkmei";
    record11.set("key", "configurator_heading");
    record11.set("de", "Drohnen-Konfigurator");
    record11.set("page", "HomePage");
    record11.set("section", "Configurator");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "h92m0uxy2c5djgh";
    record12.set("key", "configurator_text");
    record12.set("de", "Erstellen Sie Ihre ma\u00dfgeschneiderte Drohnenkonfiguration mit unserem interaktiven Tool.");
    record12.set("page", "HomePage");
    record12.set("section", "Configurator");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "6c3w1ede5nx3cem";
    record13.set("key", "download_heading");
    record13.set("de", "Ressourcen Herunterladen");
    record13.set("page", "HomePage");
    record13.set("section", "Download");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "n49rylzt2z0wbfe";
    record14.set("key", "download_text");
    record14.set("de", "Zugriff auf Dokumentation, Handb\u00fccher und technische Spezifikationen.");
    record14.set("page", "HomePage");
    record14.set("section", "Download");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "jbt56fort2kth0k";
    record15.set("key", "contact_heading");
    record15.set("de", "Kontaktieren Sie uns");
    record15.set("page", "HomePage");
    record15.set("section", "Contact");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "fgdds9fupuor876";
    record16.set("key", "contact_text");
    record16.set("de", "Haben Sie Fragen? Unser Team steht Ihnen gerne zur Verf\u00fcgung.");
    record16.set("page", "HomePage");
    record16.set("section", "Contact");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "k4mlsuy7aoca1b2";
    record17.set("key", "product_title");
    record17.set("de", "Unsere Produkte");
    record17.set("page", "ProduktPage");
    record17.set("section", "Title");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "yxx28pwgoho635i";
    record18.set("key", "product_intro");
    record18.set("de", "Entdecken Sie unsere umfassende Produktpalette f\u00fcr professionelle Drohnenanwendungen.");
    record18.set("page", "ProduktPage");
    record18.set("section", "Intro");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "yw4j4j7ajd20k9e";
    record19.set("key", "product_features");
    record19.set("de", "Hochleistungs-Steuermodule mit erweiterten Funktionen und Zuverl\u00e4ssigkeit.");
    record19.set("page", "ProduktPage");
    record19.set("section", "Features");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "mzgc16gi0qvzqop";
    record20.set("key", "product_benefits");
    record20.set("de", "Verbesserte Pr\u00e4zision, reduzierte Ausfallzeiten und optimierte Leistung.");
    record20.set("page", "ProduktPage");
    record20.set("section", "Benefits");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "va9a88817t5melc";
    record21.set("key", "functions_title");
    record21.set("de", "Funktionen");
    record21.set("page", "FunktionenPage");
    record21.set("section", "Title");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "pl72ammd8mg2kmw";
    record22.set("key", "functions_intro");
    record22.set("de", "Erkunden Sie die umfangreichen Funktionen unserer Steuerungssysteme.");
    record22.set("page", "FunktionenPage");
    record22.set("section", "Intro");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "dshos4766i12127";
    record23.set("key", "functions_list_items");
    record23.set("de", "Echtzeit-Steuerung, GPS-Integration, Automatische Stabilisierung, Mehrkanal-Unterst\u00fctzung, Telemetrie-Erfassung, Notfall-R\u00fcckkehr");
    record23.set("page", "FunktionenPage");
    record23.set("section", "List");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "glonfqg1ah4r9dw";
    record24.set("key", "installation_title");
    record24.set("de", "Installation");
    record24.set("page", "InstallationPage");
    record24.set("section", "Title");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "ggkv8wfc1i34kee";
    record25.set("key", "installation_intro");
    record25.set("de", "Schritt-f\u00fcr-Schritt-Anleitung zur Installation unserer Steuerungssysteme.");
    record25.set("page", "InstallationPage");
    record25.set("section", "Intro");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.id = "9mcnwqh17hv235q";
    record26.set("key", "installation_steps");
    record26.set("de", "1. Hardware vorbereiten, 2. Firmware installieren, 3. Kalibrierung durchf\u00fchren, 4. Tests durchf\u00fchren, 5. Inbetriebnahme");
    record26.set("page", "InstallationPage");
    record26.set("section", "Steps");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.id = "397yh1cc6an4ze1";
    record27.set("key", "faq_title");
    record27.set("de", "H\u00e4ufig gestellte Fragen");
    record27.set("page", "FAQPage");
    record27.set("section", "Title");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.id = "6x1ytzuc9xx3xp9";
    record28.set("key", "faq_intro");
    record28.set("de", "Finden Sie Antworten auf h\u00e4ufig gestellte Fragen zu unseren Produkten und Dienstleistungen.");
    record28.set("page", "FAQPage");
    record28.set("section", "Intro");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.id = "n4xs6q5wy31pxf0";
    record29.set("key", "faq_items_questions_answers");
    record29.set("de", "Wie installiere ich das System? | Folgen Sie unserer Installationsanleitung. | Welche Drohnen werden unterst\u00fctzt? | Alle g\u00e4ngigen Drohnenmodelle werden unterst\u00fctzt. | Wie lange ist die Garantie? | Wir bieten eine 2-Jahres-Garantie.");
    record29.set("page", "FAQPage");
    record29.set("section", "Items");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.id = "itciwtcunggl8b8";
    record30.set("key", "configurator_title");
    record30.set("de", "Drohnen-Konfigurator");
    record30.set("page", "KonfiguratorPage");
    record30.set("section", "Title");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.id = "4fmf9lrj1gv7z9c";
    record31.set("key", "configurator_intro");
    record31.set("de", "Erstellen Sie Ihre perfekte Drohnenkonfiguration mit unserem interaktiven Konfigurator.");
    record31.set("page", "KonfiguratorPage");
    record31.set("section", "Intro");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.id = "utzec4ntsolk7q4";
    record32.set("key", "configurator_steps");
    record32.set("de", "1. Drohnentyp w\u00e4hlen, 2. Module ausw\u00e4hlen, 3. Optionen konfigurieren, 4. Preis berechnen, 5. Anfrage einreichen");
    record32.set("page", "KonfiguratorPage");
    record32.set("section", "Steps");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.id = "7vqjbi9mr1n08z1";
    record33.set("key", "dealer_title");
    record33.set("de", "H\u00e4ndlerfinder");
    record33.set("page", "DealerFinderPage");
    record33.set("section", "Title");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.id = "jy86c838zzy7q63";
    record34.set("key", "dealer_intro");
    record34.set("de", "Finden Sie autorisierte H\u00e4ndler in Ihrer N\u00e4he.");
    record34.set("page", "DealerFinderPage");
    record34.set("section", "Intro");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.id = "huatoslhy6cqdde";
    record35.set("key", "dealer_search");
    record35.set("de", "Geben Sie Ihr Land oder Ihre Stadt ein, um H\u00e4ndler zu finden.");
    record35.set("page", "DealerFinderPage");
    record35.set("section", "Search");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.id = "lbxrfa380pldqax";
    record36.set("key", "privacy_title");
    record36.set("de", "Datenschutzerkl\u00e4rung");
    record36.set("page", "PrivacyPage");
    record36.set("section", "Title");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.id = "ygsgvyffr4i3e0a";
    record37.set("key", "privacy_sections");
    record37.set("de", "Datenschutz | Wir sch\u00fctzen Ihre pers\u00f6nlichen Daten | Datenerfassung | Wir erfassen nur notwendige Daten | Datensicherheit | Ihre Daten sind sicher bei uns");
    record37.set("page", "PrivacyPage");
    record37.set("section", "Sections");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.id = "9lxfidtpytqv7lc";
    record38.set("key", "impressum_title");
    record38.set("de", "Impressum");
    record38.set("page", "ImpressumPage");
    record38.set("section", "Title");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.id = "u8vvqbtqblmnyrk";
    record39.set("key", "impressum_content");
    record39.set("de", "Unternehmensangaben | Kontaktinformationen | Rechtliche Hinweise | Haftungsausschluss");
    record39.set("page", "ImpressumPage");
    record39.set("section", "Content");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.id = "f2cziijy8psyonz";
    record40.set("key", "agb_title");
    record40.set("de", "Allgemeine Gesch\u00e4ftsbedingungen");
    record40.set("page", "AGBPage");
    record40.set("section", "Title");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.id = "ydkcdlm4tja0ajt";
    record41.set("key", "agb_sections");
    record41.set("de", "Geltungsbereich | Vertragsabschluss | Preise und Zahlungsbedingungen | Lieferung | Gew\u00e4hrleistung | Haftung");
    record41.set("page", "AGBPage");
    record41.set("section", "Sections");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.id = "inc616b3beg25mj";
    record42.set("key", "accessibility_title");
    record42.set("de", "Barrierefreiheit");
    record42.set("page", "AccessibilityPage");
    record42.set("section", "Title");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.id = "0joxeunouu3tvu8";
    record43.set("key", "accessibility_content");
    record43.set("de", "Unsere Website ist f\u00fcr alle Benutzer zug\u00e4nglich | Wir unterst\u00fctzen Bildschirmleser | Tastaturnavigation ist verf\u00fcgbar | Hoher Kontrast-Modus");
    record43.set("page", "AccessibilityPage");
    record43.set("section", "Content");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.id = "a0rt0hcwaaggyl0";
    record44.set("key", "widerruf_title");
    record44.set("de", "Widerrufsbelehrung");
    record44.set("page", "WiderrufsbelehrungPage");
    record44.set("section", "Title");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.id = "ycafib6wdcavx7f";
    record45.set("key", "widerruf_sections");
    record45.set("de", "Widerrufsrecht | Sie haben das Recht, Ihre Bestellung zu widerrufen | Widerrufsfristen | 14 Tage ab Erhalt | R\u00fcckgabeverfahren | Versand auf Kosten des K\u00e4ufers");
    record45.set("page", "WiderrufsbelehrungPage");
    record45.set("section", "Sections");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.id = "5todtg3h1sk9mua";
    record46.set("key", "versand_title");
    record46.set("de", "Versandbedingungen");
    record46.set("page", "VersandbedingungPage");
    record46.set("section", "Title");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.id = "rqsb84c472legzw";
    record47.set("key", "versand_sections");
    record47.set("de", "Versandarten | Wir bieten verschiedene Versandoptionen | Versandkosten | Kostenlos ab 100\u20ac | Lieferzeiten | 2-5 Werktage | Versandversicherung | Optional verf\u00fcgbar");
    record47.set("page", "VersandbedingungPage");
    record47.set("section", "Sections");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.id = "c3enk1k3213dz7n";
    record48.set("key", "nav_home");
    record48.set("de", "Startseite");
    record48.set("page", "Header");
    record48.set("section", "Navigation");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.id = "gabs01h4reo869b";
    record49.set("key", "nav_products");
    record49.set("de", "Produkte");
    record49.set("page", "Header");
    record49.set("section", "Navigation");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.id = "ihzivjrmfzypgim";
    record50.set("key", "nav_functions");
    record50.set("de", "Funktionen");
    record50.set("page", "Header");
    record50.set("section", "Navigation");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.id = "4tazxhl8he90wh5";
    record51.set("key", "nav_installation");
    record51.set("de", "Installation");
    record51.set("page", "Header");
    record51.set("section", "Navigation");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.id = "32rz2jhklveic8m";
    record52.set("key", "nav_faq");
    record52.set("de", "FAQ");
    record52.set("page", "Header");
    record52.set("section", "Navigation");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.id = "5p5f2q0k46ds8ix";
    record53.set("key", "nav_contact");
    record53.set("de", "Kontakt");
    record53.set("page", "Header");
    record53.set("section", "Navigation");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.id = "10n6p9fpeokh6vu";
    record54.set("key", "nav_configurator");
    record54.set("de", "Konfigurator");
    record54.set("page", "Header");
    record54.set("section", "Navigation");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.id = "lham8xpna2rl3q1";
    record55.set("key", "nav_dealer");
    record55.set("de", "H\u00e4ndler");
    record55.set("page", "Header");
    record55.set("section", "Navigation");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.id = "ui75val4tognqcu";
    record56.set("key", "nav_language");
    record56.set("de", "Sprache");
    record56.set("page", "Header");
    record56.set("section", "Navigation");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.id = "thwkwnmpjpmjs35";
    record57.set("key", "footer_copyright");
    record57.set("de", "\u00a9 2024 Drohnensteuerung GmbH. Alle Rechte vorbehalten.");
    record57.set("page", "Footer");
    record57.set("section", "Copyright");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.id = "s3is734amu7ty6r";
    record58.set("key", "footer_links");
    record58.set("de", "Links");
    record58.set("page", "Footer");
    record58.set("section", "Links");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.id = "3kbqijvx0ztu3ce";
    record59.set("key", "footer_contact");
    record59.set("de", "Kontakt");
    record59.set("page", "Footer");
    record59.set("section", "Contact");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.id = "zcrtidjw3bhmob3";
    record60.set("key", "footer_social");
    record60.set("de", "Folgen Sie uns auf: Facebook | Instagram | LinkedIn | Twitter");
    record60.set("page", "Footer");
    record60.set("section", "Social");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["zcrtidjw3bhmob3", "3kbqijvx0ztu3ce", "s3is734amu7ty6r", "thwkwnmpjpmjs35", "ui75val4tognqcu", "lham8xpna2rl3q1", "10n6p9fpeokh6vu", "5p5f2q0k46ds8ix", "32rz2jhklveic8m", "4tazxhl8he90wh5", "ihzivjrmfzypgim", "gabs01h4reo869b", "c3enk1k3213dz7n", "rqsb84c472legzw", "5todtg3h1sk9mua", "ycafib6wdcavx7f", "a0rt0hcwaaggyl0", "0joxeunouu3tvu8", "inc616b3beg25mj", "ydkcdlm4tja0ajt", "f2cziijy8psyonz", "u8vvqbtqblmnyrk", "9lxfidtpytqv7lc", "ygsgvyffr4i3e0a", "lbxrfa380pldqax", "huatoslhy6cqdde", "jy86c838zzy7q63", "7vqjbi9mr1n08z1", "utzec4ntsolk7q4", "4fmf9lrj1gv7z9c", "itciwtcunggl8b8", "n4xs6q5wy31pxf0", "6x1ytzuc9xx3xp9", "397yh1cc6an4ze1", "9mcnwqh17hv235q", "ggkv8wfc1i34kee", "glonfqg1ah4r9dw", "dshos4766i12127", "pl72ammd8mg2kmw", "va9a88817t5melc", "mzgc16gi0qvzqop", "yw4j4j7ajd20k9e", "yxx28pwgoho635i", "k4mlsuy7aoca1b2", "fgdds9fupuor876", "jbt56fort2kth0k", "n49rylzt2z0wbfe", "6c3w1ede5nx3cem", "h92m0uxy2c5djgh", "64a6at8fvhzkmei", "jc6vzdrctapt0zd", "vxab74p2oqu4slk", "ea8u6hs4yenebgo", "9wkwhzrdwyekfn6", "07c16jhzdzybfuf", "4xgcr9p0nn4aq9f", "9ytoowl4hrst8u5", "aglgdfvofs96b9j", "7zru4vvb5owj3z0", "9khlt05bjfj0j4x", "o34dvai54umfotb"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_DE", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
