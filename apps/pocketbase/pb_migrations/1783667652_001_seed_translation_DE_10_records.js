/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "wfmniur3vhxu9qw";
    record0.set("key", "advantage_1_title");
    record0.set("de", "Intuitive Bedienung");
    record0.set("page", "home");
    record0.set("section", "advantages");
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
    record1.id = "o0hbtqjn77tezld";
    record1.set("key", "advantage_1_desc");
    record1.set("de", "Die App ist klar und verst\u00e4ndlich aufgebaut. Eine Fingerbewegung gen\u00fcgt, um Steuerbefehle auszul\u00f6sen. So werden auch anspruchsvolle Man\u00f6ver leichter beherrschbar \u2013 ohne komplizierte Zusatzbedienung.");
    record1.set("page", "home");
    record1.set("section", "advantages");
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
    record2.id = "dqhxzuod5kzoido";
    record2.set("key", "advantage_2_title");
    record2.set("de", "Pr\u00e4zise Kontrolle");
    record2.set("page", "home");
    record2.set("section", "advantages");
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
    record3.id = "b8519db2xuolxdu";
    record3.set("key", "advantage_2_desc");
    record3.set("de", "Ob Motoren, Bugstrahlruder oder Heckstrahlruder: SMARTDOCK erm\u00f6glicht eine fein abgestimmte, verz\u00f6gerungsfreie Steuerung deines Bootes. Das hilft besonders auf engem Raum, bei Wind oder bei Str\u00f6mung.");
    record3.set("page", "home");
    record3.set("section", "advantages");
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
    record4.id = "3o2k7ywnitiqc9w";
    record4.set("key", "advantage_3_title");
    record4.set("de", "Starke Reichweite");
    record4.set("page", "home");
    record4.set("section", "advantages");
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
    record5.id = "6boddtr23sgmg7g";
    record5.set("key", "advantage_3_desc");
    record5.set("de", "SMARTDOCK nutzt Bluetooth LE: etabliert und zuverl\u00e4ssig. Mit \u00fcber 40 Kan\u00e4len erreicht das System eine Reichweite von 50 Metern \u2013 f\u00fcr eine stabile Verbindung, verz\u00f6gerungsfreie Steuerbefehle und volle Bewegungsfreiheit an Bord.");
    record5.set("page", "home");
    record5.set("section", "advantages");
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
    record6.id = "uj2og0v7grsfgoi";
    record6.set("key", "advantage_4_title");
    record6.set("de", "Schnell integriert");
    record6.set("page", "home");
    record6.set("section", "advantages");
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
    record7.id = "wpnaa21b1819c0y";
    record7.set("key", "advantage_4_desc");
    record7.set("de", "SMARTDOCK ist als Plug & Play-L\u00f6sung konzipiert und l\u00e4sst sich in kompatible Antriebs- und Thruster-Systeme integrieren. Das reduziert Aufwand bei der Installation und macht den Einstieg besonders einfach.");
    record7.set("page", "home");
    record7.set("section", "advantages");
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
    record8.id = "i1gc9z41fovuvsr";
    record8.set("key", "advantage_5_title");
    record8.set("de", "Zukunftssicher gedacht");
    record8.set("page", "home");
    record8.set("section", "advantages");
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
    record9.id = "jqy9boohl61hget";
    record9.set("key", "advantage_5_desc");
    record9.set("de", "Als App-gesteuertes System ist SMARTDOCK modern, updatef\u00e4hig und modular erweiterbar. So investierst du nicht nur in mehr Komfort beim n\u00e4chsten Hafenman\u00f6ver, sondern in eine L\u00f6sung, die mit deinem Boot mitwachsen kann.");
    record9.set("page", "home");
    record9.set("section", "advantages");
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
  const seededRecordIds = ["jqy9boohl61hget", "i1gc9z41fovuvsr", "wpnaa21b1819c0y", "uj2og0v7grsfgoi", "6boddtr23sgmg7g", "3o2k7ywnitiqc9w", "b8519db2xuolxdu", "dqhxzuod5kzoido", "o0hbtqjn77tezld", "wfmniur3vhxu9qw"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_DE", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
