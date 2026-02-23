import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  path: string;
  alt: string;
  title?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificates,
  currentIndex,
  onNavigate,
}: CertificateModalProps) {
  const currentCert = certificates[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < certificates.length - 1;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
        {currentIndex + 1} / {certificates.length}
      </div>

      {/* Previous button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentCert.path}
          alt={currentCert.alt}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          id="modal-title"
        />
        
        {currentCert.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
            <p className="text-white text-center font-medium">
              {currentCert.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
