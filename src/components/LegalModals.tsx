import { useEffect } from 'react';
import { X, Shield, FileText, AlertCircle, Scale, Info, CheckCircle2 } from 'lucide-react';
import { ActiveModal } from '../types';

interface LegalModalsProps {
  activeModal: ActiveModal;
  onClose: () => void;
  onSwitchModal?: (modal: ActiveModal) => void;
}

export default function LegalModals({ activeModal, onClose, onSwitchModal }: LegalModalsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const getTitle = () => {
    switch (activeModal) {
      case 'impressum':
        return 'Impressum';
      case 'datenschutz':
        return 'Datenschutzerklärung';
      case 'erstinformation':
        return 'Erstinformation & Statusangaben';
      case 'agb':
        return 'AGB & Widerrufsbelehrung';
      default:
        return 'Rechtliche Informationen';
    }
  };

  const getIcon = () => {
    switch (activeModal) {
      case 'impressum':
        return <FileText className="w-5 h-5 text-[#c4a323]" />;
      case 'datenschutz':
        return <Shield className="w-5 h-5 text-[#c4a323]" />;
      case 'erstinformation':
        return <Info className="w-5 h-5 text-[#c4a323]" />;
      case 'agb':
        return <Scale className="w-5 h-5 text-[#c4a323]" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#1E2229]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-col bg-[#1E2229] text-white border-b border-[#c4a323]/30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              {getIcon()}
              <div>
                <span className="text-[11px] font-bold text-[#c4a323] tracking-widest uppercase block">
                  Rhein-Finanz Rechtliche Hinweise
                </span>
                <h2 id="modal-title" className="text-lg sm:text-xl font-black tracking-tight text-white">
                  {getTitle()}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Nav Tabs */}
          {onSwitchModal && (
            <div className="flex items-center px-6 overflow-x-auto gap-2 py-2 bg-black/30 border-t border-white/10 text-xs scrollbar-none">
              <button
                type="button"
                onClick={() => onSwitchModal('impressum')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeModal === 'impressum' ? 'bg-[#c4a323] text-[#1E2229]' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Impressum
              </button>
              <button
                type="button"
                onClick={() => onSwitchModal('datenschutz')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeModal === 'datenschutz' ? 'bg-[#c4a323] text-[#1E2229]' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Datenschutz (DSGVO)
              </button>
              <button
                type="button"
                onClick={() => onSwitchModal('erstinformation')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeModal === 'erstinformation' ? 'bg-[#c4a323] text-[#1E2229]' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Erstinformation (§ 34i / § 34c)
              </button>
              <button
                type="button"
                onClick={() => onSwitchModal('agb')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeModal === 'agb' ? 'bg-[#c4a323] text-[#1E2229]' : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                AGB & Widerrufsbelehrung
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed max-h-[calc(90vh-140px)]">
          
          {/* 1. IMPRESSUM */}
          {activeModal === 'impressum' && (
            <div className="space-y-6">
              
              <div className="p-3.5 rounded-xl bg-blue-50/90 border border-blue-200 text-blue-900 text-xs flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">Hinweis zu Register- und Steuerdaten:</strong>
                  Die amtliche Registrierungsnummer für das Vermittlerregister (§ 34i GewO) sowie die steuerliche Identifikationsnummer befinden sich aktuell im Zuteilungsverfahren bei der IHK bzw. dem Finanzamt und werden nach amtlicher Erteilung unverzüglich hier ergänzt.
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Angaben gemäß § 5 DDG (ehem. TMG)</h3>
                <p className="font-bold text-[#1E2229] text-base">Rhein-Finanz</p>
                <p className="text-gray-600">Slogan: Ihr Finanzpartner</p>
                <p>Hauptstraße 68</p>
                <p>53340 Meckenheim</p>
                <p>Deutschland</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Inhaber & Verantwortlicher</h3>
                <p className="font-bold text-[#1E2229]">Hamo Hussein</p>
                <p className="text-xs text-gray-600">Bankkaufmann, Immobilienmakler & freier Finanzierungsberater</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Kontakt</h3>
                <p><strong>Telefon Festnetz:</strong> 02225 8305776</p>
                <p><strong>Mobil & WhatsApp:</strong> 0177 5169324</p>
                <p><strong>E-Mail:</strong> <a href="mailto:info@rhein-finanz.de" className="text-[#c4a323] hover:underline font-medium">info@rhein-finanz.de</a></p>
                <p><strong>Website:</strong> <a href="https://www.rhein-finanz.de" className="text-[#c4a323] hover:underline">www.rhein-finanz.de</a></p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">Gewerbeerlaubnisse & Aufsichtsbehörden</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 text-xs">
                  <div>
                    <strong className="block font-semibold text-[#1E2229]">1. Immobiliardarlehensvermittler nach § 34i Abs. 1 GewO:</strong>
                    Erlaubnis zur Vermittlung von Immobiliardarlehensverträgen.<br />
                    Registrierungsnummer im Vermittlerregister: <span className="bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-900 font-semibold inline-block my-0.5">Wird nachgereicht (Eintragung/Zuteilung aktuell in Bearbeitung)</span><br />
                    Zuständige Erlaubnis- und Aufsichtsbehörde: Industrie- und Handelskammer Bonn/Rhein-Sieg, Bonner Talweg 17, 53113 Bonn (<a href="https://www.ihk-bonn.de" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.ihk-bonn.de</a>).
                  </div>

                  <div>
                    <strong className="block font-semibold text-[#1E2229]">2. Erlaubnis als Immobilienmakler & Darlehensvermittler nach § 34c Abs. 1 Satz 1 GewO:</strong>
                    Erlaubnis zur Vermittlung des Abschlusses und Nachweis der Gelegenheit zum Abschluss von Verträgen über Grundstücke, grundstücksgleiche Rechte, Wohnräume, gewerbliche Räume sowie Darlehen.<br />
                    Zuständige Aufsichtsbehörde: Kreisverwaltung Rhein-Sieg-Kreis (Ordnungsamt) bzw. Stadt Meckenheim / IHK Bonn/Rhein-Sieg.
                  </div>

                  <div>
                    <strong className="block font-semibold text-[#1E2229]">3. Gemeinsame Registerstelle gemäß § 11a Abs. 1 GewO:</strong>
                    Deutscher Industrie- und Handelskammertag (DIHK) e.V., Breite Straße 29, 10178 Berlin<br />
                    Telefon: 0180 600 58 50 (Festnetzpreis 0,20 €/Anruf; Mobilfunkpreise maximal 0,60 €/Anruf)<br />
                    Registerabrufbar unter: <a href="https://www.vermittlerregister.info" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.vermittlerregister.info</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Berufsbezeichnung & berufsrechtliche Regelungen</h3>
                <p className="text-xs">
                  <strong>Berufsbezeichnung:</strong> Bankkaufmann (verliehen in der Bundesrepublik Deutschland), Immobilienmakler gem. § 34c GewO, Immobiliardarlehensvermittler gem. § 34i GewO.<br />
                  <strong>Berufsrechtliche Regelungen:</strong> § 34c Gewerbeordnung (GewO), Makler- und Bauträgerverordnung (MaBV), § 34i Gewerbeordnung (GewO), Immobiliardarlehensvermittlungsverordnung (ImmVersVermV), §§ 652 ff. Bürgerliches Gesetzbuch (BGB). Die Regelungen können unter <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.gesetze-im-internet.de</a> eingesehen werden.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Vermögensschaden-Haftpflichtversicherung</h3>
                <p className="text-xs">
                  Es besteht eine gesetzeskonforme Berufshaftpflicht- bzw. Vermögensschadenhaftpflichtversicherung für die Vermittlung von Immobiliardarlehen und Immobilien gem. § 34i Abs. 2 Nr. 3 GewO bei einem in der Bundesrepublik Deutschland zugelassenen Versicherungsunternehmen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">Umsatzsteuer-Identifikationsnummer</h3>
                <p className="text-xs text-gray-700">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <span className="bg-gray-100 border border-gray-200 px-2 py-0.5 rounded text-gray-800 font-semibold inline-block my-0.5">Wird nachgereicht (Zuteilung beim Finanzamt beantragt)</span>
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">EU-Streitschlichtung & Verbraucherstreitbeilegung</h3>
                <p className="text-xs text-gray-600">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>.<br />
                  Unsere E-Mail-Adresse lautet: <a href="mailto:info@rhein-finanz.de" className="text-[#c4a323] hover:underline">info@rhein-finanz.de</a>.<br />
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nehmen hieran grundsätzlich nicht teil.
                </p>
              </div>

            </div>
          )}

          {/* 2. DATENSCHUTZERKLÄRUNG */}
          {activeModal === 'datenschutz' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">DSGVO-Konform & Keine Tracking-Cookies:</strong>
                  Diese Website verwendet keine Tracking-Cookies von Drittanbietern (kein Google Analytics, kein Meta Pixel) und bindet Schriften lokal ein. Daher ist kein störendes Cookie-Banner erforderlich.
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">1. Datenschutz auf einen Blick</h3>
                <p className="text-xs">
                  Der Schutz Ihrer persönlichen Daten ist für uns oberste Priorität. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (Datenschutz-Grundverordnung DSGVO, Bundesdatenschutzgesetz BDSG) sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">2. Verantwortliche Stelle</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-1">
                  <p className="font-bold text-[#1E2229] text-sm">Rhein-Finanz</p>
                  <p>Inhaber: Hamo Hussein</p>
                  <p>Hauptstraße 68, 53340 Meckenheim</p>
                  <p>Telefon: 02225 8305776 | Mobil: 0177 5169324</p>
                  <p>E-Mail: info@rhein-finanz.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">3. Datenerfassung auf dieser Website</h3>
                <div className="space-y-3 text-xs">
                  
                  <div className="border border-gray-200 p-3.5 rounded-xl bg-white">
                    <h4 className="font-bold text-[#1E2229] mb-1">a) Bereitstellung der Website & Server-Log-Dateien</h4>
                    <p>
                      Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Informationen (sog. Server-Logfiles): Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und anonymisierte IP-Adresse.
                    </p>
                    <p className="text-gray-500 mt-1">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und fehlerfreien Bereitstellung der Website).
                    </p>
                  </div>

                  <div className="border border-gray-200 p-3.5 rounded-xl bg-white">
                    <h4 className="font-bold text-[#1E2229] mb-1">b) Kontaktformulare, Baufinanzierungsrechner & Wertermittlung</h4>
                    <p>
                      Wenn Sie uns über unsere interaktiven Formulare (z.B. Baufinanzierungsanfrage, Konditionsprüfung oder Immobilien-Wertermittlung) Daten übermitteln (Name, Telefonnummer, E-Mail-Adresse, Objektdaten, Darlehenssummen), werden diese zwecks Bearbeitung Ihrer Anfrage und zur Erstellung maßgeschneiderter Angebote verarbeitet.
                    </p>
                    <p className="text-gray-500 mt-1">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                    </p>
                  </div>

                  <div className="border border-gray-200 p-3.5 rounded-xl bg-white">
                    <h4 className="font-bold text-[#1E2229] mb-1">c) Kommunikation via WhatsApp</h4>
                    <p>
                      Wenn Sie über den bereitgestellten WhatsApp-Button Kontakt mit uns aufnehmen, erfolgt die Datenübertragung verschlüsselt über die Dienste von WhatsApp Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland). Die Nutzung von WhatsApp ist freiwillig; alternativ stehen Ihnen Telefon und E-Mail zur Verfügung.
                    </p>
                    <p className="text-gray-500 mt-1">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a und lit. b DSGVO.
                    </p>
                  </div>

                  <div className="border border-gray-200 p-3.5 rounded-xl bg-white">
                    <h4 className="font-bold text-[#1E2229] mb-1">d) SSL- bzw. TLS-Verschlüsselung</h4>
                    <p>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine moderne SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">4. Weitergabe an Dritte & Bankpartner</h3>
                <p className="text-xs">
                  Ihre vertraulichen Finanz- und Personendaten werden niemals ohne Ihre ausdrückliche Ermächtigung an Dritte verkauft oder unbefugt weitergegeben. Zur Einholung konkreter Konditionen bei Kreditinstituten oder Plattformen (z.B. Europace/Interhyp/Baufi-Partnern) erfolgt eine Weitergabe ausschließlich im Rahmen des konkreten Vermittlungsauftrags nach gesonderter Absprache.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">5. Speicherdauer</h3>
                <p className="text-xs">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erfüllung der jeweiligen Zwecke erforderlich ist oder wie es die gesetzlichen Aufbewahrungsfristen (z.B. handels- und steuerrechtliche Aufbewahrungspflichten nach HGB und AO von bis zu 10 Jahren) vorschreiben.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">6. Ihre gesetzlichen Rechte als betroffene Person</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <strong>Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht auf unverzügliche Berichtigung unrichtiger Daten.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten Daten fordern.
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <strong>Widerspruch & Widerruf:</strong> Sie können erteilte Einwilligungen jederzeit formlos widerrufen (Art. 7 Abs. 3 DSGVO).
                  </div>
                </div>
                <p className="text-xs mt-3 text-gray-600">
                  <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong><br />
                  Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf, <a href="https://www.ldi.nrw.de" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.ldi.nrw.de</a>.
                </p>
              </div>

            </div>
          )}

          {/* 3. ERSTINFORMATION / STATUSANGABEN */}
          {activeModal === 'erstinformation' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-1">Gesetzliche Kunden-Erstinformation:</strong>
                  Informationen für den Verbraucher beim ersten geschäftlichen Kontakt gemäß § 11 Finanzanlagenvermittlungsverordnung (FinVermV) sowie §§ 12, 13 Immobiliardarlehensvermittlungsverordnung (ImmVersVermV).
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-1">1. Angaben zum Vermittler & Tätigkeitsstatus</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-2">
                  <p><strong>Name des Unternehmens:</strong> Rhein-Finanz</p>
                  <p><strong>Inhaber:</strong> Hamo Hussein (Bankkaufmann)</p>
                  <p><strong>Anschrift:</strong> Hauptstraße 68, 53340 Meckenheim</p>
                  <p><strong>Telefon:</strong> 02225 8305776 | Mobil: 0177 5169324</p>
                  <p><strong>E-Mail:</strong> info@rhein-finanz.de | <strong>Web:</strong> www.rhein-finanz.de</p>
                  <p className="pt-2 border-t border-gray-200">
                    <strong>Status:</strong> Freier und ungebundener <strong>Immobiliardarlehensvermittler nach § 34i Abs. 1 GewO</strong> sowie <strong>Immobilienmakler & Darlehensvermittler nach § 34c GewO</strong>.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">2. Registereintragung & Prüfung</h3>
                <p className="text-xs leading-relaxed">
                  Eingetragen im Vermittlerregister gemäß § 11a Abs. 1 Gewerbeordnung.<br />
                  <strong>Registrierungsnummer:</strong> <span className="bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-900 font-semibold inline-block my-0.5">Wird nachgereicht (Eintragung/Zuteilung aktuell in Bearbeitung bei der IHK)</span><br />
                  <strong>Zuständige IHK:</strong> Industrie- und Handelskammer Bonn/Rhein-Sieg, Bonner Talweg 17, 53113 Bonn.<br />
                  Das Register wird geführt beim Deutschen Industrie- und Handelskammertag (DIHK) e.V., Breite Straße 29, 10178 Berlin, Telefon: 0180 600 58 50, abrufbar unter: <a href="https://www.vermittlerregister.info" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.vermittlerregister.info</a>.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">3. Art und Umfang der Marktuntersuchung & Vergütung</h3>
                <div className="space-y-2 text-xs">
                  <p>
                    <strong>Baufinanzierung & Darlehensvermittlung:</strong> Rhein-Finanz greift auf ein breites Spektrum von über 400 Kreditinstituten, Banken, Bausparkassen und Versicherungsgesellschaften bundesweit zurück, um für den Kunden maßgeschneiderte und zinsoptimierte Finanzierungslösungen auszuarbeiten.
                  </p>
                  <p>
                    <strong>Vergütungsgrundsatz:</strong> Die Beratung und Konditionsprüfung für die Vermittlung von Baufinanzierungen und Darlehen ist für Sie als Kreditsuchenden <strong>völlig kostenfrei</strong>. Im Erfolgsfall – das heißt bei Zustandekommen des Darlehensvertrags – erhält Rhein-Finanz eine gesetzlich geregelte Vermittlungsprovision unmittelbar von dem finanzierenden Kreditinstitut. Für Sie fallen keinerlei Vorkosten oder versteckte Beratungsgebühren an.
                  </p>
                  <p>
                    <strong>Immobilienvermittlung:</strong> Bei Kauf oder Verkauf von Immobilien richtet sich die Maklerprovision nach den gesetzlichen Vorschriften (§ 656a-d BGB) sowie den individuellen Vereinbarungen im Maklervertrag.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">4. Beteiligungen</h3>
                <p className="text-xs text-gray-600">
                  Rhein-Finanz hält keine direkten oder indirekten Beteiligungen von mehr als 10% an den Stimmrechten oder dem Kapital eines Kreditinstituts oder Versicherungsunternehmens. Umgekehrt hält kein Kreditinstitut oder Versicherungsunternehmen Anteile an Rhein-Finanz. Wir agieren bankenunabhängig.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">5. Schlichtungsstellen / Streitbeilegung</h3>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-1.5">
                  <p><strong>Schlichtungsstelle der Bundesbank / BaFin:</strong></p>
                  <p>Schlichtungsstelle bei der Deutschen Bundesbank, Postfach 10 06 02, 60006 Frankfurt am Main, <a href="https://www.bundesbank.de" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.bundesbank.de</a></p>
                  <p><strong>Schlichtungsstelle für Immobilien (Ombudsmann Immobilien IVD):</strong></p>
                  <p>Ombudsmann Immobilien IVD/VPB - Grunderwerb und -verwaltung, Littenstraße 10, 10179 Berlin, <a href="https://www.ombudsmann-immobilien.de" target="_blank" rel="noreferrer" className="text-[#c4a323] hover:underline">www.ombudsmann-immobilien.de</a></p>
                </div>
              </div>

            </div>
          )}

          {/* 4. AGB & WIDERRUFSBELEHRUNG */}
          {activeModal === 'agb' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 text-xs flex items-start gap-3">
                <Scale className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-1">Allgemeine Vermittlungsbedingungen & Kundeninformationen:</strong>
                  Transparente Spielregeln für die unverbindliche Online-Konditionsprüfung, Beratungs- und Maklerverträge sowie gesetzliche Widerrufsbelehrung für Verbraucher.
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">1. Geltungsbereich & Leistungsgegenstand</h3>
                <p className="text-xs">
                  Diese Geschäfts- und Vermittlungsbedingungen gelten für alle über die Website <strong className="text-[#1E2229]">www.rhein-finanz.de</strong> initiierten Beratungsanfragen, Konditionsprüfungen und Vermittlungen von Immobiliardarlehen, Ratenkrediten und Immobilien. Rhein-Finanz erbringt Vermittlungs- und Beratungsleistungen ungebunden und bankenunabhängig.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">2. Unverbindlichkeit der Online-Rechner</h3>
                <p className="text-xs">
                  Die auf der Website integrierten Berechnungstools (z.B. Baufinanzierungsrechner, Ratenkalkulator, Orientierungs-Wertermittlung) dienen ausschließlich als erste unverbindliche Modellrechnung und stellen kein verbindliches Darlehens- oder Kaufangebot dar. Ein verbindliches Kreditangebot setzt immer die Einreichung und bankseitige Prüfung individueller Bonitäts- und Objektunterlagen voraus.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">3. Kosten & Vergütung</h3>
                <div className="space-y-2 text-xs">
                  <p>
                    <strong>Finanzierungsvermittlung:</strong> Die Beratung, Zinsberechnung und Vermittlung von Darlehen ist für den Darlehensnehmer kostenfrei. Rhein-Finanz erhält im Erfolgsfall eine marktübliche Vermittlungsprovision von dem vermittelten Kreditinstitut.
                  </p>
                  <p>
                    <strong>Maklerdienstleistungen (Kauf/Verkauf von Immobilien):</strong> Bei Abschluss eines notariellen Kaufvertrags entsteht der Provisionsanspruch des Maklers gemäß den vertraglichen Vereinbarungen und den gesetzlichen Vorschriften der §§ 656a bis 656d BGB (Halbteilungsgrundsatz bei Wohnimmobilien für Verbraucher).
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">4. Mitwirkungspflichten des Kunden</h3>
                <p className="text-xs">
                  Der Kunde verpflichtet sich, alle für die Finanzierungsprüfung und Immobilienvermittlung erforderlichen Angaben (z.B. Einkommen, Verbindlichkeiten, Eigenkapital, Objektdaten) wahrheitsgemäß, vollständig und aktuell zur Verfügung zu stellen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1E2229] mb-2">5. Haftung</h3>
                <p className="text-xs">
                  Rhein-Finanz haftet für Vorsatz und grobe Fahrlässigkeit nach den gesetzlichen Bestimmungen. Für die Richtigkeit der von Banken, Eigentümern oder Dritten übermittelten Konditionen, Exposé-Daten und Berechnungen übernimmt Rhein-Finanz keine Gewähr, es sei denn, Unrichtigkeiten wurden grob fahrlässig oder vorsätzlich nicht erkannt.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <h3 className="text-base font-bold text-[#1E2229] mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#c4a323]" />
                  <span>6. Gesetzliche Widerrufsbelehrung für Verbraucher</span>
                </h3>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-3">
                  <div>
                    <strong className="block text-[#1E2229] mb-1">Widerrufsrecht:</strong>
                    Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag (Beratungs- oder Vermittlungsauftrag) zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                  </div>

                  <div>
                    <strong className="block text-[#1E2229] mb-1">Ausübung des Widerrufs:</strong>
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Rhein-Finanz, Inh. Hamo Hussein, Hauptstraße 68, 53340 Meckenheim, Tel: 02225 8305776, E-Mail: info@rhein-finanz.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                  </div>

                  <div>
                    <strong className="block text-[#1E2229] mb-1">Folgen des Widerrufs:</strong>
                    Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir gegebenenfalls von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                  </div>

                  <div>
                    <strong className="block text-[#1E2229] mb-1">Vorzeitiges Erlöschen des Widerrufsrechts:</strong>
                    Ihr Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Stand: 2026 • Rhein-Finanz Meckenheim
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1E2229] text-white font-bold text-sm hover:bg-black transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
