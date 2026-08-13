/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "8b3l6abbw3vk9g3";
    record0.set("titel", "Quick TCD");
    record0.set("kategorie", "TCU");
    record0.set("beschreibung", "1\nInstallation vorbereiten\nUnterbrich die Stromversorgung der Strahlruder.\n\n2\nStecker der Strahlruder freilegen\nLege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.\n\n3\nStecker trennen\nL\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.\n\n4\nTCU dazwischenklemmen\nSchlie\u00dfe jetzt deine TCU mithilfe des mitgeliefertenKabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.\n\nAchtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.\n\n5\nApp installieren\nLade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.\n\n6\nKopplungsmodus der TCU starten\nStelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet.\n\nHINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).\n\n7\nApp mit TCU koppeln\nTippe jetzt in der App auf die Schaltfl\u00e4che \"Starten\", um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen.\n\nDeine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record0.set("aktiv", true);
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
    record1.id = "8rpljjxzscyx2na";
    record1.set("titel", "Vetus");
    record1.set("kategorie", "TCU");
    record1.set("beschreibung", "1\nInstallation vorbereiten\nUnterbrich die Stromversorgung der Strahlruder.\n\n2\nStecker der Strahlruder freilegen\nLege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.\n\n3\nStecker trennen\nL\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.\n\n4\nTCU dazwischenklemmen\nSchlie\u00dfe jetzt deine TCU mithilfe des mitgeliefertenKabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.\n\nAchtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.\n\n5\nApp installieren\nLade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.\n\n6\nKopplungsmodus der TCU starten\nStelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet.\n\nHINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).\n\n7\nApp mit TCU koppeln\nTippe jetzt in der App auf die Schaltfl\u00e4che \"Starten\", um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen.\n\nDeine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record1.set("aktiv", true);
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
    record2.id = "bbpodmb54cr0389";
    record2.set("titel", "Sleipner Side Power");
    record2.set("kategorie", "TCU");
    record2.set("beschreibung", "1\nInstallation vorbereiten\nUnterbrich die Stromversorgung der Strahlruder.\n\n2\nStecker der Strahlruder freilegen\nLege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.\n\n3\nStecker trennen\nL\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.\n\n4\nTCU dazwischenklemmen\nSchlie\u00dfe jetzt deine TCU mithilfe des mitgeliefertenKabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.\n\nAchtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.\n\n5\nApp installieren\nLade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.\n\n6\nKopplungsmodus der TCU starten\nStelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet.\n\nHINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).\n\n7\nApp mit TCU koppeln\nTippe jetzt in der App auf die Schaltfl\u00e4che \"Starten\", um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen.\n\nDeine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record2.set("aktiv", true);
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
    record3.id = "1idwj3y1f8ayh6i";
    record3.set("titel", "Universell");
    record3.set("kategorie", "TCU");
    record3.set("beschreibung", "1\nInstallation vorbereiten\nUnterbrich die Stromversorgung der Strahlruder.\n\n2\nStecker der Strahlruder freilegen\nLege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der N\u00e4he des Bedienpanels f\u00fcr die Strahlruder.\n\n3\nStecker trennen\nL\u00f6se die Stecker f\u00fcr Bug- und/oder Hecksteuerung.\n\n4\nTCU dazwischenklemmen\nSchlie\u00dfe jetzt deine TCU mithilfe des mitgeliefertenKabelbaums an. Achte darauf, dass die Stecker ordnungsgem\u00e4\u00df verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausf\u00fchrlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.\n\nAchtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.\n\n5\nApp installieren\nLade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfl\u00e4che zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.\n\n6\nKopplungsmodus der TCU starten\nStelle die Spannungsversorgung \u00fcber den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet.\n\nHINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Ger\u00e4t so lange dr\u00fcckst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).\n\n7\nApp mit TCU koppeln\nTippe jetzt in der App auf die Schaltfl\u00e4che \"Starten\", um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Ger\u00e4te erkannt hat, erh\u00e4ltst du ein Tutorial und wirst durch die Einrichtung gef\u00fchrt, um die Feineinstellungen vorzunehmen.\n\nDeine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.");
    record3.set("aktiv", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["1idwj3y1f8ayh6i", "bbpodmb54cr0389", "8rpljjxzscyx2na", "8b3l6abbw3vk9g3"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("anleitungen", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
