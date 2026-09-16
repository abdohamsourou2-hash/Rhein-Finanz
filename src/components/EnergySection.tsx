import { useState, FormEvent } from 'react';
import {
  Zap,
  Flame,
  Check,
  TrendingDown,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  FileText,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function EnergySection() {
  const [customerType, setCustomerType] = useState<'Privatkunde' | 'Gewerbekunde'>('Privatkunde');
  const [energyType, setEnergyType] = useState<'Strom' | 'Gas' | 'Strom & Gas'>('Strom & Gas');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hallo Rhein-Finanz! Ich möchte meine Strom-/Gastarife (${customerType}, ${energyType}) prüfen lassen und Geld sparen. Hier sind meine Angaben:`
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/info@rheinfinanz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Energie-Tarifprüfung (Strom/Gas): ${name} (${customerType})`,
          Kundenart: customerType,
          Energieart: energyType,
          Name: name,
          Telefon: phone,
          PLZ: postalCode || 'Nicht angegeben',
          Bisherige_Kosten_oder_Verbrauch: estimatedCost || 'Nicht angegeben',
          Datum: new Date().toLocaleString('de-DE'),
        }),
      });
    } catch {
      // Fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Bis zu hunderte Euro sparen',
      desc: 'Wir vergleichen geprüfte Energieversorger und sichern Ihnen dauerhaft günstige Konditionen.',
    },
    {
      icon: FileText,
      title: '100% Wechselservice',
      desc: 'Kein Papierkram für Sie: Wir übernehmen die Kündigung beim Altanbieter und den gesamten Wechsel.',
    },
    {
      icon: ShieldCheck,
      title: 'Garantierte Versorgung',
      desc: 'Gesetzlich geschützt: Unterbrechungsfreie Belieferung mit Strom und Gas zu jedem Zeitpunkt.',
    },
    {
      icon: Clock,
      title: 'Kostenlose Tarifüberwachung',
      desc: 'Wir erinnern Sie rechtzeitig vor Ablauf der Preisgarantie an den nächsten Spar-Check.',
    },
  ];

  return (
    <section
      id="strom-gas"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-[#14171D] text-white relative overflow-hidden border-b border-gray-800"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/20 border border-[#c4a323]/40 text-[#c4a323] text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-[#c4a323]" />
            <span>Energievergleich &amp; Wechselservice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Strom- &amp; Gasverträge optimieren. <br />
            <span className="text-[#c4a323]">Bis zu 500 € &amp; mehr sparen.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Zahlen Sie nicht zu viel für Strom und Gas! Wir prüfen Ihre Tarife für <strong>Privathaushalte &amp; Gewerbe</strong>, finden das beste Sparpotenzial und übernehmen den kompletten Wechsel für Sie – 100% kostenlos.
          </p>

          {/* Quick Direct 1-Click CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/4922258305776?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="energy-whatsapp-btn"
              className="shimmer-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>Rechnung per WhatsApp senden &amp; sparen</span>
            </a>

            <a
              href="tel:022258305776"
              id="energy-phone-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#c4a323] shrink-0" />
              <span>02225 8305776 anrufen</span>
            </a>
          </div>
        </div>

        {/* 4 Crisp Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c4a323]/50 rounded-2xl p-5 sm:p-6 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#c4a323]/20 border border-[#c4a323]/30 flex items-center justify-center text-[#c4a323] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#c4a323] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Kostenfreier Service</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* High Conversion Quick Calculator & Wechsel-Form */}
        <div className="bg-white text-[#1E2229] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2229]">
              Jetzt Strom- &amp; Gasrechnung unverbindlich prüfen
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Senden Sie uns einfach Ihre Daten oder ein Foto der letzten Jahresabrechnung – wir ermitteln Ihr maximales Ersparnispotenzial.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-[#1E2229]">
                Anfrage erfolgreich erhalten!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                Vielen Dank, <strong>{name}</strong>! Wir analysieren Ihren Tarif und melden uns schnellstmöglich telefonisch mit dem besten Angebot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Selector: Privat vs. Gewerbe */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-2.5 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-bold text-gray-500 uppercase ml-2 hidden sm:inline">Kundenart:</span>
                  {(['Privatkunde', 'Gewerbekunde'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setCustomerType(t)}
                      className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        customerType === t
                          ? 'bg-[#1E2229] text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Energy Type */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {(['Strom', 'Gas', 'Strom & Gas'] as const).map((eType) => (
                    <button
                      key={eType}
                      type="button"
                      onClick={() => setEnergyType(eType)}
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        energyType === eType
                          ? 'bg-[#c4a323] text-[#1E2229] shadow-sm'
                          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {eType === 'Strom' && <Zap className="w-3.5 h-3.5 fill-[#1E2229]" />}
                      {eType === 'Gas' && <Flame className="w-3.5 h-3.5 fill-[#1E2229]" />}
                      {eType === 'Strom & Gas' && <Sparkles className="w-3.5 h-3.5" />}
                      <span>{eType}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Ihr Name / Ansprechpartner *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vor- und Nachname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Telefonnummer für Rückfragen *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="z. B. 0170 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Postleitzahl (für regionale Tarife)
                  </label>
                  <input
                    type="text"
                    placeholder="z. B. 53340 Meckenheim"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Bisherige Monatskosten oder Jahresverbrauch
                  </label>
                  <input
                    type="text"
                    placeholder="z. B. ca. 120 € / Monat oder 3.500 kWh"
                    value={estimatedCost}
                    onChange={(e) => setEstimatedCost(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-energy-check-btn"
                disabled={isSubmitting}
                className="shimmer-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-75"
              >
                <span>{isSubmitting ? 'Wird übermittelt...' : 'Kostenfreie Tarifprüfung anfordern'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-500 pt-1 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  100% kostenlos &amp; unverbindlich
                </span>
                <span>•</span>
                <span>Gesetzlich garantierte Versorgung</span>
                <span>•</span>
                <span>Direkte Übermittlung an info@rheinfinanz.com</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
