/// <reference path="../pb_data/types.d.ts" />

const UNIVERSELL_ID = "cubhmop1nuyi97g";

migrate(
  (app) => {
    let records;
    try {
      records = app.findRecordsByFilter(
        "anleitungen",
        `id != '${UNIVERSELL_ID}'`,
      );
    } catch (e) {
      if (e.message.includes("no rows in result set")) {
        return;
      }
      throw e;
    }

    for (const record of records) {
      record.set("beschreibung", "");
      app.save(record);
    }
  },
  (app) => {
    // Previous beschreibung text is not stored; rollback is manual.
  },
);
