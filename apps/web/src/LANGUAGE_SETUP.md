
# SMARTDOCK Language & SEO Setup

This document explains how the language, document `lang` attribute, and `hreflang` link generation system is structured for optimal multi-language SEO support.

## 1. How the Language and Hreflang System Works

The application provides a seamless experience for multi-language SEO:
- **`useDocumentLang`**: Intercepts language changes from the `LanguageContext` and modifies the global HTML attribute (`document.documentElement.lang`). This ensures screen readers, browsers, and simple web crawlers immediately understand the language of the displayed text.
- **`useHrefLang`**: Whenever the user navigates between pages, this hook computes alternate links for all supported languages using the base domain (`https://www.smartdock.de`). 
- **`HrefLangHead`**: Automatically inserts `<link rel="alternate" hreflang="xx" href="..." />` tags into the document `<head>` using React Helmet, fulfilling Google's exact multi-language indexing requirements. It dynamically includes an `x-default` fallback link pointing to the default German version.

## 2. Currently Supported Languages

The system currently defaults to the following localized mappings:
- **de-DE**: German (Default / Fallback)
- **en**: English
- **fr**: French
- **nl**: Dutch
- **es**: Spanish
- **it**: Italian

The base domain is hardcoded as: `https://www.smartdock.de/`

## 3. How to Add a New Language

Adding a new language (e.g., Portuguese `"pt"`) is a simple four-step process:

1. **Create the translation file**:
   Duplicate an existing language map (e.g., `translation_EN.js`) and rename it:
   `apps/web/src/utils/translations/translation_PT.js`.

2. **Register the translations in the index**:
   Update `apps/web/src/utils/translations/index.js` to expose the newly created dictionary:
   