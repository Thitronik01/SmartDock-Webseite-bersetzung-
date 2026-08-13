/// <reference path="../pb_data/types.d.ts" />

const UNIVERSAL_DESC = "1\nInstallation vorbereiten\nUnterbrich die Stromversorgung der Strahlruder.\n\n2\nStecker der Strahlruder freilegen\nLege die Stecker der Strahlruder frei. Diese befinden sich meistens im Steuerstand in der Nähe des Bedienpanels für die Strahlruder.\n\n3\nStecker trennen\nLöse die Stecker für Bug- und/oder Hecksteuerung.\n\n4\nTCU dazwischenklemmen\nSchließe jetzt deine TCU mithilfe des mitgeliefertenKabelbaums an. Achte darauf, dass die Stecker ordnungsgemäß verbunden sind und fest sitzen. Details zu den Steckverbindungen und ausführlichere Informationen zum Anschluss findest du in der jeweiligen PDF-Anleitung zu deinem Bootsantrieb.\n\nAchtung: Wenn dein Boot mit Bug- und Heckstrahlruder ausgestattet ist, stelle sicher, dass die Heck- und Bugsteuerungen jeweils korrekt verbunden sind.\n\n5\nApp installieren\nLade jetzt die SMARTDOCK App im Google Play Store oder im App Store herunter. Beim Start der App wird eine Schaltfläche zur automatischen Einrichtung eingeblendet. Tippe an dieser Stelle noch nicht darauf.\n\n6\nKopplungsmodus der TCU starten\nStelle die Spannungsversorgung über den Hauptschalter wieder her. Solange kein Handy mit der TCU gekoppelt ist, startet der Kopplungsmodus automatisch. Dies erkennst du daran, dass die LED dauerhaft leuchtet.\n\nHINWEIS: Um die TCU mit einem weiteren Handy zu koppeln, rufst du den Kopplungsmodus der TCU manuell auf, indem du den Taster am Gerät so lange drückst, bis die LED der TCU dauerhaft leuchtet (Kopplungsmodus aktiv).\n\n7\nApp mit TCU koppeln\nTippe jetzt in der App auf die Schaltfläche \"Starten\", um mit der automatischen Einrichtung zu beginnen. Nachdem die App deine Geräte erkannt hat, erhältst du ein Tutorial und wirst durch die Einrichtung geführt, um die Feineinstellungen vorzunehmen.\n\nDeine App ist jetzt gekoppelt und einsatzbereit. Nutze gerne auch den Demo-Modus, um dich mit den Steuerelementen vertraut zu machen.";

const ECU_STEPS = (drivePart) => "SCHRITT 1: Sicherheitshinweise\n- Stellen Sie sicher, dass der Motor ausgeschaltet ist und sich abgekühlt hat\n- Tragen Sie geeignete Schutzausrüstung (Handschuhe, Schutzbrille)\n- Arbeiten Sie in einer gut belüfteten Umgebung\n- Lesen Sie alle Anweisungen vor Beginn durch\n\nSCHRITT 2: Vorbereitung\n- Sammeln Sie alle erforderlichen Werkzeuge und Materialien\n- Überprüfen Sie, dass alle Komponenten des SMARTDOCK-Systems vorhanden sind\n- Inspizieren Sie die Komponenten auf Beschädigungen\n\nSCHRITT 3: Elektrische Verbindungen\n- Trennen Sie die Batterie vom Motor\n- " + drivePart + "\n- Sichern Sie alle Kabelverbindungen mit Kabelbindern\n\nSCHRITT 4: Mechanische Installation\n- Montieren Sie das SMARTDOCK-Gehäuse an einem geschützten Ort\n- Verwenden Sie die mitgelieferten Befestigungsmaterialien\n- Stellen Sie sicher, dass das Gehäuse vor Wasser und Spritzwasser geschützt ist\n\nSCHRITT 5: App-Installation und Kopplung\n- Laden Sie die SMARTDOCK-App aus dem App Store oder Google Play Store herunter\n- Öffnen Sie die App und folgen Sie dem Einrichtungsassistenten\n- Aktivieren Sie Bluetooth auf Ihrem Smartphone\n- Suchen Sie nach dem SMARTDOCK-Gerät in der App\n- Koppeln Sie das Gerät durch Eingabe des Pairing-Codes (siehe Produktetikett)\n\nSCHRITT 6: Kalibrierung und Tests\n- Verbinden Sie die Batterie wieder mit dem Motor\n- Starten Sie den Motor und führen Sie einen Funktionstest durch\n- Überprüfen Sie alle Joystick- und Steuerfunktionen über die App\n- Kalibrieren Sie die Steuerung nach Bedarf\n\nSCHRITT 7: Abschluss und Dokumentation\n- Überprüfen Sie alle Verbindungen ein letztes Mal\n- Dokumentieren Sie die Installation mit Fotos\n- Bewahren Sie diese Anleitung für zukünftige Referenz auf\n- Registrieren Sie Ihr Gerät auf der SMARTDOCK-Website für Support";

