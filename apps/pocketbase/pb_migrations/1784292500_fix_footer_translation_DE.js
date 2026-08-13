/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // The seeded DE translations contained placeholder junk for footer headings,
  // which override the correct static translations. Fix them here.
  const fixes = {
    footer_contact: "Kontakt",
    footer_links: "Links",
  };

  for (const [key, value] of Object.entries(fixes)) {
    try {
      const record = app.findFirstRecordByData("translation_DE", "key", key);
      if (record) {
        record.set("de", value);
        app.save(record);
      }
    } catch (error) {
      if (error.message && error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
}, (app) => {
  // no-op down migration
});
