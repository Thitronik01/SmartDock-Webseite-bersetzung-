
import React, { useEffect } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';

import Step1Country from './Step1Country.jsx';
import Step2SystemSelection from './Step2SystemSelection.jsx';
import Step3ManufacturerSelection from './Step3ManufacturerSelection.jsx';
import Step4MerCruiserJoystick from './Step4MerCruiserJoystick.jsx';
import Step5MerCruiserSystem from './Step5MerCruiserSystem.jsx';
import Step6YamahaJoystick from './Step6YamahaJoystick.jsx';
import Step8YamahaSystem from './Step8YamahaSystem.jsx';
import Step9VolvoPentaJoystick from './Step9VolvoPentaJoystick.jsx';
import Step10VolvoPentaJoystickModel from './Step10VolvoPentaJoystickModel.jsx';
import Step11VolvoPentaSystem from './Step11VolvoPentaSystem.jsx';
import Step4ManufacturerSelection from './Step4ManufacturerSelection.jsx';
import Step5InstallationService from './Step5InstallationService.jsx';
import Step8UnifiedSummaryAndContact from './Step8UnifiedSummaryAndContact.jsx';
import Step10Confirmation from './Step10Confirmation.jsx';
import SummaryPanel from './SummaryPanel.jsx';

const ConfiguratorLayout = () => {
  const { currentStepId } = useConfigurator();

  // Auto-scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStepId]);

  const renderStep = () => {
    switch (currentStepId) {
      case 'step1_country': return <Step1Country />;
      case 'step2_system': return <Step2SystemSelection />;
      case 'step3_manufacturer': return <Step3ManufacturerSelection />;
      case 'step4_mer_joy': return <Step4MerCruiserJoystick />;
      case 'step5_mer_sys': return <Step5MerCruiserSystem />;
      case 'step6_yam_joy': return <Step6YamahaJoystick />;
      case 'step8_yam_sys': return <Step8YamahaSystem />;
      case 'step9_vol_joy': return <Step9VolvoPentaJoystick />;
      case 'step10_vol_joy_mod': return <Step10VolvoPentaJoystickModel />;
      case 'step_vol_sys': return <Step11VolvoPentaSystem />;
      case 'step_thruster': return <Step4ManufacturerSelection />;
      case 'step_install': return <Step5InstallationService />;
      case 'step_unified': return <Step8UnifiedSummaryAndContact />;
      case 'step10_confirmation': return <Step10Confirmation />;
      default: return <Step1Country />;
    }
  };

  // If we are on the confirmation screen or unified summary, use a full-width centered layout
  if (currentStepId === 'step10_confirmation' || currentStepId === 'step_unified') {
    return (
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {renderStep()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Configurator Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative items-start">
          
          {/* Left Column - Questions Area */}
          <div className="md:col-span-7 lg:col-span-8 w-full min-w-0 flex flex-col relative h-full">
            {renderStep()}
          </div>

          {/* Right Column - Summary Panel (Sticky positioned) */}
          <div className="md:col-span-5 lg:col-span-4 w-full sticky top-24 md:top-32">
            <SummaryPanel />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConfiguratorLayout;
