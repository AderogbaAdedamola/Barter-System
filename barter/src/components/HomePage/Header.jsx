import React from 'react';
import { Search, Bell, MessageCircle, ChevronDown } from 'lucide-react';

const DashboardHeader = ({ user }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-red-600 tracking-tighter italic">BARTER.NG</h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input 
            className="bg-gray-50 border-none rounded-full py-2 pl-10 pr-4 text-sm w-80 focus:ring-2 focus:ring-red-500/20 transition-all"
            placeholder="Search skills, users, or items..."
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative">
          <MessageCircle className="size-5" />
          <span className="absolute top-1 right-1 size-2 bg-green-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative">
          <Bell className="size-5" />
          <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-gray-100 cursor-pointer">
          <img src={user.avatar} className="size-8 rounded-full border border-gray-200" alt="me" />
          <ChevronDown className="size-4 text-gray-400" />
        </div>
      </div>
    </div>
  </nav>
);