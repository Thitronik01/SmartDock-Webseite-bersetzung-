
/// <reference path="../pb_data/types.d.ts" />
onRecordAfterUpdateSuccess((e) => {
  // Only send email if dealerId is set
  const dealerId = e.record.get("dealerId");
  if (!dealerId) {
    e.next();
    return;
  }

  // Get the dealer information
  const dealer = $app.findRecordById("dealers", dealerId);
  const dealerEmail = dealer.get("email");
  const dealerName = dealer.get("name");
  
  // Skip if dealer has no email
  if (!dealerEmail) {
    e.next();
    return;
  }

  // Prepare email content with all fields
  const referenceNumber = e.record.get("referenceNumber");
  const firstName = e.record.get("firstName");
  const lastName = e.record.get("lastName");
  const email = e.record.get("email");
  const phone = e.record.get("phone") || "N/A";
  const company = e.record.get("company") || "N/A";
  const street = e.record.get("street") || "N/A";
  const houseNumber = e.record.get("houseNumber") || "N/A";
  const postalCode = e.record.get("postalCode") || "N/A";
  const city = e.record.get("city") || "N/A";

  const formatCurrency = (num) => {
    const rounded = Math.round((Number(num) || 0) * 100) / 100;
    let parts = rounded.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(',') + ' €';
  };

  const pricesStr = e.record.get("configurationPrices");
  let prices = [];
  try {
    prices = typeof pricesStr === "string" ? JSON.parse(pricesStr) : pricesStr;
    if (!Array.isArray(prices)) prices = [];
  } catch(err) {
    prices = [];
  }

  const subtotal = Math.round((Number(e.record.get("subtotal")) || 0) * 100) / 100;
  const bundleDiscount = Math.round((Number(e.record.get("bundleDiscount")) || 0) * 100) / 100;
  const totalPrice = Math.round((Number(e.record.get("totalPrice")) || 0) * 100) / 100;

  let configSummary = "";
  if (prices.length > 0) {
    configSummary = prices.map(item => `- ${item.name}: ${formatCurrency(item.price)}`).join("<br>");
  } else {
    configSummary = `
      <p><strong>ECU Anzahl:</strong> ${e.record.get("ecuCount") || "N/A"}</p>
      <p><strong>Motortyp:</strong> ${e.record.get("motorType") || "N/A"}</p>
      <p><strong>Motoranzahl:</strong> ${e.record.get("motorCount") || "N/A"}</p>
      <p><strong>Joystick-Typ:</strong> ${e.record.get("joystickType") || "N/A"}</p>
      <p><strong>TCU:</strong> ${e.record.get("tcu") ? "Ja" : "Nein"}</p>
      <p><strong>ACU:</strong> ${e.record.get("acu") ? "Ja" : "Nein"}</p>
      <p><strong>WCU:</strong> ${e.record.get("wcu") ? "Ja" : "Nein"}</p>
      <p><strong>Horn:</strong> ${e.record.get("horn") ? "Ja" : "Nein"}</p>
    `;
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #0f172a;">Neue Bootkonfigurationsanfrage zugewiesen</h2>
      <p>Hallo ${dealerName},</p>
      <p>Ihnen wurde nachträglich eine neue Konfigurationsanfrage zur Installation zugewiesen.</p>
      
      <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <h3 style="margin: 0; color: #0f172a;">Bearbeitungsnummer: ${referenceNumber}</h3>
      </div>

      <h3 style="color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Kundendaten</h3>
      <p>
        <strong>Name:</strong> ${firstName} ${lastName}<br>
        <strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a><br>
        <strong>Telefon:</strong> ${phone}<br>
        <strong>Firma:</strong> ${company}<br>
        <strong>Adresse:</strong> ${street} ${houseNumber}, ${postalCode} ${city}
      </p>

      <h3 style="color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 25px;">Konfigurationsübersicht</h3>
      <p style="line-height: 1.6;">${configSummary}</p>
      
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 15px;">
        <p style="margin: 5px 0;"><strong>Zwischensumme:</strong> ${formatCurrency(subtotal)}</p>
        ${bundleDiscount < 0 ? `<p style="margin: 5px 0; color: #16a34a;"><strong>Paketrabatt:</strong> ${formatCurrency(bundleDiscount)}</p>` : ''}
        <p style="font-size: 1.25em; margin: 15px 0 0 0;"><strong>Gesamtbetrag (brutto): <span style="color: #0f172a;">${formatCurrency(totalPrice)}</span></strong></p>
      </div>

      <p style="margin-top: 30px;">Bitte kontaktieren Sie den Kunden zeitnah, um das weitere Vorgehen abzustimmen.</p>
      <p>Beste Grüße,<br>SMARTDOCK System</p>
    </div>
  `;

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: dealerEmail }],
    subject: "Neue Bootkonfigurationsanfrage - Bearbeitungsnummer: " + referenceNumber,
    html: htmlBody
  });

  $app.newMailClient().send(message);
  e.next();
}, "configuration_requests");
