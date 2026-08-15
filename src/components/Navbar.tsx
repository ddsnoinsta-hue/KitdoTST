import React from 'react';
import { ShieldCheck, Instagram, Settings, Lock } from 'lucide-react';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface NavbarProps {
  onCtaClick: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick, onOpenConfig }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-[33px] sm:top-[37px] z-40 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-white p-0.5 border border-slate-200 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
            <DdsOfficialLogo className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">KIT do TST</span>
              <span className="bg-emerald-700 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-800 flex items-center gap-1 shadow-xs">
                <ShieldCheck className="w-3 h-3 text-amber-300" />
                @ddsnoinsta
              </span>
            </div>
            <a 
              href="https://instagram.com/ddsnoinsta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-gray-500 hover:text-emerald-600 flex items-center gap-1 transition-colors font-medium"
            >
              <Instagram className="w-3 h-3 text-pink-600" />
              @ddsnoinsta
            </a>
          </div>
        </div>

        {/* Right CTA / Settings */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold">Checkout 100% Seguro</span>
          </div>

          <button
            onClick={onOpenConfig}
            title="Configurar Link de Checkout"
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={onCtaClick}
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/25 hover:shadow-lg transition-all duration-200 text-xs sm:text-sm flex items-center gap-2 cursor-pointer active:scale-95 border border-emerald-500/30"
          >
            <span>Acessar Drive</span>
            <span className="bg-emerald-950/40 text-amber-300 text-[11px] px-1.5 py-0.5 rounded font-mono font-black border border-emerald-400/30">
              R$ 35
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
