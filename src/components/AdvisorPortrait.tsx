interface AdvisorPortraitProps {
  variant: 'hero' | 'about';
  className?: string;
}

// Exact portrait paths:
// 1. /hamo-portrait.jpg (as uploaded directly to GitHub/public)
// 2. Fallback variants in case of different naming
const PORTRAIT_SOURCES = [
  '/hamo-portrait.jpg',
  '/hamo-hussein.jpg',
  '/Facetune_06-04-2025-20-55-02-2.jpg',
  '/portrait.jpg'
];

export default function AdvisorPortrait({ variant, className = '' }: AdvisorPortraitProps) {
  if (variant === 'hero') {
    return (
      <div className={`relative ${className}`}>
        <div 
          className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#c4a323] shrink-0 bg-[#1E2229] shadow-xs"
        >
          <picture>
            <source srcSet="/hamo-portrait.jpg" type="image/jpeg" />
            <img
              src="/hamo-portrait.jpg"
              alt="Hamo Hussein – Bankkaufmann & Inhaber Rhein-Finanz Meckenheim"
              className="w-full h-full object-cover object-top"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback1) {
                  target.dataset.fallback1 = 'true';
                  target.src = '/Facetune_06-04-2025-20-55-02-2.jpg';
                } else if (!target.dataset.fallback2) {
                  target.dataset.fallback2 = 'true';
                  target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
                }
              }}
            />
          </picture>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" title="Direkt erreichbar" />
        </div>
      </div>
    );
  }

  // Variant === 'about'
  return (
    <div className={`relative w-full max-w-[290px] flex flex-col items-center ${className}`}>
      <div 
        className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-2 border-[#c4a323]/50 bg-[#1E2229]"
      >
        <picture>
          <source srcSet="/hamo-portrait.jpg" type="image/jpeg" />
          <img
            src="/hamo-portrait.jpg"
            alt="Hamo Hussein – Bankkaufmann, Inhaber & Kreditentscheider Rhein-Finanz Meckenheim"
            className="w-full h-full object-cover object-top"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback1) {
                target.dataset.fallback1 = 'true';
                target.src = '/Facetune_06-04-2025-20-55-02-2.jpg';
              } else if (!target.dataset.fallback2) {
                target.dataset.fallback2 = 'true';
                target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
              }
            }}
          />
        </picture>

        {/* Elegant static micro-badge */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#1E2229]/95 backdrop-blur-md text-white p-3 rounded-xl border border-[#c4a323]/40 text-center shadow-lg pointer-events-none">
          <span className="block text-sm font-black text-white tracking-wide">Hamo Hussein</span>
          <span className="block text-xs font-bold text-[#c4a323] mt-0.5">Bankkaufmann & Inhaber</span>
          <span className="block text-[10px] text-gray-300 mt-0.5 font-medium">Rhein-Finanz Meckenheim • Persönlicher Kreditentscheider</span>
        </div>
      </div>
    </div>
  );
}
