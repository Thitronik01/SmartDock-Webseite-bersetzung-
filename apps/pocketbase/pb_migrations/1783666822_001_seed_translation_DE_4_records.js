/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "mpgfhs4z18jmswj";
    record0.set("key", "sd_intro_kicker");
    record0.set("de", "Das ist SMARTDOCK");
    record0.set("page", "home");
    record0.set("section", "intro");
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
    record1.id = "zrfkpd19ychoq6t";
    record1.set("key", "sd_intro_title");
    record1.set("de", "Die Crew in deiner Hand");
    record1.set("page", "home");
    record1.set("section", "intro");
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
    record2.id = "e2n95m6dqei124g";
    record2.set("key", "sd_intro_desc");
    record2.set("de", "SMARTDOCK revolutioniert die Art und Weise, wie du dein Boot man\u00f6vrierst. Durch die drahtlose Steuerung von Motoren und Strahlrudern hast du jederzeit den perfekten \u00dcberblick und kannst das Schiff punktgenau steuern \u2013 selbst in engen H\u00e4fen und bei schwierigen Windverh\u00e4ltnissen.");
    record2.set("page", "home");
    record2.set("section", "intro");
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
    record3.id = "mwlb0xz9tu7qnq5";
    record3.set("key", "sd_intro_highlight");
    record3.set("de", "F\u00fcr Boote jeder Gr\u00f6\u00dfe");
    record3.set("page", "home");
    record3.set("section", "intro");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["mwlb0xz9tu7qnq5", "e2n95m6dqei124g", "zrfkpd19ychoq6t", "mpgfhs4z18jmswj"];
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
