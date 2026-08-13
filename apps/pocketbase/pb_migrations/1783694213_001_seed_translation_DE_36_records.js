/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "lgsjv5ibt9l8jx5";
    record0.set("key", "impressum_title");
    record0.set("de", "Impressum");
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
    record1.id = "fbejk9uchqx0t83";
    record1.set("key", "impressum_subtitle");
    record1.set("de", "Angaben gem\u00e4\u00df \u00a7 5 TMG und rechtliche Hinweise.");
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
    record2.id = "xe0ilvawdn5vvu9";
    record2.set("key", "legal_provider_heading");
    record2.set("de", "Gesetzliche Anbieterkennung");
    record2.set("page", "impressum");
    record2.set("section", "legal_provider");
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
    record3.id = "87hh6vizudas2y8";
    record3.set("key", "company_details_heading");
    record3.set("de", "Unternehmensangaben");
    record3.set("page", "impressum");
    record3.set("section", "legal_provider");
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
    record4.id = "ji5j7lzroxehure";
    record4.set("key", "address_label");
    record4.set("de", "Adresse:");
    record4.set("page", "impressum");
    record4.set("section", "legal_provider");
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
    record5.id = "j9h8hyiweqbmnzb";
    record5.set("key", "management_heading");
    record5.set("de", "Gesch\u00e4ftsf\u00fchrung");
    record5.set("page", "impressum");
    record5.set("section", "legal_provider");
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
    record6.id = "wijnev7o78k3w4j";
    record6.set("key", "contact_info_heading");
    record6.set("de", "Kontaktinformationen");
    record6.set("page", "impressum");
    record6.set("section", "legal_provider");
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
    record7.id = "2hpb8vm3ubovfew";
    record7.set("key", "phone_main");
    record7.set("de", "Telefon Zentrale:");
    record7.set("page", "impressum");
    record7.set("section", "legal_provider");
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
    record8.id = "zzpxfgjf9jqxu59";
    record8.set("key", "phone_support");
    record8.set("de", "Telefon Support: +49 4351 76744-112");
    record8.set("page", "impressum");
    record8.set("section", "legal_provider");
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
    record9.id = "8xmjcksgs77p8n4";
    record9.set("key", "website_label");
    record9.set("de", "Website:");
    record9.set("page", "impressum");
    record9.set("section", "legal_provider");
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
    record10.id = "f0iuvv1jj3ziil3";
    record10.set("key", "service_appointment_note");
    record10.set("de", "Servicetermine sind nur nach vorheriger telefonischer Vereinbarung m\u00f6glich.");
    record10.set("page", "impressum");
    record10.set("section", "legal_provider");
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
    record11.id = "eu2ku3a6didwvxq";
    record11.set("key", "trade_register_heading");
    record11.set("de", "Handelsregistereintrag");
    record11.set("page", "impressum");
    record11.set("section", "trade_register");
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
    record12.id = "fz614jzgpqvccij";
    record12.set("key", "trade_register_court");
    record12.set("de", "Registergericht: Amtsgericht Kiel");
    record12.set("page", "impressum");
    record12.set("section", "trade_register");
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
    record13.id = "m3zsj25pgaaf9eu";
    record13.set("key", "trade_register_number");
    record13.set("de", "Handelsregisternummer: HRB 11453 KI");
    record13.set("page", "impressum");
    record13.set("section", "trade_register");
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
    record14.id = "838jpf6c9pssbp7";
    record14.set("key", "vat_id_heading");
    record14.set("de", "Umsatzsteuer-Identifikationsnummer");
    record14.set("page", "impressum");
    record14.set("section", "vat_id");
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
    record15.id = "9nxgjs6ks0yeh1s";
    record15.set("key", "vat_id_number");
    record15.set("de", "Umsatzsteuer-Identifikationsnummer gem\u00e4\u00df \u00a7 27 a Umsatzsteuergesetz: DE268454642");
    record15.set("page", "impressum");
    record15.set("section", "vat_id");
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
    record16.id = "cknph9gipercx3j";
    record16.set("key", "weee_heading");
    record16.set("de", "WEEE-Registrierungsnummer");
    record16.set("page", "impressum");
    record16.set("section", "weee");
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
    record17.id = "v7k1fiquepepuj8";
    record17.set("key", "weee_number");
    record17.set("de", "Registrierungsnummer f\u00fcr Elektro- und Elektronik-Altger\u00e4te: DE33826840");
    record17.set("page", "impressum");
    record17.set("section", "weee");
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
    record18.id = "zlbihc8dguqwc2x";
    record18.set("key", "smartdock_contact_heading");
    record18.set("de", "SMARTDOCK Kontaktinformationen");
    record18.set("page", "impressum");
    record18.set("section", "smartdock_contact");
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
    record19.id = "8ikm9rvpbr680wj";
    record19.set("key", "smartdock_contact_intro");
    record19.set("de", "F\u00fcr Anfragen zu SMARTDOCK Produkten und Dienstleistungen:");
    record19.set("page", "impressum");
    record19.set("section", "smartdock_contact");
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
    record20.id = "e8aqp8t5viplpc8";
    record20.set("key", "smartdock_phone_label");
    record20.set("de", "Telefon:");
    record20.set("page", "impressum");
    record20.set("section", "smartdock_contact");
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
    record21.id = "13tqokgc4z3weim";
    record21.set("key", "professional_liability_heading");
    record21.set("de", "Berufshaftpflichtversicherung");
    record21.set("page", "impressum");
    record21.set("section", "professional_liability");
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
    record22.id = "h8rubpdl4viv30e";
    record22.set("key", "insurance_company_label");
    record22.set("de", "Versicherungsunternehmen:");
    record22.set("page", "impressum");
    record22.set("section", "professional_liability");
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
    record23.id = "2womlw5mw3a3gju";
    record23.set("key", "insurance_broker_label");
    record23.set("de", "Versicherungsmakler und Versicherungsberater");
    record23.set("page", "impressum");
    record23.set("section", "professional_liability");
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
    record24.id = "eyty140ls8exw91";
    record24.set("key", "insurance_scope_label");
    record24.set("de", "Geltungsbereich:");
    record24.set("page", "impressum");
    record24.set("section", "professional_liability");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "u8w75sr3gb0xc9a";
    record25.set("key", "insurance_scope_text");
    record25.set("de", "Die Berufshaftpflichtversicherung gilt weltweit mit Ausnahme der USA, Kanada und deren Territorien.");
    record25.set("page", "impressum");
    record25.set("section", "professional_liability");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.id = "ld9sd43oepr56nx";
    record26.set("key", "additional_info_heading");
    record26.set("de", "Zus\u00e4tzliche Hinweise");
    record26.set("page", "impressum");
    record26.set("section", "additional_info");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.id = "zbcguj036lqcsvv";
    record27.set("key", "dispute_resolution_heading");
    record27.set("de", "Verbraucherstreitbeilegung / Universalschiedsverfahren");
    record27.set("page", "impressum");
    record27.set("section", "additional_info");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.id = "7zvr3ldpt2ppmwf";
    record28.set("key", "dispute_resolution_text");
    record28.set("de", "Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.");
    record28.set("page", "impressum");
    record28.set("section", "additional_info");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.id = "vb8vy36f4r7j646";
    record29.set("key", "liability_disclaimer_heading");
    record29.set("de", "Haftungsausschluss");
    record29.set("page", "impressum");
    record29.set("section", "liability_disclaimer");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.id = "wee8m90ep86tk8g";
    record30.set("key", "liability_disclaimer_text");
    record30.set("de", "Als Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs. 1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen oder nach Umst\u00e4nden zu forschen, die auf eine rechtswidrige T\u00e4tigkeit hinweisen.");
    record30.set("page", "impressum");
    record30.set("section", "liability_disclaimer");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.id = "afdh4db0ipfb2uo";
    record31.set("key", "link_liability_heading");
    record31.set("de", "Haftung f\u00fcr Links");
    record31.set("page", "impressum");
    record31.set("section", "link_liability");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.id = "lqvg9s3ydge7416";
    record32.set("key", "link_liability_text");
    record32.set("de", "Unsere Website enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00f6nnen wir f\u00fcr diese fremden Inhalte auch keine Gew\u00e4hr \u00fcbernehmen. F\u00fcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00f6gliche Rechtsverst\u00f6\u00dfe \u00fcberpr\u00fcft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.");
    record32.set("page", "impressum");
    record32.set("section", "link_liability");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.id = "ukbf6i4b8fbnkrx";
    record33.set("key", "copyright_heading");
    record33.set("de", "Urheberrecht");
    record33.set("page", "impressum");
    record33.set("section", "copyright");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.id = "v2yail23m3knjip";
    record34.set("key", "copyright_text");
    record34.set("de", "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechtes bed\u00fcrfen der schriftlichen Zustimmung des Autors oder Sch\u00f6pfers. Downloads und Kopien dieser Seite sind nur f\u00fcr den privaten, nicht kommerziellen Gebrauch gestattet.");
    record34.set("page", "impressum");
    record34.set("section", "copyright");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.id = "aqqj5stkt3exvzh";
    record35.set("key", "additional_info_footer");
    record35.set("de", "Weitere Informationen finden Sie in unserer Datenschutzerkl\u00e4rung und unseren Allgemeinen Gesch\u00e4ftsbedingungen.");
    record35.set("page", "impressum");
    record35.set("section", "footer_info");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["aqqj5stkt3exvzh", "v2yail23m3knjip", "ukbf6i4b8fbnkrx", "lqvg9s3ydge7416", "afdh4db0ipfb2uo", "wee8m90ep86tk8g", "vb8vy36f4r7j646", "7zvr3ldpt2ppmwf", "zbcguj036lqcsvv", "ld9sd43oepr56nx", "u8w75sr3gb0xc9a", "eyty140ls8exw91", "2womlw5mw3a3gju", "h8rubpdl4viv30e", "13tqokgc4z3weim", "e8aqp8t5viplpc8", "8ikm9rvpbr680wj", "zlbihc8dguqwc2x", "v7k1fiquepepuj8", "cknph9gipercx3j", "9nxgjs6ks0yeh1s", "838jpf6c9pssbp7", "m3zsj25pgaaf9eu", "fz614jzgpqvccij", "eu2ku3a6didwvxq", "f0iuvv1jj3ziil3", "8xmjcksgs77p8n4", "zzpxfgjf9jqxu59", "2hpb8vm3ubovfew", "wijnev7o78k3w4j", "j9h8hyiweqbmnzb", "ji5j7lzroxehure", "87hh6vizudas2y8", "xe0ilvawdn5vvu9", "fbejk9uchqx0t83", "lgsjv5ibt9l8jx5"];
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
