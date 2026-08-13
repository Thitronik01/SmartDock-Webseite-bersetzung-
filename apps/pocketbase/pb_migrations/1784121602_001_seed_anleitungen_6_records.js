/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");

  const record0 = new Record(collection);
    record0.id = "sb4ignqbrj4zk91";
    record0.set("titel", "Installation von SMARTDOCK f\u00fcr Yamaha-Antriebe mit Joystick");
    record0.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die Joystick-Anschl\u00fcsse am Yamaha-Antrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Joystick-Funktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record0.set("kategorie", "ECU");
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
    record1.id = "uh2zdi9xujtoypr";
    record1.set("titel", "Installation von SMARTDOCK f\u00fcr Mercury/Mercruiser-Antriebe mit Joystick");
    record1.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die Joystick-Anschl\u00fcsse am Mercury/Mercruiser-Antrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Joystick-Funktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record1.set("kategorie", "ECU");
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
    record2.id = "q2ge73ixfxtbu34";
    record2.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0");
    record2.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die EVC-Anschl\u00fcsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan f\u00fcr EVC -D/-E/2.0\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Steuerfunktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record2.set("kategorie", "ECU");
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
    record3.id = "3qc05isifump68z";
    record3.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0");
    record3.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die Joystick- und EVC-Anschl\u00fcsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan f\u00fcr EVC -C/-D/-E/2.0\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Joystick- und Steuerfunktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record3.set("kategorie", "ECU");
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

  const record4 = new Record(collection);
    record4.id = "duy56ygp5y1swr5";
    record4.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C");
    record4.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die Joystick- und EVC-Anschl\u00fcsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan f\u00fcr EVC -B/-C\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Joystick- und Steuerfunktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record4.set("kategorie", "ECU");
    record4.set("aktiv", true);
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
    record5.id = "ocycgzbxne83i46";
    record5.set("titel", "Installation von SMARTDOCK f\u00fcr Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)");
    record5.set("beschreibung", "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgek\u00fchlt hat\n- Tragen Sie geeignete Schutzausr\u00fcstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut bel\u00fcfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- \u00dcberpr\u00fcfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Besch\u00e4digungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- Identifizieren Sie die EVC-Anschl\u00fcsse am Volvo Penta-Einzelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gem\u00e4\u00df dem Schaltplan f\u00fcr EVC -D/-E\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Geh\u00e4use an einem gesch\u00fctzten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Geh\u00e4use vor Wasser und Spritzwasser gesch\u00fctzt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- \u00d6ffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Ger\u00e4t in der App\n- Koppeln Sie das Ger\u00e4t durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und f\u00fchren Sie einen Funktionstest durch\n- \u00dcberpr\u00fcfen Sie alle Steuerfunktionen \u00fcber die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- \u00dcberpr\u00fcfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung f\u00fcr zuk\u00fcnftige Referenz auf\n- Registrieren Sie Ihr Ger\u00e4t auf der SMARTDOCK-Website f\u00fcr Support");
    record5.set("kategorie", "ECU");
    record5.set("aktiv", true);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["ocycgzbxne83i46", "duy56ygp5y1swr5", "3qc05isifump68z", "q2ge73ixfxtbu34", "uh2zdi9xujtoypr", "sb4ignqbrj4zk91"];
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
