import React from 'react';
import { ArrowRight, CheckCircle2, Shield, FolderGit2, HardHat, Star, Zap, Lock } from 'lucide-react';
import heroMockupImg from '../assets/images/hero_banner_exact_logo_1786056050901.jpg';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Subtle Safety Pattern & Soft Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust & Rating Micro-Bar */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-4 text-xs font-semibold text-slate-700">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-amber-900 shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9 / 5.0 (Mais de 12.500 Profissionais)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs border border-emerald-700/60">
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span>Acervo Oficial @ddsnoinsta</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Subtitle, Badges & CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Economize Horas de Trabalho:{' '}
              <span className="text-emerald-700 underline decoration-amber-400 decoration-wavy decoration-2">
                2,5 GB
              </span>{' '}
              de Materiais Prontos de Segurança do Trabalho por apenas{' '}
              <span className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-3 py-0.5 rounded-xl shadow-lg shadow-emerald-700/25 transform -rotate-1 border border-emerald-600/40">
                R$ 35,00
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Tenha acesso vitalício no Google Drive a DDS prontos, apresentações em PowerPoint 100% editáveis das NRs, checklists, modelos de APR/PGR e vídeos para seus treinamentos para elevar o padrão do seu trabalho.
            </p>

            {/* Badges Required */}
            <div className="pt-1 pb-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-3 py-1.5 rounded-xl border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso Imediato no Google Drive</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-xl border border-blue-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Pagamento Único • Sem Mensalidade</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 text-purple-900 px-3 py-1.5 rounded-xl border border-purple-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Arquivos 100% Editáveis</span>
              </div>
            </div>

            {/* CTA Button & Pricing Anchor */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-xs sm:text-sm text-slate-400 line-through font-semibold">De R$ 197,00</span>
                <span className="bg-emerald-100 text-emerald-900 text-xs font-black px-2.5 py-0.5 rounded-full uppercase border border-emerald-300">
                  82% de Desconto Hoje
                </span>
              </div>

              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto min-w-[300px] bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-black text-lg sm:text-xl px-8 py-4.5 rounded-2xl shadow-xl shadow-emerald-800/35 transition-all duration-300 animate-pulse-glow flex items-center justify-center gap-3 cursor-pointer group hover:-translate-y-0.5 active:translate-y-0 border-2 border-emerald-500/40"
              >
                <span>QUERO ACESSAR O DRIVE POR R$ 35</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform text-amber-300" />
              </button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1 font-semibold text-emerald-800">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" /> Pagamento Seguro via Hotmart
                </span>
                <span>•</span>
                <span>Liberação imediata no PIX</span>
                <span>•</span>
                <span>Garantia de 7 Dias</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Safety Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700 rounded-3xl blur-lg opacity-30 animate-pulse" />

              {/* Card Container holding Hero Mockup */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-gray-200 shadow-2xl space-y-4">
                
                <div className="relative rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src={heroMockupImg}
                    alt="Acervo Google Drive Segurança do Trabalho 2.5GB"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-3 right-3 bg-gray-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40 px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                    <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2.5 GB Organizadíssimos</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-gray-950/90 backdrop-blur-md text-white border border-gray-700 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg">
                    <DdsOfficialLogo className="w-5 h-5" />
                    <span>Acervo Oficial @ddsnoinsta</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
