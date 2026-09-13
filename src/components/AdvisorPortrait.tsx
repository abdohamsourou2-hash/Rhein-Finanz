import { useState, useEffect, useRef, SyntheticEvent, ChangeEvent } from 'react';
import { Camera, RefreshCw, Upload, Check } from 'lucide-react';

interface AdvisorPortraitProps {
  variant: 'hero' | 'about';
  className?: string;
}

export default function AdvisorPortrait({ variant, className = '' }: AdvisorPortraitProps) {
  const [photoUrl, setPhotoUrl] = useState<string>('/Facetune_06-04-2025-20-55-02-2.jpg');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photo from localStorage or fallback to static public asset
  useEffect(() => {
    const stored = localStorage.getItem('rf_hamo_photo');
    if (stored) {
      setPhotoUrl(stored);
    } else {
      setPhotoUrl('/Facetune_06-04-2025-20-55-02-2.jpg');
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if image
    if (!file.type.startsWith('image/')) {
      alert('Bitte wählen Sie eine gültige Bilddatei (JPG, PNG, WebP) aus.');
      return;
    }

    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const dataUrl = readerEvent.target?.result as string;
      if (dataUrl) {
        // Compress / resize via canvas if necessary so it fits safely in localStorage
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxDim = 800;
          let width = img.width;
          let height = img.height;

          if (width > height && width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const optimizedUrl = canvas.toDataURL('image/jpeg', 0.88);
            
            try {
              localStorage.setItem('rf_hamo_photo', optimizedUrl);
            } catch (err) {
              console.warn('localStorage full, using memory state only', err);
            }
            
            setPhotoUrl(optimizedUrl);
            // Trigger storage event so other components update synchronously
            window.dispatchEvent(new Event('storage'));
          } else {
            try {
              localStorage.setItem('rf_hamo_photo', dataUrl);
            } catch (err) {
              console.warn('Storage failed', err);
            }
            setPhotoUrl(dataUrl);
          }

          setIsUploading(false);
          setShowSuccessToast(true);
          setTimeout(() => setShowSuccessToast(false), 3500);
        };
        img.src = dataUrl;
      }
    };
    reader.readAsDataURL(file);
  };

  // Reset to default photo
  const handleResetPhoto = () => {
    localStorage.removeItem('rf_hamo_photo');
    setPhotoUrl('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80');
    window.dispatchEvent(new Event('storage'));
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (!target.dataset.attempt) {
      target.dataset.attempt = '1';
      target.src = '/hamo-hussein.jpg';
    } else if (target.dataset.attempt === '1') {
      target.dataset.attempt = '2';
      target.src = '/profil.jpg';
    } else if (!target.dataset.fallback) {
      target.dataset.fallback = 'true';
      target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
    }
  };

  // Listen for storage updates across tabs or same page components
  useEffect(() => {
    const handleStorageUpdate = () => {
      const stored = localStorage.getItem('rf_hamo_photo');
      if (stored) {
        setPhotoUrl(stored);
      }
    };
    window.addEventListener('storage', handleStorageUpdate);
    return () => window.removeEventListener('storage', handleStorageUpdate);
  }, []);

  if (variant === 'hero') {
    return (
      <div className={`relative ${className}`}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          id="hero-photo-upload-input"
        />
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#c4a323] shrink-0 bg-gray-100 shadow-xs cursor-pointer group"
          title="Klicken, um Ihr eigenes Foto hochzuladen"
        >
          <img
            src={photoUrl}
            alt="Hamo Hussein – Bankkaufmann & Inhaber Rhein-Finanz Meckenheim"
            className="w-full h-full object-cover object-top group-hover:opacity-75 transition-opacity"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
          {/* Subtle camera icon on hover */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="w-4 h-4 text-white drop-shadow-xs" />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" title="Direkt erreichbar" />
        </div>
      </div>
    );
  }

  // Variant === 'about'
  return (
    <div className={`relative w-full max-w-[290px] flex flex-col items-center ${className}`}>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        id="about-photo-upload-input"
      />

      <div 
        onClick={() => fileInputRef.current?.click()}
        className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-lg border-2 border-[#c4a323]/50 group bg-gray-200 cursor-pointer"
        title="Klicken, um Foto hochzuladen"
      >
        <img
          src={photoUrl}
          alt="Hamo Hussein – Bankkaufmann, Inhaber & Kreditentscheider Rhein-Finanz Meckenheim"
          className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />

        {/* Hover overlay with upload prompt */}
        <div className="absolute inset-0 bg-[#1E2229]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-xs">
          <Upload className="w-8 h-8 text-[#c4a323] mb-2 animate-bounce" />
          <span className="text-sm font-bold text-white">Eigenes Foto hochladen</span>
          <span className="text-xs text-gray-200 mt-1">Klicken & Bild von Ihrem Mac auswählen</span>
        </div>

        {/* Floating micro-badge */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#1E2229]/95 backdrop-blur-xs text-white p-2.5 rounded-lg border border-[#c4a323]/40 text-center pointer-events-none">
          <span className="block text-sm font-black text-white">Hamo Hussein</span>
          <span className="block text-xs font-bold text-[#c4a323]">Bankkaufmann & Inhaber</span>
          <span className="block text-[10px] text-gray-300">Rhein-Finanz Meckenheim • Direkter Kreditentscheider</span>
        </div>
      </div>

      {/* Prominent Upload Action Bar directly below the photo */}
      <div className="w-full mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="grow inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#c4a323] hover:bg-[#b3921b] text-[#1E2229] transition-all shadow-xs active:scale-98 cursor-pointer"
        >
          {isUploading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Wird geladen...</span>
            </>
          ) : (
            <>
              <Camera className="w-3.5 h-3.5" />
              <span>Foto ändern / hochladen</span>
            </>
          )}
        </button>

        {localStorage.getItem('rf_hamo_photo') && (
          <button
            type="button"
            onClick={handleResetPhoto}
            title="Auf Standardfoto zurücksetzen"
            className="p-2 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-600 text-xs transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Success Toast Notification */}
      {showSuccessToast && (
        <div className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold animate-fade-in">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Foto erfolgreich aktualisiert!</span>
        </div>
      )}
    </div>
  );
}
