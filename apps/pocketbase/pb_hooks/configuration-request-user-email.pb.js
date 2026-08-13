/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  try {
    const firstName = e.record.get("firstName");
    const lastName = e.record.get("lastName");
    const email = e.record.get("email");
    const referenceNumber = e.record.get("referenceNumber");

    // Determine which email template to use based on configuration
    let emailSubject = "";
    let emailHtml = "";

    // Check if installation service is included
    const configPrices = e.record.get("configurationPrices");
    const hasInstallationService = configPrices && configPrices.installationService && configPrices.installationService > 0;

    if (!hasInstallationService) {
      // Configuration Request - No Installation Service
      emailSubject = "Konfigurationsanfrage - Kein Einbauservice";
      emailHtml = `
        <h2>Vielen Dank für Ihre Konfigurationsanfrage</h2>
        <p>Lieber ${firstName} ${lastName},</p>
        <p>wir haben Ihre Konfigurationsanfrage mit der Referenznummer <strong>${referenceNumber}</strong> erhalten.</p>
        <p>Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um die Details zu besprechen.</p>
        <p>Mit freundlichen Grüßen,<br>Ihr SMARTDOCK-Team</p>
      `;
    } else {
      // Configuration Request - With Installation Service
      emailSubject = "Konfigurationsanfrage - Mit Einbauservice";
      emailHtml = `
        <h2>Vielen Dank für Ihre Konfigurationsanfrage</h2>
        <p>Lieber ${firstName} ${lastName},</p>
        <p>wir haben Ihre Konfigurationsanfrage mit der Referenznummer <strong>${referenceNumber}</strong> erhalten.</p>
        <p>Da Sie auch unseren Einbauservice angefordert haben, werden wir die Installation koordinieren.</p>
        <p>Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen, um alle Details zu besprechen.</p>
        <p>Mit freundlichen Grüßen,<br>Ihr Team</p>
      `;
    }

    // Send email to customer
    const message = new MailerMessage({
      from: { name: "SMARTDOCK" },
      to: [{ address: email }],
      subject: emailSubject,
      html: emailHtml
    });

    $app.newMailClient().send(message);
  } catch (err) {
    $app.logger().error(
      "configuration_requests: failed to send customer confirmation email",
      "recordId", e.record.id,
      "err", String(err)
    );
  }

  e.next();
}, "configuration_requests");