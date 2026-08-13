/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "zlvycarr15epdn0";
    record0.set("key", "agb_liability_title");
    record0.set("en", "Liability for Defects and Warranty");
    record0.set("page", "agb");
    record0.set("section", "M\u00e4ngelhaftung und Gew\u00e4hrleistung");
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
    record1.id = "qc1tyw1sxib9qs1";
    record1.set("key", "agb_liability_guarantee");
    record1.set("en", "We guarantee that the delivered goods are free of defects and conform to the agreed-upon specifications.");
    record1.set("page", "agb");
    record1.set("section", "M\u00e4ngelhaftung und Gew\u00e4hrleistung");
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
    record2.id = "v18a6trp83u0682";
    record2.set("key", "agb_liability_reporting");
    record2.set("en", "Defects must be reported in writing within 14 days of receiving the goods.");
    record2.set("page", "agb");
    record2.set("section", "M\u00e4ngelhaftung und Gew\u00e4hrleistung");
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
    record3.id = "5rn1i1k4pr3x2um";
    record3.set("key", "agb_liability_remedy");
    record3.set("en", "In the event of valid complaints regarding defects, we reserve the right to repair or replace the goods.");
    record3.set("page", "agb");
    record3.set("section", "M\u00e4ngelhaftung und Gew\u00e4hrleistung");
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
    record4.id = "auhw1fg2qvlofx9";
    record4.set("key", "agb_liability_warranty_period");
    record4.set("en", "The statutory warranty period is two years from the date of delivery of the goods.");
    record4.set("page", "agb");
    record4.set("section", "M\u00e4ngelhaftung und Gew\u00e4hrleistung");
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
  const seededRecordIds = ["auhw1fg2qvlofx9", "5rn1i1k4pr3x2um", "v18a6trp83u0682", "qc1tyw1sxib9qs1", "zlvycarr15epdn0"];
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
