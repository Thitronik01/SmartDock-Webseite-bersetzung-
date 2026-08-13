/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "avps7w9prt2sx6a";
    record0.set("key", "smartdock_modules_label");
    record0.set("de", "SMARTDOCK Module");
    record0.set("page", "modules");
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
    record1.id = "jxptmj0cljbethu";
    record1.set("key", "smartdock_modules_title");
    record1.set("de", "Modular aufgebaut. Passend zu deinem Boot.");
    record1.set("page", "modules");
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
    record2.id = "lghl99fskl2ejno";
    record2.set("key", "smartdock_modules_description");
    record2.set("de", "Das SMARTDOCK System l\u00e4sst sich dank seines modularen Aufbaus perfekt an die spezifischen Anforderungen deines Bootes anpassen.");
    record2.set("page", "modules");
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
    record3.id = "hmrgrqauy95eh60";
    record3.set("key", "module_ecu_title");
    record3.set("de", "ECU");
    record3.set("page", "modules");
    record3.set("section", "cards");
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
    record4.id = "jswddng1ysr2kbt";
    record4.set("key", "module_ecu_description");
    record4.set("de", "Engine Control Unit f\u00fcr die pr\u00e4zise Steuerung der Hauptmotoren.");
    record4.set("page", "modules");
    record4.set("section", "cards");
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
    record5.id = "j1zaiuazfc6y345";
    record5.set("key", "module_tcu_title");
    record5.set("de", "TCU");
    record5.set("page", "modules");
    record5.set("section", "cards");
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
    record6.id = "he3t7mguc3f1v2y";
    record6.set("key", "module_tcu_description");
    record6.set("de", "Thruster Control Unit f\u00fcr herk\u00f6mmliche On/Off-Strahlruder.");
    record6.set("page", "modules");
    record6.set("section", "cards");
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
    record7.id = "up6txd6uitav59t";
    record7.set("key", "module_tcu_p_title");
    record7.set("de", "TCU-P");
    record7.set("page", "modules");
    record7.set("section", "cards");
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
    record8.id = "pouf1ci5v9bbbxq";
    record8.set("key", "module_tcu_p_description");
    record8.set("de", "Thruster Control Unit Proportional f\u00fcr drehzahlgeregelte Strahlruder.");
    record8.set("page", "modules");
    record8.set("section", "cards");
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
    record9.id = "vc89dppz341d2bg";
    record9.set("key", "module_acu_title");
    record9.set("de", "ACU");
    record9.set("page", "modules");
    record9.set("section", "cards");
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
    record10.id = "hindhuzpt3y055a";
    record10.set("key", "module_acu_description");
    record10.set("de", "Anchor Control Unit zur Bedienung von Ankerwinches oder eines Strahlruders und eines Horns.");
    record10.set("page", "modules");
    record10.set("section", "cards");
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
    record11.id = "3k62nqklzpxqvtb";
    record11.set("key", "module_wcu_title");
    record11.set("de", "WCU");
    record11.set("page", "modules");
    record11.set("section", "cards");
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
    record12.id = "cyd9dbqxktzbj52";
    record12.set("key", "module_wcu_description");
    record12.set("de", "Winch Control Unit zur Steuerung von Winches und Horn.");
    record12.set("page", "modules");
    record12.set("section", "cards");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["cyd9dbqxktzbj52", "3k62nqklzpxqvtb", "hindhuzpt3y055a", "vc89dppz341d2bg", "pouf1ci5v9bbbxq", "up6txd6uitav59t", "he3t7mguc3f1v2y", "j1zaiuazfc6y345", "jswddng1ysr2kbt", "hmrgrqauy95eh60", "lghl99fskl2ejno", "jxptmj0cljbethu", "avps7w9prt2sx6a"];
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
