
# SMARTDOCK Translation Guide

## 1. How to add new languages
1. Copy the `translation_EN.js` file and rename it (e.g., `translation_IT.js` for Italian).
2. Update the export name: `export const translation_IT = { ... }`.
3. Translate all the string values on the right side of the object, ensuring you keep the exact same keys.
4. Import and export the new file in `apps/web/src/utils/translations/index.js`:
   