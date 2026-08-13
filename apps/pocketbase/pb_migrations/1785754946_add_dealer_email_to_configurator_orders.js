/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("configurator_orders");
    collection.fields.add(new TextField({
      name: "dealerEmail",
      required: false,
    }));
    collection.fields.add(new TextField({
      name: "dealerName",
      required: false,
    }));
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("configurator_orders");
    collection.fields.removeByName("dealerEmail");
    collection.fields.removeByName("dealerName");
    app.save(collection);
  },
);
