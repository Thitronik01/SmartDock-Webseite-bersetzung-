/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "74h0mp476t3h18r";
    record0.set("key", "manufacturer_of_drive_technology");
    record0.set("en", "Manufacturer of drive technology");
    record0.set("page", "configurator");
    record0.set("section", "steps");
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
    record1.id = "vf9k4ikgflibjka";
    record1.set("key", "select_manufacturer_main_engines");
    record1.set("en", "Please select the manufacturer of your main engines.");
    record1.set("page", "configurator");
    record1.set("section", "steps");
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
    record2.id = "7ieot2sb3pl3fwg";
    record2.set("key", "button_back");
    record2.set("en", "Back");
    record2.set("page", "configurator");
    record2.set("section", "buttons");
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
    record3.id = "gd81rv60ukw5e8d";
    record3.set("key", "button_ask_question");
    record3.set("en", "Ask a question");
    record3.set("page", "configurator");
    record3.set("section", "buttons");
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
    record4.id = "76w3pf6idtnl5kn";
    record4.set("key", "button_continue");
    record4.set("en", "Continue");
    record4.set("page", "configurator");
    record4.set("section", "buttons");
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
  const seededRecordIds = ["76w3pf6idtnl5kn", "gd81rv60ukw5e8d", "7ieot2sb3pl3fwg", "vf9k4ikgflibjka", "74h0mp476t3h18r"];
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
