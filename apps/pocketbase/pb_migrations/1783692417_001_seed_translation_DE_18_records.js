/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "ogjm8l20kshbu2i";
    record0.set("key", "page_header_title");
    record0.set("de", "Features");
    record0.set("page", "funktionen");
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
    record1.id = "nnl9b0frmp8smg3";
    record1.set("key", "page_header_subtitle");
    record1.set("de", "Alles unter Kontrolle.");
    record1.set("page", "funktionen");
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
    record2.id = "rm5y5n5sp6lfa6y";
    record2.set("key", "page_header_description");
    record2.set("de", "Die SMARTDOCK App vereint Motor, Strahlruder und weitere Systeme zu einer intelligenten Einheit. Komplexe Man\u00f6ver werden intuitiv gesteuert \u2013 entwickelt, um Ihnen in jeder Situation die volle Kontrolle zu geben.");
    record2.set("page", "funktionen");
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
    record3.id = "o5lwgd9ukpopjra";
    record3.set("key", "main_section_title");
    record3.set("de", "Alles im Griff \u2013 mit einem Finger");
    record3.set("page", "funktionen");
    record3.set("section", "main");
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
    record4.id = "kj29ljo59pbg5z8";
    record4.set("key", "main_section_description");
    record4.set("de", "Die SMARTDOCK App macht dein Smartphone zum mobilen Steuerstand f\u00fcr dein Boot. Du steuerst wichtige Man\u00f6ver genau dort, wo du den besten \u00dcberblick hast \u2013 am Bug, am Heck oder mittschiffs. Mit intuitiven Wischgesten und anpassbaren Steuerungsmodi hast du jederzeit die volle Kontrolle \u00fcber dein Schiff.");
    record4.set("page", "funktionen");
    record4.set("section", "main");
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
    record5.id = "4qmczuw81ket5lc";
    record5.set("key", "feature_1_title");
    record5.set("de", "Strahlruder-Kontrolle");
    record5.set("page", "funktionen");
    record5.set("section", "features");
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
    record6.id = "c8o7t56gzhxe5gi";
    record6.set("key", "feature_1_description");
    record6.set("de", "Steuere Bug- und Heckstrahlruder pr\u00e4zise. Perfekt f\u00fcr das Anlegen in engen H\u00e4fen und bei starkem Seitenwind.");
    record6.set("page", "funktionen");
    record6.set("section", "features");
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
    record7.id = "fp0eqgv96p2jn6v";
    record7.set("key", "feature_2_title");
    record7.set("de", "High-Mode Funktion");
    record7.set("page", "funktionen");
    record7.set("section", "features");
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
    record8.id = "67k7zxr9d9xw3uk";
    record8.set("key", "feature_2_description");
    record8.set("de", "Aktiviere den High-Mode f\u00fcr sofortige, maximale Schubkraft, wenn die Man\u00f6vrierbedingungen schnelles Handeln erfordern.");
    record8.set("page", "funktionen");
    record8.set("section", "features");
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
    record9.id = "bphjx400tqp91rt";
    record9.set("key", "feature_3_title");
    record9.set("de", "Integriertes Zubeh\u00f6r");
    record9.set("page", "funktionen");
    record9.set("section", "features");
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
    record10.id = "yu6g50m9u03zhzl";
    record10.set("key", "feature_3_description");
    record10.set("de", "Bediene Ankerwinde, Signalhorn und weitere angeschlossene Systeme zentral und \u00fcbersichtlich direkt \u00fcber die App-Oberfl\u00e4che.");
    record10.set("page", "funktionen");
    record10.set("section", "features");
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
    record11.id = "39ebkapwklfw9qx";
    record11.set("key", "control_mode_1");
    record11.set("de", "BoatDrag One-Handed");
    record11.set("page", "funktionen");
    record11.set("section", "control_modes");
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
    record12.id = "decfnzp3bq1io1n";
    record12.set("key", "control_mode_2");
    record12.set("de", "Conroller-Modus");
    record12.set("page", "funktionen");
    record12.set("section", "control_modes");
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
    record13.id = "7hgln0dntwp1u2y";
    record13.set("key", "control_mode_3");
    record13.set("de", "Anker-Modus");
    record13.set("page", "funktionen");
    record13.set("section", "control_modes");
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
    record14.id = "9rnrai7l69uzigy";
    record14.set("key", "safety_section_title");
    record14.set("de", "Integrierte Sicherheitsfunktionen");
    record14.set("page", "funktionen");
    record14.set("section", "safety");
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
    record15.id = "3pxxk39mj5mvwyz";
    record15.set("key", "safety_section_description");
    record15.set("de", "Sicherheit steht an erster Stelle. Bei einer Fehlfunktion werden sofort alle Antriebe in den Leerlauf geschaltet. Zudem l\u00e4sst sich die Steuerung jederzeit manuell am physischen Steuerstand \u00fcbernehmen.");
    record15.set("page", "funktionen");
    record15.set("section", "safety");
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
    record16.id = "il3kawz7l7mkzmt";
    record16.set("key", "safety_feature_1");
    record16.set("de", "AES-128 Verschl\u00fcsselung");
    record16.set("page", "funktionen");
    record16.set("section", "safety_features");
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
    record17.id = "zl1qxy13xe0p8d9";
    record17.set("key", "safety_feature_2");
    record17.set("de", "Auto-Stop bei Verbindungsverlust");
    record17.set("page", "funktionen");
    record17.set("section", "safety_features");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["zl1qxy13xe0p8d9", "il3kawz7l7mkzmt", "3pxxk39mj5mvwyz", "9rnrai7l69uzigy", "7hgln0dntwp1u2y", "decfnzp3bq1io1n", "39ebkapwklfw9qx", "yu6g50m9u03zhzl", "bphjx400tqp91rt", "67k7zxr9d9xw3uk", "fp0eqgv96p2jn6v", "c8o7t56gzhxe5gi", "4qmczuw81ket5lc", "kj29ljo59pbg5z8", "o5lwgd9ukpopjra", "rm5y5n5sp6lfa6y", "nnl9b0frmp8smg3", "ogjm8l20kshbu2i"];
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
