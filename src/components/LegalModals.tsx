import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, FileText, Scale, Lock } from 'lucide-react';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | 'agb' | 'erstinformation' | null;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  const [currentTab, setCurrentTab] = useState<'impressum' | 'datenschutz' | 'agb' | 'erstinformation'>('impressum');

  useEffect(() => {
    if (activeModal) {
      setCurrentTab(activeModal);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#1E2229] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#c4a323]/20 flex items-center justify-center text-[#c4a323] border border-[#c4a323]/30">
              {currentTab === 'impressum' && <FileText className="w-5 h-5" />}
              {currentTab === 'datenschutz' && <Lock className="w-5 h-5" />}
              {currentTab === 'agb' && <Scale className="w-5 h-5" />}
              {currentTab === 'erstinformation' && <ShieldCheck className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {currentTab === 'impressum' && 'Impressum'}
                {currentTab === 'datenschutz' && 'Datenschutzerklärung'}
                {currentTab === 'agb' && 'Allgemeine Geschäftsbedingungen'}
                {currentTab === 'erstinformation' && 'Gesetzliche Erstinformation'}
              </h2>
              <p className="text-xs text-gray-400">Rhein-Finanz • Meckenheim & Rhein-Sieg-Kreis</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 overflow-x-auto">
          <button
            onClick={() => setCurrentTab('impressum')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              currentTab === 'impressum' 
                ? 'border-[#c4a323] text-[#1E2229]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Impressum
          </button>
          <button
            onClick={() => setCurrentTab('erstinformation')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              currentTab === 'erstinformation' 
                ? 'border-[#c4a323] text-[#1E2229]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Erstinformation (§ 15 FinVermV)
          </button>
          <button
            onClick={() => setCurrentTab('datenschutz')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              currentTab === 'datenschutz' 
                ? 'border-[#c4a323] text-[#1E2229]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Datenschutz (DSGVO)
          </button>
          <button
            onClick={() => setCurrentTab('agb')}
            className={`py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              currentTab === 'agb' 
                ? 'border-[#c4a323] text-[#1E2229]' 
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            AGB
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-140px)] text-gray-800 text-sm leading-relaxed">
          
          {/* TAB 1: IMPRESSUM */}
          {currentTab === 'impressum' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Angaben gemäß § 5 DDG (ehem. TMG)</h3>
                <p className="font-bold text-[#1E2229] text-base">Rhein-Finanz</p>
                <p className="text-gray-700">Inhaber: Hamo Hussein (Bankkaufmann)</p>
                <p className="text-gray-700">Kastanienweg 1</p>
                <p className="text-gray-700">53340 Meckenheim</p>
                <p className="text-gray-700">Deutschland</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Kontakt</h3>
                <p className="text-gray-700">Telefon: <a href="tel:+4917666996614" className="text-[#c4a323] font-semibold hover:underline">0176 66996614</a></p>
                <p className="text-gray-700">E-Mail: <a href="mailto:info@rhein-finanz.de" className="text-[#c4a323] font-semibold hover:underline">info@rhein-finanz.de</a></p>
                <p className="text-gray-700">Internet: <a href="https://www.rhein-finanz.de" className="text-[#c4a323] font-semibold hover:underline">www.rhein-finanz.de</a></p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Tätigkeitsart und Gewerbezulassung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Immobiliardarlehensvermittler nach <strong>§ 34i Abs. 1 Gewerbeordnung (GewO)</strong>.<br />
                  Darlehensvermittler nach <strong>§ 34c Abs. 1 Satz 1 Nr. 2 GewO</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Zuständige Erlaubnis- & Aufsichtsbehörde</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Zuständig für die Gewerbeerlaubnis nach § 34i und § 34c GewO:<br />
                  <strong>Industrie- und Handelskammer Bonn/Rhein-Sieg</strong><br />
                  Bonner Talweg 17, 53113 Bonn<br />
                  Telefon: 0228 2284-0 | Web: <a href="https://www.ihk-bonn.de" target="_blank" rel="noopener noreferrer" className="text-[#c4a323] hover:underline">www.ihk-bonn.de</a>
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Steuerangaben</h3>
                <p className="text-xs text-gray-700">
                  <strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.) gemäß § 27 a UStG:</strong> DE355603605<br />
                  <strong>Steuernummer:</strong> 01/074/32190
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Berufsbezeichnung: Immobiliardarlehensvermittler nach § 34i Abs. 1 GewO; Bundesrepublik Deutschland.<br />
                  Berufsrechtliche Regelungen:<br />
                  - § 34i Gewerbeordnung (GewO)<br />
                  - Verordnung über die Immobiliardarlehensvermittlung (ImmVermV)<br />
                  - §§ 655a-655e Bürgerliches Gesetzbuch (BGB)<br />
                  Einsehbar unter: <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="text-[#c4a323] hover:underline">www.gesetze-im-internet.de</a>
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Vermögensschaden-Haftpflichtversicherung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Es besteht eine gesetzeskonforme Berufshaftpflichtversicherung für das Vermittlergewerbe nach § 34i GewO mit europaweiter Deckung bei einem in Deutschland zugelassenen Versicherungsunternehmen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Streitschlichtung und Verbraucherstreitbeilegung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#c4a323] hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>.<br />
                  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ERSTINFORMATION */}
          {currentTab === 'erstinformation' && (
            <div className="space-y-6">
              <div className="bg-[#1E2229] text-white p-4 rounded-xl border border-[#c4a323]/40">
                <h3 className="text-base font-bold text-[#c4a323] mb-1">Gesetzliche Erstinformation nach § 15 FinVermV</h3>
                <p className="text-xs text-gray-300">
                  Transparenz und Kundenschutz beim Erstkontakt zur Vermittlung von Immobiliardarlehen und Finanzierungen.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#1E2229]">1. Angaben zum Unternehmen</h4>
                <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200 text-xs space-y-1">
                  <p><strong>Firma:</strong> Rhein-Finanz</p>
                  <p><strong>Inhaber & Berater:</strong> Hamo Hussein (Bankkaufmann)</p>
                  <p><strong>Anschrift:</strong> Kastanienweg 1, 53340 Meckenheim</p>
                  <p><strong>Telefon:</strong> 0176 66996614</p>
                  <p><strong>E-Mail:</strong> info@rhein-finanz.de</p>
                  <p><strong>Web:</strong> www.rhein-finanz.de</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-[#1E2229]">2. Status des Vermittlers & Registrierung</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Hamo Hussein (Rhein-Finanz) ist tätig als <strong>ungebundener, freier Immobiliardarlehensvermittler nach § 34i Abs. 1 Satz 1 GewO</strong> (Erlaubnis erteilt durch die zuständige IHK).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-[#1E2229]">3. Markt- und Produktauswahl</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Rhein-Finanz bietet Kunden einen unabhängigen, objektiven Zins- und Konditionsvergleich aus einem Portfolio von über <strong>450 Darlehensgebern und Bankpartnern</strong> bundesweit (Großbanken, Volksbanken, Sparkassen, Bausparkassen und Versicherungen). Es besteht keine gesellschaftsrechtliche Bindung an ein bestimmtes Kreditinstitut.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-[#1E2229]">4. Kosten und Vergütung (Provisionshinweis)</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <strong>Für Sie als Kreditsuchenden ist die Beratung und Angebotserstellung zu 100 % kostenfrei.</strong><br />
                  Im Fall einer erfolgreichen Darlehensvermittlung erhält Rhein-Finanz eine Vermittlungsprovision unmittelbar von dem finanzierenden Kreditinstitut. Die genaue Höhe der Vergütung wird Ihnen vor dem verbindlichen Vertragsabschluss im standardisierten europäischen ESIS-Merkblatt der jeweiligen Bank transparent und vollständig offengelegt.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-[#1E2229]">5. Schlichtungsstellen</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Bei Unstimmigkeiten können folgende außergerichtliche Schlichtungsstellen angerufen werden:<br />
                  - Schlichtungsstelle der Deutschen Bundesbank, Postfach 11 12 32, 60047 Frankfurt am Main<br />
                  - Europäische Online-Streitbeilegung: ec.europa.eu/consumers/odr/
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: DATENSCHUTZ */}
          {currentTab === 'datenschutz' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">1. Datenschutz auf einen Blick</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Der Schutz Ihrer persönlichen Daten bei einer Baufinanzierungs- oder Kreditanfrage hat für Rhein-Finanz oberste Priorität. Wir behandeln Ihre personenbezogenen Daten streng vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">2. Verantwortliche Stelle</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                  <strong>Rhein-Finanz</strong><br />
                  Inhaber: Hamo Hussein<br />
                  Kastanienweg 1, 53340 Meckenheim<br />
                  Telefon: 0176 66996614 | E-Mail: info@rhein-finanz.de
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">3. Erhebung und Verarbeitung personenbezogener Daten</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Wir erheben, verarbeiten und nutzen Ihre Daten (z. B. Name, Anschrift, E-Mail-Adresse, Telefonnummer sowie Vorhabens- und Finanzierungsdaten wie Kaufpreis, Eigenkapital und monatliches Einkommen) ausschließlich zur Bearbeitung Ihrer unverbindlichen Finanzierungsanfrage oder Immobilienbewertung (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO – vorvertragliche Maßnahmen).
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">4. Weitergabe an Partnerbanken & Finanzierungsplattformen</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Zur Ermittlung individueller Konditionen werden Ihre Daten nur nach Ihrer ausdrücklichen Beauftragung und Zustimmung an angebundene Darlehensgeber (wie Banken, Bausparkassen oder Transaktionsplattformen wie z. B. Europace) verschlüsselt übermittelt. Eine anderweitige Weitergabe oder ein Verkauf Ihrer Daten an Dritte findet zu keinem Zeitpunkt statt.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">5. SSL-/TLS-Verschlüsselung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine lückenlose SSL-/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an dem Schloss-Symbol in Ihrer Browserzeile und an „https://“.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">6. Ihre Betroffenenrechte nach DSGVO</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten (Art. 15 DSGVO). Des Weiteren haben Sie ein Recht auf Berichtigung (Art. 16), Sperrung oder Löschung (Art. 17) dieser Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, LDI NRW).
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: AGB */}
          {currentTab === 'agb' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">1. Geltungsbereich und Gegenstand</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Vermittlungs- und Beratungsleistungen von Rhein-Finanz (Inhaber Hamo Hussein, Kastanienweg 1, 53340 Meckenheim) im Bereich der Vermittlung von Immobiliardarlehen, Ratenkrediten und Bausparverträgen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">2. Vertragsschluss und Leistungsumfang</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Der Vermittlungsauftrag kommt durch die Anfrage des Kunden und die Annahme durch Rhein-Finanz zustande. Gegenstand ist die Zusammenstellung geeigneter Finanzierungsangebote auf Basis der vom Kunden zur Verfügung gestellten Angaben und Unterlagen. Rhein-Finanz schuldet die gewissenhafte Beratung und Weiterleitung, nicht jedoch das tatsächliche Zustandekommen des Darlehensvertrages mit dem finanzierenden Institut, da die Kreditentscheidung ausschließlich im Ermessen der jeweiligen Bank liegt.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">3. Mitwirkungspflichten des Kunden</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Der Kunde verpflichtet sich, alle für die Finanzierungsanfrage erforderlichen Unterlagen (z. B. Gehaltsnachweise, Objektunterlagen, Selbstauskünfte) wahrheitsgemäß, vollständig und zeitnah zur Verfügung zu stellen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">4. Vergütung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Die Vermittlungstätigkeit von Rhein-Finanz ist für den Kunden kostenfrei. Die Vergütung erfolgt durch eine Vermittlungsprovision des finanzierenden Kreditinstituts bei erfolgreicher Auszahlung des Darlehens.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">5. Haftung</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Rhein-Finanz haftet für Vorsatz und grobe Fahrlässigkeit unbeschränkt. Bei einfacher Fahrlässigkeit haftet Rhein-Finanz nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den typischerweise vorhersehbaren Schaden.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">6. Schlussbestimmungen</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für Vollkaufleute ist der Sitz des Vermittlers. Sollten einzelne Klauseln dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen hiervon unberührt.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">Stand: 2025 • Rhein-Finanz Meckenheim</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1E2229] text-white text-xs font-bold hover:bg-[#c4a323] hover:text-[#1E2229] transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
