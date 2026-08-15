import React, { useState, useEffect } from 'react';
import { recentBuyersData } from '../data/testimonials';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export const SalesNotificationToast: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show notification periodically
    const timer = setInterval(() => {
      setVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
        // Move to next buyer
        setCurrentIdx(prev => (prev + 1) % recentBuyersData.length);
      }, 5000);

    }, 12000); // Trigger every 12 seconds

    // Initial show after 3 seconds
    const initialTimer = setTimeout(() => setVisible(true), 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTimer);
    };
  }, []);

  if (!visible) return null;

  const buyer = recentBuyersData[currentIdx];

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-gray-900 text-white p-3.5 rounded-2xl shadow-2xl border border-gray-700/80 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-2.5 bg-emerald-600/30 text-emerald-400 rounded-xl border border-emerald-500/30 shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Nova Compra Confirmada</span>
        </div>
        <p className="text-xs font-semibold text-gray-200 truncate mt-0.5">
          {buyer.name} ({buyer.role})
        </p>
        <p className="text-[11px] text-gray-400">
          Adquiriu em {buyer.location} • {buyer.timeAgo}
        </p>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-gray-400 hover:text-white p-1 rounded-lg"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
