import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Scale, Shield, AlertCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const LegalCard = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
  >
    <div className="flex items-center gap-4 border-b border-border pb-6 mb-8">
      <div className="p-3 bg-primary/10 rounded-lg text-primary"><Icon className="w-6 h-6" /></div>
      <h2 className="text-3xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const ImpressumPageFR = () => {
  const { t } = useLanguage();
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="fr-FR" />
        <title>{t('imp_title')} - SMARTDOCK</title>
        <meta name="description" content={t('imp_desc')} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Accueil', path: '/fr' },
            { label: t('imp_title'), path: '/fr/mentions-legales' }
          ]}
          className="mb-4"
        />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16 mt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('imp_title')}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{t('imp_desc')}</p>
        </motion.div>

        <div className="space-y-8">
          <LegalCard icon={Scale} title={t('imp_s1_title')} delay={0.1}>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub1')}</h3>
                <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                <p>Finkenweg 9–15<br />24340 Eckernförde<br />Allemagne</p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub2')}</h3>
                <p>Mark Thietje<br />Daniela Hierl</p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub3')}</h3>
                <p>{t('imp_s1_tel1')} <a href="tel:+494351767440" className="text-primary hover:underline">+49 (0) 4351 76744-0</a></p>
                <p>{t('imp_s1_tel2')} <a href="tel:+49435176744112" className="text-primary hover:underline">+49 (0) 4351 76744-112</a></p>
                <p>E-mail : <a href="mailto:smartdock@thitronik.de" className="text-primary hover:underline">smartdock@thitronik.de</a></p>
                <p>Site internet : <a href="https://www.smartdock.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.smartdock.de</a></p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub4')}</h3>
                <p>{t('imp_s1_reg1')} Amtsgericht Kiel</p>
                <p>{t('imp_s1_reg2')} HRB 11453 KI</p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub5')}</h3>
                <p>DE 268454642</p>
              </section>
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">{t('imp_s1_sub6')}</h3>
                <p>{t('imp_s1_weee1')} <span className="font-medium text-foreground">DE33826840</span></p>
              </section>
            </div>
          </LegalCard>

          <LegalCard icon={Mail} title={t('imp_s2_title')} delay={0.15}>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>{t('imp_s2_p1')}</p>
              <p>Téléphone : <a href="tel:+494351767440" className="text-primary hover:underline">+49 4351 767440</a></p>
              <p>E-mail : <a href="mailto:smartdock@thitronik.de" className="text-primary hover:underline">smartdock@thitronik.de</a></p>
            </div>
          </LegalCard>

          <LegalCard icon={Shield} title={t('imp_s3_title')} delay={0.2}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div><h3 className="font-semibold text-foreground mb-2">{t('imp_s3_sub1')}</h3><p className="font-medium text-foreground">Carsten A. Höneise e.K.</p><p>{t('imp_s3_p1')}</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">{t('imp_s3_sub2')}</h3><p>{t('imp_s3_p2')}</p></div>
            </div>
          </LegalCard>

          <LegalCard icon={AlertCircle} title={t('imp_s4_title')} delay={0.3}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <section><h3 className="text-lg font-semibold text-foreground mb-3">{t('imp_s4_sub1')}</h3><p>{t('imp_s4_p1')}</p></section>
              <section><h3 className="text-lg font-semibold text-foreground mb-3">{t('imp_s4_sub2')}</h3><p>{t('imp_s4_p2')}</p><p className="mt-4">{t('imp_s4_trademarks')}</p></section>
              <section><h3 className="text-lg font-semibold text-foreground mb-3">{t('imp_s4_sub3')}</h3><p>{t('imp_s4_p3')}</p></section>
              <section><h3 className="text-lg font-semibold text-foreground mb-3">{t('imp_s4_sub4')}</h3><p>{t('imp_s4_p4')}</p></section>
            </div>
          </LegalCard>

          <p className="text-center text-sm text-muted-foreground pt-4">{t('imp_footer')}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPageFR;
