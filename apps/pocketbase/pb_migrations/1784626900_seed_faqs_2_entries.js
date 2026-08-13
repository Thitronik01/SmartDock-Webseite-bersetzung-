/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("faqs");

    const entries = [
      {
        answer_de:
          "Nein, du kannst dein Boot auch mit einem nassen/feuchten Display zuverlässig steuern.",
        answer_en:
          "No, you can still steer your boat reliably even if the display is wet or damp.",
        answer_fr:
          "Non, tu peux tout à fait piloter ton bateau de manière fiable même si l'écran est mouillé ou humide.",
        order: 2,
        question_de:
          "Gibt es Probleme, wenn das Display meines Smartphones feucht/nass wird?",
        question_en:
          "Are there problems if my smartphone display gets wet/damp?",
        question_fr:
          "Y a-t-il des problèmes si l'écran de mon smartphone est humide ou mouillé ?",
      },
      {
        answer_de:
          "Die SMARTDOCK Produkte nutzen Bluetooth Low Energy 5.0 und erreichen eine Reichweite von ca. 50 Metern.",
        answer_en:
          "SMARTDOCK products use Bluetooth Low Energy 5.0 and have a range of approximately 50 metres.",
        answer_fr:
          "Les produits SMARTDOCK utilisent la technologie Bluetooth Low Energy 5.0 et offrent une portée d'environ 50 mètres.",
        order: 1,
        question_de:
          "Welche BLUETOOTH-Reichweite haben die SMARTDOCK Produkte?",
        question_en: "What BLUETOOTH range do SMARTDOCK products have?",
        question_fr: "Quelle est la portée Bluetooth des produits SMARTDOCK ?",
      },
    ];

    for (const entry of entries) {
      const record = new Record(collection);
      record.set("question_de", entry.question_de);
      record.set("answer_de", entry.answer_de);
      record.set("question_en", entry.question_en);
      record.set("answer_en", entry.answer_en);
      record.set("question_fr", entry.question_fr);
      record.set("answer_fr", entry.answer_fr);
      record.set("order", entry.order);
      app.save(record);
    }
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("faqs");
    const questions = [
      "Gibt es Probleme, wenn das Display meines Smartphones feucht/nass wird?",
      "Welche BLUETOOTH-Reichweite haben die SMARTDOCK Produkte?",
    ];
    for (const q of questions) {
      const record = app.findFirstRecordByFilter(
        collection,
        "question_de = {:q}",
        { q },
      );
      if (record) {
        app.delete(record);
      }
    }
  },
);
