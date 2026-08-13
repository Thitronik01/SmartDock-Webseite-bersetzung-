
export const translateCountryName = (country, language) => {
  const isEN = language === 'EN';
  const isFR = language === 'FR';
  if ((!isEN && !isFR) || !country) return country;

  const countryMapEN = {
    'Deutschland': 'Germany',
    'Österreich': 'Austria',
    'Schweiz': 'Switzerland',
    'Belgien': 'Belgium',
    'Bulgarien': 'Bulgaria',
    'Kroatien': 'Croatia',
    'Zypern': 'Cyprus',
    'Tschechien': 'Czech Republic',
    'Dänemark': 'Denmark',
    'Estland': 'Estonia',
    'Finnland': 'Finland',
    'Frankreich': 'France',
    'Griechenland': 'Greece',
    'Ungarn': 'Hungary',
    'Irland': 'Ireland',
    'Italien': 'Italy',
    'Lettland': 'Latvia',
    'Litauen': 'Lithuania',
    'Luxemburg': 'Luxembourg',
    'Malta': 'Malta',
    'Niederlande': 'Netherlands',
    'Polen': 'Poland',
    'Portugal': 'Portugal',
    'Rumänien': 'Romania',
    'Slowakei': 'Slovakia',
    'Slowenien': 'Slovenia',
    'Spanien': 'Spain',
    'Schweden': 'Sweden',
    'NON-EU (Export)': 'NON-EU (Export)'
  };

  const countryMapFR = {
    'Deutschland': 'Allemagne',
    'Österreich': 'Autriche',
    'Schweiz': 'Suisse',
    'Belgien': 'Belgique',
    'Bulgarien': 'Bulgarie',
    'Kroatien': 'Croatie',
    'Zypern': 'Chypre',
    'Tschechien': 'République tchèque',
    'Dänemark': 'Danemark',
    'Estland': 'Estonie',
    'Finnland': 'Finlande',
    'Frankreich': 'France',
    'Griechenland': 'Grèce',
    'Ungarn': 'Hongrie',
    'Irland': 'Irlande',
    'Italien': 'Italie',
    'Lettland': 'Lettonie',
    'Litauen': 'Lituanie',
    'Luxemburg': 'Luxembourg',
    'Malta': 'Malte',
    'Niederlande': 'Pays-Bas',
    'Polen': 'Pologne',
    'Portugal': 'Portugal',
    'Rumänien': 'Roumanie',
    'Slowakei': 'Slovaquie',
    'Slowenien': 'Slovénie',
    'Spanien': 'Espagne',
    'Schweden': 'Suède',
    'NON-EU (Export)': 'HORS-UE (Export)'
  };

  const map = isFR ? countryMapFR : countryMapEN;
  return map[country] || country;
};

export const translateProductName = (product, language) => {
  const isEN = language === 'EN';
  const isFR = language === 'FR';
  if ((!isEN && !isFR) || !product) return product;

  const productMapEN = {
    'Einbauservice': 'Installation Service',
    'Bugstrahlruder': 'Bow Thruster',
    'Heckstrahlruder': 'Stern Thruster',
    '1 Motor': '1 Engine',
    '2+ Motoren': '2+ Engines',
    '1 elektr. Ankerwinde': '1 Elec. Anchor Winch',
    '2 elektr. Ankerwinden': '2 Elec. Anchor Winches',
    '1 elektr. Winch': '1 Elec. Winch',
    '2 elektr. Winches': '2 Elec. Winches',
    'Horn': 'Horn',
    'Ja': 'Yes',
    'Nein': 'No',
    'Motor': 'Engine',
    'Steuerung': 'Control',
    'ECU (1 Motor)': 'ECU (1 Engine)',
    'ECU (2 Motoren)': 'ECU (2+ Engines)',
    'ECU (2+ Motoren)': 'ECU (2+ Engines)',
    'ECU (3 Motoren)': 'ECU (3 Engines)',
    'TCU (Heckstrahlruder)': 'TCU (Stern Thruster)',
    'TCU (Bugstrahlruder)': 'TCU (Bow Thruster)',
    'ACU': 'ACU',
    'WCU': 'WCU',
    'Ankerwinde 1': 'Anchor Winch 1',
    'Ankerwinde 2': 'Anchor Winch 2',
    'Ankerwinch 1': 'Anchor Winch 1',
    'Ankerwinch 2': 'Anchor Winch 2'
  };

  const productMapFR = {
    'Einbauservice': "Service d'installation",
    'Bugstrahlruder': "Hélice d'étrave",
    'Heckstrahlruder': 'Hélice de poupe',
    '1 Motor': '1 moteur',
    '2+ Motoren': '2 moteurs ou plus',
    '1 elektr. Ankerwinde': '1 guindeau électrique',
    '2 elektr. Ankerwinden': '2 guindeaux électriques',
    '1 elektr. Winch': '1 treuil électrique',
    '2 elektr. Winches': '2 treuils électriques',
    'Horn': 'Avertisseur sonore',
    'Ja': 'Oui',
    'Nein': 'Non',
    'Motor': 'Moteur',
    'Steuerung': 'Commande',
    'ECU (1 Motor)': 'ECU (1 moteur)',
    'ECU (2 Motoren)': 'ECU (2 moteurs ou plus)',
    'ECU (2+ Motoren)': 'ECU (2 moteurs ou plus)',
    'ECU (3 Motoren)': 'ECU (3 moteurs)',
    'TCU (Heckstrahlruder)': 'TCU (Hélice de poupe)',
    'TCU (Bugstrahlruder)': "TCU (Hélice d'étrave)",
    'ACU': 'ACU',
    'WCU': 'WCU',
    'Ankerwinde 1': 'Guindeau 1',
    'Ankerwinde 2': 'Guindeau 2',
    'Ankerwinch 1': 'Guindeau 1',
    'Ankerwinch 2': 'Guindeau 2'
  };

  const map = isFR ? productMapFR : productMapEN;
  return map[product] || product;
};
