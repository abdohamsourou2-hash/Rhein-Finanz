import { useState, FormEvent } from 'react';
import {
  Building2,
  TrendingUp,
  Coins,
  Warehouse,
  FileCheck2,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Check,
} from 'lucide-react';

export default function BusinessFinanceSection() {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('100.000 €');
  const [purpose, setPurpose] = useState<'Investition & Maschinen' | 'Betriebsmittel & Liquidität' | 'Gewerbeimmobilie' | 'KfW-Förderung' | 'Umschuldung'>('Investition & Maschinen');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hallo Rhein-Finanz! Ich interessiere mich für eine Unternehmensfinanzierung (${purpose}, ca. ${amount}). Wann können wir uns kurz dazu austauschen?`
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contactPerson || !phone) return;

    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/info@rheinfinanz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Anfrage Unternehmensfinanzierung: ${companyName || contactPerson} (${amount} für ${purpose})`,
          Unternehmen: companyName || 'Nicht angegeben',
          Ansprechpartner: contactPerson,
          Telefon: phone,
          Email: email || 'Nicht angegeben',
          Finanzierungssumme: amount,
          Verwendungszweck: purpose,
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

  const solutions = [
    {
      icon: TrendingUp,
      title: 'Investition & Wachstum',
      desc: 'Für neue Maschinen, Software, Fuhrpark oder Firmenexpansion – passgenau getaktet.',
    },
    {
      icon: Coins,
      title: 'Betriebsmittel & Liquidität',
      desc: 'Flexible Kreditlinien zur Sicherung von Wareneinkauf, Skonto und laufenden Aufträgen.',
    },
    {
      icon: Warehouse,
      title: 'Gewerbeimmobilien',
      desc: 'Kauf, Neubau oder Modernisierung von Büros, Produktionshallen & Mehrfamilienhäusern.',
    },
    {
      icon: FileCheck2,
      title: 'KfW- & Förderkredite',
      desc: 'Nutzung staatlicher Förderprogramme mit attraktiven Zinsvergünstigungen für den Mittelstand.',
    },
  ];

  return (
    <section
      id="unternehmensfinanzierung"
      className="py-16 sm:py-24 bg-white text-[#1E2229] relative overflow-hidden border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2229] text-[#c4a323] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Geschäftskunden &amp; Mittelstand</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1E2229]">
            Unternehmensfinanzierung. <br />
            <span className="text-[#c4a323]">Maßgeschneidert für Ihr Wachstum.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ob Selbstständige, Mittelstand oder expandierende Betriebe: Wir vergleichen über <strong>400 Banken &amp; Spezialfinanzierer</strong> und sichern Ihnen zügig die passende Liquidität zu Top-Konditionen.
          </p>

          {/* Quick 1-Click Action Hub */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/4922258305776?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="business-whatsapp-cta"
              className="shimmer-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Gewerbekredit via WhatsApp anfragen</span>
            </a>

            <a
              href="tel:022258305776"
              id="business-phone-cta"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1E2229] hover:bg-black text-white font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#c4a323]" />
              <span>02225 8305776</span>
            </a>
          </div>
        </div>

        {/* 4 Crisp Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] hover:bg-white border border-gray-200 hover:border-[#c4a323] rounded-2xl p-6 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1E2229] text-[#c4a323] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1E2229] group-hover:text-[#c4a323] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Consultation / Inquiry Box */}
        <div className="bg-[#1E2229] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left pitch */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c4a323]">
                Unverbindliche Finanzierungsprüfung
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Kapitalbedarf berechnen &amp; unverbindlich anfragen
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Keine zeitraubenden Banktermine mit ungewissem Ausgang. Wir prüfen Ihre Bonitätsunterlagen direkt, finden den passenden Kreditpartner und verhandeln Top-Zinssätze.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#c4a323]/20 flex items-center justify-center text-[#c4a323]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Finanzierungsvolumen von 20.000 € bis über 5 Mio. €</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#c4a323]/20 flex items-center justify-center text-[#c4a323]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Zügige Vorprüfung &amp; schnelle Entscheidung</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#c4a323]/20 flex items-center justify-center text-[#c4a323]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>100% diskret &amp; schufa-neutral</span>
                </div>
              </div>
            </div>

            {/* Right inquiry form */}
            <div className="lg:col-span-7 bg-white text-[#1E2229] rounded-2xl p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1E2229]">
                    Anfrage erfolgreich übermittelt!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                    Vielen Dank, <strong>{contactPerson}</strong>. Wir haben Ihre Anfrage ({amount} für {purpose}) erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select Purpose */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">
                      Finanzierungszweck:
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 bg-white font-medium focus:ring-2 focus:ring-[#c4a323]"
                    >
                      <option value="Investition & Maschinen">Investition in Maschinen / Anlagevermögen</option>
                      <option value="Betriebsmittel & Liquidität">Betriebsmittelkredit / Liquiditätsstärkung</option>
                      <option value="Gewerbeimmobilie">Gewerbeimmobilie (Kauf, Bau oder Umbau)</option>
                      <option value="KfW-Förderung">KfW- & Förderdarlehen</option>
                      <option value="Umschuldung">Umschuldung bestehender Firmenkredite</option>
                    </select>
                  </div>

                  {/* Volume Buttons */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">
                      Gewünschter Finanzierungsbedarf:
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['50.000 €', '100.000 €', '250.000 €', '500.000 €+'].map((vol) => (
                        <button
                          key={vol}
                          type="button"
                          onClick={() => setAmount(vol)}
                          className={`py-2 px-1 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                            amount === vol
                              ? 'border-[#c4a323] bg-[#c4a323]/20 text-[#1E2229] ring-1 ring-[#c4a323]'
                              : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {vol}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Company & Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Firma / Unternehmen"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Ansprechpartner *"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Telefonnummer *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                    />
                    <input
                      type="email"
                      placeholder="E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#c4a323]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-business-finance-btn"
                    disabled={isSubmitting}
                    className="shimmer-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Wird übermittelt...' : 'Kostenfreies Firmenkredit-Angebot anfordern'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direkte Bearbeitung durch Rhein-Finanz • Unverbindlich &amp; kostenlos</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
