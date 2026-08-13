/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "l9fy2x97nkjrsji";
    record0.set("key", "prod_page_title");
    record0.set("en", "Products");
    record0.set("page", "produkte");
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
    record1.id = "yc42uchn15a11vi";
    record1.set("key", "prod_page_subtitle");
    record1.set("en", "Our Product Range");
    record1.set("page", "produkte");
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
    record2.id = "h44omtjey2aurei";
    record2.set("key", "prod_ecu_title");
    record2.set("en", "Engine Control Unit (ECU)");
    record2.set("page", "produkte");
    record2.set("section", "ecu");
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
    record3.id = "urasi5h6r2su7yo";
    record3.set("key", "prod_ecu_desc");
    record3.set("en", "Advanced engine control solutions for optimal performance and efficiency");
    record3.set("page", "produkte");
    record3.set("section", "ecu");
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
    record4.id = "uj8io7f2x0b5edt";
    record4.set("key", "prod_tcu_title");
    record4.set("en", "Transmission Control Unit (TCU)");
    record4.set("page", "produkte");
    record4.set("section", "tcu");
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
    record5.id = "lzabc5lxrydlhn2";
    record5.set("key", "prod_tcu_desc");
    record5.set("en", "Precision transmission control for smooth and responsive driving");
    record5.set("page", "produkte");
    record5.set("section", "tcu");
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
    record6.id = "f6fhpdybbxjg6p1";
    record6.set("key", "prod_learn_more");
    record6.set("en", "Learn More");
    record6.set("page", "produkte");
    record6.set("section", "cta");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "vl0n0bzt7amxlp5";
    record7.set("key", "prod_contact_us");
    record7.set("en", "Contact Us");
    record7.set("page", "produkte");
    record7.set("section", "cta");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "63p2i0u777p6nts";
    record8.set("key", "prod_features");
    record8.set("en", "Features");
    record8.set("page", "produkte");
    record8.set("section", "details");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "z3jmvxeqrcfigfs";
    record9.set("key", "prod_specifications");
    record9.set("en", "Specifications");
    record9.set("page", "produkte");
    record9.set("section", "details");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "ferm3xt86gx94xv";
    record10.set("key", "prod_compatibility");
    record10.set("en", "Compatibility");
    record10.set("page", "produkte");
    record10.set("section", "details");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "9v116g6nzusfcns";
    record11.set("key", "prod_support");
    record11.set("en", "Support");
    record11.set("page", "produkte");
    record11.set("section", "details");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["9v116g6nzusfcns", "ferm3xt86gx94xv", "z3jmvxeqrcfigfs", "63p2i0u777p6nts", "vl0n0bzt7amxlp5", "f6fhpdybbxjg6p1", "lzabc5lxrydlhn2", "uj8io7f2x0b5edt", "urasi5h6r2su7yo", "h44omtjey2aurei", "yc42uchn15a11vi", "l9fy2x97nkjrsji"];
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
