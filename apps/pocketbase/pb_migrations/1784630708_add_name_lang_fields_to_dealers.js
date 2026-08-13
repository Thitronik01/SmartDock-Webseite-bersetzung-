/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("dealers");

    collection.fields.add(
      new TextField({
        name: "name_de",
        required: false,
      }),
    );
    collection.fields.add(
      new TextField({
        name: "name_en",
        required: false,
      }),
    );
    collection.fields.add(
      new TextField({
        name: "name_fr",
        required: false,
      }),
    );

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("dealers");

    collection.fields.removeByName("name_de");
    collection.fields.removeByName("name_en");
    collection.fields.removeByName("name_fr");

    app.save(collection);
  },
);
