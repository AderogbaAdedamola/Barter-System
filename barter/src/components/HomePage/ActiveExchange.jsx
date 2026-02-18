import React from 'react';
import { ArrowRightLeft, MessageSquare, MoreVertical } from 'lucide-react';

const ActiveExchangeCard = ({ exchange }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <img src={exchange.partnerAvatar} className="size-10 rounded-full" alt="" />
        <div>
          <h4 className="font-bold text-gray-900">{exchange.partnerName}</h4>
          <p className="text-xs text-gray-500">Updated {exchange.updatedAt}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="size-4" /></button>
    </div>

    <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between gap-2 mb-4">
      <div className="text-center flex-1">
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Giving</p>
        <p className="text-sm font-semibold text-red-600">{exchange.giving}</p>
      </div>
      <ArrowRightLeft className="size-4 text-gray-300" />
      <div className="text-center flex-1">
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Receiving</p>
        <p className="text-sm font-semibold text-green-600">{exchange.receiving}</p>
      </div>
    </div>

    <div className="flex gap-2">
      <button className="grow bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
        Manage Trade
      </button>
      <button className="px-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition">
        <MessageSquare className="size-4" />
      </button>
    </div>
  </div>
);