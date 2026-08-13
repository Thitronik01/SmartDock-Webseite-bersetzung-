/// <reference path="../pb_data/types.d.ts" />

// Sends a notification to smartdock@thitronik.de for every new configuration_requests
// record. Wrapped in try/catch so a mail delivery failure never blocks record
// creation, and any failure is logged via $app.logger() for diagnosis
// (see get_pocketbase_errors / pb_data/auxiliary.db logs).
onRecordAfterCreateSuccess((e) => {
  try {
    const firstName = e.record.get("firstName") || "";
    const lastName = e.record.get("lastName") || "";
    const email = e.record.get("email") || "";
    const phone = e.record.get("phone") || "";
    const company = e.record.get("company") || "";
    const street = e.record.get("street") || "";
    const houseNumber = e.record.get("houseNumber") || "";
    const postalCode = e.record.get("postalCode") || "";
    const city = e.record.get("city") || "";
    const country = e.record.get("country") || "";
    const referenceNumber = e.record.get("referenceNumber") || "";
    const thrusterType = e.record.get("thrusterType") || "";

    // Helper to format booleans cleanly as "Ja" instead of "true"
    const formatBool = (val) => (val === true ? "Ja" : val);

    const configFields = {
      "ECU Anzahl": e.record.get("ecuCount"),
      "Motortyp": e.record.get("motorType"),
      "Motoranzahl": e.record.get("motorCount"),
      "Joystick Typ": e.record.get("joystickType"),
      "TCU": formatBool(e.record.get("tcu")),
      "Querstrahlruder": thrusterType,
      "ACU": formatBool(e.record.get("acu")),
      "Ankerwinde 1": formatBool(e.record.get("ankerwinde1")),
      "Ankerwinde 2": formatBool(e.record.get("ankerwinde2")),
      "WCU": formatBool(e.record.get("wcu")),
      "Ankerwinch 1": formatBool(e.record.get("ankerwinch1")),
      "Ankerwinch 2": formatBool(e.record.get("ankerwinch2")),
      "Horn": formatBool(e.record.get("horn")),
    };

    let configurationSection = "";
    for (const [label, value] of Object.entries(configFields)) {
      if (value !== undefined && value !== false && value !== 0 && value !== "") {
        configurationSection += label + ": " + value + "\n";
      }
    }

    const emailBody =
      "Neue SMARTDOCK Konfigurationsanfrage\n\n" +
      "Referenznummer: " + referenceNumber + "\n\n" +
      "Kundendaten:\n" +
      "Name: " + firstName + " " + lastName + "\n" +
      "Email: " + email + "\n" +
      "Telefon: " + phone + "\n" +
      "Unternehmen: " + company + "\n" +
      "Straße: " + street + " " + houseNumber + "\n" +
      "PLZ: " + postalCode + "\n" +
      "Stadt: " + city + "\n" +
      "Land: " + country + "\n\n" +
      "Gewählte Konfiguration:\n" +
      configurationSection;

    const message = new MailerMessage({
      from: { name: "SMARTDOCK" },
      to: [{ address: "smartdock@thitronik.de" }],
      replyTo: email ? [{ address: email }] : undefined,
      subject: "Neue SMARTDOCK Konfigurationsanfrage von " + firstName + " " + lastName,

      html: "<pre>" + emailBody + "</pre>",
    });

    $app.newMailClient().send(message);

    // Always CC info@nagy.li when delivery country is Switzerland
    const countryRaw = country.trim().toLowerCase();
    const isSwitzerland = countryRaw === "schweiz" || countryRaw === "switzerland" || countryRaw === "suisse" || countryRaw === "ch";
    if (isSwitzerland) {
      const nagyMessage = new MailerMessage({
        from: { name: "SMARTDOCK" },
        to: [{ address: "info@nagy.li" }],
        replyTo: email ? [{ address: email }] : undefined,
        subject: "Neue SMARTDOCK Konfigurationsanfrage (Schweiz) von " + firstName + " " + lastName,
        html: "<pre>" + emailBody + "</pre>",
      });
      $app.newMailClient().send(nagyMessage);
    }
  } catch (err) {
    $app.logger().error(
      "configuration_requests: failed to notify smartdock@thitronik.de",
      "recordId", e.record.id,
      "err", String(err)
    );
  }

  e.next();
}, "configuration_requests");
