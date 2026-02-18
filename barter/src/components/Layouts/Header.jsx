import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  MessageCircle, 
  ChevronDown, 
  PlusSquare, 
  User, 
  Settings, 
  LogOut, 
  Users 
} from 'lucide-react';

export default function Header({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="size-8 bg-linear-to-br from-red-600 to-green-600 rounded-full flex items-center justify-center">
              <Users className="size-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Barter System</span>
          </Link>
          
          <div className="relative hidden md:block group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-red-500" />
            <input 
              onFocus={() => navigate('/browse')}
              className="bg-gray-50 border-none rounded-full py-2 pl-10 pr-4 text-sm w-80 focus:ring-2 focus:ring-red-500/20 transition-all cursor-pointer"
              placeholder="Search skills..."
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Link 
            to="/post-service" 
            className="hidden sm:flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition"
          >
            <PlusSquare className="size-4" /> Post Skill
          </Link>

          <Link to="/chat" className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative">
            <MessageCircle className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-green-500 rounded-full border-2 border-white"></span>
          </Link>

          <Link to="/notifications" className="p-2 text-gray-500 hover:bg-gray-50 rounded-full">
            <Bell className="size-5" />
          </Link>

          <div className="h-6 w-px bg-gray-200 mx-2 hidden sm:block"></div>

          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="relative">
                <img 
                  src={user.avatar} 
                  className="size-9 rounded-full border-2 border-transparent transition-all object-cover" 
                  alt="Profile" 
                />
              </div>
              
              <ChevronDown 
                className={`size-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-100 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 border-b border-gray-50 mb-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Account</p>
                </div>
                
                <button 
                  onClick={() => handleNavigation(`/profile/${user.id}`)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-gray-50 transition-colors"
                >
                  <User className="size-4 text-slate-400" /> Profile
                </button>

                <button 
                  onClick={() => handleNavigation('/settings')}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="size-4 text-slate-400" /> Settings
                </button>

                <div className="h-px bg-gray-50 my-1 mx-2"></div>

                <button 
                  onClick={() => handleNavigation('/login')}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="size-4" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}