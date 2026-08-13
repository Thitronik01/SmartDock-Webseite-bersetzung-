/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("translation_EN");

  const record0 = new Record(collection);
    record0.id = "fwie8k5xwtzkw4g";
    record0.set("key", "agb_prices_heading");
    record0.set("en", "Prices and Payment Terms");
    record0.set("page", "agb");
    record0.set("section", "prices_payment");
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
    record1.id = "f03rv447jw68w6q";
    record1.set("key", "agb_prices_vat");
    record1.set("en", "All prices in our online store are total prices and include the statutory value-added tax.");
    record1.set("page", "agb");
    record1.set("section", "prices_payment");
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
    record2.id = "hztu5b2o5jxeit6";
    record2.set("key", "agb_prices_shipping");
    record2.set("en", "In addition to the product prices, shipping costs may apply, which we will clearly indicate before you complete your order.");
    record2.set("page", "agb");
    record2.set("section", "prices_payment");
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
    record3.id = "67ktrvznwlte480";
    record3.set("key", "agb_payment_methods");
    record3.set("en", "We accept the following payment methods: credit card, bank transfer, PayPal, and other payment methods displayed at checkout.");
    record3.set("page", "agb");
    record3.set("section", "prices_payment");
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
    record4.id = "zlzbljfwpqemagx";
    record4.set("key", "agb_payment_timing");
    record4.set("en", "Payment must be made before the goods are shipped, unless otherwise agreed.");
    record4.set("page", "agb");
    record4.set("section", "prices_payment");
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
  const seededRecordIds = ["zlzbljfwpqemagx", "67ktrvznwlte480", "hztu5b2o5jxeit6", "f03rv447jw68w6q", "fwie8k5xwtzkw4g"];
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
