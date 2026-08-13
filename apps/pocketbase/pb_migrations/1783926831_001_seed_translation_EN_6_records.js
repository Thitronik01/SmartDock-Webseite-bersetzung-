/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "pgiespdtw5co8zu";
    record0.set("key", "impressum_datenschutz_title");
    record0.set("en", "Privacy Policy");
    record0.set("page", "impressum");
    record0.set("section", "datenschutz");
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
    record1.id = "621hzihygk5tib0";
    record1.set("key", "impressum_datenschutz_content");
    record1.set("en", "As a rule, you can use our website without providing any personal information. To the extent that personal information (such as your name, address, or email address) is collected on our website, this is always done on a voluntary basis whenever possible.");
    record1.set("page", "impressum");
    record1.set("section", "datenschutz");
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
    record2.id = "n3fjuy940kvk5f9";
    record2.set("key", "impressum_datenschutz_disclosure");
    record2.set("en", "This information will not be disclosed to third parties without your express consent.");
    record2.set("page", "impressum");
    record2.set("section", "datenschutz");
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
    record3.id = "v5z066iw7r5vge4";
    record3.set("key", "impressum_streitbeilegung_title");
    record3.set("en", "Dispute Resolution");
    record3.set("page", "impressum");
    record3.set("section", "streitbeilegung");
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
    record4.id = "4t6mifvwm7i1jez";
    record4.set("key", "impressum_streitbeilegung_odr");
    record4.set("en", "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. You can find our email address at the top of the legal notice.");
    record4.set("page", "impressum");
    record4.set("section", "streitbeilegung");
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
    record5.id = "wmz8gygm6e348pf";
    record5.set("key", "impressum_streitbeilegung_arbitration");
    record5.set("en", "We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.");
    record5.set("page", "impressum");
    record5.set("section", "streitbeilegung");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["wmz8gygm6e348pf", "4t6mifvwm7i1jez", "v5z066iw7r5vge4", "n3fjuy940kvk5f9", "621hzihygk5tib0", "pgiespdtw5co8zu"];
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
