/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const firstName = e.record.get("firstName");
  const lastName = e.record.get("lastName");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const street = e.record.get("street");
  const city = e.record.get("city");
  const postalCode = e.record.get("postalCode");
  const country = e.record.get("country");
  const totalGross = e.record.get("totalGross");
  const promoCode = e.record.get("promoCode");
  const configuration = e.record.get("configuration");
  const orderNumber = e.record.get("orderNumber");
  const dealerEmail = e.record.get("dealerEmail") || "";
  const dealerName = e.record.get("dealerName") || "";
  const countryRaw = (country || "").trim().toLowerCase();
  const isSwitzerland = countryRaw === "schweiz" || countryRaw === "switzerland" || countryRaw === "suisse" || countryRaw === "ch";

  // Format customer information for email body
  const dealerSection = dealerName
    ? `<br><strong>Zugewiesener Händler:</strong><br>Name: ${dealerName}<br>${dealerEmail ? `E-Mail: ${dealerEmail}<br>` : ""}`
    : "";

  const customerInfo = `
    <strong>Kundeninformation:</strong><br>
    Name: ${firstName} ${lastName}<br>
    E-Mail: ${email}<br>
    Telefon: ${phone || "N/A"}<br>
    Straße: ${street || "N/A"}<br>
    Stadt: ${city || "N/A"}<br>
    Postleitzahl: ${postalCode || "N/A"}<br>
    Land: ${country || "N/A"}<br>
    ${dealerSection}
    <br>
    <strong>Bestelldetails:</strong><br>
    Bestellnummer: ${orderNumber}<br>
    Gesamtbetrag (Brutto): ${totalGross || "N/A"} EUR<br>
    Aktionscode: ${promoCode || "Keine"}<br>
    <br>
    <strong>Konfiguration:</strong><br>
    ${configuration || "Keine Konfiguration angegeben"}
  `;

  // Send customer confirmation email
  const customerMessage = new MailerMessage({
    from: {
      address: "noreply@smartdock.de",
      name: "SmartDock"
    },
    to: [{ address: email }],
    subject: "Bestellbestätigung",
    html: `
      <h2>Vielen Dank für Ihre Bestellung!</h2>
      <p>Ihre Bestellnummer: <strong>${orderNumber}</strong></p>
      ${customerInfo}
      <p>Wir werden Ihre Bestellung in Kürze bearbeiten.</p>
    `
  });
  $app.newMailClient().send(customerMessage);

  // Send admin notification email
  const adminMessage = new MailerMessage({
    from: {
      address: "noreply@smartdock.de",
      name: "SmartDock"
    },
    to: [{ address: "smartdock@thitronik.de" }],
    subject: "Eingangsbestätigung - Bestellnummer: " + orderNumber,
    html: `
      <h2>Neue Bestellung eingegangen</h2>
      <p>Bestellnummer: <strong>${orderNumber}</strong></p>
      ${customerInfo}
    `
  });
  $app.newMailClient().send(adminMessage);

  // Send copy to dealer if a dealer email is stored
  if (dealerEmail) {
    const dealerMessage = new MailerMessage({
      from: {
        address: "noreply@smartdock.de",
        name: "SmartDock"
      },
      to: [{ address: dealerEmail }],
      subject: "Neue SMARTDOCK Konfigurationsanfrage - Bestellnummer: " + orderNumber,
      html: `
        <h2>Neue Konfigurationsanfrage für ${dealerName || "Ihren Betrieb"}</h2>
        <p>Es ist eine neue Konfigurationsanfrage eingegangen, die für Ihren Betrieb als zuständigen Händler bestimmt ist.</p>
        <p>Bestellnummer: <strong>${orderNumber}</strong></p>
        ${customerInfo}
        <p>Bitte nehmen Sie Kontakt mit dem Kunden auf und begleiten Sie die weitere Installation.</p>
      `
    });
    $app.newMailClient().send(dealerMessage);
  }

  // Always CC info@nagy.li when delivery country is Switzerland
  if (isSwitzerland) {
    const nagyEmail = "info@nagy.li";
    // Only send if not already sent as dealer email above
    if (dealerEmail !== nagyEmail) {
      const nagyMessage = new MailerMessage({
        from: {
          address: "noreply@smartdock.de",
          name: "SmartDock"
        },
        to: [{ address: nagyEmail }],
        subject: "Neue SMARTDOCK Konfigurationsanfrage (Schweiz) - Bestellnummer: " + orderNumber,
        html: `
          <h2>Neue Konfigurationsanfrage – Auslieferungsland: Schweiz</h2>
          <p>Es ist eine neue Konfigurationsanfrage mit Auslieferungsland Schweiz eingegangen.</p>
          <p>Bestellnummer: <strong>${orderNumber}</strong></p>
          ${customerInfo}
          <p>Bitte nehmen Sie Kontakt mit dem Kunden auf.</p>
        `
      });
      try {
        $app.newMailClient().send(nagyMessage);
      } catch (err) {
        $app.logger().error("nagy email failed", "to", nagyEmail, "err", String(err));
      }
    }
  }

  e.next();
}, "configurator_orders");
