/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("configuration_requests");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_configuration_requests_customerNumber"));
  collection.fields.removeByName("customerNumber");
  return app.save(collection);
}, (app) => {
  try {

  const collection = app.findCollectionByNameOrId("configuration_requests");
  collection.fields.add(new TextField({
    name: "customerNumber",
    required: false,
    min: 0,
    max: 0
  }));
  collection.indexes.push("CREATE UNIQUE INDEX idx_configuration_requests_customerNumber ON configuration_requests (customerNumber)");
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
