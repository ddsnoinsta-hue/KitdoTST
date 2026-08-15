import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onCtaClick: () => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 bg-emerald-100 font-bold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200">
            Comparativo de Eficiência
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Por que vale a pena ter o Drive de Segurança do Trabalho?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Veja a diferença entre continuar procurando arquivos manualmente na internet e ter todo o acervo pronto ao seu alcance.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card: Sem o Drive */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-red-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-red-100">
                <span className="font-extrabold text-xl text-red-600 uppercase tracking-wide flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  Sem o Drive
                </span>
                <span className="bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
                  Sem Produtividade
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Perder horas procurando materiais na internet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Baixar arquivos incompletos ou desatualizados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Conteúdo espalhado em várias pastas do computador
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Pouca organização e retrabalho para formatar
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-red-600 font-medium text-center">
              ⏳ Resultado: Estresse, atrasos em prazos e perda de tempo precioso.
            </div>
          </div>

          {/* Card: Com o Drive */}
          <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl relative overflow-hidden flex flex-col justify-between transform md:-translate-y-2">
            
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-700/60">
                <span className="font-extrabold text-xl text-emerald-400 uppercase tracking-wide flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  Com o Drive
                </span>
                <span className="bg-emerald-500 text-emerald-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recomendado
                </span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Tudo organizado em pastas categorizadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Acesso imediato no e-mail logo após a compra
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Material completo e reunido num só lugar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Economia gigantesca de tempo no seu dia a dia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Conteúdo centralizado no Google Drive vitalício
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800 space-y-3 relative z-10">
              <button
                onClick={onCtaClick}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black py-3.5 px-6 rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>QUERO O DRIVE ORGANIZADO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
