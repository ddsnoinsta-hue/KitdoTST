import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock, CheckCircle2, Star } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Safety Green Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700" />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 border border-emerald-700/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Última Chance • Oferta Por Tempo Limitado</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Pare de perder tempo criando documentos e apresentações do zero.
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal">
          Tenha acesso vitalício ao acervo completo de Segurança do Trabalho (2.5 GB + 5 Super Bônus) por apenas{' '}
          <strong className="text-amber-400 font-black text-2xl sm:text-3xl underline decoration-emerald-500">
            R$ 35,00
          </strong>.
        </p>

        {/* Reassurance Checkpoints */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium pt-2">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> Pagamento Único
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> Acesso Imediato no E-mail
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> 7 Dias de Garantia
          </span>
        </div>

        <div className="pt-4">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[320px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-emerald-500/40 transition-all duration-300 animate-pulse-glow flex items-center justify-center gap-3 cursor-pointer mx-auto border-2 border-white/80"
          >
            <span>QUERO ACESSAR O DRIVE AGORA</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 font-medium">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span>Compra 100% Segura e Criptografada processada pela Hotmart</span>
        </div>

      </div>
    </section>
  );
};
