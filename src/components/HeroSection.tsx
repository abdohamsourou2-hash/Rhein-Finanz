import { CheckCircle2, ShieldCheck, Award, Landmark, Phone, MessageSquare, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-200/90 pt-8 pb-14 lg:pt-12 lg:pb-16">
      {/* Subtle gold and charcoal atmospheric accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#c4a323]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#1E2229]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Clear, airy, welcoming overview & action buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2229] text-white text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#c4a323] animate-pulse" />
              <span>Rhein-Finanz – Ihr Finanzierungspartner vor Ort</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E2229] tracking-tight leading-[1.12]">
              Ihr Finanzdienstleister in Meckenheim
            </h1>

            {/* Calm, readable introduction */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Unabhängige Baufinanzierung, zinsgünstige Kredite und fundierte Immobilienwertermittlung. Persönlich, transparent und direkt vor Ort im Rheinland.
            </p>

            {/* Action Buttons Group */}
            <div className="pt-1 space-y-3">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
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

                {/* Eye-Catcher CTA Button: Kostenloser Baufinanzierungsrechner */}
                <a
                  href="#zinsrechner"
                  id="hero-rechner-cta"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#1E2229] bg-gray-100 hover:bg-[#c4a323]/20 border border-gray-300 hover:border-[#c4a323] transition-all duration-200 shadow-xs active:scale-98"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Baufinanzierungsrechner</span>
                </a>
              </div>

              <p className="text-xs text-gray-500 pt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c4a323] shrink-0" />
                <span>Hauptstraße 68, 53340 Meckenheim – Schnelle Termine & persönliche Betreuung vor Ort.</span>
              </p>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-700 font-medium border-t border-gray-100 pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0" />
                100% kostenfreie Beratung
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0" />
                Über 400 Partnerbanken
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0" />
                Eigene Darlehensentscheidung
              </span>
            </div>

          </div>

          {/* Right Column: Compact, high-positioned Family Photo with Advantages directly underneath */}
          <div className="lg:col-span-5 space-y-3 lg:-mt-2">
            
            {/* 1. Photo of Happy Family in front of their home - Compact & High */}
            <div className="w-full bg-white rounded-2xl p-2.5 shadow-md border border-gray-200/90 relative group">
              {/* Gold Top Accent */}
              <div className="absolute -top-[2px] left-8 right-8 h-[3px] bg-[#c4a323] rounded-full" />

              <div className="relative h-44 sm:h-48 lg:h-44 w-full rounded-xl overflow-hidden shadow-inner bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=900&q=80"
                  alt="Glückliche Familie mit Kindern vor dem eigenen Zuhause"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Floating Badge: Compact */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-lg py-1.5 px-2.5 text-[#1E2229] border border-[#c4a323]/30 shadow-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img 
                      src="/logo.svg" 
                      alt="Rhein-Finanz Emblem" 
                      className="w-5 h-5 object-contain shrink-0" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="truncate">
                      <span className="block text-xs font-bold text-[#1E2229] leading-tight truncate">
                        Der Traum vom Eigenheim
                      </span>
                      <span className="block text-[10px] text-[#c4a323] font-semibold truncate">
                        Erfolgreich finanziert im Rheinland
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-[#1E2229] text-white px-2 py-0.5 rounded shrink-0">
                    Zinssicher
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Advantages DIRECTLY UNDERNEATH the photo */}
            <div className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xs space-y-3" id="vorteile">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#c4a323]">
                  Ihre Vorteile bei Rhein-Finanz
                </h3>
                <span className="text-[11px] text-gray-500 font-medium">Vor Ort in Meckenheim</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#1E2229]">
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-200/70 hover:border-[#c4a323]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Eigene Kreditentscheidung</strong>
                    <span className="text-[11px] text-gray-600">Direkte Zusage ohne zeitraubende Umwege</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-200/70 hover:border-[#c4a323]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">400+ Darlehensgeber</strong>
                    <span className="text-[11px] text-gray-600">Beste Konditionen & zinsgünstige Monatsraten</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-200/70 hover:border-[#c4a323]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">15+ Jahre Banken-Expertise</strong>
                    <span className="text-[11px] text-gray-600">Fundiertes Fachwissen aus Kreditabteilungen</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-200/70 hover:border-[#c4a323]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Zertifizierter Makler</strong>
                    <span className="text-[11px] text-gray-600">Fachgerechte & marktgerechte Wertermittlung</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-200/70 hover:border-[#c4a323]/50 transition-colors sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Persönlicher Partner vor Ort</strong>
                    <span className="text-[11px] text-gray-600">Hauptstraße 68, 53340 Meckenheim – Individuelle Betreuung</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Baufi24-Style Trust-Grid Badges below Hero */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            {/* Trust Badge 1 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4 flex items-start gap-3.5 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm">Über 15 Jahre Banken-Expertise</h3>
                <p className="text-xs text-gray-600 leading-snug">
                  Insider-Erfahrung in der Kreditprüfung. Wir kennen die Vergabekriterien genau und setzen Lösungen durch.
                </p>
              </div>
            </div>

            {/* Trust Badge 2 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4 flex items-start gap-3.5 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm">Zertifizierter Makler</h3>
                <p className="text-xs text-gray-600 leading-snug">
                  Fachgerechte, realistische Wertermittlung Ihrer Immobilie im Rhein-Sieg-Kreis, Bonn & Meckenheim.
                </p>
              </div>
            </div>

            {/* Trust Badge 3 */}
            <div className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-4 flex items-start gap-3.5 hover:border-[#c4a323]/50 transition-all hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#1E2229] flex items-center justify-center shrink-0 text-[#c4a323]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-[#1E2229] text-sm">Direkte Kreditvergabe</h3>
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
