/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "tusbu44lxn75ne6";
    record0.set("key", "appDownload_title");
    record0.set("de", "App downloaden und Offline testen.");
    record0.set("page", "HomePage");
    record0.set("section", "AppDownload");
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
    record1.id = "05zup0qf36nj3gb";
    record1.set("key", "appDownload_description");
    record1.set("de", "\u00dcberzeuge dich selbst von der einfachen Bedienung. Lade die SMARTDOCK App herunter und teste sie im Offline-Modus.");
    record1.set("page", "HomePage");
    record1.set("section", "AppDownload");
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
    record2.id = "jx2cc59bk68dt31";
    record2.set("key", "contact_title");
    record2.set("de", "Kontaktiere uns");
    record2.set("page", "HomePage");
    record2.set("section", "Contact");
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
    record3.id = "ekjm78xg5aafbkr";
    record3.set("key", "contact_description");
    record3.set("de", "Bereit f\u00fcr intelligentere Hafenman\u00f6ver? Lass uns \u00fcber deine Anforderungen sprechen.");
    record3.set("page", "HomePage");
    record3.set("section", "Contact");
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
    record4.id = "dm4qtjp2xcyesl7";
    record4.set("key", "contact_form_name_label");
    record4.set("de", "Name *");
    record4.set("page", "HomePage");
    record4.set("section", "Contact");
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
    record5.id = "as2iu1tykwl4l45";
    record5.set("key", "contact_form_name_placeholder");
    record5.set("de", "Dein Name");
    record5.set("page", "HomePage");
    record5.set("section", "Contact");
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
    record6.id = "y147ajmwuqxg0db";
    record6.set("key", "contact_form_email_label");
    record6.set("de", "E-Mail *");
    record6.set("page", "HomePage");
    record6.set("section", "Contact");
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
    record7.id = "wrs77hralwx77zz";
    record7.set("key", "contact_form_email_placeholder");
    record7.set("de", "deine@email.de");
    record7.set("page", "HomePage");
    record7.set("section", "Contact");
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
    record8.id = "imx0v8rbc7vj3wg";
    record8.set("key", "contact_form_company_label");
    record8.set("de", "Unternehmen");
    record8.set("page", "HomePage");
    record8.set("section", "Contact");
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
    record9.id = "r4nbksz5cakssxj";
    record9.set("key", "contact_form_company_placeholder");
    record9.set("de", "Dein Unternehmen");
    record9.set("page", "HomePage");
    record9.set("section", "Contact");
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
    record10.id = "jt5c6g1obo6a75c";
    record10.set("key", "contact_form_phone_label");
    record10.set("de", "Telefon");
    record10.set("page", "HomePage");
    record10.set("section", "Contact");
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
    record11.id = "1h83tgirgmdpbj3";
    record11.set("key", "contact_form_phone_placeholder");
    record11.set("de", "Nummer");
    record11.set("page", "HomePage");
    record11.set("section", "Contact");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "ujto0uqk5s7ovok";
    record12.set("key", "contact_form_message_label");
    record12.set("de", "Nachricht *");
    record12.set("page", "HomePage");
    record12.set("section", "Contact");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "vmjg9mfwsf236ib";
    record13.set("key", "contact_form_message_placeholder");
    record13.set("de", "Beschreibe deine Anforderungen...");
    record13.set("page", "HomePage");
    record13.set("section", "Contact");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "8p2etv37eginu8y";
    record14.set("key", "contact_form_submit_button");
    record14.set("de", "Anfrage senden");
    record14.set("page", "HomePage");
    record14.set("section", "Contact");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "dtixod2qbq0erjf";
    record15.set("key", "contact_info_heading");
    record15.set("de", "Kontaktinformationen");
    record15.set("page", "HomePage");
    record15.set("section", "Contact");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "6uu38v3jl01xz3y";
    record16.set("key", "contact_info_description");
    record16.set("de", "Direkter Draht zu unserem Team in Eckernf\u00f6rde.");
    record16.set("page", "HomePage");
    record16.set("section", "Contact");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "cnqr9mbns77b6fu";
    record17.set("key", "contact_info_phone_label");
    record17.set("de", "TELEFON (Zentrale)");
    record17.set("page", "HomePage");
    record17.set("section", "Contact");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "r0ie3r6lpd01d5w";
    record18.set("key", "contact_info_email_label");
    record18.set("de", "E-MAIL");
    record18.set("page", "HomePage");
    record18.set("section", "Contact");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "6uo42qb236jqijf";
    record19.set("key", "contact_info_address_label");
    record19.set("de", "ADRESSE");
    record19.set("page", "HomePage");
    record19.set("section", "Contact");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["6uo42qb236jqijf", "r0ie3r6lpd01d5w", "cnqr9mbns77b6fu", "6uu38v3jl01xz3y", "dtixod2qbq0erjf", "8p2etv37eginu8y", "vmjg9mfwsf236ib", "ujto0uqk5s7ovok", "1h83tgirgmdpbj3", "jt5c6g1obo6a75c", "r4nbksz5cakssxj", "imx0v8rbc7vj3wg", "wrs77hralwx77zz", "y147ajmwuqxg0db", "as2iu1tykwl4l45", "dm4qtjp2xcyesl7", "ekjm78xg5aafbkr", "jx2cc59bk68dt31", "05zup0qf36nj3gb", "tusbu44lxn75ne6"];
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
