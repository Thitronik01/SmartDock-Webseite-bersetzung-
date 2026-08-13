/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("configuration_requests");
  collection.indexes.push("CREATE UNIQUE INDEX idx_configuration_requests_reference_number ON configuration_requests (reference_number)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("configuration_requests");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_configuration_requests_reference_number"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
