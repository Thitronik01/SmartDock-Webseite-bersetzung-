/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // The DB-stored DE translation for the advantages section main heading (h2)
  // overrides the static translation. Set it to the correct value.
  try {
    const record = app.findFirstRecordByData("translation_DE", "key", "app_reasons_title");
    if (record) {
      record.set("de", "Fünf Gründe für SMARTDOCK");
      app.save(record);
    }
  } catch (error) {
    if (!(error.message && error.message.includes("no rows in result set"))) {
      throw error;
    }
  }
}, (app) => {
  // no-op down migration
});
