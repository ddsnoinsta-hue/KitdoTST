import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const WhatsAppSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '5511999999999'; // Default or customizable via config
  const message = encodeURIComponent('Olá! Tenho uma dúvida sobre o Acervo de Segurança do Trabalho (Drive 2.5 GB por R$ 35,00).');
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      
      {/* Help Popup Bubble */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-3xl p-5 shadow-2xl border border-emerald-200 w-72 sm:w-80 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Suporte @ddsnoinsta</h4>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online agora
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            Dúvidas sobre o conteúdo dos 2,5 GB, liberação no e-mail ou forma de pagamento?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Tirar Dúvida no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="mt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Atendimento rápido e seguro
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-700/40 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95 border-2 border-white/80"
        title="Dúvidas? Fale Conosco"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs font-bold hidden sm:inline pr-1">Dúvidas?</span>
      </button>

    </div>
  );
};
