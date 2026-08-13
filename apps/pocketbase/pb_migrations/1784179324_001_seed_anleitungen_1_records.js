/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "cubhmop1nuyi97g";
    record0.set("titel", "Universell");
    record0.set("kategorie", "TCU");
    record0.set("aktiv", true);
    record0.set("beschreibung", "1. Installation vorbereiten - Stromversorgung der Strahlruder unterbrechen\n2. Stecker der Strahlruder freilegen - Im Steuerstand bei Bedienpanel\n3. Stecker trennen - Bug- und/oder Hecksteuerung l\u00f6sen\n4. TCU dazwischenklemmen - Mit mitgeliefertem Kabelbaum anschlie\u00dfen\n5. App installieren - SMARTDOCK App aus Google Play Store oder App Store\n6. Kopplungsmodus der TCU starten - Spannungsversorgung wiederherstellen, LED leuchtet\n7. App mit TCU koppeln - \"Starten\" Button dr\u00fccken, automatische Einrichtung durchf\u00fchren");
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
  const seededRecordIds = ["cubhmop1nuyi97g"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("anleitungen", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
