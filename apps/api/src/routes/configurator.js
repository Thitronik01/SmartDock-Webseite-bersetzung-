import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * Generate a unique 10-digit numeric order number
 * Checks PocketBase to ensure no duplicates
 */
async function generateUniqueOrderNumber() {
  let orderNumber;
  let isUnique = false;
  let attempts = 0;
  const maxAttempts = 10;

  while (!isUnique && attempts < maxAttempts) {
    // Generate random 10-digit number (1000000000 to 9999999999)
    orderNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    const orderNumberStr = orderNumber.toString();

    // Check if order number already exists in PocketBase
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

router.post('/send-email', async (req, res) => {
  const {
    answers,
    firstName,
    lastName,
    email,
    phone,
    street,
    city,
    postalCode,
    totalGross,
    configuration,
    skus,
    language,
    promoCode,
    country,
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !street || !city || !postalCode) {
    return res.status(400).json({ error: 'Missing required contact information' });
  }

  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Invalid or missing answers' });
  }

  if (!totalGross) {
    return res.status(400).json({ error: 'Order total is required' });
  }

  // Generate unique order number
  const orderNumber = await generateUniqueOrderNumber();

  // Save order to PocketBase
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
    totalGross,
    answers: answers ? JSON.stringify(answers) : '',
    skus: skus ? JSON.stringify(skus) : '',
    language: language || '',
    promoCode: promoCode || '',
  });

  logger.info(`Order #${orderNumber} created in PocketBase with ID: ${orderRecord.id}`);

  res.json({ orderNumber: orderRecord.orderNumber });
});

export default router;