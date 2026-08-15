import React, { useState } from 'react';
import { X, ExternalLink, Settings, Check, Lock, Sparkles, CreditCard, Users } from 'lucide-react';

interface CheckoutConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onSaveCheckoutUrl: (newUrl: string) => void;
  followersCount: string;
  onSaveFollowersCount: (newCount: string) => void;
}

export const CheckoutConfigModal: React.FC<CheckoutConfigModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  onSaveCheckoutUrl,
  followersCount,
  onSaveFollowersCount
}) => {
  const [urlInput, setUrlInput] = useState(checkoutUrl);
  const [followersInput, setFollowersInput] = useState(followersCount);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveCheckoutUrl(urlInput);
    onSaveFollowersCount(followersInput);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-gray-200 shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Configurações da Página
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Ajuste o link de checkout e o número de seguidores do @ddsnoinsta
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              Número de Seguidores no Instagram (@ddsnoinsta):
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={followersInput}
                onChange={(e) => setFollowersInput(e.target.value)}
                placeholder="Ex: +250 mil ou +300.000"
                className="w-full pl-3 pr-10 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm font-semibold text-gray-800"
              />
              <Users className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Exibido na Seção de Autoridade da página (ex: "+250 mil", "+300.000" ou "+180k").
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
              URL do Link de Pagamento / Checkout:
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://pay.hotmart.com/L107052468L"
                className="w-full pl-3 pr-10 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm font-mono text-gray-800"
              />
              <CreditCard className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-gray-500 mt-1.5">
              💡 Todos os botões <strong>"QUERO ACESSAR AGORA"</strong> do site redirecionarão seus clientes diretamente para esta URL.
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1">
            <div className="font-bold text-gray-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Exemplos de Plataformas Suportadas:
            </div>
            <ul className="list-disc list-inside text-[11px] text-gray-500 space-y-0.5">
              <li>Kiwify (ex: https://pay.kiwify.com.br/abc123)</li>
              <li>Hotmart (ex: https://pay.hotmart.com/X12345678Y)</li>
              <li>Eduzz / Nutror / Monetizze / Mercado Pago / Stripe</li>
            </ul>
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-xl flex items-center gap-2 border border-emerald-300">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Configurações salvas com sucesso!</span>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
