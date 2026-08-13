/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "7cn1sn7uqygqiqz";
    record0.set("key", "product_page_title");
    record0.set("en", "Product - SMARTDOCK");
    record0.set("page", "produkte");
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
    record1.id = "oq0is0fn6mwvwii";
    record1.set("key", "product_page_subtitle");
    record1.set("en", "Discover the SMARTDOCK system. Intelligent modular technology for safe and precise harbor maneuvers.");
    record1.set("page", "produkte");
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
    record2.id = "hcisdw3p35p3dri";
    record2.set("key", "breadcrumb_home");
    record2.set("en", "Home");
    record2.set("page", "produkte");
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
    record3.id = "xvx9zdce36d4pjw";
    record3.set("key", "breadcrumb_product");
    record3.set("en", "Product");
    record3.set("page", "produkte");
    record3.set("section", "header");
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
    record4.id = "xy0fodemv14z0gd";
    record4.set("key", "breadcrumb_smartdock");
    record4.set("en", "SMARTDOCK");
    record4.set("page", "produkte");
    record4.set("section", "header");
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
    record5.id = "buszgbiy6mxfmid";
    record5.set("key", "intro_tagline");
    record5.set("en", "Your plug-and-play upgrade for maximum control on board.");
    record5.set("page", "produkte");
    record5.set("section", "intro");
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
    record6.id = "oiyyr51r0e97dlu";
    record6.set("key", "intro_heading");
    record6.set("en", "Navigate in Control");
    record6.set("page", "produkte");
    record6.set("section", "intro");
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
    record7.id = "lr25y0fi52ynggg";
    record7.set("key", "intro_paragraph_1");
    record7.set("en", "You know your boat\u2014every response, every maneuver. Now you have a system at your side that makes it even easier to maintain that very control\u2014all on your own.");
    record7.set("page", "produkte");
    record7.set("section", "intro");
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
    record8.id = "eauxgvfs6ekj41w";
    record8.set("key", "intro_paragraph_2");
    record8.set("en", "With SMARTDOCK, you can control your boat directly from your smartphone\u2014whether you're at the bow, the stern, or right in the middle.");
    record8.set("page", "produkte");
    record8.set("section", "intro");
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
    record9.id = "pc2n4onhz2fkc45";
    record9.set("key", "intro_paragraph_3");
    record9.set("en", "Docking becomes a smooth, one-man show. No stress, no shouting, no compromises\u2014just you and your boat working in perfect harmony.");
    record9.set("page", "produkte");
    record9.set("section", "intro");
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
    record10.id = "3bpytvhlobzkpua";
    record10.set("key", "intro_paragraph_4");
    record10.set("en", "SMARTDOCK was developed with the goal of offering experienced skippers a whole new level of freedom. It's a system that integrates into existing setups and gives you full control in any situation.");
    record10.set("page", "produkte");
    record10.set("section", "intro");
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
    record11.id = "7dpnylgcyphvonn";
    record11.set("key", "crew_magazine_label");
    record11.set("en", "float magazine put it to the test.");
    record11.set("page", "produkte");
    record11.set("section", "crew");
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
    record12.id = "hla5gge1i9j9wdz";
    record12.set("key", "crew_review_quote");
    record12.set("en", "First impression: It's amazingly easy to use\u2014and a lot of fun.");
    record12.set("page", "produkte");
    record12.set("section", "crew");
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
    record13.id = "4t2s3itlf8gqag0";
    record13.set("key", "crew_review_link");
    record13.set("en", "To the review");
    record13.set("page", "produkte");
    record13.set("section", "crew");
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
    record14.id = "wtmrddcxvf10ew9";
    record14.set("key", "app_heading");
    record14.set("en", "Install. Turn it on. Everything in the app");
    record14.set("page", "produkte");
    record14.set("section", "app");
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
    record15.id = "wzj6fd0podygo5i";
    record15.set("key", "app_subheading");
    record15.set("en", "Plug & Play");
    record15.set("page", "produkte");
    record15.set("section", "app");
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
    record16.id = "ntoz1endrqwliap";
    record16.set("key", "app_paragraph_1");
    record16.set("en", "SMARTDOCK is designed according to the plug-and-play principle\u2014once installed, you can conveniently control everything via the app. Installation on board is quick and easy and requires neither complex modifications nor special technical expertise.");
    record16.set("page", "produkte");
    record16.set("section", "app");
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
    record17.id = "a1zobirjzmsyvtb";
    record17.set("key", "app_paragraph_2");
    record17.set("en", "Once it's installed, the app takes over: setup, control, monitoring\u2014everything works intuitively and is managed centrally from your smartphone. You don't need a separate control panel or any additional hardware.");
    record17.set("page", "produkte");
    record17.set("section", "app");
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
    record18.id = "1xn6rzordl8xu2l";
    record18.set("key", "app_paragraph_3");
    record18.set("en", "Just connect, start, and enjoy full control\u2014that's what modern boat control looks like.");
    record18.set("page", "produkte");
    record18.set("section", "app");
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
    record19.id = "qkan519310nkuvj";
    record19.set("key", "modules_ecu_label");
    record19.set("en", "ENGINE CONTROL UNIT");
    record19.set("page", "produkte");
    record19.set("section", "modules");
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
    record20.id = "y1481cyuz6dx7qd";
    record20.set("key", "modules_ecu_title");
    record20.set("en", "SMARTDOCK-ECU");
    record20.set("page", "produkte");
    record20.set("section", "modules");
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
    record21.id = "5e0jpsf12g74t4i";
    record21.set("key", "modules_ecu_description_1");
    record21.set("en", "ECU stands for Engine Control Unit. It is a control unit that allows you to control your boat's engine using the SMARTDOCK app. To do this, the SMARTDOCK ECU uses your boat's digital control systems.");
    record21.set("page", "produkte");
    record21.set("section", "modules");
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
    record22.id = "2c4qse0jypcapax";
    record22.set("key", "modules_ecu_description_2");
    record22.set("en", "The control information is sent from the smartphone to the ECU, where it is converted into data that the boat's control system can correctly interpret and execute. The boat's helm position is also constantly monitored, so that the helm can take control at any time.");
    record22.set("page", "produkte");
    record22.set("section", "modules");
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
    record23.id = "o7r8er5y863iic7";
    record23.set("key", "modules_tcu_label");
    record23.set("en", "THRUSTER CONTROL UNIT");
    record23.set("page", "produkte");
    record23.set("section", "modules");
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
    record24.id = "xk9kwgecfz8wetz";
    record24.set("key", "modules_tcu_title");
    record24.set("en", "SMARTDOCK-TCU");
    record24.set("page", "produkte");
    record24.set("section", "modules");
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
    record25.id = "c2kiruf7j37esv0";
    record25.set("key", "modules_tcu_description_1");
    record25.set("en", "TCU stands for Thruster Control Unit. It is a control unit that allows you to control the bow and stern thrusters using the SMARTDOCK app.");
    record25.set("page", "produkte");
    record25.set("section", "modules");
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
    record26.id = "fz86due7gg8z41p";
    record26.set("key", "modules_tcu_description_2");
    record26.set("en", "The control information from the app is converted into signals for the thrusters, enabling precise control in the desired direction.");
    record26.set("page", "produkte");
    record26.set("section", "modules");
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
    record27.id = "l7mn0vquqj3kr2g";
    record27.set("key", "compatibility_heading");
    record27.set("en", "Compatibility");
    record27.set("page", "produkte");
    record27.set("section", "compatibility");
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
    record28.id = "uphkg7w8xkc6tnw";
    record28.set("key", "compatibility_description");
    record28.set("en", "SMARTDOCK integrates seamlessly into existing systems. The system is compatible with Volvo Penta engines manufactured in 2010 or later, MerCruiser/Mercury systems from 2016 onward, and Yamaha engines from 2021 onward (Helm Master EX system). As a result, SMARTDOCK supports a wide range of popular engines and boat types\u2014making it easy to get started with smart boat control.");
    record28.set("page", "produkte");
    record28.set("section", "compatibility");
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
    record29.id = "ogqc0fxrm77lesw";
    record29.set("key", "compatibility_contact_text");
    record29.set("en", "Can't find your drive? No problem\u2014just get in touch with us!");
    record29.set("page", "produkte");
    record29.set("section", "compatibility");
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
    record30.id = "0379oaym5drdkt9";
    record30.set("key", "compatibility_contact_link");
    record30.set("en", "Get in touch");
    record30.set("page", "produkte");
    record30.set("section", "compatibility");
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
    record31.id = "xlg33j9rutx8565";
    record31.set("key", "cta_heading");
    record31.set("en", "Ready for your next ride?");
    record31.set("page", "produkte");
    record31.set("section", "cta");
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
    record32.id = "4anpj7z17gvzg4v";
    record32.set("key", "cta_configure_button");
    record32.set("en", "Configure Now");
    record32.set("page", "produkte");
    record32.set("section", "cta");
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
    record33.id = "h792ofr0etw3a3v";
    record33.set("key", "cta_dealer_button");
    record33.set("en", "Find a Dealer");
    record33.set("page", "produkte");
    record33.set("section", "cta");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["h792ofr0etw3a3v", "4anpj7z17gvzg4v", "xlg33j9rutx8565", "0379oaym5drdkt9", "ogqc0fxrm77lesw", "uphkg7w8xkc6tnw", "l7mn0vquqj3kr2g", "fz86due7gg8z41p", "c2kiruf7j37esv0", "xk9kwgecfz8wetz", "o7r8er5y863iic7", "2c4qse0jypcapax", "5e0jpsf12g74t4i", "y1481cyuz6dx7qd", "qkan519310nkuvj", "1xn6rzordl8xu2l", "a1zobirjzmsyvtb", "ntoz1endrqwliap", "wzj6fd0podygo5i", "wtmrddcxvf10ew9", "4t2s3itlf8gqag0", "hla5gge1i9j9wdz", "7dpnylgcyphvonn", "3bpytvhlobzkpua", "pc2n4onhz2fkc45", "eauxgvfs6ekj41w", "lr25y0fi52ynggg", "oiyyr51r0e97dlu", "buszgbiy6mxfmid", "xy0fodemv14z0gd", "xvx9zdce36d4pjw", "hcisdw3p35p3dri", "oq0is0fn6mwvwii", "7cn1sn7uqygqiqz"];
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
