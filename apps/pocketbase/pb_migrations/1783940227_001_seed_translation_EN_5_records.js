/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "7roup6xkqjmm4yi";
    record0.set("key", "prod_alt_crew");
    record0.set("en", "Professional Skipper Steers Boat with a Smartphone");
    record0.set("page", "Produkt");
    record0.set("section", "alt_texts");
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
    record1.id = "zgzr6u1fzq6jagm";
    record1.set("key", "prod_alt_float");
    record1.set("en", "float-Magazine Article: Hands-On Test: Navigating Into the Harbor with a Cell Phone");
    record1.set("page", "Produkt");
    record1.set("section", "alt_texts");
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
    record2.id = "b8c8wrucr055zta";
    record2.set("key", "prod_alt_plug");
    record2.set("en", "Overview of System Functions");
    record2.set("page", "Produkt");
    record2.set("section", "alt_texts");
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
    record3.id = "eqny222j82r8vwb";
    record3.set("key", "prod_alt_ecu");
    record3.set("en", "SMARTDOCK-ECU");
    record3.set("page", "Produkt");
    record3.set("section", "alt_texts");
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
    record4.id = "s9wzhcdrxhfbt06";
    record4.set("key", "prod_alt_tcu");
    record4.set("en", "SMARTDOCK-TCU Thruster Control Unit");
    record4.set("page", "Produkt");
    record4.set("section", "alt_texts");
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
  const seededRecordIds = ["s9wzhcdrxhfbt06", "eqny222j82r8vwb", "b8c8wrucr055zta", "zgzr6u1fzq6jagm", "7roup6xkqjmm4yi"];
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
