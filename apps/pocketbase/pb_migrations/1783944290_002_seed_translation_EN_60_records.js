/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "1uwi6wpgt6rd109";
    record0.set("key", "imprint_breadcrumb_home");
    record0.set("en", "Home");
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
    record1.id = "okx6lp50yaqxmnj";
    record1.set("key", "imprint_breadcrumb_imprint");
    record1.set("en", "Imprint");
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
    record2.id = "g21y5lk1tr6f2om";
    record2.set("key", "imprint_hero_title");
    record2.set("en", "Imprint");
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
    record3.id = "e44z71k4knrxnp4";
    record3.set("key", "imprint_meta_description");
    record3.set("en", "Legal information and imprint of our company");
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
    record4.id = "7ao6yeklrv5pu5o";
    record4.set("key", "imprint_section1_title");
    record4.set("en", "Company Information");
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
    record5.id = "njtpwb25sdmg8ji";
    record5.set("key", "imprint_section1_company_info");
    record5.set("en", "Company Details");
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
    record6.id = "cpiyim8qbrpi8xl";
    record6.set("key", "imprint_company_name");
    record6.set("en", "Company Name");
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
    record7.id = "srt5fpl8ykwco9x";
    record7.set("key", "imprint_address_label");
    record7.set("en", "Address");
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
    record8.id = "kxfslfyee2hahdg";
    record8.set("key", "imprint_address_street");
    record8.set("en", "Street Address");
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
    record9.id = "sz6vftuep5jxi6k";
    record9.set("key", "imprint_address_city");
    record9.set("en", "City");
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
    record10.id = "i9igwulmk9n9nl1";
    record10.set("key", "imprint_address_country");
    record10.set("en", "Country");
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
    record11.id = "bkrxvcgr4bodvq3";
    record11.set("key", "imprint_management_title");
    record11.set("en", "Management");
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
    record12.id = "eb3jshxqh63k39h";
    record12.set("key", "imprint_management_person1");
    record12.set("en", "Managing Director 1");
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
    record13.id = "pj0wiqp1eshb4t5";
    record13.set("key", "imprint_management_person2");
    record13.set("en", "Managing Director 2");
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
    record14.id = "2lvkraj1ws1vb1l";
    record14.set("key", "imprint_contact_title");
    record14.set("en", "Contact Information");
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
    record15.id = "k9agjfejiitkbdo";
    record15.set("key", "imprint_phone_main_label");
    record15.set("en", "Main Phone");
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
    record16.id = "sbk9zwdizwdsxl4";
    record16.set("key", "imprint_phone_main");
    record16.set("en", "+1 (555) 123-4567");
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
    record17.id = "gi4ggjig3cm56e2";
    record17.set("key", "imprint_phone_support_label");
    record17.set("en", "Support Phone");
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
    record18.id = "9s3o3bg2iabyxxy";
    record18.set("key", "imprint_phone_support");
    record18.set("en", "+1 (555) 987-6543");
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
    record19.id = "m5850aapoedx4k2";
    record19.set("key", "imprint_email_label");
    record19.set("en", "Email");
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
    record20.id = "d196xdklklyvvww";
    record20.set("key", "imprint_email");
    record20.set("en", "info@company.com");
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
    record21.id = "mop4fjwap1vs381";
    record21.set("key", "imprint_website_label");
    record21.set("en", "Website");
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
    record22.id = "imqomhg9s7u56zw";
    record22.set("key", "imprint_website");
    record22.set("en", "www.company.com");
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
    record23.id = "vvtl66p8kkyxx7y";
    record23.set("key", "imprint_service_note");
    record23.set("en", "Service Provider Information");
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
    record24.id = "hdo566ipc7olyrc";
    record24.set("key", "imprint_register_title");
    record24.set("en", "Commercial Register");
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
    record25.id = "xt11afno38oxxqe";
    record25.set("key", "imprint_register_court_label");
    record25.set("en", "Register Court");
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
    record26.id = "wf05gotcw3lzmp8";
    record26.set("key", "imprint_register_court");
    record26.set("en", "District Court");
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
    record27.id = "nbqer63agrlum7g";
    record27.set("key", "imprint_register_number_label");
    record27.set("en", "Register Number");
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
    record28.id = "39qgyoq47su38i3";
    record28.set("key", "imprint_register_number");
    record28.set("en", "HRB 123456");
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
    record29.id = "yee73wbp8p7dylz";
    record29.set("key", "imprint_vat_title");
    record29.set("en", "Tax Information");
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
    record30.id = "ef1p2uwu04ifnx7";
    record30.set("key", "imprint_vat_label");
    record30.set("en", "VAT ID");
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
    record31.id = "zwfqgarqm2taumv";
    record31.set("key", "imprint_vat_number");
    record31.set("en", "DE123456789");
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
    record32.id = "63rtn4f8c37100c";
    record32.set("key", "imprint_weee_title");
    record32.set("en", "WEEE Registration");
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
    record33.id = "7klnqjpfnkxr380";
    record33.set("key", "imprint_weee_label");
    record33.set("en", "WEEE Registration Number");
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
    record34.id = "dfj83an0x2wfymh";
    record34.set("key", "imprint_weee_number");
    record34.set("en", "DE12345678");
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
    record35.id = "e8psr52er3z9isu";
    record35.set("key", "imprint_smartdock_title");
    record35.set("en", "SmartDock Information");
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
    record36.id = "pm0m35ozg01d7vk";
    record36.set("key", "imprint_smartdock_intro");
    record36.set("en", "SmartDock Contact Details");
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
    record37.id = "5ik4fhm0xlsttaz";
    record37.set("key", "imprint_smartdock_phone_label");
    record37.set("en", "SmartDock Phone");
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
    record38.id = "fota7s07c3ahzgk";
    record38.set("key", "imprint_smartdock_phone");
    record38.set("en", "+1 (555) 246-8135");
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
    record39.id = "q4qcohw34afule6";
    record39.set("key", "imprint_smartdock_email_label");
    record39.set("en", "SmartDock Email");
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
    record40.id = "4y42bq4jr90i2sp";
    record40.set("key", "imprint_smartdock_email");
    record40.set("en", "smartdock@company.com");
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
    record41.id = "fmfm5r7lhm8mmii";
    record41.set("key", "imprint_insurance_title");
    record41.set("en", "Insurance Information");
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
    record42.id = "v6al75anbqs5zjd";
    record42.set("key", "imprint_insurance_company_label");
    record42.set("en", "Insurance Company");
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
    record43.id = "wlb9ky11xs97rex";
    record43.set("key", "imprint_insurance_company");
    record43.set("en", "Insurance Provider Inc.");
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
    record44.id = "gxcr3usgyoky66m";
    record44.set("key", "imprint_insurance_type");
    record44.set("en", "Professional Liability Insurance");
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
    record45.id = "5k9gljiuladhl3v";
    record45.set("key", "imprint_insurance_scope_label");
    record45.set("en", "Insurance Scope");
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
    record46.id = "yd8snhwpk0sd1a0";
    record46.set("key", "imprint_insurance_scope");
    record46.set("en", "Coverage up to \u20ac1,000,000");
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
    record47.id = "rbab2yazrhviao1";
    record47.set("key", "imprint_additional_title");
    record47.set("en", "Additional Information");
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
    record48.id = "lw5kncz91xh3fn5";
    record48.set("key", "imprint_dispute_title");
    record48.set("en", "Dispute Resolution");
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
    record49.id = "icpiknpglniiija";
    record49.set("key", "imprint_dispute_text");
    record49.set("en", "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.");
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
    record50.id = "bfyifet9mjjn6jo";
    record50.set("key", "imprint_disclaimer_title");
    record50.set("en", "Disclaimer");
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
    record51.id = "trp31i7g6jyozbc";
    record51.set("key", "imprint_disclaimer_text");
    record51.set("en", "The contents of our website have been created with care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.");
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
    record52.id = "7ap12ziytllws4s";
    record52.set("key", "imprint_liability_title");
    record52.set("en", "Liability");
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
    record53.id = "0j9xuklmkwm1xch";
    record53.set("key", "imprint_liability_text");
    record53.set("en", "We are responsible for our own content on these pages in accordance with general laws. However, we are not responsible for the content of linked external websites.");
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
    record54.id = "kdgrpq9vaount3r";
    record54.set("key", "imprint_copyright_title");
    record54.set("en", "Copyright");
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
    record55.id = "sz9rh5gjkqxa494";
    record55.set("key", "imprint_copyright_text");
    record55.set("en", "The contents and works created by the site operators are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the author or creator.");
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
    record56.id = "1eil9bk1yb7nbl0";
    record56.set("key", "imprint_footer_info");
    record56.set("en", "Legal Information");
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
    record57.id = "xldb6v4zqtqsznz";
    record57.set("key", "imprint_footer_privacy");
    record57.set("en", "Privacy Policy");
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
    record58.id = "x34pdcqp2vundgi";
    record58.set("key", "imprint_footer_and");
    record58.set("en", "and");
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
    record59.id = "spn7ih8lby4vnmp";
    record59.set("key", "imprint_footer_terms");
    record59.set("en", "Terms of Service");
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
  const seededRecordIds = ["spn7ih8lby4vnmp", "x34pdcqp2vundgi", "xldb6v4zqtqsznz", "1eil9bk1yb7nbl0", "sz9rh5gjkqxa494", "kdgrpq9vaount3r", "0j9xuklmkwm1xch", "7ap12ziytllws4s", "trp31i7g6jyozbc", "bfyifet9mjjn6jo", "icpiknpglniiija", "lw5kncz91xh3fn5", "rbab2yazrhviao1", "yd8snhwpk0sd1a0", "5k9gljiuladhl3v", "gxcr3usgyoky66m", "wlb9ky11xs97rex", "v6al75anbqs5zjd", "fmfm5r7lhm8mmii", "4y42bq4jr90i2sp", "q4qcohw34afule6", "fota7s07c3ahzgk", "5ik4fhm0xlsttaz", "pm0m35ozg01d7vk", "e8psr52er3z9isu", "dfj83an0x2wfymh", "7klnqjpfnkxr380", "63rtn4f8c37100c", "zwfqgarqm2taumv", "ef1p2uwu04ifnx7", "yee73wbp8p7dylz", "39qgyoq47su38i3", "nbqer63agrlum7g", "wf05gotcw3lzmp8", "xt11afno38oxxqe", "hdo566ipc7olyrc", "vvtl66p8kkyxx7y", "imqomhg9s7u56zw", "mop4fjwap1vs381", "d196xdklklyvvww", "m5850aapoedx4k2", "9s3o3bg2iabyxxy", "gi4ggjig3cm56e2", "sbk9zwdizwdsxl4", "k9agjfejiitkbdo", "2lvkraj1ws1vb1l", "pj0wiqp1eshb4t5", "eb3jshxqh63k39h", "bkrxvcgr4bodvq3", "i9igwulmk9n9nl1", "sz6vftuep5jxi6k", "kxfslfyee2hahdg", "srt5fpl8ykwco9x", "cpiyim8qbrpi8xl", "njtpwb25sdmg8ji", "7ao6yeklrv5pu5o", "e44z71k4knrxnp4", "g21y5lk1tr6f2om", "okx6lp50yaqxmnj", "1uwi6wpgt6rd109"];
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
