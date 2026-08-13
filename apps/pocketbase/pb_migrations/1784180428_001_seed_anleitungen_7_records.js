/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "obtksgzjjfq8mbm";
    record0.set("titel", "Quick TCD");
    record0.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr TCU");
    record0.set("kategorie", "TCU");
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
    record1.id = "pk00u661igizrps";
    record1.set("titel", "Vetus");
    record1.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr TCU");
    record1.set("kategorie", "TCU");
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
    record2.id = "vg464iaea8uznhd";
    record2.set("titel", "Sleipner Side Power");
    record2.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr TCU");
    record2.set("kategorie", "TCU");
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

  const record3 = new Record(collection);
    record3.id = "celmz4noad39wpn";
    record3.set("titel", "Universell");
    record3.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr TCU");
    record3.set("kategorie", "TCU");
    record3.set("aktiv", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "337cp1alrjwrnt0";
    record4.set("titel", "Installation von SMARTDOCK f\u00fcr Yamaha-Antriebe mit Joystick");
    record4.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Yamaha");
    record4.set("kategorie", "ECU");
    record4.set("aktiv", true);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "5fbj0zzxxjnxvkq";
    record5.set("titel", "Installation von SMARTDOCK f\u00fcr Mercury/Mercruiser-Antriebe mit Joystick");
    record5.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Mercury/Mercruiser");
    record5.set("kategorie", "ECU");
    record5.set("aktiv", true);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "6jyst7hobko7fs2";
    record6.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0");
    record6.set("beschreibung", "7-Schritte Installationsanleitung f\u00fcr ECU mit Volvo Penta");
    record6.set("kategorie", "ECU");
    record6.set("aktiv", true);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["6jyst7hobko7fs2", "5fbj0zzxxjnxvkq", "337cp1alrjwrnt0", "celmz4noad39wpn", "vg464iaea8uznhd", "pk00u661igizrps", "obtksgzjjfq8mbm"];
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
