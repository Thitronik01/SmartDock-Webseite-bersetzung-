/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "liyfdrjvyz6n96z";
    record0.set("key", "agb_header_title");
    record0.set("en", "Terms and Conditions");
    record0.set("page", "agb");
    record0.set("section", "header");
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
    record1.id = "akb8vi6nnd1x1wt";
    record1.set("key", "agb_header_description");
    record1.set("en", "Our Terms and Conditions govern the relationship between us and our customers. Please read them carefully.");
    record1.set("page", "agb");
    record1.set("section", "header");
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
    record2.id = "k21tsg9hp0qluip";
    record2.set("key", "agb_scope_title");
    record2.set("en", "Scope of Application");
    record2.set("page", "agb");
    record2.set("section", "geltungsbereich");
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
    record3.id = "qjuhrxteioa0gmq";
    record3.set("key", "agb_scope_description");
    record3.set("en", "These General Terms and Conditions (GTC) apply to all contracts between Thitronik GmbH and its customers regarding the delivery of goods.");
    record3.set("page", "agb");
    record3.set("section", "geltungsbereich");
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
    record4.id = "rdl2h4o46vjaw22";
    record4.set("key", "agb_scope_terms");
    record4.set("en", "We do not accept any terms and conditions from the customer that differ from ours, unless we have expressly agreed to their validity in writing.");
    record4.set("page", "agb");
    record4.set("section", "geltungsbereich");
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
  const seededRecordIds = ["rdl2h4o46vjaw22", "qjuhrxteioa0gmq", "k21tsg9hp0qluip", "akb8vi6nnd1x1wt", "liyfdrjvyz6n96z"];
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
