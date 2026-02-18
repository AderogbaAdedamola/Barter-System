import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import DashboardHeader from "../components/Layouts/Header"
import StatusOverview from "../components/HomePage/StatusOverview"
import ActiveExchangeCard from "../components/HomePage/ActiveExchange"
import SmartMatches from "../components/HomePage/SmartMatches"
import MyOffers from "../components/HomePage/MyOffers"
import { currentUser, mockExchanges, mockMyServices, mockSuggestions } from '../data/mockData';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ exchanges: [], offers: [], matches: [] });

  useEffect(() => {
    // API Simulation
    const fetchData = async () => {
      try {
        // const response = await axios.get('/api/dashboard');
        // setData(response.data);
        
        // Using Mock for now
        setData({
          exchanges: mockExchanges,
          offers: mockMyServices,
          matches: mockSuggestions
        });
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen font-bold text-gray-400 animate-pulse">Loading Exchange...</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Dashboard</h2>
            <StatusOverview stats={data.exchanges} />
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                Active Exchanges
                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">Live</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {data.exchanges.map(ex => <ActiveExchangeCard key={ex.id} exchange={ex} />)}
              </div>
            </div>

            <SmartMatches suggestions={data.matches} />
          </div>

          <div className="lg:col-span-4 space-y-8">
             <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-4xl p-8 text-white shadow-2xl">
               <p className="text-xs uppercase font-bold text-slate-400 mb-1">Your Trust Score</p>
               <h3 className="text-4xl font-black mb-4">{currentUser.trustScore}%</h3>
               <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                 <div className="bg-green-500 h-full" style={{ width: `${currentUser.trustScore}%` }}></div>
               </div>
               <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                 Complete more trades to reach 100% and unlock "Elite Trader" status.
               </p>
             </div>
             
             <MyOffers offers={data.offers} />
          </div>

        </div>
      </main>
    </div>
  );
}