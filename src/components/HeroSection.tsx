import { CheckCircle2, ShieldCheck, Award, Landmark, Phone, MessageSquare, MapPin } from 'lucide-react';
import AdvisorPortrait from './AdvisorPortrait';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-200/90 pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Subtle gold and charcoal atmospheric accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#c4a323]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#1E2229]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: H1, Buttons, Vorteile, Trust */}
          <div className="lg:col-span-7 space-y-6" id="vorteile">
            
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2229] text-white text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#c4a323] animate-pulse" />
              <span>Rhein-Finanz – Direkter Finanzierungspartner vor Ort</span>
            </div>

            {/* H1 Heading - Strong, simple, impactful */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2229] tracking-tight leading-[1.12]">
              Ihr Finanzdienstleister in Meckenheim
            </h1>

            {/* DIRECTLY UNDER H1: BUTTONS WITH ADVISOR PHOTO */}
            <div className="pt-1 space-y-3">
              <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-3.5">
                
                {/* Action Buttons Group */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Shimmer Button 1: Jetzt anrufen */}
                  <a
                    href="tel:022258305776"
                    id="hero-call-cta"
                    className="shimmer-btn inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 group"
                  >
                    <Phone className="w-5 h-5 text-[#1E2229]" />
                    <span>02225 8305776 anrufen</span>
                  </a>

                  {/* Shimmer Button 2: WhatsApp */}
                  <a
                    href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20m%C3%B6chte%20mich%20unverbindlich%20%C3%BCber%20eine%20Finanzierung%20oder%20Immobilienbewertung%20informieren."
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-whatsapp-cta"
                    className="shimmer-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Foto & Advisor Badge direkt neben den Buttons */}
                <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white border border-gray-200/90 shadow-xs hover:border-[#c4a323]/60 transition-colors">
                  <AdvisorPortrait variant="hero" />
                  <div className="leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#1E2229]">Hamo Hussein</span>
                      <span className="text-[10px] font-bold bg-[#c4a323]/20 text-[#1E2229] px-1.5 py-0.5 rounded">
                        Bankkaufmann
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500 block">Inhaber & Ihr Kreditentscheider</span>
                  </div>
                </div>

              </div>

              <p className="text-xs text-gray-500 pt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c4a323]" />
                Hauptstraße 68, 53340 Meckenheim – Schnelle Termine & flexible Erreichbarkeit.
              </p>
            </div>

            {/* DIRECTLY UNDER BUTTONS: VORTEILE (Advantages) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#c4a323]">
                  Ihre Vorteile mit Rhein-Finanz
                </span>
                <div className="h-px bg-gray-200 grow" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1E2229]">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] border border-gray-200/80 hover:border-[#c4a323]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Eigene Darlehensentscheidung</span>
                    <span className="text-xs text-gray-600">Schnelle Zusage ohne zeitraubende Umwege</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] border border-gray-200/80 hover:border-[#c4a323]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Bankkaufmann mit 15+ Jahren Expertise</span>
                    <span className="text-xs text-gray-600">Fundierte Insider-Erfahrung aus Banken & Kreditabteilungen</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] border border-gray-200/80 hover:border-[#c4a323]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Vergleich aus 400+ Darlehensgebern</span>
                    <span className="text-xs text-gray-600">Beste Zinsen & maßgeschneiderte Monatsraten</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] border border-gray-200/80 hover:border-[#c4a323]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Zertifizierter Immobilienmakler</span>
                    <span className="text-xs text-gray-600">Seriöse & fundierte Immobilienbewertung</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] border border-gray-200/80 hover:border-[#c4a323]/40 transition-colors sm:col-span-2">
                  <CheckCircle2 className="w-5 h-5 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Persönlicher Partner vor Ort</span>
                    <span className="text-xs text-gray-600">Hauptstraße 68, 53340 Meckenheim – kein anonymes Callcenter</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Photo of Happy Family in front of their home, photographed from behind */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-200/90 relative group">
              
              {/* Gold Top Accent */}
              <div className="absolute -top-[2px] left-10 right-10 h-[4px] bg-[#c4a323] rounded-full" />

              {/* Photo Container */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden shadow-inner bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Glückliche Familie mit Mutter, Vater und zwei Kindern umarmend vor dem neuen Eigenheim"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge: Traum vom Eigenheim */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-lg p-3 text-[#1E2229] border border-[#c4a323]/30 shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/logo.svg" 
                        alt="Rhein-Finanz Emblem" 
                        className="w-7 h-7 object-contain shrink-0" 
                        referrerPolicy="no-referrer" 
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#1E2229] leading-tight">
                          Der Traum vom Eigenheim
                        </span>
                        <span className="block text-[11px] text-[#c4a323] font-semibold">
                          Erfolgreich finanziert im Rheinland
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-[#1E2229] text-white px-2 py-1 rounded">
                      Zinssicher
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Info under the photo */}
              <div className="mt-3.5 px-2 pb-1 flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#c4a323]" />
                  Finanzierung nach Maß
                </span>
                <span className="text-[#1E2229] font-bold">
                  Persönliche Beratung
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Baufi24-Style Trust-Grid Badges below Hero */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Trust Badge 1 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4.5 flex items-start gap-4 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm sm:text-base">Über 15 Jahre Banken-Expertise</h3>
                <p className="text-xs text-gray-600 leading-snug">
                  Insider-Erfahrung in der Kreditprüfung. Wir kennen die Vergabekriterien genau und setzen Lösungen durch.
                </p>
              </div>
            </div>

            {/* Trust Badge 2 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4.5 flex items-start gap-4 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm sm:text-base">Zertifizierter Makler</h3>
                <p className="text-xs text-gray-600 leading-snug">
                  Fachgerechte, realistische Wertermittlung Ihrer Immobilie im Rhein-Sieg-Kreis, Bonn & Meckenheim.
                </p>
              </div>
            </div>

            {/* Trust Badge 3 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4.5 flex items-start gap-4 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-11 h-11 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm sm:text-base">Direkte Kreditvergabe</h3>
                <p className="text-xs text-gray-600 leading-snug">
                  Eigenständige Darlehenskonzepte, verbindliche Zusage und persönliche Begleitung bis zur Auszahlung.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
