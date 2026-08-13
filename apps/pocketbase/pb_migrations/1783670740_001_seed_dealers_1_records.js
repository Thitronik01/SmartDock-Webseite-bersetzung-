/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "65iw8lk13k0vwr1";
    record0.set("name", "Yachtservice Wedel");
    record0.set("address", "Gro\u00dfer Ring 39B, 25492 Heist, Deutschland");
    record0.set("phone", "0151-55548147");
    record0.set("email", "info@yachtservice-wedel.de");
    record0.set("country", "Deutschland");
    record0.set("latitude", 53.6538776);
    record0.set("longitude", 9.6515248);
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
  const seededRecordIds = ["65iw8lk13k0vwr1"];
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
