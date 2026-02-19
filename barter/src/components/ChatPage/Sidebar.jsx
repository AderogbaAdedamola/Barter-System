import { MessageSquare, Sparkles, Search, X } from 'lucide-react';

export function Sidebar({ threads = [], activeId, onSelect, isOpen, onClose, loading, backButton }) {
  return (
    <aside className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      fixed inset-y-0 left-0 z-50 w-80 bg-slate-50 border-r border-slate-200 
      transition-transform duration-300 ease-in-out md:relative md:translate-x-0
    `}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
            {backButton}
          <h2 className="text-sm font-black uppercase tracking-tighter text-slate-900 flex items-center gap-2">
            <MessageSquare className="size-4 text-red-600" /> Messages
          </h2>
          <button onClick={onClose} className="md:hidden p-2 text-slate-500"><X /></button>
        </div>

        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search swaps..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          {/* Skeleton Loader for Sidebar */}
          {loading ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 animate-pulse">
                <div className="size-10 bg-slate-200 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-slate-200 rounded w-3/4" />
                  <div className="h-2 bg-slate-200 rounded w-1/2" />
                </div>
              </div>
            ))
          ) : (
            <>
              {/* AI Helper Card */}
              <button 
                onClick={() => onSelect('ai-assistant')}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeId === 'ai-assistant' ? 'bg-white shadow-sm ring-1 ring-slate-200' : 'hover:bg-slate-100'
                }`}
              >
                <div className="size-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="size-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm font-bold text-slate-900">AI Concierge</p>
                  <p className="text-[10px] text-slate-500 truncate italic">Online Helper</p>
                </div>
              </button>

              <div className="py-4 px-4 uppercase text-[10px] font-black text-slate-400 tracking-widest">Recent Deals</div>

              {threads?.map(thread => (
                <button 
                  key={thread.id}
                  onClick={() => onSelect(thread.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${
                    activeId === thread.id ? 'bg-white shadow-sm ring-1 ring-slate-200' : 'hover:bg-slate-100'
                  }`}
                >
                  <img src={thread.avatar} className="size-10 rounded-xl object-cover" alt="" />
                  <div className="text-left overflow-hidden flex-1">
                    <p className="text-sm font-bold text-slate-800 truncate">{thread.name}</p>
                    <p className="text-xs text-slate-500 truncate">{thread.lastMsg}</p>
                  </div>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </aside>
  );
}