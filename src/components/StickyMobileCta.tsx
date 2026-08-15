import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onCtaClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 180px
      if (window.scrollY > 180) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-emerald-500/40 shadow-2xl lg:hidden transition-all animate-in slide-in-from-bottom duration-300">
      {/* SST Safety Color Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700" />
      <div className="p-3 max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left">
          <div className="flex items-center gap-1 text-[10px] font-black text-amber-400 uppercase tracking-tight">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400 animate-pulse" />
            <span>2.5 GB + 5 Super Bônus</span>
          </div>
          <div className="text-lg font-black text-white leading-none">
            R$ 35,00 <span className="text-[10px] text-emerald-400 font-bold">vitalício</span>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform border border-emerald-300"
        >
          <span>QUERO O DRIVE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
