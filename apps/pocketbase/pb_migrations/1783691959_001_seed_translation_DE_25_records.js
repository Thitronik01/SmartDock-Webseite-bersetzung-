/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "9mlczp28c6c9ewm";
    record0.set("key", "faq_breadcrumb");
    record0.set("de", "Startseite");
    record0.set("page", "FAQ");
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
    record1.id = "korrmls3chab7na";
    record1.set("key", "faq_title");
    record1.set("de", "H\u00e4ufig gestellte Fragen");
    record1.set("page", "FAQ");
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
    record2.id = "xjayjim47mfascx";
    record2.set("key", "faq_description");
    record2.set("de", "Finden Sie Antworten auf die wichtigsten Fragen rund um SMARTDOCK, Installation und Nutzung.");
    record2.set("page", "FAQ");
    record2.set("section", "header");
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
    record3.id = "xp0u2l5s0ga0yds";
    record3.set("key", "faq_q1_question");
    record3.set("de", "Welche BLUETOOTH-Reichweite haben die SMARTDOCK Produkte?");
    record3.set("page", "FAQ");
    record3.set("section", "content");
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
    record4.id = "ludztzvtlc90vcd";
    record4.set("key", "faq_q1_answer");
    record4.set("de", "Die SMARTDOCK Produkte nutzen Bluetooth Low Energy 5.0 und erreichen eine Reichweite von ca. 50 Metern.");
    record4.set("page", "FAQ");
    record4.set("section", "content");
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
    record5.id = "fsehx5dcnbrqlbg";
    record5.set("key", "faq_q2_question");
    record5.set("de", "Gibt es Probleme, wenn das Display meines Smartphones feucht/nass wird?");
    record5.set("page", "FAQ");
    record5.set("section", "content");
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
    record6.id = "j7rfkyxyfmn8yl9";
    record6.set("key", "faq_q2_answer");
    record6.set("de", "Nein, du kannst dein Boot auch mit einem nassen/feuchten Display zuverl\u00e4ssig steuern.");
    record6.set("page", "FAQ");
    record6.set("section", "content");
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
    record7.id = "zbde20tzonfeok1";
    record7.set("key", "faq_q3_question");
    record7.set("de", "Ich kann die Steuerung meines Bootes nicht auf dem Smartphone \u00fcbernehmen. Woran kann das liegen?");
    record7.set("page", "FAQ");
    record7.set("section", "content");
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
    record8.id = "uthljcjwlihtqui";
    record8.set("key", "faq_q3_answer");
    record8.set("de", "Es kann verschiedene Gr\u00fcnde haben: 1. Die Bluetooth-Verbindung ist nicht aktiv. 2. Docking ist am Joystick nicht aktiviert / der Gashebel steht nicht in Neutralstellung. 3. Zu niedriger Akkustand. Tippe in der SMARTDOCK App auf das Zahnrad-Symbol und pr\u00fcfe unter Verbundene Ger\u00e4te, ob connected steht. Um die Steuerung zu \u00fcbernehmen, muss Docking aktiviert sein. Der Akkustand muss \u00fcber 18 Prozent liegen.");
    record8.set("page", "FAQ");
    record8.set("section", "content");
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
    record9.id = "hi8he0bgsf1hmco";
    record9.set("key", "faq_q4_question");
    record9.set("de", "Wie kann ich ein Smartphone mit einem SMARTDOCK-Produkt koppeln?");
    record9.set("page", "FAQ");
    record9.set("section", "content");
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
    record10.id = "3y2ek76u5mve2hp";
    record10.set("key", "faq_q4_answer");
    record10.set("de", "Installiere die SMARTDOCK App und aktiviere Bluetooth. Aktiviere den Kopplungsmodus am SMARTDOCK-Produkt (Variante 1: Dr\u00fccke den Taster bis LED blau leuchtet. Variante 2: Nutze die App auf einem verbundenen Smartphone). \u00d6ffne die App auf dem neuen Smartphone, tippe auf Zahnrad-Symbol, w\u00e4hle Verbundene Ger\u00e4te -> Steuercomputer suchen und w\u00e4hle das Ger\u00e4t aus.");
    record10.set("page", "FAQ");
    record10.set("section", "content");
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
    record11.id = "46l7szgmofcf36p";
    record11.set("key", "faq_q5_question");
    record11.set("de", "Wie kann ich alle mit dem Ger\u00e4t verbundenen Smartphones l\u00f6schen?");
    record11.set("page", "FAQ");
    record11.set("section", "content");
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
    record12.id = "kuvwpo3qxwesubw";
    record12.set("key", "faq_q5_answer");
    record12.set("de", "Unterbreche die Stromversorgung, halte den Taster gedr\u00fcckt und stelle die Stromversorgung wieder her. Das Ger\u00e4t gibt eine Tonfolge aus und die LED blinkt. Alle Smartphones wurden gel\u00f6scht. Achtung: Bei mehreren Produkten muss dies f\u00fcr jedes einzeln durchgef\u00fchrt werden.");
    record12.set("page", "FAQ");
    record12.set("section", "content");
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
    record13.id = "xq1amsrmwk97r7g";
    record13.set("key", "faq_q6_question");
    record13.set("de", "Wie funktioniert SMARTDOCK?");
    record13.set("page", "FAQ");
    record13.set("section", "content");
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
    record14.id = "e9p0hfjonx09q7u";
    record14.set("key", "faq_q6_answer");
    record14.set("de", "Das SMARTDOCK-Ger\u00e4t wird via Plug-and-Play mit der Steuerungselektronik verbunden. Nach Bluetooth-Kopplung kannst du dein Boot von jeder Stelle an Bord per App steuern.");
    record14.set("page", "FAQ");
    record14.set("section", "content");
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
    record15.id = "s16qts9lvl6zmgw";
    record15.set("key", "faq_q7_question");
    record15.set("de", "Ist mein Motor mit SMARTDOCK kompatibel?");
    record15.set("page", "FAQ");
    record15.set("section", "content");
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
    record16.id = "w6gx23s25td75yh";
    record16.set("key", "faq_q7_answer");
    record16.set("de", "SMARTDOCK ist mit vielen Motoren und Strahlruderherstellern kompatibel. Im Konfigurator erh\u00e4ltst du einen \u00dcberblick. Wenn dein Motortyp nicht dabei ist, melde dich per E-Mail oder Kontaktformular. Wir integrieren stetig weitere Hersteller.");
    record16.set("page", "FAQ");
    record16.set("section", "content");
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
    record17.id = "n1bp84u82h2wbzx";
    record17.set("key", "faq_q8_question");
    record17.set("de", "Kann SMARTDOCK nachger\u00fcstet werden?");
    record17.set("page", "FAQ");
    record17.set("section", "content");
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
    record18.id = "wnq2bqnithvpnnw";
    record18.set("key", "faq_q8_answer");
    record18.set("de", "Ja, SMARTDOCK wurde speziell f\u00fcr die Nachr\u00fcstung entwickelt. Die Plug-and-Play Installation funktioniert auch ohne technische Vorkenntnisse. Alternativ kannst du unseren Einbauservice nutzen oder einen H\u00e4ndler in deiner N\u00e4he. Installation beim H\u00e4ndler dauert i.d.R. einen Tag.");
    record18.set("page", "FAQ");
    record18.set("section", "content");
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
    record19.id = "yd98kiwlb4cjc5r";
    record19.set("key", "faq_q9_question");
    record19.set("de", "Was passiert, wenn die Verbindung zum SMARTDOCK-Produkt abbricht?");
    record19.set("page", "FAQ");
    record19.set("section", "content");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "5vpsq1uevtu5eh3";
    record20.set("key", "faq_q9_answer");
    record20.set("de", "Sicherheit geht vor: Die Motoren wechseln sofort in die Neutralstellung. Der Steuerstand des Bootes hat Vorrang - sobald dieser bedient wird, funktioniert nur dar\u00fcber die Steuerung.");
    record20.set("page", "FAQ");
    record20.set("section", "content");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "7kwzsq5014jfovt";
    record21.set("key", "faq_q10_question");
    record21.set("de", "Wie lange dauert es, bis ein per App erteilter Steuerbefehl von den Motoren ausgef\u00fchrt wird?");
    record21.set("page", "FAQ");
    record21.set("section", "content");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "wny936r175prjqb";
    record22.set("key", "faq_q10_answer");
    record22.set("de", "Eine pr\u00e4zise Steuerung ist essenziell, daher wird jeder Steuerbefehl ohne Verz\u00f6gerung ausgef\u00fchrt.");
    record22.set("page", "FAQ");
    record22.set("section", "content");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "q23ag0hhiabwsmc";
    record23.set("key", "faq_q11_question");
    record23.set("de", "Welche Funktionen bietet die SMARTDOCK-App?");
    record23.set("page", "FAQ");
    record23.set("section", "content");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "y4ib7liycog1m8s";
    record24.set("key", "faq_q11_answer");
    record24.set("de", "Die App erkennt automatisch die verf\u00fcgbaren Steuerungsm\u00f6glichkeiten. Mit vier Steuermodi kannst du intuitiv steuern. Du w\u00e4hlst zwischen vertikaler/horizontaler Ansicht und Ein-/Zwei-Finger-Bedienung. Du kannst mehrere SMARTDOCK-Produkte gleichzeitig steuern.");
    record24.set("page", "FAQ");
    record24.set("section", "content");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["y4ib7liycog1m8s", "q23ag0hhiabwsmc", "wny936r175prjqb", "7kwzsq5014jfovt", "5vpsq1uevtu5eh3", "yd98kiwlb4cjc5r", "wnq2bqnithvpnnw", "n1bp84u82h2wbzx", "w6gx23s25td75yh", "s16qts9lvl6zmgw", "e9p0hfjonx09q7u", "xq1amsrmwk97r7g", "kuvwpo3qxwesubw", "46l7szgmofcf36p", "3y2ek76u5mve2hp", "hi8he0bgsf1hmco", "uthljcjwlihtqui", "zbde20tzonfeok1", "j7rfkyxyfmn8yl9", "fsehx5dcnbrqlbg", "ludztzvtlc90vcd", "xp0u2l5s0ga0yds", "xjayjim47mfascx", "korrmls3chab7na", "9mlczp28c6c9ewm"];
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
