import React from 'react';
import { Instagram, ShieldCheck, Heart, Lock, Settings } from 'lucide-react';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface FooterProps {
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfig }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm relative">
      {/* SST Safety Color Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-700 via-amber-400 to-emerald-800" />
      
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/80">
          
          {/* Brand & Instagram */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-gray-700 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
              <DdsOfficialLogo className="w-12 h-12" />
            </div>
            <div>
              <div className="font-extrabold text-white text-base">
                KIT do TST @ddsnoinsta - Acervo SST
              </div>
              <a
                href="https://instagram.com/ddsnoinsta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5 mt-0.5"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                Página oficial do Instagram: @ddsnoinsta
              </a>
            </div>
          </div>

          {/* Quick Security Badge */}
          <div className="flex items-center gap-3 text-xs text-gray-400 bg-gray-900 px-4 py-2 rounded-xl border border-gray-800">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Pagamento Seguro via Hotmart</span>
          </div>

        </div>

        {/* Bottom Rights & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <div>
            © {new Date().getFullYear()} @ddsnoinsta. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfig}
              className="hover:text-gray-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configurar Link de Checkout</span>
            </button>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Políticas de Privacidade</span>
          </div>
        </div>

        <div className="text-center text-[11px] text-gray-600 font-mono">
          Material educativo e de apoio para profissionais de Segurança do Trabalho e Saúde Ocupacional.
        </div>

      </div>
    </footer>
  );
};
