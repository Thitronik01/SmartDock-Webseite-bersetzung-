
import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { formatPriceByCurrency } from '@/utils/PriceCalculator.js';
import { translateConfigValue } from '@/utils/translateConfigValue.js';

const translations = {
  summary_inquiry: { DE: 'Zusammenfassung & Anfrage', EN: 'Summary & Inquiry', FR: 'Résumé & demande' },
  your_configuration: { DE: 'Ihre Konfiguration', EN: 'Your Configuration', FR: 'Votre configuration' },
  engine: { DE: 'Motor', EN: 'Engine', FR: 'Moteur' },
  control: { DE: 'Steuerung', EN: 'Control', FR: 'Commande' },
  selected_modules: { DE: 'Ausgewählte Module', EN: 'Selected Modules', FR: 'Modules sélectionnés' },
  contact_info: { DE: 'Kontaktdaten', EN: 'Contact Information', FR: 'Coordonnées' },
  install_service: { DE: 'Einbauservice', EN: 'Installation Service', FR: "Service d'installation" },
  price: { DE: 'Preis', EN: 'Price', FR: 'Prix' },
  total_price: { DE: 'Gesamtpreis', EN: 'Total Price', FR: 'Prix total' },
  discount: { DE: 'Rabatt', EN: 'Discount', FR: 'Remise' },
  subtotal: { DE: 'Netto', EN: 'Subtotal', FR: 'Sous-total' },
  vat: { DE: 'MwSt.', EN: 'VAT', FR: 'TVA' },
  gross: { DE: 'Brutto', EN: 'Gross Total', FR: 'Total brut' },
  ref_number: { DE: 'Referenznummer', EN: 'Reference Number', FR: 'Numéro de référence' },
  date: { DE: 'Datum', EN: 'Date', FR: 'Date' },
  yes: { DE: 'Ja', EN: 'Yes', FR: 'Oui' },
  no: { DE: 'Nein', EN: 'No', FR: 'Non' },
  num_engines: { DE: 'Anzahl Motoren', EN: 'Number of Engines', FR: 'Nombre de moteurs' },
  thrusters: { DE: 'Bug-/Heckstrahlruder', EN: 'Bow/Stern Thruster', FR: "Hélice d'étrave/de poupe" },
  included: { DE: 'inklusive', EN: 'included', FR: 'inclus' },
  country: { DE: 'Land', EN: 'Country', FR: 'Pays' },
  joystick: { DE: 'Joystick', EN: 'Joystick', FR: 'Joystick' },
  joystick_model: { DE: 'Joystick-Modell', EN: 'Joystick Model', FR: 'Modèle de joystick' },
  system: { DE: 'System', EN: 'System', FR: 'Système' },
  dealer: { DE: 'Ausgewählter Händler', EN: 'Selected Dealer', FR: 'Revendeur sélectionné' },
  contact_name: { DE: 'Name', EN: 'Name', FR: 'Nom' },
  contact_email: { DE: 'E-Mail', EN: 'Email', FR: 'E-mail' },
  contact_phone: { DE: 'Telefon', EN: 'Phone', FR: 'Téléphone' },
  contact_company: { DE: 'Firma', EN: 'Company', FR: 'Entreprise' },
  contact_address: { DE: 'Adresse', EN: 'Address', FR: 'Adresse' },
  contact_street: { DE: 'Straße', EN: 'Street', FR: 'Rue' },
  contact_city: { DE: 'Stadt', EN: 'City', FR: 'Ville' },
  contact_postal_code: { DE: 'PLZ', EN: 'Postal Code', FR: 'Code postal' },
  contact_country: { DE: 'Land', EN: 'Country', FR: 'Pays' },
  no_dealer: { DE: 'Kein Einbauservice', EN: 'No installation service', FR: "Pas de service d'installation" },
  disclaimer: { 
    DE: 'Die angezeigten Preise sind unverbindliche Preisempfehlungen inkl. der gesetzlichen Mehrwertsteuer.', 
    EN: 'Displayed prices are non-binding recommended retail prices incl. VAT.',
    FR: 'Les prix affichés sont des prix conseillés sans engagement, TVA légale incluse.'
  }
};

const getTranslationForPDF = (key, isEN, isFR) => {
  return translations[key]?.[isFR ? 'FR' : (isEN ? 'EN' : 'DE')] || key;
};

