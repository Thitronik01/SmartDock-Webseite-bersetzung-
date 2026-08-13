/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const company = e.record.get("company") || "Not provided";
  const phone = e.record.get("phone") || "Not provided";
  const message = e.record.get("message");

  const htmlContent = `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
    <hr>
    <p><small>Record ID: ${e.record.id}</small></p>
  `;

  const message_obj = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "smartdock@thitronik.de" }],
    subject: "New Contact Request from " + name,
    html: htmlContent
  });

  $app.newMailClient().send(message_obj);
  e.next();
}, "contact_requests");