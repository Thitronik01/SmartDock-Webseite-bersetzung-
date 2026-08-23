
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu.jsx';
import { Globe } from 'lucide-react';
import { getLocale, SELECTABLE_LOCALES } from '@/config/locales.js';

const LanguageSwitcher = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const current = getLocale(currentLanguage) || SELECTABLE_LOCALES[0];

  // Regional and preview variants show their real locale code but remain
  // outside the public language menu until they are explicitly released.
  if (!current.selectable) {
    return (
      <Button variant="ghost" size="sm" className="gap-2 px-3 rounded-full cursor-default pointer-events-none select-none">
        <Globe className="h-4 w-4" />
        <span className="font-medium">{current.code}</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-3 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
          <Globe className="h-4 w-4" />
          <span className="font-medium">{current.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 rounded-xl border-border shadow-lg">
        {SELECTABLE_LOCALES.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => setCurrentLanguage(locale.code)}
            className={`gap-3 cursor-pointer rounded-lg my-0.5 ${
              currentLanguage === locale.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground/80'
            }`}
          >
            <span className="text-base">{locale.flag}</span>
            <span>{locale.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
