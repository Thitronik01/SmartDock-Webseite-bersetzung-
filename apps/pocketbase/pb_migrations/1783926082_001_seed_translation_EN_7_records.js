/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "f1s85s2rgb32yy4";
    record0.set("key", "impressum_registration_information");
    record0.set("en", "Registration Information");
    record0.set("page", "impressum");
    record0.set("section", "registration");
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
    record1.id = "jcqnnkckwocumd7";
    record1.set("key", "impressum_commercial_register");
    record1.set("en", "Commercial Register: Kiel Local Court");
    record1.set("page", "impressum");
    record1.set("section", "registration");
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
    record2.id = "539zupb7x5k5gof";
    record2.set("key", "impressum_commercial_register_number");
    record2.set("en", "Commercial Register Number: HRB [Number]");
    record2.set("page", "impressum");
    record2.set("section", "registration");
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
    record3.id = "iflxb0f408xuao9";
    record3.set("key", "impressum_vat_number");
    record3.set("en", "Value-Added Tax (VAT) Identification Number: DE [Number]");
    record3.set("page", "impressum");
    record3.set("section", "registration");
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
    record4.id = "7dfo82eti54nso2";
    record4.set("key", "impressum_responsibility_for_content");
    record4.set("en", "Responsibility for Content");
    record4.set("page", "impressum");
    record4.set("section", "responsibility");
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
    record5.id = "3yvq5mcdizy8obq";
    record5.set("key", "impressum_content_disclaimer");
    record5.set("en", "The content on our website has been prepared with the utmost care. However, we cannot guarantee that the content is accurate, complete, or up-to-date.");
    record5.set("page", "impressum");
    record5.set("section", "responsibility");
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
    record6.id = "gss4mdl2cjixlqp";
    record6.set("key", "impressum_service_provider_responsibility");
    record6.set("en", "As a service provider, we are responsible for our own content on these pages in accordance with Section 7(1) of the German Telemedia Act (TMG) and general laws. However, pursuant to Sections 8 through 10 of the TMG, we, as a service provider, are not obligated to monitor third-party information that is transmitted or stored, nor are we required to investigate circumstances that indicate illegal activity.");
    record6.set("page", "impressum");
    record6.set("section", "responsibility");
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
  const seededRecordIds = ["gss4mdl2cjixlqp", "3yvq5mcdizy8obq", "7dfo82eti54nso2", "iflxb0f408xuao9", "539zupb7x5k5gof", "jcqnnkckwocumd7", "f1s85s2rgb32yy4"];
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
