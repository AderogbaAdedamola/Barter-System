import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Profile",
      desc: "Sign up and list your skills—what you can offer and what you need. Build your community reputation.",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Find Matches",
      desc: "Browse services and connect with people whose needs align with your skills through our smart matching system.",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Exchange Skills",
      desc: "Coordinate through our community chat, exchange services, and rate each other to build trust.",
      gradient: "from-red-500 to-green-600"
    }
  ];

  return (
    <section id='#about' className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">How It Works</h2>
        <p className="text-lg text-gray-500 mb-16">Start exchanging skills in three simple steps</p>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className={`bg-linear-to-br ${step.gradient} w-20 h-20 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;