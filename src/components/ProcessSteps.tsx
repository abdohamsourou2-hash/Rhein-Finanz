import { Send, FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Anfrage & Erstkontakt',
      time: 'Dauer: ca. 2 Minuten',
      description: 'Übermitteln Sie Ihre Rahmendaten einfach über unseren Online-Wertrechner oder rufen Sie uns direkt in Meckenheim an. Völlig unverbindlich und ohne zeitraubende Banken-Formulare.',
      icon: Send,
      action: 'Online-Rechner ausfüllen oder anrufen',
    },
    {
      number: '02',
      title: 'Angebotserstellung & Konzept',
      time: 'Rückmeldung in 24h',
      description: 'Wir prüfen Ihre Daten auf Augenhöhe. Mit über 15 Jahren institutioneller Banken-Expertise erarbeiten wir ein direktes, maßgeschneidertes Darlehenskonzept – unabhängig statt nach starrem Schema.',
      icon: FileText,
      action: 'Transparente Konditionen erhalten',
    },
    {
      number: '03',
      title: 'Direkte Zusage & Umsetzung',
      time: 'Verbindlich & sicher',
      description: 'Sie erhalten Ihre verlässliche Finanzierungszusage. Wir koordinieren die Verträge und begleiten Sie persönlich bis zur reibungslosen Auszahlung und zum Notartermin.',
      icon: CheckCircle2,
      action: 'Finanzierung gesichert',
    },
  ];

  return (
    <section id="ablauf" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/15 border border-[#c4a323]/40 text-[#1E2229] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>Transparenter Ablauf</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
            Der direkte Weg zu Ihrem Kredit &amp; Angebot
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            In 3 klaren Schritten vom ersten Gedanken bis zur verbindlichen Darlehenszusage. Ohne Umwege, ohne Vermittlungsschleifen.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle line connecting steps on larger screens */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-[#c4a323]/20 via-[#c4a323] to-[#c4a323]/20 -z-0" />

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative z-10 bg-white rounded-2xl p-7 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#c4a323]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top row with step number and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#c4a323] font-mono tracking-tighter">
                      {st.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#1E2229] text-[#c4a323] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Badge */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block">
                      {st.time}
                    </span>
                    <h3 className="text-xl font-bold text-[#1E2229]">
                      {st.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed font-normal mb-6">
                    {st.description}
                  </p>
                </div>

                {/* Bottom Step Action Indicator */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1E2229]">
                  <span className="text-gray-700">Ziel:</span>
                  <span className="text-[#c4a323] font-bold flex items-center gap-1">
                    {st.action}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Quick Start */}
        <div className="mt-12 bg-[#1E2229] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#c4a323]/40">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c4a323]" />
              Bereit für den ersten Schritt?
            </h3>
            <p className="text-sm text-gray-300">
              Nutzen Sie unseren kostenlosen Wertrechner oder sprechen Sie direkt mit uns.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#wertrechner"
              className="px-6 py-3 rounded-lg font-bold text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all"
            >
              Jetzt Anfrage starten
            </a>
            <a
              href="tel:022258305776"
              className="px-5 py-3 rounded-lg font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
            >
              02225 8305776
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
