import { useState, FormEvent } from 'react';
import {
  TrendingUp,
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  Check,
  Zap,
} from 'lucide-react';

export default function BecomePartnerSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hallo Rhein-Finanz! Ich interessiere mich für eine Partnerschaft und möchte mich kurz vorstellen. Wann können wir unverbindlich sprechen?'
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
          _subject: `Neue Partner-Anfrage: ${name}`,
          Name: name,
          Telefon: phone,
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

  return (
    <section
      id="partner-werden"
      className="py-14 sm:py-20 bg-[#14171D] text-white relative overflow-hidden border-b border-gray-800 scroll-mt-20"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c4a323]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 1. Ultra-Catchy Pitch Hero */}
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c4a323]/20 border border-[#c4a323]/40 text-[#c4a323] text-xs font-black uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-[#c4a323]" />
            <span>Werde Teil unseres Erfolgs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Finanzierungspartner werden. <br />
            <span className="text-[#c4a323]">Verdiene, was du wert bist.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Ohne Einkommensdeckel. Nebenberuflich oder Vollzeit. Wir bringen dir alles bei.
          </p>
        </div>

        {/* 2. Three High-Impact Advantage Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Card 1: Provisionen */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c4a323]/50 rounded-2xl p-5 sm:p-6 transition-all group flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-[#c4a323]/20 border border-[#c4a323]/30 flex items-center justify-center text-[#c4a323] group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c4a323] transition-colors">
                Top Provisionen &amp; Teamaufbau
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Überdurchschnittliche Vergütung &amp; unbegrenzte Karriere-Chancen durch eigenen Teamaufbau.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-[#c4a323] uppercase tracking-wider">
              Kein Einkommenslimit
            </div>
          </div>

          {/* Card 2: Freiheit */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c4a323]/50 rounded-2xl p-5 sm:p-6 transition-all group flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-[#c4a323]/20 border border-[#c4a323]/30 flex items-center justify-center text-[#c4a323] group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c4a323] transition-colors">
                100% Freie Zeiteinteilung
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Starte flexibel im Nebenberuf (ab 5 Std./Woche) oder starte direkt hauptberuflich durch.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-[#c4a323] uppercase tracking-wider">
              Volle Flexibilität
            </div>
          </div>

          {/* Card 3: Coaching */}
          <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c4a323]/50 rounded-2xl p-5 sm:p-6 transition-all group flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-xl bg-[#c4a323]/20 border border-[#c4a323]/30 flex items-center justify-center text-[#c4a323] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c4a323] transition-colors">
                1:1 Coaching &amp; Quereinstieg
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Keine Vorerfahrung nötig! Wir schulen dich intensiv und begleiten dich Schritt für Schritt.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-[#c4a323] uppercase tracking-wider">
              Mentoring von Tag 1
            </div>
          </div>

        </div>

        {/* 3. Short Punchy Requirement Box */}
        <div className="mb-10 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-[#c4a323] uppercase tracking-wider">
              Was du brauchst:
            </span>
            <p className="text-sm font-semibold text-white">
              Freude am Kontakt mit Menschen, Motivation &amp; ein sympathisches Auftreten.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            Keine Vertriebserfahrung nötig
          </span>
        </div>

        {/* 4. High-Conversion Action Hub */}
        <div className="bg-gradient-to-b from-white to-gray-50 text-[#1E2229] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
          
          <div className="text-center space-y-1.5 mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2229]">
              Lass uns sprechen!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Ein kurzes Kennenlernen – ganz entspannt und 100% unverbindlich.
            </p>
          </div>

          {/* Quick Direct 1-Click Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/4922258305776?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="partner-cta-whatsapp-hero"
              className="shimmer-btn flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-5 h-5 fill-white shrink-0" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Call */}
            <a
              href="tel:022258305776"
              id="partner-cta-phone-hero"
              className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#1E2229] hover:bg-black text-white font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-[#c4a323] shrink-0" />
              <span>02225 8305776</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:info@rheinfinanz.com?subject=${encodeURIComponent('Interesse an Partnerschaft')}`}
              id="partner-cta-email-hero"
              className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-bold text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-gray-600 shrink-0" />
              <span>E-Mail schreiben</span>
            </a>

          </div>

          {/* Or Quick 10-Second Callback Form */}
          <div className="border-t border-gray-200 pt-5">
            {isSubmitted ? (
              <div className="py-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-[#1E2229]">
                  Top, wir melden uns schnellstmöglich bei dir!
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Dein Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Deine Telefonnummer *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                />
                <button
                  type="submit"
                  id="submit-partner-btn-compact"
                  disabled={isSubmitting}
                  className="shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-75 shrink-0"
                >
                  <span>{isSubmitting ? 'Sendet...' : 'Rückruf anfordern'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% diskret • Kein Anschreiben • Direkter Draht zur Leitung</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
