import { ArrowRightLeft, Check, X } from 'lucide-react';

export function PinnedTrade({ trade, onAccept, onDecline }) {
  if (!trade) return null;

  return (
    <div className="sticky top-0 z-10 p-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-[2rem] p-4 flex items-center justify-between animate-in slide-in-from-top-4">
        <div className="flex items-center gap-4">
          <div className="size-10 bg-slate-900 rounded-full flex items-center justify-center text-white">
            <ArrowRightLeft className="size-5" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Proposal</p>
            <p className="text-sm font-bold text-slate-800">
              {trade.offered} <span className="text-slate-400 mx-1">for</span> {trade.needed}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button onClick={onDecline} className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all">
            <X className="size-5" />
          </button>
          <button onClick={onAccept} className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2">
            <Check className="size-4" /> Start Trade
          </button>
        </div>
      </div>
    </div>
  );
}