import React from 'react';
import { Search, Bell, MessageCircle, ChevronDown, PlusSquare } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardHeader = ({ user }) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Search */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-red-600 tracking-tighter italic">BARTER.NG</Link>
          
          <div className="relative hidden md:block group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-red-500" />
            <input 
              onFocus={() => navigate('/browse')} // Trigger navigation to Search/Browse page
              className="bg-gray-50 border-none rounded-full py-2 pl-10 pr-4 text-sm w-80 focus:ring-2 focus:ring-red-500/20 transition-all cursor-pointer"
              placeholder="Search skills (e.g., Coding, Tailoring)..."
            />
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link 
            to="/post-service" 
            className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition"
          >
            <PlusSquare className="size-4" /> Post Skill
          </Link>

          <div className="h-6 w-px bg-gray-200 mx-2 hidden sm:block"></div>

          <Link to="/chat" className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative">
            <MessageCircle className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-green-500 rounded-full border-2 border-white"></span>
          </Link>

          <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full">
            <Bell className="size-5" />
          </button>

          <Link to={`/profile/${user.id}`} className="flex items-center gap-2 pl-2 cursor-pointer group">
            <img src={user.avatar} className="size-9 rounded-full border-2 border-transparent group-hover:border-red-500 transition-all" alt="Profile" />
            <ChevronDown className="size-4 text-gray-400" />
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default DashboardHeader