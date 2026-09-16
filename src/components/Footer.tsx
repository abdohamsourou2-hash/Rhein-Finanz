import { Phone, Smartphone, Mail, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';
import { ActiveModal } from '../types';

interface FooterProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-[#1E2229] text-white border-t border-[#c4a323]/30 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & USP (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.svg"
                alt="Rhein-Finanz Emblem"
                className="w-11 h-11 object-contain drop-shadow-sm shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-2xl font-black tracking-tight text-white block">
                  Rhein<span className="text-[#c4a323]">-</span>Finanz
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c4a323]">
                  Ihr Finanzpartner
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              <strong className="text-white">Unabhängig statt hausgemacht.</strong> Als direkter Kreditgeber erstellen wir maßgeschneiderte Finanzierungskonzepte – ohne die starren bürokratischen Hürden klassischer Hausbanken.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#c4a323]" />
              <span>Über 15 Jahre Banken-Expertise & Zertifizierter Makler</span>
            </div>
          </div>

          {/* Column 2: Direct Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Direktkontakt & Standort
            </h4>

            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                <span>Hauptstraße 68, 53340 Meckenheim</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c4a323] shrink-0" />
                <a href="tel:022258305776" className="hover:text-[#c4a323] transition-colors">
                  Festnetz: 02225 8305776
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Smartphone className="w-4 h-4 text-[#c4a323] shrink-0" />
                <a href="tel:01775169324" className="hover:text-[#c4a323] transition-colors">
                  Mobil: 0177 5169324
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Anfrage."
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: 02225 8305776
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c4a323] shrink-0" />
                <a href="mailto:info@rheinfinanz.com" className="hover:text-[#c4a323] transition-colors">
                  info@rheinfinanz.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Leistungsbereiche
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#wertrechner" className="hover:text-[#c4a323] transition-colors">
                  • Immobilien-Wertrechner
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#c4a323] transition-colors">
                  • Finanzierungen & Kreditvergabe
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#c4a323] transition-colors">
                  • Immobilienmakler Rheinland
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#c4a323] transition-colors">
                  • Absicherungen & Versicherung
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#c4a323] transition-colors">
                  • Geldanlage & Vermögensaufbau
                </a>
              </li>
              <li>
                <a href="#ablauf" className="hover:text-[#c4a323] transition-colors">
                  • Der 3-Schritte-Ablauf
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright 2026 & Legal Modal Triggers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Rhein-Finanz. Alle Rechte vorbehalten.
          </div>

          {/* Functioning & prominent Modal Popups for Impressum, Datenschutz, Erstinformation & AGB */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
            <button
              onClick={() => onOpenModal('impressum')}
              className="text-gray-300 hover:text-[#c4a323] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Impressum
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => onOpenModal('datenschutz')}
              className="text-gray-300 hover:text-[#c4a323] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Datenschutzerklärung
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => onOpenModal('erstinformation')}
              className="text-gray-300 hover:text-[#c4a323] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Erstinformation (§ 34i/§ 34c)
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => onOpenModal('agb')}
              className="text-gray-300 hover:text-[#c4a323] transition-colors underline underline-offset-4 cursor-pointer"
            >
              AGB & Widerruf
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
