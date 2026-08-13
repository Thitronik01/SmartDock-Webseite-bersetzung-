/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("dealers");

    if (!collection.fields.getByName("website")) {
      collection.fields.add(new TextField({ name: "website", required: false }));
    }
    if (!collection.fields.getByName("website2")) {
      collection.fields.add(new TextField({ name: "website2", required: false }));
    }

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("dealers");
    collection.fields.removeByName("website");
    collection.fields.removeByName("website2");
    app.save(collection);
  }
);
