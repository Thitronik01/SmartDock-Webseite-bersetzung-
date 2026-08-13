
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHrefLang } from '@/hooks/useHrefLang.js';

const HrefLangHead = ({ currentPath }) => {
  const hrefLangs = useHrefLang(currentPath);

  return (
    <Helmet>
      {hrefLangs.map((link) => (
        <link 
          key={link.hreflang} 
          rel={link.rel} 
          hrefLang={link.hreflang} 
          href={link.href} 
        />
      ))}
    </Helmet>
  );
};

export default HrefLangHead;