const RECORDS = [
  {
    id: "cubhmop1nuyi97g",
    titel: "Universell",
    titel_en: "Universal",
    kategorie: "TCU",
    beschreibung: UNIVERSAL_DESC,
    pdf: null,
  },
  {
    id: "obtksgzjjfq8mbm",
    titel: "Quick TCD",
    titel_en: "Quick TCD",
    kategorie: "TCU",
    beschreibung: UNIVERSAL_DESC,
    pdf: { file: "obtksgzjjfq8mbm.pdf", name: "tcu_quick_tcd_ysbvgm55g3_f545zsm5wz.pdf" },
  },
  {
    id: "pk00u661igizrps",
    titel: "Vetus",
    titel_en: "Vetus",
    kategorie: "TCU",
    beschreibung: UNIVERSAL_DESC,
    pdf: { file: "pk00u661igizrps.pdf", name: "tcu_vetus_d8bpgg8954_y29yuaw6wn.pdf" },
  },
  {
    id: "vg464iaea8uznhd",
    titel: "Sleipner Side Power",
    titel_en: "Sleipner Side Power",
    kategorie: "TCU",
    beschreibung: UNIVERSAL_DESC,
    pdf: { file: "vg464iaea8uznhd.pdf", name: "tcu_sleipner_side_power_awa9puq37o_rsljz248h2.pdf" },
  },
  {
    id: "337cp1alrjwrnt0",
    titel: "Installation von SMARTDOCK für Yamaha-Antriebe mit Joystick",
    titel_en: "Installation of SMARTDOCK for Yamaha drives with a joystick",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die Joystick-Anschlüsse am Yamaha-Antrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan"),
    pdf: { file: "337cp1alrjwrnt0.pdf", name: "ecu_yamaha_mumv59rqo2_ty7c25nho2.pdf" },
  },
  {
    id: "5fbj0zzxxjnxvkq",
    titel: "Installation von SMARTDOCK für Mercury/Mercruiser-Antriebe mit Joystick",
    titel_en: "Installation of SMARTDOCK for Mercury/Mercruiser engines with a joystick",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die Joystick-Anschlüsse am Mercury/Mercruiser-Antrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan"),
    pdf: { file: "5fbj0zzxxjnxvkq.pdf", name: "ecu_mercury_mercruiser_wegpk68d8l_epy83fu2k0.pdf" },
  },
  {
    id: "6jyst7hobko7fs2",
    titel: "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0",
    titel_en: "Installation of SMARTDOCK for Volvo Penta twin-drive systems without a joystick (EVC -D/-E/2.0)",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die EVC-Anschlüsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan für EVC -D/-E/2.0"),
    pdf: { file: "6jyst7hobko7fs2.pdf", name: "ecu_volvo_penta_dual_drive_evc_d_e_2_18dsrgchv2_ibrk882ur9.0.pdf" },
  },
  {
    id: "dql8d8pt3achiap",
    titel: "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0",
    titel_en: "Installation of SMARTDOCK for Volvo Penta twin-engine systems with EVC -C/-D/-E/2.0 joystick",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die Joystick- und EVC-Anschlüsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan für EVC -C/-D/-E/2.0"),
    pdf: { file: "dql8d8pt3achiap.pdf", name: "ecu_volvo_penta_dual_drive_joystick_evc_c_d_e_2_fpic92vf2t_qk2t28oknu.0.pdf" },
  },
  {
    id: "fer7cp5fbf9ocq9",
    titel: "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C",
    titel_en: "Installation of SMARTDOCK for Volvo Penta twin-engine systems with EVC-B/-C joystick ",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die Joystick- und EVC-Anschlüsse am Volvo Penta-Doppelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan für EVC -B/-C"),
    pdf: { file: "fer7cp5fbf9ocq9.pdf", name: "ecu_volvo_penta_dual_drive_joystick_evc_b_c_9qkapkclq8_0rcszrstva.pdf" },
  },
  {
    id: "nzdk8g7p2xu4jxi",
    titel: "Installation von SMARTDOCK für Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)",
    titel_en: "Installation of SMARTDOCK for Volvo Penta single-drive systems (EVC-D/-E)",
    kategorie: "ECU",
    beschreibung: ECU_STEPS("Identifizieren Sie die EVC-Anschlüsse am Volvo Penta-Einzelantrieb\n- Verbinden Sie das SMARTDOCK-Steuermodul gemäß dem Schaltplan für EVC -D/-E"),
    pdf: { file: "nzdk8g7p2xu4jxi.pdf", name: "ecu_volvo_penta_single_drive_evc_d_e_fo0qyng1bq_gnb42mmj7t.pdf" },
  },
];

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("anleitungen");

    const candidates = [
      "pb_migrations/anleitungen_pdfs",
      "apps/pocketbase/pb_migrations/anleitungen_pdfs",
      "./pb_migrations/anleitungen_pdfs",
    ];
    let pdfDir = candidates[0];
    for (const c of candidates) {
      try {
        $os.stat(c + "/obtksgzjjfq8mbm.pdf");
        pdfDir = c;
        break;
      } catch (_) {}
    }

    for (const d of RECORDS) {
      let rec;
      try {
        rec = app.findRecordById("anleitungen", d.id);
      } catch (e) {
        rec = new Record(collection);
        rec.id = d.id;
      }
      rec.set("titel", d.titel);
      rec.set("titel_en", d.titel_en);
      rec.set("kategorie", d.kategorie);
      rec.set("beschreibung", d.beschreibung);
      rec.set("aktiv", true);
      if (d.pdf) {
        try {
          const f = $filesystem.fileFromPath(pdfDir + "/" + d.pdf.file);
          f.originalName = d.pdf.name;
          rec.set("datei", f);
        } catch (fe) {
          console.log("pdf missing for " + d.id + ": " + fe.message);
        }
      }
      app.save(rec);
    }
  },
  (app) => {
    for (const d of RECORDS) {
      try {
        app.delete(app.findRecordById("anleitungen", d.id));
      } catch (e) {
        if (!e.message.includes("no rows")) throw e;
      }
    }
  },
);
