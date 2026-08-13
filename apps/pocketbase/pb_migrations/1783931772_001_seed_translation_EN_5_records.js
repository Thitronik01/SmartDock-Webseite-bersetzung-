/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "eom8lv58ilomly0";
    record0.set("key", "agb_contact_legal_heading");
    record0.set("en", "Contact and Legal Relationships");
    record0.set("page", "agb");
    record0.set("section", "contact_legal");
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
    record1.id = "v69mp97dwamnemj";
    record1.set("key", "agb_contact_questions");
    record1.set("en", "If you have any questions or complaints, please contact us at the email address or phone number provided.");
    record1.set("page", "agb");
    record1.set("section", "contact_legal");
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
    record2.id = "a43v4sg82p674oa";
    record2.set("key", "agb_governing_law");
    record2.set("en", "These Terms and Conditions are governed by the laws of the Federal Republic of Germany.");
    record2.set("page", "agb");
    record2.set("section", "contact_legal");
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
    record3.id = "8enb92x5oy0yy24";
    record3.set("key", "agb_jurisdiction");
    record3.set("en", "The place of jurisdiction for all disputes is our company's registered office.");
    record3.set("page", "agb");
    record3.set("section", "contact_legal");
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
    record4.id = "801rxc2lrawhx4h";
    record4.set("key", "agb_severability");
    record4.set("en", "If any provision of these Terms and Conditions is invalid, the remainder of these Terms and Conditions shall remain valid and binding.");
    record4.set("page", "agb");
    record4.set("section", "contact_legal");
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
  const seededRecordIds = ["801rxc2lrawhx4h", "8enb92x5oy0yy24", "a43v4sg82p674oa", "v69mp97dwamnemj", "eom8lv58ilomly0"];
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
