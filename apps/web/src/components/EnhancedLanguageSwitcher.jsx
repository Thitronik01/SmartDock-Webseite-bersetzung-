import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";

const LANGUAGES = [
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'FR', name: 'Français', flag: '🇫🇷' }
];

const EnhancedLanguageSwitcher = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const current = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline-block font-medium">{current.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-card border-border shadow-xl rounded-xl">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={`lang-switcher-${lang.code}`}
            onClick={() => setCurrentLanguage(lang.code)}
            className={`cursor-pointer flex items-center gap-3 py-2 px-3 transition-colors duration-200 rounded-md ${
              currentLanguage === lang.code 
                ? 'bg-primary/10 text-primary font-bold' 
                : 'text-foreground hover:bg-muted'
            }`}
          >
            <span className="text-lg leading-none">{lang.flag}</span>
            <span className="flex-1">{lang.name}</span>
            <span className="text-xs font-semibold opacity-50">{lang.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EnhancedLanguageSwitcher;