/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("faqs");

  const record0 = new Record(collection);
    record0.id = "5u9fqqe2jaz501g";
    record0.set("order", 1);
    record0.set("question_de", "Welche BLUETOOTH-Reichweite haben die SMARTDOCK Produkte?");
    record0.set("answer_de", "Bluetooth 5.0, 50m Reichweite");
    record0.set("question_en", "What BLUETOOTH range do SMARTDOCK products have?");
    record0.set("answer_en", "Bluetooth 5.0, 50m range");
    record0.set("question_fr", "[To be translated]");
    record0.set("answer_fr", "[To be translated]");
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
    record1.id = "h2dfg866nzblnvt";
    record1.set("order", 2);
    record1.set("question_de", "Gibt es Probleme, wenn das Display meines Smartphones feucht/nass wird?");
    record1.set("answer_de", "Nein, zuverl\u00e4ssige Steuerung");
    record1.set("question_en", "Are there problems if my smartphone display gets wet/damp?");
    record1.set("answer_en", "No, reliable control");
    record1.set("question_fr", "[To be translated]");
    record1.set("answer_fr", "[To be translated]");
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
    record2.id = "dlp9ym1dt4q2cy6";
    record2.set("order", 3);
    record2.set("question_de", "Ich kann die Steuerung meines Bootes nicht auf dem Smartphone \u00fcbernehmen. Woran kann das liegen?");
    record2.set("answer_de", "Bluetooth-Verbindung, Docking, Akkustand");
    record2.set("question_en", "I cannot take control of my boat on my smartphone. What could be the reason?");
    record2.set("answer_en", "Bluetooth connection, docking, battery level");
    record2.set("question_fr", "[To be translated]");
    record2.set("answer_fr", "[To be translated]");
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
    record3.id = "0xtrul90fqe8eaw";
    record3.set("order", 4);
    record3.set("question_de", "Wie kann ich ein Smartphone mit einem SMARTDOCK-Produkt koppeln?");
    record3.set("answer_de", "Kopplungsmodus aktivieren, App \u00f6ffnen");
    record3.set("question_en", "How can I pair a smartphone with a SMARTDOCK product?");
    record3.set("answer_en", "Activate pairing mode, open app");
    record3.set("question_fr", "[To be translated]");
    record3.set("answer_fr", "[To be translated]");
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
    record4.id = "s0xc31by8hpyqom";
    record4.set("order", 5);
    record4.set("question_de", "Wie kann ich alle mit dem Ger\u00e4t verbundenen Smartphones l\u00f6schen?");
    record4.set("answer_de", "Stromversorgung unterbrechen, Button halten");
    record4.set("question_en", "How can I delete all smartphones connected to the device?");
    record4.set("answer_en", "Interrupt power supply, hold button");
    record4.set("question_fr", "[To be translated]");
    record4.set("answer_fr", "[To be translated]");
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
    record5.id = "fh9sscn4cs80ndl";
    record5.set("order", 6);
    record5.set("question_de", "Wie funktioniert SMARTDOCK?");
    record5.set("answer_de", "Plug-and-Play Installation, Bluetooth-Kopplung");
    record5.set("question_en", "How does SMARTDOCK work?");
    record5.set("answer_en", "Plug-and-play installation, Bluetooth pairing");
    record5.set("question_fr", "[To be translated]");
    record5.set("answer_fr", "[To be translated]");
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
    record6.id = "d02r1scgj24krey";
    record6.set("order", 7);
    record6.set("question_de", "Ist mein Motor mit SMARTDOCK kompatibel?");
    record6.set("answer_de", "Viele Hersteller kompatibel, Konfigurator nutzen");
    record6.set("question_en", "Is my motor compatible with SMARTDOCK?");
    record6.set("answer_en", "Many manufacturers compatible, use configurator");
    record6.set("question_fr", "[To be translated]");
    record6.set("answer_fr", "[To be translated]");
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
    record7.id = "yqwcqhywc4whk5f";
    record7.set("order", 8);
    record7.set("question_de", "Kann SMARTDOCK nachger\u00fcstet werden?");
    record7.set("answer_de", "Ja, Plug-and-Play, auch Einbauservice verf\u00fcgbar");
    record7.set("question_en", "Can SMARTDOCK be retrofitted?");
    record7.set("answer_en", "Yes, plug-and-play, installation service also available");
    record7.set("question_fr", "[To be translated]");
    record7.set("answer_fr", "[To be translated]");
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
    record8.id = "kkel2dwd3hx7szg";
    record8.set("order", 9);
    record8.set("question_de", "Was passiert, wenn die Verbindung zum SMARTDOCK-Produkt abbricht?");
    record8.set("answer_de", "Motoren in Neutralstellung, Steuerstand hat Vorrang");
    record8.set("question_en", "What happens if the connection to the SMARTDOCK product is lost?");
    record8.set("answer_en", "Motors in neutral position, control station has priority");
    record8.set("question_fr", "[To be translated]");
    record8.set("answer_fr", "[To be translated]");
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
    record9.id = "449oe41t987j3rt";
    record9.set("order", 10);
    record9.set("question_de", "Wie lange dauert es, bis ein per App erteilter Steuerbefehl von den Motoren ausgef\u00fchrt wird?");
    record9.set("answer_de", "Ohne Verz\u00f6gerung");
    record9.set("question_en", "How long does it take for a control command given via app to be executed by the motors?");
    record9.set("answer_en", "Without delay");
    record9.set("question_fr", "[To be translated]");
    record9.set("answer_fr", "[To be translated]");
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
    record10.id = "y9m7vhzsah1i6zw";
    record10.set("order", 11);
    record10.set("question_de", "Welche Funktionen bietet die SMARTDOCK-App?");
    record10.set("answer_de", "4 Steuermodi, vertikale/horizontale Ansicht, mehrere Produkte gleichzeitig");
    record10.set("question_en", "What features does the SMARTDOCK app offer?");
    record10.set("answer_en", "4 control modes, vertical/horizontal view, multiple products simultaneously");
    record10.set("question_fr", "[To be translated]");
    record10.set("answer_fr", "[To be translated]");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["y9m7vhzsah1i6zw", "449oe41t987j3rt", "kkel2dwd3hx7szg", "yqwcqhywc4whk5f", "d02r1scgj24krey", "fh9sscn4cs80ndl", "s0xc31by8hpyqom", "0xtrul90fqe8eaw", "dlp9ym1dt4q2cy6", "h2dfg866nzblnvt", "5u9fqqe2jaz501g"];
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
