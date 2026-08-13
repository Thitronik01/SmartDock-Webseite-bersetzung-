/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("faqs");

  const record0 = new Record(collection);
    record0.id = "orjr89foypycpbv";
    record0.set("question", "Ich kann die Steuerung meines Bootes nicht auf dem Smartphone \u00fcbernehmen. Woran kann das liegen?");
    record0.set("answer", "Es kann verschiedene Gr\u00fcnde haben, wenn du dein Boot nicht mit deinem Smartphone steuern kannst.\n\n1. Die Bluetooth-Verbindung ist nicht aktiv.\n2. Docking ist am Joystick nicht aktiviert / der Gashebel steht nicht in Neutralstellung.\n3. Zu niedriger Akkustand.\n\nTippe in der SMARTDOCK App auf das Zahnrad-Symbol und pr\u00fcfe unter \u201eVerbundene Ger\u00e4te\u201c, ob unter dem Namen des Ger\u00e4ts \u201econnected\u201c steht. Nur dann ist dein Ger\u00e4t verbunden.\n\nUm die Steuerung deines Bootes auf dem Smartphone zu \u00fcbernehmen, muss Docking am Joystick aktiviert sein bzw. der Gashebel in der Neutralstellung stehen. Vergewissere dich am Steuerstand, dass dies der Fall ist.\n\nDer Akkustand deines Smartphones liegt unter 18 Prozent. Aus Sicherheitsgr\u00fcnden wird die Steuerung per Smartphone verhindert, wenn dein Smartphone-Akkustand weniger als 18 Prozent betr\u00e4gt. Bitte lade dein Endger\u00e4t auf, um die Steuerung \u00fcbernehmen zu k\u00f6nnen.");
    record0.set("order", 3);
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
    record1.id = "gf99sbuqsc2ebhs";
    record1.set("question", "Wie kann ich ein Smartphone mit einem SMARTDOCK-Produkt koppeln?");
    record1.set("answer", "Installiere zun\u00e4chst die SMARTDOCK App auf dem neu zu koppelnden Smartphone und aktiviere Bluetooth f\u00fcr die App in den Einstellungen.\n\nUm das Smartphone mit dem entsprechenden SMARTDOCK-Produkt zu koppeln, musst du den Kopplungsmodus an dem SMARTDOCK-Produkt aktivieren. Dazu hast du zwei M\u00f6glichkeiten:\n\nVariante 1:\nAktiviere BLUETOOTH f\u00fcr die SMARTDOCK App in den Einstellungen des neu anzulernenden Smartphones.\nDr\u00fccke den Taster am SMARTDOCK-Produkt, bis die LED durchg\u00e4ngig blau leuchtet.\n\nVariante 2:\n\u00d6ffne die App auf einem bereits verbundenen Smartphone und aktiviere den Kopplungsmodus, indem du auf \u201eSteuercomputer\u201c tippst, das Ger\u00e4t ausw\u00e4hlst und dann auf die Schaltfl\u00e4che \u201eKopplungsmodus aktivieren\u201c tippst.\n\nSobald der Kopplungsmodus des SMARTDOCK-Produkts aktiviert ist, \u00f6ffnest du die SMARTDOCK App auf dem neu zu koppelnden Smartphone.\n\nAuf dem Startbildschirm tippst du auf das Zahnrad-Symbol. W\u00e4hle dann \u201eVerbundene Ger\u00e4te\u201c -> \"Steuercomputer suchen\". Eine Liste der verf\u00fcgbaren Ger\u00e4te wird angezeigt. W\u00e4hle das gew\u00fcnschte Produkt aus. Ein Dialogfenster zeigt dir an, dass die Verbindung hergestellt wird.");
    record1.set("order", 4);
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
    record2.id = "rgogdkvj0npctpf";
    record2.set("question", "Wie kann ich alle mit dem Ger\u00e4t verbundenen Smartphones l\u00f6schen?");
    record2.set("answer", "Um die mit einem SMARTDOCK-Ger\u00e4t gekoppelten Smartphones zu l\u00f6schen, gehst du folgenderma\u00dfen vor:\n\nUnterbrich die Stromversorgung des SMARTDOCK-Produktes, indem du den entsprechenden Stecker des Ger\u00e4tes abziehst.\nHalte den Taster gedr\u00fcckt und stelle die Stromversorgung wieder her.\n\nDas Ger\u00e4t gibt eine aufsteigende Tonfolge aus, und die LED blinkt einige Male schnell. Anschlie\u00dfend wechselt die LED auf Dauerleuchten und signalisiert damit, dass der Kopplungsmodus aktiv ist.\n\nAlle mit dem SMARTDOCK-Ger\u00e4t verbundenen Smartphones wurden gel\u00f6scht, und du kannst jetzt ein neues Ger\u00e4t koppeln.\n\nAchtung:\nWenn du mehrere SMARTDOCK-Produkte installiert hast, musst du den L\u00f6schvorgang f\u00fcr jedes SMARTDOCK-Ger\u00e4t einzeln durchf\u00fchren.");
    record2.set("order", 5);
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
  const seededRecordIds = ["rgogdkvj0npctpf", "gf99sbuqsc2ebhs", "orjr89foypycpbv"];
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
