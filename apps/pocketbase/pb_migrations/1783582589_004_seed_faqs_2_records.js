/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("faqs");

  const record0 = new Record(collection);
    record0.id = "jjq0vf4m11fzx0q";
    record0.set("question", "Welche BLUETOOTH-Reichweite haben die SMARTDOCK Produkte?");
    record0.set("answer", "Die SMARTDOCK Produkte nutzen Bluetooth Low Energy 5.0 und erreichen eine Reichweite von ca. 50 Metern.");
    record0.set("order", 1);
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
    record1.id = "aya7kwaqm6n3b9g";
    record1.set("question", "Gibt es Probleme, wenn das Display meines Smartphones feucht/nass wird?");
    record1.set("answer", "Nein, du kannst dein Boot auch mit einem nassen/feuchten Display zuverl\u00e4ssig steuern.");
    record1.set("order", 2);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["aya7kwaqm6n3b9g", "jjq0vf4m11fzx0q"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("faqs", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
