import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRightLeft, ShieldCheck, Zap } from 'lucide-react';

export function ServiceCard({ service }) {
  return (
    <Link to={`/service/${service.id}`} className="block h-full">
      <div className="bg-white h-full rounded-4xl border border-slate-100 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(239,68,68,0.08)] transition-all duration-300 overflow-hidden group flex flex-col">
        
        {/* Top Section: User & Category */}
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={service.userAvatar}
                alt={service.userName}
                className="size-10 rounded-xl object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-0.5 rounded-md border-2 border-white">
                <ShieldCheck className="size-3" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-none mb-1">{service.userName}</p>
              <div className="flex items-center text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                <MapPin className="size-2.5 mr-1 text-red-500" />
                {service.location}
              </div>
            </div>
          </div>
          <span className="bg-slate-50 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100">
            {service.category}
          </span>
        </div>

        {/* Middle Section: Title & Description */}
        <div className="px-5 pb-4 grow">
          <h3 className="font-black text-lg text-slate-900 mb-2 group-hover:text-red-600 transition-colors leading-tight">
            {service.title}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Barter Logic Section  */}
        <div className="mx-4 mb-4 bg-linear-to-br from-slate-50 to-gray-100/50 rounded-2xl p-4 border border-white relative overflow-hidden">
          <Zap className="absolute -right-2 -bottom-2 size-12 text-slate-200/50 rotate-12" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex-1">
              <p className="text-[9px] uppercase font-black text-red-500 tracking-widest mb-1">Offering</p>
              <p className="text-slate-900 font-bold text-xs truncate">{service.skillOffered}</p>
            </div>
            
            <div className="bg-white size-8 rounded-full shadow-sm flex items-center justify-center border border-slate-100">
              <ArrowRightLeft className="size-3.5 text-red-600" />
            </div>
            
            <div className="flex-1 text-right">
              <p className="text-[9px] uppercase font-black text-green-600 tracking-widest mb-1">Seeking</p>
              <p className="text-slate-900 font-bold text-xs truncate">{service.skillNeeded}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 mt-auto border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center text-slate-400 text-xs font-medium">
            <Clock className="size-3.5 mr-1.5 text-slate-300" />
            {service.duration || 'Flexible'}
          </div>
          <div className="text-red-600 text-xs font-black uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
            View Deal →
          </div>
        </div>
      </div>
    </Link>
  );
}