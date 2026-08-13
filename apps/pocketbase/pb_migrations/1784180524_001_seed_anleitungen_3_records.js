/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "dql8d8pt3achiap";
    record0.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0");
    record0.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Volvo Penta Doppelantrieb mit Joystick");
    record0.set("kategorie", "ECU");
    record0.set("aktiv", true);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "fer7cp5fbf9ocq9";
    record1.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C");
    record1.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Volvo Penta Doppelantrieb mit Joystick");
    record1.set("kategorie", "ECU");
    record1.set("aktiv", true);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "nzdk8g7p2xu4jxi";
    record2.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)");
    record2.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Volvo Penta Einzelantrieb");
    record2.set("kategorie", "ECU");
    record2.set("aktiv", true);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["nzdk8g7p2xu4jxi", "fer7cp5fbf9ocq9", "dql8d8pt3achiap"];
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
