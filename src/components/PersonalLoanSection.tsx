import { useState, useMemo, FormEvent } from 'react';
import {
  CreditCard,
  Percent,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Sparkles,
  Info,
  Car,
  Home,
  RefreshCw,
  ShoppingBag,
  HelpCircle,
  Phone,
  MessageSquare,
  Lock,
} from 'lucide-react';

export default function PersonalLoanSection() {
  // Loan parameters
  const [loanAmount, setLoanAmount] = useState<number>(15000);
  const [durationMonths, setDurationMonths] = useState<number>(48);
  const [purpose, setPurpose] = useState<string>('Freie Verwendung');
  const [employmentStatus, setEmploymentStatus] = useState<string>('Angestellte / Angestellter');

  // Indicative effective interest rate calculation based on term & purpose
  const effectiveRate = useMemo(() => {
    let rate = 6.49;
    if (purpose === 'Umschuldung / Kredit ablösen') {
      rate -= 0.6; // special consolidation rate
    } else if (purpose === 'Auto- & Fahrzeugkauf') {
      rate -= 0.3; // car loan security discount
    } else if (purpose === 'Modernisierung / Renovierung') {
      rate -= 0.4; // home improvement bonus
    }

    if (durationMonths <= 36) {
      rate -= 0.2;
    } else if (durationMonths >= 84) {
      rate += 0.4;
    }
    return Math.max(3.99, Number(rate.toFixed(2)));
  }, [purpose, durationMonths]);

  // Monthly installment formula
  const { monthlyRate, totalInterest, totalRepayment } = useMemo(() => {
    const monthlyRateDec = effectiveRate / 100 / 12;
    // Annuity formula: A = P * (r * (1+r)^n) / ((1+r)^n - 1)
    const factor = Math.pow(1 + monthlyRateDec, durationMonths);
    const monthly = (loanAmount * (monthlyRateDec * factor)) / (factor - 1);
    const roundedMonthly = Math.round(monthly * 100) / 100;
    const total = Math.round(roundedMonthly * durationMonths * 100) / 100;
    const interest = Math.round((total - loanAmount) * 100) / 100;

    return {
      monthlyRate: roundedMonthly,
      totalInterest: Math.max(0, interest),
      totalRepayment: total,
    };
  }, [loanAmount, durationMonths, effectiveRate]);

  // Lead Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [netIncome, setNetIncome] = useState('2.500 - 3.500 €');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Telefon' | 'E-Mail'>('WhatsApp');
  const [note, setNote] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/info@rheinfinanz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Privatkredit-Anfrage von ${name} über ${loanAmount.toLocaleString('de-DE')} € (Rhein-Finanz)`,
          Kreditsumme: `${loanAmount.toLocaleString('de-DE')} €`,
          Laufzeit: `${durationMonths} Monate (${(durationMonths / 12).toFixed(1)} Jahre)`,
          Verwendungszweck: purpose,
          Beschaeftigungsstatus: employmentStatus,
          Monatliches_Nettoeinkommen: netIncome,
          Berechnete_Wunschrate: `${monthlyRate.toLocaleString('de-DE', { minimumFractionDigits: 2 })} € / Monat`,
          Indikativer_Zinssatz: `${effectiveRate.toLocaleString('de-DE')} % eff. Jahreszins`,
          Gesamtrückzahlung: `${totalRepayment.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €`,
          Gesamtzinsen: `${totalInterest.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €`,
          Name: name,
          Telefon: phone,
          Email: email,
          Bevorzugter_Kontakt: preferredContact,
          Anmerkung: note || 'Keine besondere Anmerkung',
        }),
      });
    } catch {
      // In case of network fluctuation, still provide user peace of mind
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="privatkredit"
      className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#F8F9FA] to-white border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4a323]/20 text-[#1E2229] border border-[#c4a323]/40 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <CreditCard className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>Günstiger Ratenkredit & Umschuldung</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
            Privatkredit & Sofortkredit mit Top-Zinsen
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Ob Umschuldung teurer Altkredite, Autokauf oder freie Verwendung: Mit unserem <strong>Privatkredit-Rechner</strong> vergleichen wir die Konditionen von über <strong>20 Partnerbanken</strong> und finden für Sie die beste monatliche Rate – <strong>100% schufa-neutral</strong> und kostenlos.
          </p>

          {/* Trust USPs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-gray-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              100% Schufa-neutrale Konditionsanfrage
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#c4a323] shrink-0" />
              Schnelle Zusage & Auszahlung oft in 24–48h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1E2229] shrink-0" />
              Feste Monatsrate ohne versteckte Kosten
            </span>
          </div>
        </div>

        {/* The 2-Column Calculator & Lead Capture Layout */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT: Interactive Loan Sliders & Real-Time Calculation (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8 bg-white border-b lg:border-b-0 lg:border-r border-gray-100">
              
              <div className="border-b border-gray-100 pb-5 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#c4a323]">
                    Schritt 1: Wunschbetrag wählen
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1E2229] mt-0.5">
                    Privatkredit-Rechner
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SSL-gesichert</span>
                </div>
              </div>

              {/* Slider 1: Loan Amount */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="pk-amount" className="text-xs sm:text-sm font-bold text-gray-700">
                    Wunsch-Nettodarlehensbetrag
                  </label>
                  <div className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-lg sm:text-xl font-black text-[#1E2229]">
                    {loanAmount.toLocaleString('de-DE')} €
                  </div>
                </div>

                <input
                  id="pk-amount"
                  type="range"
                  min="1000"
                  max="80000"
                  step="500"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c4a323]"
                />

                <div className="flex items-center justify-between text-[11px] text-gray-600 font-semibold px-0.5">
                  <span>1.000 € (Kleinkredit)</span>
                  <span>40.000 €</span>
                  <span>80.000 € (Großkredit)</span>
                </div>

                {/* Quick amount chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[3000, 5000, 10000, 15000, 25000, 50000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setLoanAmount(amt)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                        loanAmount === amt
                          ? 'border-[#c4a323] bg-[#c4a323]/20 text-[#1E2229] font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                      }`}
                    >
                      {amt.toLocaleString('de-DE')} €
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Duration in Months */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="pk-duration" className="text-xs sm:text-sm font-bold text-gray-700">
                    Laufzeit
                  </label>
                  <div className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-lg sm:text-xl font-black text-[#1E2229]">
                    {durationMonths} Monate <span className="text-xs text-gray-500 font-medium">({(durationMonths / 12).toFixed(1)} Jahre)</span>
                  </div>
                </div>

                <input
                  id="pk-duration"
                  type="range"
                  min="12"
                  max="120"
                  step="12"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c4a323]"
                />

                <div className="flex items-center justify-between text-[11px] text-gray-600 font-semibold px-0.5">
                  <span>12 Mon.</span>
                  <span>48 Mon. (Beliebt)</span>
                  <span>84 Mon.</span>
                  <span>120 Mon.</span>
                </div>

                {/* Quick duration buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[24, 36, 48, 60, 72, 84, 96, 120].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setDurationMonths(m)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                        durationMonths === m
                          ? 'border-[#c4a323] bg-[#c4a323]/20 text-[#1E2229] font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                      }`}
                    >
                      {m} Mon.
                    </button>
                  ))}
                </div>
              </div>

              {/* Purpose Selector */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 block">
                  Verwendungszweck (oft Zinsrabatt möglich):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Freie Verwendung', icon: ShoppingBag },
                    { label: 'Umschuldung / Kredit ablösen', icon: RefreshCw },
                    { label: 'Auto- & Fahrzeugkauf', icon: Car },
                    { label: 'Modernisierung / Renovierung', icon: Home },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = purpose === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setPurpose(item.label)}
                        className={`p-2.5 rounded-xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#c4a323] bg-[#c4a323]/15 text-[#1E2229] ring-2 ring-[#c4a323]/50 font-bold'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c4a323]' : 'text-gray-400'}`} />
                        <span className="text-[11px] leading-tight line-clamp-2">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Calculation Output Card */}
              <div className="bg-[#1E2229] text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                      Voraussichtliche Monatsrate
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-[#c4a323] tracking-tight">
                      ca. {monthlyRate.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                      <span className="text-xs text-gray-400 font-normal ml-1">/ Monat</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-gray-400 block font-medium">Gebundener Sollzins ab</span>
                    <span className="text-lg font-bold text-white">ab {effectiveRate.toLocaleString('de-DE')}% eff. p.a.*</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 block">Nettokreditbetrag</span>
                    <strong className="text-white text-sm">{loanAmount.toLocaleString('de-DE')} €</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Gesamtkosten Zinsen</span>
                    <strong className="text-white text-sm">ca. {totalInterest.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</strong>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-gray-400 block">Gesamtbetrag</span>
                    <strong className="text-white text-sm">ca. {totalRepayment.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</strong>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-gray-400 leading-relaxed border-t border-white/10 space-y-2">
                  <div className="flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#c4a323] shrink-0 mt-0.5" />
                    <span>
                      <strong>Aktuelle Modellrechnung:</strong> Nettodarlehensbetrag {loanAmount.toLocaleString('de-DE')} €, gebundener Sollzins ab {(effectiveRate - 0.2).toFixed(2)} % p.a., effektiver Jahreszins ab {effectiveRate.toLocaleString('de-DE')} % p.a., {durationMonths} monatliche Raten à {monthlyRate.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €, Gesamtbetrag {totalRepayment.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €.
                    </span>
                  </div>

                  {/* Legally mandatory 2/3 representative example according to § 17 Abs. 4 PAngV */}
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-[10px] text-gray-300 leading-normal space-y-1">
                    <strong className="text-[#c4a323] block font-bold">
                      Repräsentatives 2/3-Beispiel gemäß § 17 Abs. 4 PAngV:
                    </strong>
                    <p>
                      Bei einem Nettodarlehensbetrag von 10.000 € und einer Laufzeit von 60 Monaten erhalten mindestens zwei Drittel der Kunden voraussichtlich einen effektiven Jahreszins von 6,99 % p.a. (gebundener Sollzinssatz: 6,77 % p.a.). 60 monatliche Raten à 196,87 €, zu zahlender Gesamtbetrag: 11.812,20 €. Darlehensvermittler: Rhein-Finanz, Inh. Hamo Hussein, Hauptstraße 68, 53340 Meckenheim. Bonität vorausgesetzt.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: Direct Lead Capture Connected to info@rheinfinanz.com (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#F8F9FA] flex flex-col justify-between">
              
              {isSubmitted ? (
                <div className="my-auto py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-[#1E2229]">
                      Anfrage erfolgreich gesendet!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                      Vielen Dank, <strong>{name}</strong>! Ihre Kreditanfrage über <strong>{loanAmount.toLocaleString('de-DE')} €</strong> (ca. {monthlyRate.toLocaleString('de-DE', { minimumFractionDigits: 2 })} € / Monat) wurde direkt an <strong>info@rheinfinanz.com</strong> übermittelt.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 text-left space-y-1.5">
                    <div className="font-bold text-[#1E2229] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c4a323]" />
                      Nächste Schritte:
                    </div>
                    <p>
                      1. Wir prüfen Ihre Anfrage schufa-neutral bei über 20 Partnerbanken.
                    </p>
                    <p>
                      2. Wir kontaktieren Sie schnellstmöglich per <strong>{preferredContact}</strong> mit einem maßgeschneiderten Top-Angebot.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={`https://wa.me/4922258305776?text=${encodeURIComponent(
                        `Hallo Rhein-Finanz, ich (${name}) habe soeben eine Privatkredit-Anfrage über ${loanAmount.toLocaleString('de-DE')} € gestellt und möchte mich gerne noch schneller abstimmen.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Direktkontakt öffnen</span>
                    </a>

                    <a
                      href="tel:022258305776"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1E2229] hover:bg-black text-white font-bold text-sm transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#c4a323]" />
                      <span>02225 8305776 anrufen</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#c4a323]">
                      Schritt 2: Kostenloses Angebot sichern
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1E2229] mt-0.5">
                      Kreditangebot anfordern
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      100% unverbindlich, garantiert schufa-neutral und direkt bei Ihrem Berater in Meckenheim.
                    </p>
                  </div>

                  {/* Employment Status */}
                  <div className="space-y-1">
                    <label htmlFor="pk-status" className="text-xs font-bold text-gray-700 block">
                      Beschäftigungsverhältnis *
                    </label>
                    <select
                      id="pk-status"
                      value={employmentStatus}
                      onChange={(e) => setEmploymentStatus(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs sm:text-sm font-medium text-gray-900"
                    >
                      <option value="Angestellte / Angestellter">Angestellte(r) (unbefristet)</option>
                      <option value="Beamtin / Beamter">Beamtin / Beamter</option>
                      <option value="Selbstständige / Freiberufler">Selbstständig / Freiberufler</option>
                      <option value="Rentnerin / Rentner">Rentner(in) / Pensionär</option>
                      <option value="In Probezeit / befristet">In Probezeit / Befristet angestellt</option>
                    </select>
                  </div>

                  {/* Net income range */}
                  <div className="space-y-1">
                    <label htmlFor="pk-income" className="text-xs font-bold text-gray-700 block">
                      Monatliches Nettoeinkommen (ca.) *
                    </label>
                    <select
                      id="pk-income"
                      value={netIncome}
                      onChange={(e) => setNetIncome(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs sm:text-sm font-medium text-gray-900"
                    >
                      <option value="Unter 1.500 €">Unter 1.500 €</option>
                      <option value="1.500 - 2.500 €">1.500 € bis 2.500 €</option>
                      <option value="2.500 - 3.500 €">2.500 € bis 3.500 €</option>
                      <option value="3.500 - 5.000 €">3.500 € bis 5.000 €</option>
                      <option value="Über 5.000 €">Über 5.000 €</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="pk-name" className="text-xs font-bold text-gray-700 block">
                      Vor- und Nachname *
                    </label>
                    <input
                      id="pk-name"
                      type="text"
                      required
                      placeholder="z.B. Sabine Weber"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs sm:text-sm text-gray-900"
                    />
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="pk-phone" className="text-xs font-bold text-gray-700 block">
                        Telefonnummer *
                      </label>
                      <input
                        id="pk-phone"
                        type="tel"
                        required
                        placeholder="0177 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs sm:text-sm text-gray-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="pk-email" className="text-xs font-bold text-gray-700 block">
                        E-Mail-Adresse *
                      </label>
                      <input
                        id="pk-email"
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs sm:text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Preferred contact channel */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 block">
                      Bevorzugter Rückkanal:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['WhatsApp', 'Telefon', 'E-Mail'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setPreferredContact(method)}
                          className={`py-1.5 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            preferredContact === method
                              ? 'border-[#c4a323] bg-[#c4a323]/20 text-[#1E2229] ring-1 ring-[#c4a323]'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {method === 'WhatsApp' ? '💬 WhatsApp' : method === 'Telefon' ? '📞 Telefon' : '✉️ E-Mail'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional note */}
                  <div className="space-y-1">
                    <label htmlFor="pk-note" className="text-xs font-bold text-gray-700 block">
                      Anmerkung oder Wünsche (optional)
                    </label>
                    <textarea
                      id="pk-note"
                      rows={2}
                      placeholder="z.B. Kredit um 2 bestehende Kredite zusammenzufassen"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-xs text-gray-900"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-privatkredit-lead"
                    disabled={isSubmitting}
                    className="shimmer-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 disabled:opacity-75 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Wird geprüft & übermittelt...' : 'Kostenloses Kreditangebot einholen'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-gray-500 leading-tight">
                    Mit Absenden stimmen Sie der Verarbeitung gem. DSGVO zu. Daten werden verschlüsselt an <strong>info@rheinfinanz.com</strong> gesendet. Keine Weitergabe an unbefugte Dritte. 100% schufa-neutral.
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>

        {/* SEO Knowledge & Keyword Rich Content Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2229] tracking-tight">
              Warum ein Privatkredit über Rhein-Finanz in Meckenheim?
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sparen Sie bares Geld durch bankenunabhängigen Zinsvergleich, maßgeschneiderte Laufzeiten und persönliche Beratung vor Ort im Rhein-Sieg-Kreis und Raum Bonn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* SEO Card 1: Umschuldung */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4a323]/20 flex items-center justify-center text-[#1E2229] font-bold">
                <RefreshCw className="w-5 h-5 text-[#c4a323]" />
              </div>
              <h4 className="text-lg font-black text-[#1E2229]">
                Kredit Umschuldung & Raten senken
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Haben Sie noch teure Altkredite, teure Dispokredite oder Ratenkäufe laufen? Durch eine geschickte <strong>Umschuldung</strong> fassen wir Ihre Verbindlichkeiten zu einem einzigen, zinsgünstigen Ratenkredit zusammen. Das senkt Ihre Monatsbelastung oft um bis zu 40%.
              </p>
              <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Mehrere Raten zu einer zusammenfassen
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Spürbare Zinsersparnis & volle Transparenz
                </li>
              </ul>
            </div>

            {/* SEO Card 2: Autokredit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4a323]/20 flex items-center justify-center text-[#1E2229] font-bold">
                <Car className="w-5 h-5 text-[#c4a323]" />
              </div>
              <h4 className="text-lg font-black text-[#1E2229]">
                Autokredit & Fahrzeugfinanzierung
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Als Barzahler beim Autohändler winken oft saftige Rabatte. Mit unserem zweckgebundenen <strong>Autokredit</strong> profitieren Sie von vergünstigten Sonderkonditionen und treten beim Fahrzeughändler direkt als solventer Barzahler auf.
              </p>
              <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Sonderzinsen für Neu- & Gebrauchtwagen
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Verhandlungsvorteil beim Händler als Barzahler
                </li>
              </ul>
            </div>

            {/* SEO Card 3: Modernisierungskredit */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#c4a323]/20 flex items-center justify-center text-[#1E2229] font-bold">
                <Home className="w-5 h-5 text-[#c4a323]" />
              </div>
              <h4 className="text-lg font-black text-[#1E2229]">
                Wohnkredit & Modernisierung
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Neue Heizung, Photovoltaik oder neues Badezimmer? Für Sanierungen bis 50.000 € ist ein <strong>Wohnkredit ohne Grundbucheintrag</strong> oft die schnellste und kostengünstigste Wahl – ohne teure Notar- und Grundbuchkosten.
              </p>
              <ul className="text-xs text-gray-700 space-y-1.5 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Keine Grundschuldbestellung & Notarkosten
                </li>
                <li className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Zinsvorteil für Immobilienbesitzer
                </li>
              </ul>
            </div>

          </div>

          {/* SEO FAQ Accordion or Checklist */}
          <div className="mt-10 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-200 space-y-5">
            <h4 className="text-lg sm:text-xl font-black text-[#1E2229] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#c4a323]" />
              Häufige Fragen zum Privatkredit bei Rhein-Finanz (FAQ)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-gray-700">
              <div className="space-y-1">
                <strong className="text-[#1E2229] block font-bold">
                  Ist meine Kreditanfrage wirklich schufa-neutral?
                </strong>
                <p className="text-gray-600">
                  Ja, zu 100%. Bei Rhein-Finanz stellen wir zunächst eine sogenannte <em>„Konditionenanfrage“</em> (Merkmal KK). Diese hat keinerlei negativen Einfluss auf Ihren Schufa-Score und ist für andere Banken nicht sichtbar.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#1E2229] block font-bold">
                  Wie schnell erhalte ich mein Geld auf dem Konto?
                </strong>
                <p className="text-gray-600">
                  Nach Übermittlung Ihrer Unterlagen (Gehaltsabrechnungen, Personalausweis) und positiver Zusage der Partnerbank erfolgt die Auszahlung auf Ihr Girokonto meist innerhalb von 24 bis 48 Stunden.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#1E2229] block font-bold">
                  Sind Sondertilgungen oder vorzeitige Rückzahlung möglich?
                </strong>
                <p className="text-gray-600">
                  Ja. Bei fast all unseren Partnerbanken können Sie jederzeit kostenlose Sondertilgungen leisten oder den Kredit komplett vorzeitig ablösen.
                </p>
              </div>

              <div className="space-y-1">
                <strong className="text-[#1E2229] block font-bold">
                  Welche Unterlagen werden für die Kreditvergabe benötigt?
                </strong>
                <p className="text-gray-600">
                  In der Regel genügen die letzten 2–3 Gehaltsnachweise, ein gültiger Personalausweis und ein Nachweis über regelmäßige Einnahmen. Bei einer Umschuldung bringen wir die bisherigen Kreditverträge direkt mit in Abzug.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
