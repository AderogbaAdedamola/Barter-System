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

  // Handler for image fallback
  const handleImageError = (e) => {
    e.target.src = "../assets/avatar.png"; // Path to your local fallback
    e.target.onerror = null; // Prevents infinite loops if fallback also fails
  };

  return (
    <section className="py-24 bg-gray-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Success Stories
          </h2>
          <div className="w-24 h-1 linear-to-r from-red-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={s.avatar} 
                    alt={s.name} 
                    onError={handleImageError}
                    className="w-14 h-14 rounded-full bg-gray-200 object-cover border-2 border-white shadow-sm" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none mb-1">{s.name}</h4>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{s.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed relative">
                  <span className="text-4xl text-red-200 absolute -top-4 -left-2 font-serif">“</span>
                  {s.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;