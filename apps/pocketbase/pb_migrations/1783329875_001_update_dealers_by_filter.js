/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("dealers", "name='Buy a Boat – KalterHundt GmbH'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("address", "Bohlswarfer Weg 27, 26419 Schortens, Deutschland");
    record.set("phone", "+49 (0)4421 6970220");
    record.set("email", "lars@buy-a-boat.de");
    record.set("country", "Deutschland");
    record.set("latitude", 53.5);
    record.set("longitude", 8.1);
    try {
      app.save(record);
    } catch (e) {
      if (e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})
