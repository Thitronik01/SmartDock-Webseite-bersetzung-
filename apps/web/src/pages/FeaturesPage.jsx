import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Radio, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import SmartdockAppInterface_EN from '@/components/SmartdockAppInterface_EN.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const FeaturesPage = () => {
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="en-US" />
        <title>Features - SMARTDOCK</title>
        <meta 
          name="description" 
          content="Discover all features of the SMARTDOCK app. From One Hand Mode to anchor control." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Features', path: '/features' }
          ]} 
        />

        {/* Hero Section */}
        <HeroSection 
          label="FEATURES"
          title="Everything's under control."
          subtitle="The SMARTDOCK app unites the engine, thruster, and other systems into one intelligent unit. Complex manoeuvres are controlled intuitively – designed to give you full control in any situation."
        />

        {/* App Interface Spotlight Layout - English Version */}
        <SmartdockAppInterface_EN />

        {/* Smartphone Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center mb-32 mt-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              BoatDrag One-Handed
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/7389f4a82f13162b59d72b803198ee54.png" 
              alt="iPhone 15 Pro BoatDrag One-Handed Mode" 
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Middle Column (Emphasized) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:scale-110 z-10"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              Controller Mode
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/0dae1c5b8608f0cd0277991c6d13580e.png" 
              alt="iPhone 15 Pro Controller Mode" 
              className="w-full max-w-[380px] lg:max-w-[420px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              Anchor Mode
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/fb7fe4bd168f53ff40bdb3c726624410.png" 
              alt="iPhone 15 Pro Anchor Mode" 
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>

        {/* Safety Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background text-foreground mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Integrated Security Features
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Safety comes first. In the event of a malfunction, all drives are immediately switched to neutral. In addition, control can be taken over manually at the physical helm at any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-background rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm border border-border">
              <Radio className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">
                AES-128 Encryption
              </span>
            </div>
            <div className="bg-background rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm border border-border">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">
                Auto-Stop When Connection Is Lost
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FeaturesPage;