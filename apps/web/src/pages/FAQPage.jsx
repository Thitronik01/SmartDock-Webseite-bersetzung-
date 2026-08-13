
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import { Button } from '@/components/ui/button.jsx';
import pb from '@/lib/pocketbaseClient.js';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

// Language-neutral identifier for the "Can SMARTDOCK be retrofitted?" FAQ.
// Used to scope the dealer-finder inline link to this single FAQ entry only.
const RETROFIT_FAQ_QUESTION_DE = 'Kann SMARTDOCK nachgerüstet werden?';

// Per-language anchor text + case-insensitive matcher for the already
// existing dealer-finder mention inside this FAQ's answer.
const DEALER_LINK_CONFIG = {
  DE: { regex: /Händlerfinder/i, label: 'Händlerfinder' },
  EN: { regex: /retailer finder/i, label: 'Find Retailer' },
  FR: { regex: /revendeurs/i, label: 'Revendeurs' },
};

// Inline translations for the page shell
const PAGE_TEXTS = {
  DE: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Finde die Antworten auf die wichtigsten Fragen rund um SMARTDOCK, Installation und Nutzung.',
    error: 'Die häufig gestellten Fragen konnten nicht geladen werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
    tryAgain: 'Erneut versuchen',
    noFaqs: 'Es konnten derzeit keine FAQs gefunden werden.',
    home: 'Startseite',
    desc: 'Häufig gestellte Fragen zu SMARTDOCK - Kompatibilität, Installation, Funktionen und mehr.',
    langCode: 'de-DE'
  },
  EN: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to the most important questions about SMARTDOCK, installation, and usage.',
    error: 'The frequently asked questions could not be loaded. Please check your internet connection and try again.',
    tryAgain: 'Try again',
    noFaqs: 'No FAQs found at the moment.',
    home: 'Home',
    desc: 'Frequently asked questions about SMARTDOCK - compatibility, installation, features, and more.',
    langCode: 'en-US'
  },
  FR: {
    title: 'Foire Aux Questions',
    subtitle: 'Trouvez des réponses aux questions les plus importantes concernant SMARTDOCK, son installation et son utilisation.',
    error: "Les questions fréquemment posées n'ont pas pu être chargées. Veuillez vérifier votre connexion internet et réessayer.",
    tryAgain: 'Réessayer',
    noFaqs: 'Aucune FAQ trouvée pour le moment.',
    home: 'Accueil',
    desc: 'Foire aux questions sur SMARTDOCK - compatibilité, installation, fonctionnalités, et plus.',
    langCode: 'fr-FR'
  }
};

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentLanguage } = useLanguage();

  const texts = PAGE_TEXTS[currentLanguage] || PAGE_TEXTS['DE'];

  const fetchFaqs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await pb.collection('faqs').getList(1, 500, {
        sort: '+order',
        $autoCancel: false
      });
      setFaqs(result.items);
    } catch (err) {
      console.error('[FAQPage] Error fetching FAQs:', err);
      setError(texts.error);
    } finally {
      setIsLoading(false);
    }
  };

  useScrollRestoration();

  useEffect(() => {
    fetchFaqs();
  }, []); // Empty dependency array, data fetches once, language switch handles display

  // Renders a single line of answer text, replacing the existing dealer-finder
  // mention with an in-place internal link, only when `withDealerLink` is set.
  const renderLine = (line, withDealerLink) => {
    if (!withDealerLink) return line;
    const config = DEALER_LINK_CONFIG[currentLanguage];
    if (!config) return line;
    const match = line.match(config.regex);
    if (!match) return line;
    const start = match.index;
    const end = start + match[0].length;
    const before = line.slice(0, start);
    const after = line.slice(end);
    const to = pathFor('dealer', currentLanguage);
    return (
      <>
        {before}
        <Link to={to} className="text-primary hover:underline">
          {config.label}
        </Link>
        {after}
      </>
    );
  };

  const formatAnswer = (text, faq) => {
    if (!text) return null;
    const withDealerLink = faq?.question_de === RETROFIT_FAQ_QUESTION_DE;
    const paragraphs = text.split('\n\n');
    return (
      <div className="space-y-4">
        {paragraphs.map((paragraph, pIndex) => (
          <p key={`p-${pIndex}`} className="leading-relaxed">
            {paragraph.split('\n').map((line, lIndex, arr) => (
              <React.Fragment key={`line-${pIndex}-${lIndex}`}>
                {renderLine(line, withDealerLink)}
                {lIndex < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={texts.langCode} />
        <title>{`FAQ - SMARTDOCK`}</title>
        <meta name="description" content={texts.desc} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: texts.home, path: pathFor('home', currentLanguage) },
            { label: 'FAQ', path: pathFor('faq', currentLanguage) }
          ]} 
        />

        {/* Hero Section */}
        <HeroSection 
          label="FAQ"
          title={texts.title}
          subtitle={texts.subtitle}
          labelColor="#bceb02"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[72px] w-full bg-muted/60 animate-pulse rounded-xl" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-destructive/5 rounded-xl border border-destructive/20 text-destructive flex flex-col items-center gap-4">
              <AlertCircle className="w-10 h-10" />
              <p className="max-w-md text-sm md:text-base">{error}</p>
              <Button 
                variant="outline" 
                onClick={fetchFaqs} 
                className="mt-2 gap-2 text-foreground border-border hover:bg-muted"
              >
                <RefreshCw className="w-4 h-4" />
                {texts.tryAgain}
              </Button>
            </div>
          ) : faqs && faqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => {
                // Determine which fields to use based on the current language
                let question = faq.question_de;
                let answer = faq.answer_de;

                if (currentLanguage === 'EN') {
                  question = faq.question_en;
                  answer = faq.answer_en;
                } else if (currentLanguage === 'FR') {
                  question = faq.question_fr;
                  answer = faq.answer_fr;
                }

                // Fallback if translations are empty
                question = question || faq.question_de;
                answer = answer || faq.answer_de;

                return (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors duration-200 shadow-sm"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200 py-6 text-base md:text-lg font-medium">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-card-foreground/80 pb-6 text-[15px] md:text-base">
                      {formatAnswer(answer, faq)}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-muted/30 rounded-xl border border-border">
              {texts.noFaqs}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