export const usePDFGenerator = (isEN = false, isFR = false) => {
  const configurator = useConfigurator();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const { 
        priceData, 
        engineManufacturer, 
        configData, 
        thrusterManufacturer, 
        thrusterType,
        installationService,
        selectedCountry,
        merCruiserJoystick,
        merCruiserSystem,
        yamahaJoystick,
        yamahaSystem,
        volvoPentaJoystick,
        volvoPentaJoystickModel,
        volvoPentaSingleSystem,
        volvoPentaSystem,
        selectedDealer,
        contactData
      } = configurator;

      const dateStr = new Date().toISOString().split('T')[0];

      // Create a temporary container for the PDF content
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '800px';
      container.style.backgroundColor = '#ffffff';
      container.style.color = '#171717';
      container.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      container.style.padding = '60px';
      container.style.boxSizing = 'border-box';

      // Build items list
      const itemsHtml = priceData.configurationPrices.map(item => {
        const itemName = item.name === 'Einbauservice' 
          ? getTranslationForPDF('install_service', isEN, isFR)
          : translateConfigValue(item.name, isEN, isFR);
          
        return `
          <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
            <span style="font-weight: 500; color: #404040;">${itemName}</span>
            <span style="font-weight: 600;">${formatPriceByCurrency(item.price, priceData?.currency)}</span>
          </div>
        `;
      }).join('');

      // Build specs
      let specsHtml = '';
      if (engineManufacturer) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('engine', isEN, isFR)}</div>
            <div style="font-weight: 600;">${engineManufacturer}</div>
          </div>
        `;
      }
      if (configData?.motorCount > 0) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('num_engines', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(configData.motorCount === 1 ? '1 Motor' : '2+ Motoren', isEN, isFR)}</div>
          </div>
        `;
      }
      // Manufacturer-specific joystick/system details
      const joystickValue = merCruiserJoystick || yamahaJoystick || volvoPentaJoystick || '';
      if (joystickValue) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('joystick', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(joystickValue, isEN, isFR)}</div>
          </div>
        `;
      }
      if (volvoPentaJoystickModel) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('joystick_model', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(volvoPentaJoystickModel, isEN, isFR)}</div>
          </div>
        `;
      }
      const systemValue = merCruiserSystem || yamahaSystem || volvoPentaSingleSystem || volvoPentaSystem || '';
      if (systemValue) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('system', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(systemValue, isEN, isFR)}</div>
          </div>
        `;
      }
      if (thrusterManufacturer) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('thrusters', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(thrusterManufacturer, isEN, isFR)}${thrusterType ? ` (${translateConfigValue(thrusterType, isEN, isFR)})` : ''}</div>
          </div>
        `;
      }
      if (selectedCountry) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('country', isEN, isFR)}</div>
            <div style="font-weight: 600;">${translateConfigValue(selectedCountry, isEN, isFR)}</div>
          </div>
        `;
      }
      specsHtml += `
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
          <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('install_service', isEN, isFR)}</div>
          <div style="font-weight: 600;">${installationService ? getTranslationForPDF('yes', isEN, isFR) : getTranslationForPDF('no', isEN, isFR)}</div>
        </div>
      `;
      if (installationService && selectedDealer) {
        specsHtml += `
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
            <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('dealer', isEN, isFR)}</div>
            <div style="font-weight: 600;">${selectedDealer.name || ''}</div>
          </div>
        `;
      }

      // Contact information block
      let contactHtml = '';
      if (contactData) {
        const fullName = [contactData.firstName, contactData.lastName].filter(Boolean).join(' ');
        const addressParts = [
          [contactData.street, contactData.houseNumber].filter(Boolean).join(' '),
          [contactData.postalCode, contactData.city].filter(Boolean).join(' '),
          translateConfigValue(contactData.country, isEN, isFR)
        ].filter(Boolean);

        if (fullName) {
          contactHtml += `
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
              <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('contact_name', isEN, isFR)}</div>
              <div style="font-weight: 600;">${fullName}</div>
            </div>
          `;
        }
        if (contactData.company) {
          contactHtml += `
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
              <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('contact_company', isEN, isFR)}</div>
              <div style="font-weight: 600;">${contactData.company}</div>
            </div>
          `;
        }
        if (contactData.email) {
          contactHtml += `
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
              <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('contact_email', isEN, isFR)}</div>
              <div style="font-weight: 600;">${contactData.email}</div>
            </div>
          `;
        }
        if (contactData.phone) {
          contactHtml += `
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
              <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">${getTranslationForPDF('contact_phone', isEN, isFR)}</div>
              <div style="font-weight: 600;">${contactData.phone}</div>
            </div>
          `;
        }
        if (addressParts.length > 0) {
          const streetLine = [contactData.street, contactData.houseNumber].filter(Boolean).join(' ');
          const cityLine = [contactData.postalCode, contactData.city].filter(Boolean).join(' ');
          const countryLine = translateConfigValue(contactData.country, isEN, isFR);

          contactHtml += `
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 12px;">
              <div style="font-size: 12px; color: #737373; margin-bottom: 8px;">${getTranslationForPDF('contact_address', isEN, isFR)}</div>
              ${streetLine ? `
                <div style="font-size: 11px; color: #a3a3a3; margin-top: 6px;">${getTranslationForPDF('contact_street', isEN, isFR)}</div>
                <div style="font-weight: 600;">${streetLine}</div>
              ` : ''}
              ${cityLine ? `
                <div style="font-size: 11px; color: #a3a3a3; margin-top: 6px;">${getTranslationForPDF('contact_city', isEN, isFR)}</div>
                <div style="font-weight: 600;">${cityLine}</div>
              ` : ''}
              ${countryLine ? `
                <div style="font-size: 11px; color: #a3a3a3; margin-top: 6px;">${getTranslationForPDF('contact_country', isEN, isFR)}</div>
                <div style="font-weight: 600;">${countryLine}</div>
              ` : ''}
            </div>
          `;
        }
      }

      const discountHtml = priceData.bundleDiscount < 0 ? `
        <div style="display: flex; justify-content: space-between; font-size: 14px; color: #0284c7; font-weight: 500; margin-bottom: 8px;">
          <span>${getTranslationForPDF('discount', isEN, isFR)}</span>
          <span>${formatPriceByCurrency(priceData.bundleDiscount, priceData?.currency)}</span>
        </div>
      ` : '';

      container.innerHTML = `
        <div style="max-width: 100%; margin: 0 auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #171717; padding-bottom: 24px; margin-bottom: 40px;">
            <div>
              <h1 style="font-size: 32px; font-weight: 800; letter-spacing: -0.02em; margin: 0; color: #171717;">SMARTDOCK</h1>
              <p style="color: #737373; margin: 8px 0 0 0; font-size: 16px;">${getTranslationForPDF('summary_inquiry', isEN, isFR)}</p>
            </div>
            <div style="text-align: right; color: #737373; font-size: 14px;">
              <p style="margin: 0 0 4px 0;">${getTranslationForPDF('date', isEN, isFR)}: ${new Date().toLocaleDateString(isFR ? 'fr-FR' : (isEN ? 'en-US' : 'de-DE'))}</p>
            </div>
          </div>

          <div style="display: flex; gap: 40px; margin-bottom: 40px;">
            <div style="flex: 2;">
              <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: #171717;">${getTranslationForPDF('selected_modules', isEN, isFR)}</h2>
              <div>
                ${itemsHtml}
              </div>
            </div>
            
            <div style="flex: 1;">
              <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: #171717;">${getTranslationForPDF('your_configuration', isEN, isFR)}</h2>
              ${specsHtml}
            </div>
          </div>

          ${contactHtml ? `
          <div style="margin-bottom: 40px;">
            <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: #171717;">${getTranslationForPDF('contact_info', isEN, isFR)}</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              ${contactHtml}
            </div>
          </div>
          ` : ''}

          <div style="background: #fafafa; border-radius: 12px; padding: 32px; margin-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: #737373; margin-bottom: 8px;">
              <span>${getTranslationForPDF('subtotal', isEN, isFR)}</span>
              <span style="font-weight: 500; color: #171717;">${formatPriceByCurrency(priceData.subtotal, priceData?.currency)}</span>
            </div>
            
            ${discountHtml}

            <div style="display: flex; justify-content: space-between; font-size: 14px; color: #737373; padding-bottom: 16px; border-bottom: 1px solid #e5e5e5; margin-bottom: 16px;">
              <span>${getTranslationForPDF('vat', isEN, isFR)} (${priceData.vat}%)</span>
              <span>${getTranslationForPDF('included', isEN, isFR)}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <span style="font-size: 18px; font-weight: 700; color: #171717;">${getTranslationForPDF('total_price', isEN, isFR)}</span>
              <span style="font-size: 28px; font-weight: 800; color: #0284c7;">${formatPriceByCurrency(priceData.totalPrice, priceData?.currency)}</span>
            </div>
          </div>

          <div style="text-align: center; color: #a3a3a3; font-size: 12px; border-top: 1px solid #e5e5e5; padding-top: 24px;">
            <p style="margin: 0 0 4px 0;">${getTranslationForPDF('disclaimer', isEN, isFR)}</p>
            <p style="margin: 0;">www.thitronik.de • smartdock@thitronik.de</p>
          </div>
        </div>
      `;

      document.body.appendChild(container);

      // Wait a moment for fonts/layout to settle
      await new Promise(resolve => setTimeout(resolve, 200));

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      document.body.removeChild(container);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`SMARTDOCK-Configuration-${dateStr}.pdf`);

    } catch (error) {
      console.error("PDF generation failed:", error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  return { generatePDF, isGenerating };
};
