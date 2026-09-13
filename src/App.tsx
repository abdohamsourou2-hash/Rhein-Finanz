import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MortgageCalculator from './components/MortgageCalculator';
import ValueCalculator from './components/ValueCalculator';
import CoreServices from './components/CoreServices';
import ProcessSteps from './components/ProcessSteps';
import AboutRegionality from './components/AboutRegionality';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import MobileQuickBar from './components/MobileQuickBar';
import { ActiveModal } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const handleOpenModal = (modal: ActiveModal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
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

        {/* 3. The 4 Core Service Tiles */}
        <CoreServices />

        {/* 4. The 3-Step Process: Der direkte Weg zum Kredit */}
        <ProcessSteps />

        {/* 5. Interactive Lead Tool: Realistische Immobilien-Wertermittlung ("Wie viel ist meine Immobilie wert?") */}
        <ValueCalculator />

        {/* 6. Regionality, Inhaber-Portrait (Hamo Hussein) & High Conversion Contact */}
        <AboutRegionality />
      </main>

      {/* 7. Footer with Address, Phone, Copyright 2026, Legal Modals */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar />

      {/* Accessible Modals for Impressum, Datenschutzerklärung, Erstinformation & AGB */}
      <LegalModals activeModal={activeModal} onClose={handleCloseModal} onSwitchModal={handleOpenModal} />
    </div>
  );
}
