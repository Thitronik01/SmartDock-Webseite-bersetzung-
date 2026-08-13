
export const countryData = {
  "Deutschland": { code: "DE", vat: 19, currency: "EUR", locale: "de-DE", rate: 1 },
  "Österreich": { code: "AT", vat: 20, currency: "EUR", locale: "de-AT", rate: 1 },
  "Schweiz": { code: "CH", vat: 0, currency: "CHF", locale: "de-CH", rate: 0.95 },
  "Other": { code: "EU", vat: 20, currency: "EUR", locale: "en-EU", rate: 1 }
};

export const devicePrices = { 
  ECU: 3319.33, 
  TCU: 1218.49, 
  ACU: 1218.49, 
  WCU: 1050.42,
  HORN: 0 
};

// Fixed gross CHF prices for Switzerland (not derived from EUR)
export const deviceGrossPricesCHF = {
  ECU: 4481.10,
  TCU: 2437.00,
  ACU: 2437.00,
  WCU: 2100.00,
  HORN: 0
};

export const INSTALLATION_SERVICE_PRICE = 1680.67; // ~2000€ gross with 19% VAT
export const INSTALLATION_SERVICE_PRICE_CHF = 1500.00; // Fixed gross CHF price

export const roundPrice = (price) => {
  return Math.round((Number(price) || 0) * 100) / 100;
};

export const formatPrice = (price) => {
  return roundPrice(price).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
};

