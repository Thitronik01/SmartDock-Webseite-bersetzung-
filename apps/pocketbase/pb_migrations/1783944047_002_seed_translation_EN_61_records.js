/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "8z41qpfn5avl5pt";
    record0.set("key", "imprint_title");
    record0.set("en", "Imprint");
    record0.set("page", "imprint");
    record0.set("section", "general");
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
    record1.id = "04kf5rlclg7dl5k";
    record1.set("key", "imprint_meta_description");
    record1.set("en", "Legal imprint and company information");
    record1.set("page", "imprint");
    record1.set("section", "general");
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
    record2.id = "dzo4spythw9k98j";
    record2.set("key", "imprint_breadcrumb_home");
    record2.set("en", "Home");
    record2.set("page", "imprint");
    record2.set("section", "breadcrumb");
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
    record3.id = "w12key13ux44sir";
    record3.set("key", "imprint_breadcrumb_imprint");
    record3.set("en", "Imprint");
    record3.set("page", "imprint");
    record3.set("section", "breadcrumb");
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
    record4.id = "mpjyonuzqwdec1o";
    record4.set("key", "imprint_hero_title");
    record4.set("en", "Imprint");
    record4.set("page", "imprint");
    record4.set("section", "hero");
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
    record5.id = "luxr8eebj51vt25";
    record5.set("key", "imprint_section1_title");
    record5.set("en", "Company Information");
    record5.set("page", "imprint");
    record5.set("section", "section1");
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
    record6.id = "z1cxfnutyyilpn6";
    record6.set("key", "imprint_section1_company_info");
    record6.set("en", "Company Details");
    record6.set("page", "imprint");
    record6.set("section", "section1");
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
    record7.id = "srh4nxqaqo4rl5n";
    record7.set("key", "imprint_company_name");
    record7.set("en", "SmartDock GmbH");
    record7.set("page", "imprint");
    record7.set("section", "company");
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
    record8.id = "gtl0e89o9sfqohc";
    record8.set("key", "imprint_address_label");
    record8.set("en", "Address");
    record8.set("page", "imprint");
    record8.set("section", "company");
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
    record9.id = "fiia6gl46ojo9yu";
    record9.set("key", "imprint_address_street");
    record9.set("en", "Street Address");
    record9.set("page", "imprint");
    record9.set("section", "company");
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
    record10.id = "x9idn78r43f7cfe";
    record10.set("key", "imprint_address_city");
    record10.set("en", "City");
    record10.set("page", "imprint");
    record10.set("section", "company");
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
    record11.id = "j3fyrfvrakjueaj";
    record11.set("key", "imprint_address_country");
    record11.set("en", "Country");
    record11.set("page", "imprint");
    record11.set("section", "company");
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
    record12.id = "e8zuyxdw76dam9l";
    record12.set("key", "imprint_management_title");
    record12.set("en", "Management");
    record12.set("page", "imprint");
    record12.set("section", "management");
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
    record13.id = "5ioc7kjn05vcyvk";
    record13.set("key", "imprint_management_person1");
    record13.set("en", "Managing Director 1");
    record13.set("page", "imprint");
    record13.set("section", "management");
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
    record14.id = "sh8k0abzkar8brq";
    record14.set("key", "imprint_management_person2");
    record14.set("en", "Managing Director 2");
    record14.set("page", "imprint");
    record14.set("section", "management");
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
    record15.id = "gz3rf13zjq40kg2";
    record15.set("key", "imprint_contact_title");
    record15.set("en", "Contact Information");
    record15.set("page", "imprint");
    record15.set("section", "contact");
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
    record16.id = "yd0nh51jig1cdho";
    record16.set("key", "imprint_phone_main_label");
    record16.set("en", "Main Phone");
    record16.set("page", "imprint");
    record16.set("section", "contact");
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
    record17.id = "aydxmm9040h32ki";
    record17.set("key", "imprint_phone_main");
    record17.set("en", "+49 (0) 123 456789");
    record17.set("page", "imprint");
    record17.set("section", "contact");
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
    record18.id = "3g8j851uky3fpja";
    record18.set("key", "imprint_phone_support_label");
    record18.set("en", "Support Phone");
    record18.set("page", "imprint");
    record18.set("section", "contact");
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
    record19.id = "jamfrrrcv0vl4ll";
    record19.set("key", "imprint_phone_support");
    record19.set("en", "+49 (0) 123 456790");
    record19.set("page", "imprint");
    record19.set("section", "contact");
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
    record20.id = "nk7cu50s6yupi90";
    record20.set("key", "imprint_email_label");
    record20.set("en", "Email");
    record20.set("page", "imprint");
    record20.set("section", "contact");
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
    record21.id = "lhkjtxke9cpca0w";
    record21.set("key", "imprint_email");
    record21.set("en", "info@smartdock.de");
    record21.set("page", "imprint");
    record21.set("section", "contact");
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
    record22.id = "w37i1wt3s7p8c55";
    record22.set("key", "imprint_website_label");
    record22.set("en", "Website");
    record22.set("page", "imprint");
    record22.set("section", "contact");
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
    record23.id = "xff9rdq7ledsj90";
    record23.set("key", "imprint_website");
    record23.set("en", "www.smartdock.de");
    record23.set("page", "imprint");
    record23.set("section", "contact");
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
    record24.id = "d0xel73tnetkruj";
    record24.set("key", "imprint_service_note");
    record24.set("en", "Service Provider according to TMG");
    record24.set("page", "imprint");
    record24.set("section", "contact");
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
    record25.id = "vcp1uynsm9y3s4u";
    record25.set("key", "imprint_register_title");
    record25.set("en", "Commercial Register");
    record25.set("page", "imprint");
    record25.set("section", "register");
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
    record26.id = "0mzd0s8ya91nawb";
    record26.set("key", "imprint_register_court_label");
    record26.set("en", "Register Court");
    record26.set("page", "imprint");
    record26.set("section", "register");
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
    record27.id = "1ar375p9ufcmtde";
    record27.set("key", "imprint_register_court");
    record27.set("en", "Local Court");
    record27.set("page", "imprint");
    record27.set("section", "register");
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
    record28.id = "sm9npoomj7ood6l";
    record28.set("key", "imprint_register_number_label");
    record28.set("en", "Register Number");
    record28.set("page", "imprint");
    record28.set("section", "register");
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
    record29.id = "38ku6hw9zzcnrz2";
    record29.set("key", "imprint_register_number");
    record29.set("en", "HRB 123456");
    record29.set("page", "imprint");
    record29.set("section", "register");
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
    record30.id = "dr3xymdr0rv5vtp";
    record30.set("key", "imprint_vat_title");
    record30.set("en", "VAT Information");
    record30.set("page", "imprint");
    record30.set("section", "vat");
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
    record31.id = "tgg7uhs7ninm0ib";
    record31.set("key", "imprint_vat_label");
    record31.set("en", "VAT ID");
    record31.set("page", "imprint");
    record31.set("section", "vat");
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
    record32.id = "0cdi2yje0wwuonl";
    record32.set("key", "imprint_vat_number");
    record32.set("en", "DE123456789");
    record32.set("page", "imprint");
    record32.set("section", "vat");
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
    record33.id = "xw39qchsv75tm4k";
    record33.set("key", "imprint_weee_title");
    record33.set("en", "WEEE Registration");
    record33.set("page", "imprint");
    record33.set("section", "weee");
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
    record34.id = "f0wrn1cxl38xobh";
    record34.set("key", "imprint_weee_label");
    record34.set("en", "WEEE Registration Number");
    record34.set("page", "imprint");
    record34.set("section", "weee");
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
    record35.id = "ddz2rfpo59x4luw";
    record35.set("key", "imprint_weee_number");
    record35.set("en", "DE12345678");
    record35.set("page", "imprint");
    record35.set("section", "weee");
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
    record36.id = "21vbfa6hbgr2uoq";
    record36.set("key", "imprint_smartdock_title");
    record36.set("en", "SmartDock Information");
    record36.set("page", "imprint");
    record36.set("section", "smartdock");
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
    record37.id = "w2liscr8s5msgjr";
    record37.set("key", "imprint_smartdock_intro");
    record37.set("en", "SmartDock is a leading provider of innovative solutions");
    record37.set("page", "imprint");
    record37.set("section", "smartdock");
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
    record38.id = "7p5g0lj9tq6wzm7";
    record38.set("key", "imprint_smartdock_phone_label");
    record38.set("en", "SmartDock Phone");
    record38.set("page", "imprint");
    record38.set("section", "smartdock");
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
    record39.id = "oznb8q9a4sp3u5q";
    record39.set("key", "imprint_smartdock_phone");
    record39.set("en", "+49 (0) 123 456789");
    record39.set("page", "imprint");
    record39.set("section", "smartdock");
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
    record40.id = "6lw668hz05d6vqf";
    record40.set("key", "imprint_smartdock_email_label");
    record40.set("en", "SmartDock Email");
    record40.set("page", "imprint");
    record40.set("section", "smartdock");
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
    record41.id = "dg1v1p0fkahr2ty";
    record41.set("key", "imprint_smartdock_email");
    record41.set("en", "contact@smartdock.de");
    record41.set("page", "imprint");
    record41.set("section", "smartdock");
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
    record42.id = "yx5d1pqnupxbu1k";
    record42.set("key", "imprint_insurance_title");
    record42.set("en", "Insurance Information");
    record42.set("page", "imprint");
    record42.set("section", "insurance");
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
    record43.id = "zj2ak9wt15lux0i";
    record43.set("key", "imprint_insurance_company_label");
    record43.set("en", "Insurance Company");
    record43.set("page", "imprint");
    record43.set("section", "insurance");
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
    record44.id = "lyigtagjawtp8yz";
    record44.set("key", "imprint_insurance_company");
    record44.set("en", "Insurance Provider GmbH");
    record44.set("page", "imprint");
    record44.set("section", "insurance");
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
    record45.id = "r6cyc516hn9z5nv";
    record45.set("key", "imprint_insurance_type");
    record45.set("en", "Professional Liability Insurance");
    record45.set("page", "imprint");
    record45.set("section", "insurance");
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
    record46.id = "rid64galxk3vp8z";
    record46.set("key", "imprint_insurance_scope_label");
    record46.set("en", "Insurance Scope");
    record46.set("page", "imprint");
    record46.set("section", "insurance");
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
    record47.id = "jh4bjv4d9eqb0q6";
    record47.set("key", "imprint_insurance_scope");
    record47.set("en", "Covers all professional services");
    record47.set("page", "imprint");
    record47.set("section", "insurance");
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
    record48.id = "p8pizisyrniduzq";
    record48.set("key", "imprint_additional_title");
    record48.set("en", "Additional Information");
    record48.set("page", "imprint");
    record48.set("section", "additional");
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
    record49.id = "zcpx2z6u1ozycyf";
    record49.set("key", "imprint_dispute_title");
    record49.set("en", "Dispute Resolution");
    record49.set("page", "imprint");
    record49.set("section", "dispute");
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
    record50.id = "qb1hi7czsz4w43v";
    record50.set("key", "imprint_dispute_text");
    record50.set("en", "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.");
    record50.set("page", "imprint");
    record50.set("section", "dispute");
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
    record51.id = "3sqwn8h6ecjpt5l";
    record51.set("key", "imprint_disclaimer_title");
    record51.set("en", "Disclaimer");
    record51.set("page", "imprint");
    record51.set("section", "disclaimer");
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
    record52.id = "5bv5jfwkqx0cbps";
    record52.set("key", "imprint_disclaimer_text");
    record52.set("en", "The contents of our website have been created with care. However, we cannot guarantee the accuracy, completeness and timeliness of the content.");
    record52.set("page", "imprint");
    record52.set("section", "disclaimer");
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
    record53.id = "rc35sdjpqnnnl15";
    record53.set("key", "imprint_liability_title");
    record53.set("en", "Liability");
    record53.set("page", "imprint");
    record53.set("section", "liability");
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
    record54.id = "n43tn3lpf9cc3xl";
    record54.set("key", "imprint_liability_text");
    record54.set("en", "As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information.");
    record54.set("page", "imprint");
    record54.set("section", "liability");
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
    record55.id = "ujhrj8rm32s7ptx";
    record55.set("key", "imprint_copyright_title");
    record55.set("en", "Copyright");
    record55.set("page", "imprint");
    record55.set("section", "copyright");
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
    record56.id = "f2t9wbmealwrare";
    record56.set("key", "imprint_copyright_text");
    record56.set("en", "The contents and works created by the site operators are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the author or creator.");
    record56.set("page", "imprint");
    record56.set("section", "copyright");
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
    record57.id = "ctkhm4efomi5qcd";
    record57.set("key", "imprint_footer_info");
    record57.set("en", "Legal Information");
    record57.set("page", "imprint");
    record57.set("section", "footer");
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
    record58.id = "lz5vcv9jrwxb098";
    record58.set("key", "imprint_footer_privacy");
    record58.set("en", "Privacy Policy");
    record58.set("page", "imprint");
    record58.set("section", "footer");
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
    record59.id = "h07ms3cjc3h456f";
    record59.set("key", "imprint_footer_and");
    record59.set("en", "and");
    record59.set("page", "imprint");
    record59.set("section", "footer");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.id = "bi1mqiy9tep8xij";
    record60.set("key", "imprint_footer_terms");
    record60.set("en", "Terms of Service");
    record60.set("page", "imprint");
    record60.set("section", "footer");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["bi1mqiy9tep8xij", "h07ms3cjc3h456f", "lz5vcv9jrwxb098", "ctkhm4efomi5qcd", "f2t9wbmealwrare", "ujhrj8rm32s7ptx", "n43tn3lpf9cc3xl", "rc35sdjpqnnnl15", "5bv5jfwkqx0cbps", "3sqwn8h6ecjpt5l", "qb1hi7czsz4w43v", "zcpx2z6u1ozycyf", "p8pizisyrniduzq", "jh4bjv4d9eqb0q6", "rid64galxk3vp8z", "r6cyc516hn9z5nv", "lyigtagjawtp8yz", "zj2ak9wt15lux0i", "yx5d1pqnupxbu1k", "dg1v1p0fkahr2ty", "6lw668hz05d6vqf", "oznb8q9a4sp3u5q", "7p5g0lj9tq6wzm7", "w2liscr8s5msgjr", "21vbfa6hbgr2uoq", "ddz2rfpo59x4luw", "f0wrn1cxl38xobh", "xw39qchsv75tm4k", "0cdi2yje0wwuonl", "tgg7uhs7ninm0ib", "dr3xymdr0rv5vtp", "38ku6hw9zzcnrz2", "sm9npoomj7ood6l", "1ar375p9ufcmtde", "0mzd0s8ya91nawb", "vcp1uynsm9y3s4u", "d0xel73tnetkruj", "xff9rdq7ledsj90", "w37i1wt3s7p8c55", "lhkjtxke9cpca0w", "nk7cu50s6yupi90", "jamfrrrcv0vl4ll", "3g8j851uky3fpja", "aydxmm9040h32ki", "yd0nh51jig1cdho", "gz3rf13zjq40kg2", "sh8k0abzkar8brq", "5ioc7kjn05vcyvk", "e8zuyxdw76dam9l", "j3fyrfvrakjueaj", "x9idn78r43f7cfe", "fiia6gl46ojo9yu", "gtl0e89o9sfqohc", "srh4nxqaqo4rl5n", "z1cxfnutyyilpn6", "luxr8eebj51vt25", "mpjyonuzqwdec1o", "w12key13ux44sir", "dzo4spythw9k98j", "04kf5rlclg7dl5k", "8z41qpfn5avl5pt"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("translation_EN", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
