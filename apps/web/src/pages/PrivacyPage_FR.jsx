import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';
import { translation_FR } from '@/utils/translations/translation_FR.js';

const privacyKeys = Object.keys(translation_FR).filter((key) => key.startsWith('priv_'));

const sectionEntries = (sectionNumber) => privacyKeys.filter(
  (key) => key.startsWith(`priv_s${sectionNumber}_`) && key !== `priv_s${sectionNumber}_title`
);

const PrivacyPageFR = () => {
  const { t } = useLanguage();

  useScrollRestoration();

  const renderEntry = (key) => {
    if (key.endsWith('_sub1') || key.endsWith('_sub2')) {
      return <h3 key={key} className="text-xl font-medium pt-2 text-foreground">{t(key)}</h3>;
    }

    if (/_l\d+_title$/.test(key)) {
      const descriptionKey = key.replace('_title', '_desc');
      return (
        <div key={key} className="pl-4 border-l-2 border-primary/30">
          <p><strong className="text-foreground">{t(key)}:</strong> {t(descriptionKey)}</p>
        </div>
      );
    }

    if (/_l\d+_desc$/.test(key)) return null;

    if (key === 'priv_s2_p1') {
      return (
        <React.Fragment key={key}>
          <p>{t(key)}</p>
          <div className="p-4 bg-muted/50 rounded-lg text-foreground">
            <p className="font-medium">Thitronik GmbH</p>
            <p>Finkenweg 9–15</p>
            <p>24340 Eckernförde</p>
            <p>Allemagne</p>
            <p className="mt-2">Téléphone : +49 4351 767440</p>
            <p>E-mail : smartdock@thitronik.de</p>
          </div>
        </React.Fragment>
      );
    }

    if (key === 'priv_s2_p2') {
      return (
        <p key={key}>
          {t(key)}{' '}
          <Link to="/fr/mentions-legales" className="text-primary hover:underline">mentions légales</Link>.
        </p>
      );
    }

    if (key === 'priv_s8_p3') {
      return (
        <p key={key}>
          {t(key)}{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-words"
          >
            https://tools.google.com/dlpage/gaoptout?hl=fr
          </a>.
        </p>
      );
    }

    return <p key={key}>{t(key)}</p>;
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="fr-FR" />
        <title>{t('priv_title')} - SMARTDOCK</title>
        <meta name="description" content={t('priv_desc')} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Accueil', path: '/fr' },
            { label: t('priv_title'), path: '/fr/confidentialite' }
          ]}
          className="mb-4"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            {t('priv_title')}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{t('priv_desc')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-12"
        >
          {Array.from({ length: 14 }, (_, index) => index + 1).map((sectionNumber) => (
            <section key={sectionNumber} className="space-y-4 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-semibold text-foreground">{t(`priv_s${sectionNumber}_title`)}</h2>
              {sectionEntries(sectionNumber).map(renderEntry)}
            </section>
          ))}

          <p className="pt-6 border-t border-border text-sm text-muted-foreground">{t('priv_date')}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPageFR;
