
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import HeroSection from '@/components/HeroSection.jsx';

const phoneCountries = [
  { code: 'BE', name: 'Belgien', dialCode: '+32', flag: '🇧🇪' },
  { code: 'BG', name: 'Bulgarien', dialCode: '+359', flag: '🇧🇬' },
  { code: 'DK', name: 'Dänemark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'DE', name: 'Deutschland', dialCode: '+49', flag: '🇩🇪' },
  { code: 'EE', name: 'Estland', dialCode: '+372', flag: '🇪🇪' },
  { code: 'FI', name: 'Finnland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'FR', name: 'Frankreich', dialCode: '+33', flag: '🇫🇷' },
  { code: 'GB', name: 'Großbritannien', dialCode: '+44', flag: '🇬🇧' },
  { code: 'GR', name: 'Griechenland', dialCode: '+30', flag: '🇬🇷' },
  { code: 'IE', name: 'Irland', dialCode: '+353', flag: '🇮🇪' },
  { code: 'IT', name: 'Italien', dialCode: '+39', flag: '🇮🇹' },
  { code: 'HR', name: 'Kroatien', dialCode: '+385', flag: '🇭🇷' },
  { code: 'LV', name: 'Lettland', dialCode: '+371', flag: '🇱🇻' },
  { code: 'LT', name: 'Litauen', dialCode: '+370', flag: '🇱🇹' },
  { code: 'LU', name: 'Luxemburg', dialCode: '+352', flag: '🇱🇺' },
  { code: 'MT', name: 'Malta', dialCode: '+356', flag: '🇲🇹' },
  { code: 'NL', name: 'Niederlande', dialCode: '+31', flag: '🇳🇱' },
  { code: 'AT', name: 'Österreich', dialCode: '+43', flag: '🇦🇹' },
  { code: 'PL', name: 'Polen', dialCode: '+48', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  { code: 'RO', name: 'Rumänien', dialCode: '+40', flag: '🇷🇴' },
  { code: 'SE', name: 'Schweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'CH', name: 'Schweiz', dialCode: '+41', flag: '🇨🇭' },
  { code: 'SK', name: 'Slowakei', dialCode: '+421', flag: '🇸🇰' },
  { code: 'SI', name: 'Slowenien', dialCode: '+386', flag: '🇸🇮' },
  { code: 'ES', name: 'Spanien', dialCode: '+34', flag: '🇪🇸' },
  { code: 'CZ', name: 'Tschechien', dialCode: '+420', flag: '🇨🇿' },
  { code: 'HU', name: 'Ungarn', dialCode: '+36', flag: '🇭🇺' },
  { code: 'CY', name: 'Zypern', dialCode: '+357', flag: '🇨🇾' }
].sort((a, b) => a.name.localeCompare(b.name, 'de'));

const Kontakt = () => {
  const { t, currentLanguage } = useLanguage();
  
  // Set default country code based on current language
  const getDefaultCountryCode = () => {
    switch (currentLanguage) {
      case 'EN':
        return 'GB'; // English → UK
      case 'FR':
        return 'FR'; // French → France
      case 'DE':
      default:
        return 'DE'; // German → Germany
    }
  };
  
  const [selectedCountryCode, setSelectedCountryCode] = useState(getDefaultCountryCode());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update country code when language changes
  useEffect(() => {
    setSelectedCountryCode(getDefaultCountryCode());
  }, [currentLanguage]);

  const handleCountryChange = (val) => {
    setSelectedCountryCode(val);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const country = phoneCountries.find(c => c.code === selectedCountryCode);
      const fullPhone = formData.phone ? `${country?.dialCode || ''} ${formData.phone}`.trim() : '';

      const submitData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: fullPhone,
        message: formData.message
      };

      await pb.collection('contact_requests').create(submitData, { $autoCancel: false });

      toast.success(t('contact_success'));
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setSelectedCountryCode('DE');
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(t('contact_err_general'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: t('contact_label_phone_hq'),
      value: '+49 4351 76744-0',
      href: 'tel:+494351767440'
    },
    {
      icon: Mail,
      label: t('contact_label_email'),
      value: 'smartdock@thitronik.de',
      href: 'mailto:smartdock@thitronik.de'
    },
    {
      icon: MapPin,
      label: t('contact_label_address'),
      value: 'Finkenweg 9-15, 24340 Eckernförde',
      href: 'https://maps.google.com/?q=Finkenweg+9-15,+24340+Eckernförde'
    }
  ];

  return (
    <section id="kontakt" className="py-16 md:py-24 relative z-0 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Updated to use standard HeroSection with h2 override for SEO safety on the home page */}
        <HeroSection 
          label={currentLanguage === 'EN' || currentLanguage === 'FR' ? 'CONTACT' : 'KONTAKT'}
          labelColor="#bceb02"
          title={t('contact_title')}
          subtitle={t('contact_sub')}
          headingLevel="h2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-card p-6 sm:p-10 lg:p-14 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 w-full">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t('contact_name_label')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-11"
                      placeholder={t('contact_name_ph')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t('contact_email_label')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-11"
                      placeholder={t('contact_email_ph')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      {t('contact_company_label')}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-11"
                      placeholder={t('contact_company_ph')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      {t('contact_phone_label')}
                    </Label>
                    <div className="flex gap-2.5">
                      <Select value={selectedCountryCode} onValueChange={handleCountryChange}>
                        <SelectTrigger className="w-[110px] sm:w-[125px] bg-background border-border text-foreground focus:ring-primary h-11 shrink-0">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border max-h-[300px]">
                          {phoneCountries.map((c) => (
                            <SelectItem key={c.code} value={c.code} className="cursor-pointer text-sm">
                              {c.flag} ({c.dialCode})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary h-11"
                        placeholder={t('contact_phone_ph')}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t('contact_message_label')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none p-3.5 leading-relaxed"
                    placeholder={t('contact_message_ph')}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px] h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-semibold tracking-wide rounded-xl shadow-lg shadow-primary/15"
                  >
                    {isSubmitting ? t('contact_btn_sending') : t('contact_btn_send')}
                  </Button>
                </div>

              </form>
            </div>

            <div className="lg:col-span-5 w-full lg:pl-6 lg:border-l lg:border-border/40 space-y-8 lg:space-y-10 pt-4 lg:pt-2">
              <div className="space-y-2 mb-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  {t('contact_info_title')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('contact_direct_line')}
                </p>
              </div>

              <div className="space-y-7">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith('http');
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 transition-all duration-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 pt-0.5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-base md:text-lg font-medium text-foreground group-hover:underline leading-snug">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Kontakt;
