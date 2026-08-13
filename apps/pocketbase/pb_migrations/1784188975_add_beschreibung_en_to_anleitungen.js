/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("anleitungen");

    const existing = collection.fields.getByName("beschreibung_en");
    if (!existing) {
      collection.fields.add(
        new TextField({
          name: "beschreibung_en",
          required: false,
        }),
      );
      app.save(collection);
    }

    const englishText = `1
Prepare for installation
Disconnect the power supply to the thrusters.

2
Expose the thruster connectors
Expose the thruster connectors. These are usually located in the helm station near the thruster control panel.

3
Disconnect the connectors
Disconnect the connectors for the bow and/or stern thrusters.

4
Connect the TCU
Now connect your TCU using the supplied wiring harness. Ensure that the connectors are correctly connected and securely fitted. Details of the connector connections and more detailed information on the installation can be found in the relevant PDF manual for your boat drive.

Please note: If your boat is fitted with bow and stern thrusters, ensure that the stern and bow controls are each connected correctly.

5
Install the app
Now download the SMARTDOCK app from the Google Play Store or the App Store. When you launch the app, a button for automatic setup will appear. Do not tap this just yet.

6
Start the TCU's pairing mode
Restore the power supply via the main switch. As long as no mobile phone is paired with the TCU, pairing mode will start automatically. You can tell this is happening when the LED is lit continuously.

NOTE: To pair the TCU with another mobile phone, enter the TCU's pairing mode manually by pressing and holding the button on the device until the TCU's LED remains lit continuously (pairing mode active).

7
Pair the app with the TCU
Now tap the "Start" button in the app to begin the automatic setup. Once the app has detected your devices, you'll be shown a tutorial and guided through the setup process to configure the fine-tuning settings.

Your app is now paired and ready to use. Feel free to use demo mode to familiarise yourself with the controls.`;

    let record;
    try {
      record = app.findFirstRecordByFilter(
        "anleitungen",
        "titel = 'Universell'",
      );
    } catch (e) {
      record = null;
    }

    if (record) {
      record.set("beschreibung_en", englishText);
      app.save(record);
    }
  },
  (app) => {
    let record;
    try {
      record = app.findFirstRecordByFilter(
        "anleitungen",
        "titel = 'Universell'",
      );
      if (record) {
        record.set("beschreibung_en", "");
        app.save(record);
      }
    } catch (e) {
      // ignore
    }

    try {
      const collection = app.findCollectionByNameOrId("anleitungen");
      collection.fields.removeByName("beschreibung_en");
      app.save(collection);
    } catch (e) {
      // ignore
    }
  },
);
