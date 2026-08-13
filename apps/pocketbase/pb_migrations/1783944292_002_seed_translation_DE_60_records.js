/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "of81gj0luxfovyg";
    record0.set("key", "imprint_breadcrumb_home");
    record0.set("de", "Startseite");
    record0.set("page", "imprint");
    record0.set("section", "imprint");
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
    record1.id = "d9glzfithjh0mgq";
    record1.set("key", "imprint_breadcrumb_imprint");
    record1.set("de", "Impressum");
    record1.set("page", "imprint");
    record1.set("section", "imprint");
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
    record2.id = "19hvlj9px50unf0";
    record2.set("key", "imprint_hero_title");
    record2.set("de", "Impressum");
    record2.set("page", "imprint");
    record2.set("section", "imprint");
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
    record3.id = "pyup0hgywzh1urt";
    record3.set("key", "imprint_meta_description");
    record3.set("de", "Rechtliche Informationen und Impressum unseres Unternehmens");
    record3.set("page", "imprint");
    record3.set("section", "imprint");
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
    record4.id = "2kzcl30l9w6pvaf";
    record4.set("key", "imprint_section1_title");
    record4.set("de", "Unternehmensangaben");
    record4.set("page", "imprint");
    record4.set("section", "imprint");
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
    record5.id = "4bt2ysqagixone1";
    record5.set("key", "imprint_section1_company_info");
    record5.set("de", "Unternehmensdetails");
    record5.set("page", "imprint");
    record5.set("section", "imprint");
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
    record6.id = "awyul8r2bx7qfdz";
    record6.set("key", "imprint_company_name");
    record6.set("de", "Unternehmensname");
    record6.set("page", "imprint");
    record6.set("section", "imprint");
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
    record7.id = "4uemuumelrsboul";
    record7.set("key", "imprint_address_label");
    record7.set("de", "Adresse");
    record7.set("page", "imprint");
    record7.set("section", "imprint");
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
    record8.id = "0esy2mdvchdj2kj";
    record8.set("key", "imprint_address_street");
    record8.set("de", "Stra\u00dfe und Hausnummer");
    record8.set("page", "imprint");
    record8.set("section", "imprint");
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
    record9.id = "tqfxvl3rbocpnxt";
    record9.set("key", "imprint_address_city");
    record9.set("de", "Stadt");
    record9.set("page", "imprint");
    record9.set("section", "imprint");
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
    record10.id = "t4ac1248krkw8no";
    record10.set("key", "imprint_address_country");
    record10.set("de", "Land");
    record10.set("page", "imprint");
    record10.set("section", "imprint");
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
    record11.id = "37bsx5o0j9wx67h";
    record11.set("key", "imprint_management_title");
    record11.set("de", "Gesch\u00e4ftsf\u00fchrung");
    record11.set("page", "imprint");
    record11.set("section", "imprint");
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
    record12.id = "loqc5w28jhebtyc";
    record12.set("key", "imprint_management_person1");
    record12.set("de", "Gesch\u00e4ftsf\u00fchrer 1");
    record12.set("page", "imprint");
    record12.set("section", "imprint");
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
    record13.id = "ni8ztnnnhqdtboc";
    record13.set("key", "imprint_management_person2");
    record13.set("de", "Gesch\u00e4ftsf\u00fchrer 2");
    record13.set("page", "imprint");
    record13.set("section", "imprint");
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
    record14.id = "2gkv2ymp8bw4h16";
    record14.set("key", "imprint_contact_title");
    record14.set("de", "Kontaktinformationen");
    record14.set("page", "imprint");
    record14.set("section", "imprint");
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
    record15.id = "4t3h0p273dyfc4l";
    record15.set("key", "imprint_phone_main_label");
    record15.set("de", "Haupttelefon");
    record15.set("page", "imprint");
    record15.set("section", "imprint");
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
    record16.id = "gvajrw2nny2bsos";
    record16.set("key", "imprint_phone_main");
    record16.set("de", "+49 (0) 123 456789");
    record16.set("page", "imprint");
    record16.set("section", "imprint");
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
    record17.id = "gviohaknmoq5qa0";
    record17.set("key", "imprint_phone_support_label");
    record17.set("de", "Support-Telefon");
    record17.set("page", "imprint");
    record17.set("section", "imprint");
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
    record18.id = "b775zrhckoiobw9";
    record18.set("key", "imprint_phone_support");
    record18.set("de", "+49 (0) 123 987654");
    record18.set("page", "imprint");
    record18.set("section", "imprint");
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
    record19.id = "ese9e9bw38425z2";
    record19.set("key", "imprint_email_label");
    record19.set("de", "E-Mail");
    record19.set("page", "imprint");
    record19.set("section", "imprint");
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
    record20.id = "e94t2evrdf63r3m";
    record20.set("key", "imprint_email");
    record20.set("de", "info@unternehmen.de");
    record20.set("page", "imprint");
    record20.set("section", "imprint");
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
    record21.id = "3je7kct41t2r1n3";
    record21.set("key", "imprint_website_label");
    record21.set("de", "Webseite");
    record21.set("page", "imprint");
    record21.set("section", "imprint");
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
    record22.id = "1kk4b7yinoedqq1";
    record22.set("key", "imprint_website");
    record22.set("de", "www.unternehmen.de");
    record22.set("page", "imprint");
    record22.set("section", "imprint");
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
    record23.id = "lx9o5d1ng8ceo4f";
    record23.set("key", "imprint_service_note");
    record23.set("de", "Dienstanbieterangaben");
    record23.set("page", "imprint");
    record23.set("section", "imprint");
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
    record24.id = "ztfkqwk2cbdqr27";
    record24.set("key", "imprint_register_title");
    record24.set("de", "Handelsregister");
    record24.set("page", "imprint");
    record24.set("section", "imprint");
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
    record25.id = "l3gyg9s0eo70uvn";
    record25.set("key", "imprint_register_court_label");
    record25.set("de", "Registergericht");
    record25.set("page", "imprint");
    record25.set("section", "imprint");
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
    record26.id = "7kl5ehid6s9h4jy";
    record26.set("key", "imprint_register_court");
    record26.set("de", "Amtsgericht");
    record26.set("page", "imprint");
    record26.set("section", "imprint");
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
    record27.id = "46rx1hjizhsqo5t";
    record27.set("key", "imprint_register_number_label");
    record27.set("de", "Registernummer");
    record27.set("page", "imprint");
    record27.set("section", "imprint");
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
    record28.id = "fu377rdp3c76huq";
    record28.set("key", "imprint_register_number");
    record28.set("de", "HRB 123456");
    record28.set("page", "imprint");
    record28.set("section", "imprint");
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
    record29.id = "bohrv9v1wmwzdza";
    record29.set("key", "imprint_vat_title");
    record29.set("de", "Steuernummer");
    record29.set("page", "imprint");
    record29.set("section", "imprint");
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
    record30.id = "758q4djaqutbaqe";
    record30.set("key", "imprint_vat_label");
    record30.set("de", "Umsatzsteuer-Identifikationsnummer");
    record30.set("page", "imprint");
    record30.set("section", "imprint");
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
    record31.id = "xm93raxk3wpbanw";
    record31.set("key", "imprint_vat_number");
    record31.set("de", "DE123456789");
    record31.set("page", "imprint");
    record31.set("section", "imprint");
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
    record32.id = "3a2t91tj3n4e9b2";
    record32.set("key", "imprint_weee_title");
    record32.set("de", "WEEE-Registrierung");
    record32.set("page", "imprint");
    record32.set("section", "imprint");
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
    record33.id = "enpeik5wvweiia2";
    record33.set("key", "imprint_weee_label");
    record33.set("de", "WEEE-Registrierungsnummer");
    record33.set("page", "imprint");
    record33.set("section", "imprint");
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
    record34.id = "x5drk4e6xy4bq3k";
    record34.set("key", "imprint_weee_number");
    record34.set("de", "DE12345678");
    record34.set("page", "imprint");
    record34.set("section", "imprint");
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
    record35.id = "p2bwd0l1vvmrfa1";
    record35.set("key", "imprint_smartdock_title");
    record35.set("de", "SmartDock-Informationen");
    record35.set("page", "imprint");
    record35.set("section", "imprint");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.id = "rqchyszjyt2cdjt";
    record36.set("key", "imprint_smartdock_intro");
    record36.set("de", "SmartDock-Kontaktdaten");
    record36.set("page", "imprint");
    record36.set("section", "imprint");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.id = "k3grinmqbfr3mt5";
    record37.set("key", "imprint_smartdock_phone_label");
    record37.set("de", "SmartDock-Telefon");
    record37.set("page", "imprint");
    record37.set("section", "imprint");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.id = "3gi0v16lst5s8d7";
    record38.set("key", "imprint_smartdock_phone");
    record38.set("de", "+49 (0) 123 246813");
    record38.set("page", "imprint");
    record38.set("section", "imprint");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.id = "edyl8z5wv1lnqe5";
    record39.set("key", "imprint_smartdock_email_label");
    record39.set("de", "SmartDock-E-Mail");
    record39.set("page", "imprint");
    record39.set("section", "imprint");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.id = "h9zwkzmfnsxxo2t";
    record40.set("key", "imprint_smartdock_email");
    record40.set("de", "smartdock@unternehmen.de");
    record40.set("page", "imprint");
    record40.set("section", "imprint");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.id = "j88zqbwmzpve4re";
    record41.set("key", "imprint_insurance_title");
    record41.set("de", "Versicherungsinformationen");
    record41.set("page", "imprint");
    record41.set("section", "imprint");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.id = "61wavruw80l2pvw";
    record42.set("key", "imprint_insurance_company_label");
    record42.set("de", "Versicherungsunternehmen");
    record42.set("page", "imprint");
    record42.set("section", "imprint");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.id = "692ldd2fgnqty66";
    record43.set("key", "imprint_insurance_company");
    record43.set("de", "Versicherungsanbieter GmbH");
    record43.set("page", "imprint");
    record43.set("section", "imprint");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.id = "vf312267wobrcg2";
    record44.set("key", "imprint_insurance_type");
    record44.set("de", "Berufshaftpflichtversicherung");
    record44.set("page", "imprint");
    record44.set("section", "imprint");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.id = "neiuseo73n1m07z";
    record45.set("key", "imprint_insurance_scope_label");
    record45.set("de", "Versicherungsumfang");
    record45.set("page", "imprint");
    record45.set("section", "imprint");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.id = "24818kkln8939y2";
    record46.set("key", "imprint_insurance_scope");
    record46.set("de", "Deckung bis zu 1.000.000 \u20ac");
    record46.set("page", "imprint");
    record46.set("section", "imprint");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.id = "x5zgft7cx89shos";
    record47.set("key", "imprint_additional_title");
    record47.set("de", "Weitere Informationen");
    record47.set("page", "imprint");
    record47.set("section", "imprint");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.id = "srrd4ebe4g3bya0";
    record48.set("key", "imprint_dispute_title");
    record48.set("de", "Streitbeilegung");
    record48.set("page", "imprint");
    record48.set("section", "imprint");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.id = "bqn1ujbwrv24x7i";
    record49.set("key", "imprint_dispute_text");
    record49.set("de", "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschiedsinstanz teilzunehmen.");
    record49.set("page", "imprint");
    record49.set("section", "imprint");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.id = "5kd27f1vdop9854";
    record50.set("key", "imprint_disclaimer_title");
    record50.set("de", "Haftungsausschluss");
    record50.set("page", "imprint");
    record50.set("section", "imprint");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.id = "4wv8mix4u1jsyck";
    record51.set("key", "imprint_disclaimer_text");
    record51.set("de", "Die Inhalte unserer Website wurden mit Sorgfalt erstellt. Wir k\u00f6nnen jedoch keine Gew\u00e4hr f\u00fcr die Richtigkeit, Vollst\u00e4ndigkeit und Aktualit\u00e4t der Inhalte \u00fcbernehmen.");
    record51.set("page", "imprint");
    record51.set("section", "imprint");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.id = "3d12hxnv68z5u2a";
    record52.set("key", "imprint_liability_title");
    record52.set("de", "Haftung");
    record52.set("page", "imprint");
    record52.set("section", "imprint");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.id = "7lnm40pd68i5y3x";
    record53.set("key", "imprint_liability_text");
    record53.set("de", "Wir sind f\u00fcr unsere eigenen Inhalte auf diesen Seiten gem\u00e4\u00df allgemeiner Gesetze verantwortlich. Wir sind jedoch nicht verantwortlich f\u00fcr die Inhalte von verlinkten externen Websites.");
    record53.set("page", "imprint");
    record53.set("section", "imprint");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.id = "xiu74vj3hs4a4st";
    record54.set("key", "imprint_copyright_title");
    record54.set("de", "Urheberrecht");
    record54.set("page", "imprint");
    record54.set("section", "imprint");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.id = "9pszguf269b24u9";
    record55.set("key", "imprint_copyright_text");
    record55.set("de", "Die von den Seitenbetreibern erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielf\u00e4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00dferhalb der Grenzen des Urheberrechts bed\u00fcrfen der schriftlichen Zustimmung des Autors oder Sch\u00f6pfers.");
    record55.set("page", "imprint");
    record55.set("section", "imprint");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.id = "w0iiv9h3jls8ibk";
    record56.set("key", "imprint_footer_info");
    record56.set("de", "Rechtliche Informationen");
    record56.set("page", "imprint");
    record56.set("section", "imprint");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.id = "ifp5ga50sudspws";
    record57.set("key", "imprint_footer_privacy");
    record57.set("de", "Datenschutzerkl\u00e4rung");
    record57.set("page", "imprint");
    record57.set("section", "imprint");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.id = "jebdynyz9tj07f0";
    record58.set("key", "imprint_footer_and");
    record58.set("de", "und");
    record58.set("page", "imprint");
    record58.set("section", "imprint");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.id = "e2xj8u9eu2jbsho";
    record59.set("key", "imprint_footer_terms");
    record59.set("de", "Nutzungsbedingungen");
    record59.set("page", "imprint");
    record59.set("section", "imprint");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["e2xj8u9eu2jbsho", "jebdynyz9tj07f0", "ifp5ga50sudspws", "w0iiv9h3jls8ibk", "9pszguf269b24u9", "xiu74vj3hs4a4st", "7lnm40pd68i5y3x", "3d12hxnv68z5u2a", "4wv8mix4u1jsyck", "5kd27f1vdop9854", "bqn1ujbwrv24x7i", "srrd4ebe4g3bya0", "x5zgft7cx89shos", "24818kkln8939y2", "neiuseo73n1m07z", "vf312267wobrcg2", "692ldd2fgnqty66", "61wavruw80l2pvw", "j88zqbwmzpve4re", "h9zwkzmfnsxxo2t", "edyl8z5wv1lnqe5", "3gi0v16lst5s8d7", "k3grinmqbfr3mt5", "rqchyszjyt2cdjt", "p2bwd0l1vvmrfa1", "x5drk4e6xy4bq3k", "enpeik5wvweiia2", "3a2t91tj3n4e9b2", "xm93raxk3wpbanw", "758q4djaqutbaqe", "bohrv9v1wmwzdza", "fu377rdp3c76huq", "46rx1hjizhsqo5t", "7kl5ehid6s9h4jy", "l3gyg9s0eo70uvn", "ztfkqwk2cbdqr27", "lx9o5d1ng8ceo4f", "1kk4b7yinoedqq1", "3je7kct41t2r1n3", "e94t2evrdf63r3m", "ese9e9bw38425z2", "b775zrhckoiobw9", "gviohaknmoq5qa0", "gvajrw2nny2bsos", "4t3h0p273dyfc4l", "2gkv2ymp8bw4h16", "ni8ztnnnhqdtboc", "loqc5w28jhebtyc", "37bsx5o0j9wx67h", "t4ac1248krkw8no", "tqfxvl3rbocpnxt", "0esy2mdvchdj2kj", "4uemuumelrsboul", "awyul8r2bx7qfdz", "4bt2ysqagixone1", "2kzcl30l9w6pvaf", "pyup0hgywzh1urt", "19hvlj9px50unf0", "d9glzfithjh0mgq", "of81gj0luxfovyg"];
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
