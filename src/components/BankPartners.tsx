import { ShieldCheck } from 'lucide-react';

export default function BankPartners() {
  const banks = [
    {
      name: 'Sparkasse',
      logo: '/assets/banks/sparkasse.svg',
      alt: 'Sparkasse Baufinanzierung Partner',
      heightClass: 'h-8 sm:h-9 max-w-[130px]',
    },
    {
      name: 'Volksbanken Raiffeisenbanken',
      logo: '/assets/banks/volksbank.svg',
      alt: 'Volksbanken Raiffeisenbanken Partner',
      heightClass: 'h-8 sm:h-9 max-w-[140px]',
    },
    {
      name: 'Commerzbank',
      logo: '/assets/banks/commerzbank.svg',
      alt: 'Commerzbank Baufinanzierung',
      heightClass: 'h-7 sm:h-8 max-w-[145px]',
    },
    {
      name: 'Deutsche Bank',
      logo: '/assets/banks/deutsche_bank.svg',
      alt: 'Deutsche Bank Baufinanzierung',
      heightClass: 'h-7 sm:h-8 max-w-[140px]',
    },
    {
      name: 'ING',
      logo: '/assets/banks/ing.svg',
      alt: 'ING Baufinanzierung Partner',
      heightClass: 'h-7 sm:h-8 max-w-[110px]',
    },
    {
      name: 'Bausparkasse Schwäbisch Hall',
      logo: '/assets/banks/schwaebisch_hall.svg',
      alt: 'Bausparkasse Schwäbisch Hall',
      heightClass: 'h-7 sm:h-8 max-w-[150px]',
    },
    {
      name: 'Allianz',
      logo: '/assets/banks/allianz.svg',
      alt: 'Allianz Baufinanzierung',
      heightClass: 'h-7 sm:h-8 max-w-[125px]',
    },
    {
      name: 'KfW',
      logo: '/assets/banks/kfw.svg',
      alt: 'KfW Förderbank',
      heightClass: 'h-8 sm:h-9 max-w-[110px]',
    },
    {
      name: 'Santander',
      logo: '/assets/banks/santander.svg',
      alt: 'Santander Bank',
      heightClass: 'h-6 sm:h-7 max-w-[135px]',
    },
    {
      name: 'DSL Bank',
      logo: '/assets/banks/dsl_bank.svg',
      alt: 'DSL Bank Baufinanzierung',
      heightClass: 'h-8 sm:h-9 max-w-[130px]',
    },
    {
      name: 'Münchener Hypothekenbank',
      logo: '/assets/banks/muenchener_hyp.svg',
      alt: 'Münchener Hypothekenbank',
      heightClass: 'h-8 sm:h-9 max-w-[135px]',
    },
    {
      name: 'LBS',
      logo: '/assets/banks/lbs.svg',
      alt: 'LBS Landesbausparkasse',
      heightClass: 'h-8 sm:h-9 max-w-[120px]',
    },
  ];

  return (
    <section id="bankpartner" className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, clear header without overwhelming the customer */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4a323]/15 border border-[#c4a323]/40 text-[#1E2229] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c4a323]" />
            <span>Bankenunabhängig &amp; Transparent</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2229] tracking-tight">
            Starke Partner für Ihre Finanzierung
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Wir vergleichen für Sie unabhängig aus über <strong>400 Banken und Darlehensgebern</strong>, um das beste Angebot für Sie herauszusuchen.
          </p>
        </div>

        {/* Clean, pure 12-Logo Grid with genuine official SVG brand marks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {banks.map((bank, index) => (
            <div
              key={index}
              title={bank.name}
              className="bg-white rounded-xl h-20 sm:h-22 p-3 sm:p-4 border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#c4a323]/60 transition-all duration-200 flex items-center justify-center group"
            >
              <div className="flex items-center justify-center w-full h-full transition-transform duration-200 group-hover:scale-105">
                <img
                  src={bank.logo}
                  alt={bank.alt}
                  className={`w-auto object-contain ${bank.heightClass}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Short, reassuring footnote */}
        <div className="mt-6 text-center text-xs text-gray-500">
          ... und über 400 weitere regionale Sparkassen, Volksbanken und bundesweite Darlehensgeber.
        </div>

      </div>
    </section>
  );
}
