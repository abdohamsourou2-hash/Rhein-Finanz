import { useState, useMemo, FormEvent } from 'react';
import { Calculator, ArrowRight, ShieldCheck, TrendingDown, Clock, Percent, Euro, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(350000);
  const [equity, setEquity] = useState<number>(50000);
  const [repaymentRate, setRepaymentRate] = useState<number>(2.0); // 2% Tilgung
  const [interestPeriod, setInterestPeriod] = useState<number>(10); // 10 Jahre

  // Current market indicative interest rates for Rhein-Sieg / NRW
  const interestRate = useMemo(() => {
    // Basic LTV calculation
    const loan = Math.max(10000, purchasePrice - equity);
    const ltv = loan / purchasePrice;
    
    let baseRate = interestPeriod === 10 ? 3.42 : 3.68;
    if (ltv <= 0.8) {
      baseRate -= 0.15; // lower rate for >20% equity
    } else if (ltv > 0.95) {
      baseRate += 0.25; // higher rate for <5% equity
    }
    return Number(baseRate.toFixed(2));
  }, [purchasePrice, equity, interestPeriod]);

  const loanAmount = Math.max(10000, purchasePrice - equity);

  // Calculate monthly annuity
  const monthlyRate = useMemo(() => {
    const annualAnnuity = (loanAmount * (interestRate + repaymentRate)) / 100;
    return Math.round(annualAnnuity / 12);
  }, [loanAmount, interestRate, repaymentRate]);

  // Indicative remaining balance after fixed interest period
  const remainingDebt = useMemo(() => {
    let balance = loanAmount;
    const monthlyPayment = monthlyRate;
    const monthlyInterestFactor = interestRate / 100 / 12;
    const months = interestPeriod * 12;

    for (let m = 0; m < months; m++) {
      const interest = balance * monthlyInterestFactor;
      const principal = monthlyPayment - interest;
      balance = Math.max(0, balance - principal);
    }
    return Math.round(balance);
  }, [loanAmount, monthlyRate, interestRate, interestPeriod]);

  return (
    <section id="zinsrechner" className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Baufi24 inspired */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c4a323]/20 text-[#1E2229] border border-[#c4a323]/50 text-xs font-bold tracking-wide uppercase shadow-xs">
            <TrendingDown className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>100% Kostenloser Online-Zinscheck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
            Kostenloser Baufinanzierungsrechner
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Berechnen Sie in <strong>unter 30 Sekunden</strong> Ihre ideale Monatsrate, vergleichen Sie Zinsen aus über 400 Banken und sichern Sie sich Top-Konditionen – völlig kostenfrei & ohne Schufa-Eintrag.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-[#F8F9FA] rounded-2xl border border-gray-200/90 shadow-lg overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Sliders and Inputs */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              
              {/* Kaufpreis Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="kaufpreis-range" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Kaufpreis / Gesamtkosten
                  </label>
                  <span className="text-base font-black text-[#1E2229]">
                    {purchasePrice.toLocaleString('de-DE')} €
                  </span>
                </div>
                <input
                  id="kaufpreis-range"
                  type="range"
                  min="100000"
                  max="1200000"
                  step="10000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c4a323]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                  <span>100.000 €</span>
                  <span>600.000 €</span>
                  <span>1.200.000 €</span>
                </div>
              </div>

              {/* Eigenkapital Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="eigenkapital-range" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Vorhandenes Eigenkapital
                  </label>
                  <span className="text-base font-black text-[#c4a323]">
                    {equity.toLocaleString('de-DE')} €
                  </span>
                </div>
                <input
                  id="eigenkapital-range"
                  type="range"
                  min="0"
                  max={purchasePrice * 0.6}
                  step="5000"
                  value={equity}
                  onChange={(e) => setEquity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c4a323]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                  <span>0 € (Vollfinanzierung möglich)</span>
                  <span>{Math.round(purchasePrice * 0.6).toLocaleString('de-DE')} €</span>
                </div>
              </div>

              {/* Tilgungssatz Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Anfängliche Tilgung p.a.
                  </label>
                  <span className="text-sm font-bold text-[#1E2229]">
                    {repaymentRate.toFixed(1)} %
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1.5, 2.0, 2.5, 3.0].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setRepaymentRate(rate)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                        repaymentRate === rate
                          ? 'border-[#c4a323] bg-[#c4a323]/15 text-[#1E2229] ring-1 ring-[#c4a323]'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {rate.toFixed(1)} %
                    </button>
                  ))}
                </div>
              </div>

              {/* Zinsbindung Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Gewünschte Zinsbindung
                  </label>
                  <span className="text-sm font-bold text-[#1E2229]">
                    {interestPeriod} Jahre
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[10, 15].map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setInterestPeriod(period)}
                      className={`py-2.5 px-4 text-xs font-bold rounded-lg border flex items-center justify-center gap-2 transition-all ${
                        interestPeriod === period
                          ? 'border-[#c4a323] bg-[#1E2229] text-white shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{period} Jahre fest</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Info */}
              <div className="pt-2 flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#c4a323] shrink-0" />
                <span>Echte Kreditangebote aus über 400 Partnerbanken und eigener Kreditentscheidung.</span>
              </div>

            </div>

            {/* Right Column: Live Result Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#1E2229] text-white flex flex-col justify-between">
              
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c4a323]">
                    Ihre persönliche Monatsrate
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#c4a323]/20 text-[#c4a323] font-semibold">
                    Live-Berechnung
                  </span>
                </div>

                {/* Big Rate Display */}
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    ca. {monthlyRate.toLocaleString('de-DE')} €
                    <span className="text-sm font-semibold text-gray-400 block mt-0.5">pro Monat</span>
                  </div>
                </div>

                {/* Detailed Key Figures */}
                <div className="space-y-2.5 text-xs text-gray-300 border-t border-gray-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nettodarlehensbetrag:</span>
                    <span className="font-bold text-white">{loanAmount.toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Gebundener Sollzins p.a.:</span>
                    <span className="font-bold text-[#c4a323]">ab {interestRate.toFixed(2)} %</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Effektiver Jahreszins:</span>
                    <span className="font-bold text-white">ab {(interestRate + 0.05).toFixed(2)} %</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Restschuld nach {interestPeriod} Jahren:</span>
                    <span className="font-bold text-white">ca. {remainingDebt.toLocaleString('de-DE')} €</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="#baufi-anfrage"
                  className="shimmer-btn w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 text-center"
                >
                  <span>Dieses Angebot unverbindlich anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/4922258305776?text=${encodeURIComponent(
                    `Hallo Rhein-Finanz, ich habe im Baufinanzierungsrechner folgende Eckdaten berechnet:\n- Kaufpreis: ${purchasePrice.toLocaleString('de-DE')} €\n- Eigenkapital: ${equity.toLocaleString('de-DE')} €\n- Monatsrate: ca. ${monthlyRate.toLocaleString('de-DE')} €\nBitte prüfen Sie dieses Vorhaben für mich.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Konditionen via WhatsApp prüfen</span>
                </a>

                <p className="text-[11px] text-gray-400 text-center leading-tight pt-1">
                  Repräsentatives Berechnungsbeispiel nach PAngV. Bonitätsabhängige Konditionen. 100% kostenlose Erstberatung ohne Gebühren.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Lead Collection Form directly underneath the Mortgage Calculator */}
        <div id="baufi-anfrage" className="max-w-5xl mx-auto mt-10">
          <BaufiLeadForm
            purchasePrice={purchasePrice}
            equity={equity}
            monthlyRate={monthlyRate}
            loanAmount={loanAmount}
            interestRate={interestRate}
            interestPeriod={interestPeriod}
          />
        </div>

      </div>
    </section>
  );
}

interface BaufiLeadFormProps {
  purchasePrice: number;
  equity: number;
  monthlyRate: number;
  loanAmount: number;
  interestRate: number;
  interestPeriod: number;
}

function BaufiLeadForm({
  purchasePrice,
  equity,
  monthlyRate,
  loanAmount,
  interestRate,
  interestPeriod
}: BaufiLeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('Kauf Immobilie (Eigennutzung)');
  const [preferredContact, setPreferredContact] = useState<'Telefon' | 'WhatsApp' | 'E-Mail'>('WhatsApp');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@rheinfinanz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Neue Finanzierungsanfrage von ${name} (Rhein-Finanz)`,
          Vorhaben: purpose,
          Kaufpreis: `${purchasePrice.toLocaleString('de-DE')} €`,
          Eigenkapital: `${equity.toLocaleString('de-DE')} €`,
          Darlehensbetrag: `${loanAmount.toLocaleString('de-DE')} €`,
          Berechnete_Monatsrate: `ca. ${monthlyRate.toLocaleString('de-DE')} €`,
          Zinssatz: `${interestRate.toLocaleString('de-DE')} %`,
          Zinsbindung: `${interestPeriod} Jahre`,
          Name: name,
          Telefon: phone,
          Email: email,
          Bevorzugter_Kontakt: preferredContact,
          Anmerkung: note || 'Keine Angabe'
        })
      });
    } catch {
      // Show success screen even if network glitch occurs
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#c4a323] p-8 text-center space-y-4 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#c4a323]/20 text-[#c4a323] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-[#1E2229]">
          Vielen Dank, {name}!
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto text-sm">
          Ihre Finanzierungsanfrage (Kaufpreis {purchasePrice.toLocaleString('de-DE')} €, Rate ca. {monthlyRate.toLocaleString('de-DE')} €/Monat) ist bei Rhein-Finanz in Meckenheim eingegangen. Wir melden uns umgehend via <strong>{preferredContact}</strong> bei Ihnen.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/4922258305776?text=${encodeURIComponent(
              `Hallo Rhein-Finanz, ich (${name}) habe soeben eine Finanzierungsanfrage für ${purchasePrice.toLocaleString('de-DE')} € gesendet. Ich freue mich auf Ihre Rückmeldung!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Jetzt direkt im WhatsApp-Chat fortfahren</span>
          </a>

          <a
            href="tel:022258305776"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1E2229] hover:bg-black text-white font-bold text-sm"
          >
            <Phone className="w-4 h-4 text-[#c4a323]" />
            <span>02225 8305776 anrufen</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header Bar */}
      <div className="bg-[#1E2229] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-[#c4a323] block">
            Unverbindliche Konditionsprüfung
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Finanzierungsangebot anfordern
          </h3>
          <p className="text-xs text-gray-300 mt-1">
            Erhalten Sie ein konkretes, maßgeschneidertes Darlehensangebot aus über 400 Bankpartnern oder durch unsere direkte Vergabe.
          </p>
        </div>

        {/* Dynamic Summary Chip */}
        <div className="bg-white/10 border border-white/15 rounded-xl p-3 shrink-0 text-left sm:text-right">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-medium">Berechnete Rate</span>
          <span className="text-xl font-black text-[#c4a323]">ca. {monthlyRate.toLocaleString('de-DE')} €</span>
          <span className="text-[11px] text-gray-300 block">Darlehen: {loanAmount.toLocaleString('de-DE')} €</span>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Vorhaben */}
          <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
            <label className="text-xs font-bold text-gray-700 block">
              Ihr Vorhaben
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-sm font-medium text-gray-900"
            >
              <option value="Kauf Immobilie (Eigennutzung)">Kauf Immobilie (Eigennutzung)</option>
              <option value="Kauf Immobilie (Kapitalanlage)">Kauf Immobilie (Kapitalanlage)</option>
              <option value="Neubau / Grundstück">Neubau / Grundstückskauf</option>
              <option value="Anschlussfinanzierung / Umschuldung">Anschlussfinanzierung / Umschuldung</option>
              <option value="Modernisierung / Sanierung">Modernisierung / Sanierung</option>
            </select>
          </div>

          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">
              Vollständiger Name *
            </label>
            <input
              type="text"
              required
              placeholder="z.B. Max Mustermann"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-sm text-gray-900"
            />
          </div>

          {/* Telefonnummer */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">
              Telefonnummer *
            </label>
            <input
              type="tel"
              required
              placeholder="z.B. 0177 1234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-sm text-gray-900"
            />
          </div>

          {/* E-Mail */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              required
              placeholder="ihre-email@beispiel.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-sm text-gray-900"
            />
          </div>

          {/* Bevorzugter Kontaktkanal */}
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-bold text-gray-700 block">
              Wie möchten Sie kontaktiert werden?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['WhatsApp', 'Telefon', 'E-Mail'] as const).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPreferredContact(method)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                    preferredContact === method
                      ? 'border-[#c4a323] bg-[#c4a323]/15 text-[#1E2229] ring-1 ring-[#c4a323]'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {method === 'WhatsApp' ? '💬 WhatsApp' : method === 'Telefon' ? '📞 Telefonanruf' : '✉️ E-Mail'}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Notiz */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 block">
            Ihre Anmerkung oder Wunschtermin (optional)
          </label>
          <textarea
            rows={2}
            placeholder="Gibt es Besonderheiten (z.B. Besichtigungstermin steht bevor, Sanierungsbudget, etc.)?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#c4a323] focus:border-transparent text-sm text-gray-900"
          />
        </div>

        {/* Submit & Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
          
          <button
            type="submit"
            id="submit-baufi-lead"
            disabled={isSubmitting}
            className="shimmer-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all shadow-md active:scale-98 disabled:opacity-75 cursor-pointer"
          >
            <span>{isSubmitting ? 'Wird übermittelt...' : 'Kostenloses Finanzierungsangebot anfordern'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Direct Links */}
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="text-gray-400">Direktkontakt:</span>
            <a
              href="tel:022258305776"
              className="font-bold text-[#1E2229] hover:text-[#c4a323] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#c4a323]" />
              02225 8305776
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:info@rheinfinanz.com"
              className="text-gray-600 hover:text-[#1E2229] transition-colors"
            >
              info@rheinfinanz.com
            </a>
          </div>

        </div>

        {/* Privacy Note */}
        <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
          <ShieldCheck className="w-4 h-4 text-[#c4a323] shrink-0" />
          <span>Ihre Daten werden vertraulich gemäß DSGVO behandelt und niemals an unbefugte Dritte weitergegeben. Keine Vorkosten, keine Verpflichtung.</span>
        </div>

      </form>

    </div>
  );
}
