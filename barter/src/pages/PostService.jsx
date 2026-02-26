import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, ArrowLeft, Zap, Target, MapPin, Clock } from 'lucide-react';
// Assuming categories comes from your mock data
const categories = [
  { name: 'Design', icon: '🎨' },
  { name: 'Development', icon: '💻' },
  { name: 'Marketing', icon: '📈' },
  { name: 'Writing', icon: '✍️' }
];

export default function PostService() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Design',
    skillOffered: '',
    skillNeeded: '',
    duration: '',
    location: 'Ibadan, Oyo',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Listing created! Your trade is now live.');
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. TOP NAV / HEADER */}
      <header className="h-20 border-b border-slate-50 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors">
          <ArrowLeft className="size-5" />
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="text-center">
          <h1 className="text-sm font-black uppercase tracking-tighter text-slate-900">New Listing</h1>
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-12">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECTION: THE BASICS */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Tell us about your skill.</h2>
              <p className="text-sm text-slate-500">The more detail, the better the match.</p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-slate-900 transition-colors">Service Title</label>
                <input
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Professional Logo Design for Your Brand"
                  className="w-full text-xl font-bold text-slate-900 border-b-2 border-slate-100 py-4 focus:border-slate-900 outline-none transition-all placeholder:text-slate-200"
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Category</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat.name})}
                      className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all border ${
                        formData.category === cat.name 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                        : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Full Description</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What exactly are you offering? Mention your experience and process..."
                  className="w-full bg-slate-50 rounded-3xl p-6 text-sm text-slate-700 outline-none focus:ring-4 focus:ring-slate-900/5 transition-all border border-transparent focus:border-slate-200"
                />
              </div>
            </div>
          </section>

          {/* SECTION: THE EXCHANGE (The "Barter" Card) */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
            <Zap className="absolute -right-4 -top-4 size-32 text-white/5 group-hover:rotate-12 transition-transform duration-500" />
            
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-400">The Exchange Protocol</h3>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">I am offering</label>
                <input 
                  name="skillOffered"
                  required
                  value={formData.skillOffered}
                  onChange={handleChange}
                  placeholder="Skill (e.g. Logo)"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:bg-white/20 outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">In return for</label>
                <input 
                  name="skillNeeded"
                  required
                  value={formData.skillNeeded}
                  onChange={handleChange}
                  placeholder="Skill (e.g. Web Dev)"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:bg-white/20 outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>
          </div>

          {/* SECTION: LOGISTICS */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock className="size-3" /> Estimated Time
              </label>
              <input 
                name="duration"
                required
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 5-7 days"
                className="w-full bg-slate-50 rounded-2xl px-5 py-4 text-sm outline-none border border-transparent focus:border-slate-200 focus:bg-white transition-all"
              />
            </div>

            <div className="group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <MapPin className="size-3" /> Primary Location
              </label>
              <select 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-slate-50 rounded-2xl px-5 py-4 text-sm outline-none border border-transparent focus:border-slate-200 focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="Ibadan, Oyo">Ibadan</option>
                <option value="Ogbomosho, Oyo">Ogbomosho</option>
                <option value="Oyo Town, Oyo">Oyo Town</option>
                <option value="Iseyin, Oyo">Iseyin</option>
              </select>
            </div>
          </div>

          {/* SUBMIT AREA */}
          <div className="pt-10">
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3"
            >
              <PlusCircle className="size-5" />
              Publish Trade Listing
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">
              By publishing, you agree to the Barter.ng Community Safety Rules.
            </p>
          </div>

        </form>
      </main>
    </div>
  );
}