/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    let record;
    try {
      record = app.findFirstRecordByFilter("dealers", "name = 'NAGY Yachting'");
    } catch (e) {
      console.log("NAGY Yachting dealer not found, skipping.");
      return;
    }
    record.set("website", "https://www.smartdock.ch");
    record.set("website2", "https://www.nagy.li");
    app.save(record);
  },
  (app) => {
    try {
      const record = app.findFirstRecordByFilter("dealers", "name = 'NAGY Yachting'");
      record.set("website", "");
      record.set("website2", "");
      app.save(record);
    } catch (e) {
      // no-op
    }
  }
);
