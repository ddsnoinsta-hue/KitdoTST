import React from 'react';
import { ArrowRight, ShieldCheck, Check, Zap, Lock, CreditCard, QrCode, Sparkles, Clock } from 'lucide-react';

interface OfferProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* SST Safety Glow Background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main Offer Card Container */}
        <div className="bg-slate-900/95 border-2 border-emerald-500/70 p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl space-y-7 backdrop-blur-md relative overflow-hidden">
          
          {/* Top SST Safety Green & Warning Yellow Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700" />

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
            <Clock className="w-4 h-4" />
            <span>OFERTA ESPECIAL COM ACESSO VITALÍCIO</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              GARANTA SEU ACESSO AO DRIVE
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Adquira hoje o acervo completo de 2,5 GB com todos os modelos, DDS, apresentações e os 5 Super Bônus inclusos:
            </p>
          </div>

          {/* Value Stacking Breakdown */}
          <div className="bg-slate-950/90 rounded-2xl p-5 border border-slate-800 text-left text-xs sm:text-sm space-y-2.5 max-w-xl mx-auto">
            <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-800/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Acervo Completo Google Drive (2.5 GB)
              </span>
              <span className="text-slate-400 font-mono">R$ 197,00</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-800/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Vídeos para seus Treinamentos
              </span>
              <span className="text-emerald-400 font-bold uppercase text-xs">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-800/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Slides das NRs em PowerPoint Editáveis
              </span>
              <span className="text-emerald-400 font-bold uppercase text-xs">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-800/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Planilhas Inteligentes de Gestão e EPIs
              </span>
              <span className="text-emerald-400 font-bold uppercase text-xs">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pb-1 border-b border-slate-800/80">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Modelos de APR, Ordens de Serviço e PGR
              </span>
              <span className="text-emerald-400 font-bold uppercase text-xs">Grátis</span>
            </div>
            <div className="flex justify-between items-center text-slate-300 pt-1">
              <span className="flex items-center gap-2 font-bold text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                Atualizações Futuras Vitalícias
              </span>
              <span className="text-emerald-400 font-bold uppercase text-xs">Incluso</span>
            </div>
          </div>

          {/* Giant Price Box */}
          <div className="py-5 px-6 bg-slate-950 rounded-2xl border-2 border-amber-400/80 max-w-md mx-auto space-y-1 shadow-2xl relative">
            <div className="text-xs sm:text-sm text-slate-400 uppercase font-semibold tracking-widest line-through">
              Valor Total: R$ 365,00
            </div>
            <div className="text-4xl sm:text-6xl font-black text-amber-400 tracking-tight">
              R$ 35,00
            </div>
            <div className="text-xs sm:text-sm text-emerald-400 font-black uppercase tracking-wide">
              Pagamento Único • Sem Mensalidade
            </div>
          </div>

          {/* Large Highlight CTA Button */}
          <div className="pt-2 space-y-4">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto min-w-[320px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xl sm:text-2xl px-10 py-5 rounded-2xl shadow-2xl shadow-emerald-500/40 transition-all duration-300 transform hover:scale-102 active:scale-98 flex items-center justify-center gap-3 cursor-pointer mx-auto border-2 border-white/80 animate-pulse-glow"
            >
              <span>QUERO MEU ACESSO AO DRIVE</span>
              <ArrowRight className="w-7 h-7" />
            </button>

            {/* Reassuring Guarantee line */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia incondicional de 7 dias com devolução de 100% do valor</span>
            </div>

            {/* Payment Method Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <QrCode className="w-4 h-4 text-amber-400" /> PIX (Aprovação Instantânea)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CreditCard className="w-4 h-4 text-amber-400" /> Cartão de Crédito
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Lock className="w-4 h-4" /> Processado com Segurança pela Hotmart
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
