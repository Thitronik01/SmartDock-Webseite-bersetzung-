/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("anleitungen");
    collection.fields.add(
      new TextField({
        name: "titel_en",
        required: false,
        max: 0,
        min: 0,
      }),
    );
    app.save(collection);

    const translations = {
      "Installation von SMARTDOCK für Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)":
        "Installation of SMARTDOCK for Volvo Penta single-drive systems (EVC-D/-E)",
      "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C":
        "Installation of SMARTDOCK for Volvo Penta twin-engine systems with EVC-B/-C joystick ",
      "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0":
        "Installation of SMARTDOCK for Volvo Penta twin-engine systems with EVC -C/-D/-E/2.0 joystick",
      "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0":
        "Installation of SMARTDOCK for Volvo Penta twin-drive systems without a joystick (EVC -D/-E/2.0)",
      "Installation von SMARTDOCK für Mercury/Mercruiser-Antriebe mit Joystick":
        "Installation of SMARTDOCK for Mercury/Mercruiser engines with a joystick",
      "Installation von SMARTDOCK für Yamaha-Antriebe mit Joystick":
        "Installation of SMARTDOCK for Yamaha drives with a joystick",
    };

    for (const [de, en] of Object.entries(translations)) {
      let records;
      try {
        records = app.findRecordsByFilter(
          "anleitungen",
          `titel = '${de.replace(/'/g, "\\'")}'`,
        );
      } catch (e) {
        if (e.message && e.message.includes("no rows in result set")) {
          continue;
        }
        throw e;
      }
      for (const record of records) {
        record.set("titel_en", en);
        app.save(record);
      }
    }
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("anleitungen");
    collection.fields.removeByName("titel_en");
    app.save(collection);
  },
);
