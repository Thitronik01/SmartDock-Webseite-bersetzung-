/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "cjd1dd0o5g2lws1";
    record0.set("key", "impressum_liability_for_links_title");
    record0.set("en", "Liability for Links");
    record0.set("page", "impressum");
    record0.set("section", "legal");
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
    record1.id = "dp4a4n2kvrci60z";
    record1.set("key", "impressum_liability_for_links_content");
    record1.set("en", "Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the linked sites is always responsible for their content.");
    record1.set("page", "impressum");
    record1.set("section", "legal");
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
    record2.id = "sroanbtmifceyds";
    record2.set("key", "impressum_liability_for_links_review");
    record2.set("en", "The linked pages were reviewed for possible legal violations at the time the links were created. No illegal content was apparent at the time the links were created.");
    record2.set("page", "impressum");
    record2.set("section", "legal");
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
    record3.id = "lsjzeswcq3ggo0i";
    record3.set("key", "impressum_copyright_title");
    record3.set("en", "Copyright");
    record3.set("page", "impressum");
    record3.set("section", "legal");
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
    record4.id = "3n036l06nnwxtxc";
    record4.set("key", "impressum_copyright_content");
    record4.set("en", "The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, adaptation, distribution, and any other form of use beyond the scope of copyright law require the written consent of the author or copyright holder.");
    record4.set("page", "impressum");
    record4.set("section", "legal");
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
  const seededRecordIds = ["3n036l06nnwxtxc", "lsjzeswcq3ggo0i", "sroanbtmifceyds", "dp4a4n2kvrci60z", "cjd1dd0o5g2lws1"];
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
