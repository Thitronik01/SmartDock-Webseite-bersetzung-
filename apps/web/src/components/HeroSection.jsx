
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const HeroSection = ({ label, title, subtitle, headingLevel = 'h1', labelColor }) => {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'EN';
  const isFr = currentLanguage === 'FR';

  // Component verifies and renders the appropriate label based on the current language
  let displayLabel = label;
  if (label) {
    const upperLabel = label.toUpperCase();
    if (upperLabel === 'FUNKTIONEN' || upperLabel === 'FEATURES') {
      displayLabel = isEn ? 'FEATURES' : 'FUNKTIONEN';
    } else if (upperLabel === 'PRODUKT' || upperLabel === 'PRODUCT') {
      displayLabel = isEn ? 'PRODUCT' : 'PRODUKT';
    } else if (upperLabel === 'KONTAKT' || upperLabel === 'CONTACT') {
      displayLabel = (isEn || isFr) ? 'CONTACT' : 'KONTAKT';
    }
    // INSTALLATION and FAQ are identical in both languages
  }

  const HeadingTag = headingLevel;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-4xl mx-auto px-4 mb-16"
      style={{ marginTop: 'var(--hero-spacing-breadcrumb-to-label)' }}
    >
      {displayLabel && (
        <span 
          className="font-semibold tracking-wider uppercase inline-block"
          style={{ 
            color: labelColor || 'hsl(var(--hero-label-color))', 
            fontSize: 'var(--hero-label-size)',
            marginBottom: 'var(--hero-spacing-label-to-title)' 
          }}
        >
          {displayLabel}
        </span>
      )}
      
      <HeadingTag 
        className="font-extrabold text-balance text-foreground tracking-tight mb-6"
        style={{ letterSpacing: '-0.02em' }}
      >
        <span 
          className="leading-[1.1] block"
          style={{ 
            fontSize: 'var(--hero-title-size-mobile)' 
          }}
        >
          <span className="md:hidden">{title}</span>
          <span 
            className="hidden md:block" 
            style={{ fontSize: 'var(--hero-title-size)' }}
          >
            {title}
          </span>
        </span>
      </HeadingTag>

      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default HeroSection;
