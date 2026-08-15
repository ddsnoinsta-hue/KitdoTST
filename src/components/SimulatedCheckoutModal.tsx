import React, { useState } from 'react';
import { X, CheckCircle2, Lock, QrCode, CreditCard, ShieldCheck, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { DdsOfficialLogo } from './DdsOfficialLogo';

interface SimulatedCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onOpenConfig: () => void;
}

export const SimulatedCheckoutModal: React.FC<SimulatedCheckoutModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  onOpenConfig
}) => {
  const [copiedPix, setCopiedPix] = useState(false);
  const [tab, setTab] = useState<'pix' | 'card'>('pix');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleRedirectRealCheckout = () => {
    if (checkoutUrl && checkoutUrl.startsWith('http')) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const copyFakePixCode = () => {
    navigator.clipboard.writeText("00020126580014BR.GOV.BCB.PIX0136ddsnoinsta-acervo-2.5gb-sst520400005303986540535.005802BR5925DDS_NO_INSTA_TREINAMENTOS6009SAO_PAULO62070503***6304E8A2");
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-gray-200 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-emerald-600 text-white p-5 flex items-center justify-between border-b border-emerald-700">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white p-0.5 shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
              <DdsOfficialLogo className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-extrabold text-base leading-tight">Checkout Seguro - R$ 35,00</h3>
              <p className="text-[11px] text-emerald-100 font-medium">Drive @ddsnoinsta • 2,5 GB SST</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Custom Checkout URL Notice */}
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div className="text-emerald-900 font-medium">
              💡 <strong>Integrado com Hotmart:</strong>
            </div>
            {checkoutUrl && checkoutUrl.startsWith('http') ? (
              <button
                onClick={handleRedirectRealCheckout}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 text-xs shrink-0 cursor-pointer shadow-xs"
              >
                <span>Ir para Checkout Real</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onOpenConfig}
                className="text-emerald-700 underline font-bold hover:text-emerald-900 text-xs shrink-0 cursor-pointer"
              >
                Configurar URL de Vendas
              </button>
            )}
          </div>

          {!isCompleted ? (
            <>
              {/* Payment Tabs: PIX or Credit Card */}
              <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1.5 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setTab('pix')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    tab === 'pix' ? 'bg-white text-emerald-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>PIX (Instantâneo)</span>
                </button>
                <button
                  onClick={() => setTab('card')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    tab === 'card' ? 'bg-white text-emerald-700 shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {tab === 'pix' ? (
                /* PIX Simulation */
                <div className="space-y-4 text-center">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl max-w-xs mx-auto space-y-3">
                    <div className="w-36 h-36 bg-white border border-gray-300 rounded-xl mx-auto flex items-center justify-center p-2 shadow-inner">
                      <QrCode className="w-28 h-28 text-gray-900" />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Escaneie o código QR acima no aplicativo do seu banco ou copie a chave PIX abaixo:
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={copyFakePixCode}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      {copiedPix ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-200" />
                          <span>Código PIX Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar Código PIX Copia e Cola</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => setIsCompleted(true)}
                      className="w-full bg-gray-900 hover:bg-black text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Simular Confirmação do Pagamento</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Credit Card Form Simulation */
                <form onSubmit={(e) => { e.preventDefault(); setIsCompleted(true); }} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nome no Cartão:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: MARCOS A SILVA"
                      className="w-full p-2.5 rounded-xl border border-gray-300 text-xs text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Número do Cartão:</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-2.5 rounded-xl border border-gray-300 text-xs font-mono text-gray-800"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Validade:</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        className="w-full p-2.5 rounded-xl border border-gray-300 text-xs font-mono text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">CVV:</label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full p-2.5 rounded-xl border border-gray-300 text-xs font-mono text-gray-800"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md cursor-pointer transition-colors mt-2"
                  >
                    Pagar R$ 35,00 em até 3x
                  </button>
                </form>
              )}
            </>
          ) : (
            /* Completed Payment State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-black text-gray-900">Pagamento Aprovado!</h4>
                <p className="text-xs text-gray-600">
                  O acesso ao Google Drive de 2,5 GB foi enviado para seu e-mail com sucesso.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-left text-xs text-emerald-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Acesso via Google Drive:</span>
                </div>
                <p className="text-gray-700 font-mono bg-white p-2.5 rounded-xl border border-emerald-200 truncate">
                  https://drive.google.com/drive/folders/ddsnoinsta_acervo_2.5gb
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl text-xs cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-center text-[11px] text-gray-500 font-medium">
          🔒 Processamento protegido com criptografia SSL 256 bits
        </div>

      </div>
    </div>
  );
};
