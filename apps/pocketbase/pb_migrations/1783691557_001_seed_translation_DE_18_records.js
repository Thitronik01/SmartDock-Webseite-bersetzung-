/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "cxeivpgbro1bphv";
    record0.set("key", "footer.disclaimer");
    record0.set("de", "Haftungsausschluss: SMARTDOCK Systeme sind Pr\u00e4zisionsinstrumente f\u00fcr die Bootssteuerung. Bitte beachte alle Sicherheitsanweisungen und lokalen Vorschriften. Der Hersteller \u00fcbernimmt keine Haftung f\u00fcr Sch\u00e4den, die durch unsachgem\u00e4\u00dfe Verwendung oder Nichtbeachtung der Bedienungsanleitung entstehen. Regelm\u00e4\u00dfige Wartung und Inspektionen sind erforderlich.");
    record0.set("page", "footer");
    record0.set("section", "disclaimer");
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
    record1.id = "g6sjashci86xntr";
    record1.set("key", "footer.main_heading");
    record1.set("de", "SMARTDOCK ist mehr als ein Produkt");
    record1.set("page", "footer");
    record1.set("section", "main");
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
    record2.id = "0uxutvisszt4uw6";
    record2.set("key", "footer.main_description");
    record2.set("de", "Erlebe die intuitivste Bootssteuerung am Markt. Pr\u00e4zision und Eleganz, gefertigt in Deutschland f\u00fcr deine h\u00f6chsten Anspr\u00fcche auf dem Wasser.");
    record2.set("page", "footer");
    record2.set("section", "main");
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
    record3.id = "y20nfmnp60a4kf7";
    record3.set("key", "footer.column_contact");
    record3.set("de", "Kontakt");
    record3.set("page", "footer");
    record3.set("section", "columns");
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
    record4.id = "cv7yovhxc30ebbe";
    record4.set("key", "footer.column_germany");
    record4.set("de", "Deutschland");
    record4.set("page", "footer");
    record4.set("section", "columns");
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
    record5.id = "4g24wl4cgs0o5v3";
    record5.set("key", "footer.column_links");
    record5.set("de", "Links");
    record5.set("page", "footer");
    record5.set("section", "columns");
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
    record6.id = "zp70679ye0mnf27";
    record6.set("key", "footer.column_follow");
    record6.set("de", "Folge uns");
    record6.set("page", "footer");
    record6.set("section", "columns");
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
    record7.id = "hjipv6v1ohx917z";
    record7.set("key", "footer.column_legal");
    record7.set("de", "Rechtliches");
    record7.set("page", "footer");
    record7.set("section", "columns");
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
    record8.id = "w0g89yut9olopvl";
    record8.set("key", "footer.link_app_download");
    record8.set("de", "App Herunterladen");
    record8.set("page", "footer");
    record8.set("section", "links");
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
    record9.id = "x6k3h04hfqchz79";
    record9.set("key", "footer.link_faq");
    record9.set("de", "H\u00e4ufige Fragen");
    record9.set("page", "footer");
    record9.set("section", "links");
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
    record10.id = "7fabodoynwzqvo9";
    record10.set("key", "footer.link_installation");
    record10.set("de", "Installation");
    record10.set("page", "footer");
    record10.set("section", "links");
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
    record11.id = "rweliux33jh7tfi";
    record11.set("key", "footer.link_privacy");
    record11.set("de", "Datenschutz");
    record11.set("page", "footer");
    record11.set("section", "links");
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
    record12.id = "81isv3xt7q1du43";
    record12.set("key", "footer.link_impressum");
    record12.set("de", "Impressum");
    record12.set("page", "footer");
    record12.set("section", "links");
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
    record13.id = "txw3il7ctyoelws";
    record13.set("key", "footer.link_agb");
    record13.set("de", "AGB");
    record13.set("page", "footer");
    record13.set("section", "links");
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
    record14.id = "95qml3fn3wy1n9q";
    record14.set("key", "footer.link_accessibility");
    record14.set("de", "Barrierefreiheit");
    record14.set("page", "footer");
    record14.set("section", "links");
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
    record15.id = "yr6n78sorwjt7jq";
    record15.set("key", "footer.link_withdrawal");
    record15.set("de", "Widerrufsbelehrung");
    record15.set("page", "footer");
    record15.set("section", "links");
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
    record16.id = "nfi33n5tcv938xq";
    record16.set("key", "footer.link_shipping");
    record16.set("de", "Versandbedingungen");
    record16.set("page", "footer");
    record16.set("section", "links");
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
    record17.id = "y53u0m7y7lva7vm";
    record17.set("key", "footer.copyright");
    record17.set("de", "\u00a9 2026 Thitronik GmbH. Alle Rechte vorbehalten.");
    record17.set("page", "footer");
    record17.set("section", "copyright");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["y53u0m7y7lva7vm", "nfi33n5tcv938xq", "yr6n78sorwjt7jq", "95qml3fn3wy1n9q", "txw3il7ctyoelws", "81isv3xt7q1du43", "rweliux33jh7tfi", "7fabodoynwzqvo9", "x6k3h04hfqchz79", "w0g89yut9olopvl", "hjipv6v1ohx917z", "zp70679ye0mnf27", "4g24wl4cgs0o5v3", "cv7yovhxc30ebbe", "y20nfmnp60a4kf7", "0uxutvisszt4uw6", "g6sjashci86xntr", "cxeivpgbro1bphv"];
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
