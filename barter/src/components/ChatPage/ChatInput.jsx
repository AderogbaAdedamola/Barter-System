import { Send, Paperclip, Zap } from 'lucide-react';

export function ChatInput({ loading, placeholder }) {
  return (
    <div className="p-4 md:p-6 bg-white border-t border-slate-50">
      <div className="max-w-3xl mx-auto relative group">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-[2rem] p-2 pr-3 focus-within:bg-white focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-900/5 transition-all">
          <button className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors">
            <Paperclip className="size-5" />
          </button>
          
          <input 
            disabled={loading}
            type="text" 
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-1 outline-none text-slate-700 font-medium"
          />
          
          <button className="bg-slate-900 text-white p-2.5 rounded-full hover:scale-105 transition-all shadow-lg shadow-slate-200 active:scale-95">
            <Send className="size-4" />
          </button>
        </div>
        
        {/* Subtle helper text like ChatGPT */}
        <p className="text-center text-[9px] text-slate-400 mt-3 font-medium uppercase tracking-[0.1em]">
          Be respectful. All swaps are protected by the Barter contract.
        </p>
      </div>
    </div>
  );
}