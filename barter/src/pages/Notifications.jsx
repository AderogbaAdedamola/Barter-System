import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Bell, CheckCircle2, MessageSquare, ArrowRightLeft, MoreVertical, Settings } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

export default function NotificationsPage() {
  const navigate = useNavigate();

  const getIcon = (type) => {
    switch (type) {
      case 'offer_received': return <ArrowRightLeft className="size-4 text-blue-500" />;
      case 'trade_completed': return <CheckCircle2 className="size-4 text-green-500" />;
      case 'message': return <MessageSquare className="size-4 text-red-500" />;
      default: return <Bell className="size-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-[cal(100dvh - 50px)] bg-[#F8FAFC]">
      <div className="max-w-3xl relative mx-auto px-6 py-6 md:py-10">
        
        <div className="flex absolute top-1 right-1 left-1 items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors group"
          >
            <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
              <ChevronLeft className="size-5" />
            </div>
          </button>

          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
            <Settings className="size-5" />
          </button>
        </div>

        <div className="space-y-3">
          {mockNotifications.map((n) => (
            <div 
              key={n.id} 
              className={`group relative flex items-start gap-4 p-5 rounded-4xl border transition-all duration-300 cursor-pointer ${
                n.isUnread 
                  ? 'bg-white border-red-100 shadow-lg shadow-red-500/5' 
                  : 'bg-white/60 border-transparent hover:border-slate-200'
              }`}
            >
              <div className="relative shrink-0">
                <img src={n.avatar} className="size-12 rounded-2xl object-cover" alt="" />
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-lg shadow-sm border border-slate-50">
                  {getIcon(n.type)}
                </div>
              </div>

              <div className="flex-1">
                <p className={`text-slate-900 text-sm leading-relaxed ${n.isUnread ? 'font-medium' : ''}`}>
                  <span className="font-bold">{n.user}</span> {n.content}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                    {n.time}
                  </span>
                  {n.isUnread && <span className="size-1.5 bg-red-500 rounded-full" />}
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400">
                  <MoreVertical className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {mockNotifications.length === 0 && (
          <div className="text-center py-20">
            <Bell className="size-16 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900">All caught up!</h3>
            <p className="text-slate-500">No notifications at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}