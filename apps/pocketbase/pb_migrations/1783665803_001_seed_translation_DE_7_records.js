/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "m1c9ws3oscv56nh";
    record0.set("key", "nav_konfigurator");
    record0.set("de", "Konfigurator");
    record0.set("page", "global");
    record0.set("section", "navbar");
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
    record1.id = "vnfn48z6upv2slh";
    record1.set("key", "nav_haendlerfinder");
    record1.set("de", "H\u00e4ndlerfinder");
    record1.set("page", "global");
    record1.set("section", "navbar");
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
    record2.id = "4wrxylhydfvhvzs";
    record2.set("key", "nav_produkt");
    record2.set("de", "Produkt");
    record2.set("page", "global");
    record2.set("section", "navbar");
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
    record3.id = "2c7utkxxkm6juxp";
    record3.set("key", "nav_funktionen");
    record3.set("de", "Funktionen");
    record3.set("page", "global");
    record3.set("section", "navbar");
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
    record4.id = "jjm3jfh21qn7yfg";
    record4.set("key", "nav_installation");
    record4.set("de", "Installation");
    record4.set("page", "global");
    record4.set("section", "navbar");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "9jxc3uvgh187l0l";
    record5.set("key", "nav_faq");
    record5.set("de", "FAQ");
    record5.set("page", "global");
    record5.set("section", "navbar");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "aoq4lzpr1d5oco9";
    record6.set("key", "nav_kontakt");
    record6.set("de", "Kontakt");
    record6.set("page", "global");
    record6.set("section", "navbar");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["aoq4lzpr1d5oco9", "9jxc3uvgh187l0l", "jjm3jfh21qn7yfg", "2c7utkxxkm6juxp", "4wrxylhydfvhvzs", "vnfn48z6upv2slh", "m1c9ws3oscv56nh"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_DE", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