export const formatPriceCHF = (price) => {
  return 'CHF\u00A0' + roundPrice(price).toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const formatPriceByCurrency = (price, currency) => {
  if (currency === 'CHF') return formatPriceCHF(price);
  return formatPrice(price);
};

export const isCHCountry = (countryName) => {
  if (!countryName) return false;
  const n = countryName.trim().toLowerCase();
  return n === 'schweiz' || n === 'ch' || n === 'switzerland' || n === 'suisse';
};

export const calculateGrossPrice = (netPrice, vatPercent, exchangeRate = 1) => {
  return roundPrice(netPrice * (1 + vatPercent / 100) * exchangeRate);
};

export const countExtras = (extras) => {
  let count = 0;
  if (extras.acu === '1 Ankerwinde') count += 1;
  if (extras.acu === '2 Ankerwinden') count += 2;
  if (extras.wcu === '1 Winch') count += 1;
  if (extras.wcu === '2 Winches') count += 2;
  if (extras.horn) count += 1;
  return count;
};

// Builds an ordered pool of individual extra-hardware units (anchor winches,
// winches, horn) so downstream logic knows exactly which component types are
// assigned to each ACU/WCU device rather than just a generic count.
const buildExtraPool = (extras) => {
  const pool = [];
  if (extras.acu === '1 Ankerwinde') pool.push('Ankerwinde');
  if (extras.acu === '2 Ankerwinden') pool.push('Ankerwinde', 'Ankerwinde');
  if (extras.wcu === '1 Winch') pool.push('Winch');
  if (extras.wcu === '2 Winches') pool.push('Winch', 'Winch');
  if (extras.horn) pool.push('Horn');
  return pool;
};

// Translation mappings for extra hardware terms
const getExtraTerms = (language = 'DE') => {
  const terms = {
    DE: {
      ankerwinde_singular: 'Ankerwinde',
      ankerwinde_plural: 'Ankerwinden',
      winch_singular: 'Winch',
      winch_plural: 'Winches',
      horn: 'Horn'
    },
    EN: {
      ankerwinde_singular: 'Anchor Winch',
      ankerwinde_plural: 'Anchor Winches',
      winch_singular: 'Winch',
      winch_plural: 'Winches',
      horn: 'Horn'
    },
    FR: {
      ankerwinde_singular: 'Guindeau',
      ankerwinde_plural: 'Guindeaux',
      winch_singular: 'Treuil',
      winch_plural: 'Treuils',
      horn: 'Avertisseur sonore'
    }
  };
  return terms[language] || terms.DE;
};

// Formats a group (1 or 2 units) of extra-hardware types into a readable
// label, e.g. ['Ankerwinde','Ankerwinde'] -> '2 Ankerwinden' (DE) or '2 Anchor Winches' (EN),
// ['Ankerwinde','Winch'] -> '1 Ankerwinde, 1 Winch' (DE) or '1 Anchor Winch, 1 Winch' (EN).
const formatExtraGroup = (group, language = 'DE') => {
  const terms = getExtraTerms(language);
  const counts = {};
  group.forEach((type) => { counts[type] = (counts[type] || 0) + 1; });

  const parts = [];
  if (counts.Ankerwinde) {
    if (counts.Ankerwinde === 1) {
      parts.push(`1 ${terms.ankerwinde_singular}`);
    } else {
      parts.push(`${counts.Ankerwinde} ${terms.ankerwinde_plural}`);
    }
  }
  if (counts.Winch) {
    if (counts.Winch === 1) {
      parts.push(`1 ${terms.winch_singular}`);
    } else {
      parts.push(`${counts.Winch} ${terms.winch_plural}`);
    }
  }
  if (counts.Horn) {
    parts.push(`1 ${terms.horn}`);
  }
  return parts.join(', ');
};

// Translates device type names (ECU, TCU, ACU, WCU) and their descriptions
// to the target language. Order matters: longer/more specific phrases must be
// replaced before shorter ones they contain.
const translateDeviceDescription = (description, language = 'DE') => {
  if (language === 'DE') return description;
  
  let result = description;
  const terms = getExtraTerms(language);
  
  // Replace longer/more specific phrases first to avoid partial replacements
  // Ankerwinde variants (longer first)
  result = result.replace(/2 Ankerwinden/g, `2 ${terms.ankerwinde_plural}`);
  result = result.replace(/1 Ankerwinde/g, `1 ${terms.ankerwinde_singular}`);
  result = result.replace(/Ankerwinden/g, terms.ankerwinde_plural);
  result = result.replace(/Ankerwinde/g, terms.ankerwinde_singular);
  
  // Winch variants (longer first)
  result = result.replace(/2 Winches/g, `2 ${terms.winch_plural}`);
  result = result.replace(/1 Winch/g, `1 ${terms.winch_singular}`);
  result = result.replace(/Winches/g, terms.winch_plural);
  result = result.replace(/Winch/g, terms.winch_singular);
  
  // Thruster names
  result = result.replace(/Bugstrahlruder/g, language === 'EN' ? 'Bow Thruster' : "Hélice d'étrave");
  result = result.replace(/Heckstrahlruder/g, language === 'EN' ? 'Stern Thruster' : 'Hélice de poupe');
  
  // Horn
  result = result.replace(/Horn/g, terms.horn);
  
  return result;
};

export const calculateDevices = (ecuSelection, thrusters = [], extras = {}, tcuManufacturer = '', installationService = false, language = 'DE', countryName = '') => {
  const useCHF = isCHCountry(countryName);
  const devices = [];
  
  if (ecuSelection) {
    const ecuDesc = `ECU (${ecuSelection})`;
    devices.push({ 
      type: 'ECU', 
      description: translateDeviceDescription(ecuDesc, language), 
      netPrice: useCHF ? deviceGrossPricesCHF.ECU : roundPrice(devicePrices.ECU),
      isFixedGross: useCHF
    });
  }

  // Keep thruster order consistent (Bugstrahlruder before Heckstrahlruder)
  const orderedThrusters = [...thrusters].sort((a, b) => {
    const order = ['Bugstrahlruder', 'Heckstrahlruder'];
    return order.indexOf(a) - order.indexOf(b);
  });
  const thrusterCount = orderedThrusters.length;

  const extraPool = buildExtraPool(extras);

  const mfgMatch = tcuManufacturer?.toLowerCase() || '';
  const isProportional = mfgMatch.includes('proportional');

  let needsTcu = false;
  let needsAcu = false;
  let consumedAcuExtra = null;
  const remainingPool = [...extraPool];

  if (thrusterCount === 0) {
    // No ACU, handled exclusively via WCU loop below
  } else if (thrusterCount === 1) {
    if (extraPool.length === 0) {
      needsTcu = true;
    } else {
      if (isProportional) {
        needsTcu = true;
      } else {
        needsAcu = true;
        consumedAcuExtra = remainingPool.shift();
      }
    }
  } else if (thrusterCount === 2) {
    needsTcu = true;
  }

  if (needsTcu) {
    const tcuDesc = `TCU (${orderedThrusters.join(', ')})`;
    devices.push({ 
      type: 'TCU', 
      description: translateDeviceDescription(tcuDesc, language), 
      netPrice: useCHF ? deviceGrossPricesCHF.TCU : roundPrice(devicePrices.TCU),
      isFixedGross: useCHF
    });
  }

  if (needsAcu) {
    const acuDesc = `ACU (${orderedThrusters[0]}, ${consumedAcuExtra})`;
    devices.push({ 
      type: 'ACU', 
      description: translateDeviceDescription(acuDesc, language), 
      netPrice: useCHF ? deviceGrossPricesCHF.ACU : roundPrice(devicePrices.ACU),
      isFixedGross: useCHF
    });
  }

  while (remainingPool.length > 0) {
    const group = remainingPool.splice(0, 2);
    devices.push({ 
      type: 'WCU', 
      description: `WCU (${formatExtraGroup(group, language)})`, 
      netPrice: useCHF ? deviceGrossPricesCHF.WCU : roundPrice(devicePrices.WCU),
      isFixedGross: useCHF
    });
  }

  if (installationService) {
    const installationServiceLabel = language === 'FR' ? "Service d'installation" : 
                                     language === 'EN' ? 'Installation Service' : 
                                     'Einbauservice';
    devices.push({
      type: 'INSTALLATION',
      description: installationServiceLabel,
      netPrice: useCHF ? INSTALLATION_SERVICE_PRICE_CHF : roundPrice(INSTALLATION_SERVICE_PRICE),
      isFixedGross: useCHF
    });
  }

  return devices;
};

export const calculateTotal = (devicePlan, countryName, actionCode) => {
  const country = countryData[countryName] || countryData["Other"];
  
  // Calculate gross price per line item and sum them up to prevent floating-point mismatches
  const deviceLines = devicePlan.map(d => {
    // For Switzerland with fixed CHF prices, the netPrice IS already the gross price
    const grossPrice = d.isFixedGross
      ? roundPrice(d.netPrice)
      : calculateGrossPrice(d.netPrice, country.vat, country.rate);
    return { ...d, grossPrice };
  });

  let subtotalGross = 0;
  deviceLines.forEach(d => {
    subtotalGross = roundPrice(subtotalGross + d.grossPrice);
  });

  let bulkDiscountGross = 0;
  const hasECU = devicePlan.some(d => d.type === 'ECU');
  const hasOthers = devicePlan.some(d => ['TCU', 'ACU', 'WCU'].includes(d.type));
  if (hasECU && hasOthers && !isCHCountry(countryName)) {
    bulkDiscountGross = roundPrice(500 * country.rate);
  }

  let actionDiscountGross = 0;
  if (actionCode?.trim().toUpperCase() === 'PIBS26') {
    actionDiscountGross = roundPrice((subtotalGross - bulkDiscountGross) * 0.10);
  }

  const totalGross = roundPrice(subtotalGross - bulkDiscountGross - actionDiscountGross);

  return {
    deviceLines,
    subtotalGross,
    bulkDiscountGross,
    actionDiscountGross,
    totalGross,
    currency: country.currency,
    vat: country.vat
  };
};

export const getConfigurationWithPrices = (selectedProducts, thrusterManufacturer, countryName, actionCode, installationService = false, language = 'DE') => {
  try {
    const extras = {
      acu: selectedProducts?.acu,
      wcu: selectedProducts?.wcu,
      horn: selectedProducts?.horn
    };
    const devicePlan = calculateDevices(selectedProducts?.ecu, selectedProducts?.tcu || [], extras, thrusterManufacturer, installationService, language, countryName);
    const totals = calculateTotal(devicePlan, countryName, actionCode);

    const items = totals.deviceLines.map(d => ({
      name: d.description,
      price: roundPrice(d.grossPrice)
    }));

    return {
      items,
      subtotal: roundPrice(totals.subtotalGross),
      bundleDiscount: roundPrice(-totals.bulkDiscountGross), // Store as negative value
      totalPrice: roundPrice(totals.totalGross),
      vat: totals.vat,
      currency: totals.currency
    };
  } catch (error) {
    console.error("Error calculating configuration prices:", error);
    return { items: [], subtotal: 0, bundleDiscount: 0, totalPrice: 0, vat: 19 };
  }
};
