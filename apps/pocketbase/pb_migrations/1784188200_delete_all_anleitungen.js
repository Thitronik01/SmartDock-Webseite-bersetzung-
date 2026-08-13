/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    let records;
    try {
      records = app.findRecordsByFilter("anleitungen", "id != ''");
    } catch (e) {
      if (e.message.includes("no rows in result set")) {
        console.log("No anleitungen to delete");
        return;
      }
      throw e;
    }

    for (const record of records) {
      app.delete(record);
    }
  },
  (app) => {
    // Cannot recreate the deleted rows — original data is gone.
  },
);
