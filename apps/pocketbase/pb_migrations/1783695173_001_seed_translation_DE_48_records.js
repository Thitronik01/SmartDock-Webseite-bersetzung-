/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_DE");

  const record0 = new Record(collection);
    record0.id = "ygigl89j12c16ez";
    record0.set("key", "page_title");
    record0.set("de", "Versand- und Zahlungsbedingungen");
    record0.set("page", "versandbedingungen");
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
    record1.id = "f7a3c4sazqbsyp4";
    record1.set("key", "page_subtitle");
    record1.set("de", "Transparente Informationen zu unseren Liefergebieten, Lieferfristen sowie Ihren Zahlungsm\u00f6glichkeiten.");
    record1.set("page", "versandbedingungen");
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
    record2.id = "fge2avghacujcd7";
    record2.set("key", "shipping_costs_title");
    record2.set("de", "Versandkosten");
    record2.set("page", "versandbedingungen");
    record2.set("section", "shipping_costs");
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
    record3.id = "84qlzjg8nx8v4fp";
    record3.set("key", "shipping_costs_free");
    record3.set("de", "Kostenlos");
    record3.set("page", "versandbedingungen");
    record3.set("section", "shipping_costs");
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
    record4.id = "ib69vyqvi9zujju";
    record4.set("key", "shipping_costs_description");
    record4.set("de", "Keine Versandkosten berechnet (inklusive gesetzliche Mehrwertsteuer).");
    record4.set("page", "versandbedingungen");
    record4.set("section", "shipping_costs");
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
    record5.id = "y5zfwoi4srcrdhv";
    record5.set("key", "delivery_areas_title");
    record5.set("de", "Liefergebiete");
    record5.set("page", "versandbedingungen");
    record5.set("section", "delivery_areas");
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
    record6.id = "ygborestdj3ehwz";
    record6.set("key", "delivery_areas_intro");
    record6.set("de", "Wir liefern aktuell nach Deutschland und in die folgenden L\u00e4nder der Europ\u00e4ischen Union:");
    record6.set("page", "versandbedingungen");
    record6.set("section", "delivery_areas");
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
    record7.id = "zeppjzszhho1cte";
    record7.set("key", "country_belgium");
    record7.set("de", "Belgien");
    record7.set("page", "versandbedingungen");
    record7.set("section", "delivery_areas");
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
    record8.id = "y5sndxw7ziu9r8b";
    record8.set("key", "country_bulgaria");
    record8.set("de", "Bulgarien");
    record8.set("page", "versandbedingungen");
    record8.set("section", "delivery_areas");
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
    record9.id = "nq9u9cpsfaqdken";
    record9.set("key", "country_denmark");
    record9.set("de", "D\u00e4nemark");
    record9.set("page", "versandbedingungen");
    record9.set("section", "delivery_areas");
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
    record10.id = "qf336hifyovz6sg";
    record10.set("key", "country_germany");
    record10.set("de", "Deutschland");
    record10.set("page", "versandbedingungen");
    record10.set("section", "delivery_areas");
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
    record11.id = "d6xw4gq50k1vbjq";
    record11.set("key", "country_estonia");
    record11.set("de", "Estland");
    record11.set("page", "versandbedingungen");
    record11.set("section", "delivery_areas");
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
    record12.id = "07ha3zfdqiemz04";
    record12.set("key", "country_finland");
    record12.set("de", "Finnland");
    record12.set("page", "versandbedingungen");
    record12.set("section", "delivery_areas");
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
    record13.id = "7301zh8osrfy1wq";
    record13.set("key", "country_france");
    record13.set("de", "Frankreich");
    record13.set("page", "versandbedingungen");
    record13.set("section", "delivery_areas");
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
    record14.id = "uinku8f5ig22aur";
    record14.set("key", "country_greece");
    record14.set("de", "Griechenland");
    record14.set("page", "versandbedingungen");
    record14.set("section", "delivery_areas");
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
    record15.id = "okgwjw7uui4qhd6";
    record15.set("key", "country_ireland");
    record15.set("de", "Irland");
    record15.set("page", "versandbedingungen");
    record15.set("section", "delivery_areas");
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
    record16.id = "0io82hc7a818k5r";
    record16.set("key", "country_italy");
    record16.set("de", "Italien");
    record16.set("page", "versandbedingungen");
    record16.set("section", "delivery_areas");
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
    record17.id = "uumz1xocooxyr9u";
    record17.set("key", "country_croatia");
    record17.set("de", "Kroatien");
    record17.set("page", "versandbedingungen");
    record17.set("section", "delivery_areas");
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
    record18.id = "95nwve52eiet2m5";
    record18.set("key", "country_latvia");
    record18.set("de", "Lettland");
    record18.set("page", "versandbedingungen");
    record18.set("section", "delivery_areas");
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
    record19.id = "idbh34s9j35bmbr";
    record19.set("key", "country_lithuania");
    record19.set("de", "Litauen");
    record19.set("page", "versandbedingungen");
    record19.set("section", "delivery_areas");
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
    record20.id = "4aagwjpla2e6c9x";
    record20.set("key", "country_luxembourg");
    record20.set("de", "Luxemburg");
    record20.set("page", "versandbedingungen");
    record20.set("section", "delivery_areas");
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
    record21.id = "lbdafw2n0ot5r5u";
    record21.set("key", "country_malta");
    record21.set("de", "Malta");
    record21.set("page", "versandbedingungen");
    record21.set("section", "delivery_areas");
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
    record22.id = "39nc63q3tmslvaq";
    record22.set("key", "country_netherlands");
    record22.set("de", "Niederlande");
    record22.set("page", "versandbedingungen");
    record22.set("section", "delivery_areas");
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
    record23.id = "0kwzxcebi7z3uv3";
    record23.set("key", "country_austria");
    record23.set("de", "\u00d6sterreich");
    record23.set("page", "versandbedingungen");
    record23.set("section", "delivery_areas");
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
    record24.id = "1phpgc07if9npm4";
    record24.set("key", "country_poland");
    record24.set("de", "Polen");
    record24.set("page", "versandbedingungen");
    record24.set("section", "delivery_areas");
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
    record25.id = "4250l8p4qr7wskk";
    record25.set("key", "country_portugal");
    record25.set("de", "Portugal");
    record25.set("page", "versandbedingungen");
    record25.set("section", "delivery_areas");
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
    record26.id = "r5cixp5a4fezkek";
    record26.set("key", "country_romania");
    record26.set("de", "Rum\u00e4nien");
    record26.set("page", "versandbedingungen");
    record26.set("section", "delivery_areas");
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
    record27.id = "feecpob911qrtze";
    record27.set("key", "country_sweden");
    record27.set("de", "Schweden");
    record27.set("page", "versandbedingungen");
    record27.set("section", "delivery_areas");
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
    record28.id = "g7qdom9tg2337df";
    record28.set("key", "country_slovakia");
    record28.set("de", "Slowakei");
    record28.set("page", "versandbedingungen");
    record28.set("section", "delivery_areas");
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
    record29.id = "a0h0bacv783hrx5";
    record29.set("key", "country_slovenia");
    record29.set("de", "Slowenien");
    record29.set("page", "versandbedingungen");
    record29.set("section", "delivery_areas");
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
    record30.id = "h26mhlxfq5892d8";
    record30.set("key", "country_spain");
    record30.set("de", "Spanien");
    record30.set("page", "versandbedingungen");
    record30.set("section", "delivery_areas");
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
    record31.id = "hkhupazej76s2mm";
    record31.set("key", "country_czechia");
    record31.set("de", "Tschechien");
    record31.set("page", "versandbedingungen");
    record31.set("section", "delivery_areas");
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
    record32.id = "u7pzaz80n2ydde0";
    record32.set("key", "country_hungary");
    record32.set("de", "Ungarn");
    record32.set("page", "versandbedingungen");
    record32.set("section", "delivery_areas");
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
    record33.id = "7vkmp1h7m06he0f";
    record33.set("key", "country_cyprus");
    record33.set("de", "Zypern");
    record33.set("page", "versandbedingungen");
    record33.set("section", "delivery_areas");
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
    record34.id = "bzbufcsdaxvtgne";
    record34.set("key", "delivery_times_title");
    record34.set("de", "Lieferfristen");
    record34.set("page", "versandbedingungen");
    record34.set("section", "delivery_times");
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
    record35.id = "k63hqk8hq3ydsk0";
    record35.set("key", "delivery_times_regular");
    record35.set("de", "Regul\u00e4re Lieferzeiten");
    record35.set("page", "versandbedingungen");
    record35.set("section", "delivery_times");
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
    record36.id = "pef6rl1tfim7pzm";
    record36.set("key", "delivery_times_domestic");
    record36.set("de", "Inland (Deutschland): 3 - 5 Tage nach Vertragsschluss.");
    record36.set("page", "versandbedingungen");
    record36.set("section", "delivery_times");
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
    record37.id = "953hxj61g4iotup";
    record37.set("key", "delivery_times_international");
    record37.set("de", "Ausland: 5 - 7 Tage nach Vertragsschluss.");
    record37.set("page", "versandbedingungen");
    record37.set("section", "delivery_times");
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
    record38.id = "p8gftxlfuegn5jf";
    record38.set("key", "delivery_times_prepayment");
    record38.set("de", "Bei vereinbarter Vorauszahlung beginnt die Frist nach dem Zeitpunkt Ihrer Zahlungsanweisung.");
    record38.set("page", "versandbedingungen");
    record38.set("section", "delivery_times");
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
    record39.id = "xm7b4v2igi5mhuv";
    record39.set("key", "delivery_notes_title");
    record39.set("de", "Wichtige Hinweise zur Zustellung");
    record39.set("page", "versandbedingungen");
    record39.set("section", "delivery_notes");
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
    record40.id = "5p6ilqe2g0s2tdm";
    record40.set("key", "delivery_notes_content");
    record40.set("de", "Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt. Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben. In diesem Fall bestimmt sich die Lieferzeit nach dem Artikel mit der l\u00e4ngsten Lieferzeit, den Sie bestellt haben.");
    record40.set("page", "versandbedingungen");
    record40.set("section", "delivery_notes");
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
    record41.id = "d45xu2uxzqrqi69";
    record41.set("key", "payment_methods_title");
    record41.set("de", "Akzeptierte Zahlungsm\u00f6glichkeiten");
    record41.set("page", "versandbedingungen");
    record41.set("section", "payment_methods");
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
    record42.id = "xrlj7bd7jyzkquw";
    record42.set("key", "payment_method_prepayment");
    record42.set("de", "Vorkasse per \u00dcberweisung");
    record42.set("page", "versandbedingungen");
    record42.set("section", "payment_methods");
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
    record43.id = "vh026uknv9w502e";
    record43.set("key", "payment_method_invoice");
    record43.set("de", "Zahlung per Rechnung");
    record43.set("page", "versandbedingungen");
    record43.set("section", "payment_methods");
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
    record44.id = "eims5xujl9albnz";
    record44.set("key", "payment_method_paypal");
    record44.set("de", "PayPal");
    record44.set("page", "versandbedingungen");
    record44.set("section", "payment_methods");
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
    record45.id = "zvr7h689yno5kq4";
    record45.set("key", "payment_details_title");
    record45.set("de", "Weitere Einzelheiten zur Zahlung");
    record45.set("page", "versandbedingungen");
    record45.set("section", "payment_details");
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
    record46.id = "dxt9nrdhc05790l";
    record46.set("key", "payment_details_invoice_term");
    record46.set("de", "Der Rechnungsbetrag ist bei Zahlung auf Rechnung innerhalb von 14 Tagen auszugleichen.");
    record46.set("page", "versandbedingungen");
    record46.set("section", "payment_details");
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
    record47.id = "87olsz9daekn8mp";
    record47.set("key", "payment_details_contact");
    record47.set("de", "Bei Fragen finden Sie unsere Kontaktdaten im Impressum.");
    record47.set("page", "versandbedingungen");
    record47.set("section", "payment_details");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["87olsz9daekn8mp", "dxt9nrdhc05790l", "zvr7h689yno5kq4", "eims5xujl9albnz", "vh026uknv9w502e", "xrlj7bd7jyzkquw", "d45xu2uxzqrqi69", "5p6ilqe2g0s2tdm", "xm7b4v2igi5mhuv", "p8gftxlfuegn5jf", "953hxj61g4iotup", "pef6rl1tfim7pzm", "k63hqk8hq3ydsk0", "bzbufcsdaxvtgne", "7vkmp1h7m06he0f", "u7pzaz80n2ydde0", "hkhupazej76s2mm", "h26mhlxfq5892d8", "a0h0bacv783hrx5", "g7qdom9tg2337df", "feecpob911qrtze", "r5cixp5a4fezkek", "4250l8p4qr7wskk", "1phpgc07if9npm4", "0kwzxcebi7z3uv3", "39nc63q3tmslvaq", "lbdafw2n0ot5r5u", "4aagwjpla2e6c9x", "idbh34s9j35bmbr", "95nwve52eiet2m5", "uumz1xocooxyr9u", "0io82hc7a818k5r", "okgwjw7uui4qhd6", "uinku8f5ig22aur", "7301zh8osrfy1wq", "07ha3zfdqiemz04", "d6xw4gq50k1vbjq", "qf336hifyovz6sg", "nq9u9cpsfaqdken", "y5sndxw7ziu9r8b", "zeppjzszhho1cte", "ygborestdj3ehwz", "y5zfwoi4srcrdhv", "ib69vyqvi9zujju", "84qlzjg8nx8v4fp", "fge2avghacujcd7", "f7a3c4sazqbsyp4", "ygigl89j12c16ez"];
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
