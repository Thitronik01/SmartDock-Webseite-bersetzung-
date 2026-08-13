import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';
import { sendAdminEmail, sendCustomerEmail } from '../utils/emailService.js';

const router = express.Router();

async function generateUniqueOrderNumber() {
  let orderNumber;
  let isUnique = false;
  let attempts = 0;
  const maxAttempts = 10;

  while (!isUnique && attempts < maxAttempts) {
    orderNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    const orderNumberStr = orderNumber.toString();

    const existingOrder = await pb
      .collection('configurator_orders')
      .getFirstListItem(`orderNumber = "${orderNumberStr}"`, { requestKey: null })
      .catch(() => null);

    if (!existingOrder) {
      isUnique = true;
    }

    attempts++;
  }

  if (!isUnique) {
    throw new Error('Failed to generate unique order number after multiple attempts');
  }

  return orderNumber.toString();
}

router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    postalCode,
    country,
    configuration,
    totalGross,
    answers,
    skus,
    language,
    promoCode,
    configurationPrices,
    subtotal,
    bundleDiscount,
    totalPrice,
    thrusterType
  } = req.body;

  if (!firstName || !lastName || !email || !phone || !street || !city || !postalCode) {
    return res.status(400).json({ error: 'Missing required customer information' });
  }

  if (!totalGross && !totalPrice) {
    return res.status(400).json({ error: 'Order total is required' });
  }

  const finalTotal = totalPrice || totalGross;
  const orderNumber = await generateUniqueOrderNumber();

  try {
    const orderRecord = await pb.collection('configurator_orders').create({
      orderNumber,
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      postalCode,
      country: country || '',
      configuration: configuration ? JSON.stringify(configuration) : '',
      totalGross: finalTotal,
      answers: answers ? JSON.stringify(answers) : '',
      skus: skus ? (typeof skus === 'string' ? skus : JSON.stringify(skus)) : '',
      language: language || '',
      promoCode: promoCode || '',
      configurationPrices: configurationPrices ? JSON.stringify(configurationPrices) : '',
      subtotal: subtotal || 0,
      bundleDiscount: bundleDiscount || 0,
      totalPrice: finalTotal
    });

    logger.info(`Order #${orderNumber} created in PocketBase with ID: ${orderRecord.id}`);

    const adminEmailBody = formatAdminEmailBody({
      orderNumber,
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      postalCode,
      country,
      configuration,
      configurationPrices,
      subtotal,
      bundleDiscount,
      totalGross: finalTotal,
      thrusterType,
    });

    await sendAdminEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `Eingangsbestätigung - Bestellnummer: ${orderNumber}`,
      html: adminEmailBody,
      orderNumber,
      customerName: `${firstName} ${lastName}`,
      customerEmail: email,
    });

    logger.info(`Admin notification email sent for order #${orderNumber}`);

    const customerEmailBody = formatCustomerEmailBody({
      orderNumber,
      firstName,
      lastName,
      configuration,
      configurationPrices,
      subtotal,
      bundleDiscount,
      totalGross: finalTotal,
    });

    await sendCustomerEmail({
      to: email,
      subject: `Bestellbestätigung - ${orderNumber}`,
      html: customerEmailBody,
      customerName: `${firstName} ${lastName}`,
      senderName: 'SMARTDOCK',
    });

    logger.info(`Customer confirmation email sent to ${email} for order #${orderNumber}`);

    res.json({
      success: true,
      orderNumber,
    });
  } catch (err) {
    logger.error('Error creating order or sending emails:', err);
    res.status(500).json({ error: 'Internal server error processing order' });
  }
});

function formatCurrency(num) {
  if (num === undefined || num === null) return '0,00 €';
  let parts = Number(num).toFixed(2).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(',') + ' €';
}

