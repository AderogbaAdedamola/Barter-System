const HowItWorks = () => (
  <section className="py-20 bg-gray-50 px-6 text-center">
    <h2 className="text-4xl font-bold text-slate-900 mb-2">How It Works</h2>
    <p className="text-gray-500 mb-16">Start exchanging skills in three simple steps</p>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      {[
        { step: '1', title: 'Create Profile', desc: 'Sign up and list your skills—what you can offer and what you need.', bg: 'bg-red-600' },
        { step: '2', title: 'Find Matches', desc: 'Browse services and connect with people whose needs align with your skills.', bg: 'bg-green-600' },
        { step: '3', title: 'Exchange Skills', desc: 'Coordinate through our community chat, exchange services, and rate each other.', bg: 'bg-gradient-to-br from-red-500 to-green-500' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`${item.bg} w-16 h-16 rounded-2xl text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg`}>
            {item.step}
          </div>
          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default HowItWorks