/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "li6lhgxmfim2qhm";
    record0.set("key", "config_step7_title");
    record0.set("en", "Summary");
    record0.set("page", "configurator");
    record0.set("section", "step7");
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
    record1.id = "df5yqub3rrcxleo";
    record1.set("key", "config_step7_subtitle");
    record1.set("en", "Check your configuration");
    record1.set("page", "configurator");
    record1.set("section", "step7");
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
    record2.id = "mwkmfrj6xba25ej";
    record2.set("key", "config_summary_ecu");
    record2.set("en", "ECU");
    record2.set("page", "configurator");
    record2.set("section", "summary");
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
    record3.id = "ih4hp3mq5w9nezh";
    record3.set("key", "config_summary_tcu");
    record3.set("en", "TCU");
    record3.set("page", "configurator");
    record3.set("section", "summary");
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
    record4.id = "b26u6na6r890pq9";
    record4.set("key", "config_summary_price");
    record4.set("en", "Price");
    record4.set("page", "configurator");
    record4.set("section", "summary");
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
    record5.id = "lj9x8t9rev4t06a";
    record5.set("key", "config_summary_total");
    record5.set("en", "Total Price");
    record5.set("page", "configurator");
    record5.set("section", "summary");
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
    record6.id = "mczg01h7bc6ekxw";
    record6.set("key", "config_summary_checkout");
    record6.set("en", "Checkout");
    record6.set("page", "configurator");
    record6.set("section", "summary");
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
    record7.id = "ycpiszdd9qrjlgd";
    record7.set("key", "config_summary_back");
    record7.set("en", "Back");
    record7.set("page", "configurator");
    record7.set("section", "summary");
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
    record8.id = "hm4psqtc0ma78ag";
    record8.set("key", "config_summary_empty");
    record8.set("en", "Your shopping cart is empty");
    record8.set("page", "configurator");
    record8.set("section", "summary");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["hm4psqtc0ma78ag", "ycpiszdd9qrjlgd", "mczg01h7bc6ekxw", "lj9x8t9rev4t06a", "b26u6na6r890pq9", "ih4hp3mq5w9nezh", "mwkmfrj6xba25ej", "df5yqub3rrcxleo", "li6lhgxmfim2qhm"];
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
