import { Landmark, Home, Shield, TrendingUp, Check, ArrowRight, Banknote, FileCheck, CreditCard, Building2, Zap } from 'lucide-react';

export default function CoreServices() {
  const services = [
    {
      id: 'finanzierungen',
      title: 'Baufinanzierung & Kredite',
      subtitle: 'Direkte Kreditvergabe & Darlehen',
      badge: 'Eigener Kreditgeber',
      badgeColor: 'bg-[#c4a323] text-[#1E2229]',
      icon: Landmark,
      description: 'Wir sind kein Vermittlungsportal, sondern vergeben Finanzierungen und Kredite direkt. Schnelle Bonitätsprüfung und maßgeschneiderte Darlehenskonzepte ohne zeitraubende Hausbank-Bürokratie.',
      highlights: [
        'Direkte Kreditvergabe & eigene Darlehensentscheidungen',
        'Baufinanzierungen für Neubau, Kauf & Modernisierung',
        'Anschlussfinanzierungen & Forward-Darlehen zur Zinssicherung',
        'Privatkredite & Ratenkredite für Umschuldung & Konsum',
      ],
      ctaText: 'Finanzierungsangebot anfragen',
      ctaHref: '#zinsrechner',
    },
    {
      id: 'unternehmensfinanzierung',
      title: 'Unternehmensfinanzierung',
      subtitle: 'Firmenkredite & Liquidität',
      badge: 'Gewerbe & Mittelstand',
      badgeColor: 'bg-[#1E2229] text-[#c4a323] border border-[#c4a323]/40',
      icon: Building2,
      description: 'Maßgeschneiderte Finanzierungslösungen für Selbstständige, Gewerbetreibende und den Mittelstand. Investitionsdarlehen, Betriebsmittelkredite, Gewerbeimmobilien und zinsgünstige KfW-Förderdarlehen.',
      highlights: [
        'Investitions- & Betriebsmittelkredite für Maschinen & Wachstum',
        'Gewerbliche Immobilienfinanzierung & Umschuldungen',
        'KfW- & Landesförderdarlehen mit Tilgungszuschüssen',
        'Bankenunabhängiger Vergleich über 400 Spezialfinanzierer',
      ],
      ctaText: 'Gewerbekredit berechnen',
      ctaHref: '#unternehmensfinanzierung',
    },
    {
      id: 'privatkredit',
      title: 'Privatkredit & Sofortkredit',
      subtitle: 'Schnelle Auszahlung & Zinsvorteil',
      badge: '100% Schufa-neutral',
      badgeColor: 'bg-emerald-700 text-white',
      icon: CreditCard,
      description: 'Zinsgünstige Ratenkredite von 1.000 € bis 80.000 € mit flexibler Laufzeit von 12 bis 120 Monaten. Ideal für Umschuldung teurer Altkredite, Autokauf, Renovierung oder freie Verwendung.',
      highlights: [
        'Zinsvergleich über 20 Partnerbanken für beste Konditionen',
        'Günstige Umschuldung zur Senkung der monatlichen Belastung',
        'Zweckgebundene Autokredite & Modernisierungskredite',
        'Schnelle Bearbeitung & Auszahlung oft binnen 24–48h',
      ],
      ctaText: 'Privatkredit berechnen',
      ctaHref: '#privatkredit',
    },
    {
      id: 'strom-gas',
      title: 'Strom- & Gasverträge',
      subtitle: 'Tarifoptimierung & Wechselservice',
      badge: 'Bis 500 € sparen',
      badgeColor: 'bg-amber-100 text-amber-900 border border-amber-300',
      icon: Zap,
      description: 'Zahlen Sie nicht zu viel für Ihre Energie. Wir vergleichen geprüfte Strom- und Gastarife für Privathaushalte und Gewerbebetriebe und übernehmen die Kündigung sowie den gesamten Anbieterwechsel für Sie – völlig kostenfrei.',
      highlights: [
        'Kostenloser Vergleich geprüfter Qualitätsanbieter',
        '100% Wechselservice: Wir kündigen Ihren Altanbieter',
        'Garantiert unterbrechungsfreie Energieversorgung',
        'Hohe Ersparnis für Privatkunden & Gewerbe',
      ],
      ctaText: 'Strom & Gas prüfen',
      ctaHref: '#strom-gas',
    },
    {
      id: 'makler',
      title: 'Immobilienmakler',
      subtitle: 'Zertifizierte Wertermittlung & Verkauf',
      badge: 'Zertifizierter Makler',
      badgeColor: 'bg-[#1E2229] text-white border border-[#c4a323]/40',
      icon: Home,
      description: 'Verkaufen Sie Ihre Immobilie im Rheinland zum Bestpreis. Mit über 15 Jahren Markterfahrung, fundierter Wertermittlung und echtem Vorteil: Wir prüfen Käufer vorab direkt auf ihre Bonität.',
      highlights: [
        'Zertifizierte Immobilienbewertung vor Ort in Meckenheim & Region',
        'Gezielte, diskrete Vermarktung ohne Besichtigungstourismus',
        'Bonitätsprüfung von Kaufinteressenten direkt im Haus',
        'Rechtssichere Begleitung bis zum Notartermin und zur Übergabe',
      ],
      ctaText: 'Immobilie bewerten lassen',
      ctaHref: '#wertrechner',
    },
    {
      id: 'absicherung',
      title: 'Absicherungen & Versicherung',
      subtitle: 'Schutz für Immobilie, Darlehen & Familie',
      badge: 'Rundum abgesichert',
      badgeColor: 'bg-gray-100 text-[#1E2229]',
      icon: Shield,
      description: 'Eine solide Finanzierung steht auf verlässlichen Säulen. Wir sichern Ihr Darlehen, Ihr Bauvorhaben und Ihre Familie gegen unvorhersehbare Lebensrisiken maßgeschneidert ab.',
      highlights: [
        'Wohngebäude- & Bauherren-Haftpflichtversicherungen',
        'Risikolebensversicherung zur Absicherung der Darlehenslast',
        'Existenz- & Berufsunfähigkeitsschutz abgestimmt auf Ihre Raten',
        'Kostenloser Check bestehender Versicherungsverträge',
      ],
      ctaText: 'Absicherung abstimmen',
      ctaHref: '#kontakt',
    },
    {
      id: 'vermoegen',
      title: 'Geldanlage & Vermögensaufbau',
      subtitle: 'Sachwerte & strategischer Kapitalaufbau',
      badge: 'Substanz & Rendite',
      badgeColor: 'bg-gray-100 text-[#1E2229]',
      icon: TrendingUp,
      description: 'Unabhängige Strategien für Ihren langfristigen Vermögensaufbau. Sachwertorientiert, inflationsgeschützt und exakt auf Ihre persönlichen Spar- und Lebensziele ausgerichtet.',
      highlights: [
        'Sachwertorientierte Anlagekonzepte (Immobilien & Substanzwerte)',
        'Strukturierter Vermögensaufbau mit Weitblick',
        'Zins- & Festgeldanlagen für Liquiditätsreserven',
        'Individuelle Ruhestands- und Generationenplanung',
      ],
      ctaText: 'Strategiegespräch vereinbaren',
      ctaHref: '#kontakt',
    },
  ];

  return (
    <section id="leistungen" className="py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/15 border border-[#c4a323]/40 text-[#1E2229] text-xs font-bold uppercase tracking-wider">
              <Banknote className="w-3.5 h-3.5 text-[#c4a323]" />
              <span>Alles aus einer Hand</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2229] tracking-tight">
              Ganzheitliche Finanz- &amp; Immobilienlösungen
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Hier entstehen Angebote und werden Entscheidungen getroffen: Unabhängige Baufinanzierung, Unternehmenskredite, Ratenkredite, Energieoptimierung sowie Makler- und Sachverständigenkompetenz aus einer Hand.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2229] hover:text-[#c4a323] transition-colors"
            >
              <span>Alle Leistungen im persönlichen Gespräch abstimmen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Core Service Cards (Baufi24-like clarity & structured cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            const isHighlight = srv.id === 'finanzierungen';

            return (
              <div
                key={srv.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
                  isHighlight
                    ? 'bg-gradient-to-br from-white to-[#c4a323]/5 border-[#c4a323] shadow-lg ring-1 ring-[#c4a323]/30'
                    : 'bg-[#F8F9FA] border-gray-200/90 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top card header with badge & icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1E2229] text-[#c4a323] flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          {srv.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#1E2229]">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-tight shrink-0 ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-8 border-t border-gray-200/60 pt-5">
                    {srv.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800">
                        <Check className="w-4 h-4 text-[#c4a323] shrink-0 mt-0.5" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA for each card */}
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <a
                    href={srv.ctaHref}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all ${
                      isHighlight
                        ? 'px-5 py-2.5 rounded-lg bg-[#c4a323] text-[#1E2229] hover:bg-[#b3921b] shadow-xs'
                        : 'text-[#1E2229] hover:text-[#c4a323]'
                    }`}
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#c4a323]" />
                    Direkt & unverbindlich
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
