/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "sfhqnm7lo6jva4a";
    record0.set("name", "Buy a Boat \u2013 KalterHundt GmbH");
    record0.set("address", "<UNKNOWN>");
    record0.set("country", "Germany");
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
    record1.id = "fan0jtlvzbg5lz7";
    record1.set("name", "SMARTDOCK by Thitronik GmbH");
    record1.set("address", "<UNKNOWN>");
    record1.set("country", "Germany");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["fan0jtlvzbg5lz7", "sfhqnm7lo6jva4a"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("dealers", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
