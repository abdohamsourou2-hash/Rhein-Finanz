import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MortgageCalculator from './components/MortgageCalculator';
import PersonalLoanSection from './components/PersonalLoanSection';
import BusinessFinanceSection from './components/BusinessFinanceSection';
import EnergySection from './components/EnergySection';
import BankPartners from './components/BankPartners';
import ValueCalculator from './components/ValueCalculator';
import CoreServices from './components/CoreServices';
import ProcessSteps from './components/ProcessSteps';
import BecomePartnerSection from './components/BecomePartnerSection';
import AboutRegionality from './components/AboutRegionality';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import MobileQuickBar from './components/MobileQuickBar';
import CookieConsent from './components/CookieConsent';
import { ActiveModal } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  const handleOpenModal = (modal: ActiveModal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleOpenCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  const handleCloseCookieSettings = () => {
    setIsCookieSettingsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1E2229]">
      {/* Primary Navigation Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="grow">
        {/* 1. Hero Section with H1, 2 Shimmer Buttons, Vorteile, Trust & Family Photo */}
        <HeroSection />

        {/* 2. Baufi24-Inspired Baufinanzierungs- & Zinsrechner mit integriertem Lead-Formular */}
        <MortgageCalculator />

        {/* 3. Trust-Block: Über 400 Partnerbanken im Vergleich mit den 12 bekanntesten Instituten */}
        <BankPartners />

        {/* 4. The Core Service Tiles */}
        <CoreServices />

        {/* 5. Neuer Dienstleistungs-Bereich: Privatkredit & Sofortkredit mit interaktivem PK-Rechner & Lead-Routing an info@rheinfinanz.com */}
        <PersonalLoanSection />

        {/* 6. Neue Rubrik: Unternehmensfinanzierung & Gewerbekredite für Selbstständige & Mittelstand */}
        <BusinessFinanceSection />

        {/* 7. Neue Rubrik: Strom- & Gasverträge für Privat & Gewerbe (Wechselservice & Tarifoptimierung) */}
        <EnergySection />

        {/* 8. The 3-Step Process: Der direkte Weg zum Kredit */}
        <ProcessSteps />

        {/* 6. Interactive Lead Tool: Realistische Immobilien-Wertermittlung ("Wie viel ist meine Immobilie wert?") */}
        <ValueCalculator />

        {/* 7. Rubrik: Finanzierungspartner werden / Karriere & Vertriebspartner-Aufbau */}
        <BecomePartnerSection />

        {/* 8. Regionality, Inhaber-Portrait (Hamo Hussein) & High Conversion Contact */}
        <AboutRegionality />
      </main>

      {/* 7. Footer with Address, Phone, Copyright 2026, Legal Modals & Cookie Settings */}
      <Footer onOpenModal={handleOpenModal} onOpenCookieSettings={handleOpenCookieSettings} />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar />

      {/* DSGVO & TTDSG Compliant Cookie Consent Banner & Settings Modal */}
      <CookieConsent
        onOpenModal={handleOpenModal}
        isOpenExplicitly={isCookieSettingsOpen}
        onCloseExplicit={handleCloseCookieSettings}
      />

      {/* Accessible Modals for Impressum, Datenschutzerklärung, Erstinformation & AGB */}
      <LegalModals activeModal={activeModal} onClose={handleCloseModal} onSwitchModal={handleOpenModal} />
    </div>
  );
}
