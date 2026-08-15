import React from 'react';
import { benefitsData } from '../data/benefits';
import { FileText, Video, Layout, Presentation, RefreshCw, FolderCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-7 h-7 text-emerald-600" />,
  Video: <Video className="w-7 h-7 text-emerald-600" />,
  Layout: <Layout className="w-7 h-7 text-emerald-600" />,
  Presentation: <Presentation className="w-7 h-7 text-emerald-600" />,
  RefreshCw: <RefreshCw className="w-7 h-7 text-emerald-600" />,
  FolderCheck: <FolderCheck className="w-7 h-7 text-emerald-600" />
};

const cardThemes = [
  {
    bg: 'bg-emerald-50/80',
    iconBg: 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white',
    hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-900/10',
    titleHover: 'group-hover:text-emerald-800'
  },
  {
    bg: 'bg-amber-50/80',
    iconBg: 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-slate-950',
    hoverBorder: 'hover:border-amber-400 hover:shadow-amber-900/10',
    titleHover: 'group-hover:text-amber-800'
  },
  {
    bg: 'bg-blue-50/80',
    iconBg: 'bg-blue-100 text-blue-800 group-hover:bg-blue-700 group-hover:text-white',
    hoverBorder: 'hover:border-blue-400 hover:shadow-blue-900/10',
    titleHover: 'group-hover:text-blue-800'
  },
  {
    bg: 'bg-slate-100/80',
    iconBg: 'bg-slate-200 text-slate-800 group-hover:bg-slate-800 group-hover:text-white',
    hoverBorder: 'hover:border-slate-400 hover:shadow-slate-900/10',
    titleHover: 'group-hover:text-slate-900'
  },
  {
    bg: 'bg-emerald-50/80',
    iconBg: 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white',
    hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-900/10',
    titleHover: 'group-hover:text-emerald-800'
  },
  {
    bg: 'bg-amber-50/80',
    iconBg: 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-slate-950',
    hoverBorder: 'hover:border-amber-400 hover:shadow-amber-900/10',
    titleHover: 'group-hover:text-amber-800'
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-900">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Destaques do Acervo SST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Tudo o que você precisa para facilitar sua rotina profissional.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            O acervo mais completo da internet estruturado para você economizar tempo, evitar retrabalho e apresentar relatórios impecáveis.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={benefit.id}
                className={`p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:bg-white hover:shadow-xl transition-all duration-300 group ${theme.hoverBorder}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${theme.iconBg}`}>
                  {React.cloneElement(iconMap[benefit.iconName] as React.ReactElement<React.ComponentProps<'svg'>>, {
                    className: 'w-7 h-7 transition-colors duration-300'
                  })}
                </div>
                
                <h3 className={`text-xl font-bold text-gray-900 mb-2 transition-colors ${theme.titleHover}`}>
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
