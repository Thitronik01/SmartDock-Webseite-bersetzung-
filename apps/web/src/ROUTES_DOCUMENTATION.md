
# SMARTDOCK Routes Documentation

This document provides a comprehensive overview of all routes and pages in the SMARTDOCK application.

## Route Overview Table

| Page Name | Route Path | German Content | Content Description |
|-----------|-----------|----------------|---------------------|
| HomePage | `/` | Yes | Main landing page with hero section, product intro, app showcase, modules overview, dealer finder preview, configurator preview, app download section, and contact form |
| ConfiguratorPage | `/konfigurator` | Yes | Multi-step product configuration wizard for SMARTDOCK system customization |
| DealerFinderPage | `/haendlerfinder` | Yes | Interactive map and list view for finding authorized SMARTDOCK dealers with filtering by country, city, and postal code |
| FAQPage | `/faq` | Yes | Frequently asked questions with accordion-style answers (content loaded from PocketBase `faqs` collection) |
| ProduktPage | `/produkt` | Yes | Detailed product information page with zig-zag layout showcasing SMARTDOCK features, ECU/TCU modules, and compatibility information |
| FunktionenPage | `/funktionen` | Yes | Features page highlighting app interface, control modes (BoatDrag, Controller, Anchor), and safety functions |
| InstallationPage | `/installation` | Yes | Installation guides and documentation for ECU and TCU modules (content loaded from PocketBase `anleitungen` collection) |
| PrivacyPage | `/datenschutz` | Yes | Privacy policy and data protection information (GDPR compliance) |
| ImpressumPage | `/impressum` | Yes | Legal imprint with company information, contact details, and regulatory information |
| AGBPage | `/agb` | Yes | Terms and conditions (Allgemeine Geschäftsbedingungen) and customer information |
| AccessibilityPage | `/barrierefreiheit` | Yes | Accessibility statement (Barrierefreiheitserklärung) according to German law |
| WiderrufsbelehrungPage | `/widerrufsbelehrung` | Yes | Right of withdrawal information with printable withdrawal form template |
| VersandbedingungPage | `/versandbedingungen` | Yes | Shipping and payment terms including delivery areas, shipping costs, and payment methods |

## Route Configuration

All routes are defined in `apps/web/src/App.jsx` using React Router v7. The application uses a catch-all route (`*`) that redirects to the HomePage for any undefined paths.

## Page Structure

### Main Pages (Public Access)

1. **HomePage** (`/`)
   - Hero section with value proposition
   - SMARTDOCK system introduction
   - App interface showcase
   - Module overview (ECU/TCU)
   - Dealer finder preview
   - Configurator preview
   - App download section
   - Contact form

2. **ConfiguratorPage** (`/konfigurator`)
   - Multi-step wizard interface
   - Country selection
   - System and manufacturer selection
   - Component configuration
   - Price calculation
   - Contact form submission
   - Dealer assignment

3. **DealerFinderPage** (`/haendlerfinder`)
   - Interactive OpenStreetMap integration
   - Dealer list with filtering
   - GPS location support
   - Dealer detail cards
   - Mobile-responsive map/list toggle

4. **FAQPage** (`/faq`)
   - Dynamic content from PocketBase
   - Accordion-style Q&A interface
   - Ordered by `order` field
   - Error handling with retry functionality

### Product Information Pages

5. **ProduktPage** (`/produkt`)
   - Product overview
   - ECU (Engine Control Unit) details
   - TCU (Thruster Control Unit) details
   - Compatibility information
   - Float Magazine review reference
   - CTA sections

6. **FunktionenPage** (`/funktionen`)
   - App interface showcase
   - Control modes (BoatDrag One-Handed, Controller, Anchor)
   - Safety features
   - Smartphone gallery

7. **InstallationPage** (`/installation`)
   - Dynamic installation guides from PocketBase
   - Separate sections for ECU and TCU
   - PDF download functionality
   - Technical support CTA

### Legal Pages

8. **PrivacyPage** (`/datenschutz`)
   - GDPR compliance information
   - Data processing details
   - Cookie policy
   - Third-party services (Google Analytics, Cloudfront, etc.)
   - User rights information

9. **ImpressumPage** (`/impressum`)
   - Company legal information
   - Contact details
   - Management information
   - Trade register details
   - VAT ID and WEEE registration

