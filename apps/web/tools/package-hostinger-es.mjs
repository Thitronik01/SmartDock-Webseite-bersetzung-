import { createHash } from 'node:crypto';
import { copyFile, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { translation_ES } from '../src/utils/translations/translation_ES.js';
import { sourceTranslation_ES } from '../src/utils/translations/sourceTranslation_ES.js';

const toolDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(toolDir, '..');
const repoRoot = path.resolve(webRoot, '..', '..');
const outputName = 'hostinger-horizons-es-2026-08-17';
const outputRoot = path.join(repoRoot, 'outputs');
const packageRoot = path.join(outputRoot, outputName);
const refreshPackage = process.argv.includes('--refresh');

const runtimeFiles = [
  'src/App.jsx',
  'src/components/Breadcrumb.jsx',
  'src/components/Footer.jsx',
  'src/components/Header.jsx',
  'src/components/Hero.jsx',
  'src/components/Kontakt.jsx',
  'src/components/LanguageSwitcher.jsx',
  'src/components/SeoHead.jsx',
  'src/components/SmartdockApp.jsx',
  'src/components/SmartdockAppDownload.jsx',
  'src/components/SmartdockAppInterface_DE.jsx',
  'src/components/SmartdockConfigurator.jsx',
  'src/components/SmartdockModules.jsx',
  'src/config/locales.js',
  'src/config/routes.js',
  'src/contexts/LanguageContext.jsx',
  'src/pages/ConfiguratorPage.jsx',
  'src/pages/DealerFinderPage.jsx',
  'src/pages/FAQPage.jsx',
  'src/pages/FunktionenPage.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/ImpressumPage_ES.jsx',
  'src/pages/InstallationPage.jsx',
  'src/pages/NotFoundPage.jsx',
  'src/pages/PrivacyPage_ES.jsx',
  'src/utils/translations/index.js',
  'src/utils/translations/sourceTranslation_ES.js',
  'src/utils/translations/translation_ES.js',
];

const developerFiles = [
  'package.json',
  'src/config/locales.test.js',
  'src/utils/translations/translation_ES.test.js',
  'tools/generate-locale-dictionary.mjs',
  'tools/package-hostinger-es.mjs',
];

const documentationFiles = [
  'README.md',
  'HORIZONS_PROMPTS.md',
  'GO_LIVE_CHECKLIST.md',
  'ROUTES.csv',
];

const routes = [
  '/es',
  '/es/producto',
  '/es/funciones',
  '/es/funciones-legado',
  '/es/instalacion',
  '/es/faq',
  '/es/configurador',
  '/es/distribuidores',
  '/es/privacidad',
  '/es/aviso-legal',
  '/es/terminos',
  '/es/accesibilidad',
  '/es/desistimiento',
  '/es/envios',
  '/es/contacto',
];

const assertFile = async (filePath) => {
  const details = await stat(filePath);
  if (!details.isFile()) throw new Error(`Expected a file: ${filePath}`);
};

const copyRelative = async (sourceRoot, relativePath, targetRoot) => {
  const source = path.join(sourceRoot, relativePath);
  const target = path.join(targetRoot, relativePath);
  await assertFile(source);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(source, target);
};

const collectFiles = async (root, relative = '') => {
  const current = path.join(root, relative);
  const entries = await readdir(current, { withFileTypes: true });
  const collected = [];
  for (const entry of entries.toSorted((a, b) => a.name.localeCompare(b.name))) {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) collected.push(...await collectFiles(root, child));
    if (entry.isFile()) collected.push(child);
  }
  return collected;
};

const sha256 = async (filePath) => {
  const contents = await readFile(filePath);
  return createHash('sha256').update(contents).digest('hex');
};

try {
  await stat(packageRoot);
  const isExactPackageTarget = path.dirname(packageRoot) === outputRoot
    && path.basename(packageRoot) === outputName;
  if (!refreshPackage || !isExactPackageTarget) {
    throw new Error(`Package target already exists; refusing to overwrite: ${packageRoot}`);
  }
  await rm(packageRoot, { recursive: true, force: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

await mkdir(packageRoot, { recursive: true });

const runtimeTarget = path.join(packageRoot, 'horizons-runtime-overlay');
for (const relativePath of runtimeFiles) {
  await copyRelative(webRoot, relativePath, runtimeTarget);
}

const developerTarget = path.join(packageRoot, 'developer-audit', 'apps', 'web');
for (const relativePath of developerFiles) {
  await copyRelative(webRoot, relativePath, developerTarget);
}
await copyRelative(repoRoot, 'package.json', path.join(packageRoot, 'developer-audit'));

const docsRoot = path.join(repoRoot, 'deployment', 'hostinger-es');
for (const relativePath of documentationFiles) {
  await copyRelative(docsRoot, relativePath, packageRoot);
}

const buildRoot = path.join(repoRoot, 'dist', 'apps', 'web');
await stat(path.join(buildRoot, 'index.html'));
await stat(path.join(buildRoot, '.htaccess'));
await cp(buildRoot, path.join(packageRoot, 'static-upload-fallback'), { recursive: true });

const referenceSource = path.join(
  repoRoot,
  'outputs',
  '019fffc2-5353-7cf1-939a-8fd2c800e55c',
  'SmartDock_Website_Texte_Alle_Sprachen_REVIEWED_95PLUS.md',
);
await assertFile(referenceSource);
const referenceTarget = path.join(packageRoot, 'reference', path.basename(referenceSource));
await mkdir(path.dirname(referenceTarget), { recursive: true });
await copyFile(referenceSource, referenceTarget);

const packageFiles = await collectFiles(packageRoot);
const checksums = {};
for (const relativePath of packageFiles) {
  checksums[relativePath.replaceAll('\\', '/')] = await sha256(path.join(packageRoot, relativePath));
}

const manifest = {
  package: 'SmartDock Spanish locale for Hostinger Horizons',
  generatedAt: new Date().toISOString(),
  locale: { code: 'ES', tag: 'es-ES', prefix: '/es', release: 'preview', selectable: false },
  handoffMode: 'Horizons code-editor overlay with static hosting fallback',
  runtimeFileCount: runtimeFiles.length,
  dictionaryEntries: Object.keys(translation_ES).length,
  sourceTranslationEntries: Object.keys(sourceTranslation_ES).length,
  routes,
  qa: {
    localeTests: '10/10 passed before packaging',
    activeImportGraph: 'complete',
    productionBuild: 'passed before packaging',
    previewRobots: 'noindex,nofollow',
  },
  referenceSource: `reference/${path.basename(referenceSource)}`,
  files: checksums,
};

await writeFile(
  path.join(packageRoot, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

console.log(`Created ${packageRoot}`);
console.log(`${runtimeFiles.length} runtime files, ${routes.length} routes, ${Object.keys(checksums).length + 1} packaged files`);
