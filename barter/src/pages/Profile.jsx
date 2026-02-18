import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck, MessageCircle, Edit3, Globe, Award, Zap } from 'lucide-react';
import { mockUsers, mockServices } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';

export default function ProfilePage() {
  const { id } = useParams();
  
  // Real-time fetch simulation (Commented for now)
  // const [user, setUser] = useState(null);
  // useEffect(() => { axios.get(`/api/users/${id}`).then(res => setUser(res.data)) }, [id]);

  const user = mockUsers.find((u) => u.id === id);
  const userServices = mockServices.filter((s) => s.userId === id);
  const isOwnProfile = true
  // const isOwnProfile = id === 'u-current' || id === '1'; 

  if (!user) return <div className="p-20 text-center font-bold text-gray-400">User not found</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Profile Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            
            <div className="relative mx-auto md:mx-0">
              <div className="size-40 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-2xl border-4 border-white shadow-lg">
                <ShieldCheck className="size-6" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-black text-slate-900 mb-2">{user.name}</h1>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="size-4 text-red-500" /> {user.location}</span>
                    <span className="flex items-center gap-1"><Globe className="size-4 text-blue-500" /> Oyo State Youth Member</span>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-center">
                  {isOwnProfile ? (
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                      <Edit3 className="size-4" /> Edit Profile
                    </button>
                  ) : (
                    <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">
                      <MessageCircle className="size-4" /> Start Exchange
                    </button>
                  )}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-2xl text-lg mb-8">
                {user.bio || "Passionate creator dedicated to community skill-sharing in Oyo State."}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-amber-50 border border-amber-100 px-4 py-2 rounded-xl flex items-center gap-2">
                  <Star className="size-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-slate-900">{user.rating} Rating</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl flex items-center gap-2">
                  <Zap className="size-4 text-blue-500 fill-blue-500" />
                  <span className="font-bold text-slate-900">{user.completedSwaps} Swaps</span>
                </div>
                <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-xl flex items-center gap-2">
                  <Award className="size-4 text-green-500" />
                  <span className="font-bold text-slate-900">99% Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Detailed Skills & Inventory Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-4xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Expertise Stack</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-3">Offering</p>
                  <div className="flex flex-wrap gap-2">
                    {user.skillsOffered.map(skill => (
                      <span key={skill} className="bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold border border-red-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-50"></div>

                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-3">Seeking in Return</p>
                  <div className="flex flex-wrap gap-2">
                    {user.skillsNeeded.map(skill => (
                      <span key={skill} className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-red-600 to-red-700 rounded-4xl p-8 text-white shadow-xl shadow-red-100">
              <h4 className="font-bold text-lg mb-2">Community Rank</h4>
              <p className="text-red-100 text-sm mb-4">Silver Tier Trader</p>
              <div className="flex gap-2">
                <div className="bg-white/20 p-2 rounded-lg"><Award className="size-5" /></div>
                <div className="bg-white/20 p-2 rounded-lg"><ShieldCheck className="size-5" /></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900">
                {isOwnProfile ? 'My Marketplace' : `${user.name.split(' ')[0]}'s Services`}
              </h2>
              {isOwnProfile && (
                <Link to="/post-service" className="bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-red-100 transition">
                  + Create New Listing
                </Link>
              )}
            </div>

            {userServices.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {userServices.map((service) => (
                  <div key={service.id} className="hover:-translate-y-1 transition-transform">
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 p-16 text-center">
                 <div className="bg-slate-50 size-20 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                    <Zap className="size-10" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900">No active listings</h3>
                 <p className="text-slate-500 mt-2">Check back later or suggest a trade via message.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}