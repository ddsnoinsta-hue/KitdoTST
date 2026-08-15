import React from 'react';
import { Instagram, Award, Users, FileCheck2, HeartHandshake, ShieldCheck, Edit3 } from 'lucide-react';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface AuthoritySectionProps {
  followersCount: string;
  onOpenConfig: () => void;
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({
  followersCount,
  onOpenConfig
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-emerald-800/30">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-emerald-500/40 shadow-lg shrink-0 flex items-center justify-center overflow-hidden">
                  <DdsOfficialLogo className="w-12 h-12" />
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Credibilidade & Autoridade no Mercado SST</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Conteúdo oficial da página{' '}
                <span className="text-emerald-400">@ddsnoinsta</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                Todo o material disponibilizado foi organizado pela equipe da página{' '}
                <strong className="text-white font-semibold">@ddsnoinsta</strong>, referência nacional na divulgação de conteúdos práticos de Segurança do Trabalho.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                Nosso objetivo é ajudar profissionais e estudantes a economizar tempo, encontrar documentos úteis e ter acesso a conteúdos de altíssima qualidade em um único lugar, sem enrolação.
              </p>

              <div className="pt-2">
                <a
                  href="https://instagram.com/ddsnoinsta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold px-5 py-3 rounded-2xl shadow-lg transition-all duration-200 text-sm hover:scale-102"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Siga a página @ddsnoinsta no Instagram</span>
                </a>
              </div>

            </div>

            {/* Right Side Stat Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2 relative group hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <Users className="w-7 h-7 text-emerald-400" />
                  <button
                    onClick={onOpenConfig}
                    title="Editar número de seguidores"
                    className="opacity-60 group-hover:opacity-100 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded-md border border-emerald-800 flex items-center gap-1 cursor-pointer transition-opacity"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Editar</span>
                  </button>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{followersCount}</div>
                <div className="text-xs text-gray-400 font-medium">Seguidores no Instagram</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
                <FileCheck2 className="w-7 h-7 text-emerald-400" />
                <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div className="text-xs text-gray-400 font-medium">Arquivos Editáveis</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
                <Award className="w-7 h-7 text-emerald-400" />
                <div className="text-2xl sm:text-3xl font-black text-white">2.5 GB+</div>
                <div className="text-xs text-gray-400 font-medium">Conteúdo de Alta Relevância</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
                <HeartHandshake className="w-7 h-7 text-emerald-400" />
                <div className="text-2xl sm:text-3xl font-black text-white">4.9 / 5.0</div>
                <div className="text-xs text-gray-400 font-medium">Índice de Satisfação</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
