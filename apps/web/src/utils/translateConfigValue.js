
import { translation_EN } from '@/utils/translations/translation_EN.js';
import { translation_FR } from '@/utils/translations/translation_FR.js';

// Ordered list of German phrase -> English/French phrase replacements.
// Order matters: longer/more specific phrases must be listed before
// shorter ones they contain (e.g. "2+ Motoren" before "Motoren" before "Motor"),
// so composite strings like "TCU (Bugstrahlruder & Heckstrahlruder)" or
// "ECU (2+ Motoren)" get fully translated, not just exact-matched values.
const PHRASE_REPLACEMENTS_EN = [
  ['Bugstrahlruder', 'Bow Thruster'],
  ['Heckstrahlruder', 'Stern Thruster'],
  ['1 elektr. Ankerwinde', '1 Elec. Anchor Winch'],
  ['2 elektr. Ankerwinden', '2 Elec. Anchor Winches'],
  ['1 elektr. Winch', '1 Elec. Winch'],
  ['2 elektr. Winches', '2 Elec. Winches'],
  ['2 Winches', '2 Elec. Winches'],
  ['1 Winch', '1 Elec. Winch'],
  ['Winches', 'Elec. Winches'],
  ['Winch', 'Elec. Winch'],
  ['2 Ankerwinden', '2 Anchor Winches'],
  ['1 Ankerwinde', '1 Anchor Winch'],
  ['Ankerwinden', 'Anchor Winches'],
  ['Ankerwinde', 'Anchor Winch'],
  ['2+ Motoren', '2+ Engines'],
  ['3 Motoren', '3 Engines'],
  ['2 Motoren', '2 Engines'],
  ['1 Motor', '1 Engine'],
  ['Motoren', 'Engines'],
  ['Motor', 'Engine'],
  ['Einbauservice', 'Installation Service'],
  ['Weitere auf Anfrage', 'Others on Request'],
  ['Belgien', 'Belgium'],
  ['Bulgarien', 'Bulgaria'],
  ['Dänemark', 'Denmark'],
  ['Deutschland', 'Germany'],
  ['Estland', 'Estonia'],
  ['Finnland', 'Finland'],
  ['Frankreich', 'France'],
  ['Griechenland', 'Greece'],
  ['Irland', 'Ireland'],
  ['Italien', 'Italy'],
  ['Kroatien', 'Croatia'],
  ['Lettland', 'Latvia'],
  ['Litauen', 'Lithuania'],
  ['Luxemburg', 'Luxembourg'],
  ['Malta', 'Malta'],
  ['Niederlande', 'Netherlands'],
  ['Österreich', 'Austria'],
  ['Polen', 'Poland'],
  ['Portugal', 'Portugal'],
  ['Rumänien', 'Romania'],
  ['Schweden', 'Sweden'],
  ['Schweiz', 'Switzerland'],
  ['Slowakei', 'Slovakia'],
  ['Slowenien', 'Slovenia'],
  ['Spanien', 'Spain'],
  ['Tschechien', 'Czech Republic'],
  ['Ungarn', 'Hungary'],
  ['Zypern', 'Cyprus'],
  ['Ja', 'Yes'],
  ['Nein', 'No']
];

const PHRASE_REPLACEMENTS_FR = [
  ['Bugstrahlruder', "Hélice d'étrave"],
  ['Heckstrahlruder', 'Hélice de poupe'],
  ['1 elektr. Ankerwinde', '1 guindeau électrique'],
  ['2 elektr. Ankerwinden', '2 guindeaux électriques'],
  ['1 elektr. Winch', '1 treuil électrique'],
  ['2 elektr. Winches', '2 treuils électriques'],
  ['2 Winches', '2 treuils électriques'],
  ['1 Winch', '1 treuil électrique'],
  ['Winches', 'treuils électriques'],
  ['Winch', 'treuil'],
  ['2 Ankerwinden', '2 guindeaux'],
  ['1 Ankerwinde', '1 guindeau'],
  ['Ankerwinden', 'guindeaux'],
  ['Ankerwinde', 'guindeau'],
  ['2+ Motoren', '2 moteurs ou plus'],
  ['3 Motoren', '3 moteurs'],
  ['2 Motoren', '2 moteurs'],
  ['1 Motor', '1 moteur'],
  ['Motoren', 'moteurs'],
  ['Motor', 'moteur'],
  ['Einbauservice', "Service d'installation"],
  ['Weitere auf Anfrage', 'Autres sur demande'],
  ['Belgien', 'Belgique'],
  ['Bulgarien', 'Bulgarie'],
  ['Dänemark', 'Danemark'],
  ['Deutschland', 'Allemagne'],
  ['Estland', 'Estonie'],
  ['Finnland', 'Finlande'],
  ['Frankreich', 'France'],
  ['Griechenland', 'Grèce'],
  ['Irland', 'Irlande'],
  ['Italien', 'Italie'],
  ['Kroatien', 'Croatie'],
  ['Lettland', 'Lettonie'],
  ['Litauen', 'Lituanie'],
  ['Luxemburg', 'Luxembourg'],
  ['Malta', 'Malte'],
  ['Niederlande', 'Pays-Bas'],
  ['Österreich', 'Autriche'],
  ['Polen', 'Pologne'],
  ['Portugal', 'Portugal'],
  ['Rumänien', 'Roumanie'],
  ['Schweden', 'Suède'],
  ['Schweiz', 'Suisse'],
  ['Slowakei', 'Slovaquie'],
  ['Slowenien', 'Slovénie'],
  ['Spanien', 'Espagne'],
  ['Tschechien', 'République tchèque'],
  ['Ungarn', 'Hongrie'],
  ['Zypern', 'Chypre'],
  ['Ja', 'Oui'],
  ['Nein', 'Non']
];

// Exact full-value matches for stored configurator values that don't map
// 1:1 to a translation key (e.g. answers persisted verbatim in German).
const EXACT_MATCHES_EN = {
  'Ja, ein Joystick ist vorhanden': 'Yes, a joystick is available',
  'Nein, nur Gashebel': 'No, throttle only',
  'MerCruiser Bj 2016': 'MerCruiser Built 2016 (Sterndrive or Zeus)'
};

const EXACT_MATCHES_FR = {
  'Ja, ein Joystick ist vorhanden': 'Oui, un joystick est présent',
  'Nein, nur Gashebel': 'Non, seulement une manette des gaz',
  'MerCruiser Bj 2016': 'MerCruiser 2016 (propulsion en Z ou Zeus)'
};

export const translateConfigValue = (value, isEN, isFR = false) => {
  if (!value || typeof value !== 'string') return value;
  if (!isEN && !isFR) return value;

  const exactMatches = isFR ? EXACT_MATCHES_FR : EXACT_MATCHES_EN;
  if (exactMatches[value]) {
    return exactMatches[value];
  }

  // Exact full-string match against translation dictionary takes priority.
  const dict = isFR ? translation_FR : translation_EN;
  if (dict && dict[value]) {
    return dict[value];
  }

  let result = value;
  const replacements = isFR ? PHRASE_REPLACEMENTS_FR : PHRASE_REPLACEMENTS_EN;
  replacements.forEach(([de, translated]) => {
    if (result.includes(de)) {
      result = result.split(de).join(translated);
    }
  });

  return result;
};
