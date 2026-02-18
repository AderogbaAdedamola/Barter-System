import React from 'react';
import { ArrowUpRight, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const StatusOverview = ({ stats }) => {
  const cards = [
    { label: 'Active Exchanges', value: 2, icon: <ArrowUpRight />, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Requests', value: 1, icon: <Clock />, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Completed Trades', value: 12, icon: <CheckCircle2 />, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Disputes', value: 0, icon: <AlertCircle />, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, i) => (
        <div key={i} className={`${card.bg} p-4 rounded-2xl border border-white shadow-sm`}>
          <div className={`flex items-center justify-between mb-2 ${card.color}`}>
            {card.icon}
            <span className="text-2xl font-bold">{card.value}</span>
          </div>
          <p className="text-sm font-medium text-gray-600">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusOverview