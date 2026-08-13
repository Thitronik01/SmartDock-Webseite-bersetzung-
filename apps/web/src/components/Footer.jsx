
import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { useCookieConsent } from '@/hooks/useCookieConsent.js';
import { pathFor } from '@/config/routes.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const { resetConsent } = useCookieConsent();
  
  const lang = currentLanguage;
  const homePath = pathFor('home', lang);

  const handleAppScroll = (e) => {
    e.preventDefault();
    if (location.pathname !== homePath) {
      navigate(homePath + '#download-app');
    } else {
      const element = document.getElementById('download-app');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleFaqNavigation = (e) => {
    e.preventDefault();
    navigate(pathFor('faq', lang));
  };

  const handleCookieReset = (e) => {
    e.preventDefault();
    resetConsent();
  };

  return (
    <footer className="bg-card border-t border-border overflow-hidden shrink-0 w-full">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12 pl-2 sm:pl-6 md:pl-8">
          
          <div className="lg:col-span-1">
            <button 
              onClick={() => navigate(homePath)}
              className="flex items-center hover:opacity-90 transition-opacity duration-200 mb-6"
              aria-label="Go to home"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/d09865b04744f74ee9df04dab73d32ef.png" 
                alt="SMARTDOCK Logo" 
                className="h-6 md:h-8 w-auto object-contain"
              />
            </button>
            <p className="text-primary font-medium mb-4">
              {t('footer_navigate_control')}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t('footer_smartdock_desc')}
            </p>
          </div>

          <div>
            <span className="font-semibold mb-6 block text-foreground">
              {t('footer_contact')}
            </span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm leading-snug">
                  Thitronik GmbH<br />
                  Finkenweg 9-15<br />
                  24340 Eckernförde<br />
                  {t('footer_country')}
                </span>
              </div>
              <a href="tel:+494351767440" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">+49 4351 767440</span>
              </a>
              <a href="mailto:smartdock@thitronik.de" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <span className="text-sm">smartdock@thitronik.de</span>
              </a>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-6 block text-foreground">{t('footer_links')}</span>
            <div className="space-y-3">
              <a href="#download-app" onClick={handleAppScroll} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('footer_download_app')}
              </a>
              <a href={pathFor('faq', lang)} onClick={handleFaqNavigation} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('footer_faq')}
              </a>
              <Link to={pathFor('installation', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('footer_installation')}
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-6 block text-foreground">
              {t('footer_follow_us')}
            </span>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/smartdock_de" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 w-full"
              >
                <Instagram className="w-5 h-5 shrink-0" />
                <span className="text-sm">smartdock_de</span>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575559805950" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 w-full"
              >
                <Facebook className="w-5 h-5 shrink-0" />
                <span className="text-sm">@smartdock-de</span>
              </a>
              <a 
                href="https://youtube.com/@SMARTDOCK" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 w-full"
              >
                <Youtube className="w-5 h-5 shrink-0" />
                <span className="text-sm">@SMARTDOCK</span>
              </a>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-6 block text-foreground">
              {t('footer_legal')}
            </span>
            <div className="space-y-3">
              <Link to={pathFor('privacy', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_privacy')}
              </Link>
              <Link to={pathFor('imprint', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_impressum')}
              </Link>
              <Link to={pathFor('terms', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_agb')}
              </Link>
              <Link to={pathFor('accessibility', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_accessibility')}
              </Link>
              <Link to={pathFor('withdrawal', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_revocation')}
              </Link>
              <Link to={pathFor('shipping', lang)} className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {t('legal_shipping')}
              </Link>
              {/* Reset Cookie Consent Button */}
              <button 
                onClick={handleCookieReset}
                className="block text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200 text-left"
              >
                {t('cookie_reset_consent')}
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
            {t('footer_disclaimer')}
          </p>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 pl-2 sm:pl-6 md:pl-8">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Thitronik GmbH. {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
