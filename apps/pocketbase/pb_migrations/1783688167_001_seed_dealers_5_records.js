/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("dealers");

  const record0 = new Record(collection);
    record0.id = "7pqu0kxpoymbpaj";
    record0.set("name", "NAGY Yachting");
    record0.set("address", "Industriestrasse 2, 8335 Hittnau");
    record0.set("email", "info@nagy.li");
    record0.set("phone", "+41 76 334 10 10");
    record0.set("country", "Switzerland");
    record0.set("latitude", 47.3679073);
    record0.set("longitude", 8.8207002);
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
    record1.id = "6jmzfhqdfssu2sv";
    record1.set("name", "Sportboot- und Industrie-Motoren Olaf Lingr\u00f6n");
    record1.set("address", "Am Wirtschaftshafen 2, 18356 Barth");
    record1.set("email", "firma@boote-lingroen.de");
    record1.set("phone", "+49 38231 89396");
    record1.set("country", "Germany");
    record1.set("latitude", 54.372);
    record1.set("longitude", 12.7285);
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
    record2.id = "uc57lv1jtv2ftlv";
    record2.set("name", "Gineico Queensland Pty Ltd");
    record2.set("address", "G45 / 76\u201384 Waterway Drive, 4209 Coomera, Queensland");
    record2.set("email", "pg@gineico.com");
    record2.set("phone", "+61 7 55560244");
    record2.set("country", "Australia");
    record2.set("latitude", -27.86275);
    record2.set("longitude", 153.338389);
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
    record3.id = "jqfy8v3v4fp6thw";
    record3.set("name", "Kenaz Sciarrino");
    record3.set("address", "Carrer de Portinatx, 35, c, 07660 Santany\u00ed, Illes Balears, Spanien");
    record3.set("email", "kensyachtservices@gmail.com");
    record3.set("country", "Spain");
    record3.set("latitude", 39.3712);
    record3.set("longitude", 3.2253);
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
    record4.id = "jqaywgza8dw2l5t";
    record4.set("name", "ATLANTIQUE NAUTIC");
    record4.set("address", "4 Rue des Orangers, 64700 Hendaye");
    record4.set("email", "c.antoine@atlantiquenautic.fr");
    record4.set("phone", "+33 6 88 05 20 77");
    record4.set("country", "France");
    record4.set("latitude", 43.3687165);
    record4.set("longitude", -1.7794823);
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
  const seededRecordIds = ["jqaywgza8dw2l5t", "jqfy8v3v4fp6thw", "uc57lv1jtv2ftlv", "6jmzfhqdfssu2sv", "7pqu0kxpoymbpaj"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("dealers", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
