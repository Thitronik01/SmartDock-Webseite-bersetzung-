
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

const languages = [
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'FR', name: 'Français', flag: '🇫🇷' }
];

const LanguageSwitcher = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const current = languages.find(l => l.code === currentLanguage) || languages[0];

  // Swiss variant: show a static "CH" badge with no language menu
  if (currentLanguage === 'CH') {
    return (
      <Button variant="ghost" size="sm" className="gap-2 px-3 rounded-full cursor-default pointer-events-none select-none">
        <Globe className="h-4 w-4" />
        <span className="font-medium">CH</span>
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
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLanguage(lang.code)}
            className={`gap-3 cursor-pointer rounded-lg my-0.5 ${
              currentLanguage === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground/80'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
