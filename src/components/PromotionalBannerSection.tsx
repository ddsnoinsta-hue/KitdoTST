import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2, 
  Zap, 
  ArrowRight, 
  HardHat, 
  Layers, 
  Maximize2, 
  X,
  Check,
  Award,
  BookOpen,
  TrendingUp,
  FolderOpen
} from 'lucide-react';
import ddsBannerImg from '../assets/images/banner_with_exact_logo_1786056029384.jpg';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface PromotionalBannerSectionProps {
  onCtaClick: () => void;
}

export const PromotionalBannerSection: React.FC<PromotionalBannerSectionProps> = ({ onCtaClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      icon: <FolderOpen className="w-6 h-6 text-emerald-600" />,
      title: "Mais Organização",
      desc: "Modelos e relatórios padronizados prontos para uso diário em campo e inspeções de rotina."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Mais Segurança",
      desc: "Identificação antecipada de falhas e riscos em equipamentos antes do início das operações."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      title: "Mais Conhecimento",
      desc: "Conteúdos fundamentados nas Normas Regulamentadoras (NRs) com linguagem clara e didática."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: "Mais Produtividade",
      desc: "Ganhe tempo precioso sem precisar criar formulários, apresentações ou DDS do zero."
    }
  ];

  const equipmentChecklists = [
    "Cabos de Aço",
    "Caminhões e Carretas",
    "Carreta Munck",
    "Carrinho de Mão",
    "Carros e Utilitários",
    "Cintas de Elevação",
    "Containers",
    "Empilhadeiras",
    "Esteiras",
    "Ganchos de Içamento",
    "Guindastes",
    "Ponte Rolante"
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950 text-white relative overflow-hidden">
      {/* Background Decorative Safety Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Top Safety Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-700/60 shadow-lg">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span>Infográfico & Acervo Completo SST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Conteúdo de Qualidade para{' '}
            <span className="text-emerald-400 underline decoration-amber-400 decoration-wavy decoration-2">
              Documentos & Vídeos
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Os melhores documentos e checklists para você realizar inspeções no ambiente de trabalho com facilidade e eficiência.
          </p>
        </div>

        {/* Main Content Grid: Image Banner on Left + Contextual Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official Promotional Banner Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative group mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-slate-900 p-3 sm:p-4 rounded-3xl border-2 border-emerald-500/40 shadow-2xl space-y-3 overflow-hidden">
                
                {/* Image Container with Zoom Button */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-square sm:aspect-auto">
                  <img
                    src={ddsBannerImg}
                    alt="Infográfico Informativo Drive de Materiais DDS no insta"
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/50 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-lg">
                    <DdsOfficialLogo className="w-4 h-4" />
                    <span>Oficial @ddsnoinsta</span>
                  </div>

                  {/* Zoom Preview Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute bottom-3 right-3 bg-emerald-600/90 hover:bg-emerald-500 text-white p-2.5 rounded-xl backdrop-blur-md shadow-lg transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                    title="Ampliar Imagem"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Expandir Banner</span>
                  </button>
                </div>

                {/* Card Quick Info Footer */}
                <div className="flex items-center justify-between text-xs text-slate-300 px-2 pt-1 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" /> Material 100% Atualizado
                  </span>
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-extrabold">
                    Apenas R$ 35,00
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contextual Details & Equipment List */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/80 p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-emerald-950 rounded-xl border border-emerald-700/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklists de Equipamentos Mapeados */}
            <div className="bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-amber-400" />
                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    Inspeções & Checklists Prontos em Campo
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Editáveis
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {equipmentChecklists.map((equip, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{equip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40"
              >
                <span>ACESSAR MATERIAL COMPLETO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="text-center sm:text-left text-xs text-slate-400 font-medium">
                <div className="text-amber-300 font-bold">R$ 35,00 • Pagamento Único</div>
                <div>Acesso imediato no Google Drive</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Image Preview Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl p-2 border border-slate-700 shadow-2xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-950 text-white p-2 rounded-full hover:bg-rose-600 transition-colors z-20 cursor-pointer border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={ddsBannerImg}
              alt="Banner Infográfico Ampliado"
              className="w-full h-auto max-h-[82vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

    </section>
  );
};
