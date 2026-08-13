/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "nfeekd7awvwmpzp";
    record0.set("name", "Buy a Boat \u2013 KalterHundt GmbH");
    record0.set("address", "Bohlswarfer Weg 27, 26419 Schortens");
    record0.set("phone", "+49 (0)4421 6970220");
    record0.set("email", "lars@buy-a-boat.de");
    record0.set("country", "Deutschland");
    record0.set("latitude", 53.5);
    record0.set("longitude", 8.1);
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
    record1.id = "ndv62gmwssi521s";
    record1.set("name", "SMARTDOCK by Thitronik GmbH");
    record1.set("address", "Finkenweg 9-15, 24340 Eckernf\u00f6rde");
    record1.set("email", "smartdock@thitronik.de");
    record1.set("country", "Deutschland");
    record1.set("latitude", 54.4);
    record1.set("longitude", 9.6);
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
  const seededRecordIds = ["ndv62gmwssi521s", "nfeekd7awvwmpzp"];
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
