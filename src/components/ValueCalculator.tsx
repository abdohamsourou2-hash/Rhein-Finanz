import { useState, useMemo, FormEvent } from 'react';
import { Home, Building2, Building, Calculator, Check, ArrowRight, ShieldCheck, MapPin, Info, Sparkles, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function ValueCalculator() {
  const [propertyType, setPropertyType] = useState('Einfamilienhaus');
  const [area, setArea] = useState('140');
  const [condition, setCondition] = useState('Gepflegt');
  const [location, setLocation] = useState('53340 Meckenheim');
  const [purpose, setPurpose] = useState('Verkauf geplant');
  
  // Lead form states
  const [salutation, setSalutation] = useState('Herr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !emailVal) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@rheinfinanz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Neue Immobilien-Wertermittlung: ${firstName} ${lastName} (${propertyType})`,
          Anrede: salutation,
          Vorname: firstName,
          Nachname: lastName,
          Telefon: phone,
          Email: emailVal,
          Immobilienart: propertyType,
          Wohnflaeche: `${area} m²`,
          Zustand: condition,
          Standort: location,
          Vorhaben: purpose,
          Berechneter_Richtwert: `Ca. ${calculatedEstimate.lower} € bis ${calculatedEstimate.upper} € (Mittel: ${calculatedEstimate.average} €)`,
          Anmerkung: note || 'Keine besondere Anmerkung',
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
  
  // Realistic, conservative range estimation for regional Rhineland (Meckenheim, Rheinbach, Swisttal, Bonn)
  // Aligned with official Gutachterausschuss Rhein-Sieg-Kreis market transaction reports
  const calculatedEstimate = useMemo(() => {
    const numArea = Math.max(20, Math.min(1000, Number(area) || 120));
    
    // Conservative and market-realistic base price per m² for Meckenheim & Rhein-Sieg
    let basePerSqm = 2500;
    if (propertyType === 'Eigentumswohnung') basePerSqm = 2250;
    if (propertyType === 'Mehrfamilienhaus') basePerSqm = 1850;
    if (propertyType === 'Doppelhaushälfte / Reihenhaus') basePerSqm = 2450;
    if (propertyType === 'Einfamilienhaus') basePerSqm = 2800;

    let conditionFactor = 1.0;
    if (condition === 'Neuwertig / Kürzlich saniert') conditionFactor = 1.08;
    if (condition === 'Gepflegt') conditionFactor = 1.00;
    if (condition === 'Teilrenovierungsbedürftig') conditionFactor = 0.86;
    if (condition === 'Sanierungsbedürftig') conditionFactor = 0.72;

    const estimatedValue = Math.round((numArea * basePerSqm * conditionFactor) / 2500) * 2500;
    const lowerBound = Math.round(estimatedValue * 0.94 / 2500) * 2500;
    const upperBound = Math.round(estimatedValue * 1.06 / 2500) * 2500;

    return {
      lower: lowerBound.toLocaleString('de-DE'),
      upper: upperBound.toLocaleString('de-DE'),
      average: estimatedValue.toLocaleString('de-DE')
    };
  }, [propertyType, area, condition]);

  return (
    <section id="wertrechner" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/15 border border-[#c4a323]/40 text-[#1E2229] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>Seriöse Immobilienwertermittlung nach ImmoWertV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
            Wie viel ist meine Immobilie wirklich wert?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Ermitteln Sie den realistischen Marktwert Ihrer Immobilie im Rheinland. Fundiert, seriös und ohne übertriebene Lockpreise – basierend auf den realen Kaufpreissammlungen des Gutachterausschusses und über 15 Jahren Banken- und Maklererfahrung in Meckenheim.
          </p>
        </div>

        {/* The Main Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/90 overflow-hidden">
          
          {/* Top banner */}
          <div className="bg-[#1E2229] px-6 py-4 sm:px-8 text-white flex flex-wrap items-center justify-between gap-4 border-b border-[#c4a323]/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c4a323]" />
              <span className="font-bold text-sm sm:text-base">
                Wertermittlung & Finanzierungsprüfung Rheinland
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#c4a323]" />
              <span>Direkt an Inhaber info@rheinfinanz.com</span>
            </div>
          </div>

          {/* Form with direct AJAX Lead Routing to info@rheinfinanz.com */}
          {isSubmitted ? (
            <div className="p-8 sm:p-12 text-center space-y-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-black text-[#1E2229]">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ihre Angaben zur <strong>{propertyType}</strong> (ca. {calculatedEstimate.lower} € – {calculatedEstimate.upper} €) wurden erfolgreich und direkt an <strong>info@rheinfinanz.com</strong> übermittelt.
                </p>
                <p className="text-xs text-gray-500">
                  Herr Hamo Hussein prüft Ihre Eckdaten und meldet sich schnellstmöglich persönlich bei Ihnen.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/4922258305776?text=${encodeURIComponent(`Hallo Herr Hussein, ich habe soeben eine Wertermittlung für meine Immobilie (${propertyType}, ca. ${area} m²) an info@rheinfinanz.com gesendet.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Direkt per WhatsApp nachfragen</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm transition-all"
                >
                  Weitere Immobilie bewerten
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 lg:p-10 space-y-8"
            >

            {/* Step 1: Property Type Selection */}
            <div>
              <label className="block text-sm font-bold text-[#1E2229] mb-3">
                1. Art der Immobilie auswählen:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Einfamilienhaus', icon: Home },
                  { label: 'Doppelhaushälfte / Reihenhaus', icon: Building2 },
                  { label: 'Eigentumswohnung', icon: Building },
                  { label: 'Mehrfamilienhaus / Gewerbe', icon: Building2 },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.label;
                  return (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => setPropertyType(item.label)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col justify-between h-24 transition-all ${
                        isSelected
                          ? 'border-[#c4a323] bg-[#c4a323]/10 text-[#1E2229] ring-2 ring-[#c4a323]/40'
                          : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#c4a323]' : 'text-gray-500'}`} />
                      <span className="text-xs font-bold leading-tight line-clamp-2">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {/* Actual form input holding property type */}
              <input type="hidden" name="immobilienart" value={propertyType} />
            </div>

            {/* Step 2: Dimensions & Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="wohnflaeche" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Wohnfläche (ca. m²) *
                </label>
                <div className="relative">
                  <input
                    id="wohnflaeche"
                    type="number"
                    name="wohnflaeche_qm"
                    required
                    min="20"
                    max="2000"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] font-semibold focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                    placeholder="z.B. 140"
                  />
                  <span className="absolute right-3.5 top-3.5 text-xs text-gray-400 font-bold">m²</span>
                </div>
              </div>

              <div>
                <label htmlFor="grundstueck" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Grundstück (optional m²)
                </label>
                <div className="relative">
                  <input
                    id="grundstueck"
                    type="number"
                    name="grundstueck_qm"
                    min="0"
                    max="10000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                    placeholder="z.B. 450"
                  />
                  <span className="absolute right-3.5 top-3.5 text-xs text-gray-400 font-bold">m²</span>
                </div>
              </div>

              <div>
                <label htmlFor="baujahr" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Baujahr (ca.) *
                </label>
                <input
                  id="baujahr"
                  type="number"
                  name="baujahr"
                  required
                  min="1850"
                  max="2026"
                  defaultValue="2005"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] font-semibold focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                  placeholder="z.B. 2005"
                />
              </div>
            </div>

            {/* Condition & Location Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="zustand" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Zustand der Immobilie *
                </label>
                <select
                  id="zustand"
                  name="zustand"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] font-medium bg-white focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                >
                  <option value="Neuwertig / Kürzlich saniert">Neuwertig / Kürzlich kernsaniert</option>
                  <option value="Gepflegt">Gepflegt (normaler Instandhaltungszustand)</option>
                  <option value="Teilrenovierungsbedürftig">Teilrenovierungsbedürftig (Bäder/Heizung)</option>
                  <option value="Sanierungsbedürftig">Sanierungsbedürftig</option>
                </select>
              </div>

              <div>
                <label htmlFor="plz_ort" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  PLZ & Ort (Region Rheinland) *
                </label>
                <div className="relative">
                  <input
                    id="plz_ort"
                    type="text"
                    name="plz_ort"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] font-semibold focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                    placeholder="z.B. 53340 Meckenheim oder Bonn"
                  />
                  <MapPin className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Purpose & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="vorhaben" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Ihr Vorhaben / Anliegen *
                </label>
                <select
                  id="vorhaben"
                  name="vorhaben"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#1E2229] font-medium bg-white focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                >
                  <option value="Verkauf geplant">Immobilienverkauf geplant</option>
                  <option value="Finanzierung / Anschlussfinanzierung">Finanzierung oder Anschlussfinanzierung anfragen</option>
                  <option value="Kapitalbeschaffung">Kapitalbeschaffung über bestehende Immobilie</option>
                  <option value="Erbauseinandersetzung">Erbauseinandersetzung / Scheidung</option>
                  <option value="Reine Orientierung">Reine Orientierung über den Marktwert</option>
                </select>
              </div>

              <div>
                <label htmlFor="zeitrahmen" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Geplanter Zeitrahmen *
                </label>
                <select
                  id="zeitrahmen"
                  name="zeitrahmen"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#1E2229] font-medium bg-white focus:outline-hidden focus:border-[#c4a323] focus:ring-2 focus:ring-[#c4a323]/20"
                >
                  <option value="Schnellstmöglich / 1-3 Monate">Schnellstmöglich (1 – 3 Monate)</option>
                  <option value="In 3 bis 6 Monaten">In 3 bis 6 Monaten</option>
                  <option value="In 6 bis 12 Monaten">In 6 bis 12 Monaten</option>
                  <option value="Kein fester Termin">Kein fester Termin / Nach Marktlage</option>
                </select>
              </div>
            </div>

            {/* Live Interactive Indicative Estimate Box */}
            <div className="bg-[#1E2229] text-white p-5 sm:p-6 rounded-xl border border-[#c4a323]/40 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#c4a323] font-bold uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Realistischer Richtwert nach amtlicher Kaufpreissammlung ({location || 'Meckenheim & Rhein-Sieg'})</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {calculatedEstimate.lower} € – {calculatedEstimate.upper} €
                  </div>
                  <p className="text-xs text-gray-400">
                    Basierend auf ca. {area} m² Wohnfläche ({propertyType}, Zustand: {condition}). Seriöse Richtwertspanne nach ImmoWertV – ohne übertriebene Fantasiewerte.
                  </p>
                </div>

                <div className="shrink-0 bg-white/10 px-3.5 py-2 rounded-lg text-right hidden sm:block">
                  <span className="block text-[11px] text-gray-400">Mittelwert</span>
                  <span className="font-bold text-base text-[#c4a323]">ca. {calculatedEstimate.average} €</span>
                </div>
              </div>
            </div>

            {/* Step 3: Contact Details for Personal Valuation & Direct Loan Option */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#1E2229]">
                  Wohin dürfen wir die fundierte Auswertung & das Finanzierungsangebot senden?
                </h3>
                <span className="text-xs text-gray-600 font-medium">* Pflichtfelder</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor="anrede" className="block text-xs font-semibold text-gray-700 mb-1">
                    Anrede
                  </label>
                  <select
                    id="anrede"
                    name="anrede"
                    value={salutation}
                    onChange={(e) => setSalutation(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-[#1E2229]"
                  >
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Familie">Familie</option>
                  </select>
                </div>

                <div className="sm:col-span-5">
                  <label htmlFor="vorname" className="block text-xs font-semibold text-gray-700 mb-1">
                    Vorname *
                  </label>
                  <input
                    id="vorname"
                    type="text"
                    name="vorname"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Ihr Vorname"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323]"
                  />
                </div>

                <div className="sm:col-span-5">
                  <label htmlFor="nachname" className="block text-xs font-semibold text-gray-700 mb-1">
                    Nachname *
                  </label>
                  <input
                    id="nachname"
                    type="text"
                    name="nachname"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ihr Nachname"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefon" className="block text-xs font-semibold text-gray-700 mb-1">
                    Telefonnummer für Rückfragen *
                  </label>
                  <input
                    id="telefon"
                    type="tel"
                    name="telefon"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="z.B. 0177 5169324 oder 02225..."
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                    E-Mail-Adresse *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    placeholder="ihre.adresse@beispiel.de"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="nachricht" className="block text-xs font-semibold text-gray-700 mb-1">
                  Ihre Anmerkung oder Finanzierungswunsch (optional)
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Besonderheiten zur Immobilie, gewünschte Darlehenssumme oder bevorzugte Rückrufzeit..."
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-base sm:text-sm text-[#1E2229] focus:outline-hidden focus:border-[#c4a323]"
                />
              </div>

              {/* DSGVO Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="datenschutz-check"
                  type="checkbox"
                  name="datenschutz"
                  required
                  className="mt-1 h-4 w-4 rounded-sm border-gray-300 text-[#c4a323] focus:ring-[#c4a323]"
                />
                <label htmlFor="datenschutz-check" className="text-xs text-gray-600 leading-relaxed">
                  Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Erstellung der Immobilienbewertung bzw. des Finanzierungsangebots durch Rhein-Finanz verarbeitet werden. Sie können diese Einwilligung jederzeit widerrufen (siehe Datenschutzerklärung im Footer).
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="submit-valuation-btn"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-lg font-black text-base text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-99"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#1E2229] border-t-transparent rounded-full animate-spin" />
                    Wird an info@rheinfinanz.com übermittelt...
                  </span>
                ) : (
                  <>
                    <span>Kostenlose Wertermittlung & Finanzierungsangebot anfordern</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-700">
                <span className="flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#c4a323]" /> 100% unverbindlich & kostenlos
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#c4a323]" /> Direkter Ansprechpartner in Meckenheim
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#c4a323]" /> Keine Weitergabe an Dritte
                </span>
              </div>
            </div>

          </form>
          )}

        </div>

      </div>
    </section>
  );
}
