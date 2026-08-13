import 'dotenv/config';
import logger from './logger.js';

/**
 * Send customer confirmation email via PocketBase HTTP API
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} options.customerName - Customer name for logging
 * @param {string} options.senderName - Sender name (optional, defaults to 'Support')
 */
export async function sendCustomerEmail({ to, subject, html, customerName, senderName = 'Support' }) {
  if (!process.env.POCKETBASE_URL) {
    throw new Error('POCKETBASE_URL environment variable is not set');
  }

  if (!process.env.PB_SUPERUSER_EMAIL || !process.env.PB_SUPERUSER_PASSWORD) {
    throw new Error('PocketBase superuser credentials are not configured');
  }

  try {
    // Get auth token
    const authResponse = await fetch(
      `${process.env.POCKETBASE_URL}/api/collections/_superusers/auth-with-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identity: process.env.PB_SUPERUSER_EMAIL,
          password: process.env.PB_SUPERUSER_PASSWORD,
        }),
      }
    );

    if (!authResponse.ok) {
      throw new Error(`PocketBase auth failed: ${authResponse.status} ${authResponse.statusText}`);
    }

    const authData = await authResponse.json();
    const token = authData.token;

    // Send email via PocketBase admin API
    const emailResponse = await fetch(
      `${process.env.POCKETBASE_URL}/api/admin/mail/send`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({
          to,
          subject,
          html,
          from: senderName,
        }),
      }
    );

    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${emailResponse.status} ${emailResponse.statusText}`);
    }

    logger.info(`Customer email sent successfully to ${to} (${customerName})`);
  } catch (error) {
    logger.error(`Failed to send customer email to ${to}:`, error.message);
    throw error;
  }
}

/**
 * Send admin notification email via PocketBase HTTP API
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} options.orderNumber - Order number for logging
 * @param {string} options.customerName - Customer name for logging
 * @param {string} options.customerEmail - Customer email for logging
 */
export async function sendAdminEmail({
  to,
  subject,
  html,
  orderNumber,
  customerName,
  customerEmail,
}) {
  if (!process.env.POCKETBASE_URL) {
    throw new Error('POCKETBASE_URL environment variable is not set');
  }

  if (!process.env.PB_SUPERUSER_EMAIL || !process.env.PB_SUPERUSER_PASSWORD) {
    throw new Error('PocketBase superuser credentials are not configured');
  }

  try {
    // Get auth token
    const authResponse = await fetch(
      `${process.env.POCKETBASE_URL}/api/collections/_superusers/auth-with-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identity: process.env.PB_SUPERUSER_EMAIL,
          password: process.env.PB_SUPERUSER_PASSWORD,
        }),
      }
    );

    if (!authResponse.ok) {
      throw new Error(`PocketBase auth failed: ${authResponse.status} ${authResponse.statusText}`);
    }

    const authData = await authResponse.json();
    const token = authData.token;

    // Send email via PocketBase admin API
    const emailResponse = await fetch(
      `${process.env.POCKETBASE_URL}/api/admin/mail/send`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({
          to,
          subject,
          html,
        }),
      }
    );

    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${emailResponse.status} ${emailResponse.statusText}`);
    }

    logger.info(
      `Admin email sent successfully for order #${orderNumber} from ${customerName} (${customerEmail})`
    );
  } catch (error) {
    logger.error(
      `Failed to send admin email for order #${orderNumber}:`,
      error.message
    );
    throw error;
  }
}