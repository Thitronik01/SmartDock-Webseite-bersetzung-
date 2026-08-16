
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

const WiderrufsbelehrungPage_EN = () => {
  useLanguageRouting();

  useScrollRestoration();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 print:pt-0 print:bg-white">
      <Helmet>
        <html lang="en" />
        <title>Right of Withdrawal Policy | SMARTDOCK</title>
        <meta name="description" content="Detailed Right of Withdrawal Policy and information for consumers at SMARTDOCK." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0 print:max-w-none">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/en' },
            { label: 'Right of Withdrawal Policy', path: '/en/right-of-withdrawal' }
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
            Right of Withdrawal Policy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl print:text-black">
            Information about your statutory right of withdrawal, the time limits, the consequences of a withdrawal, and the sample withdrawal form.
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
                    <span className="text-xl font-semibold">1. Right of Withdrawal for Consumers</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    A consumer is any natural person who enters into a legal transaction for purposes that are predominantly neither commercial nor their independent professional activity.
                  </p>
                  <p>
                    Consumers are entitled to the statutory right of withdrawal described below.
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
                    <span className="text-xl font-semibold">2. Right of Withdrawal</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    You have the right to withdraw from this contract within fourteen days without giving any reason.
                  </p>
                  <p className="mb-4">
                    The withdrawal period is fourteen days from the day:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>on which you, or a third party designated by you who is not the carrier, took possession of the goods, provided you ordered one or more goods as part of a uniform order and these are delivered uniformly;</li>
                    <li>on which you, or a third party designated by you who is not the carrier, took possession of the last good, provided you ordered several goods as part of a single order and these are delivered separately.</li>
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
                    <span className="text-xl font-semibold">3. Exercising the Right of Withdrawal</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    To exercise your right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (e.g., a letter sent by post or an e-mail). You may use the attached sample withdrawal form, but it is not obligatory.
                  </p>
                  <div className="p-6 bg-muted/40 rounded-xl space-y-2 my-6 border border-border print:border-black print:bg-transparent">
                    <p className="font-semibold text-foreground print:text-black">Thitronik GmbH</p>
                    <p>Finkenweg 9-15</p>
                    <p>24340 Eckernförde</p>
                    <p>Germany</p>
                    <div className="pt-2">
                      <p>Phone: +49 4351 767440</p>
                      <p>Email: smartdock@thitronik.de</p>
                    </div>
                  </div>
                  <p>
                    To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
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
                    <span className="text-xl font-semibold">4. Consequences of the Revocation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract.
                  </p>
                  <p className="mb-4">
                    We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.
                  </p>
                  <p>
                    We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods, whichever is the earliest.
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
                    <span className="text-xl font-semibold">5. Returning the Goods</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    You shall send back the goods or hand them over to us, without undue delay and in any event not later than 14 days from the day on which you communicate your withdrawal from this contract to us.
                  </p>
                  <p className="mb-4">
                    The deadline is met if you send back the goods before the period of 14 days has expired.
                  </p>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30 text-secondary-foreground font-medium print:border-black print:bg-transparent print:text-black">
                    You will have to bear the direct cost of returning the goods.
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
                    <span className="text-xl font-semibold">6. Compensation for Loss of Value</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p>
                    You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods.
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
                    <span className="text-xl font-semibold">7. Exclusion of the Right of Withdrawal</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 print:text-black">
                  <p className="mb-4">
                    The right of withdrawal does not apply to contracts:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>for the supply of goods that are not prefabricated and the production of which is governed by an individual choice or decision by the consumer, or which are clearly tailored to personal needs;</li>
                    <li>for the supply of goods if, due to their nature, they were inseparably mixed with other items after delivery (e.g., after fixed installation in a boat);</li>
                    <li>for the supply of sealed audio or video recordings or computer software which were unsealed after delivery.</li>
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
                      <CardTitle className="text-2xl">8. Sample Cancellation Form</CardTitle>
                      <CardDescription className="text-base mt-2">
                        (If you wish to withdraw from the contract, please complete this form<br />and return it to us.)
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handlePrint} className="hidden md:flex gap-2 print:hidden">
                    <Printer className="w-4 h-4" />
                    Print Form
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <div className="max-w-3xl space-y-8">
                  
                  {/* Recipient Info */}
                  <div className="p-6 bg-muted/40 rounded-xl border border-border print:border-none print:p-0 print:bg-transparent">
                    <p className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">To:</p>
                    <p className="font-semibold text-lg">Thitronik GmbH</p>
                    <p>Finkenweg 9-15</p>
                    <p>24340 Eckernförde</p>
                    <p>Germany</p>
                    <p className="mt-2">Email: smartdock@thitronik.de</p>
                  </div>

                  <div className="text-lg font-medium leading-relaxed">
                    I/we (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods (*)/for the provision of the following service (*):
                  </div>

                  {/* Form Fields (Visual Template) */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="goods" className="text-base">Exact description of goods / services</Label>
                      <Textarea 
                        id="goods" 
                        placeholder="Please enter the item numbers or descriptions here..." 
                        className="min-h-[120px] resize-none print:border-black print:placeholder-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="orderDate" className="text-base">Ordered on (*)</Label>
                        <Input id="orderDate" type="date" className="print:border-black" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="receiveDate" className="text-base">Received on (*)</Label>
                        <Input id="receiveDate" type="date" className="print:border-black" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="consumerName" className="text-base">Name of consumer(s)</Label>
                      <Input id="consumerName" placeholder="First and last name" className="print:border-black print:placeholder-transparent" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="consumerAddress" className="text-base">Address of consumer(s)</Label>
                      <Input id="consumerAddress" placeholder="Street, house number" className="mb-3 print:border-black print:placeholder-transparent" />
                      <div className="grid grid-cols-3 gap-3">
                        <Input placeholder="ZIP code" className="col-span-1 print:border-black print:placeholder-transparent" />
                        <Input placeholder="City" className="col-span-2 print:border-black print:placeholder-transparent" />
                      </div>
                    </div>

                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <div className="h-12 border-b-2 border-dashed border-muted-foreground/50 print:border-black"></div>
                        <Label className="text-sm text-muted-foreground">Date</Label>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 border-b-2 border-dashed border-muted-foreground/50 print:border-black"></div>
                        <Label className="text-sm text-muted-foreground">Signature of consumer(s) (only if notified on paper)</Label>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4 border-t border-border print:border-black">
                      (*) Delete as appropriate.
                    </p>
                  </div>

                  <div className="pt-6 print:hidden">
                    <Button onClick={handlePrint} className="w-full md:w-auto gap-2">
                      <Printer className="w-4 h-4" />
                      Print Form
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

export default WiderrufsbelehrungPage_EN;
