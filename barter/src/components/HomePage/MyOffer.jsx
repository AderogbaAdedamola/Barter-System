import React from 'react';
import { Edit3, Eye, MoreHorizontal, Plus } from 'lucide-react';

const MyOffers = ({ offers }) => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">My Listed Skills</h3>
        <button className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700">
          <Plus className="size-4" /> Add New Skill
        </button>
      </div>

      <div className="space-y-3">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between group hover:border-red-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-xl text-red-600 font-bold text-xs uppercase">
                {offer.category}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{offer.title}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Eye className="size-3" /> {offer.views} views
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">
                    {offer.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition">
                <Edit3 className="size-4" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition">
                <MoreHorizontal className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};