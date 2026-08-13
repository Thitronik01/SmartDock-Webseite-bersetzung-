/// <reference path="../pb_data/types.d.ts" />

// The EN contact info block renders the label "EMAIL" from the
// translation_EN collection (key: contact_label_email), which overrides
// the static translation file. Update it to "E-MAIL". English only.
migrate((app) => {
  try {
    const record = app.findFirstRecordByFilter(
      "translation_EN",
      "key = 'contact_label_email'"
    );
    if (record) {
      record.set("en", "E-MAIL");
      app.save(record);
    }
  } catch (e) {
    // Record not found; nothing to update.
  }
}, (app) => {
  try {
    const record = app.findFirstRecordByFilter(
      "translation_EN",
      "key = 'contact_label_email'"
    );
    if (record) {
      record.set("en", "Email");
      app.save(record);
    }
  } catch (e) {
    // no-op
  }
});