10. **AGBPage** (`/agb`)
    - General terms and conditions
    - Customer information
    - Contract formation process
    - Warranty information
    - Legal framework

11. **AccessibilityPage** (`/barrierefreiheit`)
    - Accessibility statement
    - WCAG 2.1 compliance status
    - Known accessibility issues
    - Contact information for accessibility concerns
    - Dispute resolution process

12. **WiderrufsbelehrungPage** (`/widerrufsbelehrung`)
    - Right of withdrawal for consumers
    - Withdrawal period (14 days)
    - Withdrawal process
    - Return shipping information
    - Printable withdrawal form template

13. **VersandbedingungPage** (`/versandbedingungen`)
    - Delivery areas (Germany + EU countries)
    - Shipping costs (free shipping)
    - Delivery times
    - Payment methods (bank transfer, invoice, PayPal)

## Navigation Structure

### Header Navigation
- Home (/)
- Produkt (/produkt)
- Funktionen (/funktionen)
- Installation (/installation)
- FAQ (/faq)
- Händlerfinder (/haendlerfinder)
- Konfigurator (/konfigurator)

### Footer Navigation
- **Company**
  - Impressum (/impressum)
  - Datenschutz (/datenschutz)
  - AGB (/agb)
  - Barrierefreiheit (/barrierefreiheit)
  
- **Legal**
  - Widerrufsbelehrung (/widerrufsbelehrung)
  - Versandbedingungen (/versandbedingungen)

## Translation Status

### Current Implementation
- **Translation System**: Custom translation system using `<Translate>` component
- **Language Context**: `LanguageContext.jsx` manages current language state
- **Translation Hook**: `useTranslation.js` provides translation functionality
- **Translation Files**: Located in `apps/web/src/utils/translations/`
  - `translation_DE.js` (German - primary)
  - `translation_EN.js` (English)
  - `translation_ES.js` (Spanish)
  - `translation_FR.js` (French)
  - `translation_NL.js` (Dutch)

### Translation Coverage
All pages contain German content wrapped in `<Translate>` components. The translation system supports:
- Static text translation
- Dynamic content from PocketBase (FAQs, Installation guides)
- SEO meta tags (title, description)
- Form labels and placeholders
- Error messages and notifications

### Pages Requiring Translation Attention
All pages are already set up with the `<Translate>` component wrapper system. Translation keys are defined in the translation files under `apps/web/src/utils/translations/`.

## Technical Notes

### Routing Implementation
- Uses React Router v7 (`react-router-dom`)
- BrowserRouter for client-side routing
- Scroll restoration on route change
- Hash-based anchor navigation support (HomePage sections)

### SEO Implementation
- React Helmet for meta tags
- Unique title and description per page
- HrefLang tags for multi-language support
- Breadcrumb navigation on content pages

### Data Sources
- **Static Content**: Hardcoded in page components with `<Translate>` wrappers
- **Dynamic Content**: 
  - FAQs from `faqs` collection
  - Installation guides from `anleitungen` collection
  - Dealers from `dealers` collection
  - Configuration requests to `configuration_requests` collection

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile-specific features:
  - Tab navigation (DealerFinderPage)
  - Collapsible sections
  - Touch-optimized controls

## Future Considerations

### Potential Route Additions
- Admin dashboard (if authentication is implemented)
- User account pages
- Order tracking
- Product catalog with individual product pages
- Blog/News section

### Translation Expansion
- Complete translation coverage for all supported languages
- Dynamic content translation (FAQ answers, installation guide descriptions)
- Language-specific routing (e.g., `/en/product`, `/de/produkt`)

## Maintenance Notes

### Adding New Routes
1. Create page component in `apps/web/src/pages/`
2. Add route in `apps/web/src/App.jsx`
3. Add navigation link in Header/Footer if needed
4. Wrap all text content in `<Translate>` components
5. Add translation keys to all language files
6. Update this documentation

### Updating Existing Pages
1. Maintain `<Translate>` wrapper consistency
2. Update translation files when adding new text
3. Test all language variants
4. Verify SEO meta tags
5. Check mobile responsiveness

---

**Last Updated**: 2026-07-13  
**Total Routes**: 13 main routes + 1 catch-all  
**Translation Languages**: 5 (DE, EN, ES, FR, NL)  
**Dynamic Content Collections**: 3 (faqs, anleitungen, dealers)
