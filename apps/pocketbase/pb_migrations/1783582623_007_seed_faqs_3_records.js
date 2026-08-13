/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("faqs");

  const record0 = new Record(collection);
    record0.id = "9dz2m8c0bp11zaj";
    record0.set("question", "Was passiert, wenn die Verbindung zum SMARTDOCK-Produkt abbricht?");
    record0.set("answer", "Sicherheit geht vor: Sollte die Verbindung abbrechen, wechseln die Motoren sofort in die Neutralstellung. So bleibt jedes Man\u00f6ver sicher und kontrolliert.\n\nDer Steuerstand des Bootes hat in jedem Fall Vorrang. Sobald dieser bedient wird, funktioniert auch nur dar\u00fcber die Steuerung.");
    record0.set("order", 9);
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
    record1.id = "q2o0kdkfqqg02vi";
    record1.set("question", "Wie lange dauert es, bis ein per App erteilter Steuerbefehl von den Motoren ausgef\u00fchrt wird?");
    record1.set("answer", "Eine pr\u00e4zise Steuerung ist essenziell, daher wird jeder Steuerbefehl ohne Verz\u00f6gerung ausgef\u00fchrt.");
    record1.set("order", 10);
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
    record2.id = "v4ns0gzvekmevm6";
    record2.set("question", "Welche Funktionen bietet die SMARTDOCK-App?");
    record2.set("answer", "Sobald du deine Ger\u00e4te per Bluetooth gekoppelt hast, erkennt die SMARTDOCK-App, welche Steuerungsm\u00f6glichkeiten f\u00fcr dein Boot verf\u00fcgbar sind.\n\nMit SMARTDOCK kannst du dein Boot intuitiv und unkompliziert steuern. Vier Steuermodi stehen zur Verf\u00fcgung, damit f\u00fcr jede Situation und jeden Benutzer die passende Bedienung gew\u00e4hlt werden kann.\n\nDabei kannst du nicht nur w\u00e4hlen, ob die Ansicht vertikal, horizontal, mittels einem Finger oder zwei Fingern erfolgen soll. Du kannst auch mehrere der in deinem Boot eingebauten SMARTDOCK-Produkte gleichzeitig per App ansteuern.");
    record2.set("order", 11);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["v4ns0gzvekmevm6", "q2o0kdkfqqg02vi", "9dz2m8c0bp11zaj"];
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
