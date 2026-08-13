/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "ryeu8ekqqg5bbw3";
    record0.set("key", "dealerFinder.header.title");
    record0.set("de", "SMARTDOCK H\u00e4ndlerfinder");
    record0.set("page", "haendlerfinder");
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
    record1.id = "1npvm74hp1fpuzr";
    record1.set("key", "dealerFinder.header.subtitle");
    record1.set("de", "Finde einen SMARTDOCK Partner in deiner N\u00e4he.");
    record1.set("page", "haendlerfinder");
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
    record2.id = "z242bm8pfuuzvhp";
    record2.set("key", "dealerFinder.form.country");
    record2.set("de", "Land");
    record2.set("page", "haendlerfinder");
    record2.set("section", "form");
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
    record3.id = "wfcwf90knclzxth";
    record3.set("key", "dealerFinder.form.allCountries");
    record3.set("de", "Alle L\u00e4nder");
    record3.set("page", "haendlerfinder");
    record3.set("section", "form");
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
    record4.id = "myrz4dahcn4dwy9";
    record4.set("key", "dealerFinder.form.city");
    record4.set("de", "Stadt");
    record4.set("page", "haendlerfinder");
    record4.set("section", "form");
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
    record5.id = "xhz0axkrdcu0q52";
    record5.set("key", "dealerFinder.form.postalCode");
    record5.set("de", "PLZ");
    record5.set("page", "haendlerfinder");
    record5.set("section", "form");
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
    record6.id = "q43nn05u4rm7lnk";
    record6.set("key", "dealerFinder.form.useMyLocation");
    record6.set("de", "Meinen Standort nutzen");
    record6.set("page", "haendlerfinder");
    record6.set("section", "form");
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
  const seededRecordIds = ["q43nn05u4rm7lnk", "xhz0axkrdcu0q52", "myrz4dahcn4dwy9", "wfcwf90knclzxth", "z242bm8pfuuzvhp", "1npvm74hp1fpuzr", "ryeu8ekqqg5bbw3"];
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
