import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, PlusCircle, MessageSquare, User } from 'lucide-react';

export default function MobileNavbar() {
  const navItems = [
    { to: "/home", icon: <Home className="size-6" />, label: "Home" },
    { to: "/browse", icon: <Search className="size-6" />, label: "Explore" },
    { to: "/post-service", icon: <PlusCircle className="size-6 text-red-600" />, label: "Post" },
    { to: "/chat", icon: <MessageSquare className="size-6" />, label: "Chat" },
    { to: "/profile/", icon: <User className="size-6" />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center md:hidden z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-red-600' : 'text-gray-400'
            }`
          }
        >
          {item.icon}
          <span className="text-[10px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}