function formatAdminEmailBody(data) {
  const {
    orderNumber,
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    postalCode,
    country,
    configuration,
    configurationPrices,
    subtotal,
    bundleDiscount,
    totalGross,
    thrusterType,
  } = data;

  const sections = [];

  sections.push('<h2>Eine neue Bestellung ist eingegangen</h2>');
  sections.push(`
    <h3>Bestellnummer</h3>
    <p><strong>${orderNumber}</strong></p>
  `);

  sections.push(`
    <h3>Kundeninformation</h3>
    <p>
      <strong>Name:</strong> ${firstName} ${lastName}<br>
      <strong>E-Mail:</strong> ${email}<br>
      <strong>Telefon:</strong> ${phone}<br>
      <strong>Straße:</strong> ${street}<br>
      <strong>Stadt:</strong> ${city}<br>
      <strong>Postleitzahl:</strong> ${postalCode}
      ${country ? `<br><strong>Land:</strong> ${country}` : ''}
    </p>
  `);

  if (configurationPrices && Array.isArray(configurationPrices) && configurationPrices.length > 0) {
    sections.push(`<h3>Konfiguration</h3><ul style="list-style-type: none; padding-left: 0;">`);
    configurationPrices.forEach(item => {
      sections.push(`<li style="margin-bottom: 5px;">- ${item.name}: ${formatCurrency(item.price)}</li>`);
    });
    sections.push(`</ul>`);
  } else if (configuration) {
    sections.push(`
      <h3>Konfiguration</h3>
      <pre>${typeof configuration === 'string' ? configuration : JSON.stringify(configuration, null, 2)}</pre>
    `);
  }

  if (thrusterType) {
    sections.push(`
      <p style="margin: 10px 0;"><strong>Querstrahlruder:</strong> ${thrusterType}</p>
    `);
  }

  sections.push(`
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 20px;">
      <p style="margin: 5px 0;"><strong>Zwischensumme:</strong> ${formatCurrency(subtotal)}</p>
      ${bundleDiscount < 0 ? `<p style="margin: 5px 0; color: #16a34a;"><strong>Paketrabatt:</strong> ${formatCurrency(bundleDiscount)}</p>` : ''}
      <p style="font-size: 1.25em; margin: 15px 0 0 0;"><strong>Gesamtbetrag: <span style="color: #0f172a;">${formatCurrency(totalGross)}</span></strong></p>
    </div>
  `);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          h2 { color: #0f172a; margin-bottom: 20px; }
          h3 { color: #0f172a; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; }
          p { margin: 5px 0; }
          pre { background-color: #f1f5f9; padding: 10px; border-radius: 4px; overflow-x: auto; font-family: monospace; }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto;">
          ${sections.join('')}
        </div>
      </body>
    </html>
  `;
}

function formatCustomerEmailBody(data) {
  const {
    orderNumber,
    firstName,
    configuration,
    configurationPrices,
    subtotal,
    bundleDiscount,
    totalGross,
  } = data;

  const sections = [];

  sections.push(`<h2 style="color: #0f172a;">Hallo ${firstName},</h2>`);
  sections.push('<p>vielen Dank für deine Bestellung bei SMARTDOCK!</p>');

  sections.push(`
    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
      <h3 style="margin: 0; color: #0f172a;">Bestellnummer: ${orderNumber}</h3>
    </div>
  `);

  if (configurationPrices && Array.isArray(configurationPrices) && configurationPrices.length > 0) {
    sections.push(`<h3 style="color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Deine Konfiguration</h3><ul style="list-style-type: none; padding-left: 0; line-height: 1.6;">`);
    configurationPrices.forEach(item => {
      sections.push(`<li style="margin-bottom: 5px;">- ${item.name}: ${formatCurrency(item.price)}</li>`);
    });
    sections.push(`</ul>`);
  } else if (configuration) {
    sections.push(`
      <h3 style="color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Deine Konfiguration</h3>
      <pre style="background-color: #f1f5f9; padding: 10px; border-radius: 4px; overflow-x: auto;">${typeof configuration === 'string' ? configuration : JSON.stringify(configuration, null, 2)}</pre>
    `);
  }

  sections.push(`
    <div style="border-top: 2px solid #e2e8f0; padding-top: 15px; margin-top: 20px;">
      <p style="margin: 5px 0;"><strong>Zwischensumme:</strong> ${formatCurrency(subtotal)}</p>
      ${bundleDiscount < 0 ? `<p style="margin: 5px 0; color: #16a34a;"><strong>Paketrabatt:</strong> ${formatCurrency(bundleDiscount)}</p>` : ''}
      <p style="color: #64748b; font-size: 0.9em;">(inkl. MwSt.)</p>
      <p style="font-size: 1.25em; margin-top: 10px;"><strong>Gesamtbetrag: <span style="color: #0f172a;">${formatCurrency(totalGross)}</span></strong></p>
    </div>
  `);

  sections.push('<p style="margin-top: 30px;">Wir werden dich in Kürze kontaktieren, um deine Bestellung zu bestätigen.</p>');
  sections.push('<p>Beste Grüße,<br>Dein SMARTDOCK Team</p>');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 0 auto;">
          ${sections.join('')}
        </div>
      </body>
    </html>
  `;
}

export default router;