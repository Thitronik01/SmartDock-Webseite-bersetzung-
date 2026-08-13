/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");
  collection.indexes.push("CREATE UNIQUE INDEX idx_translation_DE_key ON translation_DE (key)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("translation_DE");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_translation_DE_key"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
