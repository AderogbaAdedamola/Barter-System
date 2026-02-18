import React from 'react';
import { Star, MapPin, Zap } from 'lucide-react';

const SmartMatches = ({ suggestions }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-amber-100 p-1.5 rounded-lg text-amber-600">
          <Zap className="size-4 fill-current" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Matches Based on Your Needs</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {suggestions.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-3xl p-6 relative overflow-hidden group">
            {/* Trust Indicator Decor */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                  <img src={item.userAvatar} className="size-14 rounded-2xl object-cover shadow-sm" alt="" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{item.userName}</h4>
                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                      <MapPin className="size-3" /> {item.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 text-white px-2 py-1 rounded-lg text-[10px] font-bold">
                  <Star className="size-3 fill-amber-400 text-amber-400" /> 4.9
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Offers You</p>
                  <p className="text-slate-900 font-bold">{item.skillOffered}</p>
                </div>
                <div className="w-full h-px bg-gray-50"></div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Needs From You</p>
                  <p className="text-red-600 font-bold">{item.skillNeeded}</p>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-200 hover:bg-red-700 transition transform active:scale-95">
                Propose Exchange
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};