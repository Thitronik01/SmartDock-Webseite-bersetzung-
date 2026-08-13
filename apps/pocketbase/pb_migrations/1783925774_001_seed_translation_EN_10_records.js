/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "s3qhsv1ch31rn3r";
    record0.set("key", "impressum_page_title");
    record0.set("en", "Legal Notice");
    record0.set("page", "impressum");
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
    record1.id = "hguras3eac96hp3";
    record1.set("key", "impressum_page_description");
    record1.set("en", "Legal information about our company, our contact information, and important details in accordance with German law");
    record1.set("page", "impressum");
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
    record2.id = "kcd6fizq62u4865";
    record2.set("key", "impressum_company_info_title");
    record2.set("en", "Company Information");
    record2.set("page", "impressum");
    record2.set("section", "company");
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
    record3.id = "zn3k0ewnqm923i9";
    record3.set("key", "impressum_company_name");
    record3.set("en", "Thitronik GmbH");
    record3.set("page", "impressum");
    record3.set("section", "company");
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
    record4.id = "9y698qzdbjbivyx";
    record4.set("key", "impressum_company_street");
    record4.set("en", "Finkenweg 11\u201315");
    record4.set("page", "impressum");
    record4.set("section", "company");
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
    record5.id = "f4o5g2wl0wru171";
    record5.set("key", "impressum_company_city");
    record5.set("en", "24340 Eckernf\u00f6rde");
    record5.set("page", "impressum");
    record5.set("section", "company");
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
    record6.id = "iz2qpatnm0pzz3c";
    record6.set("key", "impressum_company_country");
    record6.set("en", "Germany");
    record6.set("page", "impressum");
    record6.set("section", "company");
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
    record7.id = "6tr4eixv2wp8bda";
    record7.set("key", "impressum_managing_director");
    record7.set("en", "Managing Director: [Name]");
    record7.set("page", "impressum");
    record7.set("section", "company");
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
    record8.id = "vonb6et6koexf4s";
    record8.set("key", "impressum_phone");
    record8.set("en", "Phone: [number]");
    record8.set("page", "impressum");
    record8.set("section", "company");
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
    record9.id = "dr4886f7w5udanw";
    record9.set("key", "impressum_email");
    record9.set("en", "Email: smartdock@thitronik.de");
    record9.set("page", "impressum");
    record9.set("section", "company");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["dr4886f7w5udanw", "vonb6et6koexf4s", "6tr4eixv2wp8bda", "iz2qpatnm0pzz3c", "f4o5g2wl0wru171", "9y698qzdbjbivyx", "zn3k0ewnqm923i9", "kcd6fizq62u4865", "hguras3eac96hp3", "s3qhsv1ch31rn3r"];
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
