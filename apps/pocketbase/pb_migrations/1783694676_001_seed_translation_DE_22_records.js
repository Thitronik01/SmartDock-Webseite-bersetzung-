/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "n51za9370t24cwv";
    record0.set("key", "page_title");
    record0.set("de", "Erkl\u00e4rung zur Barrierefreiheit");
    record0.set("page", "barrierefreiheit");
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
    record1.id = "94v4e55ztbpxmh3";
    record1.set("key", "page_subtitle");
    record1.set("de", "Informationen \u00fcber die Zug\u00e4nglichkeit dieser Website und unser Engagement f\u00fcr digitale Barrierefreiheit.");
    record1.set("page", "barrierefreiheit");
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
    record2.id = "332054jztoiw9wj";
    record2.set("key", "section_1_title");
    record2.set("de", "1. Einleitung");
    record2.set("page", "barrierefreiheit");
    record2.set("section", "introduction");
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
    record3.id = "d5djug256dlpe8v";
    record3.set("key", "section_1_content");
    record3.set("de", "Die Thitronik GmbH ist bem\u00fcht, ihre Website im Einklang mit dem Barrierefreiheitsst\u00e4rkungsgesetz (BFSG) sowie der Barrierefreiheitsst\u00e4rkungsverordnung (BFSGV) barrierefrei zug\u00e4nglich zu machen. Diese Erkl\u00e4rung zur Barrierefreiheit gilt f\u00fcr die Website www.smartdock.de.");
    record3.set("page", "barrierefreiheit");
    record3.set("section", "introduction");
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
    record4.id = "mfy85mw2jvudc0y";
    record4.set("key", "section_2_title");
    record4.set("de", "2. Stand der Vereinbarkeit mit den Anforderungen");
    record4.set("page", "barrierefreiheit");
    record4.set("section", "compliance_status");
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
    record5.id = "fqq80rps28edk5l";
    record5.set("key", "compliance_level");
    record5.set("de", "Teilweise vereinbar");
    record5.set("page", "barrierefreiheit");
    record5.set("section", "compliance_status");
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
    record6.id = "gvieg9v5py4v3qy";
    record6.set("key", "section_2_content");
    record6.set("de", "Diese Website ist wegen der folgenden Ausnahmen teilweise mit den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA und der Europ\u00e4ischen Norm EN 301 549 vereinbar.");
    record6.set("page", "barrierefreiheit");
    record6.set("section", "compliance_status");
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
    record7.id = "am5j9n49gyv1pd0";
    record7.set("key", "section_3_title");
    record7.set("de", "3. Nicht barrierefreie Inhalte");
    record7.set("page", "barrierefreiheit");
    record7.set("section", "non_accessible_content");
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
    record8.id = "v01tl1ob2gr90pq";
    record8.set("key", "section_3_intro");
    record8.set("de", "Die nachstehend aufgef\u00fchrten Inhalte sind aus den folgenden Gr\u00fcnden noch nicht vollst\u00e4ndig barrierefrei:");
    record8.set("page", "barrierefreiheit");
    record8.set("section", "non_accessible_content");
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
    record9.id = "6bmxg037huv8c95";
    record9.set("key", "forms_issue");
    record9.set("de", "Formulare: Einige Formulare enthalten m\u00f6glicherweise Eingabefelder, die f\u00fcr Screenreader-Nutzer nicht vollst\u00e4ndig oder unzureichend beschriftet sind.");
    record9.set("page", "barrierefreiheit");
    record9.set("section", "non_accessible_content");
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
    record10.id = "ky2w4vk5ji9fewi";
    record10.set("key", "images_issue");
    record10.set("de", "Bilder und Grafiken: Bei einigen Bildern oder Grafiken fehlen alternative Texte (Alt-Texte) oder diese sind nicht ausreichend aussagekr\u00e4ftig.");
    record10.set("page", "barrierefreiheit");
    record10.set("section", "non_accessible_content");
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
    record11.id = "xjwngg2dwtj6ggw";
    record11.set("key", "videos_issue");
    record11.set("de", "Videos: Eingebundene Videoinhalte verf\u00fcgen derzeit teilweise noch nicht \u00fcber durchgehende Untertitel oder Transkripte.");
    record11.set("page", "barrierefreiheit");
    record11.set("section", "non_accessible_content");
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
    record12.id = "jdm8jz9seq8cfx7";
    record12.set("key", "improvement_note");
    record12.set("de", "Wir arbeiten kontinuierlich an der Verbesserung unserer digitalen Angebote. Ein externes Audit zur Barrierefreiheit ist geplant, um die identifizierten M\u00e4ngel strukturiert zu beheben.");
    record12.set("page", "barrierefreiheit");
    record12.set("section", "non_accessible_content");
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
    record13.id = "ii12xe1x50vgbys";
    record13.set("key", "section_4_title");
    record13.set("de", "4. Erstellung dieser Erkl\u00e4rung zur Barrierefreiheit");
    record13.set("page", "barrierefreiheit");
    record13.set("section", "statement_creation");
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
    record14.id = "ohujvp59c5zaopp";
    record14.set("key", "creation_date");
    record14.set("de", "Diese Erkl\u00e4rung wurde am 9. Juli 2025 erstellt.");
    record14.set("page", "barrierefreiheit");
    record14.set("section", "statement_creation");
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
    record15.id = "nmxf6c4cez40scu";
    record15.set("key", "assessment_basis");
    record15.set("de", "Die Einsch\u00e4tzung basiert auf einer internen Selbstbewertung der Website und ihrer Funktionen.");
    record15.set("page", "barrierefreiheit");
    record15.set("section", "statement_creation");
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
    record16.id = "wseiw419b65xcex";
    record16.set("key", "section_5_title");
    record16.set("de", "5. Feedback und Kontaktangaben");
    record16.set("page", "barrierefreiheit");
    record16.set("section", "feedback_contact");
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
    record17.id = "al6wo8aud13hchd";
    record17.set("key", "section_5_content");
    record17.set("de", "Sind Ihnen M\u00e4ngel beim barrierefreien Zugang zu Inhalten von www.smartdock.de aufgefallen? Oder haben Sie Fragen zum Thema Barrierefreiheit? Dann k\u00f6nnen Sie sich gerne an uns wenden:");
    record17.set("page", "barrierefreiheit");
    record17.set("section", "feedback_contact");
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
    record18.id = "v0wiinoxgvrdzhe";
    record18.set("key", "section_6_title");
    record18.set("de", "6. Durchsetzungsverfahren");
    record18.set("page", "barrierefreiheit");
    record18.set("section", "enforcement");
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
    record19.id = "0p9a74nviibw396";
    record19.set("key", "section_6_content");
    record19.set("de", "Sollten Sie nach einer Kontaktaufnahme mit uns keine oder keine zufriedenstellende Antwort erhalten haben, k\u00f6nnen Sie sich an die Schlichtungsstelle nach dem Behindertengleichstellungsgesetz (BGG) bei der Bundesnetzagentur wenden. Die Schlichtungsstelle hat die Aufgabe, Konflikte zwischen Menschen mit Behinderungen und nicht-\u00f6ffentlichen Stellen (Unternehmen) au\u00dfergerichtlich beizulegen.");
    record19.set("page", "barrierefreiheit");
    record19.set("section", "enforcement");
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
    record20.id = "kqp2vi5pzrcxoax";
    record20.set("key", "mediation_office_title");
    record20.set("de", "Schlichtungsstelle gem\u00e4\u00df BFSG bei der Bundesnetzagentur");
    record20.set("page", "barrierefreiheit");
    record20.set("section", "enforcement");
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
    record21.id = "jla80z1e9hsa7sh";
    record21.set("key", "mediation_office_website");
    record21.set("de", "Website:");
    record21.set("page", "barrierefreiheit");
    record21.set("section", "enforcement");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["jla80z1e9hsa7sh", "kqp2vi5pzrcxoax", "0p9a74nviibw396", "v0wiinoxgvrdzhe", "al6wo8aud13hchd", "wseiw419b65xcex", "nmxf6c4cez40scu", "ohujvp59c5zaopp", "ii12xe1x50vgbys", "jdm8jz9seq8cfx7", "xjwngg2dwtj6ggw", "ky2w4vk5ji9fewi", "6bmxg037huv8c95", "v01tl1ob2gr90pq", "am5j9n49gyv1pd0", "gvieg9v5py4v3qy", "fqq80rps28edk5l", "mfy85mw2jvudc0y", "d5djug256dlpe8v", "332054jztoiw9wj", "94v4e55ztbpxmh3", "n51za9370t24cwv"];
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
