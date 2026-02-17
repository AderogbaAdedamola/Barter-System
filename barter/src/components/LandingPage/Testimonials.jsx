import React from 'react';

const Testimonials = () => {
  const stories = [
    {
      name: "Adewale J.",
      role: "Graphic Designer",
      quote: "I traded my design skills for web development lessons. Now I can build complete websites! This platform changed my career.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adewale"
    },
    {
      name: "Blessing O.",
      role: "Developer",
      quote: "Amazing community! I've made connections and learned so many new skills without spending a kobo. Highly recommend!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing"
    },
    {
      name: "Chidinma N.",
      role: "Fashion Designer",
      quote: "I've exchanged tailoring services for photography and marketing help. My business has grown thanks to Barter System!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chidinma"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {stories.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <img src={s.avatar} alt={s.name} className="w-14 h-14 rounded-full bg-gray-100" />
              <div>
                <h4 className="font-bold text-slate-900">{s.name}</h4>
                <p className="text-xs text-gray-500">{s.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">"{s.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials