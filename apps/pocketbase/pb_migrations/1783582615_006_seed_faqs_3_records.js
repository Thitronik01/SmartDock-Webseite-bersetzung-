/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("faqs");

  const record0 = new Record(collection);
    record0.id = "4gfiyl1flx8t0ch";
    record0.set("question", "Wie funktioniert SMARTDOCK?");
    record0.set("answer", "Das jeweilige SMARTDOCK-Ger\u00e4t wird via Plug-and-Play mit der Steuerungselektronik deines Bootes verbunden. Sobald das SMARTDOCK-Ger\u00e4t per Bluetooth gekoppelt ist, kannst du dein Boot von jeder beliebigen Stelle an Bord per App steuern.");
    record0.set("order", 6);
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
    record1.id = "4qhv4bmc4t8qqd0";
    record1.set("question", "Ist mein Motor mit SMARTDOCK kompatibel?");
    record1.set("answer", "SMARTDOCK ist bereits mit vielen Motoren und Strahlruderherstellern kompatibel.\n\nIn unserem Konfigurator erh\u00e4ltst du schnell einen \u00dcberblick \u00fcber die L\u00f6sungen, die zu deinen Anspr\u00fcchen passen.\n\nDu hast deinen Motortyp nicht bei uns gefunden? Dann melde dich gerne per E-Mail oder \u00fcber das Kontaktformular bei uns. Wir integrieren stetig weitere Hersteller und helfen dir gerne weiter.");
    record1.set("order", 7);
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
    record2.id = "l9lpu898mbxx7uk";
    record2.set("question", "Kann SMARTDOCK nachger\u00fcstet werden?");
    record2.set("answer", "Ja, unsere SMARTDOCK-Produkte haben wir speziell f\u00fcr die Nachr\u00fcstung entwickelt.\n\nAufgrund der unkomplizierten Installation via Plug-and-Play kannst du SMARTDOCK sogar ohne technische Vorkenntnisse selbst installieren.\n\nWer das nicht m\u00f6chte, kann unseren Einbauservice nutzen, den du direkt bei deiner Konfiguration anfragen kannst.\n\nSelbstverst\u00e4ndlich kannst du die Installation auch von einem H\u00e4ndler in deiner N\u00e4he durchf\u00fchren lassen.\n\nWirf hierzu gerne einen Blick in unserem H\u00e4ndlerfinder.\n\nInstallation beim H\u00e4ndler i. d. R. innerhalb eines Tages abgeschlossen");
    record2.set("order", 8);
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
  const seededRecordIds = ["l9lpu898mbxx7uk", "4qhv4bmc4t8qqd0", "4gfiyl1flx8t0ch"];
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
