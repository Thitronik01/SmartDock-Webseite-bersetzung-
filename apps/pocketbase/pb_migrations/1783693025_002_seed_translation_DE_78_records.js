/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "tf2hunwbz4oh4ao";
    record0.set("key", "installation_page_title");
    record0.set("de", "Installationsanleitungen");
    record0.set("page", "installation");
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
    record1.id = "muzxz54zaitza5o";
    record1.set("key", "installation_page_subtitle");
    record1.set("de", "Hier finden Sie detaillierte Schritt-f\u00fcr-Schritt Anleitungen und technische Dokumentationen f\u00fcr die Installation unserer SMARTDOCK Module.");
    record1.set("page", "installation");
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
    record2.id = "qi311ipegudhteg";
    record2.set("key", "ecu_installation_section");
    record2.set("de", "ECU - Installation");
    record2.set("page", "installation");
    record2.set("section", "ecu_section");
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
    record3.id = "a8oekmx9txmsw1q";
    record3.set("key", "installation_1_title");
    record3.set("de", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)");
    record3.set("page", "installation");
    record3.set("section", "installation_1");
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
    record4.id = "4n5a1mw1fd3d04v";
    record4.set("key", "installation_1_step1_title");
    record4.set("de", "Vorbereitung der Installation");
    record4.set("page", "installation");
    record4.set("section", "installation_1");
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
    record5.id = "o4mk46dltxfzyah";
    record5.set("key", "installation_1_step1_text");
    record5.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record5.set("page", "installation");
    record5.set("section", "installation_1");
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
    record6.id = "8u6no8u8k853162";
    record6.set("key", "installation_1_step2_title");
    record6.set("de", "Verkabelung des Joysticks freilegen");
    record6.set("page", "installation");
    record6.set("section", "installation_1");
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
    record7.id = "xjai6uqj124zjdf";
    record7.set("key", "installation_1_step2_text");
    record7.set("de", "Lege die Verkabelung des Joysticks frei; diese befindet sich im Steuerstand unterhalb des Joysticks.");
    record7.set("page", "installation");
    record7.set("section", "installation_1");
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
    record8.id = "c4ez6ewbyl61jyo";
    record8.set("key", "installation_1_step3_title");
    record8.set("de", "Stecker trennen");
    record8.set("page", "installation");
    record8.set("section", "installation_1");
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
    record9.id = "z54hes2lelho4sf";
    record9.set("key", "installation_1_step3_text");
    record9.set("de", "L\u00f6se den Stecker, indem du die Lasche an der Buchse eindr\u00fcckst und den Stecker vorsichtig herausziehst.");
    record9.set("page", "installation");
    record9.set("section", "installation_1");
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
    record10.id = "fojlp3z7riq9f2y";
    record10.set("key", "installation_1_step4_title");
    record10.set("de", "ECU dazwischenklemmen");
    record10.set("page", "installation");
    record10.set("section", "installation_1");
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
    record11.id = "o99fqr2pxyels8r";
    record11.set("key", "installation_1_step4_text");
    record11.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber einen Stecker und eine Buchse; diese sind jeweils mit dem passenden Gegenst\u00fcck des Joysticks zu verbinden. Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record11.set("page", "installation");
    record11.set("section", "installation_1");
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
    record12.id = "p55o9sywin02rro";
    record12.set("key", "installation_1_step5_title");
    record12.set("de", "App-Installation");
    record12.set("page", "installation");
    record12.set("section", "installation_1");
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
    record13.id = "6ingpmpas334dtk";
    record13.set("key", "installation_1_step5_text");
    record13.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record13.set("page", "installation");
    record13.set("section", "installation_1");
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
    record14.id = "bpvetabrramxmyy";
    record14.set("key", "installation_1_step6_title");
    record14.set("de", "Kopplungsmodus der ECU starten");
    record14.set("page", "installation");
    record14.set("section", "installation_1");
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
    record15.id = "8r2hjxnswjqpin9";
    record15.set("key", "installation_1_step6_text");
    record15.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record15.set("page", "installation");
    record15.set("section", "installation_1");
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
    record16.id = "lpba4w805n3b7pr";
    record16.set("key", "installation_1_step7_title");
    record16.set("de", "ECU und App koppeln");
    record16.set("page", "installation");
    record16.set("section", "installation_1");
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
    record17.id = "yugzfxam54ox5f9";
    record17.set("key", "installation_1_step7_text");
    record17.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record17.set("page", "installation");
    record17.set("section", "installation_1");
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
    record18.id = "fmo4byqvc539jpb";
    record18.set("key", "installation_2_title");
    record18.set("de", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C");
    record18.set("page", "installation");
    record18.set("section", "installation_2");
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
    record19.id = "z96fhk72hyq4mrt";
    record19.set("key", "installation_2_step1_title");
    record19.set("de", "Installation vorbereiten");
    record19.set("page", "installation");
    record19.set("section", "installation_2");
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
    record20.id = "909xmjosvrtrwvq";
    record20.set("key", "installation_2_step1_text");
    record20.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record20.set("page", "installation");
    record20.set("section", "installation_2");
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
    record21.id = "ibku3gtysrk145b";
    record21.set("key", "installation_2_step2_title");
    record21.set("de", "Verkabelung des Joysticks freilegen");
    record21.set("page", "installation");
    record21.set("section", "installation_2");
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
    record22.id = "d3b3r9ulsioyhes";
    record22.set("key", "installation_2_step2_text");
    record22.set("de", "Lege die Verkabelung des Joysticks frei; diese befindet sich meistens im Steuerstand in der N\u00e4he des Joysticks.");
    record22.set("page", "installation");
    record22.set("section", "installation_2");
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
    record23.id = "3lce8bnmzubbckf";
    record23.set("key", "installation_2_step3_title");
    record23.set("de", "Stecker trennen");
    record23.set("page", "installation");
    record23.set("section", "installation_2");
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
    record24.id = "1qt8rrqq5n2xuyc";
    record24.set("key", "installation_2_step3_text");
    record24.set("de", "L\u00f6se die Stecker, indem du den schwarzen Rastnasenhebel dr\u00fcckst und den Stecker herausziehst. ACHTUNG: Der eine Stecker ist f\u00fcr Backbord (rote Markierung), der andere f\u00fcr Steuerbord (gr\u00fcne Markierung). Die Stecker d\u00fcrfen nicht vertauscht werden!");
    record24.set("page", "installation");
    record24.set("section", "installation_2");
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
    record25.id = "sg5k6daynklte98";
    record25.set("key", "installation_2_step4_title");
    record25.set("de", "ECU dazwischenklemmen");
    record25.set("page", "installation");
    record25.set("section", "installation_2");
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
    record26.id = "arlpnvd2av0uvtv";
    record26.set("key", "installation_2_step4_text");
    record26.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber zwei Stecker und zwei Buchsen. Auch hier ist ein Stecker rot markiert (Backbord) und einer gr\u00fcn (Steuerbord). Verbinde den rot gekennzeichneten Stecker mit dem roten Gegenst\u00fcck der Joystick-Verkabelung und den gr\u00fcn gekennzeichneten Stecker mit dem gr\u00fcnen Gegenst\u00fcck der Joystick-Verkabelung. Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record26.set("page", "installation");
    record26.set("section", "installation_2");
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
    record27.id = "mu5rv5jdrkcpwhb";
    record27.set("key", "installation_2_step5_title");
    record27.set("de", "App installieren");
    record27.set("page", "installation");
    record27.set("section", "installation_2");
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
    record28.id = "taoin5lsrgzc8fh";
    record28.set("key", "installation_2_step5_text");
    record28.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record28.set("page", "installation");
    record28.set("section", "installation_2");
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
    record29.id = "x5exol11972i1gz";
    record29.set("key", "installation_2_step6_title");
    record29.set("de", "Kopplungsmodus der ECU starten");
    record29.set("page", "installation");
    record29.set("section", "installation_2");
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
    record30.id = "eeyub1u2jqjr3hl";
    record30.set("key", "installation_2_step6_text");
    record30.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record30.set("page", "installation");
    record30.set("section", "installation_2");
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
    record31.id = "qy2ev4thhniebeh";
    record31.set("key", "installation_2_step7_title");
    record31.set("de", "ECU und App koppeln");
    record31.set("page", "installation");
    record31.set("section", "installation_2");
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
    record32.id = "7ht4wxkwvssnvp1";
    record32.set("key", "installation_2_step7_text");
    record32.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record32.set("page", "installation");
    record32.set("section", "installation_2");
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
    record33.id = "9dveunxchsjwb01";
    record33.set("key", "installation_3_title");
    record33.set("de", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0");
    record33.set("page", "installation");
    record33.set("section", "installation_3");
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
    record34.id = "o3tmvl6c9frx7sc";
    record34.set("key", "installation_3_step1_title");
    record34.set("de", "Installation vorbereiten");
    record34.set("page", "installation");
    record34.set("section", "installation_3");
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
    record35.id = "zqfl9detx7o6zf2";
    record35.set("key", "installation_3_step1_text");
    record35.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record35.set("page", "installation");
    record35.set("section", "installation_3");
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
    record36.id = "p1vgx7lfz81jrhj";
    record36.set("key", "installation_3_step2_title");
    record36.set("de", "Verkabelung des Joysticks freilegen");
    record36.set("page", "installation");
    record36.set("section", "installation_3");
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
    record37.id = "cxzdipn6r3x6j2k";
    record37.set("key", "installation_3_step2_text");
    record37.set("de", "Lege die Verkabelung des Joysticks frei; diese befindet sich meistens im Steuerstand in der N\u00e4he des Joysticks.");
    record37.set("page", "installation");
    record37.set("section", "installation_3");
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
    record38.id = "lgma9rhgfg49tip";
    record38.set("key", "installation_3_step3_title");
    record38.set("de", "Stecker trennen");
    record38.set("page", "installation");
    record38.set("section", "installation_3");
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
    record39.id = "m09s1noo60yglyn";
    record39.set("key", "installation_3_step3_text");
    record39.set("de", "L\u00f6se die Stecker wie folgt: Ziehe zun\u00e4chst den roten Sicherungsclip des Steckers nach hinten, dr\u00fccke dann den schwarzen Rastnasenhebel und ziehe den Stecker heraus.");
    record39.set("page", "installation");
    record39.set("section", "installation_3");
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
    record40.id = "lsqzyqwmqvm9zzo";
    record40.set("key", "installation_3_step4_title");
    record40.set("de", "ECU dazwischenklemmen");
    record40.set("page", "installation");
    record40.set("section", "installation_3");
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
    record41.id = "7c7jb8w95w6p4qn";
    record41.set("key", "installation_3_step4_text");
    record41.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber zwei Stecker und zwei Buchsen. Auch hier ist ein Stecker rot markiert (Backbord) und einer gr\u00fcn (Steuerbord). Verbinde den rot gekennzeichneten Stecker mit dem roten Gegenst\u00fcck der Joystick-Verkabelung und den gr\u00fcn gekennzeichneten Stecker mit dem gr\u00fcnen Gegenst\u00fcck der Joystick-Verkabelung. Denke daran, den roten Sicherungsclip des Steckers nach dem Einstecken wieder hineinzudr\u00fccken. Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record41.set("page", "installation");
    record41.set("section", "installation_3");
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
    record42.id = "lo5491cpa9m6ck6";
    record42.set("key", "installation_3_step5_title");
    record42.set("de", "App installieren");
    record42.set("page", "installation");
    record42.set("section", "installation_3");
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
    record43.id = "w71hivl57tm61ub";
    record43.set("key", "installation_3_step5_text");
    record43.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record43.set("page", "installation");
    record43.set("section", "installation_3");
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
    record44.id = "duu5dxc9wa4rtau";
    record44.set("key", "installation_3_step6_title");
    record44.set("de", "Kopplungsmodus der ECU starten");
    record44.set("page", "installation");
    record44.set("section", "installation_3");
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
    record45.id = "vobvqfsaja1wuxv";
    record45.set("key", "installation_3_step6_text");
    record45.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record45.set("page", "installation");
    record45.set("section", "installation_3");
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
    record46.id = "p2i4cma73iaohub";
    record46.set("key", "installation_3_step7_title");
    record46.set("de", "ECU und App koppeln");
    record46.set("page", "installation");
    record46.set("section", "installation_3");
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
    record47.id = "r9l88dvkw4qucud";
    record47.set("key", "installation_3_step7_text");
    record47.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record47.set("page", "installation");
    record47.set("section", "installation_3");
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
    record48.id = "qmnso31szy3crcd";
    record48.set("key", "installation_4_title");
    record48.set("de", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0");
    record48.set("page", "installation");
    record48.set("section", "installation_4");
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
    record49.id = "9jsshyg4y48t979";
    record49.set("key", "installation_4_step1_title");
    record49.set("de", "Installation vorbereiten");
    record49.set("page", "installation");
    record49.set("section", "installation_4");
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
    record50.id = "nqha7rmg16444a9";
    record50.set("key", "installation_4_step1_text");
    record50.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record50.set("page", "installation");
    record50.set("section", "installation_4");
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
    record51.id = "mrktjgnbwb4v6qu";
    record51.set("key", "installation_4_step2_title");
    record51.set("de", "Verkabelung des Joysticks freilegen");
    record51.set("page", "installation");
    record51.set("section", "installation_4");
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
    record52.id = "tj5r816044wxpgx";
    record52.set("key", "installation_4_step2_text");
    record52.set("de", "Lege die Verkabelung des Joysticks im Steuerstand frei. Dazu l\u00f6st du die vier Innensechskantschrauben der Abdeckung und ziehst dann den Gashebel nach oben. Der Anschluss befindet sich auf der Unterseite des Gashebels.");
    record52.set("page", "installation");
    record52.set("section", "installation_4");
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
    record53.id = "6qxhjdjqu9rc9pl";
    record53.set("key", "installation_4_step3_title");
    record53.set("de", "Stecker trennen");
    record53.set("page", "installation");
    record53.set("section", "installation_4");
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
    record54.id = "gibr2gfb47osiim";
    record54.set("key", "installation_4_step3_text");
    record54.set("de", "L\u00f6se die Stecker, indem du den schwarzen Rastnasenhebel dr\u00fcckst und den Stecker herausziehst. ACHTUNG: Der eine Stecker ist f\u00fcr Backbord (rote Markierung), der andere f\u00fcr Steuerbord (gr\u00fcne Markierung). Die Stecker d\u00fcrfen nicht vertauscht werden!");
    record54.set("page", "installation");
    record54.set("section", "installation_4");
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
    record55.id = "kqhzy8x417pect6";
    record55.set("key", "installation_4_step4_title");
    record55.set("de", "ECU dazwischenklemmen");
    record55.set("page", "installation");
    record55.set("section", "installation_4");
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
    record56.id = "ubnd5mt5kfp4d37";
    record56.set("key", "installation_4_step4_text");
    record56.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber zwei Stecker und zwei Buchsen. Auch hier ist ein Stecker rot markiert (Backbord) und einer gr\u00fcn (Steuerbord). Verbinde den rot gekennzeichneten Stecker mit dem roten Gegenst\u00fcck der Schalthebel-Verkabelung und den gr\u00fcn gekennzeichneten Stecker mit dem gr\u00fcnen Gegenst\u00fcck der Schalthebel-Verkabelung. ACHTUNG: Der Steckplatz Multilink hat denselben Steckertyp; dieser kann nicht verwendet werden! Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record56.set("page", "installation");
    record56.set("section", "installation_4");
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
    record57.id = "9ppwetkr9iud564";
    record57.set("key", "installation_4_step5_title");
    record57.set("de", "App-Installation");
    record57.set("page", "installation");
    record57.set("section", "installation_4");
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
    record58.id = "ht7ib7srt8bjlhm";
    record58.set("key", "installation_4_step5_text");
    record58.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record58.set("page", "installation");
    record58.set("section", "installation_4");
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
    record59.id = "e75no10rsnksj2z";
    record59.set("key", "installation_4_step6_title");
    record59.set("de", "Kopplungsmodus der ECU starten");
    record59.set("page", "installation");
    record59.set("section", "installation_4");
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
    record60.id = "iufz4290sgio67b";
    record60.set("key", "installation_4_step6_text");
    record60.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record60.set("page", "installation");
    record60.set("section", "installation_4");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.id = "8b73ibvsmiwxpuu";
    record61.set("key", "installation_4_step7_title");
    record61.set("de", "ECU und App koppeln");
    record61.set("page", "installation");
    record61.set("section", "installation_4");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.id = "6tq72t8s1ezqxpw";
    record62.set("key", "installation_4_step7_text");
    record62.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record62.set("page", "installation");
    record62.set("section", "installation_4");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.id = "dildht7sxfbizy4";
    record63.set("key", "installation_5_title");
    record63.set("de", "Installation von SMARTDOCK f\u00fcr Mercury/Mercruiser-Antriebe mit Joystick");
    record63.set("page", "installation");
    record63.set("section", "installation_5");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.id = "mkwsilt214nw8j8";
    record64.set("key", "installation_5_step1_title");
    record64.set("de", "Installation vorbereiten");
    record64.set("page", "installation");
    record64.set("section", "installation_5");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.id = "p6qvno20ebzwcgz";
    record65.set("key", "installation_5_step1_text");
    record65.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record65.set("page", "installation");
    record65.set("section", "installation_5");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.id = "ump49qb3mbhdgur";
    record66.set("key", "installation_5_step2_title");
    record66.set("de", "Verkabelung des Joysticks freilegen");
    record66.set("page", "installation");
    record66.set("section", "installation_5");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.id = "tx3oygx1mcs2y28";
    record67.set("key", "installation_5_step2_text");
    record67.set("de", "Lege die Verkabelung des Joysticks frei; diese befindet sich im Steuerstand unterhalb des Joysticks.");
    record67.set("page", "installation");
    record67.set("section", "installation_5");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.id = "v5i4uakxpva1al8";
    record68.set("key", "installation_5_step3_title");
    record68.set("de", "Stecker trennen");
    record68.set("page", "installation");
    record68.set("section", "installation_5");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.id = "pwnxyuomokb3eg8";
    record69.set("key", "installation_5_step3_text");
    record69.set("de", "L\u00f6se den Stecker des Joysticks, indem du das Gewinde aufschraubst.");
    record69.set("page", "installation");
    record69.set("section", "installation_5");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.id = "xeu32h593yotkfz";
    record70.set("key", "installation_5_step4_title");
    record70.set("de", "ECU dazwischenklemmen");
    record70.set("page", "installation");
    record70.set("section", "installation_5");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.id = "cjaew65nqvncvx1";
    record71.set("key", "installation_5_step4_text");
    record71.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber einen Stecker und eine Buchse; diese sind jeweils mit dem passenden Gegenst\u00fcck des Joysticks zu verbinden. Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record71.set("page", "installation");
    record71.set("section", "installation_5");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.id = "n1x5f6v6qr3lob3";
    record72.set("key", "installation_5_step5_title");
    record72.set("de", "App-Installation");
    record72.set("page", "installation");
    record72.set("section", "installation_5");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.id = "q7hrkt4vkkil35t";
    record73.set("key", "installation_5_step5_text");
    record73.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record73.set("page", "installation");
    record73.set("section", "installation_5");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.id = "465bc1b5yb20v7v";
    record74.set("key", "installation_5_step6_title");
    record74.set("de", "Kopplungsmodus der ECU starten");
    record74.set("page", "installation");
    record74.set("section", "installation_5");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.id = "usefegy7lslbw4x";
    record75.set("key", "installation_5_step6_text");
    record75.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record75.set("page", "installation");
    record75.set("section", "installation_5");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.id = "t66t0btqbm8klw1";
    record76.set("key", "installation_5_step7_title");
    record76.set("de", "ECU und App koppeln");
    record76.set("page", "installation");
    record76.set("section", "installation_5");
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.id = "z7bzqcybeyr1e8h";
    record77.set("key", "installation_5_step7_text");
    record77.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record77.set("page", "installation");
    record77.set("section", "installation_5");
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["z7bzqcybeyr1e8h", "t66t0btqbm8klw1", "usefegy7lslbw4x", "465bc1b5yb20v7v", "q7hrkt4vkkil35t", "n1x5f6v6qr3lob3", "cjaew65nqvncvx1", "xeu32h593yotkfz", "pwnxyuomokb3eg8", "v5i4uakxpva1al8", "tx3oygx1mcs2y28", "ump49qb3mbhdgur", "p6qvno20ebzwcgz", "mkwsilt214nw8j8", "dildht7sxfbizy4", "6tq72t8s1ezqxpw", "8b73ibvsmiwxpuu", "iufz4290sgio67b", "e75no10rsnksj2z", "ht7ib7srt8bjlhm", "9ppwetkr9iud564", "ubnd5mt5kfp4d37", "kqhzy8x417pect6", "gibr2gfb47osiim", "6qxhjdjqu9rc9pl", "tj5r816044wxpgx", "mrktjgnbwb4v6qu", "nqha7rmg16444a9", "9jsshyg4y48t979", "qmnso31szy3crcd", "r9l88dvkw4qucud", "p2i4cma73iaohub", "vobvqfsaja1wuxv", "duu5dxc9wa4rtau", "w71hivl57tm61ub", "lo5491cpa9m6ck6", "7c7jb8w95w6p4qn", "lsqzyqwmqvm9zzo", "m09s1noo60yglyn", "lgma9rhgfg49tip", "cxzdipn6r3x6j2k", "p1vgx7lfz81jrhj", "zqfl9detx7o6zf2", "o3tmvl6c9frx7sc", "9dveunxchsjwb01", "7ht4wxkwvssnvp1", "qy2ev4thhniebeh", "eeyub1u2jqjr3hl", "x5exol11972i1gz", "taoin5lsrgzc8fh", "mu5rv5jdrkcpwhb", "arlpnvd2av0uvtv", "sg5k6daynklte98", "1qt8rrqq5n2xuyc", "3lce8bnmzubbckf", "d3b3r9ulsioyhes", "ibku3gtysrk145b", "909xmjosvrtrwvq", "z96fhk72hyq4mrt", "fmo4byqvc539jpb", "yugzfxam54ox5f9", "lpba4w805n3b7pr", "8r2hjxnswjqpin9", "bpvetabrramxmyy", "6ingpmpas334dtk", "p55o9sywin02rro", "o99fqr2pxyels8r", "fojlp3z7riq9f2y", "z54hes2lelho4sf", "c4ez6ewbyl61jyo", "xjai6uqj124zjdf", "8u6no8u8k853162", "o4mk46dltxfzyah", "4n5a1mw1fd3d04v", "a8oekmx9txmsw1q", "qi311ipegudhteg", "muzxz54zaitza5o", "tf2hunwbz4oh4ao"];
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
