import React from 'react';
import { Shield, Users, Zap, Heart } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      title: "No Money Needed",
      desc: "Trade skills directly without any cash transactions. Perfect for talented youth with limited funds.",
      icon: <Shield className="size-12 text-red-600" />
    },
    {
      title: "Community Chat",
      desc: "Connect and communicate with other members through our integrated community chat feature.",
      icon: <Users className="size-12 text-green-600" />
    },
    {
      title: "Smart Matching",
      desc: "Our platform intelligently matches you with users who need what you offer and have what you need.",
      icon: <Zap className="size-12 text-red-600" />
    },
    {
      title: "Build Reputation",
      desc: "Rating and review system ensures quality exchanges and helps you build a trusted profile.",
      icon: <Heart className="size-12 text-green-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Barter System?</h2>
          <p className="text-gray-500 text-lg italic font-medium">Built for the talented youth of Oyo State</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 border border-transparent hover:border-gray-100 transition-all duration-300">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;