
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FileText, Scale, Info } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const AGBPage_EN = () => {
  useLanguageRouting();

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="en" />
        <title>Terms & Conditions - SMARTDOCK</title>
        <meta name="description" content="General Terms and Conditions and Customer Information of Thitronik GmbH for SMARTDOCK." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/en' },
            { label: 'Terms and Conditions & Customer Information', path: '/en/terms' }
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
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            Terms and Conditions & Customer Information
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Legal framework and important information regarding the purchase, installation, and use of our SMARTDOCK products.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* PART I - AGB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-10"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Part I: General Terms and Conditions
              </h2>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 1 Basic Provisions</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) The following terms and conditions apply to contracts you initiate and conclude with us as the provider (Thitronik GmbH) via the website smartdock.de or through direct contact. Unless otherwise agreed, the inclusion of your own terms and conditions is rejected.
                </p>
                <p>
                  (2) A consumer within the meaning of the following regulations is any natural person who concludes a legal transaction for purposes that can predominantly be attributed neither to their commercial nor their independent professional activity. An entrepreneur is any natural or legal person or a partnership with legal capacity that, when concluding a legal transaction, acts in the exercise of their independent professional or commercial activity.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 2 Inquiries via the Website and Conclusion of a Contract</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) The subject of our services is the provision, configuration, and installation of the SMARTDOCK system and related components for pleasure boats and yachts.
                </p>
                <p>
                  (2) The presentation of our services on the website (especially in the configurator) does not constitute a legally binding offer to conclude a contract, but a non-binding invitation for the customer to submit an inquiry.
                </p>
                <p>
                  (3) By submitting the configurator form or via our other contact forms, you submit a non-binding inquiry to us. Based on this inquiry, we or our certified installation partners will check the technical feasibility and prepare a binding offer for you.
                </p>
                <p>
                  (4) The contract is only concluded when you expressly accept this binding offer (e.g., by email, fax, or post) or by signing a separate installation and purchase contract with one of our installation partners.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 3 Website Content</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) We assume no liability for the topicality, correctness, completeness, or quality of the information provided on our website. Liability claims against us relating to material or immaterial damage caused by the use or non-use of the information provided are fundamentally excluded, provided there is no demonstrable intentional or grossly negligent fault on our part.
                </p>
                <p>
                  (2) All price estimates generated from the configurator are approximate values (RRP). The actual costs may vary depending on the individual characteristics of the boat and the specific installation effort.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 4 Prices, Terms of Payment, Delivery and Installation</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) All prices quoted on the website are non-binding recommended retail prices in euros and include statutory value-added tax (unless otherwise indicated as net prices for entrepreneurs).
                </p>
                <p>
                  (2) The terms of payment as well as modalities for delivery and installation are detailed in the respective binding offer. Generally, installation by trained specialist personnel of our certified dealers is mandatory to ensure flawless function in safety-relevant maritime environments.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 5 Warranty</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) The statutory warranty rights apply.
                </p>
                <p>
                  (2) For entrepreneurs, the following applies differently: Only our own details and the manufacturer's product description shall be deemed agreed as the quality of the goods, but not other advertising, public promotions, and statements by the manufacturer. The warranty period for entrepreneurs is one year from delivery of the goods.
                </p>
                <p>
                  (3) We are not liable for damage resulting from improper self-installation or interventions by personnel not authorized by us. The SMARTDOCK system intervenes deeply in the boat's control electronics; incorrect installation can cause significant consequential damage.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">§ 6 Choice of Law, Place of Performance, Place of Jurisdiction</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) German law applies. For consumers, this choice of law only applies insofar as it does not deprive them of the protection afforded by mandatory provisions of the law of the state of the consumer's habitual residence (favorability principle).
                </p>
                <p>
                  (2) The place of performance for all services arising from the business relationships with us and the place of jurisdiction is our registered office (Eckernförde), provided you are not a consumer but a merchant, a legal entity under public law, or a special fund under public law.
                </p>
                <p>
                  (3) The provisions of the UN Convention on Contracts for the International Sale of Goods are expressly excluded.
                </p>
              </div>
            </section>
          </motion.div>

          {/* PART II - KUNDENINFORMATIONEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-10"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Part II: Customer Information
              </h2>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">1. Identity of the Provider</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Responsible for the content of this website and your contractual partner in the event of a direct conclusion of a contract is:</p>
                <div className="p-6 bg-muted/40 rounded-xl space-y-1">
                  <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                  <p>Finkenweg 9-15</p>
                  <p>24340 Eckernförde</p>
                  <p>Germany</p>
                  <div className="pt-3 space-y-2">
                    <p className="flex items-center">
                      <span className="w-20">Phone:</span>
                      <a href="tel:+494351767440" className="text-primary font-medium hover:underline transition-colors">+49 4351 767440</a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-20">E-Mail:</span>
                      <a href="mailto:smartdock@thitronik.de" className="text-primary font-medium hover:underline transition-colors">smartdock@thitronik.de</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">2. Information on Inquiry and Conclusion of Contract</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The technical steps to conclude the contract, the conclusion of the contract itself, and the correction options are carried out in accordance with the regulations "Conclusion of a Contract" (see § 2 of the General Terms and Conditions - Part I).
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">3. Contract Language and Storage of Inquiry</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  (1) The contract language is German.
                </p>
                <p>
                  (2) The data of your inquiry will be stored by us in the system and forwarded to the responsible installation partner. You will receive a summary of your configuration and inquiry to the email address you provided.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">4. Essential Characteristics of the Goods or Services</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The essential characteristics of the SMARTDOCK system (assistance system for boat manoeuvres, joystick control) and complementary services can be found in the respective product descriptions and specifications on our website.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">5. Prices and Payment Modalities</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The configuration prices output on our website are estimated values. The final price and accepted payment methods result from the individual offer sent to you or your dealer after checking your boat data.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">6. Delivery, Installation, and Provision of Services</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The delivery conditions, the delivery date, and any delivery restrictions or dates for installation on your boat are agreed individually as part of the offer process with our certified dealers or directly with us.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">7. Statutory Warranty Rights</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Liability for defects in our goods is governed by the "Warranty" provision in our General Terms and Conditions (Part I).
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AGBPage_EN;
