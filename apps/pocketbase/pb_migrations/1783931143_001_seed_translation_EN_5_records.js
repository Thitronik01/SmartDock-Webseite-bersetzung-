/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "0emt6l1xixxcw4o";
    record0.set("key", "agb_returns_title");
    record0.set("en", "Returns and Refunds");
    record0.set("page", "agb");
    record0.set("section", "returns_and_refunds");
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
    record1.id = "m0gs2nl97z4wbqr";
    record1.set("key", "agb_returns_policy");
    record1.set("en", "Customers have the right to return goods within 14 days of receipt without providing a reason.");
    record1.set("page", "agb");
    record1.set("section", "returns_and_refunds");
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
    record2.id = "szzqfg9jiw5i5jw";
    record2.set("key", "agb_returns_condition");
    record2.set("en", "The item must be returned in its original condition. The customer is responsible for return shipping costs.");
    record2.set("page", "agb");
    record2.set("section", "returns_and_refunds");
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
    record3.id = "bd6nxvdmmki7yv0";
    record3.set("key", "agb_returns_refund");
    record3.set("en", "Once we have received and inspected the returned merchandise, we will refund the purchase price within 14 days.");
    record3.set("page", "agb");
    record3.set("section", "returns_and_refunds");
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
    record4.id = "blsxygao8oiy7ua";
    record4.set("key", "agb_returns_exceptions");
    record4.set("en", "Exceptions to this return policy apply to personalized or custom-made products.");
    record4.set("page", "agb");
    record4.set("section", "returns_and_refunds");
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
  const seededRecordIds = ["blsxygao8oiy7ua", "bd6nxvdmmki7yv0", "szzqfg9jiw5i5jw", "m0gs2nl97z4wbqr", "0emt6l1xixxcw4o"];
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
