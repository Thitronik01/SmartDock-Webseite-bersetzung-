
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  RefreshCcw, 
  AlertCircle, 
  Clock, 
  Mail, 
  DollarSign, 
  Package, 
  Activity, 
  XCircle, 
  FileText,
  Printer
} from 'lucide-react';
import Translate from '@/components/Translate.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const WiderrufsbelehrungPage = () => {
  useLanguageRouting();

  useScrollRestoration();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 print:pt-0 print:bg-white">
      <Helmet>
        <html lang="de-DE" />
        <title>{`Widerrufsbelehrung - SMARTDOCK`}</title>
        <meta name="description" content="Detaillierte Widerrufsbelehrung und Informationen zum Widerrufsrecht für Verbraucher bei SMARTDOCK." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0 print:max-w-none">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: <Translate>Startseite</Translate>, path: '/' },
            { label: <Translate>Widerrufsbelehrung</Translate>, path: '/widerrufsbelehrung' }
          ]} 
          className="mb-4 print:hidden"
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 mt-8 print:mb-6"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 print:hidden">
            <RefreshCcw className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground print:text-black" style={{ letterSpacing: '-0.02em' }}>
            <Translate>Widerrufsbelehrung</Translate>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl print:text-black">
            <Translate>Informationen zu Ihrem gesetzlichen Widerrufsrecht, den Fristen, den Folgen eines Widerrufs und das Muster-Widerrufsformular.</Translate>
          </p>
        </motion.div>

        <div className="space-y-8 print:space-y-4">
          
          {/* Accordion for Sections 1-7 - Expanded on print via CSS or just rendered normally */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm print:border-none print:shadow-none print:p-0">
            <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="w-full space-y-4">
              
              {/* Section 1 */}
              <AccordionItem value="item-1" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>1. Widerrufsrecht für Verbraucher</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</Translate>
                  </p>
                  <p>
                    <Translate>Für Verbraucher gilt das nachfolgend beschriebene gesetzliche Widerrufsrecht.</Translate>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem value="item-2" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>2. Widerrufsrecht</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</Translate>
                  </p>
                  <p className="mb-4">
                    <Translate>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag,</Translate>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><Translate>an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat, sofern Sie eine oder mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben und diese einheitlich geliefert wird bzw. werden;</Translate></li>
                    <li><Translate>an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat, sofern Sie mehrere Waren im Rahmen einer einheitlichen Bestellung bestellt haben und diese getrennt geliefert werden.</Translate></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem value="item-3" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>3. Ausübung des Widerrufsrechts</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</Translate>
                  </p>
                  <div className="p-6 bg-muted/40 rounded-xl space-y-2 my-6 border border-border print:border-black print:bg-transparent">
                    <p className="font-semibold text-foreground print:text-black">Thitronik GmbH</p>
                    <p>Finkenweg 11–15</p>
                    <p>24340 Eckernförde</p>
                    <p><Translate>Deutschland</Translate></p>
                    <div className="pt-2">
                      <p><Translate>Telefon:</Translate> +49 4351 767440</p>
                      <p><Translate>E-Mail:</Translate> smartdock@thitronik.de</p>
                    </div>
                  </div>
                  <p>
                    <Translate>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</Translate>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem value="item-4" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>4. Folgen des Widerrufs</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</Translate>
                  </p>
                  <p className="mb-4">
                    <Translate>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</Translate>
                  </p>
                  <p>
                    <Translate>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</Translate>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 5 */}
              <AccordionItem value="item-5" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>5. Rücksendung der Waren</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben.</Translate>
                  </p>
                  <p className="mb-4">
                    <Translate>Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</Translate>
                  </p>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30 text-secondary-foreground font-medium print:border-black print:bg-transparent print:text-black">
                    <Translate>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</Translate>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 6 */}
              <AccordionItem value="item-6" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 print:hidden">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>6. Wertersatz</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p>
                    <Translate>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</Translate>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 7 */}
              <AccordionItem value="item-7" className="border border-border rounded-xl px-6 bg-background/50 data-[state=open]:bg-background transition-colors print:border-none print:px-0">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 bg-destructive/10 rounded-lg text-destructive shrink-0 print:hidden">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold"><Translate>7. Ausschluss des Widerrufsrechts</Translate></span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    <Translate>Das Widerrufsrecht besteht nicht bei Verträgen:</Translate>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><Translate>zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind;</Translate></li>
                    <li><Translate>zur Lieferung von Waren, wenn diese nach der Lieferung auf Grund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden (z.B. nach festem Einbau in ein Boot);</Translate></li>
                    <li><Translate>zur Lieferung von Ton- oder Videoaufnahmen oder Computersoftware in einer versiegelten Packung, wenn die Versiegelung nach der Lieferung entfernt wurde.</Translate></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          {/* Section 8: Form Template */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-8 print:pt-4 print:break-inside-avoid"
          >
            <Card className="border-2 border-border shadow-lg print:border-black print:shadow-none">
              <CardHeader className="bg-muted/30 border-b border-border pb-8 print:bg-transparent print:border-black">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-xl shadow-sm print:hidden">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl"><Translate>8. Muster-Widerrufsformular</Translate></CardTitle>
                      <CardDescription className="text-base mt-2">
                        <Translate>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</Translate>
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handlePrint} className="hidden md:flex gap-2 print:hidden">
                    <Printer className="w-4 h-4" />
                    <Translate>Drucken</Translate>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <div className="max-w-3xl space-y-8">
                  
                  {/* Recipient Info */}
                  <div className="p-6 bg-muted/40 rounded-xl border border-border print:border-none print:p-0 print:bg-transparent">
                    <p className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider"><Translate>An:</Translate></p>
                    <p className="font-semibold text-lg">Thitronik GmbH</p>
                    <p>Finkenweg 11–15</p>
                    <p>24340 Eckernförde</p>
                    <p><Translate>Deutschland</Translate></p>
                    <p className="mt-2"><Translate>E-Mail:</Translate> smartdock@thitronik.de</p>
                  </div>

                  <div className="text-lg font-medium leading-relaxed">
                    <Translate>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*):</Translate>
                  </div>

                  {/* Form Fields (Visual Template) */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="goods" className="text-base"><Translate>Genaue Bezeichnung der Waren / Dienstleistungen</Translate></Label>
                      <Textarea 
                        id="goods" 
                        placeholder="Bitte tragen Sie hier die Artikelnummern oder Bezeichnungen ein..." 
                        className="min-h-[120px] resize-none print:border-black print:placeholder-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="orderDate" className="text-base"><Translate>Bestellt am (*)</Translate></Label>
                        <Input id="orderDate" type="date" className="print:border-black" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="receiveDate" className="text-base"><Translate>Erhalten am (*)</Translate></Label>
                        <Input id="receiveDate" type="date" className="print:border-black" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="consumerName" className="text-base"><Translate>Name des/der Verbraucher(s)</Translate></Label>
                      <Input id="consumerName" placeholder="Vor- und Nachname" className="print:border-black print:placeholder-transparent" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="consumerAddress" className="text-base"><Translate>Anschrift des/der Verbraucher(s)</Translate></Label>
                      <Input id="consumerAddress" placeholder="Straße, Hausnummer" className="mb-3 print:border-black print:placeholder-transparent" />
                      <div className="grid grid-cols-3 gap-3">
                        <Input placeholder="PLZ" className="col-span-1 print:border-black print:placeholder-transparent" />
                        <Input placeholder="Ort" className="col-span-2 print:border-black print:placeholder-transparent" />
                      </div>
                    </div>

                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="h-12 border-b-2 border-dashed border-muted-foreground/50 print:border-black"></div>
                        <Label className="text-sm text-muted-foreground"><Translate>Datum</Translate></Label>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 border-b-2 border-dashed border-muted-foreground/50 print:border-black"></div>
                        <Label className="text-sm text-muted-foreground"><Translate>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</Translate></Label>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4 border-t border-border print:border-black">
                      <Translate>(*) Unzutreffendes streichen.</Translate>
                    </p>
                  </div>

                  <div className="pt-6 print:hidden">
                    <Button onClick={handlePrint} className="w-full md:w-auto gap-2">
                      <Printer className="w-4 h-4" />
                      <Translate>Formular ausdrucken</Translate>
                    </Button>
                  </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default WiderrufsbelehrungPage;
