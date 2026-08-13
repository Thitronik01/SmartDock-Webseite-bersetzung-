/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "ni6ufgyjofc30ah";
    record0.set("key", "sd_hero_badge");
    record0.set("de", "Navigate in control.");
    record0.set("page", "home");
    record0.set("section", "hero");
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
    record1.id = "w1f59c21uklvq6z";
    record1.set("key", "hero_badge_origin");
    record1.set("de", "Made in Germany");
    record1.set("page", "home");
    record1.set("section", "hero");
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
    record2.id = "pl59gtukho9dfe7";
    record2.set("key", "hero_headline");
    record2.set("de", "Einfach clever anlegen.");
    record2.set("page", "home");
    record2.set("section", "hero");
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
    record3.id = "lga4pn04bw394gl";
    record3.set("key", "sd_hero_subtitle");
    record3.set("de", "Mit SMARTDOCK man\u00f6vrierst du dein Boot intuitiv, pr\u00e4zise und sicher. Alles bequem \u00fcber dein Smartphone.");
    record3.set("page", "home");
    record3.set("section", "hero");
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
    record4.id = "u1ehbupks956e93";
    record4.set("key", "nav_configurator");
    record4.set("de", "Konfigurator");
    record4.set("page", "home");
    record4.set("section", "hero_cta");
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
    record5.id = "aih5w9c1h62orm8";
    record5.set("key", "nav_dealer_finder");
    record5.set("de", "H\u00e4ndlerfinder");
    record5.set("page", "home");
    record5.set("section", "hero_cta");
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
    record6.id = "3r97ulq4hayo35g";
    record6.set("key", "nav_request");
    record6.set("de", "Jetzt anfragen");
    record6.set("page", "home");
    record6.set("section", "hero_cta");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["3r97ulq4hayo35g", "aih5w9c1h62orm8", "u1ehbupks956e93", "lga4pn04bw394gl", "pl59gtukho9dfe7", "w1f59c21uklvq6z", "ni6ufgyjofc30ah"];
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
