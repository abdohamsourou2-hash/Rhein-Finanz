import { useState } from 'react';
import { Phone, Smartphone, MessageSquare, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#1E2229]/10 shadow-xs">
      {/* Top Bar for High Trust & Direct Calling */}
      <div className="bg-[#1E2229] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-gray-300">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin className="w-3.5 h-3.5 text-[#c4a323]" />
              Hauptstraße 68, 53340 Meckenheim
            </span>
            <span className="hidden md:inline-block text-gray-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c4a323]" />
              Über 15 Jahre Banken-Expertise & Zertifizierter Makler
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold ml-auto">
            <a 
              href="tel:022258305776" 
              className="flex items-center gap-1.5 hover:text-[#c4a323] transition-colors"
              title="Festnetz Meckenheim anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-[#c4a323]" />
              <span>02225 8305776</span>
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Anfrage%20zu%20einem%20Finanzierungsangebot." 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#25D366] hover:brightness-110 font-semibold transition-all"
              title="WhatsApp-Chat starten"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp Direkt</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-hidden" aria-label="Rhein-Finanz Startseite">
            <img 
              src="/logo.svg" 
              alt="Rhein-Finanz Logo - Ihr Finanzpartner" 
              className="w-12 h-12 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1E2229]">
                  Rhein<span className="text-[#c4a323]">-</span>Finanz
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#c4a323]">
                Ihr Finanzdienstleister in Meckenheim
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-semibold text-[#1E2229]">
            <a href="#vorteile" className="hover:text-[#c4a323] transition-colors py-2">
              Vorteile
            </a>
            <a href="#zinsrechner" className="hover:text-[#c4a323] transition-colors py-2 flex items-center gap-1.5">
              <span>Baufinanzierung</span>
              <span className="text-[10px] font-bold bg-[#c4a323]/20 text-[#1E2229] border border-[#c4a323]/40 px-1.5 py-0.5 rounded-full">
                Rechner
              </span>
            </a>
            <a href="#privatkredit" className="hover:text-[#c4a323] transition-colors py-2 flex items-center gap-1.5">
              <span>Privatkredit</span>
            </a>
            <a href="#unternehmensfinanzierung" className="hover:text-[#c4a323] transition-colors py-2 flex items-center gap-1.5 font-medium">
              <span>Firmenkredite</span>
            </a>
            <a href="#strom-gas" className="hover:text-[#c4a323] transition-colors py-2 flex items-center gap-1.5 font-medium">
              <span>Strom & Gas</span>
            </a>
            <a href="#bankpartner" className="hover:text-[#c4a323] transition-colors py-2">
              Bankenvergleich
            </a>
            <a href="#wertrechner" className="hover:text-[#c4a323] transition-colors py-2">
              Immobilienbewertung
            </a>
            <a href="#leistungen" className="hover:text-[#c4a323] transition-colors py-2">
              Leistungen
            </a>
            <a href="#partner-werden" className="hover:text-[#c4a323] transition-colors py-2 flex items-center gap-1.5 font-bold text-[#1E2229]">
              <span>Partner werden</span>
              <span className="text-[10px] font-black bg-[#c4a323] text-[#1E2229] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Karriere
              </span>
            </a>
            <a href="#ueber-uns" className="hover:text-[#c4a323] transition-colors py-2">
              Über uns
            </a>
          </nav>

          {/* Right Action CTA Buttons with Shimmer: 'Jetzt anrufen' and 'WhatsApp' */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Shimmer Button 1: Jetzt anrufen */}
            <a
              href="tel:022258305776"
              id="header-call-cta"
              className="shimmer-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-sm hover:shadow-md active:scale-98"
              title="Direkt telefonisch beraten lassen"
            >
              <Phone className="w-4 h-4 shrink-0 text-[#1E2229]" />
              <span>Jetzt anrufen</span>
            </a>

            {/* Shimmer Button 2: WhatsApp */}
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Finanzierung%20bzw.%20Immobilienbewertung."
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="shimmer-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-sm hover:shadow-md active:scale-98"
              title="Schnell per WhatsApp schreiben"
            >
              <MessageSquare className="w-4 h-4 shrink-0 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Quick Action Buttons & Menu */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:022258305776"
              className="shimmer-btn flex sm:hidden items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-[#1E2229] bg-[#c4a323]"
              aria-label="Jetzt anrufen"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Anrufen</span>
            </a>
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn flex sm:hidden items-center p-2 rounded-md text-white bg-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1E2229] hover:bg-gray-100 focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <a
            href="#zinsrechner"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            <span>Kostenloser Baufinanzierungsrechner</span>
            <span className="text-[10px] font-bold bg-[#c4a323]/20 text-[#1E2229] px-2 py-0.5 rounded-full">Gratis</span>
          </a>
          <a
            href="#privatkredit"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            <span>Privatkredit & Ratenkredit</span>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Rechner</span>
          </a>
          <a
            href="#unternehmensfinanzierung"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Unternehmensfinanzierung & Firmenkredit
          </a>
          <a
            href="#strom-gas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            <span>Strom & Gas Verträge optimieren</span>
            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Bis 500€ sparen</span>
          </a>
          <a
            href="#bankpartner"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            400+ Banken im Vergleich
          </a>
          <a
            href="#wertrechner"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Immobilien-Wertrechner
          </a>
          <a
            href="#leistungen"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Kernbereiche & Kreditvergabe
          </a>
          <a
            href="#partner-werden"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between py-2.5 text-base font-bold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323] bg-[#c4a323]/10 px-2 rounded-lg"
          >
            <span>Finanzierungspartner werden</span>
            <span className="text-[10px] font-black bg-[#c4a323] text-[#1E2229] px-2 py-0.5 rounded-full uppercase">Karriere</span>
          </a>
          <a
            href="#ablauf"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Der direkte Weg zum Angebot
          </a>
          <a
            href="#regionalitaet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Über mich & 15 Jahre Banken-Expertise
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-[#1E2229] border-b border-gray-100 hover:text-[#c4a323]"
          >
            Kontakt & Anfahrt
          </a>

          <div className="pt-3 space-y-2.5">
            <a
              href="tel:022258305776"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-[#1E2229] bg-gray-100 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#c4a323]" />
              Festnetz: 02225 8305776
            </a>
            <a
              href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Anfrage."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-[#25D366] rounded-md"
            >
              <MessageSquare className="w-4 h-4" />
              Per WhatsApp schreiben
            </a>
            <a
              href="#wertrechner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 text-sm font-bold text-[#1E2229] bg-[#c4a323] rounded-md"
            >
              Direktes Angebot anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
