/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "m3bs2ravohv3k4e";
    record0.set("key", "dealerFinder.title");
    record0.set("de", "Finde einen Einbaupartner in deiner N\u00e4he");
    record0.set("page", "home");
    record0.set("section", "dealerFinder");
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
    record1.id = "zx51e3ymgqlflb8";
    record1.set("key", "dealerFinder.description");
    record1.set("de", "Unsere zertifizierten SMARTDOCK Partner \u00fcbernehmen die fachgerechte Installation und Wartung deines Systems.");
    record1.set("page", "home");
    record1.set("section", "dealerFinder");
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
    record2.id = "k8p0gchfaqckrg7";
    record2.set("key", "dealerFinder.buttonText");
    record2.set("de", "H\u00e4ndlerfinder \u00f6ffnen");
    record2.set("page", "home");
    record2.set("section", "dealerFinder");
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
    record3.id = "f7itgomio6svber";
    record3.set("key", "configurator.title");
    record3.set("de", "Stelle dein individuelles System zusammen");
    record3.set("page", "home");
    record3.set("section", "configurator");
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
    record4.id = "82wts296d4y27ts";
    record4.set("key", "configurator.description");
    record4.set("de", "Nutze unseren Konfigurator, um die passenden SMARTDOCK Module f\u00fcr dein Boot zu finden und erhalte ein detailliertes unverbindliches Angebot.");
    record4.set("page", "home");
    record4.set("section", "configurator");
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
    record5.id = "vg19f7ncyfqta6e";
    record5.set("key", "configurator.buttonText");
    record5.set("de", "Konfigurator starten");
    record5.set("page", "home");
    record5.set("section", "configurator");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["vg19f7ncyfqta6e", "82wts296d4y27ts", "f7itgomio6svber", "k8p0gchfaqckrg7", "zx51e3ymgqlflb8", "m3bs2ravohv3k4e"];
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
