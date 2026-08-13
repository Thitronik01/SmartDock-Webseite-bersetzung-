/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("configurator_orders");
  collection.indexes.push("CREATE UNIQUE INDEX idx_configurator_orders_orderNumber ON configurator_orders (orderNumber)");
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("configurator_orders");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_configurator_orders_orderNumber"));
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
