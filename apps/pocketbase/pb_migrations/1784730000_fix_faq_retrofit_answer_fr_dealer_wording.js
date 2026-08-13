/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Replace the French wording "localisateur de revendeurs" with "revendeurs"
  // in the retrofit FAQ's French answer, matching the French-only rename of
  // the dealer-finder label. Case-insensitive match; link target/URL unchanged.
  try {
    const records = app.findRecordsByFilter(
      "faqs",
      "answer_fr ~ 'localisateur de revendeurs'",
      "+order",
      500,
      0
    );
    for (const record of records) {
      const current = record.get("answer_fr");
      if (typeof current === "string") {
        const updated = current.replace(/localisateur de revendeurs/gi, (match) => {
          if (match === match.toUpperCase()) return "REVENDEURS";
          if (match[0] === match[0].toUpperCase()) return "Revendeurs";
          return "revendeurs";
        });
        if (updated !== current) {
          record.set("answer_fr", updated);
          app.save(record);
        }
      }
    }
  } catch (error) {
    if (error.message && error.message.includes("no rows in result set")) {
      // nothing to fix
    } else {
      throw error;
    }
  }
}, (app) => {
  // no-op down migration
});
