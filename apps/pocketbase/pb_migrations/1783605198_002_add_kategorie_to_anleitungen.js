/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const existing = collection.fields.getByName("kategorie");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("kategorie"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "kategorie",
    required: false,
    values: ["ECU", "TCU"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("anleitungen");
    collection.fields.removeByName("kategorie");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
