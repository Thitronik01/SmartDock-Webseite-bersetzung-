import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

const VALID_TARGET_LANGUAGES = ['EN', 'FR', 'ES', 'IT', 'DE', 'PT', 'NL', 'PL', 'RU', 'JA', 'ZH'];

/**
 * Determine the correct DeepL API endpoint based on API key type
 * Free tier keys end with ':fx'
 * Pro tier keys do not have this suffix
 */
function getDeepLEndpoint(apiKey) {
  if (apiKey.endsWith(':fx')) {
    return 'https://api-free.deepl.com/v2/translate';
  }
  return 'https://api.deepl.com/v2/translate';
}

router.post('/', async (req, res) => {
  const { text, targetLanguage } = req.body;

  // Validate required fields
  if (!text || typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Text is required and must be a non-empty string' });
  }

  if (!targetLanguage || typeof targetLanguage !== 'string' || targetLanguage.trim() === '') {
    return res.status(400).json({ error: 'Target language is required and must be a non-empty string' });
  }

  const upperTargetLanguage = targetLanguage.toUpperCase();
  if (!VALID_TARGET_LANGUAGES.includes(upperTargetLanguage)) {
    return res.status(400).json({
      error: `Invalid target language. Supported languages: ${VALID_TARGET_LANGUAGES.join(', ')}`,
    });
  }

  if (!process.env.DEEPL_API_KEY) {
    throw new Error('DEEPL_API_KEY environment variable is not set');
  }

  // Determine correct endpoint based on API key type
  const endpoint = getDeepLEndpoint(process.env.DEEPL_API_KEY);

  // Make request to DeepL API v2
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: [text],
      target_lang: upperTargetLanguage,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || `DeepL API error: ${response.status} ${response.statusText}`;
    
    logger.error(`DeepL API error (${response.status}):`, errorMessage);
    
    throw new Error(errorMessage);
  }

  const result = await response.json();

  if (!result.translations || !result.translations[0]) {
    throw new Error('Invalid response from DeepL API: missing translations');
  }

  logger.info(`Translation completed: ${text.substring(0, 50)}... -> ${upperTargetLanguage}`);

  res.json({
    translatedText: result.translations[0].text,
    targetLanguage: upperTargetLanguage,
  });
});

/**
 * Migration endpoint: Fetches all records from translation_DE collection,
 * translates them using DeepL API, and creates new records in translation_EN collection
 */
router.post('/migrate-to-en', async (req, res) => {
  if (!process.env.DEEPL_API_KEY) {
    throw new Error('DEEPL_API_KEY environment variable is not set');
  }

  logger.info('Starting translation migration from DE to EN');

  // Fetch all records from translation_DE collection
  const deRecords = await pb.collection('translation_DE').getFullList();
  logger.info(`Fetched ${deRecords.length} records from translation_DE collection`);

  let migratedCount = 0;

  // Process each record
  for (const record of deRecords) {
    const deText = record.de;

    if (!deText || typeof deText !== 'string' || deText.trim() === '') {
      logger.warn(`Skipping record ${record.id}: empty or missing 'de' field`);
      continue;
    }

    // Call DeepL API to translate
    const deepLResponse = await fetch('https://api-free.deepl.com/v1/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: deText,
        target_lang: 'EN',
      }),
    });

    if (!deepLResponse.ok) {
      throw new Error(`DeepL API error: ${deepLResponse.status} ${deepLResponse.statusText}`);
    }

    const translationResult = await deepLResponse.json();

    if (!translationResult.translations || !translationResult.translations[0]) {
      throw new Error('Invalid response from DeepL API: missing translations');
    }

    const enText = translationResult.translations[0].text;

    // Create new record in translation_EN collection
    await pb.collection('translation_EN').create({
      key: record.key,
      en: enText,
      page: record.page,
      section: record.section,
    });

    migratedCount++;
    logger.info(`Migrated record ${migratedCount}/${deRecords.length}: ${record.key}`);
  }

  logger.info(`Translation migration completed: ${migratedCount}/${deRecords.length} records migrated`);

  res.json({
    success: true,
    migratedCount,
    message: 'All translations migrated',
  });
});

export default router;