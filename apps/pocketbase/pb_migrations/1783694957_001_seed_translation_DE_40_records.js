/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "ichzno09jukpeiq";
    record0.set("key", "widerrufsbelehrung_title");
    record0.set("de", "Widerrufsbelehrung");
    record0.set("page", "widerrufsbelehrung");
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
    record1.id = "8vmjl92522gsjr7";
    record1.set("key", "widerrufsbelehrung_subtitle");
    record1.set("de", "Informationen zu Ihrem gesetzlichen Widerrufsrecht, den Fristen, den Folgen eines Widerrufs und das Muster-Widerrufsformular.");
    record1.set("page", "widerrufsbelehrung");
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
    record2.id = "tvwnngpqkiek0j6";
    record2.set("key", "section1_title");
    record2.set("de", "1. Widerrufsrecht f\u00fcr Verbraucher");
    record2.set("page", "widerrufsbelehrung");
    record2.set("section", "section1");
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
    record3.id = "3tfr5o1d3mo5091";
    record3.set("key", "section1_content");
    record3.set("de", "Verbraucher ist jede nat\u00fcrliche Person, die ein Rechtsgesch\u00e4ft zu Zwecken abschlie\u00dft, die \u00fcberwiegend weder ihrer gewerblichen noch ihrer selbst\u00e4ndigen beruflichen T\u00e4tigkeit zugerechnet werden k\u00f6nnen. F\u00fcr Verbraucher gilt das nachfolgend beschriebene gesetzliche Widerrufsrecht.");
    record3.set("page", "widerrufsbelehrung");
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
    record4.id = "pqlkni9builvjn5";
    record4.set("key", "section2_title");
    record4.set("de", "2. Widerrufsrecht");
    record4.set("page", "widerrufsbelehrung");
    record4.set("section", "section2");
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
    record5.id = "norvccw3itm26ct";
    record5.set("key", "section2_content");
    record5.set("de", "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gr\u00fcnden diesen Vertrag zu widerrufen. Die Widerrufsfrist betr\u00e4gt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Bef\u00f6rderer ist, die Waren in Besitz genommen haben bzw. hat, sofern Sie eine oder mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben und diese einheitlich geliefert wird bzw. werden; an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Bef\u00f6rderer ist, die letzte Ware in Besitz genommen haben bzw. hat, sofern Sie mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben und diese getrennt geliefert werden.");
    record5.set("page", "widerrufsbelehrung");
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
    record6.id = "dkakhkujodbw03x";
    record6.set("key", "section3_title");
    record6.set("de", "3. Aus\u00fcbung des Widerrufsrechts");
    record6.set("page", "widerrufsbelehrung");
    record6.set("section", "section3");
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
    record7.id = "qf8rntmn10bwmwt";
    record7.set("key", "section3_content");
    record7.set("de", "Um Ihr Widerrufsrecht auszu\u00fcben, m\u00fcssen Sie uns mittels einer eindeutigen Erkl\u00e4rung (z. B. ein mit der Post versandter Brief oder eine E-Mail) \u00fcber Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie k\u00f6nnen daf\u00fcr das beigef\u00fcgte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.");
    record7.set("page", "widerrufsbelehrung");
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
    record8.id = "xmn49h2jsux47re";
    record8.set("key", "section3_country");
    record8.set("de", "Deutschland");
    record8.set("page", "widerrufsbelehrung");
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
    record9.id = "crrtwxi8xd8p6os";
    record9.set("key", "section3_phone_label");
    record9.set("de", "Telefon:");
    record9.set("page", "widerrufsbelehrung");
    record9.set("section", "section3");
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
    record10.id = "inesralt241z7r9";
    record10.set("key", "section3_deadline");
    record10.set("de", "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung \u00fcber die Aus\u00fcbung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.");
    record10.set("page", "widerrufsbelehrung");
    record10.set("section", "section3");
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
    record11.id = "gpq3rw48m8stko9";
    record11.set("key", "section4_title");
    record11.set("de", "4. Folgen des Widerrufs");
    record11.set("page", "widerrufsbelehrung");
    record11.set("section", "section4");
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
    record12.id = "mtwotg8xvgxwz2g";
    record12.set("key", "section4_content");
    record12.set("de", "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschlie\u00dflich der Lieferkosten (mit Ausnahme der zus\u00e4tzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, g\u00fcnstigste Standardlieferung gew\u00e4hlt haben), unverz\u00fcglich und sp\u00e4testens binnen vierzehn Tagen ab dem Tag zur\u00fcckzuzahlen, an dem die Mitteilung \u00fcber Ihren Widerruf dieses Vertrags bei uns eingegangen ist. F\u00fcr diese R\u00fcckzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der urspr\u00fcnglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdr\u00fccklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser R\u00fcckzahlung Entgelte berechnet. Wir k\u00f6nnen die R\u00fcckzahlung verweigern, bis wir die Waren wieder zur\u00fcckerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zur\u00fcckgesandt haben, je nachdem, welches der fr\u00fchere Zeitpunkt ist.");
    record12.set("page", "widerrufsbelehrung");
    record12.set("section", "section4");
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
    record13.id = "s13f941hrjzyac1";
    record13.set("key", "section5_title");
    record13.set("de", "5. R\u00fccksendung der Waren");
    record13.set("page", "widerrufsbelehrung");
    record13.set("section", "section5");
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
    record14.id = "e35347zuafs9pyj";
    record14.set("key", "section5_content");
    record14.set("de", "Sie haben die Waren unverz\u00fcglich und in jedem Fall sp\u00e4testens binnen vierzehn Tagen ab dem Tag, an dem Sie uns \u00fcber den Widerruf dieses Vertrags unterrichten, an uns zur\u00fcckzusenden oder zu \u00fcbergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.");
    record14.set("page", "widerrufsbelehrung");
    record14.set("section", "section5");
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
    record15.id = "2td8cxrcz0jkhja";
    record15.set("key", "section5_costs");
    record15.set("de", "Sie tragen die unmittelbaren Kosten der R\u00fccksendung der Waren.");
    record15.set("page", "widerrufsbelehrung");
    record15.set("section", "section5");
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
    record16.id = "mnwo30dyb9ltffz";
    record16.set("key", "section6_title");
    record16.set("de", "6. Wertersatz");
    record16.set("page", "widerrufsbelehrung");
    record16.set("section", "section6");
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
    record17.id = "d48qedyjyenhzj2";
    record17.set("key", "section6_content");
    record17.set("de", "Sie m\u00fcssen f\u00fcr einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Pr\u00fcfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zur\u00fcckzuf\u00fchren ist.");
    record17.set("page", "widerrufsbelehrung");
    record17.set("section", "section6");
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
    record18.id = "2afvdg6oid0ty9o";
    record18.set("key", "section7_title");
    record18.set("de", "7. Ausschluss des Widerrufsrechts");
    record18.set("page", "widerrufsbelehrung");
    record18.set("section", "section7");
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
    record19.id = "6nod8ggl4v9yidg";
    record19.set("key", "section7_content");
    record19.set("de", "Das Widerrufsrecht besteht nicht bei Vertr\u00e4gen: zur Lieferung von Waren, die nicht vorgefertigt sind und f\u00fcr deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher ma\u00dfgeblich ist oder die eindeutig auf die pers\u00f6nlichen Bed\u00fcrfnisse des Verbrauchers zugeschnitten sind; zur Lieferung von Waren, wenn diese nach der Lieferung auf Grund ihrer Beschaffenheit untrennbar mit anderen G\u00fctern vermischt wurden (z.B. nach festem Einbau in ein Boot); zur Lieferung von Ton- oder Videoaufnahmen oder Computersoftware in einer versiegelten Packung, wenn die Versiegelung nach der Lieferung entfernt wurde.");
    record19.set("page", "widerrufsbelehrung");
    record19.set("section", "section7");
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
    record20.id = "75tphxaoxt82xdd";
    record20.set("key", "section8_title");
    record20.set("de", "8. Muster-Widerrufsformular");
    record20.set("page", "widerrufsbelehrung");
    record20.set("section", "section8");
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
    record21.id = "7ua1g58mlnn7p5s";
    record21.set("key", "section8_intro");
    record21.set("de", "(Wenn Sie den Vertrag widerrufen wollen, dann f\u00fcllen Sie bitte dieses Formular aus und senden Sie es zur\u00fcck.)");
    record21.set("page", "widerrufsbelehrung");
    record21.set("section", "section8");
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
    record22.id = "s7py4ddsgrd942g";
    record22.set("key", "section8_print_button");
    record22.set("de", "Drucken");
    record22.set("page", "widerrufsbelehrung");
    record22.set("section", "section8");
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
    record23.id = "ag1avxzejretplt";
    record23.set("key", "section8_address");
    record23.set("de", "An: Thitronik GmbH, Finkenweg 11\u201315, 24340 Eckernf\u00f6rde, Deutschland, E-Mail: smartdock@thitronik.de");
    record23.set("page", "widerrufsbelehrung");
    record23.set("section", "section8");
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
    record24.id = "iwrovuglama80qh";
    record24.set("key", "section8_form_intro");
    record24.set("de", "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag \u00fcber den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*):");
    record24.set("page", "widerrufsbelehrung");
    record24.set("section", "section8");
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
    record25.id = "hunwdttj8rqqh20";
    record25.set("key", "section8_goods_label");
    record25.set("de", "Genaue Bezeichnung der Waren / Dienstleistungen");
    record25.set("page", "widerrufsbelehrung");
    record25.set("section", "section8");
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
    record26.id = "itms2ybdsujo9nf";
    record26.set("key", "section8_goods_placeholder");
    record26.set("de", "Bitte tragen Sie hier die Artikelnummern oder Bezeichnungen ein...");
    record26.set("page", "widerrufsbelehrung");
    record26.set("section", "section8");
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
    record27.id = "wdgnf3l8lipvvm0";
    record27.set("key", "section8_order_date_label");
    record27.set("de", "Bestellt am (*)");
    record27.set("page", "widerrufsbelehrung");
    record27.set("section", "section8");
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
    record28.id = "smz2c8z596znjfk";
    record28.set("key", "section8_date_format");
    record28.set("de", "tt.mm.jjjj");
    record28.set("page", "widerrufsbelehrung");
    record28.set("section", "section8");
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
    record29.id = "f36i7bh3wzr2mwv";
    record29.set("key", "section8_received_date_label");
    record29.set("de", "Erhalten am (*)");
    record29.set("page", "widerrufsbelehrung");
    record29.set("section", "section8");
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
    record30.id = "gbxmi12uiv2ibh6";
    record30.set("key", "section8_consumer_name_label");
    record30.set("de", "Name des/der Verbraucher(s)");
    record30.set("page", "widerrufsbelehrung");
    record30.set("section", "section8");
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
    record31.id = "kok0cy6a05abebc";
    record31.set("key", "section8_consumer_name_placeholder");
    record31.set("de", "Vor- und Nachname");
    record31.set("page", "widerrufsbelehrung");
    record31.set("section", "section8");
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
    record32.id = "wsbbcrdtnfpk9kf";
    record32.set("key", "section8_address_label");
    record32.set("de", "Anschrift des/der Verbraucher(s)");
    record32.set("page", "widerrufsbelehrung");
    record32.set("section", "section8");
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
    record33.id = "otgt7sowpww2vz2";
    record33.set("key", "section8_street_placeholder");
    record33.set("de", "Stra\u00dfe, Hausnummer");
    record33.set("page", "widerrufsbelehrung");
    record33.set("section", "section8");
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
    record34.id = "md3fpn6yis07x6d";
    record34.set("key", "section8_postal_code_label");
    record34.set("de", "PLZ");
    record34.set("page", "widerrufsbelehrung");
    record34.set("section", "section8");
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
    record35.id = "m0wkpd1uuet351x";
    record35.set("key", "section8_city_label");
    record35.set("de", "Ort");
    record35.set("page", "widerrufsbelehrung");
    record35.set("section", "section8");
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
    record36.id = "k8ye5vg0ktx2hbm";
    record36.set("key", "section8_date_label");
    record36.set("de", "Datum");
    record36.set("page", "widerrufsbelehrung");
    record36.set("section", "section8");
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
    record37.id = "uyi1iv5s9670q5d";
    record37.set("key", "section8_signature_label");
    record37.set("de", "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)");
    record37.set("page", "widerrufsbelehrung");
    record37.set("section", "section8");
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
    record38.id = "xon0gcn2rw32wb6";
    record38.set("key", "section8_note");
    record38.set("de", "(*) Unzutreffendes streichen.");
    record38.set("page", "widerrufsbelehrung");
    record38.set("section", "section8");
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
    record39.id = "jxrx7m7fs9au5x5";
    record39.set("key", "section8_print_form_button");
    record39.set("de", "Formular ausdrucken");
    record39.set("page", "widerrufsbelehrung");
    record39.set("section", "section8");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["jxrx7m7fs9au5x5", "xon0gcn2rw32wb6", "uyi1iv5s9670q5d", "k8ye5vg0ktx2hbm", "m0wkpd1uuet351x", "md3fpn6yis07x6d", "otgt7sowpww2vz2", "wsbbcrdtnfpk9kf", "kok0cy6a05abebc", "gbxmi12uiv2ibh6", "f36i7bh3wzr2mwv", "smz2c8z596znjfk", "wdgnf3l8lipvvm0", "itms2ybdsujo9nf", "hunwdttj8rqqh20", "iwrovuglama80qh", "ag1avxzejretplt", "s7py4ddsgrd942g", "7ua1g58mlnn7p5s", "75tphxaoxt82xdd", "6nod8ggl4v9yidg", "2afvdg6oid0ty9o", "d48qedyjyenhzj2", "mnwo30dyb9ltffz", "2td8cxrcz0jkhja", "e35347zuafs9pyj", "s13f941hrjzyac1", "mtwotg8xvgxwz2g", "gpq3rw48m8stko9", "inesralt241z7r9", "crrtwxi8xd8p6os", "xmn49h2jsux47re", "qf8rntmn10bwmwt", "dkakhkujodbw03x", "norvccw3itm26ct", "pqlkni9builvjn5", "3tfr5o1d3mo5091", "tvwnngpqkiek0j6", "8vmjl92522gsjr7", "ichzno09jukpeiq"];
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
