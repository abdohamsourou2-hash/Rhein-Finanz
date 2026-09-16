import { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { ActiveModal } from '../types';

interface CookieConsentProps {
  onOpenModal: (modal: ActiveModal) => void;
  isOpenExplicitly?: boolean;
  onCloseExplicit?: () => void;
}

export type CookieSettings = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export const COOKIE_STORAGE_KEY = 'rheinfinanz_cookie_consent_v1';

export default function CookieConsent({ onOpenModal, isOpenExplicitly, onCloseExplicit }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [functionalEnabled, setFunctionalEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    // If explicitly opened via footer link
    if (isOpenExplicitly) {
      // Load saved settings if any
      try {
        const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (saved) {
          const parsed: CookieSettings = JSON.parse(saved);
          setFunctionalEnabled(parsed.functional ?? true);
          setAnalyticsEnabled(parsed.analytics ?? false);
          setMarketingEnabled(parsed.marketing ?? false);
        }
      } catch {
        // ignore
      }
      setShowDetails(true);
      setIsVisible(true);
      return;
    }

    // Normal visit check
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        // Small delay for smooth entry after initial page load
        const timer = setTimeout(() => setIsVisible(true), 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked or unavailable
      setIsVisible(true);
    }
  }, [isOpenExplicitly]);

  const saveConsent = (settings: CookieSettings) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not save cookie consent to localStorage', e);
    }
    setIsVisible(false);
    if (onCloseExplicit) onCloseExplicit();
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleAcceptEssentialOnly = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      necessary: true,
      functional: functionalEnabled,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="w-full max-w-3xl bg-[#1E2229] text-white rounded-2xl shadow-2xl border border-white/15 p-5 sm:p-6 pointer-events-auto backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#c4a323]/20 border border-[#c4a323]/40 flex items-center justify-center shrink-0 text-[#c4a323]">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 id="cookie-banner-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Privatsphäre- und Cookie-Einstellungen</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#c4a323] text-[#1E2229]">
                DSGVO
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              Wir verwenden auf unserer Website Cookies und ähnliche Technologien, um Ihnen eine optimale, sichere Nutzung zu ermöglichen. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.
            </p>
          </div>
        </div>

        {/* Expandable Details Accordion */}
        {showDetails && (
          <div className="my-4 pt-4 border-t border-white/10 space-y-3 max-h-64 overflow-y-auto pr-1 text-xs">
            
            {/* Category 1: Technisch Notwendig (Immer aktiv) */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Technisch notwendig</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300 font-semibold">
                    Immer aktiv
                  </span>
                </div>
                <p className="text-gray-400">
                  Erforderlich für den sicheren Betrieb der Website, Session-Handling und das Speichern Ihrer Cookie-Präferenzen. Ohne diese Cookies funktioniert die Seite nicht einwandfrei.
                </p>
              </div>
              <div className="shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  aria-label="Technisch notwendige Cookies (immer aktiv)"
                  className="w-4 h-4 rounded text-[#c4a323] cursor-not-allowed opacity-80"
                />
              </div>
            </div>

            {/* Category 2: Funktionale Cookies */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Funktional & Rechner-Präferenzen</span>
                </div>
                <p className="text-gray-400">
                  Ermöglicht komfortable Funktionen, wie das Zwischenspeichern Ihrer Berechnungen im Zinsrechner oder in der Immobilien-Wertermittlung während Ihres Besuchs.
                </p>
              </div>
              <div className="shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  id="cookie-functional"
                  checked={functionalEnabled}
                  onChange={(e) => setFunctionalEnabled(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#c4a323] cursor-pointer"
                />
              </div>
            </div>

            {/* Category 3: Analyse & Statistik */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Analyse & Statistik</span>
                </div>
                <p className="text-gray-400">
                  Hilft uns zu verstehen, wie Besucher unsere Finanzierungsrechner und Ratgeber nutzen, um unser Beratungsangebot kontinuierlich für Sie zu verbessern.
                </p>
              </div>
              <div className="shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#c4a323] cursor-pointer"
                />
              </div>
            </div>

            {/* Category 4: Marketing & Partner */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Marketing & Partner</span>
                </div>
                <p className="text-gray-400">
                  Dient zur Anzeige relevanter, personalisierter Inhalte und zur Erfolgsmessung unserer Werbekampagnen.
                </p>
              </div>
              <div className="shrink-0 pt-0.5">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#c4a323] cursor-pointer"
                />
              </div>
            </div>

          </div>
        )}

        {/* Footer info & links */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 pt-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-[#c4a323] hover:text-[#d8b52a] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{showDetails ? 'Details ausblenden' : 'Einstellungen anpassen'}</span>
            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenModal('datenschutz')}
              className="text-gray-300 hover:text-white underline underline-offset-2 cursor-pointer"
            >
              Datenschutzerklärung
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenModal('impressum')}
              className="text-gray-300 hover:text-white underline underline-offset-2 cursor-pointer"
            >
              Impressum
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
          {showDetails ? (
            <button
              type="button"
              onClick={handleSaveCustom}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 bg-white/10 hover:bg-white/15 transition-all cursor-pointer text-center"
            >
              Auswahl speichern
            </button>
          ) : null}

          <button
            type="button"
            onClick={handleAcceptEssentialOnly}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer text-center"
          >
            Nur notwendige Cookies
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1E2229] bg-[#c4a323] hover:bg-[#b3921b] transition-all cursor-pointer text-center shadow-md flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Alle akzeptieren</span>
          </button>
        </div>

      </div>
    </div>
  );
}
