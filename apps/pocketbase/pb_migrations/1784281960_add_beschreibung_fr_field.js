/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("anleitungen");

    const existing = collection.fields.getByName("beschreibung_fr");
    if (!existing) {
      collection.fields.add(
        new TextField({
          name: "beschreibung_fr",
          required: false,
        }),
      );
      app.save(collection);
    }
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId("anleitungen");
      collection.fields.removeByName("beschreibung_fr");
      app.save(collection);
    } catch (e) {
      // ignore
    }
  }
);
