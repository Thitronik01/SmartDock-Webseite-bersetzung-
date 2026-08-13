/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "a7vs2iq6dcgc6m6";
    record0.set("name", "CPS TEAM GmbH");
    record0.set("address", "Unterfeldring 7 b, 85256 Vierkirchen");
    record0.set("phone", "+49 171 3409941");
    record0.set("email", "js@cps-team.de");
    record0.set("country", "Deutschland");
    record0.set("latitude", 48.3578091);
    record0.set("longitude", 11.4423545);
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
  const seededRecordIds = ["a7vs2iq6dcgc6m6"];
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
