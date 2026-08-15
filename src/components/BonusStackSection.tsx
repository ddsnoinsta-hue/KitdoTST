import React from 'react';
import { 
  Gift, 
  Video, 
  Presentation, 
  FileSpreadsheet, 
  FileCheck, 
  RefreshCw, 
  ArrowRight, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';

interface BonusStackProps {
  onCtaClick: () => void;
}

export const BonusStackSection: React.FC<BonusStackProps> = ({ onCtaClick }) => {
  const bonuses = [
    {
      badge: "BÔNUS #1",
      icon: <Video className="w-6 h-6 text-rose-500" />,
      iconBg: "bg-rose-100 border-rose-200",
      title: "Pack de Vídeos para seus Treinamentos",
      description: "Vídeos educativos de alto impacto para prender a atenção em treinamentos, integrações, DDS e eventos de SIPAT.",
      normalPrice: "R$ 67,00",
      features: [
        "Vídeos práticos de riscos e prevenção para treinamentos",
        "Alta definição para projetar em sala ou telão",
        "Formato MP4 pronto para WhatsApp ou PowerPoint"
      ]
    },
    {
      badge: "BÔNUS #2",
      icon: <Presentation className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100 border-orange-200",
      title: "Mega Kit de Slides das NRs em PowerPoint Editáveis",
      description: "Aulas completas prontas das principais NRs (NR-01, 05, 06, 10, 12, 18, 33, 35) com design profissional.",
      normalPrice: "R$ 97,00",
      features: [
        "100% editáveis no PowerPoint (adicione sua logo)",
        "Slides com ilustrações técnicas e fluxogramas",
        "Economia de mais de 40 horas de preparação"
      ]
    },
    {
      badge: "BÔNUS #3",
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100 border-emerald-200",
      title: "Planilhas Inteligentes de Gestão e Controle SST",
      description: "Planilhas automatizadas com fórmulas prontas para controle de entrega de EPIs, inspeções e estatísticas de acidentes.",
      normalPrice: "R$ 47,00",
      features: [
        "Controle de estoque e vencimento de CA de EPI",
        "Relatórios automáticos e gráficos gerenciais",
        "Compatível com Microsoft Excel e Google Planilhas"
      ]
    },
    {
      badge: "BÔNUS #4",
      icon: <FileCheck className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100 border-blue-200",
      title: "Modelos Prontos de APR, OS, PGR e Checklists",
      description: "Acervo de documentos técnicos padronizados em Word para emitir laudos, procedimentos e ordens de serviço rápidas.",
      normalPrice: "R$ 57,00",
      features: [
        "Modelos de Análise Preliminar de Risco (APR)",
        "Ordens de Serviço por função e CBO",
        "Fichas de entrega de EPI com validade jurídica"
      ]
    },
    {
      badge: "BÔNUS #5",
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100 border-purple-200",
      title: "Acesso Vitalício + Atualizações Sem Mensalidades",
      description: "Sempre que adicionarmos novos documentos e apresentações no Google Drive, você terá acesso sem pagar 1 centavo a mais.",
      normalPrice: "R$ 97,00",
      features: [
        "Acesso para sempre no seu e-mail",
        "Sem taxas de renovação ou cobranças surpresa",
        "Acesse pelo celular, tablet ou computador"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white relative overflow-hidden border-t border-slate-200/80">
      
      {/* Decorative background blurs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
            <Gift className="w-4 h-4 fill-slate-950" />
            <span>5 Super Bônus Exclusivos Inclusos Hoje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Comprando Hoje, Você Leva Todos os{' '}
            <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">
              Bônus de Graça
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Somados, estes materiais extras custam mais de <strong className="text-slate-900">R$ 365,00</strong> se fossem vendidos separadamente. Hoje eles são seus sem custo adicional!
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-lg hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 border-emerald-400 bg-gradient-to-b from-white to-emerald-50/50' : ''
              }`}
            >
              {/* Top Accent Stripe */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-slate-900 text-amber-300 text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                    {bonus.badge}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through font-semibold block">{bonus.normalPrice}</span>
                    <span className="text-xs font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${bonus.iconBg} shrink-0 group-hover:scale-105 transition-transform`}>
                    {bonus.icon}
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {bonus.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {bonus.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {bonus.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full inline-block">
                  ✓ Liberado no seu Google Drive
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Box */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-950 rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-400/80 shadow-2xl text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Condição Especial Exclusiva</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Acervo Completo (2,5 GB) + Todos os 5 Bônus Inclusos
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Valor normal somado: <span className="line-through text-rose-400 font-bold">R$ 365,00</span>
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-2xl border border-emerald-500/40 max-w-sm mx-auto">
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              Você paga apenas hoje:
            </div>
            <div className="text-4xl sm:text-5xl font-black text-amber-400">
              R$ 35,00
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              Pagamento único • Sem assinaturas
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-lg sm:text-xl py-4.5 px-8 rounded-2xl shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2 cursor-pointer mx-auto border-2 border-emerald-300"
          >
            <span>QUERO GARANTIR TODOS OS BÔNUS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
