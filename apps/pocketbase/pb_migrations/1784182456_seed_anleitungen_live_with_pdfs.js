/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("anleitungen");
  const candidates = [
    "pb_migrations/anleitungen_pdfs",
    "apps/pocketbase/pb_migrations/anleitungen_pdfs",
    "./pb_migrations/anleitungen_pdfs",
  ];
  let pdfDir = candidates[0];
  for (const c of candidates) {
    try { $os.stat(c + "/obtksgzjjfq8mbm.pdf"); pdfDir = c; break; } catch (_) {}
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "cubhmop1nuyi97g"); }
    catch (e) { rec = new Record(collection); rec.id = "cubhmop1nuyi97g"; }
    rec.set("titel", "Universell");
    rec.set("beschreibung", "1. Installation vorbereiten - Stromversorgung der Strahlruder unterbrechen\n2. Stecker der Strahlruder freilegen - Im Steuerstand bei Bedienpanel\n3. Stecker trennen - Bug- und/oder Hecksteuerung lösen\n4. TCU dazwischenklemmen - Mit mitgeliefertem Kabelbaum anschließen\n5. App installieren - SMARTDOCK App aus Google Play Store oder App Store\n6. Kopplungsmodus der TCU starten - Spannungsversorgung wiederherstellen, LED leuchtet\n7. App mit TCU koppeln - \"Starten\" Button drücken, automatische Einrichtung durchführen");
    rec.set("kategorie", "TCU");
    rec.set("aktiv", true);
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "obtksgzjjfq8mbm"); }
    catch (e) { rec = new Record(collection); rec.id = "obtksgzjjfq8mbm"; }
    rec.set("titel", "Quick TCD");
    rec.set("beschreibung", "");
    rec.set("kategorie", "TCU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/obtksgzjjfq8mbm.pdf");
      f.originalName = "tcu_quick_tcd_ysbvgm55g3_f545zsm5wz.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for obtksgzjjfq8mbm: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "pk00u661igizrps"); }
    catch (e) { rec = new Record(collection); rec.id = "pk00u661igizrps"; }
    rec.set("titel", "Vetus");
    rec.set("beschreibung", "");
    rec.set("kategorie", "TCU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/pk00u661igizrps.pdf");
      f.originalName = "tcu_vetus_d8bpgg8954_y29yuaw6wn.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for pk00u661igizrps: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "vg464iaea8uznhd"); }
    catch (e) { rec = new Record(collection); rec.id = "vg464iaea8uznhd"; }
    rec.set("titel", "Sleipner Side Power");
    rec.set("beschreibung", "");
    rec.set("kategorie", "TCU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/vg464iaea8uznhd.pdf");
      f.originalName = "tcu_sleipner_side_power_awa9puq37o_rsljz248h2.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for vg464iaea8uznhd: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "337cp1alrjwrnt0"); }
    catch (e) { rec = new Record(collection); rec.id = "337cp1alrjwrnt0"; }
    rec.set("titel", "Installation von SMARTDOCK für Yamaha-Antriebe mit Joystick");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/337cp1alrjwrnt0.pdf");
      f.originalName = "ecu_yamaha_mumv59rqo2_ty7c25nho2.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for 337cp1alrjwrnt0: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "5fbj0zzxxjnxvkq"); }
    catch (e) { rec = new Record(collection); rec.id = "5fbj0zzxxjnxvkq"; }
    rec.set("titel", "Installation von SMARTDOCK für Mercury/Mercruiser-Antriebe mit Joystick");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/5fbj0zzxxjnxvkq.pdf");
      f.originalName = "ecu_mercury_mercruiser_wegpk68d8l_epy83fu2k0.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for 5fbj0zzxxjnxvkq: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "6jyst7hobko7fs2"); }
    catch (e) { rec = new Record(collection); rec.id = "6jyst7hobko7fs2"; }
    rec.set("titel", "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb ohne Joystick EVC -D/-E/2.0");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/6jyst7hobko7fs2.pdf");
      f.originalName = "ecu_volvo_penta_dual_drive_evc_d_e_2_18dsrgchv2_ibrk882ur9.0.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for 6jyst7hobko7fs2: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "dql8d8pt3achiap"); }
    catch (e) { rec = new Record(collection); rec.id = "dql8d8pt3achiap"; }
    rec.set("titel", "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -C/-D/-E/2.0");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/dql8d8pt3achiap.pdf");
      f.originalName = "ecu_volvo_penta_dual_drive_joystick_evc_c_d_e_2_fpic92vf2t_qk2t28oknu.0.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for dql8d8pt3achiap: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "fer7cp5fbf9ocq9"); }
    catch (e) { rec = new Record(collection); rec.id = "fer7cp5fbf9ocq9"; }
    rec.set("titel", "Installation von SMARTDOCK für Volvo Penta-Antriebe Doppelantrieb mit Joystick EVC -B/-C");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/fer7cp5fbf9ocq9.pdf");
      f.originalName = "ecu_volvo_penta_dual_drive_joystick_evc_b_c_9qkapkclq8_0rcszrstva.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for fer7cp5fbf9ocq9: " + fe.message); }
    app.save(rec);
  }

  {
    let rec;
    try { rec = app.findRecordById("anleitungen", "nzdk8g7p2xu4jxi"); }
    catch (e) { rec = new Record(collection); rec.id = "nzdk8g7p2xu4jxi"; }
    rec.set("titel", "Installation von SMARTDOCK für Volvo Penta-Antriebe Einzelantrieb (EVC -D/-E)");
    rec.set("beschreibung", "");
    rec.set("kategorie", "ECU");
    rec.set("aktiv", true);
    try {
      const f = $filesystem.fileFromPath(pdfDir + "/nzdk8g7p2xu4jxi.pdf");
      f.originalName = "ecu_volvo_penta_single_drive_evc_d_e_fo0qyng1bq_gnb42mmj7t.pdf";
      rec.set("datei", f);
    } catch (fe) { console.log("pdf missing for nzdk8g7p2xu4jxi: " + fe.message); }
    app.save(rec);
  }
}, (app) => {
  const ids = ["cubhmop1nuyi97g","obtksgzjjfq8mbm","pk00u661igizrps","vg464iaea8uznhd","337cp1alrjwrnt0","5fbj0zzxxjnxvkq","6jyst7hobko7fs2","dql8d8pt3achiap","fer7cp5fbf9ocq9","nzdk8g7p2xu4jxi"];
  for (const id of ids) {
    try { app.delete(app.findRecordById("anleitungen", id)); }
    catch (e) { if (!e.message.includes("no rows")) throw e; }
  }
})
