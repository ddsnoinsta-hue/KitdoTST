import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 }; // Reset loop for continuous urgency
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* SST Safety Color Stripe: Safety Green & High-Vis Hazard Amber */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-700 via-amber-400 to-emerald-800" />
      <div className="bg-slate-950 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-inner flex items-center justify-center gap-2 border-b border-slate-800">
        <Zap className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
        <span>
          <strong className="text-amber-400 uppercase tracking-wide">OFERTA SST:</strong> Acesso via Google Drive ao Acervo 2.5 GB por R$ 35,00
        </span>
        <span className="hidden md:inline-flex items-center gap-1 bg-slate-900 px-2.5 py-0.5 rounded-full text-emerald-400 border border-emerald-700/60 font-mono text-xs ml-2">
          <Clock className="w-3 h-3 text-emerald-400" />
          Expira em: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};
