/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "w09l6o5reg04s4r";
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
}, (app) => {
  const seededRecordIds = ["w09l6o5reg04s4r"];
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
