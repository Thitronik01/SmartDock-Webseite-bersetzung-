/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("dealers", "name='SMARTDOCK by Thitronik GmbH'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("address", "Finkenweg 9-15, 24340 Eckernf\u00f6rde, Deutschland");
    record.set("email", "smartdock@thitronik.de");
    record.set("country", "Deutschland");
    record.set("latitude", 54.4);
    record.set("longitude", 9.6);
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
