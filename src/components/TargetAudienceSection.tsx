import React from 'react';
import { CheckCircle2, XCircle, HardHat, UserCheck, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onCtaClick: () => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceProps> = ({ onCtaClick }) => {
  const isForList = [
    "Técnicos em Segurança do Trabalho (TST) que buscam agilidade e materiais prontos para o dia a dia;",
    "Engenheiros de Segurança do Trabalho (EST) que elaboram laudos, PGR, PCMSO e planos de emergência;",
    "Consultores e Assessores SST que precisam atender múltiplos clientes com documentos padronizados;",
    "Instrutores e Treinadores que precisam de apresentações visuais e impactantes das NRs para engajar alunos;",
    "Membros de CIPA, Brigada e SESMT responsáveis por DDS diários, inspeções e eventos de SIPAT;",
    "Estudantes e Concurseiros da área de SST que desejam aprender com modelos reais e apostilas esquematizadas."
  ];

  const notForList = [
    "Pessoas que não atuam e não pretendem atuar ou estudar na área de Segurança e Saúde no Trabalho;",
    "Quem prefere passar horas no Google pesquisando documentos desatualizados e incompletos;",
    "Quem não tem interesse em organizar e acelerar sua rotina profissional com modelos prontos."
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-300 shadow-sm">
            <UserCheck className="w-4 h-4 text-emerald-700" />
            <span>Perfil do Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Para quem é este{' '}
            <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">
              Acervo de SST?
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Descubra se este material foi desenvolvido sob medida para a sua rotina e objetivos profissionais:
          </p>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* SIM - Para quem é */}
          <div className="lg:col-span-7 bg-emerald-950 text-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-500 text-emerald-950 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-emerald-300">
                    ESTE ACERVO É PARA VOCÊ QUE:
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {isForList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-2xl border border-emerald-800/60">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-800/80 relative z-10">
              <button
                onClick={onCtaClick}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>SIM, É EXATAMENTE O QUE PRECISO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* NÃO - Para quem não é */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-rose-100 text-rose-700 rounded-xl">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-rose-800">
                    NÃO É RECOMENDADO PARA:
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {notForList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-rose-100 shadow-xs">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
              <span className="text-xs text-amber-900 font-bold">
                🎯 Mais de 12.500 profissionais já utilizam este acervo no dia a dia.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
