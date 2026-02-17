import React from 'react';
import { ShieldCheck, MessageSquare, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "No Money Needed",
      desc: "Trade skills directly without any cash transactions. Perfect for talented youth with limited funds.",
      icon: <ShieldCheck className="text-red-600 w-8 h-8" />,
    },
    {
      title: "Community Chat",
      desc: "Connect and communicate with other members through our integrated community chat feature.",
      icon: <MessageSquare className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Smart Matching",
      desc: "Our platform intelligently matches you with users who need what you offer and have what you need.",
      icon: <Zap className="text-red-600 w-8 h-8" />,
    },
    {
      title: "Build Reputation",
      desc: "Rating and review system ensures quality exchanges and helps you build a trusted profile.",
      icon: <Heart className="text-green-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Barter System?</h2>
        <p className="text-gray-500">Built for the talented youth of Oyo State</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
            <div className="mb-6">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features