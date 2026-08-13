/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    let dealer;
    try {
      dealer = app.findFirstRecordByFilter(
        "dealers",
        "name = 'NAGHJ Yachting, Generalimporteur Schweiz'",
      );
    } catch (e) {
      if (e.message && e.message.includes("no rows in result set")) {
        try {
          dealer = app.findFirstRecordByFilter(
            "dealers",
            "name ~ 'NAGHJ' || name ~ 'NAGY'",
          );
        } catch (e2) {
          if (e2.message && e2.message.includes("no rows in result set")) {
            console.log(
              "Dealer 'NAGHJ Yachting, Generalimporteur Schweiz' not found, skipping",
            );
            return;
          }
          throw e2;
        }
      } else {
        throw e;
      }
    }
    if (!dealer) {
      console.log(
        "Dealer 'NAGHJ Yachting, Generalimporteur Schweiz' not found, skipping",
      );
      return;
    }

    dealer.set("name", "NAGY Yachting");
    dealer.set("name_de", "NAGY Yachting, Hauptimporteur: Schweiz");
    dealer.set("name_en", "NAGY Yachting, Main importer: Switzerland");
    dealer.set("name_fr", "NAGY Yachting, Principal importateur : la Suisse");

    app.save(dealer);
  },
  (app) => {
    let dealer;
    try {
      dealer = app.findFirstRecordByFilter("dealers", "name = 'NAGY Yachting'");
    } catch (e) {
      if (e.message && e.message.includes("no rows in result set")) {
        console.log("Dealer 'NAGY Yachting' not found, skipping revert");
        return;
      }
      throw e;
    }
    if (!dealer) return;

    dealer.set("name", "NAGHJ Yachting, Generalimporteur Schweiz");
    dealer.set("name_de", "");
    dealer.set("name_en", "");
    dealer.set("name_fr", "");

    app.save(dealer);
  },
);
