import React from 'react';
import { ShieldCheck, Lock, Download, Zap, Award, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big 7-Day Guarantee Feature Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/50 shadow-xl relative overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 flex flex-col items-center justify-center mx-auto shadow-xl border-4 border-white font-black">
                <span className="text-2xl sm:text-3xl leading-none">7</span>
                <span className="text-[11px] uppercase tracking-wider">DIAS</span>
                <span className="text-[9px] font-bold uppercase">Garantia</span>
              </div>
              <div className="mt-2 text-xs font-bold text-slate-700">Risco Zero para Você</div>
            </div>

            <div className="md:col-span-8 space-y-3 text-center md:text-left">
              <span className="text-emerald-700 bg-emerald-100 font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Garantia Incondicional de Satisfação
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Experimente o Acervo por 7 Dias Sem Riscos
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acesse o Google Drive, explore os modelos de documentos, assista aos vídeos para seus treinamentos e baixe as apresentações de PowerPoint. Se por qualquer motivo você achar que o material não facilitou o seu trabalho, basta solicitar o reembolso na Hotmart dentro de 7 dias e devolveremos <strong>100% do seu dinheiro</strong>. Sem burocracia e sem ressentimentos.
              </p>
            </div>

          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Pagamento 100% Seguro</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Processado pela Hotmart com criptografia bancária de última geração e sigilo total dos seus dados.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Envio Imediato no E-mail</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Link de acesso ao Google Drive disponibilizado automaticamente no seu e-mail logo após o pagamento.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Acesso Vitalício & Offline</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Baixe os arquivos para o seu computador ou celular e use sempre que precisar, mesmo sem internet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
