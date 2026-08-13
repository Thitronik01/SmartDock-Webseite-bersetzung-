import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Globe, Ship, Anchor, Zap, Wrench, ShieldCheck, Mail, MessageCircle as MessageCircleQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { COUNTRIES } from '../translations.js';
import { useLanguage } from '@/contexts/LanguageContext';

const THRUSTER_BRANDS = [
  'QUICK ON/OFF',
  'VETUS ON/OFF',
  'SLEIPNER / SIDE POWER ON/OFF',
  'SLEIPNER / SIDE POWER proportional',
  'Weitere auf Anfrage'
];

const MOTOR_BRANDS = ['MerCruiser/Mercury', 'Yamaha', 'Volvo Penta'];

const KonfiguratorPage = () => {
  const { countryCode, setCountryCode, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [questionEmail, setQuestionEmail] = useState('');
  const [questionMessage, setQuestionMessage] = useState('');
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  const [config, setConfig] = useState({
    motorControl: null,
    motorBrand: '',
    motorJoystick: null,
    motorCount: '',
    motorSystem: '',
    hasThrusters: null,
    selectedThrusters: [],
    thrusterBrand: '',
    selectedAddons: [],
    service: false,
    promoCode: '',
    promoApplied: false,
    contact: { firstName: '', lastName: '', email: '', phone: '', message: '' }
  });

  const PRODUCTS = useMemo(() => ({
    THRUSTERS: [
      { id: 'bug', name: t('prod_bug'), price: 1218.49, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/7cb47e5561299b7eb96a203fe8fc8175.jpg' },
      { id: 'heck', name: t('prod_heck'), price: 1218.49, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/f630bec9fb75a5194398e67c9085f2cf.jpg' }
    ],
    ADDONS: [
      { id: 'anker1', name: t('prod_anker1'), price: 1218.49, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/c2c87b9d865c424bd2e7ad24953e0868.jpg', type: 'anker' },
      { id: 'anker2', name: t('prod_anker2'), price: 2436.98, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/d9c4aced3e48a603ec0ae4dc22ce48e8.jpg', type: 'anker' },
      { id: 'winch1', name: t('prod_winch1'), price: 1218.49, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/4e5c2cfa85136480025a56b5473d67e2.jpg', type: 'winch' },
      { id: 'winch2', name: t('prod_winch2'), price: 2436.98, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/32f4c527c2d7e968a8f81b90e3a2ddb4.jpg', type: 'winch' },
      { id: 'horn', name: t('prod_horn'), price: 650.00, img: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/c5f74a4c08dcf730f191f672902b2e1f.jpg', type: 'horn' }
    ]
  }), [t]);

  const currentCountry = useMemo(() => COUNTRIES.find(c => c.code === countryCode) || COUNTRIES.find(c => c.code === 'DE'), [countryCode]);

  const derivation = useMemo(() => {
    let ECU = false;
    if (config.motorControl === 'yes') ECU = true;

    let initialTCU = config.selectedThrusters.length;
    let initialWCU = 0;
    
    const hasAnker = config.selectedAddons.some(id => PRODUCTS.ADDONS.find(a => a.id === id)?.type === 'anker');
    const hasWinch = config.selectedAddons.some(id => PRODUCTS.ADDONS.find(a => a.id === id)?.type === 'winch');
    const hasHorn = config.selectedAddons.some(id => PRODUCTS.ADDONS.find(a => a.id === id)?.type === 'horn');
    
    if (hasAnker) initialWCU++;
    if (hasWinch) initialWCU++;
    if (hasHorn) initialWCU++;

    let finalTCU = 0;
    let finalWCU = 0;
    let finalACU = 0;

    const isProportional = config.thrusterBrand === 'SLEIPNER / SIDE POWER proportional';

    if (isProportional) {
      finalTCU = initialTCU;
      finalWCU = initialWCU;
    } else {
      let tempTCU = initialTCU;
      let tempWCU = initialWCU;
      
      while (tempTCU > 0 && tempWCU > 0) {
        tempTCU--;
        tempWCU--;
        finalACU++;
      }
      
      finalTCU = tempTCU;
      finalWCU = tempWCU;
    }

    let baseNet = 0;
    if (ECU) baseNet += 3319.33;
    if (finalTCU > 0) baseNet += (finalTCU * 1218.49);
    if (finalACU > 0) baseNet += (finalACU * 1218.49);
    if (finalWCU > 0) baseNet += (finalWCU * 1050.42);
    if (hasHorn) baseNet += 650.00;

    let bundleDiscount = 0;
    if (ECU && (finalTCU > 0 || finalACU > 0 || finalWCU > 0)) {
      // Calculate net discount so that gross discount is exactly 500€
      bundleDiscount = 500 / (1 + currentCountry.vat / 100);
    }

    let netAfterBundle = baseNet - bundleDiscount;
    if (config.service) netAfterBundle += 500;

    let promoDiscount = 0;
    if (config.promoApplied) {
      promoDiscount = netAfterBundle * 0.10;
    }

    const finalNet = netAfterBundle - promoDiscount;
    const vatAmount = finalNet * (currentCountry.vat / 100);
    const gross = finalNet + vatAmount;

    return { ECU, TCU: finalTCU, ACU: finalACU, WCU: finalWCU, baseNet, bundleDiscount, promoDiscount, finalNet, vatAmount, gross };
  }, [config, currentCountry, PRODUCTS]);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const updateConfig = (key, value) => setConfig(prev => ({ ...prev, [key]: value }));
  const updateContact = (key, value) => setConfig(prev => ({ ...prev, contact: { ...prev.contact, [key]: value } }));

  const toggleArrayItem = (key, id, exclusiveGroup = null) => {
    setConfig(prev => {
      let arr = [...prev[key]];
      if (arr.includes(id)) {
        arr = arr.filter(x => x !== id);
      } else {
        if (exclusiveGroup) {
          const groupItems = PRODUCTS.ADDONS.filter(a => a.type === exclusiveGroup).map(a => a.id);
          arr = arr.filter(x => !groupItems.includes(x));
        }
        arr.push(id);
      }
      return { ...prev, [key]: arr };
    });
  };

  const applyPromo = () => {
    if (config.promoCode.toUpperCase() === 'PIBS26') {
      updateConfig('promoApplied', true);
      toast.success(t('succ_promo'));
    } else {
      updateConfig('promoApplied', false);
      toast.error(t('err_promo'));
    }
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!questionEmail || !questionMessage) {
      toast.error(t('err_fill_all'));
      return;
    }
    const subject = encodeURIComponent('Frage zum SMARTDOCK-Konfigurator');
    const body = encodeURIComponent(`E-Mail: ${questionEmail}\n\nNachricht:\n${questionMessage}\n\nSchritt: ${step}`);
    window.location.href = `mailto:smartdock@thitronik.de?subject=${subject}&body=${body}`;
    toast.success(t('succ_mail'));
    setIsQuestionModalOpen(false);
    setQuestionMessage('');
  };

  const validateStep = (current) => {
    if (current === 2) {
      if (!config.motorControl) return toast.error(t('error_required'));
      if (config.motorControl === 'yes') {
        if (!config.motorCount) return toast.error(t('error_required'));
        if (!config.motorBrand) return toast.error(t('error_required'));
        if (!config.motorJoystick) return toast.error(t('error_required'));
        if (!config.motorSystem) return toast.error(t('error_required'));
      }
    }
    if (current === 3) {
      if (!config.hasThrusters) return toast.error(t('err_thrust_q'));
      if (config.hasThrusters === 'yes') {
        if (config.selectedThrusters.length === 0) return toast.error(t('err_thrust_sel'));
        if (!config.thrusterBrand) return toast.error(t('err_thrust_brand'));
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { contact } = config;
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) {
      return toast.error(t('err_contact'));
    }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      toast.success(t('succ_submit'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      toast.error(t('err_send'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSystemDisplay = () => {
    if (config.motorSystem === 'evc_bc') return t('step2_volvo_evc_bc');
    if (config.motorSystem === 'evc_20') return t('step2_volvo_evc_20');
    if (config.motorSystem) return `${config.motorBrand} ${config.motorSystem}`;
    return '';
  };

  const renderProductCard = (product, isSelected, onClick) => (
    <div key={product.id} onClick={onClick} data-active={isSelected} className="product-card">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 z-10">
          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-primary border-primary text-primary-foreground' : 'border-white/50 bg-black/40'}`}>
            {isSelected && <Check className="w-4 h-4" />}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="font-semibold mb-2 text-foreground text-sm md:text-base">{product.name}</h4>
        <div className="text-primary font-medium mt-auto">{formatPrice(product.price)}</div>
      </div>
    </div>
  );

  if (submitSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-[100dvh] bg-background flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12 text-primary" />
          </motion.div>
          <h1 className="mb-6">{t('succ_title')}</h1>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">{t('succ_desc')}</p>
          <Button onClick={() => window.location.href = '/'} size="lg" className="bg-primary text-primary-foreground text-lg px-8">{t('succ_back')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-[100dvh] bg-background">
      <Helmet>
        <title>{t('config_title')}</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4">{t('config_title')}</h1>
          <p className="text-secondary-foreground/80 text-lg">{t('config_subtitle')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full">
            <div className="mb-12">
              <div className="flex items-center justify-between relative mb-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full z-0" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500 ease-out" style={{ width: `${((step - 1) / 6) * 100}%` }} />
                {[1, 2, 3, 4, 5, 6, 7].map(num => (
                  <div key={`step-indicator-${num}`} className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 ${step === num ? 'bg-primary text-primary-foreground scale-110 shadow-[0_0_15px_rgba(188,235,2,0.5)]' : step > num ? 'bg-primary text-primary-foreground' : 'bg-card border-2 border-border text-muted-foreground'}`}>
                    {step > num ? <Check className="w-4 h-4 md:w-5 md:h-5" /> : num}
                  </div>
                ))}
              </div>
              <div className="text-center text-sm font-medium text-primary uppercase tracking-wider">{t('step_of')} {step} {t('of')} 7</div>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-10 relative">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="min-h-[400px]">
                  
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold mb-6 flex items-center"><Globe className="mr-3 text-primary w-8 h-8" /> {t('step1_title')}</h2>
                      <p className="text-muted-foreground mb-6">{t('step1_description')}</p>
                      <div className="max-w-md">
                        <Label htmlFor="country" className="mb-2 block">{t('step1_label')}</Label>
                        <Select value={countryCode} onValueChange={(val) => setCountryCode(val)}>
                          <SelectTrigger className="w-full bg-background border-border py-6 text-lg">
                            <SelectValue placeholder={t('step1_label')} />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {[...COUNTRIES].sort((a,b) => a.name.localeCompare(b.name)).map(c => (
                              <SelectItem key={`country-select-${c.code}`} value={c.code}>{c.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-semibold flex items-center"><Ship className="mr-3 text-primary w-8 h-8" /> {t('step2_title')}</h2>
                      
                      <div>
                        <Label className="text-lg block mb-4">{t('step2_question')}</Label>
                        <div className="grid grid-cols-2 gap-4 max-w-lg">
                          <div data-active={config.motorControl === 'yes'} onClick={() => updateConfig('motorControl', 'yes')} className="config-option items-center justify-center text-center"><span className="font-bold text-lg">{t('step2_yes')}</span></div>
                          <div data-active={config.motorControl === 'no'} onClick={() => { updateConfig('motorControl', 'no'); updateConfig('motorCount', ''); updateConfig('motorBrand', ''); updateConfig('motorJoystick', null); updateConfig('motorSystem', ''); }} className="config-option items-center justify-center text-center"><span className="font-bold text-lg">{t('step2_no')}</span></div>
                        </div>
                      </div>

                      {config.motorControl === 'yes' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-8 pt-6 border-t border-border">
                          <div>
                            <Label className="block mb-4 text-lg">{t('step2_motor_count')}</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                              <div data-active={config.motorCount === '1'} onClick={() => updateConfig('motorCount', '1')} className="config-option p-4 justify-between overflow-hidden">
                                 <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/9dd25882bd0ad3fd8ad9548355b0a9c0.jpg" className="w-full h-40 object-cover mb-4 rounded-lg" alt={t('step2_motor_1')} />
                                 <span className="font-semibold text-center text-lg">{t('step2_motor_1')}</span>
                              </div>
                              <div data-active={config.motorCount === '2+'} onClick={() => updateConfig('motorCount', '2+')} className="config-option p-4 justify-between overflow-hidden">
                                 <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/fa85c4b1bff5877affea7d4e284cbe6f.jpg" className="w-full h-40 object-cover mb-4 rounded-lg" alt={t('step2_motor_2plus')} />
                                 <span className="font-semibold text-center text-lg">{t('step2_motor_2plus')}</span>
                              </div>
                            </div>
                          </div>

                          {config.motorCount && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-8 pt-6 border-t border-border">
                              <div>
                                <Label className="block mb-4 text-lg">{t('step2_manufacturer')}</Label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {MOTOR_BRANDS.map(brand => (
                                    <div key={`brand-${brand}`} data-active={config.motorBrand === brand} onClick={() => { updateConfig('motorBrand', brand); updateConfig('motorSystem', ''); }} className="config-option items-center justify-center text-center py-4"><span className="font-semibold">{brand}</span></div>
                                  ))}
                                </div>
                              </div>

                              {config.motorBrand && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-8 pt-6 border-t border-border">
                                  <div>
                                    <Label className="block mb-4 text-lg">{t('step2_joystick')}</Label>
                                    <div className="grid grid-cols-2 gap-3 max-w-lg">
                                      <div data-active={config.motorJoystick === 'yes'} onClick={() => updateConfig('motorJoystick', 'yes')} className="config-option text-center py-3"><span className="font-semibold">{t('step2_yes')}</span></div>
                                      <div data-active={config.motorJoystick === 'no'} onClick={() => updateConfig('motorJoystick', 'no')} className="config-option text-center py-3"><span className="font-semibold">{t('step2_no')}</span></div>
                                    </div>
                                  </div>

                                  {config.motorJoystick && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-8 pt-6 border-t border-border">
                                      <div className="max-w-md">
                                        {config.motorBrand === 'Volvo Penta' ? (
                                          <>
                                            <Label className="block mb-4 text-lg">{t('step2_joystick_model')}</Label>
                                            <div className="grid grid-cols-1 gap-3">
                                              <div data-active={config.motorSystem === 'evc_bc'} onClick={() => updateConfig('motorSystem', 'evc_bc')} className="config-option py-4 text-center">
                                                <span className="font-semibold">{t('step2_volvo_evc_bc')}</span>
                                              </div>
                                              <div data-active={config.motorSystem === 'evc_20'} onClick={() => updateConfig('motorSystem', 'evc_20')} className="config-option py-4 text-center">
                                                <span className="font-semibold">{t('step2_volvo_evc_20')}</span>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <Label className="block mb-4 text-lg">{t('step2_system').replace('[Hersteller]', config.motorBrand).replace('[Fabricant]', config.motorBrand).replace('[Manufacturer]', config.motorBrand)}</Label>
                                            <Select value={config.motorSystem} onValueChange={(v) => updateConfig('motorSystem', v)}>
                                              <SelectTrigger className="w-full bg-background border-border py-6 text-lg">
                                                <SelectValue placeholder={`${config.motorBrand} System...`} />
                                              </SelectTrigger>
                                              <SelectContent className="bg-card border-border">
                                                <SelectItem value="standard">{config.motorBrand} Standard System</SelectItem>
                                                <SelectItem value="pro">{config.motorBrand} Pro System</SelectItem>
                                                <SelectItem value="advanced">{config.motorBrand} Advanced Control</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </motion.div>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-semibold flex items-center"><Zap className="mr-3 text-primary w-8 h-8" /> {t('step3_title')}</h2>
                      <div>
                        <Label className="text-lg block mb-4">{t('s3_q')}</Label>
                        <div className="grid grid-cols-2 gap-4 max-w-lg mb-8">
                          <div data-active={config.hasThrusters === 'yes'} onClick={() => updateConfig('hasThrusters', 'yes')} className="config-option items-center justify-center text-center"><span className="font-bold text-lg">{t('step2_yes')}</span></div>
                          <div data-active={config.hasThrusters === 'no'} onClick={() => { updateConfig('hasThrusters', 'no'); updateConfig('selectedThrusters', []); updateConfig('thrusterBrand', ''); }} className="config-option items-center justify-center text-center"><span className="font-bold text-lg">{t('step2_no')}</span></div>
                        </div>
                      </div>
                      {config.hasThrusters === 'yes' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-8 pt-6 border-t border-border">
                          <div>
                            <Label className="text-lg block mb-4">{t('s3_select')}</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {PRODUCTS.THRUSTERS.map(p => renderProductCard(p, config.selectedThrusters.includes(p.id), () => toggleArrayItem('selectedThrusters', p.id)))}
                            </div>
                          </div>
                          {config.selectedThrusters.length > 0 && (
                            <div>
                              <Label className="text-lg block mb-4">{t('s3_brand')}</Label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {THRUSTER_BRANDS.map(brand => (
                                  <div key={`thruster-brand-${brand}`} data-active={config.thrusterBrand === brand} onClick={() => updateConfig('thrusterBrand', brand)} className="config-option items-center justify-center text-center py-4"><span className="font-semibold text-sm">{brand}</span></div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-semibold flex items-center"><Anchor className="mr-3 text-primary w-8 h-8" /> {t('step4_title')}</h2>
                      <p className="text-muted-foreground">{t('s4_desc')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {PRODUCTS.ADDONS.map(p => renderProductCard(p, config.selectedAddons.includes(p.id), () => toggleArrayItem('selectedAddons', p.id, p.type !== 'horn' ? p.type : null)))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-8 max-w-2xl">
                      <h2 className="text-2xl font-semibold flex items-center"><Wrench className="mr-3 text-primary w-8 h-8" /> {t('step5_title')}</h2>
                      <div onClick={() => updateConfig('service', !config.service)} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start space-x-4 bg-background hover:border-primary/50 ${config.service ? 'border-primary bg-primary/5 shadow-lg' : 'border-border'}`}>
                        <div className="pt-1 pointer-events-none"><Checkbox checked={config.service} /></div>
                        <div>
                          <h4 className="font-bold text-lg mb-1 text-foreground">{t('s5_service')}</h4>
                          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{t('s5_service_desc')}</p>
                          <p className="text-primary font-bold">+ {formatPrice(500)}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-muted/30 rounded-2xl border border-border space-y-4">
                        <Label htmlFor="promoCode" className="text-base text-foreground font-semibold">{t('s5_promo_label')}</Label>
                        <div className="flex space-x-3">
                          <Input id="promoCode" value={config.promoCode} onChange={(e) => updateConfig('promoCode', e.target.value)} placeholder={t('s5_promo_ph')} className="bg-background border-border text-foreground uppercase text-lg" disabled={config.promoApplied} />
                          <Button onClick={applyPromo} disabled={!config.promoCode || config.promoApplied} variant={config.promoApplied ? "outline" : "default"} className={config.promoApplied ? "border-primary text-primary" : "bg-primary text-primary-foreground hover:bg-primary/90"}>{config.promoApplied ? t('s5_promo_active') : t('s5_promo_btn')}</Button>
                        </div>
                        {config.promoApplied && <p className="text-sm text-primary flex items-center font-medium"><Check className="w-4 h-4 mr-1" /> {t('s5_promo_success')}</p>}
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-semibold flex items-center"><ShieldCheck className="mr-3 text-primary w-8 h-8" /> {t('step6_title')}</h2>
                      <div className="bg-background rounded-3xl p-6 md:p-8 border border-border shadow-xl">
                        <h3 className="font-bold text-xl border-b border-border pb-4 mb-6">{t('summary_title')}</h3>
                        <div className="space-y-4 mb-8">
                          <div className="grid grid-cols-2 gap-4 text-sm bg-muted/20 p-4 rounded-xl">
                            <div><span className="text-muted-foreground block text-xs uppercase mb-1">{t('step1_label')}</span> <span className="font-semibold">{currentCountry.name}</span></div>
                            <div>
                              <span className="text-muted-foreground block text-xs uppercase mb-1">{t('step2_title')}</span>
                              <span className="font-semibold">
                                {config.motorControl === 'yes' ? `${config.motorBrand} (${config.motorCount})${config.motorSystem ? ` - ${getSystemDisplay()}` : ''}` : t('none')}
                              </span>
                            </div>
                            <div><span className="text-muted-foreground block text-xs uppercase mb-1">{t('step3_title')}</span> <span className="font-semibold">{config.selectedThrusters.length > 0 ? `${config.selectedThrusters.length} ${t('selected')} (${config.thrusterBrand})` : t('none')}</span></div>
                            <div><span className="text-muted-foreground block text-xs uppercase mb-1">{t('step4_title')}</span> <span className="font-semibold">{config.selectedAddons.length > 0 ? `${config.selectedAddons.length} ${t('selected')}` : t('none')}</span></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-muted-foreground"><span>{t('summary_subtotal')}</span><span>{formatPrice(derivation.baseNet)}</span></div>
                          {derivation.bundleDiscount > 0 && <div className="flex justify-between text-primary font-medium"><span>{t('summary_bundle_discount')}</span><span>- {formatPrice(derivation.bundleDiscount)}</span></div>}
                          {config.service && <div className="flex justify-between text-muted-foreground"><span>{t('s5_service')}</span><span>{formatPrice(500)}</span></div>}
                          {derivation.promoDiscount > 0 && <div className="flex justify-between text-primary font-medium"><span>{t('summary_promo_discount')}</span><span>- {formatPrice(derivation.promoDiscount)}</span></div>}
                        </div>
                        <div className="mt-6 pt-6 border-t-2 border-border space-y-3">
                          <div className="flex justify-between text-lg"><span className="text-muted-foreground">{t('summary_net_total')}</span><span className="font-semibold text-foreground">{formatPrice(derivation.finalNet)}</span></div>
                          <div className="flex justify-between text-lg"><span className="text-muted-foreground">{t('summary_vat')} ({currentCountry.vat}%):</span><span className="font-semibold text-foreground">{formatPrice(derivation.vatAmount)}</span></div>
                          <div className="flex justify-between text-2xl md:text-3xl font-bold pt-4"><span className="text-foreground">{t('summary_gross_total')}</span><span className="text-primary">{formatPrice(derivation.gross)}</span></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 7 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="text-2xl font-semibold mb-6 flex items-center"><Mail className="mr-3 text-primary w-8 h-8" /> {t('step7_title')}</h2>
                      <p className="text-muted-foreground mb-6">{t('s7_desc')}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2"><Label htmlFor="firstName" className="text-foreground font-semibold">{t('s7_fname')}</Label><Input id="firstName" required value={config.contact.firstName} onChange={e => updateContact('firstName', e.target.value)} className="bg-background text-foreground border-border py-6" /></div>
                        <div className="space-y-2"><Label htmlFor="lastName" className="text-foreground font-semibold">{t('s7_lname')}</Label><Input id="lastName" required value={config.contact.lastName} onChange={e => updateContact('lastName', e.target.value)} className="bg-background text-foreground border-border py-6" /></div>
                        <div className="space-y-2"><Label htmlFor="email" className="text-foreground font-semibold">{t('s7_email')}</Label><Input id="email" type="email" required value={config.contact.email} onChange={e => updateContact('email', e.target.value)} className="bg-background text-foreground border-border py-6" /></div>
                        <div className="space-y-2"><Label htmlFor="phone" className="text-foreground font-semibold">{t('s7_phone')}</Label><Input id="phone" type="tel" required value={config.contact.phone} onChange={e => updateContact('phone', e.target.value)} className="bg-background text-foreground border-border py-6" /></div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-semibold">{t('s7_notes')}</Label>
                        <Textarea id="message" value={config.contact.message} onChange={e => updateContact('message', e.target.value)} className="w-full bg-background border border-border text-foreground rounded-xl p-4 min-h-[120px] outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder={t('s7_notes_ph')} />
                      </div>
                    </form>
                  )}

                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                <Button variant="outline" onClick={prevStep} disabled={step === 1 || isSubmitting} className="border-border text-foreground hover:bg-muted py-6 px-6 w-full sm:w-auto">
                  <ChevronLeft className="w-5 h-5 mr-2" /> {t('btn_back')}
                </Button>
                
                <Dialog open={isQuestionModalOpen} onOpenChange={setIsQuestionModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10"><MessageCircleQuestion className="w-4 h-4 mr-2" /> {t('btn_ask_question')}</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">{t('modal_title')}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">{t('modal_desc')}</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAskQuestion} className="space-y-4 pt-4">
                      <div className="space-y-2"><Label htmlFor="q-email" className="text-foreground">{t('modal_email')}</Label><Input id="q-email" type="email" required value={questionEmail} onChange={(e) => setQuestionEmail(e.target.value)} className="bg-background border-border text-foreground" /></div>
                      <div className="space-y-2"><Label htmlFor="q-message" className="text-foreground">{t('modal_msg')}</Label><Textarea id="q-message" required value={questionMessage} onChange={(e) => setQuestionMessage(e.target.value)} className="bg-background border-border text-foreground min-h-[100px]" /></div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{t('btn_send')}</Button>
                    </form>
                  </DialogContent>
                </Dialog>

                {step < 7 ? (
                  <Button onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-8 font-bold text-lg w-full sm:w-auto">
                    {t('btn_next')} <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-10 text-xl font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all w-full sm:w-auto">
                    {isSubmitting ? t('btn_submitting') : t('btn_request')}
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-96 sticky top-32 space-y-6">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-bold text-lg border-b border-border pb-4 mb-4 text-foreground">{t('side_title')}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>{t('side_vat_rate')}</span><span className="font-medium text-foreground">{currentCountry.vat}% ({currentCountry.code})</span></div>
                {derivation.ECU && <div className="flex justify-between text-muted-foreground"><span>{t('side_ecu')}</span><span>{formatPrice(3319.33)}</span></div>}
                {derivation.TCU > 0 && <div className="flex justify-between text-muted-foreground"><span>{derivation.TCU}x {t('side_tcu')}</span><span>{formatPrice(derivation.TCU * 1218.49)}</span></div>}
                {derivation.ACU > 0 && <div className="flex justify-between text-muted-foreground"><span>{derivation.ACU}x {t('side_acu')}</span><span>{formatPrice(derivation.ACU * 1218.49)}</span></div>}
                {derivation.WCU > 0 && <div className="flex justify-between text-muted-foreground"><span>{derivation.WCU}x {t('side_wcu')}</span><span>{formatPrice(derivation.WCU * 1050.42)}</span></div>}
                {config.service && <div className="flex justify-between text-muted-foreground"><span>{t('s5_service')}</span><span>{formatPrice(500)}</span></div>}
              </div>
              <div className="mt-6 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('summary_net_total')}</span><span className="text-foreground font-medium">{formatPrice(derivation.finalNet)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('summary_vat')}</span><span className="text-foreground">{formatPrice(derivation.vatAmount)}</span></div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-border"><span className="text-foreground">{t('summary_gross_total')}</span><span className="text-primary">{formatPrice(derivation.gross)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonfiguratorPage;