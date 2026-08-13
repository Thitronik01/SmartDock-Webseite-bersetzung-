
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Accessibility, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const AccessibilityPage_EN = () => {
  useLanguageRouting();

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="en" />
        <title>Accessibility Statement | Smartdock</title>
        <meta name="description" content="Information about the accessibility of the Smartdock website and our commitment to digital accessibility." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/en' },
            { label: 'Accessibility', path: '/en/accessibility' }
          ]} 
          className="mb-4"
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Accessibility className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            Accessibility Statement
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Information about the accessibility of this website and our commitment to digital accessibility.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                1. Introduction
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Thitronik GmbH strives to make its website accessible in accordance with the Act on the Promotion of Accessibility (BFSG) and the Ordinance on the Promotion of Accessibility (BFSGV).
              </p>
              <p>
                This accessibility statement applies to the website www.smartdock.de.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Compliance Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span>2. Status of Compliance with the Requirements</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-medium text-foreground">
                  Partially compatible
                </p>
              </div>
              <p>
                Due to the following exceptions, this website is partially compliant with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the European Standard EN 301 549.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Non-accessible content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span>3. Non-accessible content</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The content listed below is not yet fully accessible for the following reasons:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Forms:</strong> Some forms may contain input fields that are not fully labelled or are inadequately labelled for screen reader users.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Images and graphics:</strong> Some images or graphics are missing alternative text (alt text), or the alternative text provided is not descriptive enough.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Videos:</strong> Some embedded video content does not yet have complete captions or transcripts.
                  </span>
                </li>
              </ul>
              <p className="p-4 bg-muted rounded-lg mt-6">
                We are constantly working to improve our digital offerings. An external accessibility audit is planned to address the identified issues in a structured manner.
              </p>
            </div>
          </motion.div>

          {/* Section 4: Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span>4. Preparation of This Accessibility Statement</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed flex items-start gap-4">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <p>
                  This statement was prepared on July 9, 2025.
                </p>
                <p className="mt-2">
                  This assessment is based on an internal self-evaluation of the website and its features.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Feedback & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span>5. Feedback and Contact Information</span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Have you noticed any issues with accessible access to content on www.smartdock.de? Or do you have questions about accessibility? If so, please feel free to contact us:
              </p>
              
              <div className="p-6 bg-muted/40 rounded-xl space-y-1">
                <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                <p>Finkenweg 9-15</p>
                <p>24340 Eckernförde</p>
                <div className="pt-3 space-y-2">
                  <p className="flex items-center">
                    <span className="w-20">Email:</span>
                    <a href="mailto:kontakt@thitronik.de" className="text-primary font-medium hover:underline transition-colors">kontakt@thitronik.de</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Enforcement Proceedings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span>6. Enforcement Proceedings</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have not received a response—or have not received a satisfactory response—after contacting us, you may contact the mediation office established under the Disability Equality Act (BGG) at the Federal Network Agency.
              </p>
              <p>
                The mediation board is responsible for resolving conflicts between people with disabilities and private entities (companies) out of court.
              </p>
              
              <div className="p-6 bg-muted/40 rounded-xl space-y-1 mt-4">
                <p className="font-medium text-foreground">Conciliation Board under the Federal Arbitration Act (BFSG) at the Federal Network Agency</p>
                <p>Tulpenfeld 4</p>
                <p>53113 Bonn</p>
                <div className="pt-3 space-y-2">
                  <p className="flex items-start md:items-center flex-col md:flex-row gap-1 md:gap-0">
                    <span className="w-24 shrink-0">Email:</span>
                    <a href="mailto:barrierefreiheit@bnetza.de" className="text-primary font-medium hover:underline transition-colors">barrierefreiheit@bnetza.de</a>
                  </p>
                  <p className="flex items-start md:items-center flex-col md:flex-row gap-1 md:gap-0">
                    <span className="w-24 shrink-0">Website:</span>
                    <a href="https://www.bundesnetzagentur.de/barrierefreiheit" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline transition-colors break-all">www.bundesnetzagentur.de/barrierefreiheit</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage_EN;
