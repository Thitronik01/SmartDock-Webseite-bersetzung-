/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "pqoig2nvytihiz5";
    record0.set("key", "hero_title");
    record0.set("en", "SMARTDOCK - Intelligent Port Maneuvering Solution");
    record0.set("page", "home");
    record0.set("section", "hero");
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
    record1.id = "72uk5bawrp95ptg";
    record1.set("key", "hero_subtitle");
    record1.set("en", "Complete control and safety with every maneuver. Designed for discerning captains who value precision and innovation.");
    record1.set("page", "home");
    record1.set("section", "hero");
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
    record2.id = "frpt5kjv12o6p22";
    record2.set("key", "hero_cta_main");
    record2.set("en", "Dock smartly.");
    record2.set("page", "home");
    record2.set("section", "hero");
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
    record3.id = "e9fwdufoo0b8vsm";
    record3.set("key", "hero_description");
    record3.set("en", "With SMARTDOCK, you can maneuver your boat intuitively, precisely, and safely\u2014all from the convenience of your smartphone.");
    record3.set("page", "home");
    record3.set("section", "hero");
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
    record4.id = "xxbbaa3r0mmrbj1";
    record4.set("key", "hero_tagline");
    record4.set("en", "Navigate in control.");
    record4.set("page", "home");
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
    record5.id = "fixfwporu2obdiy";
    record5.set("key", "hero_badge");
    record5.set("en", "Made in Germany.");
    record5.set("page", "home");
    record5.set("section", "hero");
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
    record6.id = "ztaqkp6w7cpfgqu";
    record6.set("key", "hero_btn_configurator");
    record6.set("en", "Configurator");
    record6.set("page", "home");
    record6.set("section", "hero");
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
    record7.id = "1x9cyrv5gy1aofo";
    record7.set("key", "hero_btn_dealer");
    record7.set("en", "Dealer Locator");
    record7.set("page", "home");
    record7.set("section", "hero");
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
    record8.id = "740kz5k1ub9xgp5";
    record8.set("key", "hero_btn_request");
    record8.set("en", "Request Now");
    record8.set("page", "home");
    record8.set("section", "hero");
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
    record9.id = "xveszoroac8kwqr";
    record9.set("key", "about_title");
    record9.set("en", "This is SMARTDOCK");
    record9.set("page", "home");
    record9.set("section", "about");
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
    record10.id = "2trbnp21ftarxwz";
    record10.set("key", "about_subtitle");
    record10.set("en", "The Crew in Your Hand");
    record10.set("page", "home");
    record10.set("section", "about");
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
    record11.id = "93vqhugmp2lj7ta";
    record11.set("key", "about_description");
    record11.set("en", "SMARTDOCK revolutionizes the way you maneuver your boat. With wireless control of the engines and thrusters, you always have a clear overview and can steer the boat with pinpoint accuracy\u2014even in tight harbors and under difficult wind conditions.");
    record11.set("page", "home");
    record11.set("section", "about");
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
    record12.id = "bx8sc6ul21559lb";
    record12.set("key", "about_boats");
    record12.set("en", "For boats of all sizes");
    record12.set("page", "home");
    record12.set("section", "about");
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
    record13.id = "udk4olllbsoerym";
    record13.set("key", "about_loading");
    record13.set("en", "Loading preview...");
    record13.set("page", "home");
    record13.set("section", "about");
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
    record14.id = "s2o78uscbv54ei1";
    record14.set("key", "about_video_unavailable");
    record14.set("en", "Video not available");
    record14.set("page", "home");
    record14.set("section", "about");
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
    record15.id = "6vxhvtzlofcb91r";
    record15.set("key", "reasons_title");
    record15.set("en", "FIVE REASONS TO CHOOSE SMARTDOCK");
    record15.set("page", "home");
    record15.set("section", "reasons");
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
    record16.id = "3plpu0cc6nj89a3";
    record16.set("key", "reasons_subtitle");
    record16.set("en", "More control. Less stress. More freedom.");
    record16.set("page", "home");
    record16.set("section", "reasons");
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
    record17.id = "6uvivuwyytzkhob";
    record17.set("key", "reasons_intro");
    record17.set("en", "Discover the benefits that make SMARTDOCK an indispensable solution for modern skippers");
    record17.set("page", "home");
    record17.set("section", "reasons");
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
    record18.id = "jcyfbf6h8mofz0i";
    record18.set("key", "reason_1_title");
    record18.set("en", "Intuitive operation");
    record18.set("page", "home");
    record18.set("section", "reasons");
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
    record19.id = "ez17m62bp035qxa";
    record19.set("key", "reason_1_description");
    record19.set("en", "The app has a clear and intuitive layout. A single swipe is all it takes to issue control commands. This makes even challenging maneuvers easier to master\u2014without any complicated additional controls.");
    record19.set("page", "home");
    record19.set("section", "reasons");
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
    record20.id = "g0d6sl05pkxebi0";
    record20.set("key", "reason_2_title");
    record20.set("en", "Precise Control");
    record20.set("page", "home");
    record20.set("section", "reasons");
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
    record21.id = "3bqffj68g8qws00";
    record21.set("key", "reason_2_description");
    record21.set("en", "Whether it's engines, a bow thruster, or a stern thruster, SMARTDOCK lets you control your boat with precision and without delay. This is especially helpful in tight spaces, in windy conditions, or when there's a current.");
    record21.set("page", "home");
    record21.set("section", "reasons");
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
    record22.id = "chr2sdjtjsio7ny";
    record22.set("key", "reason_3_title");
    record22.set("en", "Wide Reach.");
    record22.set("page", "home");
    record22.set("section", "reasons");
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
    record23.id = "5iyq379fnagkygi";
    record23.set("key", "reason_3_description");
    record23.set("en", "SMARTDOCK uses Bluetooth LE: a proven and reliable technology. With over 40 channels, the system has a range of 50 meters\u2014ensuring a stable connection, lag-free control commands, and complete freedom of movement on board.");
    record23.set("page", "home");
    record23.set("section", "reasons");
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
    record24.id = "8312co8iwx7c6o9";
    record24.set("key", "reason_4_title");
    record24.set("en", "Quick to integrate");
    record24.set("page", "home");
    record24.set("section", "reasons");
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
    record25.id = "5uxlqvumxmrlh3k";
    record25.set("key", "reason_4_description");
    record25.set("en", "SMARTDOCK is designed as a plug-and-play solution and can be integrated into compatible propulsion and thruster systems. This reduces the effort required for installation and makes it particularly easy to get started.");
    record25.set("page", "home");
    record25.set("section", "reasons");
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
    record26.id = "59dv8z31ftgclyg";
    record26.set("key", "reason_5_title");
    record26.set("en", "Designed with the future in mind.");
    record26.set("page", "home");
    record26.set("section", "reasons");
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
    record27.id = "tskj0tebybaovf0";
    record27.set("key", "reason_5_description");
    record27.set("en", "As an app-controlled system, SMARTDOCK is modern, updatable, and modularly expandable. This means you're not only investing in greater convenience for your next harbor maneuver, but also in a solution that can grow with your boat.");
    record27.set("page", "home");
    record27.set("section", "reasons");
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
    record28.id = "oebjrbd5kd3qeai";
    record28.set("key", "modules_title");
    record28.set("en", "SMARTDOCK Modules");
    record28.set("page", "home");
    record28.set("section", "modules");
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
    record29.id = "qh2qz7vun73mftf";
    record29.set("key", "modules_subtitle");
    record29.set("en", "Modular design. Perfect for your boat.");
    record29.set("page", "home");
    record29.set("section", "modules");
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
    record30.id = "aa8ep5xf1tlmuik";
    record30.set("key", "modules_intro");
    record30.set("en", "Thanks to its modular design, the SMARTDOCK system can be perfectly adapted to the specific needs of your boat.");
    record30.set("page", "home");
    record30.set("section", "modules");
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
    record31.id = "f1ybqbr65cw2emr";
    record31.set("key", "module_ecu_title");
    record31.set("en", "ECU");
    record31.set("page", "home");
    record31.set("section", "modules");
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
    record32.id = "zrt9yjt616xnxng";
    record32.set("key", "module_ecu_description");
    record32.set("en", "Engine Control Unit for precise control of the main engines.");
    record32.set("page", "home");
    record32.set("section", "modules");
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
    record33.id = "aidxkf7nw5et2pb";
    record33.set("key", "module_tcu_title");
    record33.set("en", "TCU");
    record33.set("page", "home");
    record33.set("section", "modules");
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
    record34.id = "ofm088exyuyn32o";
    record34.set("key", "module_tcu_description");
    record34.set("en", "Thruster Control Unit for conventional on/off thrusters.");
    record34.set("page", "home");
    record34.set("section", "modules");
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
    record35.id = "t8headtprylyybq";
    record35.set("key", "module_tcup_title");
    record35.set("en", "TCU-P");
    record35.set("page", "home");
    record35.set("section", "modules");
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
    record36.id = "jwqvgzoofdp7gxj";
    record36.set("key", "module_tcup_description");
    record36.set("en", "Proportional Thruster Control Unit for speed-controlled thrusters.");
    record36.set("page", "home");
    record36.set("section", "modules");
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
    record37.id = "3ehdsv4nnpm71yf";
    record37.set("key", "module_acu_title");
    record37.set("en", "ACU");
    record37.set("page", "home");
    record37.set("section", "modules");
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
    record38.id = "twfo5tkokr9ksoc";
    record38.set("key", "module_acu_description");
    record38.set("en", "Anchor Control Unit for operating anchor winches, a thruster, and a horn.");
    record38.set("page", "home");
    record38.set("section", "modules");
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
    record39.id = "h84adcpp4y8otpd";
    record39.set("key", "module_wcu_title");
    record39.set("en", "WCU");
    record39.set("page", "home");
    record39.set("section", "modules");
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
    record40.id = "eg2kixarsriop7e";
    record40.set("key", "module_wcu_description");
    record40.set("en", "Winch Control Unit for controlling winches and horns.");
    record40.set("page", "home");
    record40.set("section", "modules");
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
    record41.id = "1a8yxdoof0sazfn";
    record41.set("key", "module_coming_soon");
    record41.set("en", "Coming soon");
    record41.set("page", "home");
    record41.set("section", "modules");
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
    record42.id = "pz8iz0a90w0zwv8";
    record42.set("key", "dealer_title");
    record42.set("en", "Find an installation partner near you");
    record42.set("page", "home");
    record42.set("section", "dealer");
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
    record43.id = "qsa5qxqr65hly2x";
    record43.set("key", "dealer_description");
    record43.set("en", "Our certified SMARTDOCK partners will handle the professional installation and maintenance of your system.");
    record43.set("page", "home");
    record43.set("section", "dealer");
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
    record44.id = "t0tjaoxhxs9cxo3";
    record44.set("key", "dealer_btn");
    record44.set("en", "Open the Dealer Locator.");
    record44.set("page", "home");
    record44.set("section", "dealer");
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
    record45.id = "3dvmi7xf8zp3fkh";
    record45.set("key", "configurator_title");
    record45.set("en", "Build Your Own Custom System");
    record45.set("page", "home");
    record45.set("section", "configurator");
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
    record46.id = "gdxwticzopsd927";
    record46.set("key", "configurator_description");
    record46.set("en", "Use our configurator to find the right SMARTDOCK modules for your boat and get a detailed, no-obligation quote.");
    record46.set("page", "home");
    record46.set("section", "configurator");
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
    record47.id = "tnxdgm8wf6g4xvh";
    record47.set("key", "configurator_btn");
    record47.set("en", "Launch the Configurator.");
    record47.set("page", "home");
    record47.set("section", "configurator");
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
    record48.id = "yzobt34ywt5e3nx";
    record48.set("key", "app_title");
    record48.set("en", "Download the app and try it offline.");
    record48.set("page", "home");
    record48.set("section", "app");
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
    record49.id = "5s5ezv3g80jk0nr";
    record49.set("key", "app_description");
    record49.set("en", "See for yourself how easy it is to use. Download the SMARTDOCK app and try it out in offline mode.");
    record49.set("page", "home");
    record49.set("section", "app");
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
    record50.id = "efozmoimub8nsns";
    record50.set("key", "app_store");
    record50.set("en", "App Store");
    record50.set("page", "home");
    record50.set("section", "app");
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
    record51.id = "1d94xxlmzf5cim1";
    record51.set("key", "app_google_play");
    record51.set("en", "Google Play");
    record51.set("page", "home");
    record51.set("section", "app");
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
    record52.id = "ht4gxsxk7qg7b8k";
    record52.set("key", "contact_title");
    record52.set("en", "Contact us");
    record52.set("page", "home");
    record52.set("section", "contact");
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
    record53.id = "ay78iw1f9itc7f6";
    record53.set("key", "contact_subtitle");
    record53.set("en", "Ready for smarter port maneuvers? Let's talk about your needs.");
    record53.set("page", "home");
    record53.set("section", "contact");
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
    record54.id = "mw4frapnjmvq91g";
    record54.set("key", "contact_label_name");
    record54.set("en", "Name *");
    record54.set("page", "home");
    record54.set("section", "contact");
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
    record55.id = "ovsbe9s4jljzhpx";
    record55.set("key", "contact_placeholder_name");
    record55.set("en", "Your Name");
    record55.set("page", "home");
    record55.set("section", "contact");
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
    record56.id = "0hpm7u70qvoebap";
    record56.set("key", "contact_label_email");
    record56.set("en", "Email");
    record56.set("page", "home");
    record56.set("section", "contact");
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
    record57.id = "jlsq0zp9d96odc8";
    record57.set("key", "contact_placeholder_email");
    record57.set("en", "your@email.com");
    record57.set("page", "home");
    record57.set("section", "contact");
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
    record58.id = "mty4tste2nwg4bh";
    record58.set("key", "contact_label_company");
    record58.set("en", "Company");
    record58.set("page", "home");
    record58.set("section", "contact");
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
    record59.id = "9y26mpsbidon2fq";
    record59.set("key", "contact_placeholder_company");
    record59.set("en", "Your Company");
    record59.set("page", "home");
    record59.set("section", "contact");
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
    record60.id = "fq9hwei0gwi66rg";
    record60.set("key", "contact_label_phone");
    record60.set("en", "Phone");
    record60.set("page", "home");
    record60.set("section", "contact");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.id = "lyl1ke2rvapz970";
    record61.set("key", "contact_label_code");
    record61.set("en", "Code");
    record61.set("page", "home");
    record61.set("section", "contact");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.id = "6pukj12p3t4absg";
    record62.set("key", "contact_label_number");
    record62.set("en", "Number");
    record62.set("page", "home");
    record62.set("section", "contact");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.id = "qzcyqtoqwjw79oo";
    record63.set("key", "contact_label_message");
    record63.set("en", "Message *");
    record63.set("page", "home");
    record63.set("section", "contact");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.id = "7xplcz7jb10pd8i";
    record64.set("key", "contact_placeholder_message");
    record64.set("en", "Describe your requirements...");
    record64.set("page", "home");
    record64.set("section", "contact");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.id = "9oz58391iwzdyju";
    record65.set("key", "contact_btn_send");
    record65.set("en", "Send Inquiry");
    record65.set("page", "home");
    record65.set("section", "contact");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.id = "w9iu4vf6peigcu6";
    record66.set("key", "contact_sending");
    record66.set("en", "Sending...");
    record66.set("page", "home");
    record66.set("section", "contact");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.id = "m19vmh45zv1zloc";
    record67.set("key", "contact_info_title");
    record67.set("en", "Contact Information");
    record67.set("page", "home");
    record67.set("section", "contact_info");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.id = "ufz2a26rnmxpgvl";
    record68.set("key", "contact_info_subtitle");
    record68.set("en", "A direct line to our team in Eckernf\u00f6rde.");
    record68.set("page", "home");
    record68.set("section", "contact_info");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.id = "996h1ydscp5hqp2";
    record69.set("key", "contact_info_phone_label");
    record69.set("en", "PHONE (general office)");
    record69.set("page", "home");
    record69.set("section", "contact_info");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.id = "rcve4bkc2q0dafd";
    record70.set("key", "contact_info_phone_number");
    record70.set("en", "+49 4351 76744-0");
    record70.set("page", "home");
    record70.set("section", "contact_info");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.id = "lwsc1w9taqhnxkn";
    record71.set("key", "contact_info_email_label");
    record71.set("en", "E-MAIL");
    record71.set("page", "home");
    record71.set("section", "contact_info");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.id = "ffux52ne5pmdg0x";
    record72.set("key", "contact_info_email");
    record72.set("en", "smartdock@thitronik.de");
    record72.set("page", "home");
    record72.set("section", "contact_info");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.id = "teqkdn5ddat5wh9";
    record73.set("key", "contact_info_address_label");
    record73.set("en", "ADDRESS");
    record73.set("page", "home");
    record73.set("section", "contact_info");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.id = "ujjtiuns9ihzukq";
    record74.set("key", "contact_info_address");
    record74.set("en", "Finkenweg 9-15, 24340 Eckernf\u00f6rde");
    record74.set("page", "home");
    record74.set("section", "contact_info");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.id = "64cz9gu2xzzv5lt";
    record75.set("key", "contact_info_countries");
    record75.set("en", "Belgium, Bulgaria, Denmark, Germany, Estonia, Finland, France, Greece, Ireland, Italy, Croatia, Latvia, Lithuania, Luxembourg, Malta, the Netherlands, Austria, Poland, Portugal, Romania, Sweden, Switzerland, Slovakia, Slovenia, Spain, the Czech Republic, Hungary, Cyprus");
    record75.set("page", "home");
    record75.set("section", "contact_info");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["64cz9gu2xzzv5lt", "ujjtiuns9ihzukq", "teqkdn5ddat5wh9", "ffux52ne5pmdg0x", "lwsc1w9taqhnxkn", "rcve4bkc2q0dafd", "996h1ydscp5hqp2", "ufz2a26rnmxpgvl", "m19vmh45zv1zloc", "w9iu4vf6peigcu6", "9oz58391iwzdyju", "7xplcz7jb10pd8i", "qzcyqtoqwjw79oo", "6pukj12p3t4absg", "lyl1ke2rvapz970", "fq9hwei0gwi66rg", "9y26mpsbidon2fq", "mty4tste2nwg4bh", "jlsq0zp9d96odc8", "0hpm7u70qvoebap", "ovsbe9s4jljzhpx", "mw4frapnjmvq91g", "ay78iw1f9itc7f6", "ht4gxsxk7qg7b8k", "1d94xxlmzf5cim1", "efozmoimub8nsns", "5s5ezv3g80jk0nr", "yzobt34ywt5e3nx", "tnxdgm8wf6g4xvh", "gdxwticzopsd927", "3dvmi7xf8zp3fkh", "t0tjaoxhxs9cxo3", "qsa5qxqr65hly2x", "pz8iz0a90w0zwv8", "1a8yxdoof0sazfn", "eg2kixarsriop7e", "h84adcpp4y8otpd", "twfo5tkokr9ksoc", "3ehdsv4nnpm71yf", "jwqvgzoofdp7gxj", "t8headtprylyybq", "ofm088exyuyn32o", "aidxkf7nw5et2pb", "zrt9yjt616xnxng", "f1ybqbr65cw2emr", "aa8ep5xf1tlmuik", "qh2qz7vun73mftf", "oebjrbd5kd3qeai", "tskj0tebybaovf0", "59dv8z31ftgclyg", "5uxlqvumxmrlh3k", "8312co8iwx7c6o9", "5iyq379fnagkygi", "chr2sdjtjsio7ny", "3bqffj68g8qws00", "g0d6sl05pkxebi0", "ez17m62bp035qxa", "jcyfbf6h8mofz0i", "6uvivuwyytzkhob", "3plpu0cc6nj89a3", "6vxhvtzlofcb91r", "s2o78uscbv54ei1", "udk4olllbsoerym", "bx8sc6ul21559lb", "93vqhugmp2lj7ta", "2trbnp21ftarxwz", "xveszoroac8kwqr", "740kz5k1ub9xgp5", "1x9cyrv5gy1aofo", "ztaqkp6w7cpfgqu", "fixfwporu2obdiy", "xxbbaa3r0mmrbj1", "e9fwdufoo0b8vsm", "frpt5kjv12o6p22", "72uk5bawrp95ptg", "pqoig2nvytihiz5"];
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
