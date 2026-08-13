/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "73soc1neh8ph9ry";
    record0.set("key", "agb_6_title");
    record0.set("en", "Conclusion of a Contract");
    record0.set("page", "agb");
    record0.set("section", "contract_conclusion");
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
    record1.id = "c351hq5tvfy1ms5";
    record1.set("key", "agb_6_text_1");
    record1.set("en", "The presentation of our products in our online store does not constitute a legally binding offer, but rather an invitation to submit an offer.");
    record1.set("page", "agb");
    record1.set("section", "contract_conclusion");
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
    record2.id = "vyxynbs88br1yef";
    record2.set("key", "agb_6_text_2");
    record2.set("en", "By placing an order, you are making a binding offer to enter into a sales contract.");
    record2.set("page", "agb");
    record2.set("section", "contract_conclusion");
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
    record3.id = "mhk2g0yiy7f2xja";
    record3.set("key", "agb_6_text_3");
    record3.set("en", "We will confirm receipt of your order via an automated email. This confirmation does not constitute acceptance of your order.");
    record3.set("page", "agb");
    record3.set("section", "contract_conclusion");
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
    record4.id = "1ht4le3s04igke0";
    record4.set("key", "agb_6_text_4");
    record4.set("en", "The sales contract is not concluded until we have accepted your order by sending a separate confirmation notice.");
    record4.set("page", "agb");
    record4.set("section", "contract_conclusion");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["1ht4le3s04igke0", "mhk2g0yiy7f2xja", "vyxynbs88br1yef", "c351hq5tvfy1ms5", "73soc1neh8ph9ry"];
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
