import { ShieldCheck, Clock, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export function TradeStatusBar({ status, onComplete, onCancel }) {
  // statuses: 'in-progress', 'awaiting-completion', 'cancelled'
  
  return (
    <div className="sticky top-16 z-10 w-full bg-slate-900 text-white px-6 py-3 shadow-2xl animate-in slide-in-from-top-2">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-green-500/20 p-1.5 rounded-lg border border-green-500/30">
            <ShieldCheck className="size-4 text-green-400" />
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none">Status</p>
            <p className="text-xs font-bold text-white mt-1">Trade Secure & Active</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onCancel}
            className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors text-red-400"
          >
            <XCircle className="size-4" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Cancel Deal</span>
          </button>
          
          <button 
            onClick={onComplete}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition-all shadow-lg shadow-green-500/20 group"
          >
            <CheckCircle2 className="size-4 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Mark as Completed</span>
          </button>
        </div>
      </div>
    </div>
  );
}