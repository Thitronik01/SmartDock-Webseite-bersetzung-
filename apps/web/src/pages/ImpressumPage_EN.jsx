import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Scale, AlertCircle, Phone, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';
const ImpressumPage_EN = () => {
  // Listen for language changes and route accordingly
  useLanguageRouting();
  useScrollRestoration();
  return <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="en" />
        <title>Legal Notice - SMARTDOCK</title>
        <meta name="description" content="Legal notice and provider identification of Thitronik GmbH." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb items={[{
        label: 'Home',
        path: '/en'
      }, {
        label: 'Legal Notice',
        path: '/en/imprint'
      }]} className="mb-4" />

        {/* Hero Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mb-16 mt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{
          letterSpacing: '-0.02em'
        }}>
            Legal Notice
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Information pursuant to Section 5 of the German Telemedia Act (TMG) and Legal Notices
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Section 1: Legal Provider Information */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Legal Provider Information
              </h2>
            </div>

            <div className="space-y-8">
              {/* Company Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Company Information</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Address:</p>
                    <p>Finkenweg 9-15</p>
                    <p>24340 Eckernförde</p>
                    <p>Germany</p>
                  </div>
                </div>
              </section>

              {/* Management */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Management</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Mark Thietje</p>
                  <p>Daniela Hierl</p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Headquarters:</span>
                    <a href="tel:+494351767440" className="text-primary hover:underline transition-colors font-medium">+49 (0) 4351 76744-0</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Support:</span>
                    <a href="tel:+49435176744112" className="text-primary hover:underline transition-colors font-medium">+49 (0) 4351 76744-112</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">E-Mail:</span>
                    <a href="mailto:kontakt@thitronik.de" className="text-primary hover:underline transition-colors font-medium">kontakt@thitronik.de</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Website:</span>
                    <a href="https://www.smartdock.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-medium">www.smartdock.de</a>
                  </div>
                </div>
              </section>

              {/* Service Appointment Notice */}
              <section className="p-4 bg-secondary/10 border border-secondary/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-secondary-foreground font-medium">Service appointments are available only by prior telephone arrangement.</p>
                </div>
              </section>

              {/* Commercial Register */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Commercial Register</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Commercial Register Entry: HRB 11453 KI</p>
                  <p>Kiel Municipal Court</p>
                </div>
              </section>

              {/* VAT ID */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Value-Added Tax (VAT) Identification Number</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p><span className="text-sm font-medium text-muted-foreground mb-1 mr-2">VAT:</span> DE268454642</p>
                </div>
              </section>

              {/* WEEE Registration */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">WEEE Registration number</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Registration number for waste electrical and electronic equipment: <span className="font-medium text-foreground ml-1">DE33826840</span></p>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Section 2: SMARTDOCK Contact Information */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.15
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">SMARTDOCK Contact Information</h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm text-muted-foreground">For inquiries about SMARTDOCK products and services</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Phone:</p>
                    <a href="tel:+494351767440" className="text-primary hover:underline transition-colors font-medium">+49 4351 767440</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">E-Mail:</p>
                    <a href="mailto:smartdock@thitronik.de" className="text-primary hover:underline transition-colors font-medium">smartdock@thitronik.de</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Professional Liability Insurance */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Professional Liability Insurance
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-medium text-foreground mb-3">Insurance companies:</p>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Carsten A. Höneise e.K.</p>
                  <p>Insurance Brokers and Insurance Advisors</p>
                </div>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">Scope:</p>
                <p>Professional liability insurance is valid worldwide, with the exception of the USA, Canada and their territories.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Additional Notes */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-muted rounded-lg text-muted-foreground">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Additional Notes
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Consumer Dispute Resolution / Universal Arbitration Proceedings</h3>
                <p>We do not participate in dispute resolution proceedings before a consumer arbitration board.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Disclaimer</h3>
                <p className="mb-4">
                  As a service provider, we are responsible for our own content on these pages in accordance with Section 7(1) of the German Telemedia Act (TMG) and general laws. However, pursuant to Sections 8 through 10 of the TMG, we, as a service provider, are not obligated to monitor third-party information that is transmitted or stored, nor are we required to investigate circumstances that indicate illegal activity.
                </p>
                <p>
                  All trademarks, product names, and logos mentioned (including, but not limited to, Volvo Penta, MerCruiser, Mercury, Yamaha, EPT, Quick, Sleipner, Vetus, Lewmar, and Max Power) are registered trademarks or trademarks of their respective owners. Unless expressly stated otherwise, there are no business relationships, partnerships, or authorizations between Thitronik GmbH and the respective trademark owners. The brand names are mentioned solely to describe the technical compatibility of SMARTDOCK/THITRONIK® products.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Liability for Links</h3>
                <p>Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the linked sites is always responsible for their content. The linked sites were reviewed for possible legal violations at the time the links were created. No illegal content was apparent at the time the links were created.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Copyright</h3>
                <p>The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, adaptation, distribution, and any other form of use beyond the scope of copyright law require the written consent of the author or creator. Downloads and copies of this site are permitted only for private, non-commercial use.</p>
              </section>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="w-full pt-8">
            <p className="text-center mx-auto text-sm text-muted-foreground">
              For further legal information, please refer to our <Link to="/en/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/en/terms" className="text-primary hover:underline">Terms and Conditions</Link>.
            </p>
          </motion.div>

        </div>
      </div>
    </div>;
};
export default ImpressumPage_EN;
