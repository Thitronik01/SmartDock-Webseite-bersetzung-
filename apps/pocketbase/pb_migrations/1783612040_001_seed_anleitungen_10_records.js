/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "8unp8pla2ew75ji";
    record0.set("titel", "Quick TCD (TCU)");
    record0.set("beschreibung", "Schnellinstallationsanleitung f\u00fcr Quick TCD TCU-Systeme. Diese Anleitung f\u00fchrt Sie durch die grundlegenden Installationsschritte f\u00fcr die Quick TCD Steuereinheit.");
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
    record1.id = "x26o7jmbkrror3v";
    record1.set("titel", "Vetus (TCU)");
    record1.set("beschreibung", "Installationsanleitung f\u00fcr Vetus TCU-Systeme. Detaillierte Anweisungen zur Installation und Konfiguration von Vetus Steuereinheiten mit SMARTDOCK.");
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
    record2.id = "rc9s0icpnvdw39k";
    record2.set("titel", "Sleipner Side Power (TCU)");
    record2.set("beschreibung", "Installationsanleitung f\u00fcr Sleipner Side Power TCU-Systeme. Schritt-f\u00fcr-Schritt Anleitung zur Installation der Sleipner Side Power Steuereinheit mit SMARTDOCK.");
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
    record3.id = "h39390rfdjs9svw";
    record3.set("titel", "Universell (TCU)");
    record3.set("beschreibung", "Universelle Installationsanleitung f\u00fcr TCU-Systeme. Diese Anleitung bietet allgemeine Richtlinien f\u00fcr die Installation von universellen TCU-Steuereinheiten mit SMARTDOCK.");
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
    record4.id = "bp5rnf16svq4785";
    record4.set("titel", "Installation von SMARTDOCK f\u00fcr Yamaha-Antriebe mit Joystick (ECU)");
    record4.set("beschreibung", "Detaillierte Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Yamaha-Antrieben und Joystick-Steuerung. Diese Anleitung behandelt alle notwendigen Schritte zur korrekten Installation und Inbetriebnahme.");
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
    record5.id = "yzpyqlpinu5o87k";
    record5.set("titel", "Installation von SMARTDOCK f\u00fcr Mercury/Mercruiser-Antriebe mit Joystick (ECU)");
    record5.set("beschreibung", "Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Mercury/Mercruiser-Antrieben und Joystick-Steuerung. Umfassende Anweisungen f\u00fcr Installation, Verdrahtung und Konfiguration.");
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
    record6.id = "4n9l3jxhc8pm0tn";
    record6.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0 (ECU)");
    record6.set("beschreibung", "Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Volvo Penta Doppelantrieben ohne Joystick-Steuerung (EVC -D/-E/2.0). Detaillierte Anweisungen f\u00fcr die Installation und Konfiguration.");
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

  const record7 = new Record(collection);
    record7.id = "wi6qx2sqru8oc66";
    record7.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0 (ECU)");
    record7.set("beschreibung", "Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Volvo Penta Doppelantrieben mit Joystick-Steuerung (EVC -C/-D/-E/2.0). Umfassende Anweisungen f\u00fcr Installation und Inbetriebnahme.");
    record7.set("kategorie", "ECU");
    record7.set("aktiv", true);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "ddu4c95nw4cifbg";
    record8.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C (ECU)");
    record8.set("beschreibung", "Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Volvo Penta Doppelantrieben mit Joystick-Steuerung (EVC -B/-C). Detaillierte Anweisungen f\u00fcr die korrekte Installation und Konfiguration.");
    record8.set("kategorie", "ECU");
    record8.set("aktiv", true);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "wrjogs083nx1ylx";
    record9.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E) (ECU)");
    record9.set("beschreibung", "Installationsanleitung f\u00fcr SMARTDOCK ECU-Systeme mit Volvo Penta Einzelantrieben (EVC -D/-E). Schritt-f\u00fcr-Schritt Anleitung zur Installation und Inbetriebnahme des Systems.");
    record9.set("kategorie", "ECU");
    record9.set("aktiv", true);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["wrjogs083nx1ylx", "ddu4c95nw4cifbg", "wi6qx2sqru8oc66", "4n9l3jxhc8pm0tn", "yzpyqlpinu5o87k", "bp5rnf16svq4785", "h39390rfdjs9svw", "rc9s0icpnvdw39k", "x26o7jmbkrror3v", "8unp8pla2ew75ji"];
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
