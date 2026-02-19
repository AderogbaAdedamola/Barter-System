import { Menu, Info } from "lucide-react"

export function ChatHeader({ name, isAI, onToggle, backButton }) {
  return (
    <header className="h-16 border-b border-slate-50 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-30">
      <div className="flex items-center gap-4">
        {backButton}
        <button onClick={onToggle} className="md:hidden p-2 -ml-2 text-slate-400 hover:text-slate-900">
          <Menu className="size-5" />
        </button>
        <div>
          <h2 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
            {name}
            {isAI && <span className="bg-slate-900 text-[8px] text-white px-2 py-0.5 rounded-full uppercase tracking-widest">Bot</span>}
          </h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="size-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Now</span>
          </div>
        </div>
      </div>
      <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
        <Info className="size-5" />
      </button>
    </header>
  );
}