import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  ShieldCheck, 
  Bell, 
  Lock, 
  CreditCard, 
  ChevronRight, 
  ArrowLeft,
  Camera,
  LogOut
} from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Account');

  const menuItems = [
    { name: 'Account', icon: <User className="size-5" /> },
    { name: 'Security', icon: <Lock className="size-5" /> },
    { name: 'Notifications', icon: <Bell className="size-5" /> },
    { name: 'Verification', icon: <ShieldCheck className="size-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ArrowLeft className="size-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Settings</h1>
            <p className="text-slate-500 font-medium text-sm">Manage your profile and trading preferences</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-2">
            <div className="bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === item.name 
                      ? 'bg-red-50 text-red-600 shadow-sm' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`${activeTab === item.name ? 'text-red-600' : 'text-slate-400'}`}>
                      {item.icon}
                    </span>
                    <span className="font-bold text-sm">{item.name}</span>
                  </div>
                  <ChevronRight className={`size-4 transition-transform ${activeTab === item.name ? 'translate-x-1' : ''}`} />
                </button>
              ))}
              
              <div className="h-px bg-slate-50 my-4 mx-2"></div>
              
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm">
                <LogOut className="size-5" />
                Log Out
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-500">
              
              {/* Conditional Content based on Active Tab */}
              {activeTab === 'Account' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative group">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Adewale" 
                        className="size-24 rounded-[2rem] object-cover ring-4 ring-slate-50" 
                        alt="Avatar" 
                      />
                      <button className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
                        <Camera className="size-4" />
                      </button>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-slate-900">Profile Picture</h3>
                      <p className="text-slate-500 text-sm">PNG, JPG or GIF. Max 5MB.</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="Adewale Johnson" 
                        className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500/20 font-bold text-slate-900" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="adewale.j@oyo.gov.ng" 
                        className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500/20 font-bold text-slate-900" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Public Bio</label>
                    <textarea 
                      rows="4"
                      className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500/20 font-medium text-slate-600 leading-relaxed"
                      defaultValue="Passionate creator dedicated to community skill-sharing in Oyo State."
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-xl shadow-slate-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'Security' && (
                <div className="flex flex-col items-center py-20 text-center">
                  <Lock className="size-16 text-slate-100 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900">Security Settings</h3>
                  <p className="text-slate-500 max-w-xs mt-2">Manage your password and two-factor authentication.</p>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}