
import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { XCircle, CheckCircle2, Mail } from 'lucide-react';

const Step6PromoCode = () => {
  const { actionCode, setActionCode, isPromoValid, goNext, goBack } = useConfigurator();
  const { t } = useLanguage();
  const [inputValue, setInputValue] = useState(actionCode || '');
  const [message, setMessage] = useState('');

  const handleCheck = () => {
    if (!inputValue.trim()) return;
    
    if (inputValue.trim().toUpperCase() === 'PIBS26') {
      setActionCode(inputValue);
      setMessage(t('s5_promo_success'));
    } else {
      setMessage(t('err_promo'));
      setActionCode('');
    }
  };

  const handleRemove = () => {
    setInputValue('');
    setActionCode('');
    setMessage('');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('s6_promo')}</h2>
        <p className="text-muted-foreground">{t('s6_promo_desc')}</p>
      </div>

      <div className="max-w-md bg-card p-6 rounded-2xl border border-border">
        {!isPromoValid ? (
          <div className="space-y-4">
            <div className="flex gap-3">
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('s5_promo_ph')}
                className="bg-background text-foreground"
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              />
              <Button variant="secondary" onClick={handleCheck}>{t('s6_promo_check')}</Button>
            </div>
            {message && <p className="text-sm text-destructive flex items-center gap-2"><XCircle className="w-4 h-4" />{message}</p>}
          </div>
        ) : (
          <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-primary">{t('s5_promo_success')}</p>
                <p className="text-sm text-muted-foreground font-mono">{actionCode.toUpperCase()}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleRemove} className="text-muted-foreground hover:text-destructive">
              {t('s6_promo_remove')}
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/3 flex justify-start">
          <Button variant="outline" onClick={goBack}>{t('btn_back')}</Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('btn_ask_question')}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={goNext}>{t('btn_next')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Step6PromoCode;
