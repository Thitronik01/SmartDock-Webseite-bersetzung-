/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "3tursb2dwt5zjfq";
    record0.set("key", "agb_privacy_title");
    record0.set("en", "Privacy Policy");
    record0.set("page", "agb");
    record0.set("section", "Datenschutz");
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
    record1.id = "wn3c11hbj4i80tt";
    record1.set("key", "agb_privacy_desc1");
    record1.set("en", "Personal data is processed in accordance with our Privacy Policy, which is available on our website.");
    record1.set("page", "agb");
    record1.set("section", "Datenschutz");
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
    record2.id = "fjmlpwabhmgps8m";
    record2.set("key", "agb_privacy_desc2");
    record2.set("en", "We are committed to storing your data securely and not sharing it with third parties, unless required by law.");
    record2.set("page", "agb");
    record2.set("section", "Datenschutz");
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
    record3.id = "bbl6obyjlx1uv7j";
    record3.set("key", "agb_privacy_desc3");
    record3.set("en", "You have the right to view, correct, or have your personal data deleted at any time.");
    record3.set("page", "agb");
    record3.set("section", "Datenschutz");
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
    record4.id = "tmczydzh3ln6ksr";
    record4.set("key", "agb_privacy_desc4");
    record4.set("en", "If you have any questions regarding data protection, please contact our Data Protection Officer at the email address provided.");
    record4.set("page", "agb");
    record4.set("section", "Datenschutz");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["tmczydzh3ln6ksr", "bbl6obyjlx1uv7j", "fjmlpwabhmgps8m", "wn3c11hbj4i80tt", "3tursb2dwt5zjfq"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_EN", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
