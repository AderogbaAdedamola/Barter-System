import React, { useState } from 'react';
import { Search, SlidersHorizontal, PlusCircle, Sparkles } from 'lucide-react';
import { mockServices, categories } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { Link } from 'react-router-dom';

export default function BrowseServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = mockServices.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = 
      searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.skillOffered.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Header & Search Hub */}
      <header className="bg-white border-b border-slate-100 pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-50 text-red-600 p-1 rounded-md">
                  <Sparkles className="size-4 fill-current" />
                </span>
                <span className="text-sm font-black text-red-600 uppercase tracking-widest">Marketplace</span>
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Explore Skills</h1>
              <p className="text-slate-500 mt-2 text-lg font-medium">Find your next perfect exchange in Oyo State.</p>
            </div>
            
            {/* Desktop Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
              <input
                type="text"
                placeholder="What skill do you need?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-red-500/20 focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
              />
            </div>
          </div>

          {/* 2. Category Ticker */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-2 pr-4 border-r border-slate-100 mr-2">
              <SlidersHorizontal className="size-5 text-slate-400" />
              <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Filters</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105'
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-red-200 hover:text-red-600'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 3. Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">
            Showing {filteredServices.length} Results
          </h2>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-sm">
            <div className="bg-slate-50 size-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="size-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">No matches found... yet!</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Can't find the skill you need? Post what you are offering and let the right partner find you.
            </p>
            <Link 
              to="/post-service" 
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition transform active:scale-95 shadow-xl shadow-red-100"
            >
              <PlusCircle className="size-5" /> Post Your Request
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}