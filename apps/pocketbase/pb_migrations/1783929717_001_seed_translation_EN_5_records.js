/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "1019brphxkr9g5r";
    record0.set("key", "agb_delivery_title");
    record0.set("en", "Delivery");
    record0.set("page", "agb");
    record0.set("section", "delivery");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "3bw2p1obnasoc7l";
    record1.set("key", "agb_delivery_address");
    record1.set("en", "Delivery will be made to the address provided by the customer. Delivery times are indicated before the order is completed and are not binding.");
    record1.set("page", "agb");
    record1.set("section", "delivery");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "4f3g5s404n8e1ve";
    record2.set("key", "agb_delivery_risk");
    record2.set("en", "The risk of loss or damage to the goods passes to the customer upon handover to the shipping provider.");
    record2.set("page", "agb");
    record2.set("section", "delivery");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "ir6hdltrtpe18ek";
    record3.set("key", "agb_delivery_liability");
    record3.set("en", "We are liable for delivery delays only if they are our fault.");
    record3.set("page", "agb");
    record3.set("section", "delivery");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "cptrt7bmlfr6rzs";
    record4.set("key", "agb_delivery_damage");
    record4.set("en", "If an item arrives damaged or incomplete, please report it immediately.");
    record4.set("page", "agb");
    record4.set("section", "delivery");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["cptrt7bmlfr6rzs", "ir6hdltrtpe18ek", "4f3g5s404n8e1ve", "3bw2p1obnasoc7l", "1019brphxkr9g5r"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_EN", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
