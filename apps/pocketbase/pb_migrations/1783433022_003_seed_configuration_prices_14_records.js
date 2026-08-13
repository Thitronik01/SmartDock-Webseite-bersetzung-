/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("configuration_prices");

  const record0 = new Record(collection);
    record0.id = "snwevel1npdq38w";
    record0.set("optionName", "ECU");
    record0.set("optionValue", "ECU-P");
    record0.set("price", 500);
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
    record1.id = "y18a6em701nhv6s";
    record1.set("optionName", "Motor-Typ");
    record1.set("optionValue", "Diesel");
    record1.set("price", 1200);
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
    record2.id = "40fl3ntiwpxtyf6";
    record2.set("optionName", "Motor-Anzahl");
    record2.set("optionValue", "2x");
    record2.set("price", 0);
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
    record3.id = "hiy91gkqj5g3ute";
    record3.set("optionName", "Joystick-Typ");
    record3.set("optionValue", "Premium");
    record3.set("price", 300);
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
    record4.id = "tnr01z87bgiwqs2";
    record4.set("optionName", "TCU");
    record4.set("optionValue", "Ja");
    record4.set("price", 800);
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
    record5.id = "rb61ho0n04urrrp";
    record5.set("optionName", "Bugstrahlruder");
    record5.set("optionValue", "Ja");
    record5.set("price", 2500);
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
    record6.id = "bmxxubeh8zjmfxy";
    record6.set("optionName", "Heckstrahlruder");
    record6.set("optionValue", "Ja");
    record6.set("price", 2500);
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
    record7.id = "nxj86qg36np4m6x";
    record7.set("optionName", "ACU");
    record7.set("optionValue", "Ja");
    record7.set("price", 600);
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
    record8.id = "i52owx1p668rmqi";
    record8.set("optionName", "Ankerwinde 1");
    record8.set("optionValue", "Ja");
    record8.set("price", 1800);
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
    record9.id = "x6z3qc5lff23opw";
    record9.set("optionName", "Ankerwinde 2");
    record9.set("optionValue", "Ja");
    record9.set("price", 1800);
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
    record10.id = "g2xr892fmlyumrk";
    record10.set("optionName", "WCU");
    record10.set("optionValue", "Ja");
    record10.set("price", 400);
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
    record11.id = "4ih1i4do5t7jt1o";
    record11.set("optionName", "Ankerwinch 1");
    record11.set("optionValue", "Ja");
    record11.set("price", 1200);
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
    record12.id = "zbj8k0y8q6fuqe2";
    record12.set("optionName", "Ankerwinch 2");
    record12.set("optionValue", "Ja");
    record12.set("price", 1200);
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
    record13.id = "gijbnk8s3m1lo34";
    record13.set("optionName", "Horn");
    record13.set("optionValue", "Ja");
    record13.set("price", 150);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["gijbnk8s3m1lo34", "zbj8k0y8q6fuqe2", "4ih1i4do5t7jt1o", "g2xr892fmlyumrk", "x6z3qc5lff23opw", "i52owx1p668rmqi", "nxj86qg36np4m6x", "bmxxubeh8zjmfxy", "rb61ho0n04urrrp", "tnr01z87bgiwqs2", "hiy91gkqj5g3ute", "40fl3ntiwpxtyf6", "y18a6em701nhv6s", "snwevel1npdq38w"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("configuration_prices", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
