/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "upf9qi5x3qhv0hi";
    record0.set("key", "agb_page_title");
    record0.set("de", "Allgemeine Gesch\u00e4ftsbedingungen & Kundeninformationen");
    record0.set("page", "agb");
    record0.set("section", "header");
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
    record1.id = "3l0vehg19lc3mm1";
    record1.set("key", "agb_page_subtitle");
    record1.set("de", "Rechtliche Rahmenbedingungen und wichtige Informationen f\u00fcr den Kauf, die Installation und die Nutzung unserer SMARTDOCK Produkte.");
    record1.set("page", "agb");
    record1.set("section", "header");
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
    record2.id = "0msqhyi6bj7jjrp";
    record2.set("key", "agb_part1_title");
    record2.set("de", "Teil I: Allgemeine Gesch\u00e4ftsbedingungen");
    record2.set("page", "agb");
    record2.set("section", "part1");
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
    record3.id = "nmiksuzitc7hiui";
    record3.set("key", "agb_section1_title");
    record3.set("de", "\u00a7 1 Grundlegende Bestimmungen");
    record3.set("page", "agb");
    record3.set("section", "section1");
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
    record4.id = "uqw8ppm4pe0ucf4";
    record4.set("key", "agb_section1_content");
    record4.set("de", "(1) Die nachstehenden Gesch\u00e4ftsbedingungen gelten f\u00fcr Vertr\u00e4ge, die Sie mit uns als Anbieter (Thitronik GmbH) \u00fcber die Internetseite smartdock.de oder im direkten Kontakt anbahnen und abschlie\u00dfen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen. (2) Verbraucher im Sinne der nachstehenden Regelungen ist jede nat\u00fcrliche Person, die ein Rechtsgesch\u00e4ft zu Zwecken abschlie\u00dft, die \u00fcberwiegend weder ihrer gewerblichen noch ihrer selbst\u00e4ndigen beruflichen T\u00e4tigkeit zugerechnet werden k\u00f6nnen. Unternehmer ist jede nat\u00fcrliche oder juristische Person oder eine rechtsf\u00e4hige Personengesellschaft, die bei Abschluss eines Rechtsgesch\u00e4fts in Aus\u00fcbung ihrer selbst\u00e4ndigen beruflichen oder gewerblichen T\u00e4tigkeit handelt.");
    record4.set("page", "agb");
    record4.set("section", "section1");
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
    record5.id = "pfb2rhxyny3yqzz";
    record5.set("key", "agb_section2_title");
    record5.set("de", "\u00a7 2 Anfragen \u00fcber die Internetseite und Zustandekommen eines Vertrages");
    record5.set("page", "agb");
    record5.set("section", "section2");
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
    record6.id = "4dxvyj427xphaif";
    record6.set("key", "agb_section2_content");
    record6.set("de", "(1) Gegenstand unserer Leistungen ist die Bereitstellung, Konfiguration und Installation des SMARTDOCK Systems sowie zugeh\u00f6riger Komponenten f\u00fcr Sportboote und Yachten. (2) Die Pr\u00e4sentation unserer Leistungen auf der Internetseite (insbesondere im Konfigurator) stellt kein rechtlich bindendes Angebot zum Abschluss eines Vertrages dar, sondern eine unverbindliche Aufforderung zur Abgabe einer Anfrage durch den Kunden. (3) Durch das Absenden des Konfigurator-Formulars oder \u00fcber unsere sonstigen Kontaktformulare geben Sie eine unverbindliche Anfrage an uns ab. Auf Basis dieser Anfrage pr\u00fcfen wir oder unsere zertifizierten Einbaupartner die technische Machbarkeit und erstellen Ihnen ein verbindliches Angebot. (4) Der Vertrag kommt erst zustande, wenn Sie dieses verbindliche Angebot ausdr\u00fccklich (z.B. per E-Mail, Fax oder Post) annehmen oder durch die Unterzeichnung eines separaten Installations- und Kaufvertrages mit einem unserer Einbaupartner.");
    record6.set("page", "agb");
    record6.set("section", "section2");
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
    record7.id = "5scd1lchk2fw40q";
    record7.set("key", "agb_section3_title");
    record7.set("de", "\u00a7 3 Inhalte der Internetseite");
    record7.set("page", "agb");
    record7.set("section", "section3");
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
    record8.id = "0ejyxwsxi5wanf0";
    record8.set("key", "agb_section3_content");
    record8.set("de", "(1) Wir \u00fcbernehmen keine Gew\u00e4hr f\u00fcr die Aktualit\u00e4t, Richtigkeit, Vollst\u00e4ndigkeit oder Qualit\u00e4t der bereitgestellten Informationen auf unserer Website. Haftungsanspr\u00fcche gegen uns, welche sich auf Sch\u00e4den materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grunds\u00e4tzlich ausgeschlossen, sofern unsererseits kein nachweislich vors\u00e4tzliches oder grob fahrl\u00e4ssiges Verschulden vorliegt. (2) Alle aus dem Konfigurator generierten Preissch\u00e4tzungen sind Richtwerte (UVP). Die tats\u00e4chlichen Kosten k\u00f6nnen je nach individueller Bootsbeschaffenheit und spezifischem Installationsaufwand abweichen.");
    record8.set("page", "agb");
    record8.set("section", "section3");
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
    record9.id = "kj1wtdyxqjfalr9";
    record9.set("key", "agb_section4_title");
    record9.set("de", "\u00a7 4 Preise, Zahlungsbedingungen, Lieferung und Installation");
    record9.set("page", "agb");
    record9.set("section", "section4");
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
    record10.id = "d5n9bq9r6k2lfkz";
    record10.set("key", "agb_section4_content");
    record10.set("de", "(1) Alle auf der Website genannten Preise stellen unverbindliche Preisempfehlungen in Euro dar und beinhalten die gesetzliche Mehrwertsteuer (sofern nicht anders als Netto-Preise f\u00fcr Unternehmer ausgewiesen). (2) Die Zahlungsbedingungen sowie Modalit\u00e4ten zur Lieferung und Installation werden im jeweiligen verbindlichen Angebot detailliert geregelt. In der Regel ist die Installation durch geschultes Fachpersonal unserer zertifizierten H\u00e4ndler zwingend vorgeschrieben, um eine fehlerfreie Funktion in sicherheitsrelevanten maritimen Umgebungen zu gew\u00e4hrleisten.");
    record10.set("page", "agb");
    record10.set("section", "section4");
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
    record11.id = "erq6lcw8yth84ji";
    record11.set("key", "agb_section5_title");
    record11.set("de", "\u00a7 5 Gew\u00e4hrleistung");
    record11.set("page", "agb");
    record11.set("section", "section5");
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
    record12.id = "s7desth463sxqqk";
    record12.set("key", "agb_section5_content");
    record12.set("de", "(1) Es bestehen die gesetzlichen M\u00e4ngelhaftungsrechte. (2) Bei Unternehmern gilt abweichend: Als Beschaffenheit der Ware gelten nur unsere eigenen Angaben und die Produktbeschreibung des Herstellers als vereinbart, nicht jedoch sonstige Werbung, \u00f6ffentliche Anpreisungen und \u00c4u\u00dferungen des Herstellers. Die Gew\u00e4hrleistungsfrist betr\u00e4gt f\u00fcr Unternehmer ein Jahr ab Ablieferung der Ware. (3) Wir haften nicht f\u00fcr Sch\u00e4den, die auf eine unsachgem\u00e4\u00dfe Selbstinstallation oder auf Eingriffe durch nicht von uns autorisiertes Personal zur\u00fcckzuf\u00fchren sind. Das SMARTDOCK System greift tief in die Steuerungselektronik des Bootes ein; eine fehlerhafte Montage kann erhebliche Folgesch\u00e4den verursachen.");
    record12.set("page", "agb");
    record12.set("section", "section5");
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
    record13.id = "sjron8otrxywpin";
    record13.set("key", "agb_section6_title");
    record13.set("de", "\u00a7 6 Rechtswahl, Erf\u00fcllungsort, Gerichtsstand");
    record13.set("page", "agb");
    record13.set("section", "section6");
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
    record14.id = "6dp5n8ht6fyo2tl";
    record14.set("key", "agb_section6_content");
    record14.set("de", "(1) Es gilt deutsches Recht. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gew\u00f6hnlichen Aufenthaltes des Verbrauchers gew\u00e4hrte Schutz nicht entzogen wird (G\u00fcnstigkeitsprinzip). (2) Erf\u00fcllungsort f\u00fcr alle Leistungen aus den mit uns bestehenden Gesch\u00e4ftsbeziehungen sowie Gerichtsstand ist unser Sitz (Eckernf\u00f6rde), soweit Sie nicht Verbraucher, sondern Kaufmann, juristische Person des \u00f6ffentlichen Rechts oder \u00f6ffentlich-rechtliches Sonderverm\u00f6gen sind. (3) Die Bestimmungen des UN-Kaufrechts finden ausdr\u00fccklich keine Anwendung.");
    record14.set("page", "agb");
    record14.set("section", "section6");
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
    record15.id = "dos0cjlzp992d4f";
    record15.set("key", "agb_part2_title");
    record15.set("de", "Teil II: Kundeninformationen");
    record15.set("page", "agb");
    record15.set("section", "part2");
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
    record16.id = "3hnvheqfefzdldk";
    record16.set("key", "agb_customer_info_1_title");
    record16.set("de", "1. Identit\u00e4t des Anbieters");
    record16.set("page", "agb");
    record16.set("section", "customer_info_1");
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
    record17.id = "x76l5wpk3f2wypt";
    record17.set("key", "agb_customer_info_1_intro");
    record17.set("de", "Verantwortlich f\u00fcr den Inhalt dieser Website und Ihr Vertragspartner im Falle eines direkten Vertragsschlusses ist:");
    record17.set("page", "agb");
    record17.set("section", "customer_info_1");
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
    record18.id = "sjikqxjg4che7pi";
    record18.set("key", "agb_customer_info_1_country");
    record18.set("de", "Deutschland");
    record18.set("page", "agb");
    record18.set("section", "customer_info_1");
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
    record19.id = "6xvth914uuxuj6y";
    record19.set("key", "agb_customer_info_1_phone");
    record19.set("de", "Telefon:");
    record19.set("page", "agb");
    record19.set("section", "customer_info_1");
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
    record20.id = "asu8l181aapqkvd";
    record20.set("key", "agb_customer_info_2_title");
    record20.set("de", "2. Informationen zur Anfrage und zum Vertragsschluss");
    record20.set("page", "agb");
    record20.set("section", "customer_info_2");
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
    record21.id = "qfcyvpup4g418f3";
    record21.set("key", "agb_customer_info_2_content");
    record21.set("de", "Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die Korrekturm\u00f6glichkeiten erfolgen nach Ma\u00dfgabe der Regelungen Zustandekommen eines Vertrages (vgl. \u00a7 2 der Allgemeinen Gesch\u00e4ftsbedingungen - Teil I).");
    record21.set("page", "agb");
    record21.set("section", "customer_info_2");
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
    record22.id = "z9jyuf0qi419cw5";
    record22.set("key", "agb_customer_info_3_title");
    record22.set("de", "3. Vertragssprache und Speicherung der Anfrage");
    record22.set("page", "agb");
    record22.set("section", "customer_info_3");
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
    record23.id = "ga0kbeip9stlnkq";
    record23.set("key", "agb_customer_info_3_content");
    record23.set("de", "(1) Die Vertragssprache ist Deutsch. (2) Die Daten Ihrer Anfrage werden von uns im System gespeichert und an den zust\u00e4ndigen Installationspartner weitergeleitet. Sie erhalten eine Zusammenfassung Ihrer Konfiguration und Anfrage an die von Ihnen angegebene E-Mail-Adresse.");
    record23.set("page", "agb");
    record23.set("section", "customer_info_3");
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
    record24.id = "zuaznp6xnzgohsa";
    record24.set("key", "agb_customer_info_4_title");
    record24.set("de", "4. Wesentliche Merkmale der Ware oder Dienstleistung");
    record24.set("page", "agb");
    record24.set("section", "customer_info_4");
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
    record25.id = "9erctrfo4f2wc4u";
    record25.set("key", "agb_customer_info_4_content");
    record25.set("de", "Die wesentlichen Merkmale des SMARTDOCK Systems (Assistenzsystem f\u00fcr Boots-Man\u00f6ver, Joystick-Steuerung) und erg\u00e4nzender Leistungen finden sich in den jeweiligen Produktbeschreibungen und Spezifikationen auf unserer Internetseite.");
    record25.set("page", "agb");
    record25.set("section", "customer_info_4");
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
    record26.id = "p0kue8cakgs2r40";
    record26.set("key", "agb_customer_info_5_title");
    record26.set("de", "5. Preise und Zahlungsmodalit\u00e4ten");
    record26.set("page", "agb");
    record26.set("section", "customer_info_5");
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
    record27.id = "lqjqwuwhnusk5gf";
    record27.set("key", "agb_customer_info_5_content");
    record27.set("de", "Die auf unserer Website ausgegebenen Konfigurationspreise sind Sch\u00e4tzwerte. Der finale Preis und die akzeptierten Zahlungsmittel ergeben sich aus dem individuellen Angebot, das Ihnen oder Ihrem H\u00e4ndler nach Pr\u00fcfung Ihrer Bootsdaten \u00fcbermittelt wird.");
    record27.set("page", "agb");
    record27.set("section", "customer_info_5");
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
    record28.id = "njetbuobsnpunfl";
    record28.set("key", "agb_customer_info_6_title");
    record28.set("de", "6. Lieferung, Installation und Leistungserbringung");
    record28.set("page", "agb");
    record28.set("section", "customer_info_6");
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
    record29.id = "dqilnx96ayd7rqr";
    record29.set("key", "agb_customer_info_6_content");
    record29.set("de", "Die Lieferbedingungen, der Liefertermin sowie etwaige Lieferbeschr\u00e4nkungen oder Termine f\u00fcr die Installation an Ihrem Boot werden individuell im Rahmen des Angebotsverfahrens mit unseren zertifizierten H\u00e4ndlern oder direkt mit uns vereinbart.");
    record29.set("page", "agb");
    record29.set("section", "customer_info_6");
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
    record30.id = "iqvn7uq2swvtnwa";
    record30.set("key", "agb_customer_info_7_title");
    record30.set("de", "7. Gesetzliches M\u00e4ngelhaftungsrecht");
    record30.set("page", "agb");
    record30.set("section", "customer_info_7");
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
    record31.id = "rj3g41u3sxbvbv3";
    record31.set("key", "agb_customer_info_7_content");
    record31.set("de", "Die M\u00e4ngelhaftung f\u00fcr unsere Waren richtet sich nach der Regelung Gew\u00e4hrleistung in unseren Allgemeinen Gesch\u00e4ftsbedingungen (Teil I).");
    record31.set("page", "agb");
    record31.set("section", "customer_info_7");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["rj3g41u3sxbvbv3", "iqvn7uq2swvtnwa", "dqilnx96ayd7rqr", "njetbuobsnpunfl", "lqjqwuwhnusk5gf", "p0kue8cakgs2r40", "9erctrfo4f2wc4u", "zuaznp6xnzgohsa", "ga0kbeip9stlnkq", "z9jyuf0qi419cw5", "qfcyvpup4g418f3", "asu8l181aapqkvd", "6xvth914uuxuj6y", "sjikqxjg4che7pi", "x76l5wpk3f2wypt", "3hnvheqfefzdldk", "dos0cjlzp992d4f", "6dp5n8ht6fyo2tl", "sjron8otrxywpin", "s7desth463sxqqk", "erq6lcw8yth84ji", "d5n9bq9r6k2lfkz", "kj1wtdyxqjfalr9", "0ejyxwsxi5wanf0", "5scd1lchk2fw40q", "4dxvyj427xphaif", "pfb2rhxyny3yqzz", "uqw8ppm4pe0ucf4", "nmiksuzitc7hiui", "0msqhyi6bj7jjrp", "3l0vehg19lc3mm1", "upf9qi5x3qhv0hi"];
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
