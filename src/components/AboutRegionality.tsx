import { Phone, Smartphone, MessageSquare, MapPin, Award, CheckCircle2, ShieldCheck, Mail, UserCheck } from 'lucide-react';
import AdvisorPortrait from './AdvisorPortrait';

export default function AboutRegionality() {
  return (
    <section id="ueber-uns" className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div id="regionalitaet" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/15 border border-[#c4a323]/40 text-[#1E2229] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>Über 15 Jahre Banken-Expertise &amp; Regionalität</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
            Ihr persönlicher Ansprechpartner &amp; Kreditentscheider
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Keine anonymen Portale, keine wechselnden Sachbearbeiter: Bei Rhein-Finanz sprechen Sie direkt mit dem Inhaber.
          </p>
        </div>

        {/* Advisor Portrait & Story Card */}
        <div className="bg-[#F8F9FA] rounded-2xl border border-gray-200/90 shadow-sm p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <AdvisorPortrait variant="about" />

              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-[#1E2229] flex items-center justify-center gap-1">
                  <UserCheck className="w-4 h-4 text-[#c4a323]" />
                  Hamo Hussein • Bankkaufmann
                </span>
                <span className="text-[11px] text-gray-500">
                  15+ Jahre Bankerfahrung • Kreditprüfung • Makler
                </span>
              </div>
            </div>

            {/* Story & Philosophy Column */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2229] tracking-tight">
                „Wir finden Finanzierungslösungen, wo klassische Hausbanken abwinken.“
              </h3>

              <div className="space-y-3.5 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Mein Name ist <strong className="text-[#1E2229]">Hamo Hussein</strong>. Als gelernter <strong className="text-[#1E2229]">Bankkaufmann, Immobilienmakler</strong> und mit über 15 Jahren praktischer Erfahrung im Bank- und Kreditwesen kenne ich die internen Prüfungskriterien von Kreditabteilungen im Detail.
                </p>
                <p>
                  Wer heute eine Immobilie finanzieren oder veräußern will, stößt bei Filialbanken häufig auf standardisierte Schablonen, starre Computerprogramme und wochenlange Bearbeitungszeiten. Genau deshalb habe ich <strong className="text-[#1E2229]">Rhein-Finanz</strong> gegründet.
                </p>
                <p>
                  Als eigenständiger, direkter Kreditgeber und zertifizierter Makler mit Büro in der <strong className="text-[#1E2229]">Hauptstraße 68 in Meckenheim</strong> betrachte ich Ihre persönliche Situation ganzheitlich. Ob Baufinanzierung, Umschuldung, Modernisierungskredit oder verlässliche Immobilienwertermittlung: Sie erhalten von mir ein transparentes, verbindliches Angebot ohne unnötige bürokratische Hürden.
                </p>
              </div>

              {/* USP Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white border border-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#1E2229]">Ausgebildeter Bankkaufmann – Fundierte Expertise auf Bankenniveau</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#1E2229]">Persönlich vor Ort in Meckenheim erreichbar</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#1E2229]">100% unabhängig – Ihr finanzieller Vorteil im Fokus</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#1E2229]">Zugriff auf über 400 Darlehensgeber & KfW-Fördermittel</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Direct Contact & Conversion Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="kontakt">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-black text-[#1E2229]">
              Besuchen Sie uns oder rufen Sie direkt an
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gerne empfangen wir Sie nach vorheriger Terminvereinbarung in unseren Räumlichkeiten in Meckenheim oder beraten Sie ganz bequem telefonisch bzw. via WhatsApp.
            </p>
            
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2 text-xs text-gray-700">
              <div className="flex items-center gap-2 font-bold text-[#1E2229]">
                <MapPin className="w-4 h-4 text-[#c4a323]" />
                <span>Rhein-Finanz • Hauptstraße 68, 53340 Meckenheim</span>
              </div>
              <p className="text-gray-500 pl-6">
                Zentral gelegen im Rhein-Sieg-Kreis. Schnelle Anbindung aus Bonn, Rheinbach, Swisttal und Bad Godesberg.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#1E2229] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-[#c4a323]/50">
              <div className="space-y-1 mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-[#c4a323] block">
                  Sofortige Erreichbarkeit
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Direkter Draht zu Rhein-Finanz
                </h4>
                <p className="text-xs text-gray-300">
                  Wählen Sie Ihren bevorzugten Kontaktkanal:
                </p>
              </div>

              {/* Conversion Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. Festnetz */}
                <a
                  href="tel:022258305776"
                  id="conversion-call-landline"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all group"
                  title="Festnetz anrufen"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#c4a323] text-[#1E2229] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                      Büro Meckenheim
                    </span>
                    <span className="text-base font-bold tracking-tight text-white group-hover:text-[#c4a323] transition-colors">
                      02225 8305776
                    </span>
                  </div>
                </a>

                {/* 2. Mobil */}
                <a
                  href="tel:01775169324"
                  id="conversion-call-mobile"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all group"
                  title="Mobilnummer anrufen"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1E2229] border border-[#c4a323] text-[#c4a323] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                      Mobilfunk direkt
                    </span>
                    <span className="text-base font-bold tracking-tight text-white group-hover:text-[#c4a323] transition-colors">
                      0177 5169324
                    </span>
                  </div>
                </a>

                {/* 3. WhatsApp (Shimmer Button) */}
                <a
                  href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Finanzierungsangebot%20oder%20eine%20Immobilienbewertung%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="conversion-whatsapp"
                  className="shimmer-btn flex items-center gap-3 p-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shadow-md group sm:col-span-2"
                  title="WhatsApp Nachricht senden"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#25D366] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div className="grow">
                    <span className="text-[10px] uppercase tracking-wider text-green-100 block font-bold">
                      WhatsApp Direktkontakt (Sofortantwort)
                    </span>
                    <span className="text-base font-black tracking-tight text-white">
                      02225 8305776
                    </span>
                  </div>
                  <span className="text-xs font-black bg-white/20 px-2.5 py-1 rounded-md text-white shrink-0">
                    Jetzt chatten →
                  </span>
                </a>

                {/* 4. E-Mail */}
                <a
                  href="mailto:info@rheinfinanz.com"
                  id="conversion-email"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-xs sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#c4a323]" />
                    <span className="text-gray-300 font-medium">info@rheinfinanz.com</span>
                  </div>
                  <span className="text-gray-400">E-Mail schreiben →</span>
                </a>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
