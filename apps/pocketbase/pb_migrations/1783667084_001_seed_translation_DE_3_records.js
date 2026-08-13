/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "7x7whzdvb4fk935";
    record0.set("key", "app_reasons_kicker");
    record0.set("de", "F\u00dcNF GR\u00dcNDE F\u00dcR SMARTDOCK");
    record0.set("page", "home");
    record0.set("section", "advantages");
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
    record1.id = "huj2ulrz92y91x8";
    record1.set("key", "app_reasons_title");
    record1.set("de", "Mehr Kontrolle. Weniger Stress. Mehr Freiheit.");
    record1.set("page", "home");
    record1.set("section", "advantages");
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
    record2.id = "up8ag3yqhoe37he";
    record2.set("key", "app_reasons_desc");
    record2.set("de", "Entdecke die Vorteile, die SMARTDOCK zur unverzichtbaren L\u00f6sung f\u00fcr moderne Skipper machen");
    record2.set("page", "home");
    record2.set("section", "advantages");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["up8ag3yqhoe37he", "huj2ulrz92y91x8", "7x7whzdvb4fk935"];
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
