/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "uwn9qw9kr02hls0";
    record0.set("key", "installation_6_title");
    record0.set("de", "Installation von SMARTDOCK f\u00fcr Yamaha-Antriebe mit Joystick");
    record0.set("page", "installation");
    record0.set("section", "installation_6");
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
    record1.id = "9iru5rinxyf4xls";
    record1.set("key", "installation_6_step1_title");
    record1.set("de", "Vorbereitung der Installation");
    record1.set("page", "installation");
    record1.set("section", "installation_6");
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
    record2.id = "zq3diiwygmphb8b";
    record2.set("key", "installation_6_step1_text");
    record2.set("de", "Bringe den Gashebel in die Neutralstellung, schalte die Z\u00fcndung aus und unterbrich die Spannungsversorgung \u00fcber den Hauptschalter.");
    record2.set("page", "installation");
    record2.set("section", "installation_6");
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
    record3.id = "qqq2g6v6xydskwz";
    record3.set("key", "installation_6_step2_title");
    record3.set("de", "Verkabelung des Joysticks freilegen");
    record3.set("page", "installation");
    record3.set("section", "installation_6");
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
    record4.id = "3pvd7ndnq10dt4v";
    record4.set("key", "installation_6_step2_text");
    record4.set("de", "Lege die Verkabelung des Joysticks frei; diese befindet sich im Steuerstand unterhalb des Joysticks.");
    record4.set("page", "installation");
    record4.set("section", "installation_6");
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
    record5.id = "usyd862oxl8n00v";
    record5.set("key", "installation_6_step3_title");
    record5.set("de", "Stecker trennen");
    record5.set("page", "installation");
    record5.set("section", "installation_6");
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
    record6.id = "pu1cg73o66jbgc4";
    record6.set("key", "installation_6_step3_text");
    record6.set("de", "L\u00f6se den Stecker, indem du die Lasche an der Buchse eindr\u00fcckst und den Stecker vorsichtig herausziehst.");
    record6.set("page", "installation");
    record6.set("section", "installation_6");
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
    record7.id = "7g9auwano9haeky";
    record7.set("key", "installation_6_step4_title");
    record7.set("de", "ECU dazwischenklemmen");
    record7.set("page", "installation");
    record7.set("section", "installation_6");
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
    record8.id = "gck4nwqt8iygkvv";
    record8.set("key", "installation_6_step4_text");
    record8.set("de", "Schlie\u00dfe jetzt deine ECU mithilfe des mitgelieferten Kabelbaums an. Die ECU verf\u00fcgt \u00fcber einen Stecker und eine Buchse; diese sind jeweils mit dem passenden Gegenst\u00fcck des Joysticks zu verbinden. Achte darauf, dass die Steckverbindungen ordnungsgem\u00e4\u00df hergestellt sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.");
    record8.set("page", "installation");
    record8.set("section", "installation_6");
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
    record9.id = "5onngi4q609s8rh";
    record9.set("key", "installation_6_step5_title");
    record9.set("de", "App-Installation");
    record9.set("page", "installation");
    record9.set("section", "installation_6");
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
    record10.id = "5j79jtlfoxmbloq";
    record10.set("key", "installation_6_step5_text");
    record10.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. ACHTUNG: Tippe an dieser Stelle noch nicht darauf.");
    record10.set("page", "installation");
    record10.set("section", "installation_6");
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
    record11.id = "vznfbwihv3wvagr";
    record11.set("key", "installation_6_step6_title");
    record11.set("de", "Kopplungsmodus der ECU starten");
    record11.set("page", "installation");
    record11.set("section", "installation_6");
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
    record12.id = "s3thkc6m4hflxpa";
    record12.set("key", "installation_6_step6_text");
    record12.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her und schalte die Z\u00fcndung ein. Wenn noch kein Smartphone mit der ECU gekoppelt ist, startet der Kopplungsmodus automatisch. Dass der Kopplungsmodus aktiv ist, erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die ECU mit einem weiteren Smartphone zu koppeln, rufst du den Kopplungsmodus der ECU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der ECU dauerhaft leuchtet (Kopplungsmodus aktiv). Alternativ kannst du den Kopplungsmodus auch \u00fcber die App auf einem angelernten Smartphone aktivieren, um weitere Smartphones mit der ECU zu koppeln. W\u00e4hle dazu Einstellungen > Verbundene Ger\u00e4te > Name des Ger\u00e4ts.");
    record12.set("page", "installation");
    record12.set("section", "installation_6");
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
    record13.id = "dkkrpnq20njjw0b";
    record13.set("key", "installation_6_step7_title");
    record13.set("de", "ECU und App koppeln");
    record13.set("page", "installation");
    record13.set("section", "installation_6");
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
    record14.id = "k7u1qhx6cgwlfkc";
    record14.set("key", "installation_6_step7_text");
    record14.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record14.set("page", "installation");
    record14.set("section", "installation_6");
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
    record15.id = "lrvg175608zxsl9";
    record15.set("key", "tcu_installation_title");
    record15.set("de", "TCU - Installation");
    record15.set("page", "installation");
    record15.set("section", "tcu_installation");
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
    record16.id = "iehcbue8xrd4j5q";
    record16.set("key", "installation_7_title");
    record16.set("de", "Universell");
    record16.set("page", "installation");
    record16.set("section", "installation_7");
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
    record17.id = "85xsf8b1ne2rkh0";
    record17.set("key", "installation_7_step1_title");
    record17.set("de", "Installation vorbereiten");
    record17.set("page", "installation");
    record17.set("section", "installation_7");
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
    record18.id = "nprd6eqnn8gngmu";
    record18.set("key", "installation_7_step1_text");
    record18.set("de", "Unterbrich die Stromversorgung der Strahlruder.");
    record18.set("page", "installation");
    record18.set("section", "installation_7");
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
    record19.id = "wj05xk8wmipxy0n";
    record19.set("key", "installation_7_step2_title");
    record19.set("de", "Stecker der Strahlruder freilegen");
    record19.set("page", "installation");
    record19.set("section", "installation_7");
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
    record20.id = "wuggc6uq51yaof9";
    record20.set("key", "installation_7_step2_text");
    record20.set("de", "Lege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.");
    record20.set("page", "installation");
    record20.set("section", "installation_7");
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
    record21.id = "yps6yt6ken6k1rf";
    record21.set("key", "installation_7_step3_title");
    record21.set("de", "Stecker trennen");
    record21.set("page", "installation");
    record21.set("section", "installation_7");
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
    record22.id = "6ew4eqq1bjy1dnk";
    record22.set("key", "installation_7_step3_text");
    record22.set("de", "L\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.");
    record22.set("page", "installation");
    record22.set("section", "installation_7");
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
    record23.id = "etmmxocapkrq6r7";
    record23.set("key", "installation_7_step4_title");
    record23.set("de", "TCU dazwischenklemmen");
    record23.set("page", "installation");
    record23.set("section", "installation_7");
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
    record24.id = "vztndiuf8wo12x1";
    record24.set("key", "installation_7_step4_text");
    record24.set("de", "Schlie\u00dfe jetzt deine TCU mithilfe des mitgelieferten Kabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb. Achtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.");
    record24.set("page", "installation");
    record24.set("section", "installation_7");
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
    record25.id = "okmhbg4pf5hwvg8";
    record25.set("key", "installation_7_step5_title");
    record25.set("de", "App installieren");
    record25.set("page", "installation");
    record25.set("section", "installation_7");
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
    record26.id = "ankqzy60vwpxs8l";
    record26.set("key", "installation_7_step5_text");
    record26.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.");
    record26.set("page", "installation");
    record26.set("section", "installation_7");
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
    record27.id = "fkbyfr3zfqtn99u";
    record27.set("key", "installation_7_step6_title");
    record27.set("de", "Kopplungsmodus der TCU starten");
    record27.set("page", "installation");
    record27.set("section", "installation_7");
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
    record28.id = "hfkx4yrdvrqfryv";
    record28.set("key", "installation_7_step6_text");
    record28.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).");
    record28.set("page", "installation");
    record28.set("section", "installation_7");
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
    record29.id = "ox35kta2pj6tume";
    record29.set("key", "installation_7_step7_title");
    record29.set("de", "App mit TCU koppeln");
    record29.set("page", "installation");
    record29.set("section", "installation_7");
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
    record30.id = "qhay0ekokwegm86";
    record30.set("key", "installation_7_step7_text");
    record30.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record30.set("page", "installation");
    record30.set("section", "installation_7");
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
    record31.id = "wmupzjbbh3w6ayn";
    record31.set("key", "installation_8_title");
    record31.set("de", "Sleipner Side Power");
    record31.set("page", "installation");
    record31.set("section", "installation_8");
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
    record32.id = "5k0fwr46c3gqwlb";
    record32.set("key", "installation_8_step1_title");
    record32.set("de", "Installation vorbereiten");
    record32.set("page", "installation");
    record32.set("section", "installation_8");
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
    record33.id = "jo7k2g9ir33b33l";
    record33.set("key", "installation_8_step1_text");
    record33.set("de", "Unterbrich die Stromversorgung der Strahlruder.");
    record33.set("page", "installation");
    record33.set("section", "installation_8");
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
    record34.id = "s8lrzd6yies5xwx";
    record34.set("key", "installation_8_step2_title");
    record34.set("de", "Stecker der Strahlruder freilegen");
    record34.set("page", "installation");
    record34.set("section", "installation_8");
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
    record35.id = "17ub083crbwn47v";
    record35.set("key", "installation_8_step2_text");
    record35.set("de", "Lege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.");
    record35.set("page", "installation");
    record35.set("section", "installation_8");
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
    record36.id = "bsbmb2b03osdxmd";
    record36.set("key", "installation_8_step3_title");
    record36.set("de", "Stecker trennen");
    record36.set("page", "installation");
    record36.set("section", "installation_8");
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
    record37.id = "ke2j623eq5rr5ul";
    record37.set("key", "installation_8_step3_text");
    record37.set("de", "L\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.");
    record37.set("page", "installation");
    record37.set("section", "installation_8");
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
    record38.id = "hmaz8c8i4ewstr0";
    record38.set("key", "installation_8_step4_title");
    record38.set("de", "TCU dazwischenklemmen");
    record38.set("page", "installation");
    record38.set("section", "installation_8");
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
    record39.id = "5ew38o6ami9ti84";
    record39.set("key", "installation_8_step4_text");
    record39.set("de", "Schlie\u00dfe jetzt deine TCU mithilfe des mitgelieferten Kabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb. Achtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.");
    record39.set("page", "installation");
    record39.set("section", "installation_8");
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
    record40.id = "wnix9ou6mxflul7";
    record40.set("key", "installation_8_step5_title");
    record40.set("de", "App installieren");
    record40.set("page", "installation");
    record40.set("section", "installation_8");
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
    record41.id = "dcbker4gr0p67sy";
    record41.set("key", "installation_8_step5_text");
    record41.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.");
    record41.set("page", "installation");
    record41.set("section", "installation_8");
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
    record42.id = "myx53rbqk4vm0w2";
    record42.set("key", "installation_8_step6_title");
    record42.set("de", "Kopplungsmodus der TCU starten");
    record42.set("page", "installation");
    record42.set("section", "installation_8");
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
    record43.id = "ijjocn3rsxtq1pu";
    record43.set("key", "installation_8_step6_text");
    record43.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).");
    record43.set("page", "installation");
    record43.set("section", "installation_8");
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
    record44.id = "w8fws58hzlg60j4";
    record44.set("key", "installation_8_step7_title");
    record44.set("de", "App mit TCU koppeln");
    record44.set("page", "installation");
    record44.set("section", "installation_8");
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
    record45.id = "8tdw4gnr5qxsbea";
    record45.set("key", "installation_8_step7_text");
    record45.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record45.set("page", "installation");
    record45.set("section", "installation_8");
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
    record46.id = "3miyqcstbdvfekr";
    record46.set("key", "installation_9_title");
    record46.set("de", "Vetus");
    record46.set("page", "installation");
    record46.set("section", "installation_9");
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
    record47.id = "aseyyjun4uskg9r";
    record47.set("key", "installation_9_step1_title");
    record47.set("de", "Installation vorbereiten");
    record47.set("page", "installation");
    record47.set("section", "installation_9");
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
    record48.id = "hrc2cke31bszun3";
    record48.set("key", "installation_9_step1_text");
    record48.set("de", "Unterbrich die Stromversorgung der Strahlruder.");
    record48.set("page", "installation");
    record48.set("section", "installation_9");
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
    record49.id = "32ufrc6n82h9udl";
    record49.set("key", "installation_9_step2_title");
    record49.set("de", "Stecker der Strahlruder freilegen");
    record49.set("page", "installation");
    record49.set("section", "installation_9");
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
    record50.id = "f8luli0nzemat93";
    record50.set("key", "installation_9_step2_text");
    record50.set("de", "Lege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.");
    record50.set("page", "installation");
    record50.set("section", "installation_9");
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
    record51.id = "q635qtr6srk6sz9";
    record51.set("key", "installation_9_step3_title");
    record51.set("de", "Stecker trennen");
    record51.set("page", "installation");
    record51.set("section", "installation_9");
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
    record52.id = "eiacvltbrndkmhe";
    record52.set("key", "installation_9_step3_text");
    record52.set("de", "L\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.");
    record52.set("page", "installation");
    record52.set("section", "installation_9");
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
    record53.id = "ccmoo7fpb1mb65o";
    record53.set("key", "installation_9_step4_title");
    record53.set("de", "TCU dazwischenklemmen");
    record53.set("page", "installation");
    record53.set("section", "installation_9");
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
    record54.id = "1xzij29i6mvyo3e";
    record54.set("key", "installation_9_step4_text");
    record54.set("de", "Schlie\u00dfe jetzt deine TCU mithilfe des mitgelieferten Kabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb. Achtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.");
    record54.set("page", "installation");
    record54.set("section", "installation_9");
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
    record55.id = "c7ntcu5ked3582u";
    record55.set("key", "installation_9_step5_title");
    record55.set("de", "App installieren");
    record55.set("page", "installation");
    record55.set("section", "installation_9");
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
    record56.id = "4tsygkm1221e1ja";
    record56.set("key", "installation_9_step5_text");
    record56.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.");
    record56.set("page", "installation");
    record56.set("section", "installation_9");
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
    record57.id = "3ksc7k1dxt7e4z9";
    record57.set("key", "installation_9_step6_title");
    record57.set("de", "Kopplungsmodus der TCU starten");
    record57.set("page", "installation");
    record57.set("section", "installation_9");
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
    record58.id = "tra87l3fg03vzvn";
    record58.set("key", "installation_9_step6_text");
    record58.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).");
    record58.set("page", "installation");
    record58.set("section", "installation_9");
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
    record59.id = "nqmgky595pxmo6p";
    record59.set("key", "installation_9_step7_title");
    record59.set("de", "App mit TCU koppeln");
    record59.set("page", "installation");
    record59.set("section", "installation_9");
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
    record60.id = "oh6qwt6a01ygyew";
    record60.set("key", "installation_9_step7_text");
    record60.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record60.set("page", "installation");
    record60.set("section", "installation_9");
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
    record61.id = "bgx14j16ro6rslf";
    record61.set("key", "installation_10_title");
    record61.set("de", "Quick TCD");
    record61.set("page", "installation");
    record61.set("section", "installation_10");
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
    record62.id = "0xu3fs1epoq35hv";
    record62.set("key", "installation_10_step1_title");
    record62.set("de", "Installation vorbereiten");
    record62.set("page", "installation");
    record62.set("section", "installation_10");
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
    record63.id = "7tgqt1j6rw203b3";
    record63.set("key", "installation_10_step1_text");
    record63.set("de", "Unterbrich die Stromversorgung der Strahlruder.");
    record63.set("page", "installation");
    record63.set("section", "installation_10");
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
    record64.id = "egw6dp8zq7ohwa9";
    record64.set("key", "installation_10_step2_title");
    record64.set("de", "Stecker der Strahlruder freilegen");
    record64.set("page", "installation");
    record64.set("section", "installation_10");
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
    record65.id = "b6qmrmbrqrvbl8j";
    record65.set("key", "installation_10_step2_text");
    record65.set("de", "Lege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.");
    record65.set("page", "installation");
    record65.set("section", "installation_10");
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
    record66.id = "2zhiwwfcy7fnqu9";
    record66.set("key", "installation_10_step3_title");
    record66.set("de", "Stecker trennen");
    record66.set("page", "installation");
    record66.set("section", "installation_10");
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
    record67.id = "6mwydsizj7qxgia";
    record67.set("key", "installation_10_step3_text");
    record67.set("de", "L\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.");
    record67.set("page", "installation");
    record67.set("section", "installation_10");
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
    record68.id = "dhbnrht1argp287";
    record68.set("key", "installation_10_step4_title");
    record68.set("de", "TCU dazwischenklemmen");
    record68.set("page", "installation");
    record68.set("section", "installation_10");
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
    record69.id = "j6gbxl6pq49l9uo";
    record69.set("key", "installation_10_step4_text");
    record69.set("de", "Schlie\u00dfe jetzt deine TCU mithilfe des mitgelieferten Kabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb. Achtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.");
    record69.set("page", "installation");
    record69.set("section", "installation_10");
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
    record70.id = "6oxa73zeid6flaf";
    record70.set("key", "installation_10_step5_title");
    record70.set("de", "App installieren");
    record70.set("page", "installation");
    record70.set("section", "installation_10");
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
    record71.id = "u6judaainl13mm6";
    record71.set("key", "installation_10_step5_text");
    record71.set("de", "Lade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.");
    record71.set("page", "installation");
    record71.set("section", "installation_10");
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
    record72.id = "7l83zexeya3dn9t";
    record72.set("key", "installation_10_step6_title");
    record72.set("de", "Kopplungsmodus der TCU starten");
    record72.set("page", "installation");
    record72.set("section", "installation_10");
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
    record73.id = "bpvnlgbwy718qe5";
    record73.set("key", "installation_10_step6_text");
    record73.set("de", "Stelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet. HINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).");
    record73.set("page", "installation");
    record73.set("section", "installation_10");
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
    record74.id = "55okn866vsrtxiz";
    record74.set("key", "installation_10_step7_title");
    record74.set("de", "App mit TCU koppeln");
    record74.set("page", "installation");
    record74.set("section", "installation_10");
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
    record75.id = "c999ji1nm3j7z0o";
    record75.set("key", "installation_10_step7_text");
    record75.set("de", "Tippe jetzt in der App auf die Schaltfl\u00e4che Starten, um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen. Deine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record75.set("page", "installation");
    record75.set("section", "installation_10");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["c999ji1nm3j7z0o", "55okn866vsrtxiz", "bpvnlgbwy718qe5", "7l83zexeya3dn9t", "u6judaainl13mm6", "6oxa73zeid6flaf", "j6gbxl6pq49l9uo", "dhbnrht1argp287", "6mwydsizj7qxgia", "2zhiwwfcy7fnqu9", "b6qmrmbrqrvbl8j", "egw6dp8zq7ohwa9", "7tgqt1j6rw203b3", "0xu3fs1epoq35hv", "bgx14j16ro6rslf", "oh6qwt6a01ygyew", "nqmgky595pxmo6p", "tra87l3fg03vzvn", "3ksc7k1dxt7e4z9", "4tsygkm1221e1ja", "c7ntcu5ked3582u", "1xzij29i6mvyo3e", "ccmoo7fpb1mb65o", "eiacvltbrndkmhe", "q635qtr6srk6sz9", "f8luli0nzemat93", "32ufrc6n82h9udl", "hrc2cke31bszun3", "aseyyjun4uskg9r", "3miyqcstbdvfekr", "8tdw4gnr5qxsbea", "w8fws58hzlg60j4", "ijjocn3rsxtq1pu", "myx53rbqk4vm0w2", "dcbker4gr0p67sy", "wnix9ou6mxflul7", "5ew38o6ami9ti84", "hmaz8c8i4ewstr0", "ke2j623eq5rr5ul", "bsbmb2b03osdxmd", "17ub083crbwn47v", "s8lrzd6yies5xwx", "jo7k2g9ir33b33l", "5k0fwr46c3gqwlb", "wmupzjbbh3w6ayn", "qhay0ekokwegm86", "ox35kta2pj6tume", "hfkx4yrdvrqfryv", "fkbyfr3zfqtn99u", "ankqzy60vwpxs8l", "okmhbg4pf5hwvg8", "vztndiuf8wo12x1", "etmmxocapkrq6r7", "6ew4eqq1bjy1dnk", "yps6yt6ken6k1rf", "wuggc6uq51yaof9", "wj05xk8wmipxy0n", "nprd6eqnn8gngmu", "85xsf8b1ne2rkh0", "iehcbue8xrd4j5q", "lrvg175608zxsl9", "k7u1qhx6cgwlfkc", "dkkrpnq20njjw0b", "s3thkc6m4hflxpa", "vznfbwihv3wvagr", "5j79jtlfoxmbloq", "5onngi4q609s8rh", "gck4nwqt8iygkvv", "7g9auwano9haeky", "pu1cg73o66jbgc4", "usyd862oxl8n00v", "3pvd7ndnq10dt4v", "qqq2g6v6xydskwz", "zq3diiwygmphb8b", "9iru5rinxyf4xls", "uwn9qw9kr02hls0"];
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
