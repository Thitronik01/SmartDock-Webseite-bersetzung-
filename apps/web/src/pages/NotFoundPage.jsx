import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const COPY = {
  DE: {
    lang: 'de',
    title: 'Seite nicht gefunden - SMARTDOCK',
    heading: 'Seite nicht gefunden',
    text: 'Die von dir aufgerufene Seite existiert leider nicht.',
    cta: 'Zur Startseite',
    home: '/',
  },
  EN: {
    lang: 'en',
    title: 'Page not found - SMARTDOCK',
    heading: 'Page not found',
    text: 'The page you requested does not exist.',
    cta: 'Back to home',
    home: '/en',
  },
  FR: {
    lang: 'fr-FR',
    title: 'Page introuvable - SMARTDOCK',
    heading: 'Page introuvable',
    text: "La page que tu as demandée n'existe pas.",
    cta: "Retour à l'accueil",
    home: '/fr',
  },
};

const NotFoundPage = ({ lang = 'DE' }) => {
  const c = COPY[lang] || COPY.DE;

  useScrollRestoration();

  return (
    <div className="min-h-[70vh] bg-background pt-28 pb-20 flex items-center justify-center">
      <Helmet>
        <html lang={c.lang} />
        <title>{c.title}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary font-semibold text-7xl mb-6">404</p>
        <h1 className="mb-4">{c.heading}</h1>
        <p className="text-muted-foreground mx-auto mb-8">{c.text}</p>
        <Button asChild className="rounded-full px-8">
          <Link to={c.home}>{c.cta}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
