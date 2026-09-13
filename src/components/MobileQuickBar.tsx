import { Phone, MessageSquare, Calculator } from 'lucide-react';

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl p-2.5 px-4">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href="tel:022258305776"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gray-100 active:bg-gray-200 text-[#1E2229] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#c4a323] mb-0.5" />
          <span className="text-[10px] font-bold">Anrufen</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/4922258305776?text=Hallo%20Rhein-Finanz,%20ich%20habe%20eine%20Anfrage%20zu%20einem%20Finanzierungsangebot."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Wertrechner Button */}
        <a
          href="#wertrechner"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#c4a323] active:bg-[#b3921b] text-[#1E2229] transition-colors"
        >
          <Calculator className="w-4 h-4 text-[#1E2229] mb-0.5" />
          <span className="text-[10px] font-black">Wert berechnen</span>
        </a>

      </div>
    </div>
  );
}
