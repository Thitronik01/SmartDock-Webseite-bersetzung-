/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "fbqhndu295ovf6b";
    record0.set("key", "produkt_page_title");
    record0.set("de", "Produkt");
    record0.set("page", "produkt");
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
    record1.id = "tx8cfig5q1h8hj2";
    record1.set("key", "produkt_smartdock_title");
    record1.set("de", "SMARTDOCK");
    record1.set("page", "produkt");
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
    record2.id = "an7hwyj8uirinh0";
    record2.set("key", "produkt_smartdock_subtitle");
    record2.set("de", "Dein Plug & Play-Upgrade f\u00fcr maximale Kontrolle an Bord.");
    record2.set("page", "produkt");
    record2.set("section", "header");
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
    record3.id = "ljmnplv3wbsdyrw";
    record3.set("key", "produkt_crew_heading");
    record3.set("de", "Deine Crew bist du");
    record3.set("page", "produkt");
    record3.set("section", "crew");
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
    record4.id = "8xkp41csgyw6mwi";
    record4.set("key", "produkt_crew_intro");
    record4.set("de", "Du kennst dein Boot, jede Reaktion, jedes Man\u00f6ver. Jetzt hast du ein System an deiner Seite, das dir genau diese Kontrolle noch einfacher macht \u2013 ganz ohne fremde Hilfe.");
    record4.set("page", "produkt");
    record4.set("section", "crew");
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
    record5.id = "arm09sh55heki1v";
    record5.set("key", "produkt_crew_smartphone");
    record5.set("de", "Mit SMARTDOCK steuerst du dein Boot direkt \u00fcber dein Smartphone \u2013 egal ob du am Bug bist, am Heck oder mittendrin.");
    record5.set("page", "produkt");
    record5.set("section", "crew");
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
    record6.id = "touyouk4kyn5buu";
    record6.set("key", "produkt_crew_docking");
    record6.set("de", "Anlegen wird zur souver\u00e4nen Ein-Mann-Show. Kein Stress, kein Gerufe, keine Kompromisse \u2013 nur du und dein Boot im perfekten Zusammenspiel.");
    record6.set("page", "produkt");
    record6.set("section", "crew");
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
    record7.id = "fjdrduguysino51";
    record7.set("key", "produkt_crew_freedom");
    record7.set("de", "SMARTDOCK wurde mit dem Anspruch entwickelt, erfahrenen Skippern eine v\u00f6llig neue Freiheit zu bieten. Ein System, das sich in bestehende Setups integrieren l\u00e4sst und dir volle Kontrolle in jeder Situation gibt.");
    record7.set("page", "produkt");
    record7.set("section", "crew");
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
    record8.id = "9134jv7b73bsfdx";
    record8.set("key", "produkt_test_heading");
    record8.set("de", "Das float Magazin hat getestet");
    record8.set("page", "produkt");
    record8.set("section", "testbericht");
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
    record9.id = "9fx53bltju591w9";
    record9.set("key", "produkt_test_quote");
    record9.set("de", "Erster Eindruck: Die Benutzung ist verbl\u00fcffend simpel \u2013 und macht Riesenspa\u00df.");
    record9.set("page", "produkt");
    record9.set("section", "testbericht");
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
    record10.id = "epy1b4xoefu1210";
    record10.set("key", "produkt_test_link");
    record10.set("de", "Zum Testbericht");
    record10.set("page", "produkt");
    record10.set("section", "testbericht");
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
    record11.id = "bbhaolz9mnsiudu";
    record11.set("key", "produkt_plugplay_heading");
    record11.set("de", "Einbauen. Einschalten. Alles in der App");
    record11.set("page", "produkt");
    record11.set("section", "plugplay");
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
    record12.id = "823qb7ex9on7e0v";
    record12.set("key", "produkt_plugplay_title");
    record12.set("de", "Plug & Play");
    record12.set("page", "produkt");
    record12.set("section", "plugplay");
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
    record13.id = "fvzrbyc08ml0ejf";
    record13.set("key", "produkt_plugplay_concept");
    record13.set("de", "SMARTDOCK ist nach dem Plug & Play-Prinzip konzipiert \u2013 einmal eingebaut, steuerst du alles bequem \u00fcber die App. Die Installation an Bord ist schnell erledigt und erfordert weder komplexe Umbauten noch spezielles technisches Know-how.");
    record13.set("page", "produkt");
    record13.set("section", "plugplay");
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
    record14.id = "9j5rj28xl5m88x9";
    record14.set("key", "produkt_plugplay_app");
    record14.set("de", "Nach dem Einbau \u00fcbernimmt die App: Einrichtung, Steuerung, Kontrolle \u2013 alles l\u00e4uft intuitiv und zentral \u00fcber dein Smartphone. Du brauchst kein separates Bedienpanel, keine zus\u00e4tzliche Hardware.");
    record14.set("page", "produkt");
    record14.set("section", "plugplay");
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
    record15.id = "x3mxcsut4qqqiut";
    record15.set("key", "produkt_plugplay_simple");
    record15.set("de", "Einfach verbinden, starten und volle Kontrolle genie\u00dfen \u2013 so sieht moderne Bootssteuerung aus.");
    record15.set("page", "produkt");
    record15.set("section", "plugplay");
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
    record16.id = "4c10eztr14g9rhb";
    record16.set("key", "produkt_ecu_label");
    record16.set("de", "ENGINE CONTROL UNIT");
    record16.set("page", "produkt");
    record16.set("section", "ecu");
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
    record17.id = "llm3xawoh13ft9m";
    record17.set("key", "produkt_ecu_title");
    record17.set("de", "SMARTDOCK-ECU");
    record17.set("page", "produkt");
    record17.set("section", "ecu");
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
    record18.id = "qnjdqa3bk6qy3re";
    record18.set("key", "produkt_ecu_description");
    record18.set("de", "ECU steht f\u00fcr Engine Control Unit. Es handelt sich dabei um eine Steuereinheit, die es dir erm\u00f6glicht, deinen Bootsmotor mithilfe der SMARTDOCK App zu steuern. Dazu nutzt SMARTDOCK-ECU die digitalen Steuersysteme deines Bootes. Die Steuerinformationen werden vom Smartphone an die ECU gesendet und dort in Informationen umgewandelt, die von der Bootssteuerung korrekt interpretiert und ausgef\u00fchrt werden. Dabei wird immer auch der Steuerstand des Bootes \u00fcberwacht, sodass eine \u00dcbernahme der Kontrolle durch diesen jederzeit m\u00f6glich ist.");
    record18.set("page", "produkt");
    record18.set("section", "ecu");
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
    record19.id = "24e7z85cqbav4t6";
    record19.set("key", "produkt_tcu_label");
    record19.set("de", "THRUSTER CONTROL UNIT");
    record19.set("page", "produkt");
    record19.set("section", "tcu");
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
    record20.id = "s5exlmphdlrmike";
    record20.set("key", "produkt_tcu_title");
    record20.set("de", "SMARTDOCK-TCU");
    record20.set("page", "produkt");
    record20.set("section", "tcu");
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
    record21.id = "6dlq4ol8mi3y0ld";
    record21.set("key", "produkt_tcu_description");
    record21.set("de", "TCU steht f\u00fcr Thruster Control Unit. Es handelt sich dabei um eine Steuereinheit, mit der du die Bug- und Heckstrahlruder per SMARTDOCK App ansteuern kannst.");
    record21.set("page", "produkt");
    record21.set("section", "tcu");
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
    record22.id = "arq4sc5ninwpyp0";
    record22.set("key", "produkt_tcu_control");
    record22.set("de", "Die Steuerinformationen aus der App werden in Signale f\u00fcr die Strahlruder umgewandelt, so dass eine gezielte Bedienung in die gew\u00fcnschte Richtung m\u00f6glich ist.");
    record22.set("page", "produkt");
    record22.set("section", "tcu");
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
    record23.id = "x8p9mjj8yztlcad";
    record23.set("key", "produkt_compatibility_heading");
    record23.set("de", "Kompatibilit\u00e4t");
    record23.set("page", "produkt");
    record23.set("section", "compatibility");
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
    record24.id = "lexha8g4j0ygwec";
    record24.set("key", "produkt_compatibility_description");
    record24.set("de", "SMARTDOCK l\u00e4sst sich nahtlos in bestehende Technik integrieren. Das System ist kompatibel mit Volvo Penta-Antrieben ab Baujahr 2010, MerCruiser/Mercury-Systemen ab 2016 sowie Yamaha ab Bj. 2021 (Helm Master EX-System). Damit unterst\u00fctzt SMARTDOCK eine Vielzahl g\u00e4ngiger Motoren und Bootstypen \u2013 f\u00fcr einen einfachen Einstieg in die smarte Bootssteuerung.");
    record24.set("page", "produkt");
    record24.set("section", "compatibility");
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
    record25.id = "vhx5h8ed0znmfd4";
    record25.set("key", "produkt_compatibility_contact");
    record25.set("de", "Dein Antrieb ist nicht dabei? Kein Problem - nimm Kontakt mit uns auf!");
    record25.set("page", "produkt");
    record25.set("section", "compatibility");
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
    record26.id = "uc8uaf6msj6vu0q";
    record26.set("key", "produkt_compatibility_contact_button");
    record26.set("de", "Kontakt aufnehmen");
    record26.set("page", "produkt");
    record26.set("section", "compatibility");
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
    record27.id = "6ouuoodxysuj4nx";
    record27.set("key", "produkt_cta_heading");
    record27.set("de", "Bereit f\u00fcr die n\u00e4chste Ausfahrt?");
    record27.set("page", "produkt");
    record27.set("section", "cta");
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
    record28.id = "rimm97mh4iugrf5";
    record28.set("key", "produkt_cta_configure");
    record28.set("de", "Jetzt Konfigurieren");
    record28.set("page", "produkt");
    record28.set("section", "cta");
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
    record29.id = "uuzowkl9osjcmgt";
    record29.set("key", "produkt_cta_dealer");
    record29.set("de", "H\u00e4ndler finden");
    record29.set("page", "produkt");
    record29.set("section", "cta");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["uuzowkl9osjcmgt", "rimm97mh4iugrf5", "6ouuoodxysuj4nx", "uc8uaf6msj6vu0q", "vhx5h8ed0znmfd4", "lexha8g4j0ygwec", "x8p9mjj8yztlcad", "arq4sc5ninwpyp0", "6dlq4ol8mi3y0ld", "s5exlmphdlrmike", "24e7z85cqbav4t6", "qnjdqa3bk6qy3re", "llm3xawoh13ft9m", "4c10eztr14g9rhb", "x3mxcsut4qqqiut", "9j5rj28xl5m88x9", "fvzrbyc08ml0ejf", "823qb7ex9on7e0v", "bbhaolz9mnsiudu", "epy1b4xoefu1210", "9fx53bltju591w9", "9134jv7b73bsfdx", "fjdrduguysino51", "touyouk4kyn5buu", "arm09sh55heki1v", "8xkp41csgyw6mwi", "ljmnplv3wbsdyrw", "an7hwyj8uirinh0", "tx8cfig5q1h8hj2", "fbqhndu295ovf6b"];
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
