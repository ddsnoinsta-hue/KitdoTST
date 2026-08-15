import React from 'react';
import { whatYouGetList } from '../data/driveContents';
import { CheckCircle2, HardHat, ShieldCheck } from 'lucide-react';

interface WhatYouGetProps {
  onCtaClick: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-emerald-700 bg-emerald-100 font-bold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200">
            Conteúdo Detalhado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            O que você recebe no seu acervo digital
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Veja a lista completa de materiais organizados no seu acervo digital:
          </p>
        </div>

        {/* The Big Green Check List */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-md space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-2xl">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900">Checklist do Acervo SST</h3>
              <p className="text-xs text-gray-500 font-medium">Acesso vitalício imediato via Google Drive</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGetList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50/70 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium text-sm sm:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Note required in prompt: "E muito mais." */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-emerald-700 font-extrabold text-lg sm:text-xl italic">
              "E muito mais..."
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                +2.500 MB no total
              </span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="w-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-800/25 transition-all text-center block cursor-pointer border border-emerald-500/30 text-base sm:text-lg"
          >
            QUERO ACESSAR TODO O ACERVO SST
          </button>
        </div>

      </div>
    </section>
  );
};

