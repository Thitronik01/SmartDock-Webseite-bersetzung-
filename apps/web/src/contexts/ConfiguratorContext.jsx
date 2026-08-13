
import React, { createContext, useState, useContext, useEffect } from 'react';
import { calculateDevices, getConfigurationWithPrices, roundPrice } from '@/utils/PriceCalculator.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const ConfiguratorContext = createContext();

// Helper function to extract motor count reliably
const extractMotorCount = (val) => {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  
  const str = String(val).toLowerCase().trim();
  if (str === '1' || str === '1 motor' || str === 'single') return 1;
  if (str === '2' || str === '2+' || str === '2+ motoren' || str.includes('twin') || str.includes('dual') || str.includes('triple') || str.includes('quad')) return 2;
  
  const match = str.match(/\d+/);
  if (match) {
    const num = parseInt(match[0], 10);
    return num >= 2 ? 2 : num; 
  }
  return 0;
};

export const ConfiguratorProvider = ({ children }) => {
  const { currentLanguage } = useLanguage();
  const [currentStepId, setCurrentStepId] = useState('step1_country');
  const [selectedCountry, setSelectedCountryState] = useState('');
  
  const [selectedProducts, setSelectedProducts] = useState({
    ecu: null,
    tcu: [],
    acu: null,
    wcu: null,
    horn: false
  });
  
  const [engineManufacturer, setEngineManufacturer] = useState('');
  const [merCruiserJoystick, setMerCruiserJoystick] = useState('');
  const [merCruiserSystem, setMerCruiserSystem] = useState('');
  
  const [yamahaJoystick, setYamahaJoystick] = useState('');
  const [yamahaMotorCount, setYamahaMotorCount] = useState(0);
  const [yamahaSystem, setYamahaSystem] = useState('');
  
  const [volvoPentaJoystick, setVolvoPentaJoystick] = useState('');
  const [volvoPentaJoystickModel, setVolvoPentaJoystickModel] = useState('');
  const [volvoPentaMotorCount, setVolvoPentaMotorCount] = useState(0);
  const [volvoPentaSingleSystem, setVolvoPentaSingleSystem] = useState('');
  const [volvoPentaSystem, setVolvoPentaSystem] = useState('');

  const [thrusterManufacturer, setThrusterManufacturer] = useState('');
  const [thrusterType, setThrusterType] = useState('');
  const [installationService, setInstallationService] = useState(false);

  const [calculatedDevices, setCalculatedDevices] = useState([]);

  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentRequestId, setCurrentRequestId] = useState(null);
  const [configurationRecord, setConfigurationRecord] = useState(null);

  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: ''
  });

  const [priceData, setPriceData] = useState({
    configurationPrices: [],
    subtotal: 0,
    bundleDiscount: 0,
    totalPrice: 0,
    vat: 19,
    currency: 'EUR'
  });

  const [configData, setConfigData] = useState({
    ecuCount: 0,
    motorType: '',
    motorCount: 0,
    joystickType: '',
    tcu: false,
    bugstrahlruder: false,
    heckstrahlruder: false,
    acu: false,
    ankerwinde1: false,
    ankerwinde2: false,
    wcu: false,
    ankerwinch1: false,
    ankerwinch2: false,
    horn: false,
    referenceNumber: '',
    customerNumber: '',
    dealerId: '',
    status: 'pending',
    configurationPrices: [],
    subtotal: 0,
    bundleDiscount: 0,
    totalPrice: 0
  });

  const [selectedDealer, setSelectedDealer] = useState(null);

  const addAnswer = (stepKey, value) => {
    setAnswers(prev => ({ ...prev, [stepKey]: value }));
  };

  const updateConfigField = (field, value) => {
    setConfigData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    setContactData(prev => ({ ...prev, country: selectedCountry }));
  }, [selectedCountry]);

  const calculateAndStorePrices = () => {
    const data = getConfigurationWithPrices(selectedProducts, thrusterManufacturer, selectedCountry || 'Deutschland', answers?.promoCode, installationService, currentLanguage);
    
    const rSubtotal = roundPrice(data.subtotal);
    const rBundleDiscount = roundPrice(data.bundleDiscount);
    const rTotalPrice = roundPrice(data.totalPrice);

    setPriceData({
      configurationPrices: data.items,
      subtotal: rSubtotal,
      bundleDiscount: rBundleDiscount,
      totalPrice: rTotalPrice,
      vat: data.vat,
      currency: data.currency || 'EUR'
    });
    
    setConfigData(prev => ({
      ...prev,
      configurationPrices: data.items,
      subtotal: rSubtotal,
      bundleDiscount: rBundleDiscount,
      totalPrice: rTotalPrice
    }));
  };

  useEffect(() => {
    calculateAndStorePrices();
    
    setConfigData(prev => {
      const nextEcuCount = selectedProducts.ecu ? 1 : 0;
      const nextMotorType = engineManufacturer || '';
      const nextJoystickType = merCruiserJoystick || yamahaJoystick || volvoPentaJoystickModel || volvoPentaJoystick || '';
      const nextTcu = selectedProducts.tcu?.length > 0;
      const nextBugstrahlruder = selectedProducts.tcu?.includes('Bugstrahlruder') || false;
      const nextHeckstrahlruder = selectedProducts.tcu?.includes('Heckstrahlruder') || false;
      const nextAcu = !!selectedProducts.acu;
      const nextWcu = !!selectedProducts.wcu;
      const nextHorn = !!selectedProducts.horn;
      const nextDealerId = !installationService ? '' : (selectedDealer?.id || '');

      if (
        prev.ecuCount !== nextEcuCount ||
        prev.motorType !== nextMotorType ||
        prev.joystickType !== nextJoystickType ||
        prev.tcu !== nextTcu ||
        prev.bugstrahlruder !== nextBugstrahlruder ||
        prev.heckstrahlruder !== nextHeckstrahlruder ||
        prev.acu !== nextAcu ||
        prev.wcu !== nextWcu ||
        prev.horn !== nextHorn ||
        prev.dealerId !== nextDealerId
      ) {
        return {
          ...prev,
          ecuCount: nextEcuCount,
          motorType: nextMotorType,
          joystickType: nextJoystickType,
          tcu: nextTcu,
          bugstrahlruder: nextBugstrahlruder,
          heckstrahlruder: nextHeckstrahlruder,
          acu: nextAcu,
          ankerwinde1: nextAcu, 
          ankerwinde2: false, 
          wcu: nextWcu,
          ankerwinch1: nextWcu,
          ankerwinch2: false,
          horn: nextHorn,
          dealerId: nextDealerId
        };
      }
      return prev;
    });
  }, [
    selectedProducts, engineManufacturer, merCruiserJoystick, 
    yamahaJoystick, volvoPentaJoystickModel, volvoPentaJoystick,
    installationService, selectedDealer, thrusterManufacturer, selectedCountry, answers?.promoCode, currentLanguage
  ]);

  useEffect(() => {
    setAnswers(prev => ({
      ...prev,
      country: selectedCountry,
      language: 'de',
      engineManufacturer,
      merCruiserJoystick,
      merCruiserSystem,
      yamahaJoystick,
      yamahaMotorCount: configData.motorCount === 1 ? '1 Motor' : (configData.motorCount === 2 ? '2+ Motoren' : ''),
      yamahaSystem,
      volvoPentaJoystick,
      volvoPentaJoystickModel,
      volvoPentaMotorCount: configData.motorCount === 1 ? '1 Motor' : (configData.motorCount === 2 ? '2+ Motoren' : ''),
      volvoPentaSingleSystem,
      volvoPentaSystem,
      thrusterManufacturer,
      thrusterType,
      installationService: installationService ? 'Ja' : 'Nein',
      ecu: selectedProducts.ecu,
      tcu: selectedProducts.tcu?.join(', '),
      acu: selectedProducts.acu,
      wcu: selectedProducts.wcu,
      horn: selectedProducts.horn ? 'Ja' : 'Nein',
      dealer: !installationService ? 'Kein Einbauservice' : (selectedDealer?.name || null)
    }));
  }, [
    selectedCountry, engineManufacturer, merCruiserJoystick,
    merCruiserSystem, yamahaJoystick, yamahaSystem, configData.motorCount,
    volvoPentaJoystick, volvoPentaJoystickModel, volvoPentaSingleSystem, volvoPentaSystem,
    thrusterManufacturer, thrusterType, installationService, selectedProducts, selectedDealer
  ]);

  useEffect(() => {
    const extras = {
      acu: selectedProducts.acu,
      wcu: selectedProducts.wcu,
      horn: selectedProducts.horn
    };
    const devices = calculateDevices(
      selectedProducts.ecu,
      selectedProducts.tcu,
      extras,
      thrusterManufacturer,
      installationService,
      currentLanguage,
      selectedCountry
    );
    setCalculatedDevices(devices);
  }, [selectedProducts, thrusterManufacturer, installationService, currentLanguage, selectedCountry]);

  const setCountry = (countryName) => {
    setSelectedCountryState(countryName);
  };

  const addProduct = (category, value) => {
    setSelectedProducts(prev => ({
      ...prev,
      [category]: value
    }));
    
    if (category === 'ecu') {
      const num = extractMotorCount(value);
      setConfigData(prev => ({ ...prev, motorCount: num }));
    }
  };

  const removeProduct = (category) => {
    setSelectedProducts(prev => {
      const next = { ...prev };
      if (Array.isArray(next[category])) {
        next[category] = [];
      } else if (typeof next[category] === 'boolean') {
        next[category] = false;
      } else {
        next[category] = null;
      }
      return next;
    });
    
    if (category === 'ecu') {
      setConfigData(prev => ({ ...prev, motorCount: 0 }));
    }
  };

  const getStepSequence = () => {
    const seq = ['step1_country', 'step2_system'];
    if (selectedProducts.ecu) {
      seq.push('step3_manufacturer');
      if (engineManufacturer === 'MerCruiser/Mercury') {
        seq.push('step4_mer_joy', 'step5_mer_sys');
      } else if (engineManufacturer === 'Yamaha') {
        seq.push('step6_yam_joy', 'step8_yam_sys');
      } else if (engineManufacturer === 'Volvo Penta') {
        seq.push('step9_vol_joy');
        if (volvoPentaJoystick === 'Ja, ein Joystick ist vorhanden') {
          seq.push('step10_vol_joy_mod');
        } else if (volvoPentaJoystick === 'Nein, nur Gashebel') {
          seq.push('step_vol_sys');
        }
      }
    }
    if (selectedProducts.tcu.length > 0) {
      seq.push('step_thruster');
    }
    
    seq.push('step_install', 'step_unified', 'step10_confirmation');
    
    return seq;
  };

  const goNext = () => {
    const seq = getStepSequence();
    const idx = seq.indexOf(currentStepId);
    if (idx !== -1 && idx < seq.length - 1) {
      setCurrentStepId(seq[idx + 1]);
    }
  };

  const goBack = () => {
    const seq = getStepSequence();
    const idx = seq.indexOf(currentStepId);
    if (idx > 0) {
      setCurrentStepId(seq[idx - 1]);
    }
  };

  const resetConfigurator = () => {
    setCurrentStepId('step1_country');
    setSelectedCountryState('');
    setSelectedProducts({ ecu: null, tcu: [], acu: null, wcu: null, horn: false });
    setEngineManufacturer('');
    setMerCruiserJoystick('');
    setMerCruiserSystem('');
    setYamahaJoystick('');
    setYamahaMotorCount(0);
    setYamahaSystem('');
    setVolvoPentaJoystick('');
    setVolvoPentaJoystickModel('');
    setVolvoPentaMotorCount(0);
    setVolvoPentaSingleSystem('');
    setVolvoPentaSystem('');
    setThrusterManufacturer('');
    setThrusterType('');
    setInstallationService(false);
    setAnswers({});
    setIsCompleted(false);
    setCurrentRequestId(null);
    setConfigurationRecord(null);
    setSelectedDealer(null);
    
    setConfigData({
      ecuCount: 0,
      motorType: '',
      motorCount: 0,
      joystickType: '',
      tcu: false,
      bugstrahlruder: false,
      heckstrahlruder: false,
      acu: false,
      ankerwinde1: false,
      ankerwinde2: false,
      wcu: false,
      ankerwinch1: false,
      ankerwinch2: false,
      horn: false,
      referenceNumber: '',
      customerNumber: '',
      dealerId: '',
      status: 'pending',
      configurationPrices: [],
      subtotal: 0,
      bundleDiscount: 0,
      totalPrice: 0
    });
  };

  return (
    <ConfiguratorContext.Provider value={{
      currentStepId, setCurrentStepId,
      getStepSequence, goNext, goBack, resetConfigurator,
      selectedCountry, setCountry,
      selectedProducts, addProduct, removeProduct,
      engineManufacturer, setEngineManufacturer,
      merCruiserJoystick, setMerCruiserJoystick,
      merCruiserSystem, setMerCruiserSystem,
      yamahaJoystick, setYamahaJoystick,
      yamahaMotorCount, setYamahaMotorCount,
      yamahaSystem, setYamahaSystem,
      volvoPentaJoystick, setVolvoPentaJoystick,
      volvoPentaJoystickModel, setVolvoPentaJoystickModel,
      volvoPentaMotorCount, setVolvoPentaMotorCount,
      volvoPentaSingleSystem, setVolvoPentaSingleSystem,
      volvoPentaSystem, setVolvoPentaSystem,
      thrusterManufacturer, setThrusterManufacturer,
      thrusterType, setThrusterType,
      installationService, setInstallationService,
      calculatedDevices,
      answers, addAnswer,
      isCompleted, setIsCompleted,
      isSubmitting, setIsSubmitting,
      currentRequestId, setCurrentRequestId,
      configurationRecord, setConfigurationRecord,
      contactData, setContactData,
      configData, setConfigData, updateConfigField,
      selectedDealer, setSelectedDealer,
      priceData
    }}>
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => useContext(ConfiguratorContext);
