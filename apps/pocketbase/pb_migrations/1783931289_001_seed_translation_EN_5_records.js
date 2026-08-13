/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "gf4o1ecxbk6s6wp";
    record0.set("key", "agb_liability_title");
    record0.set("en", "Limitation of Liability");
    record0.set("page", "agb");
    record0.set("section", "Haftungsbeschr\u00e4nkung");
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
    record1.id = "0p2ag4m0zdfuv2x";
    record1.set("key", "agb_liability_indirect");
    record1.set("en", "We are not liable for any indirect, incidental, or consequential damages arising from the use of, or the inability to use, our products.");
    record1.set("page", "agb");
    record1.set("section", "Haftungsbeschr\u00e4nkung");
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
    record2.id = "4c3irppb4n96vbg";
    record2.set("key", "agb_liability_limit");
    record2.set("en", "Our total liability is limited to the purchase price of the product in question.");
    record2.set("page", "agb");
    record2.set("section", "Haftungsbeschr\u00e4nkung");
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
    record3.id = "efutsnm0gslxysf";
    record3.set("key", "agb_liability_exception");
    record3.set("en", "This limitation of liability does not apply to damages caused by willful misconduct or gross negligence.");
    record3.set("page", "agb");
    record3.set("section", "Haftungsbeschr\u00e4nkung");
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
    record4.id = "asgrd3a11bstyjx";
    record4.set("key", "agb_liability_misuse");
    record4.set("en", "We are not liable for any damage resulting from misuse, improper handling, or failure to follow the instructions for use.");
    record4.set("page", "agb");
    record4.set("section", "Haftungsbeschr\u00e4nkung");
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
  const seededRecordIds = ["asgrd3a11bstyjx", "efutsnm0gslxysf", "4c3irppb4n96vbg", "0p2ag4m0zdfuv2x", "gf4o1ecxbk6s6wp"];
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
