
import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { usePDFGenerator } from '@/utils/PDFGenerator.js';
import { toast } from 'sonner';

const PDFDownloadButton = () => {
  const { currentLanguage } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';
  
  const { generatePDF, isGenerating } = usePDFGenerator(isEN, isFR);

  const buttonText = isFR
    ? 'Télécharger la configuration en PDF'
    : (isEN 
      ? 'Download the configuration as a PDF' 
      : 'Konfiguration als PDF herunterladen');

  const handleDownload = async () => {
    try {
      await generatePDF();
      const successMessage = isFR
        ? 'Le PDF a été créé et téléchargé avec succès.'
        : (isEN 
          ? 'PDF successfully created and downloaded.' 
          : 'PDF wurde erfolgreich erstellt und heruntergeladen.');
      toast.success(successMessage);
    } catch (error) {
      const errorMessage = isFR
        ? 'Erreur lors de la création du PDF. Veuillez réessayer plus tard.'
        : (isEN 
          ? 'Error creating PDF. Please try again later.' 
          : 'Fehler bei der PDF-Erstellung. Bitte versuchen Sie es später erneut.');
      toast.error(errorMessage);
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleDownload} 
      disabled={isGenerating}
      className="w-full sm:w-auto gap-2 border-primary/20 hover:bg-primary/5"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {buttonText}
    </Button>
  );
};

export default PDFDownloadButton;
