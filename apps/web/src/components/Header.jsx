
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const homePath = pathFor('home', lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const secondaryLinks = [
    { name: t('nav_product') || 'Produkt', href: pathFor('product', lang) },
    { name: t('nav_features') || 'Funktionen', href: pathFor('functions', lang) },
    { name: t('nav_installation') || 'Installation', href: pathFor('installation', lang) },
    { name: t('nav_faq') || 'FAQ', href: pathFor('faq', lang) },
    { name: t('nav_contact') || 'Contact', href: (lang === 'DE' || lang === 'CH') ? '#kontakt' : pathFor('contact', lang) }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setIsNavOpen(false);
    
    if (href.startsWith('#')) {
      if (location.pathname !== homePath) {
        navigate(homePath + href);
      } else {
        const element = document.querySelector(href);
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
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`relative z-20 transition-all duration-300 ${
          isScrolled || isNavOpen ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <Link 
              to={homePath} 
              className="flex items-center hover:opacity-90 transition-opacity duration-200 z-10"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/db32cac9a31619468d321af737c640a2.png" 
                alt="SMARTDOCK Logo" 
                className="h-6 md:h-8 w-auto object-contain"
              />
            </Link>

            <div className="hidden xl:flex items-center space-x-4 z-10 ml-auto">
              <div className="flex items-center gap-3 mr-2">
                <Button 
                  onClick={() => navigate(pathFor('configurator', lang))}
                  className="rounded-full px-6 transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
                >
                  {t('nav_configurator') || 'Konfigurator'}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate(pathFor('dealer', lang))}
                  className="rounded-full px-6 transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                >
                  {t('nav_dealer_finder') || 'Händlerfinder'}
                </Button>
              </div>

              <LanguageSwitcher />

              <button 
                onClick={() => setIsNavOpen(!isNavOpen)} 
                className="p-2 ml-2 text-foreground hover:text-primary transition-colors focus:outline-none"
                aria-label="Toggle secondary navigation"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>

            <div className="flex items-center gap-2 xl:hidden z-10 ml-auto">
              <LanguageSwitcher />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground border-none hover:text-primary">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-card border-border overflow-y-auto">
                  <nav className="flex flex-col space-y-6 mt-8">
                    {secondaryLinks.map((link) => (
                      <a
                        key={`mobile-nav-${link.href}`}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`text-lg font-medium transition-colors duration-200 ${
                          location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                    <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                      <Button 
                        onClick={() => {
                          setIsOpen(false);
                          navigate(pathFor('configurator', lang));
                        }}
                        className="w-full rounded-full transition-all duration-300 active:scale-[0.98]"
                      >
                        {t('nav_configurator') || 'Konfigurator'}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setIsOpen(false);
                          navigate(pathFor('dealer', lang));
                        }}
                        className="w-full rounded-full transition-all duration-300 active:scale-[0.98]"
                      >
                        {t('nav_dealer_finder') || 'Händlerfinder'}
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden xl:block">
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-border rounded-b-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <nav className="flex items-center justify-center space-x-12">
                  {secondaryLinks.map((link) => (
                    <a
                      key={`secondary-nav-${link.href}`}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-base font-medium transition-colors duration-200 ${
                        location.pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
