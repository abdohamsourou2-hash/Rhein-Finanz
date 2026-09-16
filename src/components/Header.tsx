import { useState } from 'react';
import { Phone, Smartphone, MessageSquare, Menu, X, ShieldCheck, MapPin, Calculator, CreditCard, Building2, Zap, Home, Users, Briefcase } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1E2229]/10 shadow-xs">
      {/* Top Bar for High Trust & Direct Calling */}
      <div className="bg-[#1E2229] text-white text-xs py-2 px-4 sm:px-6 lg:px-6 xl:px-8 border-b border-white/5">
        <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Top Left: Address & Regional Trust */}
          <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin className="w-3.5 h-3.5 text-[#c4a323] shrink-0" />
              <span>Hauptstraße 68, 53340 Meckenheim</span>
            </span>
            <span className="hidden md:inline-block text-gray-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c4a323] shrink-0" />
              <span>15+ Jahre Bankerfahrung &bull; 400+ Partnerbanken</span>
            </span>
          </div>

          {/* Top Right: Direct Contact Numbers & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold ml-auto">
            <a 
              href="tel:022258305776" 
              className="flex items-center gap-1.5 text-white hover:text-[#c4a323] transition-colors"
              title="Festnetz Büro Meckenheim anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-[#c4a323] shrink-0" />
              <span>02225 8305776</span>
            </a>
            <span className="hidden sm:inline-block text-gray-600">|</span>
            <a 
              href="tel:01775169324" 
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-[#c4a323] transition-colors"
              title="Mobilfunk direkt anrufen"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#c4a323] shrink-0" />
              <span>0177 5169324</span>
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Finanzierungsanfrage." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:brightness-110 font-bold transition-all"
              title="WhatsApp-Chat starten"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#25D366] shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4 w-full">
          
          {/* Left Column: Brand Logo & Title */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden" aria-label="Rhein-Finanz Startseite">
              <img 
                src="/logo.svg" 
                alt="Rhein-Finanz Logo - Ihr Finanzpartner" 
                className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 object-contain drop-shadow-xs group-hover:scale-105 transition-transform shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-[#1E2229] leading-tight">
                  Rhein<span className="text-[#c4a323]">-</span>Finanz
                </span>
                <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-[#c4a323] whitespace-nowrap">
                  Finanzierungen &bull; Immobilien
                </span>
              </div>
            </a>
          </div>

          {/* Center Column: Symmetrically & Mathematically Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-1 xl:px-3">
            <div className="flex items-center gap-0.5 xl:gap-1 p-1 xl:p-1.5 rounded-xl bg-gray-50/90 border border-gray-200/70 shadow-xs">
              
              <a 
                href="#zinsrechner" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                <span className="hidden xl:inline">Baufinanzierung</span>
                <span className="xl:hidden">Baufi</span>
              </a>

              <a 
                href="#privatkredit" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                Privatkredit
              </a>

              <a 
                href="#unternehmensfinanzierung" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                Firmenkredit
              </a>

              <a 
                href="#strom-gas" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                Strom &amp; Gas
              </a>

              <a 
                href="#wertrechner" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                Wertermittlung
              </a>

              <a 
                href="#ueber-uns" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap"
              >
                Über uns
              </a>

              <a 
                href="#partner-werden" 
                className="px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-lg text-xs xl:text-sm font-bold text-[#1E2229] hover:text-[#c4a323] hover:bg-white transition-all whitespace-nowrap flex items-center gap-1"
              >
                <span>Karriere</span>
                <span className="text-[9px] xl:text-[10px] font-black bg-[#c4a323] text-[#1E2229] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Partner
                </span>
              </a>

            </div>
          </nav>

          {/* Right Column: Action Buttons for Desktop (Guaranteed No-Cutoff) */}
          <div className="hidden lg:flex items-center justify-end shrink-0 gap-1.5 xl:gap-2.5">
            {/* Shimmer Button 1: Jetzt anrufen */}
            <a
              href="tel:022258305776"
              id="header-call-cta"
              className="shimmer-btn inline-flex items-center gap-1.5 xl:gap-2 px-2.5 py-2 xl:px-3.5 xl:py-2.5 rounded-xl font-bold text-xs xl:text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-xs hover:shadow-md active:scale-98 whitespace-nowrap shrink-0"
              title="Direkt telefonisch im Büro Meckenheim anrufen"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 text-[#1E2229]" />
              <span className="hidden xl:inline">02225 8305776</span>
              <span className="xl:hidden">Anrufen</span>
            </a>

            {/* Shimmer Button 2: WhatsApp (Fully visible with guaranteed margin) */}
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Finanzierung%20bzw.%20Immobilienbewertung."
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="shimmer-btn inline-flex items-center gap-1.5 px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-xl font-bold text-xs xl:text-sm text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs hover:shadow-md active:scale-98 whitespace-nowrap shrink-0"
              title="Schnell per WhatsApp schreiben"
            >
              <MessageSquare className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Quick Action Buttons & Hamburger Menu (screens < lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:022258305776"
              className="shimmer-btn flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#1E2229] bg-[#c4a323]"
              aria-label="Jetzt anrufen"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Anrufen</span>
            </a>
            
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn flex items-center p-2 rounded-lg text-white bg-[#25D366]"
              aria-label="WhatsApp Direkt"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E2229] hover:bg-gray-100 focus:outline-hidden transition-colors"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Dropdown Navigation (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
          
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 pt-1 pb-1">
            Finanzdienstleistungen &amp; Rechner
          </div>

          <a
            href="#zinsrechner"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-[#c4a323]" />
              <span>Baufinanzierung</span>
            </div>
            <span className="text-[11px] font-bold bg-[#c4a323]/20 text-[#1E2229] px-2 py-0.5 rounded-full">Rechner</span>
          </a>

          <a
            href="#privatkredit"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-[#c4a323]" />
              <span>Privatkredit &amp; Sofortkredit</span>
            </div>
            <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Günstig</span>
          </a>

          <a
            href="#unternehmensfinanzierung"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-[#c4a323]" />
              <span>Firmenkredit &amp; Gewerbe</span>
            </div>
            <span className="text-[11px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Mittelstand</span>
          </a>

          <a
            href="#strom-gas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-[#c4a323]" />
              <span>Strom- &amp; Gastarife</span>
            </div>
            <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Bis 500€ sparen</span>
          </a>

          <a
            href="#wertrechner"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Home className="w-5 h-5 text-[#c4a323]" />
              <span>Immobilienwertermittlung</span>
            </div>
            <span className="text-[11px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Kostenlos</span>
          </a>

          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 pt-3 pb-1 border-t border-gray-100">
            Unternehmen &amp; Kontakt
          </div>

          <a
            href="#ueber-uns"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 p-2.5 rounded-lg text-base font-semibold text-[#1E2229] hover:bg-gray-50 hover:text-[#c4a323] transition-colors"
          >
            <Users className="w-5 h-5 text-[#c4a323]" />
            <span>Über uns &amp; 15 Jahre Bankerfahrung</span>
          </a>

          <a
            href="#partner-werden"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg text-base font-bold text-[#1E2229] bg-[#c4a323]/10 hover:bg-[#c4a323]/20 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-[#c4a323]" />
              <span>Finanzierungspartner werden</span>
            </div>
            <span className="text-[10px] font-black bg-[#c4a323] text-[#1E2229] px-2 py-0.5 rounded-full uppercase">Karriere</span>
          </a>

          {/* Quick Contact Action in Mobile Drawer */}
          <div className="pt-3 space-y-2">
            <a
              href="tel:022258305776"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-[#1E2229] bg-[#c4a323] rounded-xl shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#1E2229]" />
              Büro Meckenheim: 02225 8305776
            </a>
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Anfrage."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#25D366] rounded-xl shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Direkt per WhatsApp schreiben
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
