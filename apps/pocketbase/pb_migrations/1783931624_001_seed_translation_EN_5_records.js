/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "vjh8o80acdy8db3";
    record0.set("key", "agb_changes_title");
    record0.set("en", "Changes to the Terms and Conditions");
    record0.set("page", "agb");
    record0.set("section", "changes");
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
    record1.id = "7br1bmfxm2nuuoq";
    record1.set("key", "agb_changes_desc1");
    record1.set("en", "We reserve the right to change or update these Terms and Conditions at any time.");
    record1.set("page", "agb");
    record1.set("section", "changes");
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
    record2.id = "nz5tldjq6ja5rru";
    record2.set("key", "agb_changes_desc2");
    record2.set("en", "Changes will be posted on our website and will take effect immediately.");
    record2.set("page", "agb");
    record2.set("section", "changes");
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
    record3.id = "v7ei0hgyrfe321j";
    record3.set("key", "agb_changes_desc3");
    record3.set("en", "Continued use of our website following a change constitutes acceptance of the new Terms and Conditions.");
    record3.set("page", "agb");
    record3.set("section", "changes");
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
    record4.id = "q4yrit7urvplhvi";
    record4.set("key", "agb_changes_desc4");
    record4.set("en", "If any provision of these Terms and Conditions is invalid, the remaining provisions shall remain valid.");
    record4.set("page", "agb");
    record4.set("section", "changes");
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
  const seededRecordIds = ["q4yrit7urvplhvi", "v7ei0hgyrfe321j", "nz5tldjq6ja5rru", "7br1bmfxm2nuuoq", "vjh8o80acdy8db3"];
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
