import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 bg-emerald-100 font-bold text-xs sm:text-sm uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            O que dizem os profissionais que já adquiriram
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Milhares de profissionais e estudantes confiam no material da página @ddsnoinsta.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50/80 p-6 sm:p-8 rounded-3xl border border-gray-200 hover:border-emerald-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {item.badge}
                  </span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-emerald-700 font-medium">{item.role}</p>
                  <p className="text-[11px] text-gray-400">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
