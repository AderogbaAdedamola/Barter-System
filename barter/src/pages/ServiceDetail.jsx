import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Clock, ArrowRightLeft, 
  Star, MessageCircle, Calendar, ShieldCheck, 
  Share2, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { mockServices, mockUsers } from '../data/mockData';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [message, setMessage] = useState('');

  const service = mockServices.find((s) => s.id === id);
  const user = mockUsers.find((u) => u.id === service?.userId);

  if (!service || !user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6">
        <AlertCircle className="size-16 text-slate-200 mb-4" />
        <h2 className="text-2xl font-black text-slate-900 mb-2">Service not found</h2>
        <Link to="/browse" className="text-red-600 font-bold hover:underline">
          Return to Marketplace
        </Link>
      </div>
    );
  }

  const handleRequestSwap = () => {
    setShowRequestModal(false);
    alert('Request Sent! Blessing has been notified.');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-7xl mx-auto px-1 py-2 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-all group"
        >
          <div className="bg-white p-2 rounded-xl border border-slate-100 group-hover:border-red-200 shadow-sm">
            <ArrowLeft className="size-5" />
          </div>
          <span className="hidden sm:inline"></span>
        </button>
        <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-red-600 transition-colors">
          <Share2 className="size-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100">
                  {service.category}
                </span>
                <span className="text-slate-300 text-xs font-medium">•</span>
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="size-3" /> Posted 2 days ago
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {service.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-slate-500 font-bold text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-red-500" /> {service.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-blue-500" /> {service.duration}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white mb-10 relative overflow-hidden">
                <ArrowRightLeft className="absolute -right-6 -bottom-6 size-40 text-white/5 rotate-12" />
                
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-red-400 mb-6 flex items-center gap-2">
                  <div className="size-2 bg-red-500 rounded-full animate-pulse" /> The Barter Contract
                </h3>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-1">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Offering</p>
                    <p className="text-2xl font-bold">{service.skillOffered}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Seeking</p>
                    <p className="text-2xl font-bold text-green-400">{service.skillNeeded}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-black text-slate-900 mb-4">The Scope</h3>
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm sticky top-28">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Service Provider</h3>
              
              <Link to={`/profile/${user.id}`} className="flex items-center gap-4 mb-8 group">
                <div className="relative">
                  <img src={user.avatar} className="size-16 rounded-[1.5rem] object-cover" alt="" />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-lg border-2 border-white">
                    <ShieldCheck className="size-3" />
                  </div>
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg group-hover:text-red-600 transition-colors">{user.name}</p>
                  <p className="text-slate-400 text-xs font-bold tracking-tighter">Verified</p>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <div className="flex items-center justify-center text-amber-500 gap-1 mb-1">
                    <Star className="size-4 fill-current" />
                    <span className="font-black text-slate-900">{user.rating}</span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl text-center">
                  <p className="font-black text-slate-900 mb-1">{user.completedSwaps}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Swaps</p>
                </div>
              </div>

              <button
                onClick={() => setShowRequestModal(true)}
                className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <MessageCircle className="size-5" />
                Propose Swap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Request Modal (Refined) */}
      {showRequestModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] max-w-md w-full p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Send Proposal</h2>
            <p className="text-slate-500 font-medium mb-6">
              Explain to {user.name.split(' ')[0]} why you're the perfect swap partner.
            </p>
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Start with a friendly intro..."
              className="w-full bg-slate-50 border-none rounded-2xl p-4 min-h-[160px] focus:ring-4 focus:ring-red-500/10 mb-6 font-medium text-slate-600 outline-none"
            />
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowRequestModal(false)}
                className="flex-1 py-4 font-bold text-slate-400 hover:text-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestSwap}
                disabled={!message.trim()}
                className="flex-[2] py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 disabled:bg-slate-200 transition-all"
              >
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}